var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

function playSound(id, loop) {
    return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}

function setupCJS(data, enable_voice, return_url) {
    $('body').prepend('<div id="animation_container" style="background-color:rgba(0, 0, 0, 0); width:100%; height: 1500px position: relative"><canvas id="canvas" width="100%" height="" style="position: absolute; display: block; background-color:rgba(0, 0, 0, 0);"></canvas><div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:240px; height:310px; position: absolute; left: 0px; top: 0px; display: block;"></div></div>');
    $('body').css('margin', '0px');
    $('body').css('height', window.innerHeight);
    
    window.file_name = data.composition_name;
    window.dir_name = data.image_base_path;
    window.im_cjs.voice_flag = enable_voice;
    window.im_cjs.jump_url = return_url;
    
    if (data.voices)
        window.voice_manifest = data.voices;
    
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    
    var comp = AdobeAn.getComposition(window.file_name);
    var lib = comp.getLibrary();
    var new_manifest = [];
    for (var i = 0, len = lib.properties.manifest.length; i < len; i++) {
        new_manifest[i] = {
            'type': 'image',
            'src': "../idolmaster/" + window.dir_name + lib.properties.manifest[i].src,
            'id': lib.properties.manifest[i].id
        }
    }
    
    createjs.MotionGuidePlugin.install();
    var loader = new createjs.LoadQueue(false);
    loader.installPlugin(createjs.Sound);
    loader.addEventListener("fileload", function (evt) {
        handleFileLoad(evt, comp)
    });
    
    loader.addEventListener("complete", function (evt) {
        handleComplete(evt, comp)
    });
    
    var lib = comp.getLibrary();
    loader.loadManifest(new_manifest);
}

function handleFileLoad(evt, comp) {
    var images = comp.getImages();
    if (evt && (evt.item.type == "image")) {
        images[evt.item.id] = evt.result;
    }
}

function handleComplete(evt, comp) {
    var lib = comp.getLibrary();
    var ss = comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    
    for (i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({
            "images": [queue.getResult(ssMetadata[i].name)],
            "frames": ssMetadata[i].frames
        })
    }
    
    exportRoot = new lib[window.file_name]();
    window._exportRoot = exportRoot;
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
        $('#mbga-pf-footer').hide();
    }
    
    makeResponsive(true, 'width', true, 1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}