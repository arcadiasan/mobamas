var isTouch = ('ontouchstart' in window);
var isSp = false;
if (isTouch === false)
    isSp = false;
else if (window.orientation === undefined)
    isSp = false;
else
    isSp = true;

var displayScaleValue = scaleSizeCheck();
var width = 240 * displayScaleValue * 2;
var marginLeft = widthMarginCheck(displayScaleValue);
var marginTop = topMarginCheck(displayScaleValue);

function setScrollTop() {
    if (document.documentElement) {
        document.documentElement.scrollTop = 0;
    }
    if (document.body) {
        document.body.scrollTop = 0
    }
}

window.addEventListener("DOMContentLoaded", function () {
    no_scroll();
    function no_scroll() {
        var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
        document.addEventListener(scroll_event, function (e) {
            e.preventDefault()
        }, {
            passive: false
        });
        document.addEventListener('touchstart', function (e) {
            setScrollTop()
        }, {
            passive: false
        });
        document.addEventListener('touchend', function (e) {
            setScrollTop()
        }, {
            passive: false
        });
        document.addEventListener('touchmove', function (e) {
            setScrollTop();
            e.preventDefault()
        }, {
            passive: false
        });
    }
});

function touchHandler(event) {
    event.preventDefault();
};

function redirect() {
    location.href = "../error.html";
};

function isFlash() {
    var container = document.getElementById("container");
    var children = container.childNodes;
    if (children.length < 1) {
        redirect();
    } else {
        clearTimeout(timerId);
    }
};

function scaleSizeCheck() {
    window.scrollTo(0, 1);
    myW = window.innerWidth;
    myH = window.innerHeight;
    scaleWidth = myW / 240;
    scaleHeight = myH / 320;
    if (myH > myW) {
        myS = scaleWidth;
    } else {
        myS = scaleHeight;
    }
    return myS;
};

function widthMarginCheck(scale) {
    if (scale < 0) {
        return 0;
    }
    baseW = 240;
    myW = window.innerWidth;
    size = baseW * scale;
    if ((myW - size) < 5) {
        marginL = 0;
    } else {
        marginL = Math.round((myW - size) / 2);
    }
    return marginL * 2;
}

function topMarginCheck(scale) {
    if (scale < 0) {
        return 0;
    }
    baseH = 320;
    myH = window.innerHeight;
    size = baseH * scale;
    if ((myH - size) < 5) {
        marginT = 0;
    } else {
        marginT = Math.round((myH - size) / 2);
    }
    return marginT * 2;
}

var skipNextUrl;
function skipBtnGenerate(url) {}

function SkipBtnDown(e) {
    var scale = scaleSizeCheck();
    var width_margin = widthMarginCheck(scale);
    var top_margin = topMarginCheck(scale);
    var client_width = window.innerWidth;
    var client_height = window.innerHeight;
    var click_x = e.clientX;
    var click_y = e.clientY;
    var swf_width = client_width - width_margin;
    var swf_height = 320 * scale;
    var btn_x = (width_margin / 2) + ((swf_width * 2) / 3);
    var btn_width = swf_width / 3;
    var btn_y = top_margin / 2;
    var btn_height = swf_height / 12;
    if (btn_x < click_x && click_x < (btn_x + btn_width) && btn_y < click_y && click_y < (btn_y + btn_height)) {
        document.location = skipNextUrl;
    }
}

function call_select_item(play_scene, select_num) {
    var use_item,
    max_use_flag;
    switch (select_num) {
    case "1":
        use_item = 0;
        max_use_flag = 0;
        break;
    case "2":
        use_item = 3;
        max_use_flag = 0;
        break;
    case "3":
        use_item = 3;
        max_use_flag = 1;
        break;
    case "4":
        use_item = 1;
        max_use_flag = 0;
        break;
    default:
        break;
    }
}

function nextJump(url) {
    location.href = url;
}

function setupPex(data, return_url) {
    var req = new XMLHttpRequest();
    req.open('GET', data.replacement_path, false);
    req.send();
    
    var replacements = JSON.parse(req.response);
    replacements["variables"]["1"]["url"] = return_url;
    
    var option = {
        enableButton: true,
        enableTouch: true,
        partialDraw: false,
        delayEval: false,
        operation: {
            lighter_tgt: "lighter"
        },
        width: width
    };
    
    var frame_count = 1;
    option["tagParseCallback"] = {
        1: function(tag) {
            frame_count++;
        },
        11: function (tag) {
            if (!data.replace_font) return;
            
            var texts = replacements["define_texts"];
            if (tag.id in texts) {
                var replace_data = texts[tag.id];
                var replace_text = replace_data["text"];
                
                tag.records[0].height = replace_data["height"];
                tag.records[0].x = replace_data["x"];
                tag.records[0].y = replace_data["y"];
                
                tag.records[0].glyphs = [];
                for (var i = 0; i < replace_text.length; i++) {
                    tag.records[0].glyphs.push({
                        index: fontB.codeTable.indexOf(replace_text.charCodeAt(i)),
                        advance: 320
                    });
                }
            }
        },
        12: function(tag) {
            var variables = replacements["variables"];
            for (var i = 0; i < tag.actions.length; i++) {
                action = tag.actions[i];
                if (action.code == 0x1D) {
                    if (tag.actions[i-2].code != 0x96)
                        continue
                    
                    if (tag.actions[i-1].code == 0x21) 
                        if (frame_count in variables && name in variables[frame_count])
                            tag.actions[i-2].values[0] = variables[frame_count][name];
                        
                    name = tag.actions[i-2].values[0];
                    if (frame_count in variables && name in variables[frame_count]){ 
                        tag.actions[i-1].values[0] = variables[frame_count][name];
                    }
                }
            }
        },
        48: function (tag) {
            if (!data.replace_font) return;
            
            if (tag.fontName === "FOT-NewRodin Pro B") {
                fontB.id = tag.id;
                tag = fontB;
            } else if (tag.fontName === "FOT-NewRodin Pro DB") {
                fontDB.id = tag.id;
                tag = fontDB;
            } else if (tag.fontName === "_ゴシック") {
                fontGothic.id = tag.id;
                tag = fontGothic;
            }
        }
    }
    
    var pex = new Pex(data.swf_path, "container", option);
    pex.getAPI().ready(function () {
        setScrollTop();
    });
    
    var pexApi = pex.getAPI();
    window.pexApi = pexApi;
    
    (function ($) {
        $.fn.pexConsole = function () {
            if (globalNextLabel) {
                pexApi.gotoFrame('/', sceneLabel);
                globalNextLabel = 0;
            }
        };
        $.fn.pexBtacquisition = function (mcName) {
            var obj = {
                x: pexApi.getVariable(mcName, 'w'),
                y: pexApi.getVariable(mcName, 'h'),
                poX: pexApi.getVariable(mcName, 'x'),
                poY: pexApi.getVariable(mcName, 'y'),
                label: pexApi.getVariable(mcName, 'scene'),
                voicePath: pexApi.getVariable(mcName, 'voicePath')
            };
            return [obj.x, obj.y, obj.poX, obj.poY, obj.label, obj.voicePath];
        };
        $.fn.pexGotoFrame = function (mcName, palam) {
            pexApi.gotoFrame(mcName, palam);
        };
        $.fn.pexCallActions = function (label) {
            pexApi.callActions('/', label);
        };
        $.fn.pexSetVaris = function (name, h) {
            pexApi.setVariable(name, 'touched_x', h.x);
            pexApi.setVariable(name, 'touched_y', h.y);
        };
    })(jQuery);
    timerId = setTimeout("isFlash()", 60000);
};

function setupSWFContainer(enable_voice) {    
    $('body').css('height', '100%');
    if (enable_voice) $('body').append('<a href="#" id="voiceTouch"></a>');
    $('body').append('<div id="container"></div>');
    $('body').prepend('<script>var soundFlag = ' + (enable_voice ? '1' : '0') + ';\nvar white_flag = 0;\nvarvote_simple_swf_flg = 0;</script>');
    
    var container = document.getElementById("container");
    container.setAttribute("style", "margin-left:" + (marginLeft) + "px");
    container.style.marginTop = (marginTop) + "px";
    container.style.zoom = "50%";
    container.style.height = (window.outerHeight * 2 - marginTop) + "px";
};