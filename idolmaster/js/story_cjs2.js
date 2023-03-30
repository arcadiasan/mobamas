var canvas, stage, anim_container, dom_overlay_container, fnStartAnimation, flag;

var effect_list, _effect_cnt;
var loadCount = 0;
var lib;
var lib_supporter = [];
var _child_num = [];
var comp_eff_supporter = [];

function handleFileLoadComplete(event) {
    var result = event.result;
}

function handleComplete() {
    window.js_load_comp = true;
}

function setupCJS2(data, enable_voice, return_url) {
    $('body').prepend('<div id="animation_container" style="background-color:rgba(0, 0, 0, 0); width:100%; height: 1500px position: relative"><canvas id="canvas" width="100%" height="" style="position: absolute; display: block; background-color:rgba(0, 0, 0, 0);"></canvas><div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:240px; height:310px; position: absolute; left: 0px; top: 0px; display: block;"></div></div>');
    $('body').css('margin', '0px');
    $('body').css('height', window.innerHeight);
    
    window.exportRoot;

    effect_list = data.effect_list;
    _effect_cnt = data.effect_list.length;
    
    if (data.voice_data) {
        window.voice_manifest = data.voice_data;
        
        window._wrap_flag = 0;
        window._ua = window.navigator.userAgent;
        if (_ua.indexOf('iPhone') > 0) {
            window._wrap_flag = 1;
        } else if (_ua.indexOf('Android') && _ua.indexOf('6.0.1')) {
            window._wrap_flag = 2;
        }
    }
    
    var load_js = new createjs.LoadQueue();
    load_js.setMaxConnections(6);
    load_js.addEventListener("fileload", handleFileLoadComplete);
    load_js.addEventListener("complete", handleComplete);
    load_js.loadManifest(window.js_load_files);
    
    window.im_cjs = window.im_cjs || {};
    window.replace_images = [];
    
    window.file_name = data.file_name;
    window.dir_name = data.dir_name;
    window.im_cjs = data.cjs_data;
    
    window.chara_replace_images = {};
    for (i = 1; i <= 20; i++) {
        for (n = 1; n <= 13; n++) {
            window.chara_replace_images[('c' + i + '_face' + n)] = 'image_sp/cjs/chara/no_face.png';
        }
    }
    window.chara_replace_images = Object.assign(window.chara_replace_images, data.chara_replace_images);
    window.bg_replace_images = data.bg_replace_images;
    window.op_bg_replace_images = data.op_bg_replace_images;
    
    window.im_cjs.bg_frame_info = data.bg_frame_info;
    window.im_cjs.effect_frame_info = data.effect_frame_info;
    window.im_cjs.chara_frame_info = data.chara_frame_info;
    
    window.im_cjs.title_name = data.title_name || 'no_title';
    window.im_cjs.event_type = data.event_type || 0;
    window.im_cjs.chara_num = data.chara_num;
    
    window.im_cjs.jump_url = return_url;
    window.im_cjs.voice_flag = enable_voice ? 1 : 0;
    
    window.init = function init() {
        $('body').css('height', window.innerHeight);
        
        canvas = document.getElementById("canvas");
        anim_container = document.getElementById("animation_container");
        dom_overlay_container = document.getElementById("dom_overlay_container");
        
        var comp = AdobeAn.getComposition(window.file_name);
        lib = comp.getLibrary();
        
        for (var n = 0, len = _effect_cnt; n < len; n++) {
            comp_eff_supporter[n] = AdobeAn.getComposition('eff_' + effect_list[n]);
            if (comp_eff_supporter[n]) {
                lib_supporter[n] = comp_eff_supporter[n].getLibrary();
            }
        }
        
        createjs.MotionGuidePlugin.install();
        var loader = new createjs.LoadQueue(false);
        loader.setMaxConnections(6);
        loader.installPlugin(createjs.Sound);
        loader.addEventListener("fileload", function (evt) {
            handleFileLoad(evt, comp)
        });
        loader.addEventListener("complete", function (evt) {
            handleComplete(evt, comp)
        });
        
        for (let i = 0; i < _effect_cnt; i++) {
            if (comp_eff_supporter[i]) {
                loader.addEventListener("fileload", function (evt) {
                    handleFileLoad(evt, comp_eff_supporter[i])
                });
                loader.addEventListener("complete", function (evt) {
                    handleComplete(evt, comp_eff_supporter[i])
                });
            }
        }
        
        
        var new_manifest = [];
        for (var j = 0, len = lib.properties.manifest.length; j < len; j++) {
            var _img_path = window.dir_name + lib.properties.manifest[j].src;
            var _prefix = lib.properties.manifest[j].id.replace(window.file_name + '_', '');
            if (window.bg_replace_images[_prefix]) {
                _img_path = 'image_sp/event_flash/story/bg/bg' + window.bg_replace_images[_prefix] + '_wide.jpg';
            }
            
            if (window.op_bg_replace_images[_prefix]) {
                _img_path = 'image_sp/event_flash/story/bg/bg' + window.op_bg_replace_images[_prefix] + '.jpg';
            }
            
            if (window.chara_replace_images[_prefix]) {
                _img_path = window.chara_replace_images[_prefix];
            }
            
            if (window.replace_images[_prefix]) {
                _img_path = window.replace_images[_prefix];
            }
            
            new_manifest[j] = {
                'type': 'image',
                'src': "../idolmaster/" + _img_path,
                'id': lib.properties.manifest[j].id,
                'crossOrigin': 'Anonymous'
            }
        }
        
        loader.loadManifest(new_manifest);
    }
    init();
}

function handleFileLoad(evt, comp) {
    var images = comp.getImages();
    if (evt && (evt.item.type == "image")) {
        images[evt.item.id] = evt.result;
    }
}

function handleComplete(evt, comp) {
    loadCount++;
    if (loadCount < (_child_num.length + _effect_cnt)) {
        return;
    }
    if (flag) {
        return;
    }
    flag = true;
    var _eff_i = 0;
    var _chara_i = 0;
    for (var i in lib_supporter) {
        var _no = parseInt(i) + 1;
        if (lib_supporter[i] && (lib_supporter[i].properties.id.match(/eff_/) && lib_supporter[i].properties.id.match(/eff_/).length > 0)) {
            _eff_i++;
            lib['replace_effect' + _eff_i] = lib_supporter[i].replace;
        }
    }
    exportRoot = new lib[window.file_name]();
    /* -------------------------------------------- */
    stage = new lib.Stage(canvas);
    fnStartAnimation = function () {
        stage.addChild(exportRoot);
        createjs.Ticker.framerate = 12;
        createjs.Ticker.addEventListener("tick", stage);
    }
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW,
        lastH,
        lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        function resizeCanvas() {
            var w = lib.properties.width,
            h = lib.properties.height;
            var iw = window.innerWidth,
            ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1,
            xRatio = iw / w,
            yRatio = ih / h,
            sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                } else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w * pRatio * sRatio;
            canvas.height = h * pRatio * sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
            $('#animation_container').css('margin-top', (window.innerHeight - $('#animation_container').innerHeight()) / 2 + "px");
        }
        resizeCanvas();
    }
    makeResponsive(true, 'width', true, 1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
    $('.loading').hide();
    exportRoot.skip_btn.visible = false;
}

function playSound(id, loop) {
    return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}

var keyup_func = function (e) {
    $(window).off('keydown');
    if (e.keyCode == 13) {
        if (typeof exportRoot.toggle_flag === 'undefined' || exportRoot.toggle_flag == 'in') {
            if ((exportRoot.scene_list.length - 1) <= exportRoot.story_point) {
                console.log("end_story");
                if (exportRoot.event_type == 0 || exportRoot.event_type == 1) {
                    window.location.href = exportRoot.back_url;
                    return;
                }
                if (exportRoot.scene_name == 'end') {
                    window.location.href = exportRoot.back_url;
                } else {
                    exportRoot.gotoAndPlay('end');
                }
                exportRoot.scene_name = 'end';
            } else {
                switch (exportRoot.scene_name) {
                case 'title':
                    exportRoot.scene_name = 'main';
                    exportRoot.gotoAndStop('main');
                    exportRoot._u.scene_init();
                    if (window.im_cjs.voice_flag) {
                        window.im_cjs.voice_play();
                        window.im_cjs.load_voice("scene" + (exportRoot.story_point + 2));
                        exportRoot.loader.visible = true;
                        exportRoot.addEventListener('tick', exportRoot._u._ticker);
                        exportRoot.stop();
                    }
                    e.stopPropagation();
                    break;
                case 'main':
                    exportRoot.story_point++;
                    for (var i = 0; i < 7; i++) {
                        if (exportRoot.chara_display_info[exportRoot._all_pos[i]]) {
                            exportRoot['effect_target_' + exportRoot._all_pos[i]].visible = false;
                        }
                    }
                    exportRoot._u.scene_init();
                    if (window.im_cjs.voice_flag) {
                        window.im_cjs.voice_play();
                        if (exportRoot.scene_list.length > (exportRoot.story_point + 1)) {
                            window.im_cjs.load_voice("scene" + (exportRoot.story_point + 2));
                            exportRoot.loader.visible = true;
                            exportRoot.addEventListener('tick', exportRoot._u._ticker);
                            exportRoot.stop();
                        }
                    }
                    e.stopPropagation();
                    break;
                }
            }
        } else {
            exportRoot.toggle_flag = 'in';
            exportRoot.win.gotoAndPlay('in');
        }
    }
    $(window).off('keydown');
    setTimeout(function () {
        $(window).one('keydown', keyup_func);
    }, 300);
    return false;
};

$(window).one('keydown', keyup_func);