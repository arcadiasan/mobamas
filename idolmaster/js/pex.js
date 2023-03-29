"Pex: https://github.com/PexJS/PexJS"
"version: 72e33c9(sjis)"


/*//////////////////
  header.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


;(function() {
	'use strict';
	var PEX_VERSION = "1.2.0";

	var develop = true;

	var EngineLogD = function(error) {
		console.log.apply(console, Array.prototype.slice.apply(arguments));
	};
	var EngineLogE = function(error) {
		console.error.apply(console, Array.prototype.slice.apply(arguments));
		throw error;
	};
	var EngineLogW = function() {
		console.warn.apply(console, Array.prototype.slice.apply(arguments));
	};
	
	var Debug = function(obj1) {
		if(obj1.constructor == Array) {
			return [].concat(obj1);
		}
		var obj2 = {};
		for (var v in obj1) {
			obj2[v] = obj1[v];
		}
		return obj2;
	};
	


/*//////////////////
  option.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var defaultOption = {
	shapeDetail: null,
	partialDraw: false,
	delayEval: true,
	fixRatio: true,
	width: null,
	height: null,
	transparent: false,
	fps: null,
	frameCallback: {},
    tagParseCallback: {},
	disableFrameSkip: false,
	cacheColoredImage : true,
	stopOnStart: false,
	enableButton: false,
	enableTouch: false,
	debug: false,
	suppressLog: {},
	origin: null,
	frameRect: null,
	compileAction: true,
	operation: {},
	cacheMaxShapeSize: null,
	cacheMaxTotalSize: null,
	onerror: null,
	enableStyleText: false,
	_enableWorkaroundForUnicolor: false,  // experimental
	colorLevels: 16,
	swfBinary: null,
	forceDisableBlendMode: false // experimental
};


/*//////////////////
  define.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var TagDefine = {};
TagDefine.TypeTagEnd = 0;
TagDefine.TypeTagShowFrame = 1;
TagDefine.TypeTagDefineShape = 2;
TagDefine.TypeTagPlaceObject = 4;
TagDefine.TypeTagDefineBits = 6;
TagDefine.TypeTagDefineButton = 7;
TagDefine.TypeTagJPEGTables = 8;
TagDefine.TypeTagSetBackgroundColor = 9;
TagDefine.TypeTagDefineFont = 10;
TagDefine.TypeTagDefineText = 11;
TagDefine.TypeTagDoAction = 12;
TagDefine.TypeTagDefineBitsLossless = 20;
TagDefine.TypeTagDefineBitsJPEG2 = 21;
TagDefine.TypeTagDefineShape2 = 22;
TagDefine.TypeTagPlaceObject2 = 26;
TagDefine.TypeTagRemoveObject2 = 28;
TagDefine.TypeTagDefineShape3 = 32;
TagDefine.TypeTagDefineText2 = 33;
TagDefine.TypeTagDefineButton2 = 34;
TagDefine.TypeTagDefineBitsJPEG3 = 35;
TagDefine.TypeTagDefineBitsLossless2 = 36;
TagDefine.TypeTagDefineEditText = 37;
TagDefine.TypeTagDefineSprite = 39;
TagDefine.TypeTagFrameLabel = 43;
TagDefine.TypeTagDefineMorphShape = 46;
TagDefine.TypeTagDefineFont2 = 48;

var EdgeDefine = {};
EdgeDefine.TypeStraight = 0;
EdgeDefine.TypeCurve = 1;
EdgeDefine.TypeStyleChange = 2;

var FillStyleDefine = {};
FillStyleDefine.TypeSolidFill = 0;
FillStyleDefine.TypeLinearGradientFill = 0x10;
FillStyleDefine.TypeRadialGradientFill = 0x12;
//FillStyleDefine.TypeFocalRadialGradientFill = 0x13; swf8 or later only
FillStyleDefine.TypeRepeatingBitmapFill= 0x40;
FillStyleDefine.TypeClippedBitmapFill= 0x41;
FillStyleDefine.TypeNonSmoothedRepeatingBitmapFill= 0x42;
FillStyleDefine.TypeNonSmoothedClipedBitmapFill= 0x43;

var ActionDefine = {};
ActionDefine.TypeActionNextFrame = 0x04;
ActionDefine.TypeActionPreviousFrame = 0x05;
ActionDefine.TypeActionPlay = 0x06;
ActionDefine.TypeActionStop = 0x07;
ActionDefine.TypeActionToggleQuality = 0x08;
ActionDefine.TypeActionStopSounds = 0x09;
ActionDefine.TypeActionPop = 0x17;
ActionDefine.TypeActionAdd = 0x0A;
ActionDefine.TypeActionSubtract = 0x0B;
ActionDefine.TypeActionMultiply = 0x0C;
ActionDefine.TypeActionDivide = 0x0D;
ActionDefine.TypeActionEquals = 0x0E;
ActionDefine.TypeActionLess = 0x0F;
ActionDefine.TypeActionAnd = 0x10;
ActionDefine.TypeActionOr = 0x11;
ActionDefine.TypeActionNot = 0x12;
ActionDefine.TypeActionStringEquals = 0x13;
ActionDefine.TypeActionStringLength = 0x14;
ActionDefine.TypeActionStringExtract = 0x15;
ActionDefine.TypeActionToInteger = 0x18;
ActionDefine.TypeActionGetVariable = 0x1C;
ActionDefine.TypeActionSetVariable = 0x1D;
ActionDefine.TypeActionSetTarget2 = 0x20;
ActionDefine.TypeActionStringAdd = 0x21;
ActionDefine.TypeActionGetProperty = 0x22;
ActionDefine.TypeActionSetProperty = 0x23;
ActionDefine.TypeActionCloneSprite = 0x24;
ActionDefine.TypeActionRemoveSprite = 0x25;
ActionDefine.TypeActionTrace = 0x26;
ActionDefine.TypeActionStartDrag = 0x27;
ActionDefine.TypeActionEndDrag = 0x28;
ActionDefine.TypeActionStringLess = 0x29;
ActionDefine.TypeActionFSCommand2 = 0x2D;
ActionDefine.TypeActionRandomNumber = 0x30;
ActionDefine.TypeActionMBStringLength = 0x31;
ActionDefine.TypeActionCharToAscii = 0x32;
ActionDefine.TypeActionAsciiToChar = 0x33;
ActionDefine.TypeActionGetTime = 0x34;
ActionDefine.TypeActionMBStringExtract = 0x35;
ActionDefine.TypeActionMBCharToAscii = 0x36;
ActionDefine.TypeActionMBAsciiToChar = 0x37;
ActionDefine.TypeActionPushDuplicate = 0x4C;
ActionDefine.TypeActionGotoFrame = 0x81;
ActionDefine.TypeActionGetURL = 0x83;
ActionDefine.TypeActionWaitForFrame = 0x8A;
ActionDefine.TypeActionSetTarget = 0x8B;
ActionDefine.TypeActionGoToLabel = 0x8C;
ActionDefine.TypeActionPush = 0x96;
ActionDefine.TypeActionJump = 0x99;
ActionDefine.TypeActionIf = 0x9D;
ActionDefine.TypeActionCall = 0x9E;
ActionDefine.TypeActionGotoFrame2 = 0x9F;
ActionDefine.TypeActionWaitForFrame2 = 0x8D;
ActionDefine.TypeActionGetURL2 = 0x9A;


/*//////////////////
  util.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var isHankaku = (function func(c) {
	var code = c.charCodeAt(0);
	func.reg = func.reg || new RegExp("\u005B\uFF61\uFF62\uFF63\uFF64\uFF65\uFF66\uFF67\uFF68\uFF69\uFF6A\uFF6B\uFF6C\uFF6D\uFF6E\uFF6F\uFF70\uFF71\uFF72\uFF73\uFF74\uFF75\uFF76\uFF77\uFF78\uFF79\uFF7A\uFF7B\uFF7C\uFF7D\uFF7E\uFF7F\uFF80\uFF81\uFF82\uFF83\uFF84\uFF85\uFF86\uFF87\uFF88\uFF89\uFF8A\uFF8B\uFF8C\uFF8D\uFF8E\uFF8F\uFF90\uFF91\uFF92\uFF93\uFF94\uFF95\uFF96\uFF97\uFF98\uFF99\uFF9A\uFF9B\uFF9C\uFF9D\uFF9E\uFF9F\u005D");
	return (0x20 <= code && code <= 0x7e) || func.reg.test(c);
});

var transformXY = function(t, x, y) {
	return [
		t[0] * x + t[2] * y + t[4] * 20,
		t[1] * x + t[3] * y + t[5] * 20
	];
};

var createDataStoreFromObject = function(obj, imageMap, onLoad) {
	if(PEX_VERSION.indexOf(obj.JSON_VERSION) != 0 && PEX_VERSION.indexOf(obj.JSON_VERSION) != 1) {
		EngineLogE("src object is not compatible with this Pex version. Please regenerate new one using parse_swf.");
	}

	if(!imageMap) {
		imageMap = {};
	}

	var dataStore = {
		header: obj.header,
		tagList: [],
		completed: true,
		loadingImageCount: 0
	};

	var tagList = obj.tagList;
	for(var i = 0, len = tagList.length; i < len; i++) {
		var instance = tagList[i];
		if(instance.hasOwnProperty("img")) {
			var img =  imageMap[instance.img] || document.createElement("img");
			if(!img.src) {
				img.onload = function() {
					if(--dataStore.loadingImageCount === 0) {
						onLoad && onLoad();
					}
				};
				img.src = instance.img;
				++dataStore.loadingImageCount;
			}
			instance.img = img;
		}
		dataStore.tagList.push(instance);
	}
	if(dataStore.loadingImageCount === 0) {
		onLoad && onLoad();
	}

	return dataStore;
};


/*//////////////////
  master.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var Master = function () {
	this.data = {};
	this.engineList = [];

	this.debug = false;
	this.suppressFPS = false;
	
	// debug: fps
	this.frame = 0;
	this.lastTick = 0;
	// start tick
	var that = this;
	(function tick() {
		setTimeout(tick, 1000 / 60);
		var now = Date.now();
		var ret = false;
		for(var i = 0; i < that.engineList.length; i++) {
			ret = that.engineList[i].tick(now) || ret;
		}
		
		// fps 
		ret && that.frame++;
		var last = that.lastTick = that.lastTick || now;
		if(now - last > 1000) {
			that.debug && !that.suppressFPS && EngineLogD("fps:" + that.frame * 1000 / (now - last));
			that.frame = 0;
			that.lastTick = now;
		}
		//setTimeout(tick, 0);
	})();
};

Master.getInstance = function() {
	var ctor = Master;
	if (ctor.__instance__) {
		return ctor.__instance__;
	}
	return ctor.__instance__ = new ctor;
};

Master.prototype.load = function(src, container, option) {
	var dataStore;
	if(typeof src == "string") {
		var name = (option && option.name) || src;
		dataStore = this.data[name];
		if(!dataStore) {
			// load the data
			if(typeof name == "string") {
				if(option && option.json) {
					EngineLogE("unimplemented json reader");
				} else {
					// use swf parser as dataStore
					var parser = new Parser(option);
					var engine = new Engine(parser, container, option);
					parser.load(src, function(that) { return function() {that.dataStoreProgress.apply(that, arguments);}; }(engine));
					if(!option || !option.solo) {
						this.data[name] = parser;
					}
					this.engineList.push(engine);
					return engine;
				}
			}
		} else {
			var engine = new Engine(dataStore, container, option);
			dataStore.addCallback(function(that) { return function() {that.dataStoreProgress.apply(that, arguments);}; }(engine));
			//this.data[name] = parser;
			this.engineList.push(engine);
			return engine;
		}
		return null;
	}

	if(typeof src == "object") {
		dataStore = createDataStoreFromObject(src, (option && option.imageMap));
		var engine = new Engine(dataStore, container, option);
		engine.dataStoreProgress();
		this.engineList.push(engine);
		return engine;
	}

	return null;
};

Master.prototype.removeEngine = function(engine) {
	var engineList = this.engineList;
	var len = engineList.length;
	for(var i = 0; i < len; i++) {
		if(engineList[i] == engine) {
			engineList.splice(i,1);
			return true;
		}
	}
	return false;
};

var Pex = function(src, container, option) {
	// save the first time
	Pex.firstTime = Pex.firstTime || Date.now();
	option = option || {};

	var master = Master.getInstance();
	master.debug = master.debug || option.debug;

	for(var key in defaultOption) {
		(key in option) || (option[key] = defaultOption[key]);
	}
	for(var key in option) {
		if(!key in defaultOption) {
			option.debug && EngineLogD("unknown option: " + key);
		}
	}
	master.suppressFPS |= option.suppressLog.fps;
	return master.load(src, container, option);
};

// publish Pex
window.Pex = Pex;


/*//////////////////
  engine.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var Engine = function(dataStore, container, option) {
	// store arguments
	this.dataStore = dataStore;
	this.container = (typeof container == "string")? document.getElementById(container): container;
	this.option = copyOption(option);
	
	// create renderer
	this.canvas = null;
	if(option.partialDraw) {
		this.renderer = new DirtyRectRenderer(this);
	} else {
		this.renderer = new Renderer(this);
	}
	
	this.onCreateMC = [];
	this.newMcList = [];

	// create VM
	this.vm = new VM(this);
	
	// hash mapping for objects
	this.dictionary = { "name": "" }; // characterId => def
	// hash mapping for mcInfo
	this.mcInfoLibrary = {}; // characterId -> mcInfo
	// engine setting values
	this.bgColor = null; // null means transparent
	
	// timeline check
	this.timelineList = [];
	// is Engine locked because of lack informations
	this.isLocked = false;
	
	// api
	this.api = null;

	// buttons
	this.buttonList = [];
	
	// touch controller
	this.touch = new _Touch(this);

	// ready callback
	var that = this;
	this.readyCallbacks = [];
	this.readyFunc = function() {
		var callbacks = that.readyCallbacks;
		var len = callbacks.length;
		for(var i = 0; i < len; i++) {
			callbacks[i]();
		}
		that.readyFunc = null;
	};
	
	// control frame skip
	this.noskip = false;
	this.frameSkipRatio = 0;
	this.logicalRenderCount = 0;

	// initializing
	this.initialize();
};

Engine.prototype.initialize = function() {
	var option = this.option;
	var dataStore = this.dataStore;
	// Analyzer setup
	var rootMCInfo = new MovieClipInfo();
	this.analyzser = new Analyzer(this, rootMCInfo, dataStore.tagList);
	// create root movie clip
	this.rootMC = new MovieClip(this, rootMCInfo, null, null);
	this.timelineList.push(this.rootMC);
	// set totalFrames and frameRate
	var header = dataStore.header;
	this.rootMC.properties["_totalframes"] = header.frameCount;
	this.frameRate = option.fps || header.frameRate;
	header.frameSize && this.renderer.setFrame(header.frameSize);
	this.frameCount = 0;
	this.renderCount = 0;
	// don't play if option is set
	this.running = !option.stopOnStart;

	// get rid of "darker" in globalCompositeOperation
	// https://code.google.com/p/chromium/issues/detail?id=136830
	overrideTransformImageColorFunction(option.forceDisableBlendMode, option.debug);
};

Engine.prototype.dataStoreProgress = function() {
	var dataStore = this.dataStore;
	if(dataStore.completed) {
		this.option.debug && EngineLogD("parse completed: " + (Date.now() - Pex.firstTime));
//		console.log("Root MC:", this.rootMC);
		this.loadCompleted = true;
	}
	var header = dataStore.header;
	if(this.rootMC) {
		this.rootMC.properties["_totalframes"] = header.frameCount;
	}
	this.frameRate = this.option.fps || header.frameRate;
	this.analyzser.analyze(this.dictionary);
	header.frameSize && this.renderer.setFrame(header.frameSize);
	this.renderer.preloadCache && this.renderer.preloadCache();
};

Engine.prototype.tick = function(now) {
	var currentFrame = this.frameCount;
	var endFrame;
	if(!this.stopFrame) {
		if (this.startTime) {
			endFrame = (this.frameRate * (now - this.startTime) / 1000) | 0;
			if(this.frameSkipRatio) {
				var logicalRenderCount = (endFrame * (1 - this.frameSkipRatio)) | 0;
				if(logicalRenderCount <= this.logicalRenderCount) {
					return;
				}
				this.logicalRenderCount = logicalRenderCount;
			}
		} else {
			this.startTime = now;
			endFrame = 1;
		}
	} else {
		endFrame = Number.MAX_VALUE;
	}

	if(currentFrame == endFrame || this.dataStore.loadingImageCount > 0) {
		return;
	}

	this.readyFunc && this.loadCompleted && this.readyFunc();

	if(!this.stopFrame) {
		if(!this.running) {
			return;
		}

		if (currentFrame <= 1 || (this.option.disableFrameSkip && endFrame - currentFrame > 1) || endFrame - currentFrame > 30) {
			// the first frame (currentFrame is 0) is very heavy due to initializing objects,
			// so modify startTime in the second frame (currentFrame is 1).
			// The OS seems to have been slept if the gap between endFrame and currentFrame is too large,
			// so modify startTime.
			endFrame = currentFrame + 1;
			this.startTime = now - currentFrame / this.frameRate * 1000;
		}
	}

	var rendered = false;
	var acted = false;
	var enterFrameMCs = [];
	while (currentFrame < endFrame) {
		currentFrame++;
		var timelinePos;
		if(!this.vm.running) {
			if(this.isLocked) {
				// resume the last session
				timelinePos = this.timelinePos;
			} else {
				// play all timeline
				timelinePos = this.timelineList.length - 1;
			}

			for(var i = timelinePos; i >= 0; i--) {
				var mc = this.timelineList[i];
				if(mc.isPlaying) {
					var nextFrame = 1;
					if(mc.properties._currentframe < mc.properties["_totalframes"]) {
						nextFrame = mc.properties._currentframe + 1;
					}
					if(!this.gotoFrame(mc, nextFrame)) {
						// gotoFrame failed because try to go to non-loaded frame
						this.option.debug && EngineLogD("gotoFrame: try to go to non-loading frame at mclist");
						// so lock this engine until loading the frame
						this.isLocked = true;
						this.timelinePos = i;
						return false;
					}
				}
				if(mc.onEnterFrames.length) {
					enterFrameMCs.push(mc);
				}
			}
			// complete timeline

			// call onEnterFrame
			var mcCount = enterFrameMCs.length;
			for(var i = 0; i < mcCount; i++) {
				var mc = enterFrameMCs[i];
				var name = mc.absoluteName || "/";
				var currentframe = mc.properties._currentframe;
				var onEnterFrames = mc.onEnterFrames;
				var enterFrameCount = onEnterFrames.length;
				for(var j = 0; j < enterFrameCount; j++) {
					onEnterFrames[j](this.api, name, currentframe);
				}
			}
			enterFrameMCs = [];
		}
		// execute virtual machine
		if(!this.vm.run()) {
			// vm failed because try to go to non-loaded frame
			this.option.debug && EngineLogD("gotoFrame: try to go to non-loading frame inside VM");
			return false;
		}

		// buttons should be handled after executing virtual machine
		// because it changes the visibility or shape of buttons
		if(this.option.enableButton && this.handleButton()) {
			if(!this.vm.run()) {
				// vm failed because try to go to non-loaded frame
				this.option.debug && EngineLogD("gotoFrame: try to go to non-loading frame inside VM");
				return false;
			}
		}

		if(this.onCreateMC.length) {
			var onCreateMC = this.onCreateMC;
			var handlerCount = onCreateMC.length;
			var mcList = this.newMcList;
			var mcCount = mcList.length;
			for(var i = 0; i < mcCount; i++) {
				var name = mcList[i].absoluteName || "/";
				for(var j = 0; j < handlerCount; j++) {
					onCreateMC[j](this.api, name);
				}
			}
		}
		this.newMcList = [];

		// complete tick
		this.isLocked = false;
		acted = true;

		if(this.noskip) {
			this.option.debug && EngineLogD("noskip frame and force rendering");
			this.renderer.render();
			rendered = true;
			this.noskip = false;
		}
		if(this.stopFrame) {
			var current = this.rootMC.properties["_currentframe"];
			var stop = this.stopFrame % (this.rootMC.properties["_totalframes"]);
			if(stop == 0) {
				stop = this.rootMC.properties["_totalframes"];
			}
			if(current == stop) {
				this.lastStopFrame = this.stopFrame;
				this.stopFrame = 0;
				break;
			}
		}
	}
	this.frameCount = currentFrame;
	if(!rendered) {
		this.renderer.render();
	}
	acted && this.renderCount++;
	//console.log("---------------------");
	return true;
};

Engine.prototype.handleButton = function() {
	var actionAdded = false;
	var buttonList = this.buttonList;
	for(var i = buttonList.length - 1; i >= 0; i--) {
		var button = buttonList[i];
		var buttonInfo = button.mcInfo;
		if(button.isDeleted) {
			continue;
		}

		// Are movieclips of button ancestor displayed?
/*
		var parent = button;
		while(parent) {
			if(!parent.isDisplayed()) {
				break;
			}
			parent = parent.parent;
		}
		if(parent) {
			continue;
		}
*/

		var executed = false;
		for(var key in buttonInfo.buttonActionMap) {
			if(this.touch.isKeyDown(key) && button.isDisplayed(true)) {
				this.vm.addAction(button.parent, buttonInfo.buttonActionMap[key]);
				//TODO unshift!!
				//original this.actionQueue.unshift([button.parent, button.buttonActions[key]]);
				executed = true;
				break;
			} else if(key == "press" && this.touch.mouseDown) {
				// check if the key is pressed or not
				if(button.isHit(this.touch.mouseDown.x, this.touch.mouseDown.y)) {
					// if unshift his, city_dev_f2 will not work properly
					this.vm.addAction(button.parent, buttonInfo.buttonActionMap[key]);
					executed = true;
					break;
				}
			} else if(key == "release" && this.touch.mouseRelease) {
				// check if the key is released or not
				if(button.isHit(this.touch.mouseRelease.x, this.touch.mouseRelease.y)) {
					this.vm.addAction(button.parent, buttonInfo.buttonActionMap[key]);
					executed = true;
					break;
				}
			}
		}
		if (executed) {
			actionAdded = true;
			break;
		}
	}
	this.touch.clearKeyDown();
	this.touch.clearMouseState();
	return actionAdded;
};

Engine.prototype.gotoFrame = function(mc, toFrame, privilege) {
	//console.log("[" + mc.absoluteName + "]", "gotoFrame:", toFrame, "current: " + mc.properties["_currentframe"], "loaded:" + mc.properties["_framesloaded"], "total:" + mc.properties["_totalframes"]);
	toFrame = +toFrame;
	var currentFrame = mc.properties["_currentframe"];
	
	toFrame = (toFrame < 1)? 1: toFrame;
	var doAction = true;
	if(toFrame > mc.properties["_totalframes"]) {
		toFrame = mc.properties["_totalframes"];
		doAction = false;
	}
	// try to go to same frame
	if(mc.isDeleted || toFrame === currentFrame) {
		return true;
	}
	
	// check whether the frame is loaded
	if(toFrame > mc.properties["_framesloaded"]) {
		// try to call non-loaded frame
		return false;
	}
	
	var next = false;
	if(toFrame == currentFrame + 1) {
		// use cache
		next = true;
	}
	
	var mcInfo = mc.mcInfo;
	
	// set property for mc
	mc.properties["_currentframe"] = toFrame;
	
	// search action list
	var actionFunc = mcInfo.frameActionMap[toFrame];
	if(doAction && actionFunc) {
		var len = actionFunc.length;
		for(var i = 0; i < len; i++) {
			this.vm.addAction(mc, actionFunc[i]);
		}
	}
	
	if(next) {
		// remove old objects
		var deadIdList = mcInfo.frameDeadIdList[toFrame];
		var len = deadIdList.length;
		for(var i = 0; i < len; i++) {
			mc.removeObject(deadIdList[i]);
		}
		var bornIdList = mcInfo.frameBornIdList[toFrame];
		var blen = bornIdList.length;
		// create new objects
		for(var i = 0; i < blen; i++) {
			mc.createObject(toFrame, bornIdList[i]);
		}

		// check modification
		var idModifiedMap = mcInfo.frameIdModifiedMap[toFrame];
		var changed = false;
		for(var i in idModifiedMap) {
			if(idModifiedMap[i]) {
				changed = true;	

				var child = mc.childrenIdMap[i];
				var matrix = mcInfo.frameIdPlacementMap[toFrame][i].matrix;
				if(child && !child.isLocked && matrix) {
					child.setPropertiesFromMatrix(matrix)
				}
			}
		}
		if(changed) {
			mc.lastModified = this.frameCount;
		}
		
	} else {
		// currentList and toList are sorted already
		var currentList = mcInfo.frameIdList[currentFrame];
		var currentLen = currentList.length;
		var toList = mcInfo.frameIdList[toFrame];
		var toLen = toList.length;
		var i = 0, j = 0;
		var bornIdList = [];
		var survivedIdList = [];

		// listup all deleted ids and new created ids
		while(i < toLen && j < currentLen) {
			var t = toList[i];
			var c = currentList[j];
			if(t === c) {
				survivedIdList[survivedIdList.length] = t;
				i++;
				j++;
			} else if(t < c) {
				// born at toFrame
				// check the object is born on this frame or on previous frame
				// if created on previous frame, set privilege mode
				bornIdList[bornIdList.length] = t;
				//mc.createObject(toFrame, t, mcInfo.idInfo[t].born != toFrame);
				i++;
			} else {
				// remove at toFrame
				mc.removeObject(c);
				j++;
			}
		}
		if(i != toLen) {
			while(i < toLen) {
				bornIdList.push(toList[i++]);
				//mc.createObject(toFrame, id, mcInfo.idInfo[id].born != toFrame);
			}
		} else if(j != currentLen) {
			while(j < currentLen) {
				mc.removeObject(currentList[j++]);
			}
		}
		var len = bornIdList.length;
		for(var i = 0; i < len; i++) {
			var id = bornIdList[i];
			mc.createObject(toFrame, id, mcInfo.idInfo[id].born != toFrame);
		}

		mc.lastModified = this.frameCount;

		len = survivedIdList.length;
		for(var i = 0; i < len; i++) {
			var id = survivedIdList[i];
			var child = mc.childrenIdMap[id];
			var matrix = mcInfo.frameIdPlacementMap[toFrame][id].matrix;
			if(child && !child.isLocked && matrix) {
				child.setPropertiesFromMatrix(matrix)
			}
		}
	}
	
	// process frameCallback
	var all_callbacks = this.option.frameCallback;
	var mc_callbacks = all_callbacks[mc.properties._name];
	if(!mc_callbacks) {
		mc_callbacks = all_callbacks[mc.absoluteName === "" ? "/" : mc.absoluteName];
	}
	if(mc_callbacks) {
		var labelMap = mcInfo.frameLabelMap;
		for(var key in labelMap) {
			if(toFrame == labelMap[key] && mc_callbacks[key]) {
				mc_callbacks[key](this);
			}
		}
		var callback = mc_callbacks[toFrame] || (toFrame == mc.properties["_totalframes"] && mc_callbacks["last"]);
		callback && callback(this);
	}

	if(mcInfo.noskipFrameList[toFrame]) {
		this.noskip = true;
	}

	return true;
};

Engine.prototype.getAPI = function() {
	return this.api || (this.api = new API(this));
};

Engine.prototype.getFPS = function() {
	return this.frameRate;
};

Engine.prototype.setFPS = function(fps) {
	// the next frame is calculated by 'this.frameRate * (Date.now() - this.startTime) / 1000',
	// so reset `this.startTime` if `this.startTime` is already set
	this.startTime && (this.startTime = Date.now() - this.frameCount / fps * 1000);
	this.frameRate = this.option.fps = fps;
};

Engine.prototype.getFrameSkipRatio = function() {
	return this.frameSkipRatio;
};

Engine.prototype.setFrameSkipRatio = function(ratio) {
	this.logicalRenderCount = (this.frameRate * (Date.now() - this.startTime) * (1 - ratio) / 1000) | 0;
	this.frameSkipRatio = ratio;
	return true;
};

var copyOption = function(option) {
	var clone = function(src, dst) {
		for(var prop in src) {
			var value = src[prop];
			if(value instanceof HTMLElement || value instanceof Function) {
				// e.g. HTMLImageElement for 'replace' option, function for 'frameCallback' option
				dst[prop] = value;
			} else if(value instanceof Array) {
				dst[prop] = [];
				clone(value, dst[prop]);
			} else if(value instanceof Object) {
				dst[prop] = {};
				clone(value, dst[prop]);
			} else {
				dst[prop] = value;
			}
		}
	};

	var newOption = {};
	clone(option, newOption);
	return newOption;
};


/*//////////////////
  analyzer.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var Analyzer = function(engine, mcInfo, tagList, buttonCharacters, buttonActions) {
	// store arguments
	this.engine = engine;
	this.mcInfo = mcInfo;
	this.tagList = tagList;
	this.buttonCharacters = buttonCharacters;
	this.buttonActions = buttonActions;
	
	// for analyzing
	this.analyzedLength = 0;
	this.frame = 1;
	this.idCounter = 0;
	this.idList = [];
	this.bornIdList = [];
	this.deadIdList = [];
	this.idPlacementMap = {};
	this.idModifiedMap = {};
	this.layerIdMap = {}; // layer(depth) -> id
};

Analyzer.prototype.analyze = function(dictionary) {
	if(this.tagList) {
		this.analyzeMovieClip(dictionary);
	} else {
		this.analyzeButton(dictionary);
	}
};

Analyzer.prototype.analyzeMovieClip = function(dictionary) {
	var engine = this.engine;
	var mcInfo = this.mcInfo;
	var tagList = this.tagList;
	
	// support on-the-fly analyzing
	var len = tagList.length;
	loop: for(var i = this.analyzedLength; i < len; i++) {
		var tag = tagList[i];
		switch(tag.type) {
		
		// Control
		case TagDefine.TypeTagEnd:
			mcInfo.actualTotalFrames = this.frame-1;
			break loop;
		case TagDefine.TypeTagSetBackgroundColor:
			!engine.option.transparent && (engine.bgColor || (engine.bgColor = tag.color));
			break;
		case TagDefine.TypeTagFrameLabel:
			mcInfo.frameLabelMap[tag.name] = this.frame;
			if(tag.name.toLowerCase() === "_noskip") {
				mcInfo.noskipFrameList[this.frame] = true;
			}
			break;
		
		// Display List
		case TagDefine.TypeTagShowFrame:
			// save current data
			var frame = this.frame;
			mcInfo.frameIdList[frame] = [].concat(this.idList);
			mcInfo.frameBornIdList[frame] = this.bornIdList;
			mcInfo.frameDeadIdList[frame] = this.deadIdList;
			mcInfo.frameIdModifiedMap[frame] = this.idModifiedMap;
			this.bornIdList = [];
			this.deadIdList = [];
			this.idModifiedMap = {};
			// save id-placement map
			var idPlacementMap = {};
			for(var key in this.idPlacementMap) {
				idPlacementMap[key] = this.idPlacementMap[key];
			}
			mcInfo.frameIdPlacementMap[frame] = idPlacementMap;
			// increment frame
			this.frame++;
			break;
		// case TagDefine.TypeTagPlaceObject: // TODO
		case TagDefine.TypeTagPlaceObject2:
			var target = tag.characterId;
			var layer = tag.depth;
			
			var id = this.layerIdMap[tag.depth];
			
			// checking morph
			var characterId = target || this.idPlacementMap[id].characterId; // target might be null
			var def = dictionary[characterId];
			if(def.type == TagDefine.TypeTagDefineMorphShape || (characterId >= 65536 && characterId <= 0xFFFFFFFF)) {
				if(characterId >= 65536) {
					def = dictionary[def.originalId];
				}
				var newTag = {};
				var olderTag = this.idPlacementMap[id];
				for(var key in tag) {
					newTag[key] = tag[key] || (olderTag && olderTag[key]);
				}
				newTag.characterId = createVirtualShapeFromMorph(engine, def, tag.ratio, dictionary);
				tag = newTag;
				target = newTag.characterId;
			}
			
			if(tag.move && !target) {
				// modify
				var oldPlacement = this.idPlacementMap[id];
				var newPlacement = {};
				for(var key in tag) {
					newPlacement[key] = tag[key];
				}
				for(var key in oldPlacement) {
					if(tag[key] == null && oldPlacement[key] != null) {
						newPlacement[key] = oldPlacement[key];
					}
				}
				this.idPlacementMap[id] = newPlacement;
				this.idModifiedMap[id] = true;
			} else {
				if(tag.move) {
					// copy information
					var oldPlacement = this.idPlacementMap[id];
					var newPlacement = {};
					for(var key in tag) {
						newPlacement[key] = tag[key];
					}
					for(var key in oldPlacement) {
						if(tag[key] == null && oldPlacement[key] != null) {
							newPlacement[key] = oldPlacement[key];
						}
					}
					tag = newPlacement;

					// remove
					this.idList.splice(this.idList.indexOf(id), 1);
					this.deadIdList.push(id);
				}
				// new character detected
				var newId = ++this.idCounter;
				this.idList.push(newId);
				this.idPlacementMap[newId] = tag;
				this.bornIdList.push(newId);
				// set id information
				var idInfo = {};
				idInfo.id = newId;
				idInfo.characterId = tag.characterId;
				idInfo.layer = tag.depth;
				idInfo.born = this.frame;
				idInfo.placement = tag;
				idInfo.ownerMC = {};
				mcInfo.idInfo[newId] = idInfo;
				// set frame,layer => id map
				this.layerIdMap[tag.depth] = newId;
			}
			break;
		case TagDefine.TypeTagRemoveObject2:
			var id = this.layerIdMap[tag.depth];
			this.idList.splice(this.idList.indexOf(id), 1);
			this.deadIdList.push(id);
			delete this.idPlacementMap[id];
			delete this.layerIdMap[tag.depth];
			break;
		
		// Action
		case TagDefine.TypeTagDoAction:
			var actionFunc = (engine.option.compileAction ? createActionFunction : createRawActionFunction)(tag.actions, engine.option.debug);
			(mcInfo.frameActionMap[this.frame] || (mcInfo.frameActionMap[this.frame] = [])).push(actionFunc);
			break;
		
		case TagDefine.TypeTagJPEGTables:
			break;
		
		case TagDefine.TypeTagDefineBits:
		case TagDefine.TypeTagDefineBitsJPEG2:
		case TagDefine.TypeTagDefineBitsJPEG3:
		case TagDefine.TypeTagDefineBitsLossless:
		case TagDefine.TypeTagDefineBitsLossless2:
		case TagDefine.TypeTagDefineShape:
		case TagDefine.TypeTagDefineShape2:
		case TagDefine.TypeTagDefineShape3:
		case TagDefine.TypeTagDefineButton:
		case TagDefine.TypeTagDefineButton2:
		case TagDefine.TypeTagDefineFont:
		case TagDefine.TypeTagDefineFont2:
		case TagDefine.TypeTagDefineText:
		case TagDefine.TypeTagDefineText2:
		case TagDefine.TypeTagDefineEditText:
		case TagDefine.TypeTagDefineMorphShape:
		case TagDefine.TypeTagDefineSprite:
			// save in dictionary
			dictionary[tag.id] = tag;
			break;
		
		default:
			EngineLogW("Analyzer: unknown tag detected [" + tag.type + "]");
			break;
		}
	}
	this.analyzedLength = len;
	mcInfo.framesLoaded = this.frame - 1;
	mcInfo.idCounter = this.idCounter;
	mcInfo.updateCallback();
};

Analyzer.prototype.analyzeButton = function(dictionary) {
	var engine = this.engine;
	var mcInfo = this.mcInfo;
	var characters = this.buttonCharacters;	
	var actions = this.buttonActions;
	
	var frameIdList = [null, [], [], [], []];
	var frameBornIdList = [null, [], [], [], []];
	var frameDeadIdList = [null, [], [], [], []];
	var frameIdPlacementMap = [null, {}, {}, {}, {}];

	var len = characters.length;
	for(var i = 0; i < len; i++) {
		var character = characters[i];
		var characterId = character.characterId;
		var def = dictionary[characterId];
		var newId = ++this.idCounter;

		var born = null;

		var dummy_placement = {
			type: TagDefine.TypeTagPlaceObject2,
			move: 0,
			depth: character.depth,
			characterId: characterId,
			matrix: character.matrix,
			cxform: character.colorTransform,
			name: null,
			clipDepth: null
		};

		if(character.stateUp) {
			frameIdList[1].push(newId);
			frameIdPlacementMap[1][newId] = dummy_placement;

			frameBornIdList[1].push(newId);
			if(!character.stateOver) {
				frameDeadIdList[2].push(newId);
			}
			if(!born) born = 1;
		}
		if(character.stateOver) {
			frameIdList[2].push(newId);
			frameIdPlacementMap[2][newId] = dummy_placement;

			if(!character.stateUp) {
				frameBornIdList[2].push(newId);
			}
			if(!character.stateDown) {
				frameDeadIdList[3].push(newId);
			}
			if(!born) born = 2;
		}
		if(character.stateDown) {
			frameIdList[3].push(newId);
			frameIdPlacementMap[3][newId] = dummy_placement;

			if(!character.stateOver) {
				frameBornIdList[3].push(newId);
			}
			if(!character.stateHitTest) {
				frameDeadIdList[4].push(newId);
			}
			if(!born) born = 3;
		}
		if(character.stateHitTest) {
			var stateOver = character.stateOver;
			for(var frameNo = 1; frameNo <= 3; frameNo++) {
				frameIdList[frameNo].push(newId);
				frameIdPlacementMap[frameNo][newId] = dummy_placement;

				if(!stateOver) {
					frameBornIdList[frameNo].push(newId);
				}
			}
			if(!born) born = 4;
		}

		var idInfo = {};
		idInfo.id = newId;
		idInfo.characterId = characterId;
		idInfo.layer = character.depth + ((born == 4)? 65536: 0);
		idInfo.born = born;
		idInfo.placement = dummy_placement;
		idInfo.ownerMC = {};
		mcInfo.idInfo[newId] = idInfo;
	}

	for(var i in actions) {
		var action = actions[i];
		if(action.keyPress) {
			mcInfo.buttonActionMap[action.keyPress] = createActionFunction(action.actions);
		}
		if(action.overUpToOverDown) {
			mcInfo.buttonActionMap["press"] = createActionFunction(action.actions);
		} else if(action.overDownToOverUp) {
			mcInfo.buttonActionMap["release"] = createActionFunction(action.actions);     // TODO: awful!!
		}
	}
	
	mcInfo.frameIdList = frameIdList;
	mcInfo.frameBornIdList = frameBornIdList;
	mcInfo.frameDeadIdList = frameDeadIdList;
	mcInfo.frameIdPlacementMap = frameIdPlacementMap;
	mcInfo.frameIdModifiedMap = [{}, {}, {}, {}];
	mcInfo.frameLabelMap = {"Up": 1, "Over": 2, "Down": 3, "Hit": 4};
	mcInfo.frameActionMap = {};
	mcInfo.framesLoaded = 3;
	mcInfo.idCounter = this.idCounter;
	mcInfo.updateCallback();
	this.analyzedLength = len;
};

var createVirtualShapeFromMorph = function(engine, obj, ratio, dictionary) {
	// ratio might be undefined
	ratio = ratio || 0;
	
	// set original characterId
	var newCharacterId = obj.id * 65536 + ratio;
	var tag = dictionary[newCharacterId];
	if(tag) {
		return newCharacterId;
	}
	
	// create virtual shape tag
	tag = {
		id: newCharacterId,
		originalId: obj.id,
		type: TagDefine.TypeTagDefineShape
	};
	
	var r = ratio / 65536;
	var s = 1 - r;
	
	// bounds
	var bounds = [];
	for(var i = 0; i < 4; i++) {
		bounds.push(obj.startBounds[i] * s + obj.endBounds[i] * r);
	}
	tag.bounds = bounds;
	
	// fillStyle
	var fillStyles = [];
	var len = obj.fillStyles.length;
	for(var i = 0; i < len; i++) {
		var fillStyle = obj.fillStyles[i];
		var fill = {gradient:{}};
		fill.type = fillStyle.type;
		if(fillStyle.type == 0x00) {
			// solid fill
			fill.color = fillStyle.start * s + fillStyle.end * r;
		} else if(fillStyle.type == 0x10 || fillStyle.type == 0x12) {
			// gradient fill
			var matrix = [];
			for(var j = 0; j < 6; j++) {
				matrix[j] = fillStyle.start[j] * s + fillStyle.end[j] * r;
			}
			fill.matrix = matrix;
			var gradient = [];
			var glen = fillStyle.gradient.records.length;
			for(var j = 0; j < glen; j++) {
				var grad = fillStyle.gradient.records[j];
				gradient[j] = {
					ratio: grad.startRatio * s + grad.endRatio * r,
					color: grad.startColor * s + grad.endColor * r
				};
			}
			fill.gradient.records = gradient;
		} else {
			EngineLogE("createVirtualShapeFromMorph: unsupported morphing param:", fillStyle.type);
		}
		fillStyles.push(fill);
	}
	tag.fillStyles = fillStyles;
	
	// lineStyle
	var lineStyles = [];
	var len = obj.lineStyles.length;
	for(var i = 0; i < len; i++) {
		var lineStyle = obj.lineStyles[i];
		var line = {
			width: lineStyle.startWidth * s + lineStyle.endWidth * r,
			color: lineStyle.startColor * s + lineStyle.endColor * r
		};
		lineStyles.push(line);
	}
	tag.lineStyles = lineStyles;
	
	// shape
	if(obj.startEdges.length > obj.endEdges.length) {
		EngineLogE("createVirtualShapeFromMorph: difference detected at startEdges and endEdges");
	}
	var olen = obj.startEdges.length;
	var shapes = [];
	for(var i = 0; i < olen; i++) {
		var startEdge = obj.startEdges[i];
		var endEdge = obj.endEdges[i];
		var edge = {};
		
		// regard line as curve, so that we handle together (P.160 on specification)
		if(startEdge.type == EdgeDefine.TypeCurve && endEdge.type == EdgeDefine.TypeStraight) {
			endEdge.type = EdgeDefine.TypeCurve;
			endEdge.ax = endEdge.cx = endEdge.x / 2;
			endEdge.ay = endEdge.cy = endEdge.y / 2;
		} else if(startEdge.type == EdgeDefine.TypeStraight && endEdge.type == EdgeDefine.TypeCurve) {
			startEdge.type = EdgeDefine.TypeCurve;
			startEdge.ax = startEdge.cx = startEdge.x / 2;
			startEdge.ay = startEdge.cy = startEdge.y / 2;
		}
		edge.type = startEdge.type;
		if(startEdge.type == EdgeDefine.TypeStyleChange) {
			edge.lineStyle = startEdge.lineStyle;
			edge.fillStyle0 = startEdge.fillStyle0;
			edge.fillStyle1 = startEdge.fillStyle1;
			edge.dx = startEdge.dx * s + endEdge.dx * r;
			edge.dy = startEdge.dy * s + endEdge.dy * r;
			edge.lineStyles = startEdge.lineStyles;
			edge.fillStyles = startEdge.fillStyles;
		} else if(startEdge.type == EdgeDefine.TypeStraight) {
			edge.x = startEdge.x * s + endEdge.x * r;
			edge.y = startEdge.y * s + endEdge.y * r;
		} else if(startEdge.type == EdgeDefine.TypeCurve) {
			edge.cx = startEdge.cx * s + endEdge.cx * r;
			edge.cy = startEdge.cy * s + endEdge.cy * r;
			edge.ax = startEdge.ax * s + endEdge.ax * r;
			edge.ay = startEdge.ay * s + endEdge.ay * r;
		} else {
			EngineLogE("createVirtualShapeFromMorph: unknown edge type:", startEdge.type);
		}
		shapes.push(edge);
	}
	tag.shapes = shapes;
	
	dictionary[newCharacterId] = tag;
	return newCharacterId;
};


/*//////////////////
  movieclip.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var MovieClip = function(engine, mcInfo, parent, placement, exceptional) {
	this.engine = engine;
	// Movie Clip Information
	this.mcInfo = mcInfo;
	mcInfo.onupdate = (function(that) { return function() { that.mcInfoUpdateCallback.apply(that, arguments); };})(this);
	// Display List
	this.displayList = {}; // layer -> mcInfo.idInfo
	this.displayListCount = {};
	// Properties
	this.properties = {
		_x: 0,
		_y: 0,
		_currentframe: 0,
		_totalframes: mcInfo.framesLoaded,
		_alpha: 100,
		_visible: 1,
		_width: 0,
		_height: 0,
		_target: null,
		_framesloaded: mcInfo.framesLoaded,
		_name: null,
		_droptarget: null,
		_url: null,
		_highquality: 1,
		_focusrect: 0,
		_xscale: 100,
		_yscale: 100,
		_rotation: 0,
		_rotation2: 90, // hidden param
		// transform
		_scaleX: 1,
		_scaleY: 1,
		_rotate0: 0,
		_rotate1: 0
	};
	// variables
	this.variables = {};
	
	// is this MC locked by property settings or not
	this.isLocked = false;
	
	// playing or not
	this.isPlaying = true;
	// cloned by CloneSprite or not 
	this.isCloned = false;
	// button or not
	this.isButton = false;
	// is deleted or not
	this.isDeleted = false;
	
	// parent
	this.parent = parent;
	// children
	this.children = [];
	this.childrenMap = {}; // name -> [mc, mc...]
	this.childrenIdMap = {}; // id -> mc
	// for force naming
	this.instanceNum = 0;

	// last modified frame
	this.lastModified = 0;
	this.childrenModified = { checked: -1, modified: true };
	
	this.initProperties(placement);

	// absolute name
	this.absoluteName = ((parent)?parent.absoluteName + "/" + this.properties._name : "");
	this.id = null;

	this.onEnterFrames = [];
	if(exceptional) {
		// mark this mc is exceptional mc
		this.exception = true;
	} else {
		this.engine.newMcList.push(this);
	}

	// for loadMovie
	this.dictionary = parent && parent.dictionary || engine.dictionary;
	this.mcInfoLibrary = parent && parent.mcInfoLibrary || engine.mcInfoLibrary;
};

MovieClip.prototype.mcInfoUpdateCallback = function() {
	this.properties["_framesloaded"] = this.mcInfo.framesLoaded;
	if(this.mcInfo.actualTotalFrames) this.properties["_totalframes"] = this.mcInfo.actualTotalFrames;
};

MovieClip.prototype.initProperties = function(placement) {
	var parent = this.parent;
	if(placement) {
		if(placement.name) {
			this.properties._name = placement.name;
		} else {
			// force naming
			if(parent) {
				this.properties._name = "instance" + (++parent.instanceNum);
			} else {
				this.properties._name = "instance1";
			}
		}

		this.setPropertiesFromMatrix(placement.matrix);
	}
	if(parent) {
		parent.children.push(this);
		var name = this.properties._name;
		(parent.childrenMap[name] && parent.childrenMap[name].push(this)) || (parent.childrenMap[name] = [this]);
	}
};

var createImageContainerMC = function(dictionary, img, width, height, sx, sy, xratio, yratio) {
	var ret = {};
	// convert px to twip
	width *= 20;
	height *= 20;
	var dx = xratio? width * xratio: 0;
	var dy = yratio? height * yratio: 0;

	var characterId = generateCharacterId(dictionary);
	
	
	// create image tag
	dictionary[characterId] = {
		"type": TagDefine.TypeTagDefineBitsJPEG2,
		"id": characterId,
		"img": img
	};
	characterId++;
	
	// create shape tag
	ret.shapeId = characterId;
	dictionary[ret.shapeId] = {
		"type": TagDefine.TypeTagDefineShape,
		"id": ret.shapeId,
		"bounds": [-dx, width - dx, -dy, height - dy],
		"fillStyles": [
			{ "type": 65, "bitmapId": ret.shapeId - 1, "matrix": [20, 0, 0, 20, -dx / 20, -dy / 20] }
		],
		"lineStyles": [],
		"shapes": [
			{ "type": 2, "dx": width - dx, "dy": height - dy, "fillStyle1": 1 },
			{ "type": 0, "x": -width, "y": 0 },
			{ "type": 0, "x": 0, "y": -height },
			{ "type": 0, "x": width, "y": 0 },
			{ "type": 0, "x": 0, "y": height }
		]
	};
	characterId++;
	
	// create container mc
	ret.containerId = characterId;
	dictionary[ret.containerId] = {
		"type": TagDefine.TypeTagDefineSprite,
		"id": ret.containerId,
		"frameCount": 1,
		"tags": [
			{
				"type": TagDefine.TypeTagPlaceObject2,
				"characterId": ret.shapeId,
				"depth": 1,
				"move": 0,
				"matrix": [sx, 0, 0, sy, 0, 0]
			},
			{ "type": TagDefine.TypeTagShowFrame },
			{ "type": TagDefine.TypeTagEnd }
		]
	};
	
	// placeobject tag for container mc
	ret.placement = {
		"type": TagDefine.TypeTagPlaceObject2,
		"characterId": ret.containerId,
		"depth": 1,
		"matrix": [1, 0, 0, 1, 0, 0],
		"move": 0
	};
	return ret;
};

MovieClip.prototype.replaceMovieClip = function(img, dw, dh, keepAspect, xratio, yratio) {
	// get details
	var width = img.width;
	var height = img.height;
	if(!width || !height) {
		EngineLogW("[MovieClip#replaceMovieClip] Unable to replace because image might not be loaded.");
		return false;
	}
	
	var sx = dw? (dw / width): 1;
	var sy = dh? (dh / height): 1;
	if(keepAspect) {
		sy = sx = Math.min(sx, sy);
	}
	
	// delete all current display list
	this._resetDisplayList();
	
	// stop on current frame
	this.isPlaying = false;

	var info = createImageContainerMC(this.dictionary, img, width, height, sx, sy, xratio, yratio);
	
	// save the information in idinfo
	var parentMcInfo = this.parent.mcInfo;
	parentMcInfo.idCounter++;
	var newId = parentMcInfo.idCounter;
	var idInfo = {};
	var frame = this.properties._currentframe;
	idInfo.id = newId;
	idInfo.characterId = info.containerId;
	idInfo.layer = 1;
	idInfo.born = frame;
	idInfo.placement = info.placement;
	idInfo.ownerMC = {};
	this.mcInfo.idInfo[newId] = idInfo;
	
	// regsiter placement on frame-id-placement map
	for(var i = 1; i <= this.properties._totalframes; i++) {
		this.mcInfo.frameIdPlacementMap[i][newId] = info.placement;
	}
	
	// create the container mc
	this.createObject(this.frame, newId);
	return true;
};

MovieClip.prototype.clone = function(newName, depth) {
	var parent = this.parent;
	var parentMcInfo = parent.mcInfo;
	var idInfo = parent.mcInfo.idInfo[this.id];

	// clone idInfo and set new values
	var id = idInfo.id;
	parentMcInfo.idCounter++;
	var newId = parentMcInfo.idCounter;
	var newPlacement = clone(idInfo.placement);
	newPlacement.name = newName;
	var newIdInfo = clone(idInfo);
	newIdInfo.placement = newPlacement;
	newIdInfo.id = newId;
	newIdInfo.layer = depth;

	parent.mcInfo.idInfo[newId] = newIdInfo;
	parent.createObject(null, newId);

	// clone MovieClip and set new values
	var newMC = parent.childrenIdMap[newId];
	var properties = newMC.properties;
	var name = properties._name;
	properties = clone(this.properties);
	properties._name = name;
	properties._currentframe = 1;
	newMC.isCloned = true;
	newMC.lastModified = this.engine.frameCount;

	// add the information of the cloned MovieClip to mcInfo
	var frameIdPlacementMap = parentMcInfo.frameIdPlacementMap;
	var frameLength = frameIdPlacementMap.length;
	var startFrame = 0;
	var targetFrame = 0;
	for(var currentFrame = 1; currentFrame < frameLength; currentFrame++) {
		if(frameIdPlacementMap[currentFrame] && frameIdPlacementMap[currentFrame][id]) {
			if(startFrame == 0) {
				startFrame = currentFrame;
			}
			targetFrame = currentFrame - startFrame + 1;
			frameIdPlacementMap[targetFrame][newId] = clone(frameIdPlacementMap[currentFrame][id]);
			frameIdPlacementMap[targetFrame][newId].name = newName;
		} else if(startFrame > 0) {
			// repeat frames
			targetFrame = currentFrame - startFrame + 1;
			var cycleLength = currentFrame - startFrame;
			while(targetFrame < frameLength) {
				frameIdPlacementMap[targetFrame][newId] = frameIdPlacementMap[targetFrame - cycleLength][newId];
				targetFrame++;
			}
			break;
		}
	}

	return newMC;
};

MovieClip.prototype.createObject = function(frame, id, privilege) {
	var dictionary = this.dictionary;
	var option = this.engine.option;
	var idInfo = this.mcInfo.idInfo[id];
	var characterId = idInfo.characterId;
	var obj = dictionary[characterId];
	var layer = idInfo.layer;
	
	this.lastModified = this.engine.frameCount;
	if (this.displayList[layer]) {
		var count = this.displayListCount[layer] || 0;
		++count;
		layer = layer + "." + ("000" + count).slice(-4);
		idInfo.layer = layer;
		this.displayListCount[layer] = count;
	}
	this.displayList[layer] = idInfo;
	
	var isButton = false;
	switch(obj.type) {
	case TagDefine.TypeTagDefineButton:
	case TagDefine.TypeTagDefineButton2:
		isButton = true;
		/* no brake */
	case TagDefine.TypeTagDefineSprite:
		// create new Movie Clip
		var placement = idInfo.placement;
		var engine = this.engine;
		var mcInfoLibrary = this.mcInfoLibrary;
		var mcInfo = mcInfoLibrary[characterId];
		if(!mcInfo) {
			mcInfo = new MovieClipInfo();
			var analyzer = new Analyzer(engine, mcInfo, obj.tags, obj.characters, obj.actions);
			analyzer.analyze(dictionary);
			mcInfoLibrary[characterId] = mcInfo;
		}
		var mc = new MovieClip(engine, mcInfo, this, placement);
		idInfo.ownerMC[id] = mc;
		if(isButton) {
			mc.isPlaying = false;
			mc.isButton = true;
			this.engine.buttonList.push(mc);
		}
		// register new mc
		engine.timelineList.push(mc);
		var r = engine.gotoFrame(mc, 1, false); // immediately go first frame
		// register mc
		mc.id = id;
		this.childrenIdMap[id] = mc;
		// replace img
		if(option.replace && placement.name) {
			var replaceInfoList = option.replace;
			var len = replaceInfoList.length;
			for(var i = 0; i < len; i++) {
				var replaceInfo = replaceInfoList[i];
				if(placement.name == replaceInfo.name) {
					mc.replaceMovieClip(replaceInfo.img, replaceInfo.width, replaceInfo.height, replaceInfo.keepAspect, replaceInfo.xratio, replaceInfo.yratio);
				}
			}
		}
		break;
	case TagDefine.TypeTagDefineEditText:
		// change initial text
		// change initial text
		var def = dictionary[obj.id];
		var ret = getMovieClipAndTextFromSyntax(this, def.variableName);
		var container = ret[0];
		var vname = ret[1];

		if(container) {
			if(typeof(container.variables[vname]) == "undefined") {
				if(vname) {
					container.variables[vname] = def.initialText;
				}
			} else {
				def.initialText = container.variables[vname] + "";
			}
		} else {
			this.engine.option.debug && EngineLogD("[DefineEditText:variableName] unable to access: " + def.variableName);
		}
		break;
	}
};
MovieClip.prototype.removeObject = function(id) {
	var idInfo = this.mcInfo.idInfo[id];
	var characterId = idInfo.characterId;
	var layer = idInfo.layer;
	
	this.lastModified = this.engine.frameCount;

	// remove from display list
	delete this.displayList[layer];
	
	// if object is mc, remove recursively
	var childrenIdMap = this.childrenIdMap;
	var mc = childrenIdMap[id];
	delete childrenIdMap[id];
	mc && this.removeChildMC(mc);
};

MovieClip.prototype.removeChildMC = function(mc, removeAll) {
	mc.lastModified = this.engine.frameCount;

	// remove child
	if(!removeAll) {
		var parent = mc.parent;
		parent.lastModified = this.engine.frameCount;
		var children = parent.children;
		var len = children.length;
		for(var i = 0; i < len; i++) {
			if(mc == children[i]) {
				children.splice(i, 1);
				break;
			}
		}
		var childrenMap = parent.childrenMap[mc.properties._name];
		var len = childrenMap.length;
		for(var i = 0; i < len; i++) {
			if(mc == childrenMap[i]) {
				childrenMap.splice(i, 1);
				if(childrenMap.length == 0) {
					delete parent.childrenMap[mc.properties._name];
				}
				break;
			}
		}
	}
	// call remove recursively
	var children = mc.children;
	var len = mc.children.length;
	for(var i = 0; i < len; i++) {
		mc.removeChildMC(children[i], true);
	}
	// remove from timeline
	var timelineList = this.engine.timelineList;
	var len = timelineList.length;
	for(var i = 0; i < len; i++) {
		var tl = timelineList[i];
		if(tl == mc) {
			timelineList.splice(i, 1);
			break;
		}
	}
	var buttonList = this.engine.buttonList;
	var len = buttonList.length;
	for(var i = 0; i < len; i++) {
		var button = buttonList[i];
		if(button == mc) {
			buttonList.splice(i, 1);
			break;
		}
	}
	// set deleted flag
	mc.isDeleted = true;
};

MovieClip.prototype.findChild = function(name) {
	var childrenMap = this.childrenMap;
	var list = childrenMap[name];
	if(list && list[0]) {
		return list[0];
	} else {
		// try case insensitive match if mc is not found
		name = name.toLowerCase();
		for(var childName in childrenMap) {
			if(childName.toLowerCase() == name) {
				return childrenMap[childName][0];
			}
		}
	}
	return null;
};

MovieClip.prototype.calcScaleAndRotation = function() {
	this.lastModified = this.engine.frameCount;
	var prop = this.properties;
	prop._xscale = Math.sqrt(prop._scaleX * prop._scaleX + prop._rotate0 * prop._rotate0) * 100;
	prop._yscale = Math.sqrt(prop._scaleY * prop._scaleY + prop._rotate1 * prop._rotate1) * 100;
	prop._rotation = Math.atan2(prop._rotate0, prop._scaleX) * 180 / Math.PI;
	prop._rotation2 = Math.atan2(prop._scaleY, prop._rotate1) * 180 / Math.PI;
};

MovieClip.prototype.getMatrix = function() {
	var prop = this.properties;
	return [prop._scaleX, prop._rotate0, prop._rotate1, prop._scaleY, prop._x, prop._y];
};

MovieClip.prototype.setRotation = function(value) {
	var prop = this.properties;
	var rad = (value - prop._rotation) / 180 * Math.PI;
	var c = Math.cos(rad);
	var s = Math.sin(rad);
	
	var t = [c, s, -s, c, 0, 0];
	var t1 = transformXY(t, prop._scaleX, prop._rotate0);
	var t2 = transformXY(t, prop._rotate1, prop._scaleY);
	
	prop._scaleX = t1[0];
	prop._rotate0 = t1[1];
	prop._rotate1 = t2[0];
	prop._scaleY = t2[1];
	
	this.calcScaleAndRotation();
};
MovieClip.prototype.setXScale = function(value) {
	this.lastModified = this.engine.frameCount;
	var prop = this.properties;
	var current = prop._xscale;

	if(current != 0) {
		var rate = value / current;
		prop._scaleX *= rate;
		prop._rotate0 *= rate;
		
		if(value == 0) {
			prop._rotation = adjustRotation(prop._rotation);
		} else if(value < 0) {
			// If scale is negative, rotation turns 180 degrees
			prop._rotation = Math.atan2(prop._rotate0, prop._scaleX) * 180 / Math.PI;
		}
	} else {
		var rad = prop._rotation / 180 * Math.PI;
		prop._scaleX = value / 100 * Math.cos(rad);
		prop._rotate0 = value / 100 * Math.sin(rad);
	}
	// Because of calculation error of floating point, xscale and this value don't correspond.  Calculate again.
	prop._xscale = Math.sqrt(prop._scaleX * prop._scaleX + prop._rotate0 * prop._rotate0) * 100;
};
MovieClip.prototype.setYScale = function(value) {
	this.lastModified = this.engine.frameCount;
	var prop = this.properties;
	var current = prop._yscale;
	
	if(current != 0) {
		var rate = value / current;
		prop._scaleY *= rate;
		prop._rotate1 *= rate;

		if(value == 0) {
			prop._rotation2 = adjustRotation(prop._rotation2);
		} else if(value < 0) {
			// if negative, turns 180 deg
			prop._rotation2 = Math.atan2(prop._scaleY, prop._rotate1) * 180 / Math.PI;
		}
	} else {
		var rad = prop._rotation2 / 180 * Math.PI;
		prop._scaleY = value / 100 * Math.cos(rad);
		prop._rotate1 = value / 100 * Math.sin(rad);
	}
	prop._yscale = Math.sqrt(prop._scaleY * prop._scaleY + prop._rotate1 * prop._rotate1) * 100;
};

MovieClip.prototype.setProperty = function(name, value) {
	this.lastModified = this.engine.frameCount;
	this.properties[name] = value;
};

MovieClip.prototype.setPropertiesFromMatrix = function(matrix) {
	this.properties._scaleX = matrix[0];
	this.properties._rotate0 = matrix[1];
	this.properties._rotate1 = matrix[2];
	this.properties._scaleY = matrix[3];
	this.properties._x = matrix[4];
	this.properties._y = matrix[5];

	this.calcScaleAndRotation();
};

MovieClip.prototype.getTransformFromRoot = function() {
	var parent = this.parent;
	if(this.parent) {
		var matrix = this.isLocked? this.getMatrix(): parent.mcInfo.frameIdPlacementMap[parent.properties._currentframe][this.id].matrix;
		return mulTransform(parent.getTransformFromRoot(), matrix || [1,0,0,1,0,0]);
	} else {
		return this.engine.rootTransform || [1,0,0,1,0,0];
	}
};

MovieClip.prototype.isDisplayed = function(recursive) {
	if(recursive) {
		var mc = this;
		while(mc) {
			if(!mc.isDisplayed()) {
				return false;
			}
			mc = mc.parent;
		}
		return true;
	}
	var properties = this.properties;
	return properties._visible - 0 && properties._xscale > 0 && properties._yscale > 0;
};

MovieClip.prototype.getBounds = function(transform) {
	var displayList = this.displayList;

	// TODO We should check hitState(frame=4) instead of displayed objects on button hit detection.
	// But it's difficult to find undisplayed objects on current implementation.
	var frame = this.properties._currentframe;

	var ret = [Number.MAX_VALUE, -Number.MAX_VALUE, Number.MAX_VALUE, -Number.MAX_VALUE]; // left, right, top, bottom\

	for(var layer in displayList) {
		var idInfo = displayList[layer];
		var id = idInfo.id;
		var placement = this.mcInfo.frameIdPlacementMap[frame][id];

		var child = this.childrenIdMap[id];
		var currentLayerBounds;
		if(child) {
			var childTransform = child.isLocked? child.getMatrix(): placement.matrix;
			currentLayerBounds = child.getBounds(childTransform);
		} else {
			var def = this.dictionary[idInfo.characterId];
			var bounds = def.bounds;
			if(bounds) {
				currentLayerBounds = placement.matrix? transformRect(placement.matrix, bounds): bounds;
			} else {
				EngineLogE("bounds not found");
			}
		}
		if(currentLayerBounds[0] < ret[0]) {
			ret[0] = currentLayerBounds[0];
		}
		if(currentLayerBounds[1] > ret[1]) {
			ret[1] = currentLayerBounds[1];
		}
		if(currentLayerBounds[2] < ret[2]) {
			ret[2] = currentLayerBounds[2];
		}
		if(currentLayerBounds[3] > ret[3]) {
			ret[3] = currentLayerBounds[3];
		}

	}

	if(Object.keys(displayList).length == 0) {
		ret = [0,0,0,0];
	}

	// Argument 'transform' is transform from base movie clip to this one. If not passed, search by myself.
	if(!transform) {
		if(this.isLocked) {
			transform = this.getMatrix();
		} else {
			var parent = this.parent;
			if(parent) {
				var parentFrame = parent.properties._currentframe;
				transform = parent.mcInfo.frameIdPlacementMap[parentFrame][this.id].matrix;
			} else {
				transform = [1, 0, 0, 1, 0, 0];
			}
		}
	}
	return transformRect(transform, ret);
};

MovieClip.prototype.isHit = function(x, y) {
	var mc = this;
	while(mc) {
		if(!mc.isDisplayed()) {
			return false;
		}
		mc = mc.parent;
	}
	x *= 20;
	y *= 20;
	var bounds = this.getBounds(this.getTransformFromRoot());
	return bounds[0] <= x && x <= bounds[1]	&& bounds[2] <= y && y <= bounds[3];
};

var adjustRotation = function(r) {
	while(r > 180) {
		r -= 360;
	}
	while(r <= -180) {
		r += 360;
	}

	if(r <= -150) {
		return(180);
	} else if(r <= -120) {
		return(-135);
	} else if(r <= -60) {
		return(-90);
	} else if(r <= -30) {
		return(-45);
	} else if(r <= 30) {
		return(0);
	} else if(r <= 60) {
		return(45);
	} else if(r <= 120) {
		return(90);
	} else if(r <= 150) {
		return(135);
	} else {
		return(180);
	}
};

MovieClip.prototype.isModifiedSince = function(frameCount) {
	var lastModified = this.lastModified;
	if(lastModified >= frameCount) {
		return true;
	}
	if(this.isChildrenModifiedSince(frameCount)) {
		return true;
	}
	var mc = this.parent;
	while(mc) {
		if(mc.lastModified >= frameCount) {
			return true;
		}
		mc = mc.parent;
	}
	return false;
};

MovieClip.prototype.isChildrenModifiedSince = function(frameCount) {
	if(this.childrenModified.checked == this.engine.frameCount) {
		return this.childrenModified.modified;
	} else {
		this.childrenModified.checked = this.engine.frameCount;
		var displayList = this.displayList;
		var dictionary = this.dictionary;
		for(var layer in displayList) {
			var idInfo = displayList[layer];
			
			// check MC
			var childMC = this.childrenIdMap[idInfo.id];
			if(childMC && childMC.isModifiedSince(frameCount)) {
				this.childrenModified.modified = true;
				return true;
			}

			// check text
			if(dictionary[idInfo.placement.characterId].type == 37) { // text
				this.childrenModified.modified = true;
				return true;
			}
		}
		this.childrenModified.modified = false;
		return false;
	}
};

MovieClip.prototype.loadMovie = function(name, src, option) {
	var dataStore;
	var analyzer;
	var that = this;
	var onProgress = function() {
		analyzer.analyze(dictionary);  // parse partially
		if(!dataStore.completed) {
			return;
		}
		if(dataStore.loadingImageCount > 0) {
			// dataStore.loadingImageCount can be greater than 0 incidentally
			// so call onProgress again
			// Otherwise, the movie won't start
			setTimeout(onProgress, 0);
			return;
		}

		that.dictionary = dictionary;
		that.mcInfoLibrary = mcInfoLibrary;

		var rect = dataStore.header.frameSize;
		var originalWidth = (rect[1] - rect[0]) / 20;
		var originalHeight = (rect[3] - rect[2]) / 20;
		var width = option.width || originalWidth;
		var height = option.height || originalHeight;
		var scaleX = width / originalWidth;
		var scaleY = height / originalHeight;
		var tx = -width * option.xratio || 0;
		var ty = -height * option.yratio || 0;

		that._startMovie(characterId, dataStore.tagList, scaleX, scaleY, tx, ty, option.name, option.onready);
	};

	// define new dictionary and mcInfoLibrary for the movie.
	// these should be set to this movieclip after the movie is loaded
	var dictionary = { "name": this.absoluteName };
	var mcInfoLibrary = {};
	var characterId = generateCharacterId(dictionary);
	var mcInfo = mcInfoLibrary[characterId] = new MovieClipInfo();

	if(typeof src == "object") {
		dataStore = createDataStoreFromObject(src, this.engine.option.imageMap, onProgress);
		analyzer = new Analyzer(this.engine, mcInfo, dataStore.tagList);
		// call Analyzer#analyze() to parse tags immediatelly for the performance
		// (it is not called until all images are loaded)
		analyzer.analyze(dictionary);
		return true;
	}

	var data = Master.getInstance().data;
	dataStore = data[src];
	if(dataStore) {
		analyzer = new Analyzer(this.engine, mcInfo, dataStore.tagList);
		// call onProgress() immediatelly because the SWF file is already loaded
		onProgress();
		return true;
	}

	dataStore = data[src] = new Parser({
		onerror: option.onerror,
		// default value of delayEval is true
		// (delayEval will be true if option.delayEval is not specified)
		delayEval: option.delayEval || (option.delayEval == null)
	});
	analyzer = new Analyzer(this.engine, mcInfo, dataStore.tagList);
	dataStore.load(src, onProgress);

	return true;
};

MovieClip.prototype._startMovie = function(characterId, tagList, scaleX, scaleY, tx, ty, name, onready) {
	var engine = this.engine;
	this._resetDisplayList();

	// stop on current frame
	this.isPlaying = false;

	var dictionary = this.dictionary;
	// create container mc
	dictionary[characterId] = {
		"type": TagDefine.TypeTagDefineSprite,
		"id": characterId,
		"frameCount": 1,
		"tags": tagList
	};

	// placeobject tag for container mc
	var placement = {
		"type": TagDefine.TypeTagPlaceObject2,
		"characterId": characterId,
		"depth": 1,
		"matrix": [scaleX, 0, 0, scaleY, tx, ty],
		"move": 0,
		"name": name || ""
	};

	// save the information in idinfo
	var newId = ++this.mcInfo.idCounter;
	var frame = this.properties._currentframe;
	this.mcInfo.idInfo[newId] = {
		id: newId,
		characterId: characterId,
		layer: 1,
		born: frame,
		placement: placement,
		ownerMC: {}
	};

	// regsiter placement on frame-id-placement map
	for(var i = 1; i <= this.properties._totalframes; i++) {
		this.mcInfo.frameIdPlacementMap[i][newId] = placement;
	}

	// create the container mc
	this.createObject(this.frame, newId, null);
	onready && onready();
};

MovieClip.prototype._resetDisplayList = function() {
	var displayList = this.displayList;
	for(var layer in displayList) {
		var idInfo = displayList[layer];
		this.removeObject(idInfo.id);
	}
};

var generateCharacterId = function(dictionary) {
	// select id
	var characterId = 0x100000000; // not to conflict existing morph shape which is equal or less than 0xFFFFFFFF
	while(dictionary[characterId]) {
		characterId++;
	}
	return characterId;
};


/*//////////////////
  movieclipinfo.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var MovieClipInfo = function() {
	// movie clip information
	
	this.onupdate = null;
	// loaded frames
	this.framesLoaded = 0;
	// actual total frame, which apreares before TagEnd 
	this.actualTotalFrames = 0;
	
	// id list of the frame
	this.frameIdList = []; // frame -> existing id list
	// id list which are born in the frame
	this.frameBornIdList = []; // frame -> born id list
	// id list which disappear in the frame
	this.frameDeadIdList = []; // frame -> dead id list
	// get placement data from frame and id
	this.frameIdPlacementMap = []; // frame -> {id: placement} map
	// flag whether the placement is changed or not at the frame
	this.frameIdModifiedMap = []; // frame -> {id: modified} map
	// the mapping between id and characterId
	this.idInfo = {}; // id -> {id: id, placement: placement, characterId: characterId, layer: layer, born: frame}
	// frame name mapping
	this.frameLabelMap = {}; // Label Name -> frame
	// frame action mapping
	this.frameActionMap = {}; // frame -> [actions]
	// button action mapping
	this.buttonActionMap = {}; // key -> [actions]
	// list of frames which have '_noskip' label
	this.noskipFrameList = [];

	this.idCounter = 0;
};

MovieClipInfo.prototype.updateCallback = function() {
	this.onupdate && this.onupdate();
};


/*//////////////////
  vm.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var VM = function(engine) {
	// store arguments
	this.engine = engine;
	// prepare exceptional mc
	this.exceptionalMC = new MovieClip(engine, new MovieClipInfo(), null, null, true);
	
	// action list
	this.actionList = [];
	this.privilegeActionList = [];
	
	// contexts
	this.running = false;
	this.actionStack = [];
	this.contextStack = [];
	this.currentContext = null;
};

VM.prototype.addAction = function(mc, actions, privilege) {
	var actionStack = this.actionStack;
	if(actionStack && privilege) {
		debugger;
	}
	
	var list = actionStack || (privilege? this.privilegeActionList: this.actionList);
	list[list.length] = [mc, actions];
};

VM.prototype.executeAction = function(mc, actions, privilege) {
	if (mc.properties._currentframe == 0) {
		// e.g. called from the callback function of API#ready()
		this.addAction(mc, actions, privilege);
		return true;
	}

	var context = this.currentContext;
	var actionStack = this.actionStack;
	var contextStack = this.contextStack;
	// save the current arrays and make them empty
	// not to affect running executions
	// For example, the function of FSCommand2 can call API#gotoFrame()
	var currentActionStack = actionStack.splice(0, actionStack.length);
	var currentContextStack = contextStack.splice(0, contextStack.length);

	this.addAction(mc, actions, privilege);
	var isOk = this.run();
	if(!isOk) {
		// vm failed because try to go to non-loaded frame
		this.engine.option.debug && EngineLogD("gotoFrame: try to go to non-loading frame inside VM");
	}
	// restore variables
	this.currentContext = context;
	// use push not to change the reference of 'this.actionStack'
	actionStack.push.apply(actionStack, currentActionStack);
	contextStack.push.apply(contextStack, currentContextStack);

	return isOk;
};

VM.prototype.run = function() {
	var privilegeActionList = this.privilegeActionList;
	var actionList = this.actionList;
	var actionStack = this.actionStack;
	var contextStack = this.contextStack;
	// set all actions into actionList
	privilegeActionList.length && (actionStack = privilegeActionList, this.privilegeActionList = []);
	actionList.length && (actionStack.push.apply(actionStack, actionList), this.actionList = []);
	
	// running flag set
	var prevRunning = this.running;  // called from VM#executeActoin() if 'running' is 'true'
	this.running = true;
	// restore last context (resume from failed status)
	var context = this.currentContext;
	this.currentContext = null;
	while(actionStack.length) {
		var actionInfo = actionStack[0];
		var mc = actionInfo[0];
		context = context || {pc: 0, mc: mc, originalMC:mc, stack: [], finished: false, callInfo: null};
		if(!mc.isDeleted) {
			var f = actionInfo[1];
			var e = f(this, context, byteLength, byteSubstring, getMovieClipAndTextFromSyntax, getMovieClipFromTargetName, memberNo, clone, removeSprite, EngineLogD, EngineLogW);
			if(!e) {
				// failed because gotoFrame failed (not loaded frame called)
				this.currentContext = context;
				return false;
			}
			if(context.finished) {
				actionStack.shift(); // remove current stack from queue
				context = contextStack.pop(); // stack or undefined
			} else {
				contextStack[contextStack.length] = context;
				actionStack.unshift.apply(actionStack, context.callInfo);
				var len = context.callInfo.length;
				for(var i = 1; i < len; i++) {
					contextStack[contextStack.length] = null; // push callstack
				}
				context = null;
			}
		} else {
			actionStack.shift();
			context = contextStack.pop();
		}
	}
	this.running = prevRunning;
	return true;
};

var createActionFunction = function(actions, debug) {
	//return function(vm,context) {context.finished=true;return true;};
	var body = "var offset=context.pc;var mc=context.mc;var stack=context.stack;while(offset>=0){switch('o'+offset){/**/";
	var len = actions.length;
	for(var i = 0; i < len; i++) {
		var action = actions[i];
		body += "case 'o" + action.offset + "':";
		switch(action.code) {
		case ActionDefine.TypeActionPushDuplicate:
			body += "stack[stack.length]=stack[stack.length-1];/**/";
			break;
		case ActionDefine.TypeActionPop:
			body += "stack.length--;/**/";
			break;
		case ActionDefine.TypeActionAdd:
			body += "var a=(+stack[stack.length-1])||0;/**/";
			body += "var b=(+stack[stack.length-2])||0;/**/";
			body += "stack[stack.length-2]=a+b;/**/";
			body += "stack.length--;/**/";
			break;
		case ActionDefine.TypeActionSubtract:
			body += "var a=(+stack[stack.length-1])||0;/**/";
			body += "var b=(+stack[stack.length-2])||0;/**/";
			body += "stack[stack.length-2]=b-a;/**/";
			body += "stack.length--;/**/";
			break;
		case ActionDefine.TypeActionMultiply:
			body += "var a=(+stack[stack.length-1])||0;/**/";
			body += "var b=(+stack[stack.length-2])||0;/**/";
			body += "stack[stack.length-2]=a*b;/**/";
			body += "stack.length--;/**/";
			break;
		case ActionDefine.TypeActionDivide:
			body += "var a=(+stack[stack.length-1])||0;/**/";
			body += "var b=(+stack[stack.length-2])||0;/**/";
			body += "stack[stack.length-2]=(a==0)?'#ERROR':b/a;/**/";
			body += "stack.length--;/**/";
			break;
		case ActionDefine.TypeActionLess:
			body += "var a=(+stack.pop())||0;/**/";
			body += "var b=(+stack.pop())||0;/**/";
			body += "stack[stack.length]=(b<a)?1:0;/**/";
			break;
		case ActionDefine.TypeActionEquals:
			body += "var a=(+stack.pop())||0;/**/";
			body += "var b=(+stack.pop())||0;/**/";
			body += "stack[stack.length]=(a==b)?1:0;/**/";
			break;
		case ActionDefine.TypeActionAnd:
			body += "var a=(+stack.pop())||0;/**/";
			body += "var b=(+stack.pop())||0;/**/";
			body += "stack[stack.length]=(a&&b)?1:0;/**/";
			break;
		case ActionDefine.TypeActionOr:
			body += "var a=(+stack.pop())||0;/**/";
			body += "var b=(+stack.pop())||0;/**/";
			body += "stack[stack.length]=(a||b)?1:0;/**/";
			break;
		case ActionDefine.TypeActionNot:
			body += "var a=(+stack[stack.length-1])||0;/**/";
			body += "stack[stack.length-1]=(a==0)?1:0;/**/";
			break;
		case ActionDefine.TypeActionStringAdd:
			body += "var a=stack[stack.length-1];a=(a==null)?'':a;/**/";
			body += "var b=stack[stack.length-2];b=(b==null)?'':b;/**/";
			body += "stack[stack.length-2]=b+''+a;/**/";
			body += "stack.length--;/**/";
			break;
		case ActionDefine.TypeActionStringEquals:
			body += "var a=stack.pop()+'';/**/";
			body += "var b=stack.pop()+'';/**/";
			body += "stack[stack.length]=(a==b)?1:0;/**/";
			break;
		case ActionDefine.TypeActionStringExtract:
			body += "var count=+stack.pop();/**/";
			body += "var index=+stack.pop()-1;/**/";
			body += "var str=stack.pop()+'';/**/";
			body += "if(isNaN(count)||isNaN(index)){stack[stack.length]=''}else{/**/";
			body += "index=(index<0)?0:index;/**/";
			body += "count=(count<0)?byteLength(str):count;/**/";
			body += "stack[stack.length]=byteSubstring(str,index,count);}/**/";
			break;
		case ActionDefine.TypeActionMBStringExtract:
			body += "var count=+stack.pop();/**/";
			body += "var index=+stack.pop()-1;/**/";
			body += "var str=stack.pop()+'';/**/";
			body += "if(isNaN(count)||isNaN(index)){stack[stack.length]=''}else{/**/";
			body += "index=(index<0)?0:index;/**/";
			body += "count=(count<0)?str.length:count;/**/";
			body += "stack[stack.length]=str.substr(index,count);}/**/";
			break;
		case ActionDefine.TypeActionStringLength:
			body += "var str=stack[stack.length-1]+'';/**/";
			body += "stack[stack.length-1]=byteLength(str);/**/";
			break;
		case ActionDefine.TypeActionMBStringLength:
			body += "var str=stack[stack.length-1]+'';/**/";
			body += "stack[stack.length-1]=str.length;/**/";
			break;
		case ActionDefine.TypeActionStringLess:
			body += "var b=stack.pop()+'';/**/";
			body += "var a=stack.pop()+'';/**/";
			body += "stack[stack.length]=(a<b)?1:0;/**/";
			break;
		case ActionDefine.TypeActionToInteger:
			body += "stack[stack.length-1]=(+(stack[stack.length-1]))|0;/**/";
			break;
		case ActionDefine.TypeActionCharToAscii:
			EngineLogW("ActionCharToAscii: unimplemented correctly");
			body += "stack[stack.length-1]=(stack[stack.length-1]+'').charCodeAt(0);/**/";
			break;
		case ActionDefine.TypeActionAsciiToChar:
			EngineLogW("ActionAsciiToChar: unimplemented correctly");
			body += "stack[stack.length-1]=String.fromCharCode(stack[stack.length-1]);/**/";
			break;
		case ActionDefine.TypeActionMBCharToAscii:
			body += "stack[stack.length-1]=(stack[stack.length-1]+'').charCodeAt(0);/**/";
			break;
		case ActionDefine.TypeActionMBAsciiToChar:
			body += "stack[stack.length-1]=String.fromCharCode(stack[stack.length-1]);/**/";
			break;
		case ActionDefine.TypeActionIf:
			body += "var b=+stack.pop();/**/";
			body += "/**/if(b){offset=" + ((action.branchOffset == null)? "-1": (action.nextOffset + action.branchOffset)) + ";break;}";
			break;
		case ActionDefine.TypeActionJump:
			body += "/**/offset=" + ((action.branchOffset == null)? "-1": (action.nextOffset + action.branchOffset)) + ";break;";
			break;
		case ActionDefine.TypeActionPush:
			var llen = action.values.length;
			for(var j = 0; j < llen; j++) {
				var v = action.values[j];
				body += "/**/stack[stack.length]=";
				if(v == null) {
					body += "null;";
				} else if(typeof(v)=="string") {
					body += "unescape('" + escape(v) + "');";
				} else {
					body += v + ";";
				}
			}
			break;
		case ActionDefine.TypeActionGetVariable:
			body += "var syntax=stack.pop();/**/";
			body += "var value;/**/";
			body += "var ret=getMovieClipAndTextFromSyntax(mc,syntax);/**/";
			body += "var container=ret[0];var vname=ret[1];/**/";
			body += "value=(container&&(((container==vm.exceptionalMC)?vm.engine.rootMC:container).variables[vname]));/**/";
			body += "value=(typeof(value)=='undefined')?'':value;/**/";
			body += "stack[stack.length]=value;/**/";
			break;
		case ActionDefine.TypeActionSetVariable:
			body += "var value=stack.pop();/**/";
			body += "var vname=stack.pop();/**/";
			body += "var ret=getMovieClipAndTextFromSyntax(mc,vname);/**/";
			body += "ret[0] && (((ret[0]==vm.exceptionalMC)?vm.engine.rootMC:ret[0]).variables[ret[1]]=value);/**/";
			break;
		case ActionDefine.TypeActionGetProperty:
			body += "var p=stack.pop();/**/";
			body += "var path=stack.pop();/**/";
			body += "var target=getMovieClipFromTargetName(mc,path);/**/";
			body += "var name=memberNo[p];/**/";
			body += "if(target&&target!=vm.exceptionalMC){if(!name){stack[stack.length]=0}else{/**/";
			body += "switch(name){case'_target':stack[stack.length]=(target.parent&&target.absoluteName)||'/';break;/**/";
			body += "case'_width':var bounds=target.getBounds();stack[stack.length]=(bounds[1]-bounds[0])/20;break;/**/";
			body += "case'_height':var bounds=target.getBounds();stack[stack.length]=(bounds[3]-bounds[2])/20;break;/**/";
			body += "case'_x':case'_y':if(target.isLocked){stack[stack.length]=((target.properties[name]*50)|0)/50;}/**/";
			body += "else{var parent=target.parent;var frame=parent&&parent.properties._currentframe;var index=(name=='_x'?4:5);/**/";
			body += "stack[stack.length]=parent?((parent.mcInfo.frameIdPlacementMap[frame][target.id].matrix[index]*50)|0)/50:0}break;/**/";
			body += "default:stack[stack.length]=target.properties[name];}}}else{stack[stack.length]=p;}/**/";
			break;
		case ActionDefine.TypeActionSetProperty:
			body += "var value=stack.pop();/**/";
			body += "var p=stack.pop();/**/";
			body += "var path=stack.pop();/**/";
			body += "var target=getMovieClipFromTargetName(mc,path);/**/";
			body += "var name=memberNo[p];/**/";
			body += "if(target&&target!=vm.exceptionalMC){var isf=(value==parseFloat(value));switch(name){/**/";
			body += "case'_rotation':if(isf){target.isLocked=true;target.setRotation(+value);}break;/**/";
			body += "case'_xscale':if(isf){target.isLocked=true;target.setXScale(+value);}break;/**/";
			body += "case'_yscale':if(isf){target.isLocked=true;target.setYScale(+value);}break;/**/";
			body += "case'_alpha':case'_x':case'_y':if(isf){target.isLocked=true;target.setProperty(name,(+value)||0);}break;/**/";
			body += "case'_focusrect':case'_highquality':case'_visible':if(value==0||value==1){target.setProperty(name,+value);}break;/**/";
			body += "case'_width':var bounds=target.getBounds();var base=(bounds[1]-bounds[0])/20;var _sc=target.properties._xscale;/**/";
			body += "if(_sc!=0){base/=Math.abs(_sc)};target.isLocked=true;target.setXScale(+value/(base||1));break;/**/";
			body += "case'_height':var bounds=target.getBounds();var base=(bounds[3]-bounds[2])/20;var _sc=target.properties._yscale;/**/";
			body += "if(_sc!=0){base/=Math.abs(_sc)};target.isLocked=true;target.setYScale(+value/(base||1));break;/**/";
			body += "case'_currentframe':case'_target':case'_totalframes':case'_name':break;/**/";
			body += "default:target.properties[name]=value;break;}}/**/";
			break;
		case ActionDefine.TypeActionPlay:
			body += "mc.isPlaying=true;/**/";
			break;
		case ActionDefine.TypeActionStop:
			body += "mc.isPlaying=false;/**/";
			break;
		case ActionDefine.TypeActionCall:
			body += "var syntax=stack.pop();/**/";
			body += "var ret=getMovieClipAndTextFromSyntax(mc,syntax);/**/";
			body += "var target=ret[0];if(target&&!target.isDeleted){/**/";
			body += "var frameName=ret[1];var frameNo=target.mcInfo.frameLabelMap[(frameName+'')]||frameName;/**/";
			body += "if(!isNaN(parseInt(frameNo))){var actionList=target.mcInfo.frameActionMap[frameNo];if(actionList){/**/";
			body += "var len=actionList.length;var ret=[];for(var i=0;i<len;i++){ret[ret.length]=[target,actionList[i]];}/**/";
			body += "/**/context.finished=false;context.pc=" + action.nextOffset +";context.mc=mc;context.callInfo=ret;return true;}}}/**/";
			break;
		case ActionDefine.TypeActionGoToLabel:
			body += "/**/mc.isPlaying=false;var frameNo=mc.mcInfo.frameLabelMap[unescape('" + escape(action.label) +"')];/**/";
			body += "/**/if(frameNo){var ret=vm.engine.gotoFrame(mc,frameNo);if(!ret){context.pc=" + action.offset + ";context.mc=mc;return false;}}/**/";
			break;
		case ActionDefine.TypeActionGotoFrame:
			body += "/**/if(mc!=vm.exceptionalMC){mc.isPlaying=false;var ret=vm.engine.gotoFrame(mc," + action.frame +");";
			body += "/**/if(!ret){context.pc=" + action.offset + ";context.mc=mc;return false;}}/**/";
			break;
		case ActionDefine.TypeActionGotoFrame2:
			body += "var syntax=stack.pop()+'';var ret=getMovieClipAndTextFromSyntax(mc,syntax);var target=ret[0];/**/";
			body += "if(target&&target!=vm.exceptionalMC){var frameName=ret[1];var frameNo=target.mcInfo.frameLabelMap[(frameName+'')]||frameName;/**/";
			body += "/**/if(!isNaN(parseInt(frameNo))){target.isPlaying=" + (action.play?"true":"false") + ";var ret=vm.engine.gotoFrame(target,frameNo);/**/";
			body += "/**/if(!ret){context.pc=" + action.offset + ";context.mc=mc;stack[stack.length]=syntax;return false;}}}/**/"
			break;
		case ActionDefine.TypeActionNextFrame:
			body += "mc.isPlaying=false;var ret=vm.engine.gotoFrame(mc,mc.properties._currentframe+1);/**/";
			body += "/**/if(!ret){context.pc=" + action.offset + ";context.mc=mc;return false;}/**/";
			break;
		case ActionDefine.TypeActionPreviousFrame:
			body += "mc.isPlaying=false;var ret=vm.engine.gotoFrame(mc,mc.properties._currentframe-1);/**/"; // always success
			break;
		case ActionDefine.TypeActionSetTarget:
			body += "/**/mc=getMovieClipFromTargetName(context.originalMC,'" + action.name + "')||vm.exceptionalMC;/**/";
			break;
		case ActionDefine.TypeActionSetTarget2:
			body += "var targetName=stack.pop();mc=getMovieClipFromTargetName(context.originalMC,targetName)||vm.exceptionalMC;/**/";
			break;
		case ActionDefine.TypeActionGetURL2:
			body += "var targetSyntax=stack.pop();var url=stack.pop();/**/";

			if(action.loadTargetFlag) {
				EngineLogW("not implemented:GetURL2 load sprite. ignored");
				//break;
			}

			body += "/**/if(url){";
			if(action.sendVarsMethod==1 || action.sendVarsMethod==2) { // GET or POST
				body += "var vars=mc.variables;/**/";
				body += "var queryParams=[];for(var key in vars){queryParams.push(key+'='+(encodeURI(vars[key])||''))}/**/";
				body += "if(queryParams.length>0)url+=(url.indexOf('?')>=0?'&':'?')+queryParams.join('&');/**/";
			}
			if(action.loadVariablesFlag) {
				body += "var xhr=new XMLHttpRequest();/**/";
				switch(action.sendVarsMethod) {
				case 0: // None (GET without paraemters ??)
				case 1: // GET
					body += "xhr.open('GET', url, true);/**/";
					body += "xhr.send('');/**/";
					break;
				case 2: // POST
					body += "xhr.open('POST', url, true);/**/";
					body += "xhr.setRequestHeader('Content-Type' ,'application/x-www-form-urlencoded; charset=Shift-jis');/**/";
					body += "xhr.send(queryParams.join('&'));/**/";
					break;
				}
				body += "xhr.onreadystatechange=(function(currentMC){return function(){if(xhr.readyState == 4 && xhr.status == 200){/**/";
				body += "var targetMC=getMovieClipFromTargetName(currentMC,targetSyntax);/**/";
				body += "if(!targetMC){console.warn('[getURL2] Not found targetMC');targetMC=currentMC}/**/";
				body += "var responseArray=decodeURI(xhr.responseText).split('&');var len=responseArray.length;/**/";
				body += "for(var key=0;key<len;key++){var keyValue=responseArray[key].split('=');targetMC.variables[keyValue[0]]=keyValue[1];}/**/";
				body += "}};})(mc);/**/";
			}else{
				switch(action.sendVarsMethod) {
				case 0: // None (GET without paraemters ??)
				case 1: // GET
					body += "location.href=url;/**/";
					break;
				case 2: // POST
					body += "var form = document.createElement('form');document.body.appendChild(form);/**/";
					body += "form.action=url;form.method='post';var vars=mc.variables;/**/";
					body += "for(var key in vars){var input=document.createElement('input');input.type='hidden';input.name=key;input.value=encodeURI(vars[key]||'');form.appendChild(input);}/**/";
					body += "form.submit();/**/";
					break;
				}
			}
			// old Flash Player seems to remove MovieClip if 'url' argument is empty
			body += "}else{EngineLogW(\"'url' argument of getURL() is empty\");removeSprite(mc,targetSyntax);}/**/";
			break;
		case ActionDefine.TypeActionCloneSprite:
			body += "var depth=stack.pop();var newName=''+stack.pop();var sourceSyntax=''+stack.pop();/**/";
			body += "var sourceMC=getMovieClipFromTargetName(mc,sourceSyntax);/**/";
			body += "var characterId=sourceMC&&sourceMC.characterId;/**/";
			body += "var parent=(sourceMC&&sourceMC.parent)||null;/**/";
			body += "if(parent!=null){var dest = parent.displayList[depth];/**/";
			body += "if(dest){var destId=dest.id;if(dest.ownerMC&&dest.ownerMC[destId]&&dest.ownerMC[destId].isCloned){parent.removeObject(destId);}else{break;}}/**/";
			body += "var cloned=sourceMC.clone(newName,depth);cloned.properties._visible=1;}/**/";
			break;
		case ActionDefine.TypeActionRemoveSprite:
			body += "var targetSyntax=''+stack.pop();removeSprite(mc,targetSyntax);/**/";
			break;
		case ActionDefine.TypeActionGetTime:
			body += "stack[stack.length]=Date.now();/**/"; // TODO: Date.now() - engine.startTime
			break;
		case ActionDefine.TypeActionRandomNumber:
			body += "stack[stack.length-1]=(Math.random()*stack[stack.length-1])|0;/**/";
			break;
		case ActionDefine.TypeActionFSCommand2:
			body += "var size=stack.pop();var stackLen=stack.length;/**/";
			body += "if(stack[stackLen-1]=='JavaScript'){/**/";
			body += "var args=[];var jsFuncName = stack[stackLen-2];var jsFunc=eval(jsFuncName);if(typeof jsFunc!=='function'){EngineLogW('Function \"'+jsFuncName+'\" does not exist in the global');stack.length-=size;stack[stack.length]=-1;}else{stack.length-=2;var len=size-2;for(var i=0;i<len;i++){args[i]=stack.pop();}jsFunc.apply(null,args);stack[stack.length]=0;}/**/";
			body += "}else{stack.length-=size;stack[stack.length]=-1;}/**/";
			break;
		case ActionDefine.TypeActionTrace:
			body += debug? "EngineLogD('Trace: '+stack.pop());/**/": "stack.pop();/**/";
			break;
		case 0:
			break;
		default:
			EngineLogW("not implemented action:" + action.code);
			body += "/* not implemented */";
			break;
		}
	}
	body += "offset=-1;break;default:EngineLogE('jump miss');}}context.finished=true;return true;/**/";
	//body = body.split(";").join(";\n");
	//console.log(body);
	return new Function("/**/vm,context,byteLength,byteSubstring,getMovieClipAndTextFromSyntax,getMovieClipFromTargetName,memberNo,clone,removeSprite,EngineLogD,EngineLogW", body);
	//throw "e";
};

var createRawActionFunction = function(actions, debug) {
	return function(vm,context,byteLength,byteSubstring,getMovieClipAndTextFromSyntax,getMovieClipFromTargetName,memberNo,clone,removeSprite,EngineLogD,EngineLogW) {

		var mc=context.mc;
		var stack=context.stack;

		var offset2index = {};
		var len = actions.length;
		for(var i = 0; i < len; i++) {
			var action = actions[i];
			offset2index[action.offset] = i;
		}

		for(var i = offset2index[context.pc]; i < len; i++) {
			var action = actions[i];
			switch(action.code) {
			case ActionDefine.TypeActionPushDuplicate:
				stack[stack.length]=stack[stack.length-1];
				break;
			case ActionDefine.TypeActionPop:
				stack.length--;
				break;
			case ActionDefine.TypeActionAdd:
				var a=(+stack[stack.length-1])||0;
				var b=(+stack[stack.length-2])||0;
				stack[stack.length-2]=a+b;
				stack.length--;
				break;
			case ActionDefine.TypeActionSubtract:
				var a=(+stack[stack.length-1])||0;
				var b=(+stack[stack.length-2])||0;
				stack[stack.length-2]=b-a;
				stack.length--;
				break;
			case ActionDefine.TypeActionMultiply:
				var a=(+stack[stack.length-1])||0;
				var b=(+stack[stack.length-2])||0;
				stack[stack.length-2]=a*b;
				stack.length--;
				break;
			case ActionDefine.TypeActionDivide:
				var a=(+stack[stack.length-1])||0;
				var b=(+stack[stack.length-2])||0;
				stack[stack.length-2]=(a==0)?'#ERROR':b/a;
				stack.length--;
				break;
			case ActionDefine.TypeActionLess:
				var a=(+stack.pop())||0;
				var b=(+stack.pop())||0;
				stack[stack.length]=(b<a)?1:0;
				break;
			case ActionDefine.TypeActionEquals:
				var a=(+stack.pop())||0;
				var b=(+stack.pop())||0;
				stack[stack.length]=(a==b)?1:0;
				break;
			case ActionDefine.TypeActionAnd:
				var a=(+stack.pop())||0;
				var b=(+stack.pop())||0;
				stack[stack.length]=(a&&b)?1:0;
				break;
			case ActionDefine.TypeActionOr:
				var a=(+stack.pop())||0;
				var b=(+stack.pop())||0;
				stack[stack.length]=(a||b)?1:0;
				break;
			case ActionDefine.TypeActionNot:
				var a=(+stack[stack.length-1])||0;
				stack[stack.length-1]=(a==0)?1:0;
				break;
			case ActionDefine.TypeActionStringAdd:
				var a=stack[stack.length-1];a=(a==null)?'':a;
				var b=stack[stack.length-2];b=(b==null)?'':b;
				stack[stack.length-2]=b+''+a;
				stack.length--;
				break;
			case ActionDefine.TypeActionStringEquals:
				var a=stack.pop()+'';
				var b=stack.pop()+'';
				stack[stack.length]=(a==b)?1:0;
				break;
			case ActionDefine.TypeActionStringExtract:
				var count=+stack.pop();
				var index=+stack.pop()-1;
				var str=stack.pop()+'';
				if(isNaN(count)||isNaN(index)){stack[stack.length]=''}else{
				index=(index<0)?0:index;
				count=(count<0)?byteLength(str):count;
				stack[stack.length]=byteSubstring(str,index,count);}
				break;
			case ActionDefine.TypeActionMBStringExtract:
				var count=+stack.pop();
				var index=+stack.pop()-1;
				var str=stack.pop()+'';
				if(isNaN(count)||isNaN(index)){stack[stack.length]=''}else{
				index=(index<0)?0:index;
				count=(count<0)?str.length:count;
				stack[stack.length]=str.substr(index,count);}
				break;
			case ActionDefine.TypeActionStringLength:
				var str=stack[stack.length-1]+'';
				stack[stack.length-1]=byteLength(str);
				break;
			case ActionDefine.TypeActionMBStringLength:
				var str=stack[stack.length-1]+'';
				stack[stack.length-1]=str.length;
				break;
			case ActionDefine.TypeActionStringLess:
				var b=stack.pop()+'';
				var a=stack.pop()+'';
				stack[stack.length]=(a<b)?1:0;
				break;
			case ActionDefine.TypeActionToInteger:
				stack[stack.length-1]=(+(stack[stack.length-1]))|0;
				break;
			case ActionDefine.TypeActionCharToAscii:
				EngineLogW("ActionCharToAscii: unimplemented correctly");
				stack[stack.length-1]=(stack[stack.length-1]+'').charCodeAt(0);
				break;
			case ActionDefine.TypeActionAsciiToChar:
				EngineLogW("ActionAsciiToChar: unimplemented correctly");
				stack[stack.length-1]=String.fromCharCode(stack[stack.length-1]);
				break;
			case ActionDefine.TypeActionMBCharToAscii:
				stack[stack.length-1]=(stack[stack.length-1]+'').charCodeAt(0);
				break;
			case ActionDefine.TypeActionMBAsciiToChar:
				stack[stack.length-1]=String.fromCharCode(stack[stack.length-1]);
				break;
			case ActionDefine.TypeActionIf:
				var b=+stack.pop();
				if(b) i = (action.branchOffset == null)? len: offset2index[(action.nextOffset + action.branchOffset)]-1;
				break;
			case ActionDefine.TypeActionJump:
				i = (action.branchOffset == null)? len: offset2index[(action.nextOffset + action.branchOffset)]-1;
				break;
			case ActionDefine.TypeActionPush:
				Array.prototype.push.apply(stack, action.values);
				break;
			case ActionDefine.TypeActionGetVariable:
				var syntax=stack.pop();
				var value;
				var ret=getMovieClipAndTextFromSyntax(mc,syntax);
				var container=ret[0];var vname=ret[1];
				value=(container&&(((container==vm.exceptionalMC)?vm.engine.rootMC:container).variables[vname]));
				value=(typeof(value)=='undefined')?'':value;
				stack[stack.length]=value;
				break;
			case ActionDefine.TypeActionSetVariable:
				var value=stack.pop();
				var vname=stack.pop();
				var ret=getMovieClipAndTextFromSyntax(mc,vname);
				ret[0] && (((ret[0]==vm.exceptionalMC)?vm.engine.rootMC:ret[0]).variables[ret[1]]=value);
				break;
			case ActionDefine.TypeActionGetProperty:
				var p=stack.pop();
				var path=stack.pop();
				var target=getMovieClipFromTargetName(mc,path);
				var name=memberNo[p];
				if(target&&target!=vm.exceptionalMC){if(!name){stack[stack.length]=0}else{
				switch(name){case'_target':stack[stack.length]=(target.parent&&target.absoluteName)||'/';break;
				case'_width':var bounds=target.getBounds();stack[stack.length]=(bounds[1]-bounds[0])/20;break;
				case'_height':var bounds=target.getBounds();stack[stack.length]=(bounds[3]-bounds[2])/20;break;
				case'_x':case'_y':if(target.isLocked){stack[stack.length]=((target.properties[name]*50)|0)/50;}
				else{var parent=target.parent;var frame=parent&&parent.properties._currentframe;var index=(name=='_x'?4:5);
				stack[stack.length]=parent?((parent.mcInfo.frameIdPlacementMap[frame][target.id].matrix[index]*50)|0)/50:0;}break;
				default:stack[stack.length]=target.properties[name];}}}else{stack[stack.length]=p;}
				break;
			case ActionDefine.TypeActionSetProperty:
				var value=stack.pop();
				var p=stack.pop();
				var path=stack.pop();
				var target=getMovieClipFromTargetName(mc,path);
				var name=memberNo[p];
				if(target&&target!=vm.exceptionalMC){var isf=(value==parseFloat(value));switch(name){
				case'_rotation':if(isf){target.isLocked=true;target.setRotation(+value);}break;
				case'_xscale':if(isf){target.isLocked=true;target.setXScale(+value);}break;
				case'_yscale':if(isf){target.isLocked=true;target.setYScale(+value);}break;
				case'_alpha':case'_x':case'_y':if(isf){target.isLocked=true;target.setProperty(name,(+value)||0);}break;
				case'_focusrect':case'_highquality':case'_visible':if(value==0||value==1){target.setProperty(name,+value);}break;
				case'_width':var bounds=target.getBounds();var base=(bounds[1]-bounds[0])/20;var _sc=target.properties._xscale;
				if(_sc!=0){base/=Math.abs(_sc)};target.isLocked=true;target.setXScale(+value/(base||1));break;
				case'_height':var bounds=target.getBounds();var base=(bounds[3]-bounds[2])/20;var _sc=target.properties._yscale;
				if(_sc!=0){base/=Math.abs(_sc)};target.isLocked=true;target.setYScale(+value/(base||1));break;
				case'_currentframe':case'_target':case'_totalframes':case'_name':break;
				default:target.properties[name]=value;break;}}
				break;
			case ActionDefine.TypeActionPlay:
				mc.isPlaying=true;
				break;
			case ActionDefine.TypeActionStop:
				mc.isPlaying=false;
				break;
			case ActionDefine.TypeActionCall:
				var syntax=stack.pop();
				var ret=getMovieClipAndTextFromSyntax(mc,syntax);
				var target=ret[0];if(target&&!target.isDeleted){
				var frameName=ret[1];var frameNo=target.mcInfo.frameLabelMap[(frameName+'')]||frameName;
				if(!isNaN(parseInt(frameNo))){var actionList=target.mcInfo.frameActionMap[frameNo];if(actionList){
				var actLen=actionList.length;var ret=[];for(var j=0;j<actLen;j++){ret[ret.length]=[target,actionList[j]];}
				context.finished=false;context.pc=action.nextOffset;context.mc=mc;context.callInfo=ret;return true;}}}
				break;
			case ActionDefine.TypeActionGoToLabel:
				mc.isPlaying=false;var frameNo=mc.mcInfo.frameLabelMap[action.label];
				if(frameNo){var ret=vm.engine.gotoFrame(mc,frameNo);if(!ret){context.pc=action.offset;context.mc=mc;return false;}}
				break;
			case ActionDefine.TypeActionGotoFrame:
				if(mc!=vm.exceptionalMC){mc.isPlaying=false;var ret=vm.engine.gotoFrame(mc,action.frame);
				if(!ret){context.pc=action.frame;context.mc=mc;return false;}}
				break;
			case ActionDefine.TypeActionGotoFrame2:
				var syntax=stack.pop()+'';var ret=getMovieClipAndTextFromSyntax(mc,syntax);var target=ret[0];
				if(target&&target!=vm.exceptionalMC){var frameName=ret[1];var frameNo=target.mcInfo.frameLabelMap[(frameName+'')]||frameName;
				if(!isNaN(parseInt(frameNo))){target.isPlaying=action.play;var ret=vm.engine.gotoFrame(target,frameNo);
				if(!ret){context.pc=action.offset;context.mc=mc;stack[stack.length]=syntax;return false;}}}
				break;
			case ActionDefine.TypeActionNextFrame:
				mc.isPlaying=false;var ret=vm.engine.gotoFrame(mc,mc.properties._currentframe+1);
				if(!ret){context.pc=action.offset;context.mc=mc;return false;}
				break;
			case ActionDefine.TypeActionPreviousFrame:
				mc.isPlaying=false;var ret=vm.engine.gotoFrame(mc,mc.properties._currentframe-1); // always success
				break;
			case ActionDefine.TypeActionSetTarget:
				mc=getMovieClipFromTargetName(context.originalMC,action.name)||vm.exceptionalMC;
				break;
			case ActionDefine.TypeActionSetTarget2:
				var targetName=stack.pop();mc=getMovieClipFromTargetName(context.originalMC,targetName)||vm.exceptionalMC;
				break;
			case ActionDefine.TypeActionGetURL2:
				if(action.loadTargetFlag) {
					EngineLogW("not implemented:GetURL2 load sprite. ignored");
				}

				var targetSyntax=stack.pop();var url=stack.pop();
				if(url){
					if(action.sendVarsMethod==1 || action.sendVarsMethod==2) { // GET or POST
						var vars=mc.variables;
						var queryParams=[];for(var key in vars){queryParams.push(key+'='+(encodeURI(vars[key])||''))}
						if(queryParams.length>0)url+=(url.indexOf('?')>=0?'&':'?')+queryParams.join('&');
					}
					if(action.loadVariablesFlag) {
						var xhr=new XMLHttpRequest();
						switch(action.sendVarsMethod) {
						case 0: // None (GET without paraemters ??)
						case 1: // GET
							xhr.open('GET', url, true);
							xhr.send('');
							break;
						case 2: // POST
							xhr.open('POST', url, true);
							xhr.setRequestHeader('Content-Type' ,'application/x-www-form-urlencoded; charset=Shift-jis');
							xhr.send(queryParams.join('&'));
						break;
						}
						xhr.onreadystatechange=(function(currentMC){return function(){if(xhr.readyState == 4 && xhr.status == 200){
						var targetMC=getMovieClipFromTargetName(currentMC,targetSyntax);
						if(!targetMC){console.warn('[getURL2] Not found targetMC');targetMC=currentMC}
						var responseArray=decodeURI(xhr.responseText).split('&');var resLen=responseArray.length;
						for(var key=0;key<resLen;key++){var keyValue=responseArray[key].split('=');targetMC.variables[keyValue[0]]=keyValue[1];}
						}};})(mc);
					}else{
						switch(action.sendVarsMethod) {
						case 0: // None (GET without paraemters ??)
						case 1: // GET
							location.href=url;
							break;
						case 2: // POST
							var form = document.createElement('form');document.body.appendChild(form);
							form.action=url;form.method='post';var vars=mc.variables;
							for(var key in vars){var input=document.createElement('input');input.type='hidden';input.name=key;input.value=encodeURI(vars[key]||'');form.appendChild(input);}
							form.submit();
							break;
						}
					}
				}else{
					EngineLogW("'url' argument of getURL() is empty");
					// old Flash Player seems to remove MovieClip if 'url' argument is empty
					removeSprite(mc,targetSyntax);
				}
				break;
			case ActionDefine.TypeActionCloneSprite:
				var depth=stack.pop();var newName=''+stack.pop();var sourceSyntax=''+stack.pop();
				var sourceMC=getMovieClipFromTargetName(mc,sourceSyntax);
				var characterId=sourceMC&&sourceMC.characterId;
				var parent=(sourceMC&&sourceMC.parent)||null;
				if(parent!=null){var dest = parent.displayList[depth];
				if(dest){var destId=dest.id;if(dest.ownerMC&&dest.ownerMC[destId]&&dest.ownerMC[destId].isCloned){parent.removeObject(destId);}else{return -1;}}
				var cloned=sourceMC.clone(newName,depth);cloned.properties._visible=1;}
				break;
			case ActionDefine.TypeActionRemoveSprite:
				var targetSyntax=''+stack.pop();removeSprite(mc,targetSyntax);
				break;
			case ActionDefine.TypeActionGetTime:
				stack[stack.length]=Date.now(); // TODO: Date.now() - engine.startTime
				break;
			case ActionDefine.TypeActionRandomNumber:
				stack[stack.length-1]=(Math.random()*stack[stack.length-1])|0;
				break;
			case ActionDefine.TypeActionFSCommand2:
				var size=stack.pop();var stackLen=stack.length;
				if(stack[stackLen-1]=='JavaScript'){
					var args=[];
					var jsFuncName = stack[stackLen-2];
					var jsFunc=eval(jsFuncName);
					if(typeof jsFunc !== 'function'){
						EngineLogW('Function "'+jsFuncName+'" does not exist in the global');
						stack.length-=size;stack[stack.length]=-1;
						break;
					}
					stack.length-=2;
					var argc=size-2;
					for(var j=0;j<argc;j++){
						args[j]=stack.pop();
					}
					jsFunc.apply(null,args);
					stack[stack.length]=0;
				}else{
					stack.length-=size;stack[stack.length]=-1;
				}
				break;
			case ActionDefine.TypeActionTrace:
				debug? EngineLogD("Trace: "+stack.pop()): stack.pop();
				break;
			case 0:
				break;
			default:
				EngineLogW("not implemented action:" + action.code);
				/* not implemented */
				break;
			}
		}
		context.finished=true;
		return true;

	}
};

var byteLength = function(str) {
	var len = 0;
	for(var i = 0; i < str.length; i++) {
		len += isHankaku(str.charAt(i)) ? 1 : 2;
	}
	return len;
};

var byteSubstring = function(targetString, index, count) {
	var currentPos = 0;
	var currentLength = 0;
	var result = [];
	var resultLength = 0;

	// Find start position
	while(currentLength < index) {
		var str = targetString.charAt(currentPos);
		var len = isHankaku(str) ? 1 : 2;

		currentLength += len;
		currentPos++;
	}
	// start from half-byte char
	if(currentLength != index) {
		result.push("\uFF65"); // naka-guro
		resultLength = 1;
	}

	for(;currentPos < targetString.length && resultLength < count; currentPos++) {
		var str = targetString.charAt(currentPos);
		var len = isHankaku(str) ? 1 : 2;

		if(resultLength + len > count) {
			result[result.length] = "\uFF65";
			resultLength += 1;
		} else {
			result[result.length] = str;
			resultLength += len;
		}
	}

	return result.join("");
};

var getMovieClipAndTextFromSyntax = function(mc, syntax) {
	var container = (mc.isButton && mc.parent) || mc;
	var vname = syntax + "";
	var ret = vname.split(":");
	if(ret.length == 2) {
		container = getMovieClipFromTargetName(mc, ret[0]);
		vname = ret[1];
	}
	return [container, vname];
};

var getMovieClipFromTargetName = function(mc, name) {
	if(name == "") {
		return (!mc.exception && mc) || null;
	}
	mc = (mc.exception && mc.engine.rootMC) || mc;
	if(name == "_level0") {
		return mc.engine.rootMC;
	}
	var ret = name.split("/");
	var index = 0;
	if(ret[0] == "") {
		mc = mc.engine.rootMC;
		index++;
	}
	
	var str;
	for(; index < ret.length; index++) {
		str = ret[index];
		if(str == "" || str == ".") {
		} else if(str == "..") {
			if(mc.parent) {
				mc = mc.parent;
				while(mc.isButton) {
					mc = mc.parent;
				}
			} else {
				return null;
			}
		} else {
			(str.charAt(0) == ".") && (str = str.substring(1));
			mc = mc.findChild(str);
			if(!mc) {
				return null;
			}
		}
	}
	return mc;
};

var memberNo = [
	"_x", "_y", "_xscale", "_yscale", "_currentframe", "_totalframes",
	"_alpha", "_visible", "_width", "_height", "_rotation", "_target",
	"_framesloaded", "_name", "_droptarget", "_url", "_highquality",
	"_focusrect"/*, "_soundbuftime", "_quality", "_xmouse", "_ymouse"*/];


/*
	byteLength
	byteSubstring
	getMovieClipAndTextFromSyntax
	getMovieClipFromTargetName
	memberNo*/

var clone = function (obj1) {
	var obj2 = {};
	for (var v in obj1) {
		obj2[v] = obj1[v];
	}
	return obj2;
};

var removeSprite = function(mc, syntax) {
	// Determine target
	var target = getMovieClipFromTargetName(mc, syntax);
	var parent = target? target.parent: null;
	if(parent == null || target == null) {
		// don't allow if target doesn't exist or target is rootMC
		return;
	}

	for(var layer in parent.displayList) {
		// Specification : MC<16384 cannot be deleted.
		if(layer >= 16384) {
			var idInfo = parent.displayList[layer];
			mc = idInfo.ownerMC[idInfo.id];
			if(mc == target) {
				if(mc.isCloned) {
					// Delete
					parent.removeObject(idInfo.id);
					return;
				} else {
					EngineLogW("[removeSprite] not cloned", mc, syntax);
				}
			}
		}
	}
};


/*//////////////////
  api.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var API = function(engine) {
	this.engine = engine;
};

API.prototype.gotoFrame = function(name, frame, sync) {
	var engine = this.engine;
	var mc = getMovieClipFromTargetName(engine.rootMC, name);
	if (!mc) {
		return false;
	}
	frame = +(mc.mcInfo.frameLabelMap[(frame + "")] || frame);
	// create action function
	if(!frame) {
		return false;	
	}
	var actions = createActionFunction([
		{code: ActionDefine.TypeActionGotoFrame, frame: frame, offset:0},
		{code: ActionDefine.TypeActionPlay, offset:4}
	]);

	if(sync || typeof(sync) === "undefined") {
		engine.vm.executeAction(mc, actions);
		return true;
	}

	// for backward compatibility
	// add action
	engine.vm.addAction(mc, actions);
 	return true;
};

API.prototype.gotoAndStop = function(name, frame, sync) {
	var engine = this.engine;
	var mc = getMovieClipFromTargetName(engine.rootMC, name);
	if (!mc) {
		return false;
	}
	frame = +(mc.mcInfo.frameLabelMap[(frame + "")] || frame);
	// create action function
	var actions = createActionFunction([
		{code: ActionDefine.TypeActionGotoFrame, frame: frame, offset:0},
		{code: ActionDefine.TypeActionStop, offset: 0}
	]);

	if(sync || typeof(sync) === "undefined") {
		engine.vm.executeAction(mc, actions);
		return true;
	}

	// for backward compatibility
	// add action
	engine.vm.addAction(mc, actions);
 	return true;
};

API.prototype.keyDown = function(key) {
	this.engine.touch.keyDown(key);
};

API.prototype.play = function(name) {
	var engine = this.engine;
	var mc = (name && getMovieClipFromTargetName(engine.rootMC, name)) || engine.rootMC;
	if (!mc) {
		return false;
	}
	mc.isPlaying = true;
	//var actions = createActionFunction([
	//	{code: ActionDefine.TypeActionPlay, offset: 0}
	//]);
	//engine.vm.addAction(mc, actions);
	return true;
};

API.prototype.stop = function(name) {
	var engine = this.engine;
	var mc = (name && getMovieClipFromTargetName(engine.rootMC, name)) || engine.rootMC;
	if (!mc) {
		return false;
	}
	var actions = createActionFunction([
		{code: ActionDefine.TypeActionStop, offset: 0}
	]);
	engine.vm.addAction(mc, actions);
	return true;
};

API.prototype.stopAll = function(name) {
	var engine = this.engine;
	var mc = (name && getMovieClipFromTargetName(engine.rootMC, name)) || engine.rootMC;
	if (!mc) {
		return false;
	}
	
	var stopMC = function(target) {
		var actions = createActionFunction([
			{code: ActionDefine.TypeActionStop, offset: 0}
		]);
		engine.vm.addAction(target, actions);

		var children = target.children;
		var len = children.length;
		for(var i = 0; i < len; i++) {
			stopMC(children[i]);
		}
	};

	stopMC(mc);
	return true;
};

API.prototype.getVariable = function(name, variableName) {
	var engine = this.engine;
	var mc = getMovieClipFromTargetName(engine.rootMC, name);
	if (!mc) {
		return undefined;
	}

	return mc.variables[variableName];
};

API.prototype.getVariables = function(name, variableNames) {
	var mc = getMovieClipFromTargetName(this.engine.rootMC, name);
	if(!mc) {
		return;
	}

	if(!variableNames) {
		return mc.variables;
	} else if(!(variableNames instanceof Array)) {
		EngineLogW("variableNames should be an Array.");
		return;
	}

	var ret = {};
	var variables = mc.variables;
	var len = variableNames.length;
	var variableName;
	for(var i = 0; i < len; i++) {
		variableName = variableNames[i];
		if(variables.hasOwnProperty(variableName)) {
			ret[variableName] = variables[variableName];
		}
	}
	return ret;
};

API.prototype.destroy = function() {
	this.engine.touch.removeAllListeners();
	var master = Master.getInstance();
	return master.removeEngine(this.engine);
};

API.prototype.setVariable = function(name, variableName, value) {
	var engine = this.engine;
	var mc = getMovieClipFromTargetName(engine.rootMC, name);
	if (!mc) {
		return false;
	}

	mc.variables[variableName] = value;
	return true;
};

API.prototype.setVariables = function(name, obj) {
	var mc = getMovieClipFromTargetName(this.engine.rootMC, name);
	if(!mc) {
		return false;
	}

	var variables = mc.variables;
	for(var variableName in obj) {
		variables[variableName] = obj[variableName];
	}
	return true;
};

var getProperty = function(that, name, propertyName) {
	var engine = that.engine;
	var mc = (name && getMovieClipFromTargetName(engine.rootMC, name));
	if (!mc) {
		return void 0;
	}

	return mc.properties[propertyName];
};

API.prototype.getCurrentFrame = function(name) {
	return getProperty(this, (name || "/"), "_currentframe");
};

API.prototype.getTotalFrames = function(name) {
	return getProperty(this, (name || "/"), "_totalframes");
};

API.prototype.getVisible = function(name) {
	return getProperty(this, (name || "/"), "_visible");
};

API.prototype.setVisible = function(name, value) {
	var engine = this.engine;
	var mc = getMovieClipFromTargetName(engine.rootMC, name);
	if (!mc) {
		return false;
	}

	var num = +value;  // convert value to a number
	if(num == 0 || num == 1) {
		mc.setProperty("_visible", num);
		return true;
	} else {
		EngineLogW("Invalid value: " + value);
		return false;
	}
};

API.prototype.setPosition = function(name, x, y) {
	var mc = getMovieClipFromTargetName(this.engine.rootMC, name);
	if (!mc) {
		return false;
	}
	mc.isLocked = true;
	mc.setProperty("_x", (+x) || 0);
	mc.setProperty("_y", (+y) || 0);
	return true;
};

// FIXME: property names will be mangled and this method won't work correctly
API.prototype.setMovieClipProperty = function(name, propName, value) {
	var engine = this.engine;
	var mc = getMovieClipFromTargetName(engine.rootMC, name);
	if (!mc) {
		return false;
	}
	switch(propName) {
	case '_xscale':
		mc.isLocked = true;
		mc.setXScale((+value) || 0);
		break;
	case '_yscale':
		mc.isLocked = true;
		mc.setYScale((+value) || 0);
		break;
	case '_rotation':
		mc.isLocked = true;
		mc.setRotation((+value) || 0);
		break;
	case '_x':
	case '_y':
	case '_alpha':
		mc.isLocked = true;
		mc.setProperty(propName, (+value) || 0);
		break;
	case '_focusrect':
	case '_highquality':
	case '_visible':
		if(value == 0 || value == 1) {
			mc.setProperty(propName, (+value));
		}
		break;
	default:
		return false;
	}
	return true;
};

API.prototype.getMovieClipProperty = function(name, propName) {
	var engine = this.engine;
	var mc = getMovieClipFromTargetName(engine.rootMC, name);
	if (mc) {
		return mc.properties[propName];
	}
};

API.prototype.ready = function(func) {
	if(!this.engine.loadCompleted) {
		this.engine.readyCallbacks.push(func);
	} else {
		func();
	}
};

API.prototype.engineStart = function() {
	this.engine.running = true;
	return true;
};

API.prototype.engineStop = function() {
	this.engine.running = false;
	return true;
};

API.prototype.getMovieClipNames = function(name) {
	var engine = this.engine;
	var mc = (name && getMovieClipFromTargetName(engine.rootMC, name)) || engine.rootMC;
	if (!mc) {
		return null;
	}
	return Object.keys(mc.childrenMap);
};

API.prototype.getFrameLabelMap = function(name) {
	var engine = this.engine;
	var mc = (name && getMovieClipFromTargetName(engine.rootMC, name)) || engine.rootMC;
	if (!mc) {
		return null;
	}
	var map = mc.mcInfo.frameLabelMap;
	var ret = {};
	for(var key in map) {
		ret[key] = map[key];
	}
	return ret;
};

API.prototype._getCacheImageInfo = function() {
	var renderer = this.engine.renderer;
	return renderer && renderer.cachedImageInfo;
};

API.prototype.replaceMovieClip = function(name, image, width, height, keepAspect, xratio, yratio) {
	var engine = this.engine;
	
	var mcList = engine.timelineList;
	for(var i = 0; i < mcList.length; i++) {
		var mc = mcList[i];
		if(mc.properties._name == name) {
			mc.replaceMovieClip(image, width, height, keepAspect, xratio, yratio);
		}
	}
	var replaceList = engine.option.replace || (engine.option.replace = []);
	for(var i = 0; i < replaceList.length; i++) {
		var replace = replaceList[i];
		if(replace.name == name) {
			replace.img = image;
			replace.width = width;
			replace.height = height;
			replace.keepAspect = keepAspect;
			replace.xratio = xratio;
			replace.yratio = yratio;
			return;
		}
	}
	replaceList.push({name: name, img: image, width: width, height: height, keepAspect: keepAspect, xratio: xratio, yratio: yratio});
	return;
};

API.prototype.getRenderingContext = function() {
	return this.engine && this.engine.renderer && this.engine.renderer.ctx;
};

API.prototype._getStatics = function() {
	return {
		_frameCount: this.engine.frameCount,
		renderCount: this.engine.renderCount
	};
};

API.prototype.getMovieClipNamesAtPoint = function(x, y) {
	var movieClipNames = [];
	x *= 20;
	y *= 20;

	var addMovieClipName = function(mc) {
		var bounds = mc.getBounds(mc.getTransformFromRoot());
		if (bounds[0] <= x && x <= bounds[1] && bounds[2] <= y && y <= bounds[3]) {
			movieClipNames.push(mc.absoluteName || "/");
			var children = mc.children;
			var len = children.length;
			for (var i = 0; i < len; i++) {
				addMovieClipName(children[i]);
			}
		}
	};
	addMovieClipName(this.engine.rootMC);

	return movieClipNames;
};

API.prototype.addEventListener = function(eventName, handler, name) {
	switch(eventName.toLowerCase()) {
	case "enterframe":
		var mc = getMovieClipFromTargetName(this.engine.rootMC, name);
		if(!mc) {
			return false;
		}
		var index = mc.onEnterFrames.indexOf(handler);
		if(index !== -1) {
			// handler is already registered
			return false;
		}
		mc.onEnterFrames.push(handler);
		break;
	case "movieclipcreate":
		var engine = this.engine;
		var index = engine.onCreateMC.indexOf(handler);
		if(index !== -1) {
			// handler is already registered
			return false;
		}
		engine.onCreateMC.push(handler);
		break;
	default:
		EngineLogW("Invalid event: " + eventName);
		break;
	}
	return true;
};

API.prototype.removeEventListener = function(eventName, handler, name) {
	switch(eventName.toLowerCase()) {
	case "enterframe":
		var mc = getMovieClipFromTargetName(this.engine.rootMC, name);
		if(!mc) {
			return false;
		}
		var index = mc.onEnterFrames.indexOf(handler);
		if(index === -1) {
			// handler is not registered
			return false;
		}
		mc.onEnterFrames.splice(index, 1);
		break;
	case "movieclipcreate":
		var engine = this.engine;
		var index = engine.onCreateMC.indexOf(handler);
		if(index === -1) {
			// handler is not registered
			return false;
		}
		engine.onCreateMC.splice(index, 1);
		break;
	default:
		EngineLogW("Invalid event: " + eventName);
		break;
	}
	return true;
};

API.prototype.redraw = function() {
	this.engine.renderer.render();
};

API.prototype.getFPS = function() {
	return this.engine.getFPS();
};

API.prototype.setFPS = function(fps) {
	this.engine.setFPS(fps);
};

API.prototype.getFrameSkipRatio = function() {
	return this.engine.getFrameSkipRatio();
};

API.prototype.setFrameSkipRatio = function(ratio) {
	return this.engine.setFrameSkipRatio(ratio);
};

API.prototype.callActions = function(name, frame) {
	var engine = this.engine;
	var mc = getMovieClipFromTargetName(engine.rootMC, name);
	if(!mc) {
		return false;
	}
	frame = +(mc.mcInfo.frameLabelMap[(frame + "")] || frame);
	// create action function
	if(!frame) {
		return false;
	}
	var actions = createActionFunction([
		{code: ActionDefine.TypeActionPush, values: [frame], offset: 0},
		{code: ActionDefine.TypeActionCall, nextOffset: 2, offset: 1},
		{code: 0, offset: 2}  // end
	]);

	engine.vm.executeAction(mc, actions);
	return true;
};

API.prototype.loadMovie = function(name, src, option) {
	var mc = getMovieClipFromTargetName(this.engine.rootMC, name);
	if(!mc) {
		return false;
	}
	mc.loadMovie(name, src, option);
};

API.prototype.showFrame = function(time) {
	var lastFrame = this.engine.lastStopFrame || 0;
	var frame = (1 + time * this.engine.frameRate) | 0;
	console.log(lastFrame, frame, (1 + time * this.engine.frameRate), time, this.engine.frameRate);
	if(lastFrame != frame) {
		this.engine.stopFrame = frame;
		this.engine.tick(Date.now());
	}
	
	return this.engine.rootMC.properties["_currentframe"];
};


/*//////////////////
  touch.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var _Touch = function(engine) {
	this.engine = engine;

	this.isTouch = false;
	this.mouseDown = null;
	this.mouseRelease = null;

	this.currentXY = {x:0, y:0};

	this.keyDownMap = {};

	this.listenerList = [];

	if(this.engine.option.enableTouch) {
		var that = this;
		this.addListener(document, "keydown", function(e) {
			that.keyDown(e.keyCode);
		}, false);
	
		if(!("ontouchstart" in document.body)) {
			engine.option.debug && EngineLogD("PC browser mode detected");
			this.addListener(engine.container, "mousedown", function(e) {
				that.touchStart.call(that, e);
				e.preventDefault();
			}, false);
			this.addListener(document, "mouseup", function(e) {
				that.mouseRelease = {x: that.currentXY.x, y: that.currentXY.y};
				if(that.isTouch) {
					that.touchEnd.call(that, e);
					e.preventDefault();
				}
			}, false);
		}
		this.addListener(engine.container, "touchstart", function(e) {
			that.touchStart.call(that, e.touches[0]);
			e.preventDefault();
		}, false);
		this.addListener(document, "touchend", function(e) {
			that.mouseRelease = {x: that.currentXY.x, y: that.currentXY.y};
			if(that.isTouch) {
				that.touchEnd.call(that, e);
				e.preventDefault();
			}
		}, false);
	}
};

_Touch.prototype.getPositionFromEvent = function(e) {
	var x = e.pageX;
	var y = e.pageY;
	var r = this.engine.container.style.zoom;
	if(r) {
		var ratio = r.substring(0, r.length - 1) / 100;
		x /= ratio;
		y /= ratio;
	}

	var parent = this.engine.canvas;
	while(parent) {
		x -= parent.offsetLeft;
		y -= parent.offsetTop;
		parent = parent.offsetParent;
	}
	//		alert(x + ", " + y + " - " + this.engine.container.offsetLeft + "/" + this.engine.container.offsetTop);
	//console.log("touched X:" + x + " Y:" + y);
	//console.log("zoom ratio:", r);
	//console.log("touched X:" + x + " Y:" + y);
	//console.log("width:", this.engine.container.offsetWidth);
	return {x:x, y:y};
};

_Touch.prototype.keyDown = function(key) {
	console.log("keyDown:"+key);
	this.keyDownMap[key] = true;
};

_Touch.prototype.touchStart = function(e) {
	var xy = this.getPositionFromEvent(e);

	// _touchxと_touchyを設定する
	this.setTouchXY(xy.x, xy.y);

	// 即時反応の場合は即刻処理
	if(this.lightning) {
		this.touchAction(xy.x, xy.y);
		return false;
	}
	// 即時反応でない場合は現在の位置を保存
	this.isTouch = true;
	this.startTime = new Date().getTime();

	this.touchXY = xy; // 初期地点(offsetX/Y)
	this.initXY = xy; // 初期地点
	this.lastXY = xy; // 最終到達地点

	return false;
};

_Touch.prototype.touchEnd = function(e) {
	this.isTouch = false;
	this.mouseRelease = {x: this.lastXY.x, y: this.lastXY.y};
	this.sendKey();
	return false;
};

_Touch.prototype.clearMouseState = function() {
	this.mouseDown = null;
	this.mouseRelease = null;
};

_Touch.prototype.clearKeyDown = function() {
	this.keyDownMap = {};
};

_Touch.prototype.isKeyDown = function(key) {
	return this.keyDownMap[key] || false;
};

_Touch.prototype.touchAction = function(x, y) {
	// set _touchx and _touchy(for api caller)
	// this.setTouchXY(x, y);

	// if ontouch exists, call ontouch function. if it returns false, stop proceeding.
	if(!(this.ontouch && this.ontouch(x, y))) {
		// save mouse down info
		this.mouseDown = {x: x, y: y};
		// don't send key information if lightning === "true"
		if(this.lightning && this.lightning !== true) {
			this.keyDown(this.lightning);
		}
		
		// TODO: flickAssign and lightning is not supported currently
		
		if(!this.lightning && this.flickAssign && this.flickAssign.touch) {
			// if lightning is false, send regular touch info
			this.keyDown(this.flickAssign.touch);
		}
		/*
		if(this.clickableMapping) {
			var idArray = this.engine.getIdentifierFromPosition(x, y);
			for(var i = idArray.length - 1; i >= 0; i--) {
				var id = idArray[i] + "";
				var key = this.clickableMapping[id];
				key && this.keyDown(key);

				// also see MC's name
				var name = id.split('/').pop();
				if(name != id) {
					key = this.clickableMapping[name];
					key && this.keyDown(key);
				}
			}
		}*/
	}
};

// send key info to engine
_Touch.prototype.sendKey = function() {
	if(!this.lastXY || (this.lastXY.x == this.initXY.x && this.lastXY.y == this.initXY.y)) {
		// there is no movement(or dragging), so send touch info
		this.touchAction(this.touchXY.x, this.touchXY.y);
		return;
	}
	// get angle
	if(this.flickAssign) {
		var deg = Math.atan2(this.lastXY.x - this.initXY.x, - this.lastXY.y + this.initXY.y) / Math.PI * 180;
		for(var assignLabel in this.flickAssign) {
			// assignLabel is a string such as "-45:45"
			var assign = assignLabel.split(":");
			if(assign.length == 2) {
				if((assign[0] <= deg && deg <= assign[1]) || (assign[0] <= deg + 360 && deg + 360 <= assign[1])) {
					this.keyDown(this.flickAssign[assignLabel]);
				}
			}
		}
	}
};

// set _touchx, _touchy (hidden option)
_Touch.prototype.setTouchXY = function(x, y) {
	return;
/*	if(this.engine.config.enableXYTouch) {
		// _xtouchと_ytouchをこっそりrootMovieClipに設定する
		this.engine.rootMovieClip.variables["_xtouch"] = Math.floor(x / this.engine.config.scale);
		this.engine.rootMovieClip.variables["_ytouch"] = Math.floor(y / this.engine.config.scale);
	}*/
};

_Touch.prototype.addListener = function(container, name, func, flag) {
	this.listenerList.push([container, name, func]);
	container.addEventListener(name, func, flag);
};

_Touch.prototype.removeAllListeners = function() {
	var len = this.listenerList.length;
	for(var i = 0; i < len; i++) {
		var info = this.listenerList[i];
		info[0].removeEventListener(info[1], info[2], false);
		this.listenerList[i] = null;
	}
};


/*//////////////////
  renderer/util_render.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var revTransform = function(t) {
	var detT = (t[0] * t[3] - t[1] * t[2]);
	if(detT == 0) {
		EngineLogW("revTransform: detT == 0");
	}
	return [
		t[3] / detT,
		-t[1] / detT,
		-t[2] / detT,
		t[0] / detT,
		(t[2] * t[5] - t[3] * t[4]) / detT,
		(t[1] * t[4] - t[0] * t[5]) / detT
	];
};

var mulTransform = function(t1,t2) {
//
// | t1[0] t1[2] t1[4] |   | t2[0] t2[2] t2[4] |
// | t1[1] t1[3] t1[5] | * | t2[1] t2[3] t2[5] |
// | 0     0     1     |   | 0     0     1     |
//
// 	return [
//		t1[0] * t2[0] + t1[2] * t2[1],
//		t1[1] * t2[0] + t1[3] * t2[1],
//		t1[0] * t2[2] + t1[2] * t2[3],
//		t1[1] * t2[2] + t1[3] * t2[3],
//		t1[0] * t2[4] + t1[2] * t2[5] + t1[4],
//		t1[1] * t2[4] + t1[3] * t2[5] + t1[5]
//	];

	if (t1[2] == 0 && t1[1] == 0) {
		if(t2[2] == 0 && t2[1] == 0) {
			return [
				t1[0] * t2[0],
				0,
				0,
				t1[3] * t2[3],
				t1[0] * t2[4] + t1[4],
				t1[3] * t2[5] + t1[5]
			];
		} else {
			return [
				t1[0] * t2[0],
				t1[3] * t2[1],
				t1[0] * t2[2],
				t1[3] * t2[3],
				t1[0] * t2[4] + t1[4],
				t1[3] * t2[5] + t1[5]
			];
		}
	} else {
		if(t2[2] == 0 && t2[1] == 0) {
			return [
				t1[0] * t2[0],
				t1[1] * t2[0],
				t1[2] * t2[3],
				t1[3] * t2[3],
				t1[0] * t2[4] + t1[2] * t2[5] + t1[4],
				t1[1] * t2[4] + t1[3] * t2[5] + t1[5]
			];
		} else {
			return [
				t1[0] * t2[0] + t1[2] * t2[1],
				t1[1] * t2[0] + t1[3] * t2[1],
				t1[0] * t2[2] + t1[2] * t2[3],
				t1[1] * t2[2] + t1[3] * t2[3],
				t1[0] * t2[4] + t1[2] * t2[5] + t1[4],
				t1[1] * t2[4] + t1[3] * t2[5] + t1[5]
			];
		}
	}
};

var transformRect = function(trans, rect, twips) {
	var ret = [];
	
	var x1 = rect[0];
	var x2 = rect[1];
	var y1 = rect[2];
	var y2 = rect[3];

	var w = x2-x1;
	var h = y2-y1;

	var xy0 = twips ? [trans[0]*x1 + trans[2]*y1 + trans[4], trans[1]*x1 + trans[3]*y1 + trans[5]] : transformXY(trans, x1, y1);
	var dx1 = trans[0] * w;
	var dy1 = trans[1] * w;
	var dx2 = trans[2] * h;
	var dy2 = trans[3] * h;

	if(dx1 >= 0) {
		if(dx2 >= 0) {
			ret[1] = xy0[0] + dx1 + dx2;
			ret[0] = xy0[0];
		} else {
			ret[1] = xy0[0] + dx1;
			ret[0] = xy0[0] + dx2;
		}
	} else {
		if(dx2 >= 0) {
			ret[1] = xy0[0] + dx2;
			ret[0] = xy0[0] + dx1;
		} else {
			ret[1] = xy0[0];
			ret[0] = xy0[0] + dx1 + dx2;
		}
	}

	if(dy1 >= 0) {
		if(dy2 >= 0) {
			ret[3] = xy0[1] + dy1 + dy2;
			ret[2] = xy0[1];
		} else {
			ret[3] = xy0[1] + dy1;
			ret[2] = xy0[1] + dy2;
		}
	} else {
		if(dy2 >= 0) {
			ret[3] = xy0[1] + dy2;
			ret[2] = xy0[1] + dy1;
		} else {
			ret[3] = xy0[1];
			ret[2] = xy0[1] + dy1 + dy2;
		}
	}

	// ret[0] = Math.min(xy0[0], xy0[0] + dx1, xy0[0] + dx2, xy0[0] + dx1 + dx2);
	// ret[1] = Math.max(xy0[0], xy0[0] + dx1, xy0[0] + dx2, xy0[0] + dx1 + dx2);
	// ret[2] = Math.min(xy0[1], xy0[1] + dy1, xy0[1] + dy2, xy0[1] + dy1 + dy2);
	// ret[3] = Math.max(xy0[1], xy0[1] + dy1, xy0[1] + dy2, xy0[1] + dy1 + dy2);

	return ret;
};
	
var stringColor = function(val) {
	var a = [(val >> 16) & 0xFF, (val >> 8) & 0xFF, (val) & 0xFF, ((val >> 24) & 0xFF) / 255];
	
	return "rgba(" + a.join() + ")";
//	var str = "00000" + val.toString(16);
//	return "#" + str.substring(str.length - 6, str.length);
};

var compareTransform = function(t1, t2, ignoreTranslate) {
	var round100 = function(a) { return Math.round(a*100);}

    if(ignoreTranslate) {
        if(round100(t1[2]) == round100(t2[2]) && round100(t1[0]) == round100(t2[0])
            && round100(t1[3]) == round100(t2[3]) && round100(t1[1]) == round100(t2[1])) {
                return true;
        }
    } else {
        if(round100(t1[4]) == round100(t2[4]) && round100(t1[5]) == round100(t2[5])
            && round100(t1[2]) == round100(t2[2]) && round100(t1[0]) == round100(t2[0])
            && round100(t1[3]) == round100(t2[3]) && round100(t1[1]) == round100(t2[1])) {
                return true;
        }
    }
    return false;
};

var compareColorTransform = function(c1, c2) {
    if(c1.length != c2.length) {
        return false;
    }

	var len = c1.length;
    for(var i = 0; i < len; i++) {
		var c1i = c1[i];
		var c2i = c2[i];
        for(var j = 0; j < 8; j++) {
            if(c1i[j] != c2i[j]) {
                return false;
            }
        }
    }
    return true;
};

var changeColor = function(cxformList, val) {
	var len = cxformList.length;
	if(!len) {
		return stringColor(val);
	}
	
	var a = [(val >> 16) & 0xFF, (val >> 8) & 0xFF, (val) & 0xFF, (val >> 24) & 0xFF];
	for(var i = len - 1; i >= 0; i--) {
		var cxform = cxformList[i];
		a[0] = Math.max(0, Math.min(255, ((a[0]) * cxform[0] / 256) + cxform[4])) | 0;
		a[1] = Math.max(0, Math.min(255, ((a[1]) * cxform[1] / 256) + cxform[5])) | 0;
		a[2] = Math.max(0, Math.min(255, ((a[2]) * cxform[2] / 256) + cxform[6])) | 0;
		a[3] = Math.max(0, Math.min(255, ((a[3]) * cxform[3] / 256) + cxform[7]));
	}
	a[3] /= 255;
	
	return "rgba(" + a.join() + ")";
};

var cacheTransformImageColor = function(cacheController) {
	return function(cxformList, img) {
		// return if the image has not been drawn yet
		if(!img.width) {
			return img;
		}
		
		var len = cxformList.length;
		if(!len) {
			return img;
		}
		var w = img.width;
		var h = img.height;
		
		// search cache
		var key = w * h;
		for(var i = 0; i < len; i++) {
			key += "-" + cxformList[i].join();
		}
		var output = cacheController.getColoredImage(key, img);
		if(output) {
			return output;
		}
		
		// not hit
		output = transformImageColor(cxformList, img);
		
		// save cache
		cacheController.cacheColoredImage(key, img, output);
		
		// erase transformImageColor's cache
		transformImageColor.output = null;
		return output;
	}
};

var transformImageColorUsingBlendMode = function(cxformList, img) {
	// return if the image has not been drawn yet
	if(!img.width) {
		return img;
	}

	var len = cxformList.length;
	if(!len) {
		return img;
	}

	var w = img.width;
	var h = img.height;

	var output = transformImageColor.output || (transformImageColor.output = CacheController.getFreeCanvas());
	output.width = w;
	output.height = h;
	var octx = output.getContext("2d");

	if(cxformList.length === 1) {
		var cxform = cxformList[0];
		if(cxform[0] === 256 && cxform[1] === 256 && cxform[2] === 256 && cxform[4] === 0 && cxform[5] === 0 && cxform[6] === 0) {
			octx.globalAlpha = cxform[3] / 256;
			octx.drawImage(img, 0, 0);
			// Ignore cxform[7] same as original transformImageColor for the performance
			// (I think this is a bug)
			return output;
		}
	}
	octx.drawImage(img, 0, 0);

	// Remove transparency to process RGB channel and alpha channel separately
	// (blend-mode seems to remove transparency)
	octx.globalCompositeOperation = "multiply";
	octx.fillStyle = "rgba(255,255,255,1)";
	octx.fillRect(0, 0, w, h);

	var alphaCanvas = transformImageColor.alphaCanvas || (transformImageColor.alphaCanvas = CacheController.getFreeCanvas());
	alphaCanvas.width = w;
	alphaCanvas.height = h;
	var actx = alphaCanvas.getContext("2d");
	actx.drawImage(img, 0, 0);
	actx.globalCompositeOperation = "source-atop";
	actx.fillStyle = "rgba(255,255,255,1)";
	actx.fillRect(0, 0, w, h);

	for(var j = len - 1; j >= 0; j--) {
		var cxform = cxformList[j];

		// Multiply colors
		var rgbcolors = [];
		var colorChanged = false;
		for(var colorIndex = 0; colorIndex < 3; colorIndex++) {
			if(cxform[colorIndex] != 256) {
				colorChanged = true;
			}
			rgbcolors.push(cxform[colorIndex] / 256 * 255 | 0);
		}
		if(colorChanged) {
			octx.globalCompositeOperation = "multiply";
			octx.fillStyle = "rgb(" + rgbcolors.join() + ")";
			octx.fillRect(0, 0, w, h);
		}

		// Add colors
		var addedColors = [];
		var hasAdded = false;
		var subtractedColors = [];
		var hasSubtracted = false;
		for(var colorIndex = 4; colorIndex < 7; colorIndex++) {
			var colorVal = cxform[colorIndex];
			if(colorVal === 0) {
				addedColors.push(0);
				subtractedColors.push(0);
			} else if(colorVal > 0) {
				addedColors.push(colorVal);
				subtractedColors.push(0);
				hasAdded = true;
			} else {
				addedColors.push(0);
				subtractedColors.push(-colorVal);
				hasSubtracted = true;
			}
		}

		if(hasAdded) {
			octx.globalCompositeOperation = "lighter";
			octx.fillStyle = "rgba(" + addedColors.join() + ",1)";
			octx.fillRect(0, 0, w, h);
		}
		if(hasSubtracted) {
			octx.globalCompositeOperation = "difference";
			octx.fillStyle = "rgba(255,255,255,1)";
			octx.fillRect(0, 0, w, h);

			octx.globalCompositeOperation = "lighter";
			octx.fillStyle = "rgba(" + subtractedColors.join() + ",1)";
			octx.fillRect(0, 0, w, h);

			octx.globalCompositeOperation = "difference";
			octx.fillStyle = "rgba(255,255,255,1)";
			octx.fillRect(0, 0, w, h);
		}

		// Transform alpha
		if(cxform[3] < 256) {
			actx.globalCompositeOperation = "destination-in";
			actx.globalAlpha = cxform[3] / 256;
			actx.fillRect(0, 0, w, h);
		}
		if(cxform[7]) {
			// maybe work well but not supported
			// (the case where cxform[7] is a negative value is not supported)
			if(cxform[7] > 0) {
				actx.globalCompositeOperation = "lighter";
				actx.globalAlpha = cxform[7] / 255; // cxform[7] == addAlpha
				actx.fillRect(0, 0, w, h);
			}
			EngineLogW("[transformImageColor] addAlpha detected. not support");
		}
	}

	// alpha mask
	octx.globalCompositeOperation = "destination-in";
	octx.globalAlpha = 1;
	octx.drawImage(alphaCanvas, 0, 0);
	return output;
};

var getChromeVersion = function(userAgent) {
	if (/Chrome\//.test(userAgent)) {
		return parseFloat(userAgent.split("Chrome/")[1]);
	}
	return 0;
};

var getMobileSafariVersion = function(userAgent) {
	if (/(iPhone|iPad|iPod)/.test(userAgent) && /Safari\//.test(userAgent)) {
		return parseFloat(userAgent.split("Version/")[1]);
	}
	return 0;
};

var isEnableBlendModeFunctions = function() {
	// Canvas blend modes supports
	//  - Chrome 30 and later
	//  - Mobile Safari 7.1 and later
	// in caniuse.com
	var ctx = document.createElement("canvas").getContext("2d");

	return ["difference", "multiply"].every(function(blendMode) {
		ctx.globalCompositeOperation = blendMode; // try
		return ctx.globalCompositeOperation === blendMode; // verify
	});
};

var overrideTransformImageColorFunction = function(forceDisableBlendMode, verbose) {
	var override = false;

	if (isEnableBlendModeFunctions()) {
		if (getChromeVersion(navigator.userAgent) >= 40 ||
			getMobileSafariVersion(navigator.userAgent) >= 8.0) {
			override = true;

			if (forceDisableBlendMode) {
				override = false;
			}
		}
	}
	if (override) {
		transformImageColor = transformImageColorUsingBlendMode;
		if (verbose) {
			EngineLogW("overrideTransformImageColorFunction");
		}
	}

	// hollowing
	overrideTransformImageColorFunction = function() {};
};

var transformImageColor = (function() {
	// don't define `splitRegion` not to call a function for the performance if not required
	// cf. http://jsperf.com/call-a-function-vs-assign-a-return-value-directly
	var splitRegion = null;
	if (navigator.userAgent.toLowerCase().match(/chrome\/(\d+)/) && RegExp.$1 < 27) {
		var regions;
		// Chrome 26 or before with GPU accelerated canvas doens't support 'darker'.
		// GPU accelerated canvas is disabled if the size of canvas is less than or equal to 2^16
		// (or the width or the height is larger than 2^12).
		// SBrowser (the default browser of Galaxy S4) is derived from Chrome 18
		// and this code is the workaround for SBrowser.
		var addRegions = function(dx, dy, width, height) {
			if(width * height > 65536) {
				if(width > height) {
					var halfWidth = (width * 0.5) | 0;
					addRegions(dx, dy, halfWidth, height);
					addRegions(dx + halfWidth, dy, width - halfWidth, height);
				} else {
					var halfHeight = (height * 0.5) | 0;
					addRegions(dx, dy, width, halfHeight);
					addRegions(dx, dy + halfHeight, width, height - halfHeight);
				}
			} else {
				regions.push([dx, dy, width, height]);
			}
		};

		splitRegion = function(width, height) {
			regions = [];
			// split regions to make the size less than or equal to 2^16
			addRegions(0, 0, width, height);
			return regions;
		};
	}

	var colors = ["#ff0000", "#00ff00", "#0000ff"];

	var applyColor = function(ctx, cxformList, width, height, colorIndex, color) {
		for(var j = cxformList.length - 1; j >= 0; j--) {
			var cxform = cxformList[j];
			if(cxform[colorIndex] != 256) {
				ctx.globalCompositeOperation = "source-over";
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.globalAlpha = 1 - cxform[colorIndex] / 256; // mul
				ctx.fillRect(0, 0, width, height);
			}

			if(cxform[colorIndex + 4] != 0) {
				var alpha = cxform[colorIndex + 4] / 255; // add
				if(alpha < 0) {
					ctx.globalCompositeOperation = "darker";
					ctx.fillStyle = "rgb(0,0,0)";
					alpha = -alpha;
				} else {
					ctx.globalCompositeOperation = "lighter";
					ctx.fillStyle = color;
				}
				ctx.globalAlpha = alpha;
				ctx.fillRect(0, 0, width, height);
			}
		}
	};

	return function(cxformList, img) {
		// return if the image has not been drawn yet
		if(!img.width) {
			return img;
		}
		
		var len = cxformList.length;
		if(!len) {
			return img;
		}
		var w = img.width;
		var h = img.height;
		
		var output = transformImageColor.output || (transformImageColor.output = CacheController.getFreeCanvas());
		output.width = w;
		output.height = h;
		var octx = output.getContext("2d");

		if(cxformList.length == 1) {
			var cxform = cxformList[0];
			if(cxform[0] == 256 && cxform[1] == 256 && cxform[2] == 256 && cxform[4] == 0 && cxform[5] == 0 && cxform[6] == 0) {
				octx.globalAlpha = cxform[3]/256;
				octx.drawImage(img, 0, 0);
				return output;
			}
		}
		
		// create alpha
		var alphaCanvas = transformImageColor.alphaCanvas || (transformImageColor.alphaCanvas = CacheController.getFreeCanvas());
		alphaCanvas.width = w;
		alphaCanvas.height = h;
		
		var actx = alphaCanvas.getContext("2d");
		actx.drawImage(img, 0, 0);
		actx.globalCompositeOperation = "source-atop";
		actx.fillStyle = "rgba(255,255,255,1)";
		actx.fillRect(0, 0, w, h);
		
		// alpha transform
		for(var j = len - 1; j >= 0; j--) {
			var cxform = cxformList[j];
			actx.globalCompositeOperation = "destination-in";
			actx.globalAlpha = Math.min(Math.max(0, cxform[3] / 256), 1); // cxform[3] === mulAlpha
			actx.fillRect(0, 0, w, h);

			if(cxform[7]) {
				actx.globalCompositeOperation = "lighter"; // wrong
				actx.fillStyle = "rgba(255,255,255,1)";
				actx.globalAlpha = cxform[7] / 255; // cxform[7] == addAlpha
				actx.fillRect(0, 0, w, h);
				EngineLogW("[transformImageColor] addAlpha detected. not support");
				// maybe work well but not supported
			}
		}
		
		var isGlay = true;
		for(var j = len - 1; j >= 0; j--) {
			var cxform = cxformList[j];
			var mul = cxform[0];
			var add = cxform[4];
			if(mul != cxform[1] || mul != cxform[2] || add != cxform[5] || add != cxform[6]) {
				isGlay = false;
				break;
			}
		}
		
		var imageRegions = (splitRegion && splitRegion(w, h)) || [[0, 0, w, h]];
		if(isGlay) {
			var color = "rgb(255,255,255)";
			if(imageRegions.length === 1) {
				octx.drawImage(img, 0, 0);
				applyColor(octx, cxformList, w, h, 0, color);
			} else {
				var regionCanvas = transformImageColor.regionCanvas || (transformImageColor.regionCanvas = CacheController.getFreeCanvas());
				var rctx = regionCanvas.getContext("2d");
				for(var i = imageRegions.length - 1; i >= 0; i--) {
					var region = imageRegions[i];
					var rx = region[0];
					var ry = region[1];
					var rw = regionCanvas.width = region[2];
					var rh = regionCanvas.height = region[3];
					rctx.drawImage(img, rx, ry, rw, rh, 0, 0, rw, rh);
					applyColor(rctx, cxformList, rw, rh, 0, color);
					octx.drawImage(regionCanvas, rx, ry);
				}
			}
		} else {
			var rgbctx = transformImageColor.rgbCtx || (transformImageColor.rgbCtx = []);
			var rgbCanvas = transformImageColor.rgbCanvas || (transformImageColor.rgbCanvas = []);
			for(var regionIndex = imageRegions.length - 1; regionIndex >= 0; regionIndex--) {
				var region = imageRegions[regionIndex];
				var rx = region[0];
				var ry = region[1];
				var rw = region[2];
				var rh = region[3];
				// create rgb
				for(var i = 0; i < 3; i++) {
					var cCanvas = rgbCanvas[i] || (rgbCanvas[i] = CacheController.getFreeCanvas());
					cCanvas.width = rw;
					cCanvas.height = rh;
					var cctx = rgbctx[i] || (rgbctx[i] = cCanvas.getContext("2d"));
					cctx.drawImage(img, rx, ry, rw, rh, 0, 0, rw, rh);
					cctx.globalCompositeOperation = "darker";
					cctx.fillStyle = colors[i];
					cctx.fillRect(0, 0, rw, rh);
				}

				// rgb transform
				octx.globalCompositeOperation = "lighter";
				for(var i = 0; i < 3; i++) {
					applyColor(rgbctx[i], cxformList, rw, rh, i, colors[i]);
					octx.drawImage(rgbCanvas[i], rx, ry);
				}
			}
		}
		
		// alpha mask
		octx.globalCompositeOperation = "destination-in";
		octx.globalAlpha = 1;
		octx.drawImage(alphaCanvas, 0, 0);
		return output;
	};
})();

var splitString = function(targetString, maxLineWidth) {
	targetString = targetString.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

	if(maxLineWidth == 0) {
		return targetString.split("\n");
	}

	var lines = [];
	var currentLine = "";
	var currentLineWidth = 0;
	var currentWordWidth = 0;
	var currentWord = "";
	var targetStrLen = targetString.length;
	for(var charIndex = 0; charIndex < targetStrLen; charIndex++) {
		var currentChar = targetString.charAt(charIndex);
		var charWidth = isHankaku(currentChar) ? 1 : 2;
		if(currentChar == "\n") {
			// Force newline for "\n"
			if(currentLineWidth + currentWordWidth > maxLineWidth) {
				lines.push(currentLine);
				lines.push(currentWord);
			} else {
				lines.push(currentLine + currentWord);
			}

			currentLine = "";
			currentLineWidth = 0;
			currentWord = "";
			currentWordWidth = 0;
		} else {
			if(currentWordWidth + charWidth > maxLineWidth) {
				if(currentLine == "") {
					lines.push(currentWord);
				} else {
					lines.push(currentLine);
					lines.push(currentWord);
					currentLine = "";
					currentLineWidth = 0;
				}
				currentWord = "";
				currentWordWidth = 0;
			}
			currentWord += currentChar;
			currentWordWidth += charWidth;
		}

		if(currentChar == " " || charIndex == targetStrLen - 1) {
			if(currentLineWidth + currentWordWidth > maxLineWidth) {
				// If currentLineWidth + latest letter is greater than maxLineWidth then go to newline and begin with it.
				lines.push(currentLine);
				currentLine = currentWord;
				currentLineWidth = currentWordWidth;
			} else {
				currentLine += currentWord;
				currentLineWidth += currentWordWidth;
			}
			currentWord = "";
			currentWordWidth = 0;
		}
	}
	lines.push(currentLine);

	return lines;
};

var getTextOfEditText = function(mc, def) {
	var text = def.initialText;

	var variableName = def.variableName;

	if(variableName) {
		var absoluteVariableName;
		if(variableName.charAt(0) == '/' || variableName.charAt(0) == '.') {
			absoluteVariableName = variableName;
		} else {
			absoluteVariableName = mc.absoluteName+":"+variableName;
		}

		var ret = getMovieClipAndTextFromSyntax(mc, absoluteVariableName);
		if(ret[0]) {
			var value = ret[0].variables[ret[1]];
			if(typeof(value) === "undefiend") {
				EngineLogW("Cannot found:"+variableName, mc, def);
			} else {
				text = value + "";
			}
		} else {
			EngineLogW("Invalid movie clip name specified:" +variableName, mc, def);
		}
	}

	return text;
}

/** フォントの描画 */
var renderFont = function(ctx, font, index, color, clippingState, colorTransform, engine) {
	var body = "";
	// fontの構造を取り出す
	var glyph = font.shapeTable[index];

	var fillStyles = [ {cmd: "SolidFill", color: color, type: FillStyleDefine.TypeSolidFill} ];
	//renderShape(ctx, null, fillStyles, glyph.shape.objects, clippingState, colorTransform, engine);
	var createShapeFunction = function() {

		// set context
		var context;

		// save paths for each styles
		var linePaths;
		var fillPaths;
		var marginPaths;

		// initialize
		var currentLineStyle;
		var currentFillStyle0;
		var currentFillStyle1;
		var path;
		var lineStyles;
		var fillStyles;

		var rev = function(path) {
			var ret = [];
			var len = path.length;
			for(var i = len - 1; i >= 0; i--) {
				var p = path[i];
				if(p.cx != null) {
					ret.push({x1: p.x2, y1: p.y2, cx: p.cx, cy: p.cy, x2: p.x1, y2: p.y1});
				} else {
					ret.push({x1: p.x2, y1: p.y2, x2: p.x1, y2: p.y1});
				}
			}
			return ret;
		};

		var addPath = function(clipping) {
			if(!path.length) {
				return;
			}
			if(currentLineStyle != 0) {
				linePaths[currentLineStyle - 1] = linePaths[currentLineStyle - 1] || [];
				linePaths[currentLineStyle - 1].push(path);
			} else if(currentFillStyle0 != 0 && currentFillStyle1 != 0) {
				// fill space between the object with line
				if(fillStyles[currentFillStyle0 - 1].type == FillStyleDefine.TypeSolidFill) {
					marginPaths[currentFillStyle0 - 1] = marginPaths[currentFillStyle0 - 1] || [];
					marginPaths[currentFillStyle0 - 1].push(path);
				} else if(fillStyles[currentFillStyle1 - 1].type == FillStyleDefine.TypeSolidFill) {
					marginPaths[currentFillStyle1 - 1] = marginPaths[currentFillStyle1 - 1] || [];
					marginPaths[currentFillStyle1 - 1].push(path);
				}
			}

			if(currentFillStyle0 != 0) {
				var pathIndex = currentFillStyle0 - 1;
				if(clipping) {
					pathIndex = 0;
				}
				fillPaths[pathIndex] = fillPaths[pathIndex] || [];
				fillPaths[pathIndex].push(path);
			}
			if(currentFillStyle1 != 0) {
				var pathIndex = currentFillStyle1 - 1;
				if(clipping) {
					pathIndex = 0;
				}
				fillPaths[pathIndex] = fillPaths[pathIndex] || [];
				// reverse all paths inside fillStyle1
				fillPaths[pathIndex].push(rev(path));
			}
			// create new path list
			path = [];
		};

		var closeContext = function() {
			context.push({lineStyles: lineStyles, fillStyles: fillStyles, linePaths: linePaths, fillPaths: fillPaths, marginPaths: marginPaths});
			linePaths = [];
			fillPaths = [];
			marginPaths = [];
		};

		var drawLineFunc = function(style, line) {
			body += "ctx.beginPath();/**/";
			setLineStyle(style);
			var len = line.length;
			for(var i = 0; i < len; i++) {
				var paths = line[i];
				body += "/**/ctx.moveTo(" + paths[0].x1 / 20 + "," + paths[0].y1 / 20 + ");";
				var plen = paths.length;
				for(var j = 0; j < plen; j++) {
					var path = paths[j];
					if(path.cx != null) {
						body += "/**/ctx.quadraticCurveTo(" + path.cx / 20 + "," + path.cy / 20 + "," + path.x2 / 20 + "," + path.y2 / 20 + ");";
					} else {
						body += "/**/ctx.lineTo(" + path.x2 / 20 + "," + path.y2 / 20 + ");"
					}
				}
			}
			body += "ctx.stroke();/**/";
		};

		var repairPath = function(path, rt) {
			if(!rt) {
				return path;
			}
			var xy;
			var ret = {};
			xy = transformXY(rt, path.x1, path.y1);
			ret.x1 = xy[0];
			ret.y1 = xy[1];
			xy = transformXY(rt, path.x2, path.y2);
			ret.x2 = xy[0];
			ret.y2 = xy[1];
			if(path.cx != null) {
				xy = transformXY(rt, path.cx, path.cy);
				ret.cx = xy[0];
				ret.cy = xy[1];
			}
			return ret;
		};

		var joinPaths = function(paths) {
			do {
				var ret = [];
				var concat = false;
				var ilen = paths.length;
				for(var i = 0; i < ilen; i++) {
					var jlen = ret.length;
					for(var j = 0; j < jlen; j++) {
						var lp = paths[i].length - 1;
						var lr = ret[j].length - 1;
						if(paths[i][0].x1 == ret[j][lr].x2 && paths[i][0].y1 == ret[j][lr].y2) {
							// paths[i] can join after ret[j]
							ret[j] = ret[j].concat(paths[i]);
							concat = true;
							break;
						} else if(ret[j][0].x1 == paths[i][lp].x2 && ret[j][0].y1 == paths[i][lp].y2) {
							// paths[i]can join before ret[j]
							ret[j] = paths[i].concat(ret[j]);
							concat = true;
							break;
						}
					}
					if(j == ret.length) {
						ret.push(paths[i]);
					}
				}
				paths = ret;
			} while(concat);

			return paths;
		};

		var setLineStyle = function(lineStyle) {
			if(lineStyle.width != null) {
				var lw = lineStyle.width / 20;
				body += "/**/ctx.lineWidth="+lw+"*drawScale<1?/**/1/drawScale:"+lw+";";
			}
			if(lineStyle.color != null) {
				body += "/**/ctx.strokeStyle=changeColor(cxformList," + lineStyle.color + ");";
			}
		};

		var setFillStyle = function(fillStyle) {
			var ret = null;
			switch(fillStyle.type) {
			case FillStyleDefine.TypeSolidFill:
				body += "/**/ctx.fillStyle=changeColor(cxformList," + fillStyle.color + ");";
				break;
			case FillStyleDefine.TypeRepeatingBitmapFill:
			case FillStyleDefine.TypeClippedBitmapFill:
			case FillStyleDefine.TypeNonSmoothedRepeatingBitmapFill:
			case FillStyleDefine.TypeNonSmoothedClipedBitmapFill:
				var t = fillStyle.matrix; // receive wrong matrix here
				ret = [t[0] / 20, t[1] / 20, t[2] / 20, t[3] / 20, t[4], t[5]];

				body += "/**/var img=dictionary[" + fillStyle.bitmapId + "].img;/**/";
				body += "/**/if(img.width==0&&img.height==0){return false;}";	// image is not loaded so exit
				body += "if(cxformList.length) {img=transformImageColor(cxformList,img);}/**/";
				body += "ctx.fillStyle=ctx.createPattern(img,'repeat');/**/";
				break;
			case FillStyleDefine.TypeLinearGradientFill:
			case FillStyleDefine.TypeRadialGradientFill:
				ret = fillStyle.matrix;
				body += "var grad;/**/";
				if(fillStyle.type == FillStyleDefine.TypeLinearGradientFill) {
					body += "grad=ctx.createLinearGradient(-16384 / 20, 0, 16384 / 20, 0);/**/";
				} else {
					body += "grad=ctx.createRadialGradient(0, 0, 0, 0, 0, 16384 / 20);/**/";
				}
				var len = fillStyle.gradient.records.length;
				for (var i = 0; i < len; i++) {
					var g = fillStyle.gradient.records[i];
					//grad.addColorStop(g.ratio / 255, transformColor(colorTransform, g.color));
					body += "/**/grad.addColorStop(" + g.ratio / 255 + ",changeColor(cxformList/**/, " + g.color + "));";
				}
				body += "ctx.fillStyle=grad;/**/";
				break;
			default:
				EngineLogE("renderShape.setFillStyle: unknown draw type called: " + fillStyle.type);
				break;
			}
			return ret;
		};

		var makeSimpleClippedBitmapFill = function(fill, fillStyle) {
			if(fillStyle.type != FillStyleDefine.TypeClippedBitmapFill) {
				return false;
			}
			var matrix = fillStyle.matrix;
			if(!matrix || matrix[0] != matrix[3] || matrix[1] != 0 || matrix[2] != 0) {
				return false;
			}

			if(fill.length != 1) {
				return false;
			}
			var paths = fill[0];
			if(paths.length != 4) {
				return false;
			}
			var vectors = [];
			for(var i = 0; i < 4; i++) {
				var path = paths[i];

				if(path.cx || path.cy) return false;

				vectors[vectors.length] = {
					x: path.x2 - path.x1,
					y: path.y2 - path.y1
				};
			}

			if(	(vectors[0].x == 0 && vectors[1].y == 0 && vectors[2].x == 0 && vectors[3].y == 0
				 && vectors[0].y == -vectors[2].y && vectors[1].x == -vectors[3].x)
				||
				(vectors[0].y == 0 && vectors[1].x == 0 && vectors[2].y == 0 && vectors[3].x == 0
				 && vectors[0].x == -vectors[2].x && vectors[1].y == -vectors[3].y)) {

				var mat2 = [matrix[0]/20, matrix[1], matrix[2], matrix[3]/20, matrix[4], matrix[5]];
				var bitmapId = fillStyle.bitmapId;
				body += "/**/var img=dictionary[" + bitmapId + "].img;/**/";
				body += "/**/if(img.width==0&&img.height==0){return false;}";
				body += "if(cxformList.length) {img=transformImageColor(cxformList,img);}/**/";
				body += "/**/ctx.transform(" + mat2.join() + ");"
				body += "ctx.drawImage(img, 0, 0);/**/";
				body += "/**/ctx.transform(" + revTransform(mat2).join() + ");"
				return true;
			}
			return false;
		}

		return function(fillStyles_, lineStyles_, shapes, clipping) {
			// initializing
			context = [];
			fillStyles = fillStyles_;
			lineStyles = lineStyles_;

			linePaths = [];
			fillPaths = [];
			marginPaths = [];

			currentLineStyle = 0;
			currentFillStyle0 = 0;
			currentFillStyle1 = 0;
			path = [];

			// current position
			var x = 0;
			var y = 0;

			var len = shapes.length;
			for(var i = 0; i < len; i++) {
				var shape = shapes[i];

				switch(shape.type) {
				case EdgeDefine.TypeCurve:
					var cx = x + shape.cx;
					var cy = y + shape.cy;
					var ax = cx + shape.ax;
					var ay = cy + shape.ay;
					path.push({x1: x, y1: y, cx: cx, cy: cy, x2:ax, y2: ay});
					x = ax;
					y = ay;
					break;
				case EdgeDefine.TypeStraight:
					var ax = x + shape.x;
					var ay = y + shape.y;
					path.push({x1: x, y1: y, x2:ax, y2: ay});
					x = ax;
					y = ay;
					break;
				case EdgeDefine.TypeStyleChange:
					addPath(clipping);
					if(shape.lineStyles || shape.fillStyles) {
						// if new styles exist, once close context
						closeContext();
						// set new styles
						lineStyles = shape.lineStyles || lineStyles;
						fillStyles = shape.fillStyles || fillStyles;
					}
					if(shape.dx != null) {
						// TODO: x += shape.dx seems to be true
						x = shape.dx;
					}
					if(shape.dy != null) {
						// TODO: y += shape.dy seems to be true
						y = shape.dy;
					}
					if(shape.lineStyle != null) {
						currentLineStyle = shape.lineStyle;
					}
					if(shape.fillStyle0 != null) {
						currentFillStyle0 = shape.fillStyle0;
					}
					if(shape.fillStyle1 != null) {
						currentFillStyle1 = shape.fillStyle1;
					}
					break;
				default:
					EngineLogE("drawObject.renderShape: Unknown type detected:", shape.type);
					break;
				}
			}
			// save the last path
			addPath(clipping);
			closeContext();


			// start to draw
			body += "ctx.lineCap='round';/**/";
			//body += "ctx.globalCompositeOperation='source-over';/**/";

			var clen = context.length;
			for(var i = 0; i < clen; i++) {
				var c = context[i];
				lineStyles = c.lineStyles;
				fillStyles = c.fillStyles;
				linePaths = c.linePaths;
				fillPaths = c.fillPaths;
				marginPaths = c.marginPaths;

				if(!clipping) {
					// stroke margin lines first
					var mlen = marginPaths.length;
					for(var j = 0; j < mlen; j++) {
						var line = marginPaths[j];
						if(line) {
							var style = {
								width: 1,
								color: fillStyles[j].color
							};
							drawLineFunc(style, line);
						}
					}
				}

				// fill
				var flen = fillPaths.length;
				for(var j = 0; j < flen; j++) {
					var fill = fillPaths[j];
					var rt;
					if(fill) {
						fill = joinPaths(fill);
						if(makeSimpleClippedBitmapFill(fill, fillStyles[j])) continue;
						if(!clipping) {
							var ft = setFillStyle(fillStyles[j]);
							if(ft) {
								body += "/**/ctx.transform(" + ft.join() + ");";
							}
							rt = (ft && revTransform(ft)) || null;
						}
						if(!clipping || (i == 0 && j == 0)) {
							// when clipping, execute beginPath only first time
							body += "ctx.beginPath();/**/";
						}

						var fflen = fill.length;
						for(var k = 0; k < fflen; k++) {
							var paths = fill[k];
							if(paths) {
								var from = repairPath(paths[0], rt);
								body += "/**/ctx.moveTo(" + from.x1 / 20 + "," + from.y1 / 20 + ");";
								var plen = paths.length;
								for(var l = 0; l < paths.length; l++) {
									var pathRepair = repairPath(paths[l], rt);
									if(pathRepair.cx != null) {
										body += "/**/ctx.quadraticCurveTo(" + pathRepair.cx / 20 + "," + pathRepair.cy / 20 + "," + pathRepair.x2 / 20 + "," + pathRepair.y2 / 20 + ");";
									} else {
										body += "/**/ctx.lineTo(" + pathRepair.x2 / 20 + "," + pathRepair.y2 / 20 + ");";
									}
								}
							}
						}

						if(clipping) {
							if(i == context.length - 1 && j == fillPaths.length - 1) {
								// clip execute only the last draw
								body += "ctx.clip();/**/";
								// On Android 3.x, 4.0.x,
								// composite operations except 'source-over' doesn't work
								// if CanvasRenderingContext2D#clip() is used (PFX-29)
								// redraw the content to avoid it
								body += "if(ctx.globalCompositeOperation!='source-over'){/**/";
								body += "ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalCompositeOperation='source-over';/**/";
								// clear extra area (width + 1)
								// Otherwise, Android default browser sometimes clear all area
								body += "ctx.globalAlpha=1;ctx.clearRect(0,0,ctx.canvas.width+1,ctx.canvas.height);/**/";
								body += "ctx.drawImage(copiedCanvas,0,0);ctx.restore();}/**/";
							}
						} else {
							body += "ctx.fill();/**/";
							if(rt) {
								body += "/**/ctx.transform(" + rt.join() +");";
							}
						}
					}
				} // fillPaths

				if(!clipping) {
					var llen = linePaths.length;
					for(var j = 0; j < llen; j++) {
						var line = linePaths[j];
						line && drawLineFunc(lineStyles[j], line);
					}
				}
			} // context

		};
	}();
	createShapeFunction(fillStyles, null, glyph, clippingState);//, /*colorTransform*/[], engine);

	return body;
};

var makeGlyphInfo = function(drawString, maxWidth, x1, x2, y1, y2, font, ratio, def) {
	var glyphInfo = [];

	var currentIndex = 0;
	var lines = 0;
	var strLen = drawString.length;
	var textWidth;
	var indices;
	var nextWordIndices;
	var nextWordWidth;
	while(currentIndex < strLen) {
		textWidth = 0;
		indices = [];
		nextWordIndices = [];
		nextWordWidth = 0;
		for(; currentIndex < strLen; currentIndex++) {
			var c = drawString.charCodeAt(currentIndex);
			var index = -1;
			if(def.multiline == 1 && c == 10) {  // the character is "\n"
				if(textWidth + nextWordWidth > maxWidth) {
					currentIndex -= nextWordIndices.length - 1;
					break;
				} else {
					currentIndex++;
					indices = indices.concat(nextWordIndices);
					textWidth += nextWordWidth;
				}
				break;
			}

			for(var i in font.codeTable) {
				if(font.codeTable[i] == c) {
					index = i;
					break;
				}
			}
			if(index != -1) {
				var advance = font.fontAdvanceTable[index];
				// one word larger than max width
				if(nextWordWidth + advance > maxWidth) {
					if(indices.length) {
						currentIndex -= nextWordIndices.length;
					} else {
						// one letter but larger than maxwith, line break if it's the first letter of the new line
						// otherwise, new line for the word so far
						if(advance > maxWidth && nextWordIndices.length == 0) {
							indices.push(index);
							textWidth = advance;
							currentIndex++;
							break;
						}
						indices = indices.concat(nextWordIndices);
						textWidth += nextWordWidth;
					}
					break;
				} else {
					nextWordIndices.push(index);
					nextWordWidth += advance;
				}
				// if space or end of the string then check if the line width exceeded
				if(c == 32 || currentIndex == strLen - 1) {
					if(def.multiline == 1 && def.wordWrap == 1 && textWidth + nextWordWidth > maxWidth) {
						currentIndex -= nextWordIndices.length - 1;
						break;
					}
					indices = indices.concat(nextWordIndices);
					textWidth += nextWordWidth;
					nextWordWidth = 0;
					nextWordIndices = [];
				}
			}
		}

		var align = 0;
		switch(def.align) {
		case 1:
			// right: 右によせる
			align = (x2 - x1) / ratio * 20 - textWidth;
			break;
		case 2:
		case 3:
			// center: 真ん中を計算して移動する
			align = ((x2 - x1) / ratio * 20 - textWidth) / 2;
			break;
		default:
			// left ならばやることはない
			break;
		}
		glyphInfo.push({ indices: indices, align: align / 20.0 });
	}
	return glyphInfo;
};

// Android default browser on L-05E, F-06E, and 202F with Android 4.2.2
// fills a visible canvas with a single color
// if the following conditions are met:
//  1. other visible DOM elements except HTMLCanvasElement exist on the page
//  2. the size of canvas is larger than 2^16
//  3. both of the width of the canvas and the height are smaller than 2^12
// cf. PFX-63
var expandCanvas = function(canvas) {
	var canvasWidth = canvas.width;
	var canvasHeight = canvas.height;
	if(canvasWidth * canvasHeight <= 65536 || canvasWidth >= 4096 || canvasHeight >= 4096) {
		return;
	}
	var clipper = document.createElement("div");
	clipper.style.width = canvasWidth + "px";
	clipper.style.height = canvasHeight + "px";
	clipper.style.overflow = "hidden";

	var parent = canvas.parentNode;
	parent.insertBefore(clipper, canvas);
	parent.removeChild(canvas);
	clipper.appendChild(canvas);

	if(canvasWidth > canvasHeight) {
		canvas.width = 4096;
	} else {
		canvas.height = 4096;
	}
};


/*//////////////////
  renderer/cache_controller.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var CacheController = function(cacheMaxTotalSize) {
	this._cacheMaxTotalSize = cacheMaxTotalSize || 15728640;  // 15 MB
	this._cacheSize = 0;
	this._coloredImageCache = {};
	this._imageInfoCache = {};
	this._usedCanvases = [];
};

CacheController._freeCanvases = [];
CacheController.getFreeCanvas = function() {
	return CacheController._freeCanvases.pop() || document.createElement("canvas");
};

CacheController.destroyCanvas = function(canvas) {
	canvas.width = canvas.height = 16;
	CacheController._freeCanvases.push(canvas);
};

CacheController.prototype.getImageInfo = function(key) {
	return this._imageInfoCache[key];
};

CacheController.prototype.cacheImageInfo = function(key, imageInfo) {
	if(!imageInfo) {
		return;
	}
	var canvas = imageInfo.img;
	// canvas uses 4 bytes per pixel
	var size = (canvas.width * canvas.height) << 2;  // width * height * 4
	if(this._cacheSize + size > this._cacheMaxTotalSize) {
		this.clearCache();
	}
	this._imageInfoCache[key] = imageInfo;
	this._cacheSize += size;
	this._usedCanvases.push(canvas);
};

CacheController.prototype.getColoredImage = function(key, srcImage) {
	var imgList = this._coloredImageCache[key];
	if(imgList) {
		var ilen = imgList.length;
		for(var i = 0; i < ilen; i++) {
			var pair = imgList[i];
			if(pair[0] == srcImage) {
				return pair[1];
			}
		}
	}
	return null;
};

CacheController.prototype.cacheColoredImage = function(key, srcImage, coloredImage) {
	// canvas uses 4 bytes per pixel
	var size = (coloredImage.width * coloredImage.height) << 2;  // width * height * 4
	var imgList = this._coloredImageCache[key] || (this._coloredImageCache[key] = []);
	if(this._cacheSize + size > this._cacheMaxTotalSize) {
		this.clearCache();
	}
	imgList.push([srcImage, coloredImage]);
	this._cacheSize += size;
	this._usedCanvases.push(coloredImage);
};

CacheController.prototype.clearCache = function() {
	this._imageInfoCache = {};
	this._coloredImageCache = {};
	this._cacheSize = 0;

	var usedCanvases = this._usedCanvases;
	var freeCanvases = CacheController._freeCanvases;
	var canvasCnt = usedCanvases.length;
	for (var i = 0; i < canvasCnt; i++) {
		var canvas = usedCanvases[i];
		canvas.width = canvas.height = 16;
		freeCanvases.push(canvas);
	}
	this._usedCanvases = [];
};


/*//////////////////
  renderer/general_renderer.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var Renderer = function(engine) {
	// store arguments
	this.engine = engine;
	this.container = engine.container;
	this.cachedMethod = {};
	this.cachedFunction = {};
	this.cachedClippingFunction = {};
	this.rootScale = 1;
	this.cacheController = new CacheController(engine.option.cacheMaxTotalSize);
	this.transformImageColor = engine.option.cacheColoredImage? cacheTransformImageColor(this.cacheController): transformImageColor;
};

Renderer.calcScale = function(m) {
	var l1 = Math.sqrt(m[0]*m[0] + m[1]*m[1]);
	var l2 = Math.sqrt(m[2]*m[2] + m[3]*m[3]);
	return Math.sqrt(l1 * l2);
};

Renderer.prototype.setFrame = function(rect) {
	this.twWidth = rect[1] - rect[0];
	this.twHeight = rect[3] - rect[2];
	
	if(!this.ctx) {
		// create canvas
		var canvas;
		if(this.container.tagName.toLowerCase() == "canvas") {
			canvas = this.engine.canvas = this.container;
		} else {
			canvas = this.engine.canvas = document.createElement("canvas");
			this.container.appendChild(canvas);
		}
		var width = this.twWidth / 20;
		var height = this.twHeight / 20;
		// deal with option
		var option = this.engine.option;
		var t = null;
		var ratio;
		var rw;
		var rh;
		if(option.width || option.height) {
			if(option.fixRatio) {
				ratio = (option.width && option.width / width) || (option.height && option.height / height) || 1;
				var scaledWidth = width * ratio | 0;
				var scaledHeight = height * ratio | 0;
				rw = scaledWidth / width;
				rh = scaledHeight / height;
				width = scaledWidth;
				height = scaledHeight;
			} else {
				var rw = (option.width && option.width / width) || 1;
				var rh = (option.height && option.height / height) || 1;
				width = option.width || width;
				height = option.height || height;
			}
			t = [rw, 0, 0, rh, 0, 0];
			ratio = (rw > rh)? rw: rh;
		} else {
			ratio = 1;
		}
		this.ratio = ratio;

		if(option.frameRect) {
			var frameRect = option.frameRect;
			width = frameRect[2] * (rw || ratio);
			height = frameRect[3] * (rh || ratio);
			if(!t) {
				t = [1, 0, 0, 1, 0, 0];
			}
			t[4] = -frameRect[0] * (rw || ratio);
			t[5] = -frameRect[1] * (rh || ratio);
		}

		// re-rendering runs whenever width or height is set, even if they are same values
		if(canvas.width != (width | 0)) {
			option.debug && EngineLogD("set canvas width to " + (width | 0));
			canvas.width = width | 0;
		}
		if(canvas.height != (height | 0)) {
			option.debug && EngineLogD("set canvas height to " + (height | 0));
			canvas.height = height | 0;
		}

		this.frameWidth = canvas.width;
		this.frameHeight = canvas.height;
		option._enableWorkaroundForUnicolor && expandCanvas(canvas);

		this.width = (t && width / t[0]) || width;
		this.height = (t && height / t[3]) || height;
		
		var ctx = canvas.getContext("2d");
		this.ctx = ctx;
		if (t) {
			if(option.origin) {
				if(option.frameRect) {
					EngineLogW("option.origin is ignored because option.frameRect is specified.");
				} else {
					t[4] = option.origin[0];
					t[5] = option.origin[1];
				}
			}
			
			ctx.transform.apply(ctx, t);
			this.engine.rootTransform = t;
			this.rootScale = Renderer.calcScale(t);
		}
	}
};

Renderer.prototype.render = function(mc, cxformList, drawScale, detail) {
	var engine = this.engine;
	var option = engine.option;
	var ctx = this.ctx;
	if(!ctx) {
		return;
	}
	if(!mc) {
		var canvas = ctx.canvas;
		if(engine.bgColor != null) {
			ctx.fillStyle = stringColor(engine.bgColor);
			// Android default browser of some models such as SCL21
			// resets its transform matrix if used ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height) repeatedly
			// cf. PFX-90
			ctx.fillRect(0, 0, this.width + 1, this.height);
		} else {
			// Android default browser of some models such as SC-06D
			// freezes if set CSS zoom and used ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height) repeatedly,
			// so use ctx.clearRect(0, 0, ctx.canvas.width + 1, ctx.canvas.height)
			// cf. PFX-57
			ctx.clearRect(0, 0, this.width + 1, this.height);
		}
		ctx.save();
		mc = this.engine.rootMC;
		cxformList = [];
	}
	if(!mc.properties._visible) {
		return;
	}
	var oldOperation = ctx.globalCompositeOperation;
	for(var name in option.operation) {
		if(name == mc.properties["_name"]) {
			ctx.globalCompositeOperation = option.operation[name];
		}
	}
	detail = (option.shapeDetail && option.shapeDetail[mc.properties["_name"]]) || detail;
	var mcInfo = mc.mcInfo;
	var frame = mc.properties["_currentframe"];
	
	var clippedLayerList = [];
	
	var layerList = [];
	for(var layer in mc.displayList) {
		layer < 65536 && (layerList[layerList.length] = layer);
	}
	layerList.sort(function(a, b) {return a - b;});
	var cacheController = this.cacheController;
	var len = layerList.length;
	var dictionary = mc.dictionary;

	for(var i = 0; i < len; i++) {
		var idInfo = mc.displayList[layerList[i]];
		var id = idInfo.id;
		var info = mcInfo.idInfo[id];
		var placement = mcInfo.frameIdPlacementMap[frame][id];
		var clipping = false;
		var localDrawScale = drawScale || this.rootScale;
		
		var def = dictionary[idInfo.characterId];
		
		if(placement.clipDepth) {
			ctx.save();
			clippedLayerList.push(placement.clipDepth);
			clipping = true;
		}
		var matrix = null;
		// set affine transform
		var child = mc.childrenIdMap[id];
		var cxform = placement.cxform;
		if(cxform && cxform[0]==256 && cxform[1]==256 && cxform[2]==256 && cxform[3]==256
				&& cxform[4]==0 && cxform[5]==0 && cxform[6]==0 && cxform[7]==0) {
			cxform = null;
		}
		cxform && cxformList.push(cxform);
		if(child) {
			var childProps = child.properties;
			// child is visible?
			if(childProps._xscale != 0 && childProps._yscale != 0) {
				if(!child.isLocked) {
					matrix = placement.matrix;
				} else {
					matrix = child.getMatrix();
				}
				if(matrix) {
					if(!clipping) ctx.save();
					ctx.transform.apply(ctx, matrix);
					localDrawScale *= Renderer.calcScale(matrix);
				}
				this.render(child, cxformList, localDrawScale, detail);
			}
		} else if(def.type == 34) { // TODO: pass button TagDefine.TypeTagDefineButton2
			matrix = placement.matrix;
			if(matrix) {
				if(!clipping) ctx.save();
				ctx.transform.apply(ctx, matrix);
				localDrawScale *= Renderer.calcScale(matrix);
			}
		} else {
			matrix = placement.matrix;
			if(matrix) {
				if(!clipping) ctx.save();
				ctx.transform.apply(ctx, matrix);
				localDrawScale *= Renderer.calcScale(matrix);
			}
			var text = "";	
			if(def.type == 37) { // TagDefine.TypeTagDefineEditText
				text = getTextOfEditText(mc, def);
			}

			// todo: deal with cxform
			var key = def.id + dictionary["name"];
			if(clipping) {
				var operation = ctx.globalCompositeOperation;
				if (operation != "source-over") {
					// copy the canvas temporarily to avoid 'PFX-29'
					// TODO: currently doesn't support clipping layer over clipping layer
					var canvas = ctx.canvas;
					var copiedCanvas = CacheController.getFreeCanvas();
					copiedCanvas.width = this.frameWidth;
					copiedCanvas.height = this.frameHeight;
					copiedCanvas.getContext('2d').drawImage(canvas, 0, 0);
					ctx.globalCompositeOperation = operation;
				}

				(this.cachedClippingFunction[key] || (this.cachedClippingFunction[key] = createDrawFunction(engine, def, true, dictionary)))
					(engine, ctx, def, placement.matrix, cxformList, text, changeColor, this.transformImageColor, splitString, localDrawScale, makeGlyphInfo, renderFont, copiedCanvas, dictionary);
				if (copiedCanvas) {
					CacheController.destroyCanvas(copiedCanvas);
					copiedCanvas = null;
				}
				// Android default browser requires ctx.save before ctx.clip to clip works correctly,
				// but Android 3.x requires ctx.save also after ctx.clip
				ctx.save();
			} else {
				// get option
				var shapeDetail = option.shapeDetail;
				var method = this.cachedMethod[key]
								|| (shapeDetail && ((shapeDetail[key] && shapeDetail[key].method) || (detail && detail.method) || (shapeDetail.all && shapeDetail.all.method)));
				this.cachedMethod[key] || (this.cachedMethod[key] = ((def.type != 37 && method) || "func"));
				var drawed = false;
				if(method == "cache") {
					if(cxformList && cxformList.length) {
						var post = ",";
						var clen = cxformList.length;
						for(var c = 0; c < clen; c++) {
							post += cxformList[c].join();
						}
						key += post;
					}
					// use cache images
					var imageInfo = cacheController.getImageInfo(key);
					if(!imageInfo) {
						var scale = (shapeDetail && +((shapeDetail[key] && shapeDetail[key].cacheScale) || (detail && detail.cacheScale) || (shapeDetail.all && shapeDetail.all.cacheScale) || this.rootScale)) || localDrawScale;
						var adjustLineScale = (shapeDetail && +((shapeDetail[key] && shapeDetail[key].adjustLineScale) || (detail && detail.adjustLineScale) || (shapeDetail.all && shapeDetail.all.adjustLineScale)));
						var adjustedScale = localDrawScale;
						//adjustLineScale && (adjustedScale *= scale * adjustLineScale / this.rootScale);
						adjustLineScale && (adjustedScale = adjustLineScale * this.rootScale);
						
						var func = createDrawFunction(engine, def, false, dictionary);
						var bounds = def.bounds;
						var width = (def.bounds[1] - def.bounds[0]) / 20;
						var height = (def.bounds[3] - def.bounds[2]) / 20;

						if(width * (scale || 1) < this.twWidth / 20 * this.rootScale * 2 && height * (scale || 1) < this.twHeight / 20 * this.rootScale * 2) {
							var canvas = CacheController.getFreeCanvas();
							canvas.width = Math.ceil(width * (scale || 1)) || 1;
							canvas.height = Math.ceil(height * (scale || 1)) || 1;
							option.debug && !option.suppressLog.drawCache && EngineLogD("create cache for [" + def.id + "] width: " + canvas.width + " height:" + canvas.height);
							var cctx = canvas.getContext("2d");
							// use canvas.width / width and canvas.height / height as each scale
							// to fit the canvas whose width and height are integer
							cctx.transform(canvas.width / width, 0, 0, canvas.height / height, 0, 0);
							cctx.transform(1, 0, 0, 1, -def.bounds[0] / 20, -def.bounds[2] / 20);
							if(func(engine, cctx, def, placement.matrix, cxformList, text, changeColor, this.transformImageColor, splitString, adjustedScale, makeGlyphInfo, renderFont, null, dictionary)) {
								imageInfo = {img: canvas, x: def.bounds[0] / 20, y: def.bounds[2] / 20, width: width, height: height, scale: scale};
								cacheController.cacheImageInfo(key, imageInfo);
							} else {
								// image is not loaded so not to draw
							}
						} else {
							this.cachedMethod[key] = "func";
							option.shapeDetail = option.shapeDetail || {};
							option.shapeDetail[key] = "func";
							option.debug && EngineLogD("cache avoided: " + idInfo.characterId);
							//console.log("came here:", idInfo.characterId, width * (scale || 1), height * (scale || 1), this.twWidth / 20 * 2, this.twHeight / 20 * 2);
						}
					}
					if(imageInfo) {
						imageInfo.width && imageInfo.height &&
						((imageInfo.scale && (ctx.drawImage(imageInfo.img, imageInfo.x, imageInfo.y, imageInfo.width, imageInfo.height) || true))
							|| ctx.drawImage(imageInfo.img, imageInfo.x, imageInfo.y));
						drawed = true;
					}
				}
				if(!drawed) {
					// use function method
					var key = def.id + ((clipping)?"c": "") + dictionary["name"];
					//console.log("key:" + key);
					(this.cachedFunction[key] || (this.cachedFunction[key] = createDrawFunction(engine, def, clipping, dictionary)))
						(engine, ctx, def, placement.matrix, cxformList, text, changeColor, this.transformImageColor, splitString, localDrawScale, makeGlyphInfo, renderFont, null, dictionary);
				}
			}
		}
		matrix && clipping ? ctx.transform.apply(ctx, revTransform(matrix)) : ctx.restore();
		cxform && cxformList.pop();
		
		if(clippedLayerList.length) {
			var lastClip = clippedLayerList[clippedLayerList.length - 1];
			var nextLayer = layerList[i + 1];
			if(nextLayer == null || nextLayer > lastClip) {
				// unclipping
				clippedLayerList.pop();
				ctx.restore();
				ctx.restore();
			}
		}
	}
	ctx.globalCompositeOperation = oldOperation;
	if(mc == this.engine.rootMC) {
		ctx.restore();
	}
};


/*//////////////////
  renderer/dirtyrect_renderer.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var DirtyRectRenderer = function(engine) {
	// store arguments
	this.engine = engine;
	engine.rootTransform = [1, 0, 0, 1, 0, 0];
	this.container = engine.container;
	this.cachedMethod = {};
	this.cachedFunction = {};
	this.cachedClippingFunction = {};
	this.rootScale = 1;
	this.clippingId;
	this.tagListCursor = 0;  // for preloadCache

	this.lastRenderedFrameCount = -1;
	this.lastRenderedItems = {}; // id -> renderedItem
	this.dirtyRects = [];
	engine.option.debug && EngineLogD("dirty rect start");
	this.cacheController = new CacheController(engine.option.cacheMaxTotalSize);
	this.transformImageColor = engine.option.cacheColoredImage? cacheTransformImageColor(this.cacheController): transformImageColor;
};

DirtyRectRenderer.prototype.setFrame = function(rect) {
	this.twWidth = rect[1] - rect[0];
	this.twHeight = rect[3] - rect[2];
	
	if(!this.ctx) {
		// create canvas
		var canvas;
		if(this.container.tagName.toLowerCase() == "canvas") {
			canvas = this.engine.canvas = this.container;
		} else {
			canvas = this.engine.canvas = document.createElement("canvas");
			this.container.appendChild(canvas);
		}
		var width = this.twWidth / 20;
		var height = this.twHeight / 20;
		// deal with option
		var option = this.engine.option;
		var t = null;
		var ratio;
		var rw;
		var rh;
		if(option.width || option.height) {
			if(option.fixRatio) {
				ratio = (option.width && option.width / width) || (option.height && option.height / height) || 1;
				var scaledWidth = width * ratio | 0;
				var scaledHeight = height * ratio | 0;
				rw = scaledWidth / width;
				rh = scaledHeight / height;
				width = scaledWidth;
				height = scaledHeight;
			} else {
				rw = (option.width && option.width / width) || 1;
				rh = (option.height && option.height / height) || 1;
				width = option.width || width;
				height = option.height || height;
			}
			t = [rw, 0, 0, rh, 0, 0];
			ratio = (rw > rh)? rw: rh;
		} else {
			ratio = 1;
		}
		this.ratio = ratio;

		if(option.frameRect) {
			var frameRect = option.frameRect;
			width = frameRect[2] * (rw || ratio);
			height = frameRect[3] * (rh || ratio);
			if(!t) {
				t = [1, 0, 0, 1, 0, 0];
			}
			t[4] = -frameRect[0] * (rw || ratio);
			t[5] = -frameRect[1] * (rh || ratio);
		}

		// re-rendering runs whenever width or height is set, even if they are same values
		if(canvas.width != (width | 0)) {
			option.debug && EngineLogD("set canvas width to " + (width | 0));
			canvas.width = width | 0;
		}
		if(canvas.height != (height | 0)) {
			option.debug && EngineLogD("set canvas height to " + (height | 0));
			canvas.height = height | 0;
		}

		this.frameWidth = canvas.width;
		this.frameHeight = canvas.height;
		option._enableWorkaroundForUnicolor && expandCanvas(canvas);

		this.width = (t && width / t[0]) || width;
		this.height = (t && height / t[3]) || height;
		
		var ctx = canvas.getContext("2d");
		
		// for the bug on Galaxy Tab 10.1 ticket #544 - (20, 21)
		ctx.getImageData(0, 0, 1, 1); // don't delete this line
		
		this.ctx = ctx;
		if(t) {
			if(option.origin) {
				if(option.frameRect) {
					EngineLogW("option.origin is ignored because option.frameRect is specified.");
				} else {
					t[4] = option.origin[0];
					t[5] = option.origin[1];
				}
			}
			
			this.engine.rootTransform = t;
			this.rootScale = Renderer.calcScale(t);
		}

		if(this.engine.bgColor != null) {
			canvas.style.backgroundColor = stringColor(this.engine.bgColor);
		}
	}
};

DirtyRectRenderer.prototype.generateRenderItems = function(mc, currentTransform, cxformList, parentId, operation, detail) {
	var items = [];
	if(!mc) {
		mc = this.engine.rootMC;
		currentTransform = this.engine.rootTransform;
		cxformList = [];
		this.clippingId = 1;
		parentId = "";
	}
	if(!mc.properties._visible) {
		return;
	}
	if(!mc.isModifiedSince(this.lastRenderedFrameCount)) {
		return mc.cachedRenderedItems;
	}
	
	var clippedLayerList = [];
	var mcInfo = mc.mcInfo;
	var frame = mc.properties["_currentframe"];
	var engine = this.engine;
	var dictionary = mc.dictionary;
	var option = engine.option;
	
	for(var name in option.operation) {
		if(name == mc.properties["_name"]) {
			operation = option.operation[name];
		}
	}
	detail = (option.shapeDetail && option.shapeDetail[mc.properties["_name"]]) || detail;
	
	var layerList = [];
	for(var layer in mc.displayList) {
		layer < 65536 && (layerList[layerList.length] = layer);
	}
	layerList.sort(function(a, b) {return a - b;});
	var len = layerList.length;
	for(var i = 0; i < len; i++) {
		var idInfo = mc.displayList[layerList[i]];
		var id = idInfo.id;
		var placement = mcInfo.frameIdPlacementMap[frame][id];
		
		var def = dictionary[idInfo.characterId];
		
		var matrix;
		var cxform = placement.cxform;
		var currentCxformList;
		if(cxform && !(cxform[0]==256 && cxform[1]==256 && cxform[2]==256 && cxform[3]==256
                && cxform[4]==0 && cxform[5]==0 && cxform[6]==0 && cxform[7]==0)) {
			currentCxformList = cxformList.concat([cxform]); // create new array
		} else {
			currentCxformList = cxformList;
		}

		var child = mc.childrenIdMap[id];
		var absoluteId = parentId + ("0000" + id.toString(16)).slice(-4);
		if(placement.clipDepth) {
			// TODO: clipping id is very bad solution for caching. fix this.
			clippedLayerList.push([placement.clipDepth, this.clippingId]);
			items.push(this.clippingId++);
		}
		if(child) {
			if(!child.isLocked) {
				matrix = placement.matrix;
			} else {
				matrix = child.getMatrix();
			}

			Array.prototype.push.apply(items, this.generateRenderItems(child, (matrix && mulTransform(currentTransform, matrix)) || currentTransform, currentCxformList, absoluteId, operation, detail));
		} else {
			matrix = placement.matrix;
			if(matrix[0]*matrix[3] == matrix[1]*matrix[2]) continue; // det(matrix) == 0 means nothing to display

			matrix = (matrix && mulTransform(currentTransform, matrix)) || currentTransform;
			var twRect = transformRect(matrix, def.bounds);
			var rect = DirtyRectRenderer.devide20(twRect);

			var text = "";	
			if(def.type == 37) { // TagDefine.TypeTagDefineEditText
				text = getTextOfEditText(mc, def);
			}

			items.push({
				placement: placement,
				transform: matrix,
				cxformList: currentCxformList,
				absolutePlacementId: absoluteId,
				operation: operation || "source-over",
				detail: detail,
				rect: rect,
				text: text,
				dictionary: dictionary
			});
		}
		if(clippedLayerList.length) {
			var clipData = clippedLayerList[clippedLayerList.length - 1];
			var lastClip = clipData[0];
			var nextLayer = layerList[i + 1];
			if(nextLayer == null || nextLayer > lastClip) {
				// unclipping
				items.push(-clipData[1]);
				clippedLayerList.pop();
			}
		}
	}

	mc.cachedRenderedItems = items;

	return items;
};

DirtyRectRenderer.calcScale = function(m) {
    var l1 = Math.sqrt(m[0]*m[0] + m[1]*m[1]);
    var l2 = Math.sqrt(m[2]*m[2] + m[3]*m[3]);
    return Math.sqrt(l1 * l2);
};

DirtyRectRenderer.roundMatrix = function(matrix) {
	var ret = [];

	for(var i = 0; i < 4; i++) ret[i] = matrix[i];
	for(var i = 4; i < 6; i++) ret[i] = Math.round(matrix[i]);
	return ret;
};

DirtyRectRenderer.devide20 = function(rect) {
	var ret = [];
	ret[0] = Math.floor(rect[0]/20) - 1;
	ret[2] = Math.floor(rect[2]/20) - 1;

	ret[1] = Math.ceil((rect[1] - rect[0]) / 20) + ret[0] + 2;
	ret[3] = Math.ceil((rect[3] - rect[2]) / 20) + ret[2] + 2;

	return ret;
};

DirtyRectRenderer.prototype.addDirtyRect = function(rect) {
	var canvas = this.ctx.canvas;
	var width = this.frameWidth-1;
	var height = this.frameHeight-1;

	if(rect[0] > width || rect[1] < 0 || rect[2] > height || rect[3] < 0) {
		return;
	}
	var x1 = rect[0] > 0 ? rect[0] : 0;
	var x2 = rect[1] < width ? rect[1] : width;
	var y1 = rect[2] > 0 ? rect[2] : 0;
	var y2 = rect[3] < height ? rect[3] : height;

	var dirtyRects = this.dirtyRects;
	for(var i = 0; i < dirtyRects.length; i++) { // DON'T use constant as an array length.
		var r = dirtyRects[i];
		if(x2 < r[0] || r[1] < x1 || y2 < r[2] || r[3] < y1) {
			continue;
		}
		
		x1 = r[0] > x1 ? x1 : r[0];
		x2 = r[1] < x2 ? x2 : r[1];
		y1 = r[2] > y1 ? y1 : r[2];
		y2 = r[3] < y2 ? y2 : r[3];

		dirtyRects.splice(i, 1);	
		i = -1;
	}
	dirtyRects[dirtyRects.length] = [x1, x2, y1, y2];
};

DirtyRectRenderer.compareRenderItem = function(item1, item2, ignoreTranslate, ignoreColorTranslate) {
    if(compareTransform(item1.transform, item2.transform, ignoreTranslate)) {
        if(ignoreColorTranslate || compareColorTransform(item1.cxformList, item2.cxformList)) {
            if(item1.text === item2.text) {
                return true;
            }
        }
    }
    return false;
};

DirtyRectRenderer.prototype.generateImageInfo = function(def, cxformList, localDrawScale, scale, adjustLineScale, dictionary) {
	var engine = this.engine;
	var key = def.id + dictionary["name"];
	var func = (this.cachedFunction[key] || (this.cachedFunction[key] = createDrawFunction(engine, def, false, dictionary)));
	var bounds = def.bounds;
	var width = (def.bounds[1] - def.bounds[0]) / 20;
	var height = (def.bounds[3] - def.bounds[2]) / 20;
	var option = this.engine.option;
	
	var cacheMaxShapeSize = option.cacheMaxShapeSize || 2;
	if(width * (scale || 1) > this.twWidth / 20 * this.rootScale * cacheMaxShapeSize || height * (scale || 1) > this.twHeight / 20 * this.rootScale * cacheMaxShapeSize) {
		// too big to cache. return null
		//console.log(scale, width * (scale || 1), height * (scale || 1), this.rootScale, this.twWidth / 20 * this.rootScale * 2, this.twHeight / 20 * this.rootScale * 2);
		return null;
	}
	
	var canvas = CacheController.getFreeCanvas();
	canvas.width = Math.ceil(width * (scale || 1)) || 1;
	canvas.height = Math.ceil(height * (scale || 1)) || 1;
	option.debug && !option.suppressLog.drawCache && EngineLogD("create cache for [" + def.id + "] width: " + canvas.width + " height:" + canvas.height);
	var cctx = canvas.getContext("2d");
	// use canvas.width / width and canvas.height / height as each scale
	// to fit the canvas whose width and height are integer
	cctx.transform(canvas.width / width, 0, 0, canvas.height / height, 0, 0);
	cctx.transform(1, 0, 0, 1, -def.bounds[0] / 20, -def.bounds[2] / 20);//localDrawScale*=scale/1.5;
	adjustLineScale && (localDrawScale = adjustLineScale * this.rootScale);
	//console.log(localDrawScale, scale, adjustLineScale, this.rootScale);
	if(func(engine, cctx, def, null/* TODO remove this param*/, cxformList, "", changeColor, this.transformImageColor, splitString, localDrawScale, makeGlyphInfo, renderFont, null, dictionary)) {
		(canvas.width == 0 || canvas.height == 0) && (canvas.width = 1, canvas.height = 1);
		return {img: canvas, x: def.bounds[0] / 20, y: def.bounds[2] / 20, width: width, height: height, scale: scale};
	} else {
		return null;
	}
};

DirtyRectRenderer.prototype.createDirtyRects = function(items) {
	this.dirtyRects = [];

	var len = items.length;
	for(var i = 0; i < len; i++) {
		var current = items[i];
		if(typeof current === "number") continue;

		var absolutePlacementId = current.absolutePlacementId;
		var last = this.lastRenderedItems[absolutePlacementId];
		if(last) {
			if(!DirtyRectRenderer.compareRenderItem(current, last)) {
				this.addDirtyRect(current.rect);
				this.addDirtyRect(last.rect);
			}
			delete this.lastRenderedItems[absolutePlacementId];
		} else {
			this.addDirtyRect(current.rect);
		}
	}
	
	for(var id in this.lastRenderedItems) {
		this.addDirtyRect(this.lastRenderedItems[id].rect);
		delete this.lastRenderedItems[id];
	}
};

DirtyRectRenderer.prototype.preloadCache = function() {
	var engine = this.engine;
	var option = engine.option;
	var shapeDetail = option.shapeDetail;

	if(shapeDetail) {
		var cacheController = this.cacheController;
		if(shapeDetail.all && shapeDetail.all.preload) {
			option.debug && EngineLogD("preload: all");
			var tagList = engine.dataStore.tagList;
			var len = tagList.length;
			for(var i = this.tagListCursor; i < len; i++) {
				var tag = tagList[i];
				switch(tag.type) {
				case TagDefine.TypeTagDefineShape:
				case TagDefine.TypeTagDefineShape2:
				case TagDefine.TypeTagDefineShape3:
				case TagDefine.TypeTagDefineText:
				case TagDefine.TypeTagDefineText2:
				case TagDefine.TypeTagDefineEditText:
					var key = tag.id;
					var def = tag;

					// Manual inline expansion
					var method = this.cachedMethod[key] || ((shapeDetail[key] && shapeDetail[key].method) || (shapeDetail.all && shapeDetail.all.method));
					method = (def.type != 37 && method) || "func";
					this.cachedMethod[key] || ((this.cachedMethod[key] = method) && option.debug && !option.suppressLog.drawCache && EngineLogD("CacheMethod["+key+"]="+method));

					if(method == "cache") {
						var scale = (shapeDetail[key] && shapeDetail[key].cacheScale) || (shapeDetail.all && shapeDetail.all.cacheScale) || this.rootScale;
						var adjustLineScale = (shapeDetail[key] && shapeDetail[key].adjustLineScale) || (shapeDetail.all && shapeDetail.all.adjustLineScale);
						cacheController.getImageInfo[key] || cacheController.cacheImageInfo(key, this.generateImageInfo(def, [], scale, scale, null, this.engine.dictionary));
					} else {
						(this.cachedFunction[key] || (this.cachedFunction[key] = createDrawFunction(engine, def, false, this.engine.dictionary)));
					}
            		break;
				}
			}
			this.tagListCursor = len;
		} else {
			for(var key in shapeDetail) {
				var def = engine.dictionary[key];
				if(def && shapeDetail[key].preload) { // 'all' is excluded by this condition because def is always undefiend.
					if(this.cachedMethod[key]) {
						// already loaded
						continue;
					}
					option.debug && EngineLogD("preload: "+key);

					// Manual inline expansion
					var method = this.cachedMethod[key] || (shapeDetail[key].method || (shapeDetail.all && shapeDetail.all.method));
					method = (def.type != 37 && method) || "func";
					this.cachedMethod[key] || ((this.cachedMethod[key] = method) && option.debug && !option.suppressLog.drawCache && EngineLogD("CacheMethod["+key+"]="+method));

					if(method == "cache") {
						var scale = shapeDetail[key].cacheScale || (shapeDetail.all && shapeDetail.all.cacheScale) || this.rootScale;
						var adjustLineScale = (shapeDetail[key] && shapeDetail[key].adjustLineScale) || (shapeDetail.all && shapeDetail.all.adjustLineScale);
						cacheController.getImageInfo[key] || cacheController.cacheImageInfo(key, this.generateImageInfo(def, [], scale, scale, null, this.engine.dictionary));
					} else {
						this.cachedFunction[key] || (this.cachedFunction[key] = createDrawFunction(engine, def, false, this.engine.dictionary));
					}
				}
			}
		}
	}
};

DirtyRectRenderer.prototype.render = function() {
	var ctx = this.ctx;
	if(!ctx) {
		return;
	}
	// at first, flatten all movie clips
	var items = this.generateRenderItems() || [];

	this.createDirtyRects(items);

	var engine = this.engine;
	var option = engine.option;
	var dirtyRects = this.dirtyRects;
	var dlen = dirtyRects.length;

	var canvas = ctx.canvas;
	ctx.fillStyle = stringColor(this.engine.bgColor);
	for(var j = 0; j < dlen; j++) {
		var drect = dirtyRects[j];
		if(option.transparent) {
			// Android default browser of some models such as SC-06D
			// freezes if set CSS zoom and used ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height) repeatedly,
			// so use ctx.clearRect(0, 0, ctx.canvas.width + 1, ctx.canvas.height)
			// cf. PFX-57
			if(drect[0] == 0 && drect[1] + 1 == ctx.canvas.width) {
				drect[1]++;
			}
			ctx.clearRect(drect[0], drect[2], drect[1]-drect[0]+1, drect[3]-drect[2]+1);
		} else {
			// Android default browser of SCL21 seems to clear canvas
			// if use ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height) repeatedly and fastly,
			// so use ctx.fillRect(0, 0, ctx.canvas.width + 1, ctx.canvas.height)
			// cf. #479
			if(drect[0] == 0 && drect[1] + 1 == ctx.canvas.width) {
				drect[1]++;
			}
			ctx.fillRect(drect[0], drect[2], drect[1]-drect[0]+1, drect[3]-drect[2]+1);
		}
	}
	ctx.fillStyle = "rgba(0,0,0,1)";	// for avoiding android legacy browser's bug
										// it seems to be keeping alpha value inside browser
										// so overwrite alpha value with 1

	ctx.save();
	ctx.beginPath();
	for(var j = 0; j < dlen; j++) {
		var drect = dirtyRects[j];
		ctx.rect(drect[0], drect[2], drect[1]-drect[0]+1, drect[3]-drect[2]+1);
	}
	ctx.clip();

	var cacheController = this.cacheController;
	var len = items.length;
	var clippingCnt = 0;
	for(var i = 0; i < len; i++) {
		var item = items[i];

		if(typeof item === "number") {
			if(item > 0) {
				ctx.save();
			} else {
				for(; clippingCnt > 0; clippingCnt--) {
					ctx.restore();
				}
				ctx.restore();
			}
			continue;
		}
		var placement = item.placement;
		var matrix = item.transform;
		var cxformList = item.cxformList;
		var rect = item.rect;
		var text = item.text;

		var localDrawScale = DirtyRectRenderer.calcScale(matrix);
		var dictionary = item.dictionary;
		var def = dictionary[placement.characterId];
		
		var clipping = placement.clipDepth;

		var hasOverlapWithDirtyRects = false;
		for(var j = 0; j < dlen; j++) {
			var drect = dirtyRects[j];
			if(drect[1] >= rect[0] && rect[1] >= drect[0]
				&& drect[3] >= rect[2] && rect[3] >= drect[2]) {
				hasOverlapWithDirtyRects = true;
				break;
			}
		}

		if(!hasOverlapWithDirtyRects && !clipping) {
			continue;
		}
		
		ctx.globalCompositeOperation = item.operation;
		var detail = item.detail;
		
		// todo: deal with cxform
		if(clipping) {
			var operation = ctx.globalCompositeOperation;
			if (operation != "source-over") {
				// copy the canvas temporarily to avoid 'PFX-29'

				// Android default browser won't apply the changes after clipping
				// until 'restore' is called,
				// so call 'restore' to apply changes temporarily
				ctx.restore();  // state of after clip
				ctx.restore();  // state of before clip

				var copiedCanvas = CacheController.getFreeCanvas();
				copiedCanvas.width = this.frameWidth;
				copiedCanvas.height = this.frameHeight;
				copiedCanvas.getContext('2d').drawImage(canvas, 0, 0);

				// clip again
				ctx.save();
				if (clippingCnt > 0) {
					// FIXME: clipping path can be changed ('beginPath' can be called after clip)
					ctx.clip();
				} else {
					ctx.save();
					for(var j = 0; j < dlen; j++) {
						var drect = dirtyRects[j];
						ctx.rect(drect[0], drect[2], drect[1]-drect[0]+1, drect[3]-drect[2]+1);
					}
					ctx.clip();
				}
				ctx.save();
				ctx.globalCompositeOperation = operation;
			}
			ctx.transform.apply(ctx, matrix);

			var key = def.id + dictionary["name"];
			(this.cachedClippingFunction[key] || (this.cachedClippingFunction[key] = createDrawFunction(engine, def, true, dictionary)))
				(engine, ctx, def, matrix, cxformList, text, changeColor, this.transformImageColor, splitString, localDrawScale, makeGlyphInfo, renderFont, copiedCanvas, dictionary);
			if (copiedCanvas) {
				CacheController.destroyCanvas(copiedCanvas);
				copiedCanvas = null;
			}
			// Android default browser requires ctx.save before ctx.clip to clip works correctly,
			// but Android 3.x requires ctx.save also after ctx.clip
			ctx.save();
			clippingCnt++;

			ctx.transform.apply(ctx, revTransform(matrix));
		} else {
			var key = def.id + dictionary["name"];

			// get option
			var shapeDetail = option.shapeDetail;
			var method = this.cachedMethod[key]
							|| (shapeDetail && ((shapeDetail[key] && shapeDetail[key].method) || (detail && detail.method) || (shapeDetail.all && shapeDetail.all.method)));
			method = (def.type != 37 && method) || "func";
			this.cachedMethod[key] || ((this.cachedMethod[key] = method) && option.debug && !option.suppressLog.drawCache && EngineLogD("CacheMethod["+key+"]="+method));
			var drawed = false;
			if(method == "cache") {
				var imageKey = key;
				if(cxformList && cxformList.length) {
					var post = ",";
					var clen = cxformList.length;
					for(var c = 0; c < clen; c++) {
						post += cxformList[c].join();
					}
					imageKey += post;
				}
				// use cache images
				var imageInfo = cacheController.getImageInfo(imageKey);
				if(!imageInfo) {
					var scale = (shapeDetail && +((shapeDetail[key] && shapeDetail[key].cacheScale) || (detail && detail.cacheScale) || (shapeDetail.all && shapeDetail.all.cacheScale) || this.rootScale)) || localDrawScale;
					var adjustLineScale = (shapeDetail[key] && shapeDetail[key].adjustLineScale) || (detail && detail.adjustLineScale) || (shapeDetail.all && shapeDetail.all.adjustLineScale);
					imageInfo = this.generateImageInfo(def, cxformList, localDrawScale, scale, adjustLineScale, dictionary);
					imageInfo && cacheController.cacheImageInfo(imageKey, imageInfo);
					if(!imageInfo) {
						this.cachedMethod[key] = "func";
						option.shapeDetail = option.shapeDetail || {};
						option.shapeDetail[key] = "func";
						option.debug && EngineLogD("cache avoided: " + placement.characterId);
					}
				}
				if(imageInfo && imageInfo.width && imageInfo.height) {
					drawed = true;
					ctx.save();
					if(matrix[1] == 0 && matrix[2] == 0) {
						// No rotation
						var scaleX = matrix[0];
						var scaleY = matrix[3];
						var t0 = scaleX > 0 ? 1 : -1;
						var t3 = scaleY > 0 ? 1 : -1;

						var dw = Math.round(t0*imageInfo.width*scaleX);
						var dx = Math.round(t0*(imageInfo.x*scaleX + matrix[4]));
						var dh = Math.round(t3*imageInfo.height*scaleY);
						var dy = Math.round(t3*(imageInfo.y*scaleY + matrix[5]));
						ctx.transform(t0, 0, 0, t3, 0, 0);
						ctx.drawImage(imageInfo.img, dx, dy, dw, dh);
					} else {
						ctx.transform.apply(ctx, matrix);
						ctx.drawImage(imageInfo.img, imageInfo.x, imageInfo.y, imageInfo.width, imageInfo.height);
					}
					ctx.restore();
				}
			}
			if(!drawed) {
				// use function method
				var key = def.id + dictionary["name"];
				// If fail to draw the image (e.g. the image haven't been loaded yet), set items[i] to NaN, which type is number,
				// so that items[i] is not stored to lastRenderedItems
				ctx.save();
				ctx.transform.apply(ctx, matrix);
				(this.cachedFunction[key] || (this.cachedFunction[key] = createDrawFunction(engine, def, false, dictionary)))
					(engine, ctx, def, placement.matrix, cxformList, text, changeColor, this.transformImageColor, splitString, localDrawScale, makeGlyphInfo, renderFont, null, dictionary) || (items[i] = NaN);
				ctx.restore();
			}

		}
	}

	ctx.restore();
	ctx.globalCompositeOperation = "source-over";

/*
	ctx.strokeStyle = "rgb(255,0,255)";
	for(var j = 0; j < dlen; j++) {
		var drect = dirtyRects[j];
		ctx.strokeRect(drect[0], drect[2], drect[1]-drect[0], drect[3]-drect[2]);
	}
*/	
	this.lastRenderedFrameCount = this.engine.frameCount;
	this.lastRenderedItems = {};
	for(var i = 0; i < items.length; i++) {
		var item = items[i];
		if(typeof item === "number") {
			continue;
		}
		var id = item.absolutePlacementId;
		this.lastRenderedItems[id] = item;
	}


};


/*//////////////////
  renderer/draw_function_factory.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var createDrawFunction  = function() {
	var body = "";
	var enableStyleText = false;
	var createShapeFunction = function() {

		// set context
		var context;

		// save paths for each styles
		var linePaths;
		var fillPaths;
		var marginPaths;

		// initialize
		var currentLineStyle;
		var currentFillStyle0;
		var currentFillStyle1;
		var path;
		var lineStyles;
		var fillStyles;

		var rev = function(path) {
			var ret = [];
			var len = path.length;
			for(var i = len - 1; i >= 0; i--) {
				var p = path[i];
				if(p.cx != null) {
					ret.push({x1: p.x2, y1: p.y2, cx: p.cx, cy: p.cy, x2: p.x1, y2: p.y1});
				} else {
					ret.push({x1: p.x2, y1: p.y2, x2: p.x1, y2: p.y1});
				}
			}
			return ret;
		};

		var addPath = function(clipping) {
			if(!path.length) {
				return;
			}
			if(currentLineStyle != 0) {
				linePaths[currentLineStyle - 1] = linePaths[currentLineStyle - 1] || [];
				linePaths[currentLineStyle - 1].push(path);
			} else if(currentFillStyle0 != 0 && currentFillStyle1 != 0) {
				// fill space between the object with line
				if(fillStyles[currentFillStyle0 - 1].type == FillStyleDefine.TypeSolidFill) {
					marginPaths[currentFillStyle0 - 1] = marginPaths[currentFillStyle0 - 1] || [];
					marginPaths[currentFillStyle0 - 1].push(path);
				} else if(fillStyles[currentFillStyle1 - 1].type == FillStyleDefine.TypeSolidFill) {
					marginPaths[currentFillStyle1 - 1] = marginPaths[currentFillStyle1 - 1] || [];
					marginPaths[currentFillStyle1 - 1].push(path);
				}
			}

			if(currentFillStyle0 != 0) {
				var pathIndex = currentFillStyle0 - 1;
				if(clipping) {
					pathIndex = 0;
				}
				fillPaths[pathIndex] = fillPaths[pathIndex] || [];
				fillPaths[pathIndex].push(path);
			}
			if(currentFillStyle1 != 0) {
				var pathIndex = currentFillStyle1 - 1;
				if(clipping) {
					pathIndex = 0;
				}
				fillPaths[pathIndex] = fillPaths[pathIndex] || [];
				// reverse all paths inside fillStyle1
				fillPaths[pathIndex].push(rev(path));
			}
			// create new path list
			path = [];
		};

		var closeContext = function() {
			context.push({lineStyles: lineStyles, fillStyles: fillStyles, linePaths: linePaths, fillPaths: fillPaths, marginPaths: marginPaths});
			linePaths = [];
			fillPaths = [];
			marginPaths = [];
		};

		var drawLineFunc = function(style, line) {
			body += "ctx.beginPath();/**/";
			setLineStyle(style);
			var len = line.length;
			for(var i = 0; i < len; i++) {
				var paths = line[i];
				body += "/**/ctx.moveTo(" + paths[0].x1 / 20 + "," + paths[0].y1 / 20 + ");";
				var plen = paths.length;
				for(var j = 0; j < plen; j++) {
					var path = paths[j];
					if(path.cx != null) {
						body += "/**/ctx.quadraticCurveTo(" + path.cx / 20 + "," + path.cy / 20 + "," + path.x2 / 20 + "," + path.y2 / 20 + ");";
					} else {
						body += "/**/ctx.lineTo(" + path.x2 / 20 + "," + path.y2 / 20 + ");"
					}
				}
			}
			body += "ctx.stroke();/**/";
		};

		var repairPath = function(path, rt) {
			if(!rt) {
				return path;
			}
			var xy;
			var ret = {};
			xy = transformXY(rt, path.x1, path.y1);
			ret.x1 = xy[0];
			ret.y1 = xy[1];
			xy = transformXY(rt, path.x2, path.y2);
			ret.x2 = xy[0];
			ret.y2 = xy[1];
			if(path.cx != null) {
				xy = transformXY(rt, path.cx, path.cy);
				ret.cx = xy[0];
				ret.cy = xy[1];
			}
			return ret;
		};

		var joinPaths = function(paths) {
			do {
				var ret = [];
				var concat = false;
				var ilen = paths.length;
				for(var i = 0; i < ilen; i++) {
					var jlen = ret.length;
					for(var j = 0; j < jlen; j++) {
						var lp = paths[i].length - 1;
						var lr = ret[j].length - 1;
						if(paths[i][0].x1 == ret[j][lr].x2 && paths[i][0].y1 == ret[j][lr].y2) {
							// paths[i] can join after ret[j]
							ret[j] = ret[j].concat(paths[i]);
							concat = true;
							break;
						} else if(ret[j][0].x1 == paths[i][lp].x2 && ret[j][0].y1 == paths[i][lp].y2) {
							// paths[i]can join before ret[j]
							ret[j] = paths[i].concat(ret[j]);
							concat = true;
							break;
						}
					}
					if(j == ret.length) {
						ret.push(paths[i]);
					}
				}
				paths = ret;
			} while(concat);

			return paths;
		};

		var setLineStyle = function(lineStyle) {
			if(lineStyle.width != null) {
				var lw = lineStyle.width / 20;
				body += "/**/ctx.lineWidth="+lw+"*drawScale<1?/**/1/drawScale:"+lw+";";
			}
			if(lineStyle.color != null) {
				body += "/**/ctx.strokeStyle=changeColor(cxformList," + lineStyle.color + ");";
			}
		};

		var setFillStyle = function(fillStyle) {
			var ret = null;
			switch(fillStyle.type) {
			case FillStyleDefine.TypeSolidFill:
				body += "/**/ctx.fillStyle=changeColor(cxformList," + fillStyle.color + ");";
				break;
			case FillStyleDefine.TypeRepeatingBitmapFill:
			case FillStyleDefine.TypeClippedBitmapFill:
			case FillStyleDefine.TypeNonSmoothedRepeatingBitmapFill:
			case FillStyleDefine.TypeNonSmoothedClipedBitmapFill:
				var t = fillStyle.matrix; // receive wrong matrix here
				ret = [t[0] / 20, t[1] / 20, t[2] / 20, t[3] / 20, t[4], t[5]];

				body += "/**/var img=dictionary[" + fillStyle.bitmapId + "].img;/**/";
				body += "/**/if(img.width==0&&img.height==0){return false;}";	// image is not loaded so exit
				body += "if(cxformList.length) {img=transformImageColor(cxformList,img);}/**/";
				body += "ctx.fillStyle=ctx.createPattern(img,'repeat');/**/";
				break;
			case FillStyleDefine.TypeLinearGradientFill:
			case FillStyleDefine.TypeRadialGradientFill:
				ret = fillStyle.matrix;
				body += "var grad;/**/";
				if(fillStyle.type == FillStyleDefine.TypeLinearGradientFill) {
					body += "grad=ctx.createLinearGradient(-16384 / 20, 0, 16384 / 20, 0);/**/";
				} else {
					body += "grad=ctx.createRadialGradient(0, 0, 0, 0, 0, 16384 / 20);/**/";
				}
				var len = fillStyle.gradient.records.length;
				for (var i = 0; i < len; i++) {
					var g = fillStyle.gradient.records[i];
					//grad.addColorStop(g.ratio / 255, transformColor(colorTransform, g.color));
					body += "/**/grad.addColorStop(" + g.ratio / 255 + ",changeColor(cxformList/**/, " + g.color + "));";
				}
				body += "ctx.fillStyle=grad;/**/";
				break;
			default:
				EngineLogE("renderShape.setFillStyle: unknown draw type called: " + fillStyle.type);
				break;
			}
			return ret;
		};

		var makeSimpleClippedBitmapFill = function(fill, fillStyle) {
			if(fillStyle.type != FillStyleDefine.TypeClippedBitmapFill) {
				return false;
			}
			var matrix = fillStyle.matrix;
			if(!matrix || Math.abs(matrix[0]) != Math.abs(matrix[3]) || matrix[1] != 0 || matrix[2] != 0) {
				return false;
			}

			if(fill.length != 1) {
				return false;
			}
			var paths = fill[0];
			if(paths.length != 4) {
				return false;
			}
			var vectors = [];
			for(var i = 0; i < 4; i++) {
				var path = paths[i];

				if(path.cx || path.cy) return false;

				vectors[vectors.length] = {
					x: path.x2 - path.x1,
					y: path.y2 - path.y1
				};
			}

			if(	(vectors[0].x == 0 && vectors[1].y == 0 && vectors[2].x == 0 && vectors[3].y == 0
					&& vectors[0].y == -vectors[2].y && vectors[1].x == -vectors[3].x)
				||
				(vectors[0].y == 0 && vectors[1].x == 0 && vectors[2].y == 0 && vectors[3].x == 0
					&& vectors[0].x == -vectors[2].x && vectors[1].y == -vectors[3].y)) {

				var mat2 = [matrix[0]/20, matrix[1], matrix[2], matrix[3]/20, matrix[4], matrix[5]];
				var bitmapId = fillStyle.bitmapId;
				body += "/**/var img=dictionary[" + bitmapId + "].img;/**/";
				body += "/**/if(img.width==0&&img.height==0){return false;}";
				body += "if(cxformList.length) {img=transformImageColor(cxformList,img);}/**/";
				body += "/**/ctx.transform(" + mat2.join() + ");"
				body += "ctx.drawImage(img, 0, 0);/**/";
				body += "/**/ctx.transform(" + revTransform(mat2).join() + ");"
				return true;
			}
			return false;
		}

		return function(fillStyles_, lineStyles_, shapes, clipping) {
			// initializing
			context = [];
			fillStyles = fillStyles_;
			lineStyles = lineStyles_;

			linePaths = [];
			fillPaths = [];
			marginPaths = [];

			currentLineStyle = 0;
			currentFillStyle0 = 0;
			currentFillStyle1 = 0;
			path = [];

			// current position
			var x = 0;
			var y = 0;

			var len = shapes.length;
			for(var i = 0; i < len; i++) {
				var shape = shapes[i];

				switch(shape.type) {
				case EdgeDefine.TypeCurve:
					var cx = x + shape.cx;
					var cy = y + shape.cy;
					var ax = cx + shape.ax;
					var ay = cy + shape.ay;
					path.push({x1: x, y1: y, cx: cx, cy: cy, x2:ax, y2: ay});
					x = ax;
					y = ay;
					break;
				case EdgeDefine.TypeStraight:
					var ax = x + shape.x;
					var ay = y + shape.y;
					path.push({x1: x, y1: y, x2:ax, y2: ay});
					x = ax;
					y = ay;
					break;
				case EdgeDefine.TypeStyleChange:
					addPath(clipping);
					if(shape.lineStyles || shape.fillStyles) {
						// if new styles exist, once close context
						closeContext();
						// set new styles
						lineStyles = shape.lineStyles || lineStyles;
						fillStyles = shape.fillStyles || fillStyles;
					}
					if(shape.dx != null) {
						// TODO: x += shape.dx seems to be true
						x = shape.dx;
					}
					if(shape.dy != null) {
						// TODO: y += shape.dy seems to be true
						y = shape.dy;
					}
					if(shape.lineStyle != null) {
						currentLineStyle = shape.lineStyle;
					}
					if(shape.fillStyle0 != null) {
						currentFillStyle0 = shape.fillStyle0;
					}
					if(shape.fillStyle1 != null) {
						currentFillStyle1 = shape.fillStyle1;
					}
					break;
				default:
					EngineLogE("drawObject.renderShape: Unknown type detected:", shape.type);
					break;
				}
			}
			// save the last path
			addPath(clipping);
			closeContext();


			// start to draw
			body += "ctx.lineCap='round';/**/";
			//body += "ctx.globalCompositeOperation='source-over';/**/";

			var clen = context.length;
			for(var i = 0; i < clen; i++) {
				var c = context[i];
				lineStyles = c.lineStyles;
				fillStyles = c.fillStyles;
				linePaths = c.linePaths;
				fillPaths = c.fillPaths;
				marginPaths = c.marginPaths;

				if(!clipping) {
					// stroke margin lines first
					var mlen = marginPaths.length;
					for(var j = 0; j < mlen; j++) {
						var line = marginPaths[j];
						if(line) {
							var style = {
								width: 1,
								color: fillStyles[j].color
							};
							drawLineFunc(style, line);
						}
					}
				}

				// fill
				var flen = fillPaths.length;
				for(var j = 0; j < flen; j++) {
					var fill = fillPaths[j];
					var rt;
					if(fill) {
						fill = joinPaths(fill);
						if(makeSimpleClippedBitmapFill(fill, fillStyles[j])) continue;
						if(!clipping) {
							var ft = setFillStyle(fillStyles[j]);
							if(ft) {
								body += "/**/ctx.transform(" + ft.join() + ");";
							}
							rt = (ft && revTransform(ft)) || null;
						}
						if(!clipping || (i == 0 && j == 0)) {
							// when clipping, execute beginPath only first time
							body += "ctx.beginPath();/**/";
						}

						var fflen = fill.length;
						for(var k = 0; k < fflen; k++) {
							var paths = fill[k];
							if(paths) {
								var from = repairPath(paths[0], rt);
								body += "/**/ctx.moveTo(" + from.x1 / 20 + "," + from.y1 / 20 + ");";
								var plen = paths.length;
								for(var l = 0; l < paths.length; l++) {
									var pathRepair = repairPath(paths[l], rt);
									if(pathRepair.cx != null) {
										body += "/**/ctx.quadraticCurveTo(" + pathRepair.cx / 20 + "," + pathRepair.cy / 20 + "," + pathRepair.x2 / 20 + "," + pathRepair.y2 / 20 + ");";
									} else {
										body += "/**/ctx.lineTo(" + pathRepair.x2 / 20 + "," + pathRepair.y2 / 20 + ");";
									}
								}
							}
						}

						if(clipping) {
							if(i == context.length - 1 && j == fillPaths.length - 1) {
								// clip execute only the last draw
								body += "ctx.clip();/**/";
								// On Android 3.x, 4.0.x,
								// composite operations except 'source-over' doesn't work
								// if CanvasRenderingContext2D#clip() is used (PFX-29)
								// redraw the content to avoid it
								body += "if(ctx.globalCompositeOperation!='source-over'){/**/";
								body += "ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalCompositeOperation='source-over';/**/";
								// clear extra area (width + 1)
								// Otherwise, Android default browser sometimes clears all area
								body += "ctx.globalAlpha=1;ctx.clearRect(0,0,ctx.canvas.width+1,ctx.canvas.height);/**/";
								body += "ctx.drawImage(copiedCanvas,0,0);ctx.restore();}/**/";
							}
						} else {
							body += "ctx.fill();/**/";
							if(rt) {
								body += "/**/ctx.transform(" + rt.join() +");";
							}
						}
					}
				} // fillPaths

				if(!clipping) {
					var llen = linePaths.length;
					for(var j = 0; j < llen; j++) {
						var line = linePaths[j];
						line && drawLineFunc(lineStyles[j], line);
					}
				}
			} // context

		};
	}();

	var drawDefineText = function(engine, def, clipping, dictionary) {
		if(def.matrix) {
			body += "/**/ctx.transform(" + def.matrix.join() + ");";
		}

		var records = def.records;
		var font, x = 0, y = 0, height, color;
		var len = records.length;
		for(var i = 0; i < len; i++) {
			var record = records[i];
			if(record.fontId != null) {
				font = dictionary[record.fontId];
			}
			if(record.color != null) {
				color = record.color;
			}
			if(record.x != null) {
				x = record.x;
			}
			if(record.y != null) {
				y = record.y;
			}
			if(record.height != null) {
				height = record.height;
			}
			var glen = record.glyphs.length;
			for(var j = 0; j < glen; j++) {
				var glyph = record.glyphs[j];
				var ratio = height / 1024;
				body += "/**/ctx.transform(1,0,0,1," + x / 20 + "," + y / 20 + ");";
				body += "/**/ctx.transform(" + ratio + ",0,0," + ratio + ",0,0);";
				// renderFont: create my own fillStyle(type:0==solid_fill)
				createShapeFunction([{color: color, type: FillStyleDefine.TypeSolidFill}], null, font.shapeTable[glyph.index], clipping);

				body += "/**/ctx.transform(" + 1 / ratio + ",0,0," + 1 / ratio + ",0,0);";
				body += "/**/ctx.transform(1,0,0,1," + (-x / 20) + "," + (-y / 20) + ");";
				x += glyph.advance;
			}
		}

		if(def.matrix) {
			body += "/**/ctx.transform(" + revTransform(def.matrix).join() + ");";
		}
	};

	var drawDefineEditText = function(engine, def, clipping, dictionary) {
		if(def.useOutlines) {
			var x1 = def.bounds[0] / 20 + 2;
			var x2 = def.bounds[1] / 20 - 2;
			var y1 = def.bounds[2] / 20 + 2;
			var y2 = def.bounds[3] / 20 - 2;
			// defineFontをglyphFontを使って描画する
			var font = dictionary[def.fontId];
			var ratio = def.height / 1024;

			var maxWidth = (x2 - x1) / ratio * 20;
			body += "/**/var font=dictionary[def.fontId];";
			body += "/**/var glyphInfo=makeGlyphInfo(text,"+maxWidth+","+x1+","+x2+","+y1+","+y2+",font,"+ratio+",def);/**/";
			body += "/**/var len = glyphInfo.length;";
			body += "/**/for (var line = 0; line < len; line++) {";
			body += "/**/var align = glyphInfo[line].align;";
			body += "/**/var indices = glyphInfo[line].indices;";
			body += "/**/ctx.save();";
			body += "/**/ctx.transform(1,0,0,1,"+x1+","+(y1+font.fontAscent*ratio/20.0)+");";
			body += "/**/ctx.transform("+ratio+",0,0,"+ratio+",0,0);";
			body += "/**/ctx.transform(1,0,0,1,align,0);";
			body += "/**/for(var l = 0; l < indices.length; l++) {";
			body += "/**/var index = indices[l];";
			body += "/**/var clippingState = "+(clipping ? "/**/{begin: l == 0 && line == 0, end: l == indices.length - 1}" : "null") + ";";
			body += "/**/eval(renderFont(/*ctx*/null,font,index,def.color,clippingState,/*colorTransform*/null,engine));";
			body += "/**/ctx.transform(1,0,0,1,font.fontAdvanceTable[index]/20.0,0);";
			body += "}";
			body += "/**/ctx.restore();";
			body += "/**/ctx.transform(1,0,0,1,0,"+(font.fontAscent+font.fontDescent)*ratio/20.0+");";
			body += "}";
			body += "/**/ctx.transform(1,0,0,1,0,"+(-(font.fontAscent+font.fontDescent)*ratio/20.0)+"*line);";
		} else {
			var x1 = (def.bounds[0] + def.leftMargin) / 20;
			var x2 = (def.bounds[1] - def.rightMargin) / 20;
			var y1 = def.bounds[2] / 20;
			var y2 = def.bounds[3] / 20;

			body += "/**/ctx.beginPath();";
			body += "/**/ctx.moveTo("+x1+","+y1+");";
			body += "/**/ctx.lineTo("+x1+","+y2+");";
			body += "/**/ctx.lineTo("+x2+","+y2+");";
			body += "/**/ctx.lineTo("+x2+","+y1+");";
			body += "/**/ctx.closePath();";

			var fontHeight = def.height / 20;
			var columnHeight = (def.height + def.leading) / 20;
			var characterPerLine = ((def.wordWrap && def.multiline) ? Math.ceil((x2 - x1) / fontHeight * 2) : 0);

			body += "/**/ctx.font = '"+fontHeight+"px sans-serif';";
			body += "/**/ctx.fillStyle=changeColor(cxformList," + def.color + ");"; // TODO special care for device font alpha
			body += "/**/ctx.textBaseline='top';";


			var x0 = 0, y0 = 0;
			switch(def.align) {
			case 1:
				// right
				body += "/**/ctx.textAlign='end';";
				x0 = x2 - 4;
				y0 = y1 + 2;
				break;
			case 2:
				// center
				body += "/**/ctx.textAlign='center';";
				x0 = (x1 + x2) / 2 + 2;
				y0 = y1 + 2;
				break;
			case 3:
				// TODO justify
			default:
				// left
				body += "/**/ctx.textAlign='start';";
				x0 = x1 + 2;
				y0 = y1 + 2;
				break;
        	}

			if(enableStyleText) {
				body += "/**/ctx.textAlign='start';";
				// original code is here: PFX-74
				// 'text' and 'color'will be mangled,
				// so use 'te' + 'xt' to access 'text' property of the JSON
				// In addition, jsObfuscator doesn't consider unquoted tokens in object literals as properties,
				// so quote the properties to mangle them as properties
				body += "/**/var styles_=[{'offset':0}],offsetDiff=0,textProp='te'+'xt',colorProp='co'+'lor';";
				body += "/**/text=text.replace(/(?:([\\r\\n]+)|\\{(\\{.*?\\})\\})/g,function(match_,crlf,json,offset){";
				// don't count CRLF because they are removed in `splitString`
				body += "/**/if(crlf){offsetDiff-=match_.length;return match_;}";
				body += "/**/var data_=JSON.parse(json);var text=data_[textProp]||'';var textLength=text.length;var actualOffset=offset+offsetDiff;";
				body += "/**/styles_.push({'offset':actualOffset,'color':data_[colorProp]});styles_.push({'offset':actualOffset+textLength});";
				body += "/**/offsetDiff-=match_.length-textLength;return text;});";
				body += "/**/var startPos=0,offset=0,defaultColor=changeColor(cxformList," + def.color + "),style_=styles_[0],nextStyle=styles_[1],j=0,drawString,endPos,offsetWidth_,partialString;/**/";
			}
			body += "/**/var drawStrings = splitString(text,"+characterPerLine+");";
			body += "/**/var len = drawStrings.length;";
			body += "/**/for(var i = 0, y = "+y0+"/**/; i < len; i++, y+="+columnHeight+") {";
			if(enableStyleText) {
				body += "/**/drawString=drawStrings[i];endPos=drawString.length+offset;offsetWidth_=0;";
				switch(def.align) {
				case 1:
					// right
					body += "/**/offsetWidth_-=ctx.measureText(drawString).width;";
					break;
				case 2:
					// center
					body += "/**/offsetWidth_-=ctx.measureText(drawString).width*0.5;";
					break;
				case 3:
					// TODO justify
					break;
        		}
				body += "/**/while(nextStyle&&nextStyle.offset<endPos){partialString=drawString.slice(startPos,nextStyle.offset-offset);";
				if(def.maxLength) {
					// FIXME: 'def.maxLength' should be changed in conjunction with the length of text
					body += "/**/ctx.fillText(partialString,"+x0+"+offsetWidth_,y,"+def.maxLength+");";
				} else {
					body += "/**/ctx.fillText(partialString,"+x0+"+offsetWidth_,y);/**/";
				}
				body += "/**/startPos=nextStyle.offset-offset;offsetWidth_+=ctx.measureText(partialString).width;";
				body += "/**/++j;style_=styles_[j];nextStyle=styles_[j+1];ctx.fillStyle=style_.color||defaultColor;}";
				body += "/**/startPos=style_.offset-offset;if(startPos<0){startPos=0;}";
				if(def.maxLength) {
					// FIXME: 'def.maxLength' should be changed in conjunction with the length of text
					body += "/**/ctx.fillText(drawString.slice(startPos),"+x0+"+offsetWidth_,y,/**/"+def.maxLength+");";
				} else {
					body += "/**/ctx.fillText(drawString.slice(startPos),"+x0+"+offsetWidth_,y);/**/";
				}
				body += "/**/offset+=drawString.length;startPos=0;";
			} else {
				if(def.maxLength) {
					body += "/**/ctx.fillText(drawStrings[i],"+x0+",y,"+def.maxLength + ");";
				} else {
					body += "/**/ctx.fillText(drawStrings[i],"+x0+",y);";
				}
			}
			body += "/**/};"
		}
	};

	return function(engine, def, clipping, dictionary) {
		body = "";
		enableStyleText = engine.option.enableStyleText;
		switch(def.type) {
		case TagDefine.TypeTagDefineShape:
		case TagDefine.TypeTagDefineShape2:
		case TagDefine.TypeTagDefineShape3:
			// draw shape
			createShapeFunction(def.fillStyles, def.lineStyles, def.shapes, clipping);
			break;
		case TagDefine.TypeTagDefineText:
		case TagDefine.TypeTagDefineText2:
			// draw text
			drawDefineText(engine, def, clipping, dictionary);
			break;
		case TagDefine.TypeTagDefineEditText:
			drawDefineEditText(engine, def, clipping, dictionary);
			break;
		}
		body += "return true";
		return new Function("/**/engine,ctx,def,transform,cxformList,text,changeColor,transformImageColor,splitString,drawScale,makeGlyphInfo,renderFont,copiedCanvas,dictionary", body);
	};
}();


/*//////////////////
  parser/utils_binary.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var getUI16 = function(binary, pos) {
	return binary[pos + 1] * 0x100 + binary[pos];
};
var getSI16 = function(binary, pos) {
	var val = binary[pos + 1] * 0x100 + binary[pos];
	if(((0x80 << 8) & val) != 0) {
		val |= (-1) << 16;
	}
	return val;
};
var getUI32 = function(binary, pos) {
	return (binary[pos + 3] << 24) | (binary[pos + 2] << 16) | (binary[pos + 1] << 8) | binary[pos];
};

var getRGB = function(binary, pos) {
	return (255 << 24) | (binary[pos] << 16) | (binary[pos + 1] << 8) | binary[pos + 2];
};
var getRGBA = function(binary, pos) {
	return (binary[pos + 3] << 24) | (binary[pos] << 16) | (binary[pos + 1] << 8) | binary[pos + 2];
};
var getARGB = function(binary, pos) {
	return (binary[pos] << 24) | (binary[pos + 1] << 16) | (binary[pos + 2] << 8) | binary[pos + 3];
};

var getString = function(binary, pos) {
	var end = pos;
	while(binary[end]) {
		end++;
	}
	return String.fromCharCode.apply(null, binary.slice(pos, end));
};
var getStringLength = function(binary, pos, length) {
	return String.fromCharCode.apply(null, binary.slice(pos, pos + length));
};
var getStringSJIS = function(binary, pos, length) {
    var end;
    if (typeof length === 'number') {
        end = pos + length - 1;
    } else {
        end = pos;
        while(binary[end]) {
            end++;
        }
    }
	var str = toStringFromShiftJIS(binary.slice(pos, end));
	return [(str === null)? "": str, end - pos + 1];
};

var sb2int = function(sb, bits) {
	if ((sb & (1 << (bits - 1))) != 0) {
		return sb - (1 << bits);
	}
	return sb;
};
var fb2double = function(fb, bits) {
	return sb2int(fb, bits) / 0x10000;
};

var getBit = function(binary, pos, start) {
	return (binary[pos + (start >> 3)] >> (7 - (start & 0x7)) ) & 1;
};

var getBits = function(binary, pos, start, length) {
	if(!length) {
		return 0;
	}
	
	var begin = (pos << 3) + start;
	var end = begin + length;
	var ta = begin >> 3;
	var r1 = begin & 0x7;
	var tb = end >> 3;
	var r2 = end & 0x7;
	
	/* ta=tb
	 * +-------+-------+-------+
	 *    b  e
	 *    <-->
	 *     x0
	 * <-->r1
	 * <----->r2
	 *
	 * ta              tb
	 * +-------+-------+-------+
	 *    b                 e
	 *    <----------------->
	 *    | x1 |  x2   | x3 |
	 * <-->r1
	 *                  <--->r2
	 */
	
	if(ta == tb) {
		// x0
		return (binary[ta] >> (8 - r2)) & ((1 << length) - 1);
	} else {
		// x1
		var result = binary[ta] & (0xFF >> r1);
		// x2
		for(var i = ta + 1; i < tb; i++) {
			result <<= 8;
			result |= binary[i];
		}
		if(r2 == 0) {
			return result;
		} else {
			return (result << r2) | (binary[tb] >> (8 - r2));
		}
	}
};

var getRect = function(binary, pos, rect) {
	var bits = binary[pos] >> 3;
	rect[0] = sb2int(getBits(binary, pos, 5, bits), bits); // xmin
	rect[1] = sb2int(getBits(binary, pos, 5 + bits, bits), bits); // xmax
	rect[2] = sb2int(getBits(binary, pos, 5 + bits * 2, bits), bits); // ymin
	rect[3] = sb2int(getBits(binary, pos, 5 + bits * 3, bits), bits); // ymax
	
	return Math.ceil((5 + bits * 4) / 8);
};

var getMatrix = function(binary, pos, matrix) {
	var hasScale = getBit(binary, pos, 0);
	var c = 1;
	var bits = 0;
	if(hasScale) {
		bits = getBits(binary, pos, c, 5);
		c += 5;
		matrix[0] = fb2double(getBits(binary, pos, c, bits), bits);
		matrix[3] = fb2double(getBits(binary, pos, c + bits, bits), bits);
		c += bits * 2;
	} else {
		matrix[0] = 1;
		matrix[3] = 1;
	}
	var hasRotate = getBit(binary, pos, c);
	c++;
	if(hasRotate) {
		bits = getBits(binary, pos, c, 5);
		c += 5;
		matrix[1] = fb2double(getBits(binary, pos, c, bits), bits);
		matrix[2] = fb2double(getBits(binary, pos, c + bits, bits), bits);
		c += bits * 2;
	} else {
		matrix[1] = 0;
		matrix[2] = 0;
	}
	
	bits = getBits(binary, pos, c, 5);
	c += 5;
	matrix[4] = sb2int(getBits(binary, pos, c, bits), bits) / 20;
	matrix[5] = sb2int(getBits(binary, pos, c + bits, bits), bits) / 20;
	c += bits * 2;
	return Math.ceil(c / 8);
};

var getCxform = function(binary, pos, colorTransform, colorRange) {
	var hasAddTerms = getBit(binary, pos, 0);
	var hasMultTerms = getBit(binary, pos, 1);
	var bits = getBits(binary, pos, 2, 4);;
	var c = 6;
	if(hasMultTerms) {
		if(colorRange) {
			// 256 which is the default value should not be changed for the performance
			var v;
			colorTransform[0] = (v = sb2int(getBits(binary, pos, c, bits), bits)) == 256? v: (v / colorRange | 0) * colorRange;
			c += bits;
			colorTransform[1] = (v = sb2int(getBits(binary, pos, c, bits), bits)) == 256? v: (v / colorRange | 0) * colorRange;
			c += bits;
			colorTransform[2] = (v = sb2int(getBits(binary, pos, c, bits), bits)) == 256? v: (v / colorRange | 0) * colorRange;
			c += bits;
		} else {
			colorTransform[0] = sb2int(getBits(binary, pos, c, bits), bits);
			c += bits;
			colorTransform[1] = sb2int(getBits(binary, pos, c, bits), bits);
			c += bits;
			colorTransform[2] = sb2int(getBits(binary, pos, c, bits), bits);
			c += bits;
		}
		colorTransform[3] = 256;
		c += bits;
	} else {
		colorTransform[0] = 256;
		colorTransform[1] = 256;
		colorTransform[2] = 256;
		colorTransform[3] = 256;
	}
	if(hasAddTerms) {
		colorTransform[4] = sb2int(getBits(binary, pos, c, bits), bits);
		c += bits;
		colorTransform[5] = sb2int(getBits(binary, pos, c, bits), bits);
		c += bits;
		colorTransform[6] = sb2int(getBits(binary, pos, c, bits), bits);
		c += bits;
		colorTransform[7] = 0;
		c += bits;
	} else {
		colorTransform[4] = 0;
		colorTransform[5] = 0;
		colorTransform[6] = 0;
		colorTransform[7] = 0;
	}
	return Math.ceil(c / 8);
};

var getCxformWithAlpha = function(binary, pos, colorTransform, colorRange) {
	var f = binary[pos];
	var hasAddTerms = f & 0x80;
	var hasMultTerms = f & 0x40;
	//var hasAddTerms = getBit(binary, pos, 0);
	//var hasMultTerms = getBit(binary, pos, 1);
	var bits = getBits(binary, pos, 2, 4);;
	var c = 6;
	if(hasMultTerms) {
		if(colorRange) {
			// 256 which is the default value should not be changed for the performance
			var v;
			colorTransform[0] = (v = sb2int(getBits(binary, pos, c, bits), bits)) == 256? v: (v / colorRange | 0) * colorRange;
			c += bits;
			colorTransform[1] = (v = sb2int(getBits(binary, pos, c, bits), bits)) == 256? v: (v / colorRange | 0) * colorRange;
			c += bits;
			colorTransform[2] = (v = sb2int(getBits(binary, pos, c, bits), bits)) == 256? v: (v / colorRange | 0) * colorRange;
			c += bits;
			colorTransform[3] = (v = sb2int(getBits(binary, pos, c, bits), bits)) == 256? v: (v / colorRange | 0) * colorRange;
			c += bits;
		} else {
			colorTransform[0] = sb2int(getBits(binary, pos, c, bits), bits);
			c += bits;
			colorTransform[1] = sb2int(getBits(binary, pos, c, bits), bits);
			c += bits;
			colorTransform[2] = sb2int(getBits(binary, pos, c, bits), bits);
			c += bits;
			colorTransform[3] = sb2int(getBits(binary, pos, c, bits), bits);
			c += bits;
		}
	} else {
		colorTransform[0] = 256;
		colorTransform[1] = 256;
		colorTransform[2] = 256;
		colorTransform[3] = 256;
	}
	if(hasAddTerms) {
		colorTransform[4] = sb2int(getBits(binary, pos, c, bits), bits);
		c += bits;
		colorTransform[5] = sb2int(getBits(binary, pos, c, bits), bits);
		c += bits;
		colorTransform[6] = sb2int(getBits(binary, pos, c, bits), bits);
		c += bits;
		colorTransform[7] = sb2int(getBits(binary, pos, c, bits), bits);
		c += bits;
	} else {
		colorTransform[4] = 0;
		colorTransform[5] = 0;
		colorTransform[6] = 0;
		colorTransform[7] = 0;
	}
	return Math.ceil(c / 8);
};

var getFloat = function(binary, pos) {
	var bits = getUI32(binary, pos);
	
	var s = (bits >> 31) & 0x1;
	var exp = (bits >> 23) & 0xFF;
	var fraction = bits & 0x7FFFFF;
	
	if(exp == 255) {
		if(fraction == 0) {
			return s == 0 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
		} else {
			return Number.NaN;
		}
	} else if(exp == 0 && fraction == 0) {
		return 0;
	}
	return ((s == 0)? 1: -1) * (fraction / Math.pow(2, 23) + 1) * Math.pow(2, exp - 127);
};
var getDouble = function(binary, pos) {
	var upperBits = getUI32(binary, pos);
	var lowerBits = getUI32(binary, pos + 4);
	
	var s = upperBits >>> 31 & 0x1;
	var exp = upperBits >>> 20 & 0x7FF;
	var upperFraction = upperBits & 0xFFFFF;
	var lowerFraction = lowerBits;
	return ((s == 0)? 1: -1) * (upperFraction / Math.pow(2, 20) + lowerFraction / Math.pow(2, 52) + 1) * Math.pow(2, exp - 1023);
};
var getGradient = function(binary, pos, version, gradient) {
	var p = pos;
	gradient.spreadMode = getBits(binary, pos, 0, 2);
	gradient.interpolationMode = getBits(binary, pos, 2, 2);
	var num = getBits(binary, pos, 4, 4);
	// gradient.num = num;
	p++;
	var records = [];
	for(var i = 0; i < num; i++) {
		var ratio = binary[p];
		p++;
		if(version == 3) {
			var color = getRGBA(binary, p);
			p += 4;
		} else {
			var color = getRGB(binary, p);
			p += 3;
		}
		records.push({ratio: ratio, color: color});
	}
	gradient.records = records;
	return p - pos;
};


/*//////////////////
  parser/utils_tag.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var setProperty = function(obj, name, func, delayEval) {
	if(!delayEval) {
		obj[name] = func();
		return;
	}
	
	obj.__defineGetter__(name, function(){
		delete this[name];
		return this[name] = func();
	});
};

var setProperties = function(obj, func, attributes, delayEval) {
	if(!delayEval) {
		var result = func();
		for(var key in result) {
			obj[key] = result[key];
		}
		return;
	}
	
	var len = attributes.length;
	for(var i = 0; i < len; i++) {
		// set "FIRST" property
		obj.__defineGetter__(attributes[i],
			function(ownKey) {
				return function() {
					var result = func();
					for(var key in result) {
						delete this[key];
						this[key] = result[key];
					}
					return result[ownKey];
				};
			}(attributes[i])
		);
	}
};


/*//////////////////
  parser/utils_sjis.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var toStringFromShiftJIS = function(data) {
	var a = data.map(function(element, index, array) {
		var str = element.toString(16).toUpperCase();
		if (str.length == 1) {
			return "%0" + str;
		}
		return "%" + str;
	});
	return UnescapeSJIS(a.join(""));
};

var UnescapeSJIS=function(str){
    return str.replace(new RegExp("%(8[1-9A-F]|[9E][0-9A-F]|F[0-9A-C])(%[4-689A-F][0-9A-F]|%7[0-9A-E]|[@-~])|%([0-7][0-9A-F]|A[1-9A-F]|[B-D][0-9A-F])", "ig"),function(s){
        var c=parseInt(s.substring(1,3),16),l=s.length;
        return (3==l?String.fromCharCode(c<160?c:c+65216):JCT11280.charAt((c<160?c-129:c-193)*188+(4==l?s.charCodeAt(3)-64:(c=parseInt(s.substring(4),16))<127?c-64:c-65)));
    });
};

var JCT11280=(function(){var t='0  0 !0 "H ,H .2H!*H!+H!H/ !0a0z  +$H$   *(H#.H<H#/0/-0/.0]0).0 #p--0V0 &0 \'0/," O" ! H H/#,H%:"FH%," [" F" !e !M !," !-H (H )0!$0OH#+H#-H%+H%-0 (0 )0 *0 +0 ,0 -0 .0 /0! 0!!H +H -  +!  -c /\'H!-"[ H!,H!:"="[ny:"#$[$"[$   + " #~ ##y #H6H|H;H9HVH #H &H *H"   *\'[ &[VF,+F,/F,:%,\'F`F*!F* F+#F+"F+-F+," #+0!"yMyKy\\yh0!#732~ e" +~D~(n"e~o~"*~")7~"n~(H:y-"y-$~  ~ #732~" ~^"#!~" ~" n[!"F~[*"[+"y*~#-"y-~Y~"+~",432y"+" 0"=/"=-"=*" " " y  k4F./7432H! H!!H!"H!#H!$HOHUH!\'H!(H!)432HyH~H"#H"$HFH[H"\'H"(H")H"*H"+H",H"-H".H"H/0H#!H#"H##H#$HYHZH#\'H#(H#)H#*43H$!H$"H$#H$$HWHSH$\'H$(H$)H$*H$+H$,H$-HpH$Hb H%!H%"H%#H%$H%%H%&H%\'H%(H%)H%*40$!0$"0$#0$$0W0S0$\'0$(0$)0$*0$+0$,0$-0p0P0% 0%!0%"0%#0%$0%%0%&0%\'0%(0%)0%*0%+0%,0%-0%.0%/0& 0&!0&"0&#0&$0J0=0&\'0&(0&)0&*0&+0&,0&-0&.0&/0c0w0n0q0\'$0>0@0R0\'(0\')0d0r0l0_0\'.0\'/0f0v0e0o0u0?0D0(\'0L0()0G0x0m0}0(.0(/0K0\\0M0h7320*!0*"0*#0*$0^0i0*\'0*(0*)0**0*+0*,0*-0*.0*/0+ 0+!0+"0+#0+$0Q0k0+\'0+(0+)0+*0++0+,0+-0+.0+/0, 0,!0,"0,#0,$0T0`0,\'0,(0,)0,*0,+0,,0,-0,.0,/0- 0-!0-"0-#0-$0g0j0-\'0-(0-)0-*0-+0-,0--0-.0-/0;090:0<0806050B0.(0.)0.*0.+0.,0.-0..0./0/ 0/!0/"0/#0/$0b0X7 #\\ #M #)0#)$ #C #A #E #N #)K#s #a #z #] #);#)/ #*  #*! #*0#*$ #^ #i #*c#*f#*)7 #+! #+" #+0#+$ #Q #k #+c#+f#+K#+* #++ #+, #+- #+;#+/ #,  #,! #,0#,$ #T #` #,c#,f#,){43|! |!!|!"|!0$!$|O| !|U|!c$!f$!K$!*|!+|!,|!-|!;$!/|" |y|~|"0$"$|F|[|"c$"f$"K$"*|"+|",|"-|";$"/7432|0|#!|#"|#0$#$|Y W!|Z|#c$#f$#K$#*|#+|#,|#-|#;$#/|$ |$!|$"|$0$$$|W|S|$c$$f$$K$$*|$+|$,|$-|$;$P742F  F "F ,F! F!(F!$F!,F",F"$F#$F#,F !F #F /F!#F!+F!\'F"#F##F"+F#+F$+F" F"/F"(F#\'F#/F!-F0FFF#(F$"{{{{{{{{{{{{{I43"S "S!"S~S#"S$"$J"$="SnSeSMS*"S+"S,"S-"S:S/"$c"$w"$n"$q"U "U!"U~U#"U$yJy="UnUeU)2##$h#!$##~##$-##!o#"q0###Z#Y!#Yq0-##[##"###"+##$*###+##z##]##)<#(<#(/##,$##*!7##r0!-0!/yU##,-yy#"*$#"^#"i#"*q"*o"#!#"#"#"#h#\'<#_##l"F~[!~"+~":y!"y*~^~" "y/~+/~Y~"M~*{{{{{I743p)T%!J* #A#b$, &!!k#"?)XK~u>o!,\'^ & *i#9&:%J.-u=eiab&()Yn@%*U"\'O+)Q] DrN/$_&"_+.a(5"Ul)/L+>+(C.Q&0)=)@u(C,\'E(j\'Pp6P *P$-P]%|C&/Fh>]W* O, A -X! X!c=!ZK%c+*>P>c\')1_*-_./f,#u .(D#x "K%%K\'^##+pCp^%_/f+"K,!\'(./$;V(/U.*"K#(d#"o"L"xz"b!$O#\'V$+g$9%&;%)1%/ON/[-.+f8?"-)="AcA* E1%$ Q#/Y+(R ,/\'1-(/,"A.?Z/]%,d+*$9!\'(hv/`:J&!?% S+!-?!*z#Q)6%#*A-=\'$-,C(b&$"p\\K$+A/"oP)KT#9%%+J+0%/w=" =/ZfS,#D,/Z-"EW+@,(dpN#$e/!(?+G& M.j-+">*+@,*))T& ix !}GC+[N6#*g!D%wF(0%)$W++W./= "D#*A#/S,+X/!$c(B!!$\'OE!gq#/\';!e@e-!?EK& )F+]!QDA%+`T*>F%!/CM6A%%/(V/-`"+,J/i*"i+"@++$qx\'/,!(C&]",] .).,W,*U,Ao\'Q! W,$k!kv,=(@\'[!$6)$H^#\'D &A:E*PE/#$;Q#Up.8b%P#-P*!P\'Y"*V#.b& CKb*,O++J+9\']!=(@\')`r=+$`,+#c&+q,"\'N-\'aB*#,r(\'e+!e-+(0$oRo./o-#(\'=G+F&"N,*L/5KpE!.DGP,W,.Dy!\'F)>#+v6e+-D/.m, AT)\\#)]%p,+P!*()<%&-6u^m^.1%/.k "i )S &[!- &y["- J#)a$!==&x &-Rcc>$,@D_>e^(\'/)CxA(.m]%!/O"+6\\J$+Y++Y-!=UDN[-*/\'L-u,+(?\'Gnh*\'s+Dj,)s(D-CdZ\'HD,.M 6"(Y&(>$ W.-Z"9&$+Ao`oD+++qn\'x*d&+()s(]"(j+(/ #K.-C*#A)$)@C+=%,+ZE-N$-N$5#ar" &*"k*\'X(kz jbb"\'F%]& c&".`-#k;@.-!(W+(\\ (/$$$9$z#C#/=\\k*#*E(Se^O,d,#u+"\\-,h(TJ+]"De"(0%u#!l^%" L"T\'$5$B8/(Y!*V+-F" ^"-?".>-1%%)^e^)5%+(T+)?+-QBFBA *Z!!XUZ!+5#-+J&[_U?Z(/i+#5QZT@/"[/)@/W\'$+ >!(@<R +dHr*!ly_.E/Z\'H f]e=o).(a#G,,m*+Ku)W!ChC\\C*")=%E-#)MLyu<?$"Q,+?-,,q*)@$,R#T,*E/.+} +A,!N!!)?$)?(P !P 6#\'O%)T=?\'/^)$>+ C+,W,K%;TB6/,`#.5q*J-@%:&wXmkmS^b.0&+T&,!@,_>\'/\')$?k#d  _ V1-(N/G!L,+$}R(.,,(/!-N:s .a#,p(V _%! V))Y+)`~X"f&p`+#*n* >\\\')$RtN\'1G+,xc&#*,o,*E*V$ C$ Y%*k?S^(Gc\'e@\'>).,g#\'W+*"v!*D% K &$9u8%p,\'P!O#,^$#?+*6/!Z FJ%Uqj,$[,\'[,<c\'(\'$ #d@d*B+ (_!*l/B-=JB\'FQ#+Q,W%-.D"-[";&#!A: D%*G#!}--M/D/ !\')i)Q*p*(p*+p*,PaP*V -O!$R*/J!\'O!/JYW#"O#\'b#.Q%*TLY,9%/#>/$i "XV & &j#!/J%A*$k,,!n,"n.-R./f/L!Ve (?pK/\'h9EH)C\')^*p/V!-g,"-=(UAg,$ =/[)>q(A? l(O T%"8%\'$>-/.h"=%*S+"Z+#-\'$#$\'N!\'a-r$+_,*e+N#,,L\'/(C/x#N/-!\\-O$!/Mf$6g #J#6%##*n-R#AR.N"5(.*/))`)z()]F!\'@!!*D%6%+ d\'^ @%+-#K$\'A?$<[*-+\\.>TO,$D#Nd)X,hE\'$(X!d**wGALl([vRB &?!)ZT"/F$!+?*+G!#\'t$(.,-K9%#=LL\')$!P,F +6yO!$W%%Yn-q.^\'(QCOXF/(S >&!\'=U@!*A#+[$#*J&,=&Xu[9#>=d#-l1_$,_)E8+\'X+(0.o$*D,-G (G&#x=(./-N!*](/e+L/,.a.?"(@yX$(Z/, A)AuO )U+" &,d&b$d\'$_% L$ G"Zc(p/J #C "J J%!\'T"#?[Y%*>cb(V%*,T./i!+[!/D"/Z#\'[\\`*"E"_n*,q"Bv$\'D/_\'Ec,f*NN+x!N,:(.-"K&#h>Ad)?%s!#)B?!$Y#)b#+YBQ/"=9k.Kquq/B-$#e#\'G  GtA%|86  Q#8%$\'T&/^]OkW-/O.*Q/"@"#D%W&dX6&n- l,*L+$f*!f9o/ DpG(\'}.(M#\'A,\')D\')/!#p)$pMP g#$?$$C$#6*"b/(TtU )XG@*(BW*\'L!G).G*$xR\\K$6.a,)p*$PlP*b !C !J!$CUT")b"+C"/6#)^#<%$!O$ 6%(C>OdFEgQWQg+(b-6%-.>-/>B?.(Y.)^.+>/!DV[!$`")@"-D#*@%#+= "=$#=/S@jeU()@zkTX-"ijA:X.]>#"@(RD,d#/l;_V_!(_%B-+!fOf #f*/f+!(O$v(/e"*(Y"L$,(D!x!+m*"m/,K,*\\>Mw\'o/M/,C*$A$-NV))))s-(]#QFQ"*Q#/>$ ?(g&"/@/;(`*(b/).+C!$Q"#Q$$^&/-d$ \\R]& ).-"q$S/ N!c>!OHj -*s*(n-+(1`k$N #p,^&/V@Wx6^i &D!,\'= /= =oAxU-/\'>g_#*([.a$"paP%V#,C% Jjb-5%-.5\'1&,)E$q\'f"G% hAL-b>V.*@#"Q Q% *T!(jcV$,C?6aQ++VXA"$j#*Uoj+\'Z;(c_\\,R"f\'(O\'([\'A-J(B-0o-,L,!(/ )A)Q[WnD> \'X*m*O!+W\'$"A"^oi)Gf+W$+F- 6\'/,\'(C]tP%T"$^$(k$#5&"DwS\'bdu\'Q&_~h"X?,a*-r#C#!C!G%"#>+-X"/=$*5$5&nj++*?*)A-!@Ka-=#$,)0&a*+@+/=%"$;C )?#,F,\'U .D$MJ&Z?/w5q,*>"#rE\'.eDCxom-+\\\'()\\ J*,=*k+xpgp-$P#*P\'b"#^#/?#/F%<%&-Q(.QzQzC)H%QV,$g;F:Q/-@ !j0@%"bQ,J*/J+-J.D\']&k[+\'k, /qW\')$Ez!l/(_!E-"+f*"v "v/#()AG%.G&)G=GmG..m,\'m-,A,,N/`k/pxP#,P(gOVQ>+/i!$D0!=$[+"U.,k,++n#B$+->-$\'m!\'h*f ,f##v.*u)$(/)5T )Bb/ /(Q(]"+dt(./?+}A.+$;Y#/O\'/>hO*,C+*S (ABX/ &>+.m.^+)/?  r;% \'[\'/$e]%`!?$*\'9.e 6!)C, SZL-=Jz\'UBhB-!\'fVx!-(.,*K&.D,\'K*^ !b"/^,#i>#clnY\\$,\\,(h"+e6%+,F/#U /)$<Q#-J+(D"$kqU+Gn.E#;d".(U+}*#)O"))A%!!F#->S^+H&#(D*#E-*,E V&-^#,6S?+)>,#O--8/.5! U"/5-#"\'z \'z+_$"\'8-\'/-"v.-e!/uKLS(E"xK(B$(/"/K#!\\$+)U,A`\\zp, PP%!W%#$O/)Z" 5_S,$U;+\'Z#\':&\\,-M(Y#-W\\C++X--!\'C-\':B,)Q(\'B!)b!t(?#(H P,^,1=FR*,d<e!,))H%!,Jt*J.`AX+(A-/Z.)=X$@/B-!W-9K>\\(\'N J!5%yj"$ =\\=-A9^.k_-"\'/n=/(?*/?/\'G/?"*C#-CEY.(b/K&V%M8)=W +>!!b"-g#"V#$>#.Tp?%$J%#O&!>A?a6*#T+Q%, J, b,!O,!^.(W.G%.;%/c&"\'X"(S"-k#(`#R= \'= ,="-=\'=R5G[*!X*Y&,+`-(D;A6(w#,w[\'U\'>,Rc!\'?-\'K!\'A%\')/ d;r!!l*R-#N Aojux?$N?-L/#G!/G#,G%$Gq(`!m-.\\*$M=h\'.)$!(AzEN$;*$;u986>!)>"\'Vl6oWmT+"F<D T&P5@U>=-$$nk>qd&#u+L+n\\+(h"V&#O\'/$N/5".jKj+Aw.-\'6$fRen()5N-/(>%(1O,#+P#(P9$1%%% >*"V+-g+.C/,Z!$5#"/J+ =$k(.5)a&-\'D-/!>##>+Ew/\'CB)5_##v<e*/?**(s*G#*(.*+(/aK#"\\--E \'p+*p,O" Y(>%(.T, +>!^,#-vpG *(/T)=#)@-rFG,/N ()UF&/Y#*(K!>$#C\'(F:%&#*D,#$cG\'@!lx\'/;LcK$")O$h! h!(A(/\'W.s,W- >jA%c&d"}*(A-kZ5\'$A\\N#TN!\'A, L/5/(S$\'^+/u9&c",>%-="b!,W"#J":%]Y/(U "@y J#/J\'$=!/=\'S(/[v=kZ;%nn>!/@-+l+.(VJ(/ L/-(E/G* GhG,+K!-\\M)>")>A%(E* .v &A+Q:j -`y*J^=!S\'KR/#d$-l$-\'<.v *m*,(j$}9(6/\'GC" @"-A#^&$$["NG"-dor, G*,A.*_@e ,(\'$)p-C!$?#$YZV+*Y, F,!J--j~="$@$+ &vZoS,,A-W&-!@_Zb,w$B!_J,+d\'/r*-_-*\'8*\'tL!de!+e#)?iG&.m,.}bK\'(KRM*-M\\Coa*6"$g%(S/#(w#JU(\')?\'6%v+#l,6&$T?O,*D#**=/5&/jC*n-)>(/>(BKBC&\']/lE_" _$$D \'G#$A#+K&!)/"V .>">%#,T#:%  C%*^(.6)Pn#g+(Q`W#!j <& /ZY`#(Z##X#+k$,-J.)=/C-<&zj)/j/Ow6p()>.)@/(dhl-/_,/_zf&!o$NYLS,u+,?1LT}cK !K&-hEE!,s!F ,b()@!(.v-#?Y} (K" P,Y \'W"$>#\'Z &X#$A>X:,}+#K!/P->T.m,*J,/_)^Y"LA%!\'=#,YQ?kQ, i$ j>!K%,p-J\\^Mi,cG%O%#6(O%)^& / &FZl!eY&C%A$ )z$s"(P%YfJ+/.f!V,+O:b/?& " &!$k"#$=H&,/ &.-.f,.v\'/e-$Lxm+(K  K".AG).-+a-+p<%#/VMR+",\\}N$,]/A.--c">YY%$W+?&FD")5"-Z,*[/./\'$~G!\')$#D/,!G/.o#?!BD/?#.^#.)PSK%$(1VA*v#O-/-d.*(1X}*m#R"/(z$D*#-G+|<CY?& J\'=&"T&#*"J5&+$5-9&6+c*-R.-d./r**_++f#-f`D,+GC)YQ&<%m>/#5%*-=)=*f&+Q>#\'G,> "$R6%\'0%/!k J=d&` >/$d!*\'X.v/$(w(KW)a#r,)>%,d/EQ!u,$K! \').E*Mo#J*9R$|:-p/F+)C/;&"+-=#`\'/U,.L=+LRG#+\\pM/#)] &*!R [q"*eB(W\'m*/$;O!$J!,Q%(Q+b%9J<Y.(O/!W/Y%XQ1S!/[#!!=*[wjXBF">#*R#*f\'$v#N!\'L\'@G+/G-,}?}/#MsCRN "z6%"T&Y\'@/S\'O&,Lq,-m,#h*.A\'Z-F%()`K5z,(H-hs>-+K!^?if[#+S)1P$Z/"`_L1+?[_+$)YShX/\'V@^(/>+",_",n"^$ *\\<]+$p*-P$6VT >%"$#m)6$$?eW+)^9g.C%.*g./>/!X (`"Q&##i#- &GX,$ \'LRNB* +_;e$\'G "G5(8$K!#K+(\\"-\\-()/ 5,6&WD$:J>&./$@ur!+K&)h-U.+^PF1A$*$(/$-(/.-M$W!\'?DQMCT%%.)@-1\'.(/>!,m+,(.:)?+c+)P!j++X1!>0A1%!$6$!V(Y%?>sT`V/MJ)@>`:!@ro-/m.-K!$K/-h$-\'(F\'o^"*^.*JwbES !F !FO^!*T!,g" V%!V?W??C>+C%,/J-(k +`"C&$"jRUuZx`}/@-@--D5X-ac&/w,?b#>-(\'ER+$EQ$\'Q"lj_\'O"0(S#?&)?8G .x|mS(;/K #K /)$!)A@N"-s0C-? ,g"g%$ TfF, 5!*@$)5-!Br#d6f/$u|K%#M?%,;] >##b/)>1Z-zn\'E@#\'a/r8&+-"n.,G*jfZiO!/(d(UhW,$*zXe.Q+T\\$E !6&\'?`X ,@%=&,m(T*K$!N!YW!=,\'M g)$(K*Y!?$8g!.*?)N+ BVD#dh$kA")a$\';$>\'>Y@A (.-/A<&T-p(T,#T/! (/.C0"m-!f()D\'C.HJ6$BY!J%NF,#/E.8.1%)G%/,-G(j/9\'a \'AF+Buwq"+w+OBWH%&#\'k$sw,#lN$8Y./,$8Q_T&*[ *A/,#_ -f/-v##v+/(1"()ED*W-/S"G&$*-(N@R@,:&-#B$Z\'oW*S\'/>e*-)s,$HY.,Z"-j#MJ%@@/@,#n$,f,,f+*(/")\\$g  g\'/C*M&(?&E#\'U$n/-m+>(/"m;)=*K!NR/\')8RBu")P"b"J%Yi",jlX,,*@_r)$lCeZ?u(/.+=-j/" n &\'9+o*+)z!).*J!/-r+!\'(nr+L (R+$D*.?5!fm>%!>&VU+M&[.m@d\\Es.*P! \'/c&"zrPC^z.C&\'^?)D8A+,P#W~W#$^#,g#-Q;=$",J)URX,#5,$B"$(n*/q.->%$\'8!e",?.N,*E+,$\\`\'U)N!"N.X##-=&)>&*@8\'} ?$#D.6#"^YO$"JNY.(>/\'` +["$A"\'A"*+JK&+-S,,,>+"@*B(\\\'](_,+\'/Rf^(G+G+N,++K\'/)>.N-k* +l#? )C,#6t5\'(@+-(\'$YR E/(.)/#kl*d!>##)>xs.g/=v]o/!f)?/#T/T>&"rSK#`D>).Q*a_! @\'.x",$H%%Xi*!A,#@/ "\'$:\'ALD(G%%m\'C.-X#,/>T\']"e-\'h"(M/"uzD.-z"g$,OX,J(`g,cOm*\'m-#N#+JP\'P&$;-p-?\';%MQ*=%+,T!*?;Y.)` !="\'=%\'@%*\'=&5jB"Zr[(O vse)NQ,m* m5}\'$A!,A$$P*5$*k+=e!.(S!?&*K.?, UC#)GL$d?%\'P b[btC8%&c-\'N/v\'NK\'(N=-b%/!@F%&,+(p,/\'[)a)F" J$#Q&\'WxZ!*S[B!!^AB,(E,-B-!+A/ J(\'(V89)P>%!>%uV5YBY/ il$$:&?#-C()A%+lqN O 1%m!@%&\'G>"FR^?!!rD% P%KE"$R+,R-.L1*(/-$K$-$1b",C*"C/ !E*-P--e!\'M.^cZY%&k)>"+L-,(/!$d$F"-b()ZO%&" *=*5+,-l#/o.C "#$H?0%%$$JoO)$C+]%,/V,.b-"C.)="+UZ@%#5%+Ack,g&,9c/Eo"\':+f-.e+#u ,(p,(c"(\\"G"*m$*KiM-"N/-z/#]&,$8/p*O (gFJ\'$^s?<g/-?/-A"#/=+Swk_ &}F!M_yf**v*L+  mmm+/M\'.A#F$" N"T#!> g%YTGD$+[q$\'[R\'=dS\\5%",Z,*U+D%fV8TCSn,\'/1%!9@,=SE(.()Q$).+QlQa)="@\')i+,6pA]C6%v)`\'Ca*i\'/.)T[?-piP<%#,D"+Ank,*+(/,$P*-\'5-).+/$;@U[.f&/"+?!Y$\'Zn*aW%-/#rC%,*T+`(w`8*u-!d!$v ?))E,(j,!!R"V"-CM"wy\'F/R-+E"\']&UKQ*\'b*!?!^%$ g$_= .@-/(H\'MNz/W).*\'Fj.T%!$jmE-+/_.,)@").+i$\'D*y(0FNWQX+-+q!+@/"_+"f!\'u)C!#[n().-)@.5@F"H)K%%,"S"#+l\'.m+V%P& k_ +C(V0!$6b!+J\\,n#*fZ\\,6/FR:%#(W/\'E-|?*,G##(.})>=\'/#?*.)WZ! A! D,+)@%"G.-(/#?%"/P%O!"^",>#,Q+^%Bj * &!([#-=cA_i5@-mqZq#\'>#!\'C LgGNK$*K\\KbA,$(\'(g)OpLP%)$;.G(N/#/N!V *gBT)A%++C.+D#-i#/i$,!=-`)$i]D- k.kw)$>"(d*/\'/Gf  u$N$,NN!xy(;*KJA_)Ki!\'5")U+#[,(Z-\'$\'/,,\'H`-, \'/?(r*L/D@%o+!N#,A/@-!+_&!u#-)U*$BO#>%g &+ S/.+?,-D"-(s>~C$ b,J&\'$5G(\'$ &\'$o>:L,/L9\\,,A:A\'?/xq(R*,+u$5#* >J%"(A-$U.z\'$ )>%ED+lMADd-,)/}$1=U5%TD%,pDp*6 -*$:O!,T+.5%)ALU-+,q!/@$"R*-d!,lB([/G-"Kl\\,/A>N!?"a_-O "Q#)D\')@-,+w- \'$##v.L/"*A*#)T\').)/\'SVuU-)E-"/)?8.8PZP(Q!+>"+O-+i !,q+"\'h,e-#M#$A+\'AXE *).E)X"=*=+\'Wy>"*#c,LmF.,A|k!K&/"#w$E,#B-/$f&/(p.K"#h"T$$"a&X*-#c(N,,"}./E#F"+W*$O.,^/ Sw@E`))Sji/ /\'["n/,r.-f !f\'.(\'$+K,6U-).h\'N$fxh#"G-J "g$mG\'Uk*m,$v @ -Ud ]/"p))pNz! G&+?,!?&DK &BB(E(O%{732%/ ,$9|9%$:*$<!$<&$<,$</$8"$6&$6(pep?(`+pGe!F/ -p(8.)8.)/p* p*"p+ p+#pkp,8.,-p,$p`p,"p-\'p-8..-p-/p/\'P )P%*P0P%+P%-P%\'P$\'P@PLP(/PNPrP&)PcP\\P&/PDPA%!!(P-$P-/P,8/-(P-+P-!P-*P- P8P6% !^ "? !W "^ F% VP!,$HJ "O "C ",$H8/.b !O  J|Y|@cYV%%VV|?V^VJ &T \'? (V )^ ?% +W +F ,C ,^ +Y ,F -J -6 6% .g <% .6 /C b%! C! O! F!!J!O%!!W!!^!"O!#^!#>!#T!#Q!#b!$VOF!$TOWU"d/?UCU^U6!(V!(F&-?!(T!(C!(b!)O!)Y!C%!A%!*W!*J!*F!*C!*^!*Q!+Y!+O!+F!+V!Q%!+g!T%!,C!-Q!;D%%%!.C!.g!/V!b%!/6" W" QyW" 6~>~^~6"#Y"#C"P%"$W"$Q"$TF6FW[^"\'W[C"\'Y"\'b"_%"(g")W")F"\'O"(?"\\(tLt>"*T"*g"+T"Q%",O",g"->"-6"<%"5N.g";%"/Y"b%"/?"/C0J0(>#?0g#!V0b#O%#!^#"Y#"b##O##Y##?#$V#$J#W$9>#$C#$g!-JY6ZCZ6\\?#\'Q#\'>#(F#A%#*V#*J#^%#*6#+V#+J#,#l!"A-C#-/=/,w.6#.6#.?#.g#/^$ O$#g$$V$"T$"g$#T$"6$#J$"C$!g$$6$(b$>%$(6Wb$\'O$\'>$\'V$)F$\'Q$(V$@%$(W$K%$D%$,>$*F$+?$^%$*T$,W$,?$*?$*Q$,F$*W$+6$+T$-?$6%$5%% b%!WPgp6pgP^$:%%#C%$V%&Y%$T%"6%%T%W%%%J%%>%#?%#Y%%g%)C%(V$*b%G%%)b%\'Q%\'6%)?%)6%*6%\'T%(Y%*C%(>%*?%-^%T%%-b%,W%-T%8%%-W&!W%/>&!J%/6%/g&!Q%/C&$6J w-b&#W&#J&#F&#?=Q=W&"b=T=^&D%&(V&G%&*V&)W&(b&^%&*6&+J&+W&,F&+T&,O&,Y&,V&,?&,6&-O&-Y&->&.6&/CcV&H%cWcCc?cQcgwYw?wJ%,>wTnJq>q?\'$6qQ\'$V\'P%@ClV\'(?@ORb\'(C\')YdVrYdWd^rVlYlJ_W_F_Yf^_J\'<%fQvCvg(\'FeODFuQ(c&+,V?Fog(\'C(?%xC()bGQx^}6xQx?G6(T%}Y}O}>}C}?(6%}T(8%}b(.b(/^(/C(1%(/T(/gKFK^\\V\\kGJ)F%MTMghFh?hB*-FC%%CV)$6C^C?AFAVA>ATACE?NO)]P%8tQsYaFzJ).?]TNg]C]^*F%*!b*!O*!T* C*!^*$ViT*$C*Y%*#JiFi^*)^*+T*+6*,Q*,F*+g*<%*->*5%*.C*-J*/^*1%+ T+ Q+!J+#F*-V+"^+#J+#6+$Y+W%+$VQOQ%%Q^QQ+J%kC+\'V+\'Y+>%+\'D%(?+\'^+(V+(Y+*J++?+,Y+,>+,C+-W+-V+8%+5%+:%+-6+6%+.Q+/V+/J+/Y,V%, >, ?, g,!Y,"V,"F,"?,#?,#C,$O,$J,$6TYTV,P%+\'O`T`85F,@%,\'C,(T,)O,)W))Q,*Q,+Q,+J,+T,+>,T%,+6,,>,-C,.C,/g,/^,.g-(T,.^- Q-O%-!>gT-!b-!Q-!O-!W-"F-!^-!C-!?-$TgF-$6-$QjT-\'Y-@%-(>-(W-(F-*F-]%-*T-*6-+g-K%-+>-+T-,C-,g--Y--F--J--Q-.Q-/F-b%;Q9^9C9O9Q<J<>8W8Y8V866>6W6b5F5W8>.>%.@%B*).+TBb.*V.,O.,F.,?.-V.,b.-J.<%.-g.-^.-Q.:%.9%..?..C..T./O./Y./V./W./?./6/ Y/ CbgbT/ Q/!O/!J/"C/"g/#?/$O/$?/$T/$6/"bbObJb>bCXOXg/\'Y/\'>/(Y/(F/\'b/G%/(?/)O/(>/)6/)C/)?tVt?tg1T/-J/1%/8%H?HO/-j +YHX "U & & !A ! & "A  5 #U !k O& "k "=  X #iVi|U &i \'@VX|i|=|j &Z|Z &S|[ &` &kVA (U (j .@ (Z )i (S a& )= )@ M& *@ (k 9& +D ;& -Z +WH & +j ,= Q& -D!$j!O&! = /= /@!  & /S /i! Z!"U 1& /U! j! 5!$@!#5!"D!"@!$i!#X!#`!"`!#S!#j!$[!$S!\'Z!\'@ODOAOiUk!\'SUX!J&!\'UOXOjOZ!>&!)A!)=!(@!*`!)S!)i!G&!)U!*k!*5!,`!,i!,A!/@!,D!,Z!,=!+i!,+\'/\'A!,j!5&!<&!/=!/i!/S!H&!/j!/`!/5"  &" D" A" j" `ySyky5~U~i~5"0&"#["#Z"$U"$5F5[ZFk[ &[D"\'`"(["(A"\'5"M&")Z")="-S"(Z")S"-@"-U"+k",X"H&",=$-S",D"-`",`",i",[",@"a&",A0`".5"/U#"@0[0D".X"b&Y &##5#$j$!`#P&#)=#(5#f&#*k#\'=#*Z#(X#(A#)X#Q&ZkZA#+5#.A#, &#,=#<&#,A#-[#/=#,S$!=$#S$ =$!Z$"=$#=%!j$!@$"D$ XS@SX$\'=$$5%"i$C&$)Z$^&$*A$(D$+`$-i$-[$T&$,@$+k$-D$,[PU$Be A$;&$9&"*`$<&p/J"`P=PSP[P*J  &P-J!D%!,JVJ"$J"#J"+J#$JYJ#@%#=%#(>$+J$D%%=%%%J$-J%D%%5%%-JnJ\'D%eJoxGJaJ)/J*+J+@%,#J,=%,!J,$J,,J-"J-+J-A%;J9J/UR"= *= #J1&R#=Y=#=&#$=!,=P=$$=$)=$!=%5J-=&$=&\'=&(=%/=&"=c=o=L=(5&()=u=N=]=,!=+)=,)=+5&+,=,$=+(=-=&-*=;=#/=5=.)=/ =b=/@cXw=w5n=n\'E#Dn5qXq=\'$UqDq@\'$=>5@ &>A@Z@S\'(AR &dAR`@i\'(`\'(kd=dU\'?&r@\'.XrS\'.`rZ\'.ArD\'8&_5_j\':&\'.5rAl5l=\'.@*)`v5u=eAu &ujo[u5xZek?ADZ(\'@(\'X()XLXGj()S(]&(a&LZ**5xA(\'S(Q&G &xiKXLj(\'5KUmiKD}DM[M=(9&K`mj}S(.@(g&h=\\[KS}@(<&)F&(/A(;&(.XMDMi\\iMZMUm=EAE@C`EDAkCSE5A5hAEShjCA)0&AUC5CjNUAia[s5] &aXzU]Za5z6+.Dzi]jakzZs@*"5))Us &))`)C&aS]5).D* [*!k)H&+ i)/A)/[).@*V&aU*!5).j*!S).k* i*![*,U*"Z*!Z*$S* `*\'[*#=*\'D*$@i[^A*=&*$D*#D*"[*K&*(j** &*(S**[**Z*ED!@*+k*,Z*,[*+D*+Z**`*-5*-U*-X**i*-i*.i*1&+VD!=*/i+![+Ua#U+!X+#D+#\'@-`+#)N.5+$@+$Z+$AQ &QAQSQkQXkU+\'D+\'A+\'X+f&+(S+(Z+(j+)D+C&+)5+*S+*i+*k+*X++[++U++Z++@++`+,=+,k+-Z+-X+.`+.k+/Z+./).+5, D,!Z,!S,!k,"S,"ZT5T%&`[`i,([,(j,)i,(U,a&,\'5`D,\'Z,M&,K&,,S,/U,-Z,+j,-@,T&,-j,*5,+U,+5,+i,-k,.X,-A,.i-!/L$j-#=-"k-#j-#D-!A-Y&-#Z-![- `jZ-)ZjSgi-\'AgA-(5-C&/8&-?&-/A9%&;i-Q&-,@-5&-+D-,=-.`--5-,`-.D--[-T&-/i--A-8&-g&-.i-.5:j55:59AB[6X<5:Z5k:kB=8j9X8Z<i85:S.H&9j<D.([.*i.)D.,A.+@.-Z.+j.*X.,S.+[.-S.g&.(X.^&.,[.)X/$U/!!c$`..`./D./5/#X./[/#U..X/#[.,`/#5/!Z./@/(=/d&/\'D/(U/f&XXbkHZXj/([/\'`bD/(5/)U/,[/=&1ZtZtUtS1A/,=ti/-X/g&/.`/-S/-DHU/.5/-+c E  kH*c!!c !c XHB !+c!i/\'$c!-c!(c!/c0c#B #"\'V!c&#c)E Mc*/c/!c*,c+(c+#c*B -/c,+c--c-E! E /-w!,w!E!J\'O%wLw=\'U"w$,\'O&\'U,w(/w1wuwCw*(w*,w-R!+E!+B!-"w,E!-$w,B!;w.,wBwbw/,w/E!Hn -n! n!+n"(n"-n",n0n#"n#+n#,n#/n$ nSn$+\'F(n\'$n\'B"envn(R"MnAn*"n*R"+E"+"n,#n`n,$n,B"-"n:n;n9n/E"/>  /q!R0*q!,qUq!-q#$q"/q"E#Fq#B#$B#P).-(\'YRZ*\'Z(qcq\'(q>qrqdq,(q+#q,B#++q, q6q.B#-B$*"\'$V\'S/\'$Fq/(\'$#"\'$#*\'W%\'$#/\'W/\'WE$$!\'W,\'SE$c\'S#\'S*\'$@\'$\'B$x\'$)B$*R$,*\'$,/\'$-$q/!\'$;\'$<\'$B\'pEpBP"\'P \'P!\'P(\'P\'>|> #>V> ,> .> ->O>!#>!.>[>",>#,>$$>$->$*>$)>%+>S>%*>&)>&$>&\'>&+>&->\'(>@>D>(\'>\'$>G>()>e>)$>s>]>^>*#>,">+#>,#>Q>+->+(>+,>+!>,->,*>-">-)><>-.>/.>H>/,@ !>/ >t>/">/#@ +@ -@ )@!/@"\'@" @y@~@"$@#$@0@#+@$\'@$(@S@%,@%(\'=!\'="\'=(\'=E=*\'=R=,@c@n@@@\'(@l@f@o@L@x@(.@A@h@))@s@+ @+$@+(@+)@+*@,"@,-@j@-"@-.@9@6@B@.*D"/@1R (R Rc$R"En$R!B\'FR[R!+R#Rq(R$R>*\'@(\'@+\'>+\'@%R\'/R\'BRE\'(B\'xR\\R* R)Br RkR+Er/R+,R+-R++R,Rl-R-R_*R-,R<R.B\'/,\'f,\'v"\'M&\'e \'M*\'(W\'LB(\'$\'(D\'(l\'(s\'L,\'G#\'(Q\'G*\'G/\'}!\'(`\'m+\'}$\'xBx,\'(T\'m*\'(.,\'(B\'}*\'(/-\'(/$\'KR\\"\'\\!\'\\EM,\'M+\')$ \'A \'CRC/\'C*\'C%\'C#\'E*\'E/\')G\')]\'s\')/$+\'s*\'sBa#\'aEa*\'zE]%\')B\').,\')9\')<d (d -d!(d!E*" d!/\'N d#!d#+d#B*#R*$#\'^R*$Ei!d&"d&))/]dcd\'E*_dLdEdCdNdAd*E*,(d+ dkdTd,$d+/Kod,R*,*d,-d,/dgd-#d-E*-*d--d9d:d5d.-d/ r "r /r *r &r##r!(r!E+!B+Yr"(rZ\'Q rdr|r$-r +r$,rWr>rJr\'$\'kR+crw\'k,\'kB+]rNr)/r}rzrsrxrMr(/\'Q-r)E+,+r,!r,,r,/r+$r`r--r.E,!!l!$r5r6\'` l  l R,!#r/#r/R,!R, -rXl"#l"R,"*l!/l#R,"+l#-l$,l$#\'T$lPl$ \'T \'T(\'T/\'`$\'T&lJ\'`,l>lolKl*$l*-l*"l*+l*!l*(l+#l+"l+!l*B,+E,+-l, lTl,"l-(l-"l-,l:a#+l./l/"l/$lXlt_ &_ "_!,_O_ *_W_$+_"B-#"_#/_Y_S_q_%&_$B-n_&(_&B-P_&#_h_(Eg+_(/___a_+*_*B-*#_Q_,R-+-_*+\'<-_*"_*/_-,_+(_)/_+ _-(_--_8_-B-1_/"_9\';%\';*\':#\':!\'9"\'<!\'9/\';E;+\':"\'8&\'5&\'<+\'<%\'<E8#\'<R<"\'<*\'5R6-\'6&\'6B6E6*\'BE5*\'5EB,\'B+\'.o_g\'B-(tBB/\'.L\'.(E.m\'.M\'.K\'.h\'.)$\'.A\'.(B.a\'.z\'/#(\'/#*\'/W\'/$,\'/$-\'/$Bb \'b!\'b%\'b$\'b(\'b/\'X \'X(\'XEXR/\'(\'/e\'/D\'/o\'/L\'/(R/m\'/)$\'/)B/]\'/s\'t#\'t/\'1"\'1EtB1&\'1L+w\'/T\'/`\'/,*\'/g\'/-$\'/9\'/5\'/.EH#\'H)N-,f &f|f +f!"f!L !N !,fyf"L #/f#+f$*fS(V"(VLV*(V/f&"f&L qfnfcf@f\'N _f\'/fufDf?fafhfsf*g!Kf*,f-+f6f-N --f,$f-*fjv N ./f/!v!+v"N!"#v"/v$+AxvSv#.(O#(O!f/,vw(U.vJv=v\'$vovLvGvfvev* vCv*$v*#(O/vhv*N!+ vQv+.v+L!+-v, v,"v+*v,N!,-v-!v-N!-L!,L!-*v-/v;vBvtv1v/.e !e "eVe \'e *e -e! eUe"N~+e#L"##e$ (FNFLF-(F*(F/([$(["([L[*([+e".eweRe\'L"\'.e}eMe*+e)/e++e*,e9e<e-/e-"e/$e/#etoh(0#e1e/N"-.(0&e-,(0N"-N#Yo#$oUo#"o#!o$ o#NY oWo"/o"+o!\'o!L#?oso**o)/o*"oAo"#o(.o(\'oGoloQoqo>o* o(N#*L#/$u!#o.+o,.o/-u #o-L$ +o,!o/\'u \'o;o/"u -u~u" o+-u#(? &o1(S-u"*u#,?%*uuuR(S+u*-(S.ue(SN$Su",(S/u\'N$Yu,*(S"u+N$+/u)/u-N$,-u++u-*u- u,!u`uju*!?yuH(P$?!\'?!(?",?!/?O?!$(P,?$ ?&#?%(?$(?$!D "?$+?%%?f?*$?L?\\?G?*(?&-?)$?a?.*?(\'?z?R?\'.?K?,)?+*?,/?+)?- ?g?--?6?-,?/)D *D!#D +?/.?tD &D~D!*D0D#/D$-$6%D%$D%/(=\'DwDhD*#D*)D**DxDmDkD*/D,$D`D+ D,)L"#D*+D-$D-.D.)D.,D-/D-+D./(w"(c&(cLc (c#D1(w!(cNc-D/Nc*(q$(q/(q\'(q+(\'F(nNw*(@ (>/(RL\'$,(\'p(R$(>\'(@L@.(>N>#(@#(@*LV(d"(\')/(\'e(d/(l+(r-(l (_ Aj(d+(l$(r#(l\'(\'`(r+(\'./(\'/"(\';L /L -(\'/.(\'X(\'/\'L .(_"L!!LULOL~LyL#!LZL#)L"\'L#+L$$L$"(?"(?N?.(D"(D+LvL\'.L).L>L_LQLnLeLELM(G.L)NG"L}(G$L+ L+/L+!L,#L,$L-$L-L})L--L/NK"L/,L/$L.L(/"(K$(K,(K*(\\#()$#(\\.()F(M*(M+()$!()$$(h+()Z(hL)$,(\\-(A (C.()=(A$(A-(A*(A/(E$(E\'(E.(N#()L()G()h())Ls!(sN)i(s,(s/(a"(a*(a-(a/(z (]*(],(]-()B()/$()/(G #GUG! G ,G!+G!-GFGZG$!G%+G%"GSG$(GlG&-G&,G&"G?GeGuG*(G*!G\\G^GiGsG*#G,$G,-G,"G-*G.+G/#GBG8G/!x!$G;G:G/\'G-.G-+x ,x \'x!*G9xUx! x!\'x" x##E*+x[x"+x#.x"L+$!x$,xPxpx$NQ&(Q+(Q*(k+(Q/(k,(k/x\'$x_xfxmx(.xMxhxAx)N+sm#*m$!m#/m$L,$,mp(T (T%(`"(`,m\'L,dmem(N,?mGm}m(.m)$mlm)Dy-m*-m**m+-m+"m+#m*.mkm,L,,!m8m<m-*m/-mtm1}|}V} *} \'} /} -}! )/p}!#m,-}!$}U(j\'(j-}w}q}v})N-,"}+.}+*},/}-*}j},,}-+},+}.*}.+}-/}<}/,(;L;N-H(9-(9.(9 (9/(8"(<%(.0(<$(8*(8\'(8N8,(6 (8L6N5$(5 (:*(5#(6%(.@(B"(B,(.v(.(\'(.?(.u(.x(.G(.h(.\\(.)$(.)N.**(.*!(.*,(.+ (.`(.+!(.+.(.T(.,L.,+(.-+(.<(./,(.1(..+(./.(/ *(/V(/O(/!"(/!N/!#(/!,(/!/(/!+(/ ,(/[(/##(/#+(/#N/W(/$"(/#.(/$,(/$N/S(/p(b\'(b,(X"(X#(X$(/z(/)/(t#(t-(t/(1\'(/-*(/6(/:(/.*(/./K(\'(H$KV(HNH*K!!KOKyK -K!.KUK +K"\'KZKYK#NH(KPK% K%!K%"K .K$)K#.K%&K%(K%.K&(K&/K@A*(KnKeK_KvKfKGK()K(/K*(K*/K+!KQK:K8&"$(K-+\\ "\\!"\\!)\\#"\\0\\$*)O&)O()U#\\J)U)\\q\\n\\x\\()\\e\\*"\\*+\\*/\\**\\Q\\+$\\+*\\, \\,!\\,)\\,+\\- \\j\\-/\\9\\-+\\/,\\b\\XM!.\\HM!$M",MOM!!)F.)F\'MWM$)M&$M$(MCM#/M$+)F MzMAMhMa)F*M,/M+)M+\'M.))0/Mth$$h".h!)h~h!*h"#h#*hYh#+)Y,)Z hl)Z.)Y&h+ h*,h*-h)$h+)hjh-\'h.(h6h-(h,#h--h- h,(h8)$!*)$!$)$!#)$ #)$ \')$! )$Z)$"+)$Y)$y)$#*)$$!)W")$$$)W+)S )S")W.)S*M"))$c)$>)$R)$_)W*)$l)$\'.)$v)$\'/CeC(\'CGC)$CACNC))C* C*(C*\'C*-C+,C++C+)C+.C,iH&C,#C,-C,,CgC-$CjC-,C9C6C:AyA"(A".A"/A$"A$,APA$+ARA%,A%.A%-A%/)=&An)=,A}ANACAEA**A*\'A+!A+"A+ A+$AkA+(A+)A,.A,+A,)A,-()$-A-,E -AgA/)E|E &E (E!#E .E!!E /EUE!)E"$E"*E0E#)E#-E#.E$$ESE$(E$"E$))>,)@ )@$E=)@?"-")@+EwE\')E?ElEvEdEDExE(/EKEzE*(EiE*#E+#E+$E,#E`E,(E,+E-,E.-)/PE/"d-/EXEbN /N ,N#(N"$NyN#\'N#-NSNPN$+)D+)D/NcNwN\'$Nq)G*)G/N+!NkN,$N,#N`N.)N.+)K#)K))\\")\\$)\\()M!)\\-)\\.)M$)M )M,)M.)h-)h.))$"))$)))W)C ))$+)C!)C"))$,)C%))E))N))^)s-)s.)a,)]/)]+)]-)]()]!)).-))..))/!))/"))1))/(s !s /sV)):s!)s"+s#\'sWs$"s$ s$#s#.)^%s$-)^+)^\')^/)i"sJ)i$)i))i+)i*s*-s+ s+,s, s,/s-!s-#s-$s-.s-/s:s<s5s./s.+s..s/$s/!s/\'s1a &a!(a!*a!/a~a"#aFa"\'a"(a")a"*a".a"/a#"a$$a$#aPa$-ap)Q!)Q(a\'$ahaoa\\aAaEa)/a* a*(a+$a, a,*a+)a`a,/a-!a-"a<a:a8a-$a9z#*a/"a/!a/ zOz!$z )z!#z ,z &z (z!"z *z|z".z!+zFz"$zyz0z$\'z#"zSz#.)T*)` )`\'z@z\'(zBz.,z/ ] )] (z.+] #] &]"*][]*/]"#]!/]$$]O]!"]$!]#/]#.]S]$(]%-]%.]&$]%!]% ]%)]n]()](\']*+]&/]d]s]*$]*)]+"],$],!]++]+(]+*]`],/],"]-)]-#]/(]5].-]./]/-)9*)9+)9.).>)B))B-).v).L).x).m).M).C).\\).]).^).*)).+().**).*-)@!).,,).,.).,/).- ).-$).-,).-.).--).;).6)..()../)./$).X)./\')./)).1)./,)./-)/ \')/ (@+\')/O)/y)/",)/#.)/$*)b")b$)X#)b/)X )X!)/=)X\')X,)X*)/R)/n)/@)/C)/z)tVeXz\'K%ESW!-,w)){{{{{{{{{{{{{{I\'.G(\\,h$(MLu-,P,E ++=#Um(M/)=1%/W$:(p9p/,P  P #P#)P%&PMPGPsP)$P,g|V ~$Hb !6|J \'V|F )W /W -?!$^UW!]%!+6!.T"O%")T"*J",V"-Q0V0>#"W#\'F#)Y#+F#--t 6$)T$G%$*C$H%%D%>C@%%dTl?l\'t H*!V()6xFKQCYCQCgAYsWa^QJ+, >"b+-?+.T,!6,*J,+^,b%-">g#t!O-$Fjg-+?-+C--V/"O/#WX>1>/-5Vj ?& G& -5 g&!" & /[!!U!#@!0&!)DyZ"*=#b&S &$]&$,5%$5&  =O=#+= )="5&!5&"$=J=%\'=%)t!"=q=))=* =+"=+/=/ic./MA\'=&rk?[l &fUuSmH*!ZA(t!S))D):&*0&ik*$=*\'Z*\'5*:&*8&+-=,#XT`,(=`X,-i- S-(@jX-)=-*`-,X-/D-/[-/`<A6`:@<`.+X/(D1%&H%cVc R "(c?c*+w /w|\'O,wSw$\'tOw,!w/B"+!n+B#"P*UqRq+-q,E#jq<q-"\'$ R#b\'$[\'$"*\'$"E$"BS"\'$(E$)/> !>&/@e@z@).@a@it!R\'$J"*/\'e!\'uBD$\'(d\')0t!(t!)t!*\'))P*!+\')ad-!dBt!,d.+r).t!-_$(_%,_+R-* _j\'6"\'/$Rt!t!.(0!(Z"o\'/o,\'oXu$L$+$?%#?%)?&+t!/?+ t" tyL \'LbG!"G#\'G\')G*\'G+.G-H*~GX(Q#x\'/m/ m/$}!"}@t"#(.,H*"P*FK&\'K-.t[\\O\\"\'\\-*\\-\'\\-.\\.-\\..\\8\\6M &M! M *M#*M$ M#,Mp)F))F!M#)M&\'M*\'MRM\'(MBM-\'M-)M- t"\'MgM;M-#hFhyM1t"(h!.MHh!-)0"hc)Y\'h*$h`h-.h/()$#!)$W)$$(CM/],t")A]A*/E##E#+E$#E$-EP)>!)>%)?\')D%t"*t"+)M\'t",))).sps-)s-,a>ana(/a+!a++z  ]c]&+t"-)9)).-!3ycywynyqy\'$y>y@yRy\'e!\')H:H8H \'H "{{{{{I74;  ; !; "; #;|;V; &; \'; (; ); *; +; ,; -; .; /;! ;!!;!";!#;!$;O;U;!\';!(;!);!*;!+;!,;!-;!.;!/;" ;y;~;"#;"$;F;[;"\';"(;");"*;"+;",;"-;".;"/;0;#!;#";##;#$;Y;Z;#\';#(;#);#*;#+;#,;#-;#.;#/;$ ;$!;$";$#;$$;W;S;$\';$(;$);$*;$+;$,;$-;p;P;% ;%!;%";%#;%$;%%;%&;%\';%(;%);%*;%+;%,;%-;%.;%/;& ;&!;&";&#;&$;J;=;&\';&(;&);&*;&+;&,;&-;&.;&/;c;w;n;q;\'$;>;@;R;\'(;\');d;r;l;_;\'.;\'/;f;v;e;o;u;?;D;(\';L;();G;x;m;};(.;(/;K;\\;M;h;)$;C;A;E;N;));s;a;z;];).;)/;* ;*!;*";*#;*$;^;i;*\';*(;*);**;*+;*,;*-;*.;*/;+ ;+!;+";+#;+$;Q;k;+\';+(;+);+*;++;+,;+-;+.;+/;, ;,!;,";,#;,$;T;`;,\';,(;,);,*;,+;,,;,-;,.;,/;- ;-!;-";-#;-$;g;j;-\';-(;-);-*;-+;-,;--;-.;-/;;;9;:;<;8;6;5;B;.(;.);.*;.+;.,;.-;..;./;/ ;/!;/";/#;/$;b;X;/\';/(;/);t;1;/,;/-;/.;H9  9 !9 "9 #9|9V9 &9 \'9 (9 )9 *9 +9 ,9 -9 .9 /9! 9!!9!"9!#9!$9O9U9!\'9!(9!)9!*9!+9!,9!-9!.9!/9" 9y9~9"#9"$9F9[9"\'9"(9")9"*9"+9",9"-9".9"/909#!9#"9##9#$9Y9Z9#\'9#(9#)9#*9#+9#,9#-9#.9#/9$ 9$!9$"9$#9$$9W9S9$\'9$(9$)9$*9$+9$,9$-9p9P9% 9%!9%"9%#9%$9%%9%&9%\'9%(9%)9%*9%+9%,9%-9%.9%/9& 9&!9&"9&#9&$9J9=9&\'9&(9&)9&*9&+9&,9&-9&.9&/9c9w9n9q9\'$9>9@9R9\'(9\')9d9r9l9_9\'.9\'/9f9v9e9o9u9?9D9(\'9L9()9G9x9m9}9(.9(/9K9\\9M9h9)$9C9A9E9N9))9s9a9z9]9).9)/9* 9*!9*"9*#9*$9^9i9*\'9*(9*)9**9*+9*,9*-9*.9*/9+ 9+!9+"9+#9+$9Q9k9+\'9+(9+)9+*9++9+,9+-9+.9+/9, 9,!9,"9,#9,$9T9`9,\'9,(9,)9,*9,+9,,9,-9,.9,/9- 9-!9-"9-#9-$9g9j9-\'9-(9-)9-*9-+9-,9--9-.9-/9;999:9<9896959B9.(9.)9.*9.+9.,9.-9..9./9/ 9/!9/"9/#9/$9b9X9/\'9/(9/)9t919/,9/-9/.9H:  : !: ": #:|:V: &: \': (: ): *: +: ,: -: .: /:! :!!:!":!#:!$:O:U:!\':!(:!):!*:!+:!,:!-:!.:!/:" :y:~:"#:"$:F:[:"\':"(:"):"*:"+:",:"-:".:"/:0:#!:#":##:#$:Y:Z:#\':#(:#):#*:#+:#,:#-:#.:#/:$ :$!:$":$#:$$:W:S:$\':$(:$):$*:$+:$,:$-:p:P:% :%!:%":%#:%$:%%:%&:%\':%(:%):%*:%+:%,:%-:%.:%/:& :&!:&":&#:&$:J:=:&\':&(:&):&*:&+:&,:&-:&.:&/:c:w:n:q:\'$:>:@:R:\'(:\'):d:r:l:_:\'.:\'/:f:v:e:o:u:?:D:(\':L:():G:x:m:}:(.:(/:K:\\:M:h:)$:C:A:E:N:)):s:a:z:]:).:)/:* :*!:*":*#:*$:^:i:*\':*(:*):**:*+:*,:*-:*.:*/:+ :+!:+":+#:+$:Q:k:+\':+(:+):+*:++:+,:+-:+.:+/:, :,!:,":,#:,$:T:`:,\':,(:,):,*:,+:,,:,-:,.:,/:- :-!:-":-#:-$:g:j:-\':-(:-):-*:-+:-,:--:-.:-/:;:9:::<:8:6:5:B:.(:.):.*:.+:.,:.-:..:./:/ :/!:/":/#:/$:b:X:/\':/(:/):t:1:/,:/-:/.:H.0 .0!.0".0#.0p0%.0&.0\'.0(.0).0*.0+.0,.0-.0..0/<! <!!<!"<!#<!$<O<U<!\'<!(<!)<!*<!+<!,<!-<!.<!/<" <y<~<"#<"$<F<[<"\'<"(<")<"*<"+<",<"-<".<"/<0<#!<#"<##<#$<Y<Z<#\'<#(<#)<#*<#+<#,<#-<#.<#/<$ <$!<$"<$#<$$<W<S<$\'<$(<$)<$*<$+<$,<$-<p<P<% <%!<%"<%#<%$<%%<%&<%\'<%(<%)<%*<%+<%,<%-<%.<%/<& <&!<&"<&#<&$<J<=<&\'<&(<&)<&*<&+<&,<&-<&.<&/<c<w<n<q<\'$<><@<R<\'(<\')<d<r<l<_<\'.<\'/<f<v<e<o<u<?<D<(\'<L<()<G<x<m<}<(.<(/<K<\\<M<h<)$<C<A<E<N<))<s<a<z<]<).<)/<* <*!<*"<*#<*$<^<i<*\'<*(<*)<**<*+<*,<*-<*.<*/<+ <+!<+"<+#<+$<Q<k<+\'<+(<+)<+*<++<+,<+-<+.<+/<, <,!<,"<,#<,$<T<`<,\'<,(<,)<,*<,+<,,<,-<,.<,/<- <-!<-"<-#<-$<g<j<-\'<-(<-)<-*<-+<-,<--<-.<-/<;<9<:<<<8<6<5<B<.(<.)<.*<.+<.,<.-<..<./</ </!</"</#</$<b<X</\'</(</)<t<1</,</-</.<H8  8 !8 "8 #8|8V8 &8 \'8 (8 )8 *8 +8 ,8 -8 .8 /8! 8!!8!"8!#8!$8O8U8!\'8!(8!)8!*8!+8!,8!-8!.8!/8" 8y8~8"#8"$8F8[8"\'8"(8")8"*8"+8",8"-8".8"/808#!8#"8##8#$8Y8Z8#\'8#(8#)8#*8#+8#,8#-8#.8#/8$ 8$!8$"8$#8$$8W8S8$\'8$(8$)8$*8$+8$,8$-8p8P8% 8%!8%"8%#8%$8%%8%&8%\'8%(8%)8%*8%+8%,8%-8%.8%/8& 8&!8&"8&#8&$8J8=8&\'8&(8&)8&*8&+8&,8&-8&.8&/8c8w8n8q8\'$8>8@8R8\'(8\')8d8r8l8_8\'.8\'/8f8v8e8o8u8?8D8(\'8L8()8G8x8m8}8(.8(/8K8\\8M8h8)$8C8A8E8N8))8s8a8z8]8).8)/8* 8*!8*"8*#8*$8^8i8*\'8*(8*)8**8*+8*,8*-8*.8*/8+ 8+!8+"8+#8+$8Q8k8+\'8+(8+)8+*8++8+,8+-8+.8+/8, 8,!8,"8,#8,$8T8`8,\'8,(8,)8,*8,+8,,8,-8,.8,/8- 8-!8-"8-#8-$8g8j8-\'8-(8-)8-*8-+8-,8--8-.8-/8;898:8<8886858B8.(8.)8.*8.+8.,8.-8..8./8/ 8/!8/"8/#8/$8b8X8/\'8/(8/)8t818/,8/-8/.8H6  6 !6 "6 #6|6V6 &6 \'6 (6 )6 *6 +6 ,6 -6 .6 /6! 6!!6!"6!#6!$6O6U6!\'6!(6!)6!*6!+6!,6!-6!.6!/6" 6y6~6"#6"$6F6[6"\'6"(6")6"*6"+6",6"-6".6"/606#!6#"6##6#$6Y6Z6#\'6#(6#)6#*6#+6#,6#-6#.6#/6$ 6$!6$"6$#6$$6W6S6$\'6$(6$)6$*6$+6$,6$-6p6P6% 6%!6%"6%#6%$6%%6%&6%\'6%(6%)6%*6%+6%,6%-6%.6%/6& 6&!6&"6&#6&$6J6=6&\'6&(6&)6&*6&+6&,6&-6&.6&/6c6w6n6q6\'$6>6@6R6\'(6\')6d6r6l6_6\'.6\'/6f6v6e6o6u6?6D6(\'6L6()6G6x6m6}6(.6(/6K6\\6M6h6)$6C6A6E6N6))6s6a6z6]6).6)/6* 6*!6*"6*#6*$6^6i6*\'6*(6*)6**6*+6*,6*-6*.6*/6+ 6+!6+"6+#6+$6Q6k6+\'6+(6+)6+*6++6+,6+-6+.6+/6, 6,!6,"6,#6,$6T6`6,\'6,(6,)6,*6,+6,,6,-6,.6,/6- 6-!6-"6-#6-$6g6j6-\'6-(6-)6-*6-+6-,6--6-.6-/6;696:6<6866656B6.(6.)6.*6.+6.,6.-6..6./6/ 6/!6/"6/#6/$6b6X6/\'6/(6/)6t616/,6/-6/.6H5  5 !5 "5 #5|5V5 &5 \'5 (5 )5 *5 +5 ,5 -5 .5 /5! 5!!5!"5!#5!$5O5U5!\'5!(5!)5!*5!+5!,5!-5!.5!/5" 5y5~5"#5"$5F5[5"\'5"(5")5"*5"+5",5"-5".5"/505#!5#"5##5#$5Y5Z5#\'5#(5#)5#*5#+5#,5#-5#.5#/5$ 5$!5$"5$#5$$5W5S5$\'5$(5$)5$*5$+5$,5$-5p5P5% 5%!5%"5%#5%$5%%5%&5%\'5%(5%)5%*5%+5%,5%-5%.5%/5& 5&!5&"5&#5&$5J5=5&\'5&(5&)5&*5&+5&,5&-5&.5&/5c5w5n5q5\'$5>5@5R5\'(5\')5d5r5l5_5\'.5\'/5f5v5e5o5u5?5D5(\'5L5()5G5x5m5}5(.5(/5K5\\5M5h5)$5C5A5E5N5))5s5a5z5]5).5)/5* 5*!5*"5*#5*$5^5i5*\'5*(5*)5**5*+5*,5*-5*.5*/5+ 5+!5+"5+#5+$5Q5k5+\'5+(5+)5+*5++5+,5+-5+.5+/5, 5,!5,"5,#5,$5T5`5,\'5,(5,)5,*5,+5,,5,-5,.5,/5- 5-!5-"5-#5-$5g5j5-\'5-(5-)5-*5-+5-,5--5-.5-/5;595:5<5856555B5.(5.)5.*5.+5.,5.-5..5./5/ 5/!5/"5/#5/$5b5X5/\'5/(5/)5t515/,5/-5/.5HB  B !B "B #B|BVB &B \'B (B )B *B +B ,B -B .B /B! B!!B!"B!#B!$BOBUB!\'B!(B!)B!*B!+B!,B!-B!.B!/B" ByB~B"#B"$BFB[B"\'B"(B")B"*B"+B",B"-B".B"/B0B#!B#"B##B#$BYBZB#\'B#(B#)B#*B#+B#,B#-B#.B#/B$ B$!B$"B$#B$$BWBSB$\'B$(B$)B$*B$+B$,B$-BpBP.> .>!.>".>#.>p>%.>&.>n!cywynyqy\'$y>y@yRy\'e!\'MU "U!"U~U#"U$yJy="UnUeU)H:H8H \'H "#"#!yUyy~Y\'.G(\\,h$(MLu-,P,E ++=#Um(M/)=1%/W$:(p9p/,P  P #P#)P%&PMPGPsP)$P,g|V ~$Hb !6|J \'V|F )W /W -?!$^UW!]%!+6!.T"O%")T"*J",V"-Q0V0>#"W#\'F#)Y#+F#--t 6$)T$G%$*C$H%%D%>C@%%dTl?l\'t H*!V()6xFKQCYCQCgAYsWa^QJ+, >"b+-?+.T,!6,*J,+^,b%-">g#t!O-$Fjg-+?-+C--V/"O/#WX>1>/-5Vj ?& G& -5 g&!" & /[!!U!#@!0&!)DyZ"*=#b&S &$]&$,5%$5&  =O=#+= )="5&!5&"$=J=%\'=%)t!"=q=))=* =+"=+/=/ic./MA\'=&rk?[l &fUuSmH*!ZA(t!S))D):&*0&ik*$=*\'Z*\'5*:&*8&+-=,#XT`,(=`X,-i- S-(@jX-)=-*`-,X-/D-/[-/`<A6`:@<`.+X/(D1%&H%cVc R "(c?c*+w /w|\'O,wSw$\'tOw,!w/B"+!n+B#"P*UqRq+-q,E#jq<q-"\'$ R#b\'$[\'$"*\'$"E$"BS"\'$(E$)/> !>&/@e@z@).@a@it!R\'$J"*/\'e!\'uBD$\'(d\')0t!(t!)t!*\'))P*!+\')ad-!dBt!,d.+r).t!-_$(_%,_+R-* _j\'6"\'/$Rt!t!.(0!(Z"o\'/o,\'oXu$L$+$?%#?%)?&+t!/?+ t" tyL \'LbG!"G#\'G\')G*\'G+.G-H*~GX(Q#x\'/m/ m/$}!"}@t"#(.,H*"P*FK&\'K-.t[\\O\\"\'\\-*\\-\'\\-.\\.-\\..\\8\\6M &M! M *M#*M$ M#,Mp)F))F!M#)M&\'M*\'MRM\'(MBM-\'M-)M- t"\'MgM;M-#hFhyM1t"(h!.MHh!-)0"hc)Y\'h*$h`h-.h/()$#!)$W)$$(CM/],t")A]A*/E##E#+E$#E$-EP)>!)>%)?\')D%t"*t"+)M\'t",))).sps-)s-,a>ana(/a+!a++z  ]c]&+t"-)9)).-!{{{{{I',p='# /+012233.&.%44.$.!.". .#&&\'%(%\'&)&.\')%(&)\'"%(*//77&%) (()")(!%$/+%\'\'$&,%!& %$%/&#%#&"&)!)-*%\'-,&)+/%\' \'*("( -%)#*&-&+&\',(,\'"(#$.\'#\'+)*/*($(!\'!(+"!),II $(-""',s,r=new RegExp("[\x30-\x7e]", "g"),f=function(c){var l=(c.charCodeAt(0)-48)*2;return p.substring(l,l+2);};while((s=t.replace(r,f))!=t)t=s;return s.replace(new RegExp("....","g"),function(c){return String.fromCharCode((c.charCodeAt(0)-32)<<12|(c.charCodeAt(1)-32)<<8|(c.charCodeAt(2)-32)<<4|(c.charCodeAt(3)-32));});})();


/*//////////////////
  parser/utils_support.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var makeJSON = function(tagger) {
	function isElement(e){
		if(e && e.nodeType === 1){
			return true;
			try{
				console.log("!");
				e.nodeType = e.nodeType;
			} catch(n) {
				return true;
			}
		}
		return false;
	}
	var clone = function(o) {
		if(o && o.constructor === Array) {
			var a = [];
			for(var i = 0; i < o.length; i++) {
				a.push(clone(o[i]));
			}
			return a;
		}
		if(o && typeof o == "object") {
			if(isElement(o)) {
				return "<ELEMENT>";
			}
			var ret = {};
			for(var key in o) {
				ret[key] = clone(o[key]);
			}
			return ret;
		}
		if(typeof o == "function") {
			console.log("func?", o);
		} else {
			return o;
		}
	};
	var tagList = [];
	for(var i = 0; i < tagger.tagList.length; i++) {
		var obj = {};
		var tag = tagger.tagList[i];
		tagList.push(clone(tag));
	}
	var json = JSON.stringify(tagList);
	console.log(json);
	console.log(json.length);
};


/*//////////////////
  parser/loader.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var Loader = function(option) {
	this.option = option;
	this.started = false;
	this.completed = false;
	this.binary = [];
	this.loadedBytes = 0;
};

Loader.prototype.load = function(src, callback) {
	// load swf file from http server using XHR
	if(this.started) {
		return;
	}
	this.started = true;
	
	if(!this.option.swfBinary) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", src);
		xhr.overrideMimeType('text/plain; charset=x-user-defined'); // binary
		xhr.onreadystatechange = (function(that) {
			return function() {
				if(xhr.status != 0 && xhr.status != 200) {
					that.option.onerror && that.option.onerror("xhr failed");
					EngineLogE("xhr failed status=" + xhr.status, xhr);
					return;
				}
				if(xhr.readyState >= 3) {
					var rt = xhr.responseText;
					var len = rt.length;
					for(var i = that.loadedBytes; i < len; i++) {
						that.binary[i] = rt.charCodeAt(i) & 0xFF; // bitmask needed
					}
					that.loadedBytes = len;
					that.completed = (xhr.readyState == 4);
					that.onprogress && that.onprogress();
					if(that.completed) {
						that.onprogress = null;
					}
				}
			};
		})(this);
		this.onprogress = callback;
		xhr.send(null);
	} else {
		this.loadedBytes = this.option.swfBinary.length;
		for(var i = 0; i < this.loadedBytes; i++) {
			this.binary[i] = this.option.swfBinary.charCodeAt(i) & 0xFF;
		}
		this.completed = true;
		callback();
		this.onprogress = null;
	}
};


/*//////////////////
  parser/parser.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var Parser = function(option) {
	this.option = option;
	this.completed = false;
	this.loader = new Loader(option);
	this.parsedByte = 0;
	this.headerCompleted = false;
	this.header = {};
	this.tagList = [];
	this.loadingImageCount = 0;
	this.colorRange = option.colorLevels && option.colorLevels < 256 && (Math.max(1, Math.min(256 / option.colorLevels, 256)) | 0);
};

(function() {
	Parser.dealHeader = function(loader, header, onerror) {
		// about 20 bytes length so check it
		var loadedBytes = loader.loadedBytes;
		if(loadedBytes < 20) {
			return 0;
		}
		var pos = 0;
		var binary = loader.binary;
		if(binary[pos] != "F".charCodeAt(0) ||
			binary[pos + 1] != "W".charCodeAt(0) ||
			binary[pos + 2] != "S".charCodeAt(0)) {
			// signature check missed
			var errorMessage = "invalid swf signature: " + String.fromCharCode.apply(null, binary.slice(0, 3));
			onerror && onerror(errorMessage);
			EngineLogE(errorMessage);
			return 0;
		}
		header.signature = "FWS";
		pos += 3;
		header.version = binary[pos];
		if(header.version != 4) {
			EngineLogW("unsupported flash version: " + header.version);
		}
		pos++;
		header.filesize = getUI32(binary, pos);
		pos += 4;
		var rect = [];
		var len = getRect(binary, pos, rect);
		header.frameSize = rect;
		pos += len;
		header.frameRate = binary[pos + 1];	 // 8.8frames. ignore floating point
		pos += 2;
		header.frameCount = getUI16(binary, pos);
		pos += 2;
		if(loadedBytes < pos) {
			return 0;
		}
		return pos;
	};

	Parser.prototype.dealBody = function(pos, delayEval, colorRange) {
		var loader = this.loader;
		var loadedBytes = loader.loadedBytes;
		var binary = loader.binary;
		var tagList = this.tagList;

		while(pos < loadedBytes) {
			var feed = getUI16(binary, pos);
			var size = 2;
			if(isNaN(feed)) {
				// read undefined
				break;
			}
			var type = feed >> 6;
			var length = feed & 0x3F;
			if(length == 0x3f) {
				length = getUI32(binary, pos + 2);
				size += 4;
			}
			if(isNaN(length)) {
				// read undefined
				break;
			}
			if(size + length + pos > loadedBytes) {
				// too much readed
				break;
			}
			// tag is loaded successfully
			var tagClass = TagFactory[type] || TagGeneral;
			var instance = new tagClass(binary, pos + size, length, type, delayEval, this, colorRange);
            
            var all_callbacks = this.option.tagParseCallback;
            var callback = all_callbacks[type];
            if (callback) {
                instance = callback(instance) || instance;
            }
            
			tagList.push(instance);

			pos += length + size;
		}
		return pos;
	};

	Parser.prototype.load = function(src, callback) {
		this.onprogress = (callback && [callback]) || [];
		this.loader.load(src, function(that) { return function() { that.progress.apply(that, arguments); }; }(this));
	};
	
	Parser.prototype.addCallback = function(callback) {
		if(this.completed) {
			callback();
		} else {
			this.onprogress.push(callback);
		}
	};

	Parser.prototype.progress = function() {
		var pos = this.parsedByte;

		if(!this.headerCompleted) {
			var len = Parser.dealHeader(this.loader, this.header, this.option.onerror);
			if(!len) {
				return;
			}
			pos += len;
			this.headerCompleted = true;
		}
		pos = this.dealBody(pos, this.option.delayEval, this.colorRange);

		this.completed = this.loader.completed;
		if(this.completed && pos != this.loader.loadedBytes) {
			EngineLogW("parse warning: couldn't finish to tag all binary data");
			this.option.onerror && this.option.onerror("broken binary");
		}
		this.parsedByte = pos;
		var len = this.onprogress.length;
		for(var i = 0; i < len; i++) {
			this.onprogress[i]();
		}
		if(this.completed) {
			this.onprogress = [];
		}
	};

})();


/*//////////////////
  parser/tag_control.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var TagEnd = function(binary, pos, length, type) {
};
TagEnd.prototype.type = TagDefine.TypeTagEnd;

var TagSetBackgroundColor = function(binary, pos, length, type, delayEval, dataStore) {
	setProperty(this, "color", function() {
		return getRGB(binary, pos);
	}, delayEval);
};
TagSetBackgroundColor.prototype.type = TagDefine.TypeTagSetBackgroundColor;

var TagFrameLabel = function(binary, pos, length, type, delayEval, dataStore) {
	setProperty(this, "name", function() {
		return getString(binary, pos);
	}, delayEval);
};
TagFrameLabel.prototype.type = TagDefine.TypeTagFrameLabel;



/*//////////////////
  parser/tag_display_list.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var TagPlaceObject = function(binary, pos, length, type, delayEval, dataStore, colorRange) {
	setProperties(this, function() {
		var result = {};
		result.characterId = getUI16(binary, pos);
		result.depth = getUI16(binary, pos + 2);
		result.matrix = [];
		var len = getMatrix(binary, pos + 4, result.matrix);
		var p = pos + len + 4;
		result.cxform = null;
		if(p < length) {
			result.cxform = [];
			getCxform(binary, p, result.cxform, colorRange);
		}
		console.log(result.matrix);
		console.log(result.cxform);
		EngineLogE("PlaceObjectTag is not supported");
		return result;
	}, ["characterId", "depth", "matrix", "cxform"], delayEval);
};
TagPlaceObject.prototype.type = TagDefine.TypeTagPlaceObject;

var TagPlaceObject2 = function(binary, pos, length, type, delayEval, dataStore, colorRange) {
	setProperties(this, function() {
		var result = {};
		var f = binary[pos];
		result.move = f & 0x01;
		var p = pos + 1;
		var len;
		
		result.depth = getUI16(binary, p);
		p += 2;
		result.characterId = null;
		if(f & 0x02) {
			result.characterId = getUI16(binary, p);
			p += 2;
		}
		result.matrix = null;
		if(f & 0x04) {
			result.matrix = [];
			len = getMatrix(binary, p, result.matrix);
			p += len;
		}
		result.cxform = null;
		if(f & 0x08) {
			result.cxform = [];
			len = getCxformWithAlpha(binary, p, result.cxform, colorRange);
			p += len;
		}
		result.ratio = null;
		if(f & 0x10) {
			result.ratio = getUI16(binary, p);
			p += 2;
		}
		result.name = null;
		if(f & 0x20) {
			result.name = getString(binary, p, result.name);
			p += result.name.length + 1;
		}
		result.clipDepth = null;
		if(f & 0x40) {
			result.clipDepth = getUI16(binary, p);
		}
		
		// ignore clipactions because this is for swf5 and later
		return result;
	}, ["move", "depth", "characterId", "matrix", "cxform", "ratio", "name", "clipDepth"], delayEval);
};
TagPlaceObject2.prototype.type = TagDefine.TypeTagPlaceObject2;

var TagRemoveObject2 = function(binary, pos, length, type, delayEval, dataStore) {
	setProperty(this, "depth", function() {
		return getUI16(binary, pos);
	}, delayEval);
};
TagRemoveObject2.prototype.type = TagDefine.TypeTagRemoveObject2;

var TagShowFrame = function(binary, pos, length, type) {
};
TagShowFrame.prototype.type = TagDefine.TypeTagShowFrame;



/*//////////////////
  parser/tag_action.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var getActionRecord = function(binary, pos, records) {
	var p = pos;
	while(true) {
		var offset = p - pos;
		var code = binary[p];
		p++;
		if(!code) {
			var instance = new ActionGeneral(binary, p);
			instance.code = 0;
			instance.offset = offset;
			records.push(instance);
			break;
		}
		var len = 0;
		if(code < 0x80) {
			var actionClass = ActionGeneral;
		} else {
			len = getUI16(binary, p);
			p += 2;
			var actionClass = ActionFactory[code] || ActionError;
		}
		var instance = new actionClass(binary, p, len, code);
		p += len;
		instance.code = code;
		instance.offset = offset;
		instance.nextOffset = p - pos;
		records.push(instance);
	}
	return p - pos;
};
var TagDoAction = function(binary, pos, length, type, delayEval, dataStore) {
	setProperty(this, "actions", function() {
		var result = [];
		getActionRecord(binary, pos, result);
		return result;
	}, delayEval);
};
TagDoAction.prototype.type = TagDefine.TypeTagDoAction;

var ActionGotoFrame = function(binary, pos, length) {
	this.frame = getUI16(binary, pos) + 1;
};
var ActionGetURL = function(binary, pos, length) {
	this.urlString = getString(binary, pos);
	this.targetString = getString(binary, pos + this.urlString.length + 1);
	console.log(this.urlString, this.targetString);
	EngineLogE("ActionGetURL is not supported");
};
var ActionWaitForFrame = function(binary, pos, length) {
	this.frame = getUI16(binary, pos);
	this.skipCount = binary[pos + 2];
	console.log(this.frame, this.skipCount);
	EngineLogE("ActionWaitForFrame is not supported");
};
var ActionSetTarget = function(binary, pos, length) {
	this.name = getString(binary, pos);
};
var ActionGoToLabel = function(binary, pos, length) {
	this.label = getString(binary, pos);
};
var ActionPush = function(binary, pos, length) {
	var c = pos;
	var result = [];
	while(c < pos + length) {
		var type = binary[c];
		c++;
		switch(type) {
		case 0:
			var ret = getStringSJIS(binary, c);
			result.push(ret[0]);
			c += ret[1];
			/*/
			var str = getString(binary, c);
			result.push(str);
			c += str.length + 1;
			*/
			break;
		case 1:
			result.push(getFloat(binary, c));
			c += 4;
			break;
		case 2:
			result.push(null);
			break;
		case 3:
			result.push(void 0); // undefined
			break;
		case 4:
			result.push(binary[c]);
			c++;
			break;
		case 5:
			result.push(binary[c] != 0);
			c++;
			EngineLogW("action push: boolean is danger. change 1/0");
			break;
		case 6:
			result.push(getDouble(binary, c));
			c += 8;
			EngineLogW("action push: double value is not tested!");
			break;
		case 7:
			result.push(getUI32(binary, c));
			c += 4;
			break;
		case 8:
			result.push(binary[c]);
			c++;
			EngineLogW("action push: unsupported push recognized");
			break;
		case 9:
			result.push(getUI16(binary, c));
			c += 2;
			EngineLogW("action push: unsupported push recognized");
			break;
		}
	}
	this.values = result;
};
var ActionJump = function(binary, pos, length) {
	this.branchOffset = getSI16(binary, pos);
};
var ActionIf = function(binary, pos, length) {
	this.branchOffset = getSI16(binary, pos);
};
var ActionCall = function(binary, pos) {
};
var ActionGotoFrame2 = function(binary, pos, length) {
	var f = binary[pos];
	this.play = f & 0x01;
	this.sceneBiasFlag = f & 0x02;
	if(this.sceneBiasFlag) {
		this.sceneBias = getUI16(binary, pos + 1);
	}
};
var ActionWaitForFrame2 = function(binary, pos, length) {
	this.skipCount = binary[pos];
	console.log(Debug(this));
	EngineLogE("ActionWaitForFrame2 is not supported");
};
var ActionGetURL2 = function(binary, pos, length) {
	this.loadTargetFlag = getBit(binary, pos, 0);
	this.loadVariablesFlag = getBit(binary, pos, 1);
	// reserved getBits(binary, pos, 2, 4) == 0
	this.sendVarsMethod = getBits(binary, pos, 6, 2);
};

var ActionGeneral = function(binary, pos) {
};
var ActionError = function(binary, pos, length, code) {
	EngineLogW("action parser: not supported action code detected [" + code +"]");
};

var ActionFactory = {
	"129": ActionGotoFrame,
	"131": ActionGetURL,
	"138": ActionWaitForFrame,
	"139": ActionSetTarget,
	"140": ActionGoToLabel,
	"150": ActionPush,
	"153": ActionJump,
	"157": ActionIf,
	"158": ActionCall,
	"159": ActionGotoFrame2,
	"141": ActionWaitForFrame2,
	"154": ActionGetURL2
};



/*//////////////////
  parser/tag_shape.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var parseFillStyleArray = function(binary, pos, version, result) {
	var p = pos;
	
	var fillStyleCount = binary[p];
	p++;
	if(fillStyleCount == 0xff) {
		fillStyleCount = getUI16(binary, p);
		p += 2;
	}
	var len = 0;
	var fillStyles = [];
	for(var i = 0; i < fillStyleCount; i++) {
		var fillStyle = {};
		var type = binary[p];
		p++;
		fillStyle.type = type;
		if(type == 0x00) {
			if(version == 3) {
				fillStyle.color = getRGBA(binary, p);
				p += 4;
			} else {
				fillStyle.color = getRGB(binary, p);
				p += 3;
			}
		} else if(type == 0x10 || type == 0x12 || type == 0x13) {
			fillStyle.matrix = [];
			fillStyle.gradient = {records: []};
			len = getMatrix(binary, p, fillStyle.matrix);
			p += len;
			len = getGradient(binary, p, version, fillStyle.gradient);
			p += len;
			if(type == 0x13) {
				EngineLogE("paser fillstyle: detected swf8 structure");
			}
		} else if(type == 0x40 || type == 0x41 || type == 0x42 || type == 0x43) {
			fillStyle.bitmapId = getUI16(binary, p);
			p += 2;
			fillStyle.matrix = [];
			len = getMatrix(binary, p, fillStyle.matrix);
			p += len;
		} else {
			EngineLogE("parser fillstyle: unknown type:" + type);
		}
		fillStyles.push(fillStyle);
	}
	result.fillStyles = fillStyles;
	return p - pos;
};
var parseLineStyleArray = function(binary, pos, version, result) {
	var p = pos;
	var lineStyleCount = binary[p];
	p++;
	if(lineStyleCount == 0xff) {
		lineStyleCount = getUI16(binary, p);
		p += 2;
	}
	var lineStyles = [];
	for(var i = 0; i < lineStyleCount; i++) {
		var lineStyle = {};
		lineStyle.width = getUI16(binary, p);
		p += 2;
		if(version == 3) {
			lineStyle.color = getRGBA(binary, p);
			p += 4;
		} else {
			lineStyle.color = getRGB(binary, p);
			p += 3;
		}
		lineStyles.push(lineStyle);
	}
	result.lineStyles = lineStyles;
	return p - pos;
};
var parseShapeWithStyle = function(binary, pos, version, result) {
	var p = pos;
	var len = 0;
	len = parseFillStyleArray(binary, p, version, result);
	p += len;
	
	len = parseLineStyleArray(binary, p, version, result);
	p += len;
	
	len = parseShape(binary, p, version, result, "shapes");
	p += len;
	return p - pos;
};
var parseShape = function(binary, pos, version, result, attribute) {
	var p = pos;
	var len;
	var numFillBits = getBits(binary, p, 0, 4);
	var numLineBits = getBits(binary, p, 4, 4);
	p++;
	//result.numFillBits = numFillBits;
	//result.numLineBits = numLineBits;
	
	
	var shapeRecords;
	if(attribute) {
		shapeRecords = [];
	} else {
		shapeRecords = result;
	}
	var bits;
	var c = 0;
	while((bits = getBits(binary, p, c, 6)) != 0) {
		var record = {};
		if(bits & 0x20) {
			if(bits & 0x10) {
				// STRAIGHTEDGERECORD
				record.type = EdgeDefine.TypeStraight;
				record.x = 0;
				record.y = 0;
				c += 2;
				var numBits = getBits(binary, p, c, 4) + 2;
				c += 4;
				var generalLineFlag = getBit(binary, p, c);
				c++;
				if(generalLineFlag) {
					record.x = sb2int(getBits(binary, p, c, numBits), numBits);
					c += numBits;
					record.y = sb2int(getBits(binary, p, c, numBits), numBits);
					c += numBits;
				} else {
					var vertLineFlag = getBit(binary, p, c);
					c++;
					if(vertLineFlag) {
						record.y = sb2int(getBits(binary, p, c, numBits), numBits);
						c += numBits;
					} else {
						record.x = sb2int(getBits(binary, p, c, numBits), numBits);
						c += numBits;
					}
				}
			} else {
				// CURVEDEDGERECORD
				record.type = EdgeDefine.TypeCurve;
				c += 2;
				var numBits = getBits(binary, p, c, 4) + 2;
				c += 4;
				record.cx = sb2int(getBits(binary, p, c, numBits), numBits);
				c += numBits;
				record.cy = sb2int(getBits(binary, p, c, numBits), numBits);
				c += numBits;
				record.ax = sb2int(getBits(binary, p, c, numBits), numBits);
				c += numBits;
				record.ay = sb2int(getBits(binary, p, c, numBits), numBits);
				c += numBits;
			}
		} else {
			// STYLECHANGERECORD
			record.type = EdgeDefine.TypeStyleChange;
			c++;
			var stateNewStyles = getBit(binary, p, c);
			c++;
			var stateLineStyle = getBit(binary, p, c);
			c++;
			var stateFillStyle1 = getBit(binary, p, c);
			c++;
			var stateFillStyle0 = getBit(binary, p, c);
			c++;
			var stateMoveTo = getBit(binary, p, c);
			c++;
			if(stateMoveTo) {
				var moveBits = getBits(binary, p, c, 5);
				c += 5;
				var moveDeltaX = getBits(binary, p, c, moveBits);
				c += moveBits;
				var moveDeltaY = getBits(binary, p, c, moveBits);
				c += moveBits;
				record.dx = sb2int(moveDeltaX, moveBits);
				record.dy = sb2int(moveDeltaY, moveBits);
			}
			if(stateFillStyle0) {
				record.fillStyle0 = getBits(binary, p, c, numFillBits);
				c += numFillBits;
			}
			if(stateFillStyle1) {
				record.fillStyle1 = getBits(binary, p, c, numFillBits);
				c += numFillBits;
			}
			if(stateLineStyle) {
				record.lineStyle = getBits(binary, p, c, numLineBits);
				c += numLineBits;
			}
			if(stateNewStyles) {
				// set aliment
				p += Math.ceil(c / 8);
				c = 0;
				//record.fillStyles = {};
				//record.lineStyles = {};
				len = parseFillStyleArray(binary, p, version, record);
				p += len;
				len = parseLineStyleArray(binary, p, version, record);
				p += len;
				numFillBits = getBits(binary, p, 0, 4);
				c += 4;
				numLineBits = getBits(binary, p, 4, 4);
				c += 4;
			}
		}
		shapeRecords.push(record);
	}
	c += 6; // end record
	if(attribute) {
		result[attribute] = shapeRecords;
	}
	
	p += Math.ceil(c / 8);
	return p - pos;
};

var TagDefineShape = function(binary, pos, length, type, delayEval, dataStore) {
	this.id = getUI16(binary, pos);
	setProperties(this, function() {
		var result = {};
		result.bounds = [];
		var len = getRect(binary, pos + 2, result.bounds);
		parseShapeWithStyle(binary, pos + 2 + len, 1, result);
		
		return result;
	}, ["bounds", "fillStyles", "lineStyles", "shapes"], delayEval);
};
TagDefineShape.prototype.type = TagDefine.TypeTagDefineShape;

var TagDefineShape2 = function(binary, pos, length, type, delayEval, dataStore) {
	this.id = getUI16(binary, pos);
	setProperties(this, function() {
		var result = {};
		result.bounds = [];
		var len = getRect(binary, pos + 2, result.bounds);
		parseShapeWithStyle(binary, pos + 2 + len, 2, result);
		
		return result;
	}, ["bounds", "fillStyles", "lineStyles", "shapes"], delayEval);
};
TagDefineShape2.prototype.type = TagDefine.TypeTagDefineShape2;

var TagDefineShape3 = function(binary, pos, length, type, delayEval, dataStore) {
	this.id = getUI16(binary, pos);
	setProperties(this, function() {
		var result = {};
		result.bounds = [];
		var len = getRect(binary, pos + 2, result.bounds);
		parseShapeWithStyle(binary, pos + 2 + len, 3, result);
		
		return result;
	}, ["bounds", "fillStyles", "lineStyles", "shapes"], delayEval);
};
TagDefineShape3.prototype.type = TagDefine.TypeTagDefineShape3;


/*//////////////////
  parser/tag_bitmap.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var TagJPEGTables = function(binary, pos, length, type, delayEval, dataStore) {
	setProperty(this, "jpegData", function() {
		return binary.slice(pos, pos + length);
	}, delayEval);
	// notify myself to ImageManager
	ImageManager.jpegTables = this;
};
TagJPEGTables.prototype.type = TagDefine.TypeTagJPEGTables;

var TagDefineBits = function(binary, pos, length, type, delayEval, dataStore) {
	this.id = getUI16(binary, pos);
	setProperty(this, "img", function() {
		var jpegData = binary.slice(pos + 2, pos + length);
		if(!ImageManager.jpegTables) {
			EngineLogW("DefineBits warning: not found JPEGTables");
		}
		return ImageManager.createImageFromJpegTableAndBits(ImageManager.jpegTables, jpegData, dataStore);
	}, false);
};
TagDefineBits.prototype.type = TagDefine.TypeTagDefineBits;

var TagDefineBitsJPEG2 = function(binary, pos, length, type, delayEval, dataStore) {
	this.id = getUI16(binary, pos);
	setProperty(this, "img", function() {
		var imageData = binary.slice(pos + 2, pos + length);
		return ImageManager.createImageFromJpeg(imageData, dataStore);
	}, false);
};
TagDefineBitsJPEG2.prototype.type = TagDefine.TypeTagDefineBitsJPEG2;

var TagDefineBitsJPEG3 = function(binary, pos, length, type, delayEval, dataStore) {
	this.id = getUI16(binary, pos);
	setProperty(this, "img", function() {
		var p = pos + 2;
		var alphaDataOffset = getUI32(binary, p);
		p += 4;
		var jpegData = binary.slice(p, p + alphaDataOffset);
		p += alphaDataOffset;
		var bitmapAlphaData = binary.slice(p, pos + length);
		
		return ImageManager.createImageFromJpegAndAlpha(jpegData, bitmapAlphaData, dataStore);
	}, false);
};
TagDefineBitsJPEG3.prototype.type = TagDefine.TypeTagDefineBitsJPEG3;

var TagDefineBitsLossless = function(binary, pos, length, type, delayEval, dataStore) {
	this.id = getUI16(binary, pos);
	setProperties(this, function() {
		var result = {};
		var format = binary[pos + 2];
		result.width = getUI16(binary, pos + 3);
		result.height = getUI16(binary, pos + 5);
		var p = pos + 7;
		if(format == 3) {
			var colorTableSize = binary[p] + 1;
			p++;
		}
		
		var pixelSize;
		switch(format) {
			case 3: pixelSize = 8; break;
			case 4: pixelSize = 16; break;
			case 5: pixelSize = 24; break;
		}
		result.img = ImageManager.createImageFromLossless(binary.slice(p, pos + length), pixelSize, colorTableSize, result.width, result.height, false);
		return result;
	}, ["width", "height", "img"], delayEval);
};
TagDefineBitsLossless.prototype.type = TagDefine.TypeTagDefineBitsLossless;

var TagDefineBitsLossless2 = function(binary, pos, length, type, delayEval, dataStore) {
	this.id = getUI16(binary, pos);
	setProperties(this, function() {
		var result = {};
		var format = binary[pos + 2];
		result.width = getUI16(binary, pos + 3);
		result.height = getUI16(binary, pos + 5);
		var p = pos + 7;
		if(format == 3) {
			var colorTableSize = binary[p] + 1;
			p++;
		}
		
		var pixelSize;
		switch(format) {
			case 3: pixelSize = 8; break;
			case 4: pixelSize = 16; break;
			case 5: pixelSize = 32; break;
		}
		
		result.img = ImageManager.createImageFromLossless(binary.slice(p, pos + length), pixelSize, colorTableSize, result.width, result.height, true);
		return result;
	}, ["width", "height", "img"], delayEval);
};
TagDefineBitsLossless2.prototype.type = TagDefine.TypeTagDefineBitsLossless2;


/*//////////////////
  parser/tag_morph.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var getMorphGradient = function(binary, pos, records) {
	var p = pos;
	var num = binary[p];
	p++;
	for(var i = 0; i < num; i++) {
		var record = {};
		record.startRatio = binary[p];
		p++;
		record.startColor = getRGBA(binary, p);
		p += 4;
		record.endRatio = binary[p];
		p++;
		record.endColor = getRGBA(binary, p);
		p += 4;
		records.push(record);
	}
	return p - pos;
};

var parseMorphFillStyleArray = function(binary, pos, result) {
	var p = pos;
	
	var fillStyleCount = binary[p];
	p++;
	if(fillStyleCount == 0xff) {
		fillStyleCount = getUI16(binary, p);
		p += 2;
	}
	var len;
	var fillStyles = [];
	for(var i = 0; i < fillStyleCount; i++) {
		var fillStyle = {};
		
		var type = binary[p];
		p++;
		fillStyle.type = type;
		if(type == 0x00) {
			fillStyle.start = getRGBA(binary, p);
			p += 4;
			fillStyle.end = getRGBA(binary, p);
			p += 4;
		} else if(type == 0x10 || type == 0x12) {
			fillStyle.start = [];
			fillStyle.end = [];
			fillStyle.gradient = {records: []};
			len = getMatrix(binary, p, fillStyle.start);
			p += len;
			len = getMatrix(binary, p, fillStyle.end);
			p += len;
			len = getMorphGradient(binary, p, fillStyle.gradient.records);
			p += len;
		} else if(type == 0x40 || type == 0x41 || type == 0x42 || type == 0x43) {
			fillStyle.bitmapId = getUI16(binary, p);
			p += 2;
			fillStyle.startMatrix = [];
			fillStyle.endMatrix = [];
			len = getMatrix(binary, p, fillStyle.startMatrix);
			p += len;
			len = getMatrix(binary, p, fillStyle.endMatrix);
			p += len;
		} else {
			EngineLogE("DefineMorph parse: unknown type detected [" + type + "]");
		}
		
		fillStyles.push(fillStyle);
	}
	result.fillStyles = fillStyles;
	
	return p - pos;
};
var parseMorphLineStyleArray = function(binary, pos, result) {
	var p = pos;
	
	var lineStyleCount = binary[p];
	p++;
	if(lineStyleCount == 0xff) {
		lineStyleCount = getUI16(binary, p);
		p += 2;
	}
	var len;
	var lineStyles = [];
	for(var i = 0; i < lineStyleCount; i++) {
		var lineStyle = {};
		lineStyle.startWidth = getUI16(binary, p);
		p += 2;
		lineStyle.endWidth = getUI16(binary, p);
		p += 2;
		lineStyle.startColor = getRGBA(binary, p);
		p += 4;
		lineStyle.endColor = getRGBA(binary, p);
		p += 4;
		lineStyles.push(lineStyle);
	}
	result.lineStyles = lineStyles;
	return p - pos;
};

var TagDefineMorphShape = function(binary, pos, length, type, delayEval, dataStore) {
	this.id = getUI16(binary, pos);
	setProperties(this, function() {
		var result = {};
		var p = pos + 2;
		var len;
		result.startBounds = [];
		len = getRect(binary, p, result.startBounds);
		p += len;
		result.endBounds = [];
		len = getRect(binary, p, result.endBounds);
		p += len;
		result.offset = getUI32(binary, p);
		p += 4;
		len = parseMorphFillStyleArray(binary, p, result);
		p += len;
		len = parseMorphLineStyleArray(binary, p, result);
		p += len;
		len = parseShape(binary, p, 1, result, "startEdges");
		p += len;
		len = parseShape(binary, p, 1, result, "endEdges");
		p += len;

		//
		if (result.startEdges.length - 1 == result.endEdges.length && result.endEdges[0] != EdgeDefine.TypeStyleChange) {
			result.endEdges.unshift(result.startEdges[0]);
		}

		return result;
	}, ["startBounds", "endBounds", "offset", "fillStyles", "lineStyles", "startEdges", "endEdges"], delayEval);
};
TagDefineMorphShape.prototype.type = TagDefine.TypeTagDefineMorphShape;


/*//////////////////
  parser/tag_font_text.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var getTextRecord = function(binary, pos, version, glyphBits, advanceBits, record) {
	var p = pos;
	
	var f = binary[p];
	var flagHasFont		= f & 0x08;
	var flagHasColor	= f & 0x04;
	var flagHasYOffset	= f & 0x02;
	var flagHasXOffset	= f & 0x01;
	p++;
	
	record.fontId = null;
	if(flagHasFont) {
		record.fontId = getUI16(binary, p);
		p += 2;
	}
	record.color = null;
	if(flagHasColor) {
		if(version == 2) {
			record.color = getRGBA(binary, p);
			p += 4;
		} else {
			record.color = getRGB(binary, p);
			p += 3;
		}
	}
	record.x = null;
	if(flagHasXOffset) {
		record.x = getSI16(binary, p);
		p += 2;
	}
	record.y = null;
	if(flagHasYOffset) {
		record.y = getSI16(binary, p);
		p += 2;
	}
	record.height = null;
	if(flagHasFont) {
		record.height = getUI16(binary, p);
		p += 2;
	}
	var count = binary[p];
	p++;
	var c = 0;
	var glyphs = [];
	for(var i = 0; i < count; i++) {
		var glyph = {};
		glyph.index = getBits(binary, p, c, glyphBits);
		c += glyphBits;
		glyph.advance = sb2int(getBits(binary, p, c, advanceBits), advanceBits);
		c += advanceBits;
		glyphs.push(glyph);
	}
	record.glyphs = glyphs;
	p += Math.ceil(c / 8);
	
	return p - pos;
};

var TagDefineFont = function(binary, pos, length, type, delayEval, dataStore) {
	this.id = getUI16(binary, pos);
	setProperty(this, "shapes", function() {
		var p = pos + 2;
		
		var count = getUI16(binary, p);
		p += count;
		count /= 2;
		
		var shapeTable = [];
		var len;
		for(var i = 0; i < count; i++) {
			var shape = [];
			len = parseShape(binary, p, 1, shape);
			p += len;
			shapeTable.push(shape);
		}
		return shapeTable;
	}, delayEval);
};
TagDefineFont.prototype.type = TagDefine.TypeTagDefineFont;

var TagDefineFont2 = function(binary, pos, length, type, delayEval, dataStore) {
	this.id = getUI16(binary, pos);
	setProperties(this, function() {
		var result = {};
		var p = pos + 2;
		var len;
		
		var f = binary[p];
		var fontFlagsHasLayout		= f & 0x80;
		var fontFlagsShiftJIS		= f & 0x40;
		var fontFlagsSmallText		= f & 0x20;
		var fontFlagsANSI			= f & 0x10;
		var fontFlagsWideOffsets	= f & 0x08;
		var fontFlagsWideCodes		= f & 0x04;
		var fontFlagsItalic			= f & 0x02;
		var fontFlagsBlod			= f & 0x01;
		p++;
		// pass language code
		p++;
		var fontNameLen = binary[p];
		p++;
		var fontName = getStringSJIS(binary, p, fontNameLen)[0];
        result.fontName = fontName;
		p += fontNameLen;
		var numGlyphs = getUI16(binary, p);
		p += 2;
		if(fontFlagsWideOffsets) { // FontFlagWideOffsets
			p += 4 * (numGlyphs + 1);
		} else {
			p += 2 * (numGlyphs + 1);
		}
		var shapeTable = [];
		for(var i = 0; i < numGlyphs; i++) {
			var shape = [];
			len = parseShape(binary, p, 1, shape);
			p += len;
			shapeTable.push(shape);
		}
		result.shapeTable = shapeTable;
		var codeTable = [];
		for(var i = 0; i < numGlyphs; i++) {
            /*
			var lower = binary[p];
			p++;
			var upper = 0;
			if(fontFlagsWideCodes) {
				upper = binary[p];
				p++;
			}
			if(upper == 0) {
				codeTable.push(lower);
			} else {
				var s = toStringFromShiftJIS([upper, lower]);
				codeTable.push(s.charCodeAt(0));
			}*/
            if (fontFlagsWideCodes) {
                codeTable.push(getUI16(binary, p));
                p += 2;
            } else {
                codeTable.push(binary[p]);
                p++;
            }
		}
		result.codeTable = codeTable;
		result.fontAscent = null;
		result.fontDescent = null;
		result.fontLeading = null;
		result.fontAdvanceTable = null;
		if(fontFlagsHasLayout) {
			result.fontAscent = getUI16(binary, p);
			p += 2;
			result.fontDescent = getUI16(binary, p);
			p += 2;
			result.fontLeading = getUI16(binary, p);
			p += 2;
			var fontAdvanceTable = [];
			for(var i = 0; i < numGlyphs; i++) {
				fontAdvanceTable.push(getUI16(binary, p));
				p += 2;
			}
			result.fontAdvanceTable = fontAdvanceTable;
			for(var i = 0; i < numGlyphs; i++) {
				// omit
				var rect = [];
				len = getRect(binary, p, rect);
				p += len;
			}
			var kerningCount = getUI16(binary, p);
			p += 2;
			if(kerningCount != 0) {
				EngineLogW("DefineFont2 parse: wrong format detected");
			}
		}
		return result;
	}, ["shapeTable", "codeTable", "fontName", "fontAscent", "fontDescent", "fontLeading", "fontAdvanceTable"], delayEval);
};
TagDefineFont2.prototype.type = TagDefine.TypeTagDefineFont2;

var TagDefineText = function(binary, pos, length, type, delayEval, dataStore) {
	this.id = getUI16(binary, pos);
	setProperties(this, function() {
		var result = {};
		var p = pos + 2;
		var len;
		
		result.bounds = [];
		len = getRect(binary, p, result.bounds);
		p += len;
		
		result.matrix = [];
		len = getMatrix(binary, p, result.matrix);
		p += len;
		
		var glyphBits = binary[p];
		p++;
		var advanceBits = binary[p];
		p++;
		var records = [];
		while(binary[p]) {
			var record = {};
			len = getTextRecord(binary, p, 1, glyphBits, advanceBits, record);
			p += len;
			records.push(record);
		}
		result.records = records;
		return result;
	}, ["bounds", "matrix", "records"], delayEval);
};
TagDefineText.prototype.type = TagDefine.TypeTagDefineText;

var TagDefineText2 = function(binary, pos, length, type, delayEval, dataStore) {
	this.id = getUI16(binary, pos);
	setProperties(this, function() {
		var result = {};
		var p = pos + 2;
		var len;
		
		result.bounds = [];
		len = getRect(binary, p, result.bounds);
		p += len;
		
		result.matrix = [];
		len = getMatrix(binary, p, result.matrix);
		p += len;
		
		var glyphBits = binary[p];
		p++;
		var advanceBits = binary[p];
		p++;
		var records = [];
		while(binary[p]) {
			var record = {};
			len = getTextRecord(binary, p, 2, glyphBits, advanceBits, record);
			p += len;
			records.push(record);
		}
		result.records = records;
		return result;
	}, ["bounds", "matrix", "records"], delayEval);
};
TagDefineText2.prototype.type = TagDefine.TypeTagDefineText2;

var TagDefineEditText = function(binary, pos, length, type, delayEval, dataStore) {
	this.id = getUI16(binary, pos);
	setProperties(this, function() {
		var result = {};
		var p = pos + 2;
		var len;
		
		result.bounds = [];
		len = getRect(binary, p, result.bounds);
		p += len;
		
		var f = binary[p];
		var hasText			= f & 0x80;
		result.wordWrap		= !!(f & 0x40);
		result.multiline	= !!(f & 0x20);
		var password		= f & 0x10;
		var readonly		= f & 0x08;
		var hasTextColor	= f & 0x04;
		var hasMaxLength	= f & 0x02;
		var hasFont			= f & 0x01;
		p++;
		f = binary[p];
		var hasFontClass	= f & 0x80;
		var autoSize		= f & 0x40;
		var hasLayout		= f & 0x20;
		var noSelect		= f & 0x10;
		var border			= f & 0x08;
		var wasStatic		= f & 0x04;
		var html			= f & 0x02;
		result.useOutlines	= !!(f & 0x01);
		p++;
		
		result.fontId = null;
		if(hasFont) {
			result.fontId = getUI16(binary, p);
			p += 2;
		}
		if(hasFontClass) {
			var fontClass = getString(binary, p);
			p += fontClass.length;
		}
		result.height = null;
		if(hasFont) {
			result.height = getUI16(binary, p);
			p += 2;
		}
		result.color = null;
		if(hasTextColor) {
			result.color = getRGBA(binary, p);
			p += 4;
		}
		result.maxLength = null;
		if(hasMaxLength) {
			result.maxLength = getUI16(binary, p);
			p += 2;
		}
		result.align = null;
		result.leftMargin = null;
		result.rightMargin = null;
		result.indent = null;
		result.leading = null;
		if(hasLayout) {
			result.align = binary[p];
			p++;
			result.leftMargin = getUI16(binary, p);
			p += 2;
			result.rightMargin = getUI16(binary, p);
			p += 2;
			result.indent = getUI16(binary, p);
			p += 2;
			result.leading = getUI16(binary, p);
			p += 2;
		}
		result.variableName = getString(binary, p);
		p += result.variableName.length+1;
		result.initialText = hasText? getStringSJIS(binary, p)[0] : "";
		return result;
	}, ["bounds", "wordWrap", "multiline", "useOutlines", "fontId", "height", "color", "maxLength", "align", "leftMargin", "rightMargin", "indent", "leading", "variableName", "initialText"], delayEval);
};
TagDefineEditText.prototype.type = TagDefine.TypeTagDefineEditText;


/*//////////////////
  parser/tag_button.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var getButtonRecord = function(binary, pos, version, record) {
	var p = pos;
	var len;
	
	var f = binary[pos];
	var hasBlendMode	= f & 0x20;
	var hasFilterList	= f & 0x10;
	record.stateHitTest	= !!(f & 0x08);
	record.stateDown	= !!(f & 0x04);
	record.stateOver	= !!(f & 0x02);
	record.stateUp		= !!(f & 0x01);
	p++;
	
	record.characterId = getUI16(binary, p);
	p += 2;
	record.depth = getUI16(binary, p);
	p += 2;
	record.matrix = [];
	len = getMatrix(binary, p, record.matrix);
	p += len;
	record.colorTransform = null;
	if(version == 2) {
		record.colorTransform = [];
		len = getCxform(binary, p, record.colorTransform);
		p += len;
		if(hasFilterList) {
			EngineLogE("ButtonRecord parse error: hasFilterList is not supported in Flash 4");
		}
		if(hasBlendMode) {
			EngineLogE("ButtonRecord parse error: hasBlendMode is not supported in Flash 4");
		}
	}
	
	return p - pos;
};

var getButtonCondAction = function(binary, pos, action) {
	var p = pos;
	
	p += 2;
	var f = binary[p];
	action.idleToOverDown 		= !!(f & 0x80);
	action.outDownToIdle 		= !!(f & 0x40);
	action.outDownToOverDown	= !!(f & 0x20);
	action.overDownToOutDown	= !!(f & 0x10);
	action.overDownToOverUp		= !!(f & 0x08);
	action.overUpToOverDown		= !!(f & 0x04);
	action.overUpToIdle 		= !!(f & 0x02);
	action.idleToOverUp 		= !!(f & 0x01);
	p++;
	f = binary[p];
	action.overDownToIdle		= !!(f & 0x01);
	action.keyPress = getBits(binary, p, 0, 7);
	p++;
	
	action.actions = [];
	var len = getActionRecord(binary, p, action.actions);
	p += len;
	
	return p - pos;
};

var TagDefineButton = function(binary, pos, length, type, delayEval, dataStore) {
	this.id = getUI16(binary, pos);
	setProperties(this, function() {
		var result = {};
		var p = pos + 2;
		var len;
		
		var characters = [];
		while(binary[p]) {
			var record = {};
			len = getButtonRecord(binary, p, 1, record);
			p += len;
			characters.push(record);
		}
		result.characters = characters;
		p++;
		
		result.actions = [];
		getActionRecord(binary, p, result.actions);
		
		return result;
	}, ["characters", "actions"], delayEval);
};
TagDefineButton.prototype.type = TagDefine.TypeTagDefineButton;

var TagDefineButton2 = function(binary, pos, length, type, delayEval, dataStore) {
	this.id = getUI16(binary, pos);
	setProperties(this, function() {
		var result = {};
		var p = pos + 2;
		var len;
		
		// pass flags
		p++;
		
		var actionOffset = getUI16(binary, p);
		p += 2;
		
		var characters = [];
		while(binary[p]) {
			var record = {};
			len = getButtonRecord(binary, p, 2, record);
			p += len;
			characters.push(record);
		}
		result.characters = characters;
		p++;
		
		var actions = [];
		if(actionOffset) {
			var hasNext;
			do {
				var action = {};
				hasNext = getUI16(binary, p);
				len = getButtonCondAction(binary, p, action);
				p += len;
				actions.push(action);
			} while(hasNext);
		}
		result.actions = actions;
		
		return result;
	}, ["characters", "actions"], delayEval);
};
TagDefineButton2.prototype.type = TagDefine.TypeTagDefineButton2;



/*//////////////////
  parser/tag_sprite.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var TagDefineSprite = function(binary, pos, length, type, delayEval, dataStore) {
	this.id = getUI16(binary, pos);
	setProperties(this, function() {
		var result = {};
		var p = pos + 2;
		result.frameCount = getUI16(binary, p);
		p += 2;
		
		var tags = [];
		while(p < pos + length) {
			var feed = getUI16(binary, p);
			var size = 2;
			var tagType = feed >> 6;
			
			var tagLength = feed & 0x3F;
			if(tagLength == 0x3f) {
				tagLength = getUI32(binary, p + 2);
				size += 4;
			}
			
			var tagClass = TagFactory[tagType] || TagGeneral;
			var instance = new tagClass(binary, p + size, tagLength, tagType);
			tags.push(instance);
			p += tagLength + size;
		}
		
		result.tags = tags;
		return result;
	}, ["frameCount", "tags"], delayEval);
};
TagDefineSprite.prototype.type = TagDefine.TypeTagDefineSprite;


/*//////////////////
  parser/tag_factory.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var TagGeneral = function(binary, pos, length, type) {
	EngineLogW("parser: not supported tag detected [" + type +"]");
	this.type = type;
};

var TagFactory = {
	"0":	TagEnd,
	"1":	TagShowFrame,
	"2":	TagDefineShape,
	"4":	TagPlaceObject,
	"6":	TagDefineBits,
	"7":	TagDefineButton,
	"8":	TagJPEGTables,
	"9":	TagSetBackgroundColor,
	"10":	TagDefineFont,
	"11":	TagDefineText,
	"12":	TagDoAction,
	"20":	TagDefineBitsLossless,
	"21":	TagDefineBitsJPEG2,
	"22":	TagDefineShape2,
	"26":	TagPlaceObject2,
	"28":	TagRemoveObject2,
	"32":	TagDefineShape3,
	"33":	TagDefineText2,
	"34":	TagDefineButton2,
	"35":	TagDefineBitsJPEG3,
	"36":	TagDefineBitsLossless2,
	"37":	TagDefineEditText,
	"39":	TagDefineSprite,
	"43":	TagFrameLabel,
	"46":	TagDefineMorphShape,
	"48":	TagDefineFont2
};


/*//////////////////
  parser/image_manager.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// static class
var ImageManager = {
	jpegTables: null,

	createImageFromLossless: function(sdata, pixelSize, tableSize, width, height, alpha) {
		var data = (new Zlib.Inflate(sdata)).decompress();
		
		var canvas = document.createElement("canvas");
		canvas.width = width;
		canvas.height = height;
		var ctx = canvas.getContext('2d');
		var output = ctx.createImageData(width, height);
		var outputData = output.data;
		var outputIndex = 0;
		var inputIndex = 0;

		if (pixelSize == 8) {
			var aryR = new Array(tableSize);
			var aryG = new Array(tableSize);
			var aryB = new Array(tableSize);
			var aryA = new Array(tableSize);
			if(alpha) {
				// SWF files store multiplied values for lossless, therefore we need to convert to non-multiplied values.
				if(this.usePremultipliedAlpha) {
					// BUT, native android browser accepts multiplied values in violation of Canvas specification.
					for (var i = 0; i < tableSize; i++) {
						aryR[i] = data[inputIndex++];
						aryG[i] = data[inputIndex++];
						aryB[i] = data[inputIndex++];
						aryA[i] = data[inputIndex++];
					}
				} else {
					for (var i = 0; i < tableSize; i++) {
						var r = data[inputIndex++];
						var g = data[inputIndex++];
						var b = data[inputIndex++];
						var a = data[inputIndex++];
						if(a==255 || a==0) {
							aryR[i] = r;
							aryG[i] = g;
							aryB[i] = b;
						} else {
							var aInverse = 255/a;
							aryR[i] = ~~(r * aInverse);
							aryG[i] = ~~(g * aInverse);
							aryB[i] = ~~(b * aInverse);
						}
						aryA[i] = a;
					}
				}
			} else {
				for (var i = 0; i < tableSize; i++) {
					aryR[i] = data[inputIndex++];
					aryG[i] = data[inputIndex++];
					aryB[i] = data[inputIndex++];
					aryA[i] = 255;
				}
			}

			var paddingWidth = Math.ceil(width / 4.0) * 4;
			var buff = data.slice ? data.slice(inputIndex) : data.subarray(inputIndex);

			var colorIndex;
			for (var y = 0; y < height; y++) {
				for (var x = 0, index = y * paddingWidth; x < width; x++, index++) {
					colorIndex = buff[index] & 0xFF;
					outputData[outputIndex++] = aryR[colorIndex];
					outputData[outputIndex++] = aryG[colorIndex];
					outputData[outputIndex++] = aryB[colorIndex];
					outputData[outputIndex++] = aryA[colorIndex];
				}
			}
		} else if (pixelSize == 16) {
			var usePadding = width % 2 != 0;
			for (var y = 0; y < height; y++) {
				for (var x = 0; x < width; x++) {
					var rgb15 = (data[inputIndex] << 8) + data[inputIndex + 1];
					inputIndex += 2;
					var r5 = (rgb15 & 0x7C00) >>> 10; // 01111100 00000000
					var g5 = (rgb15 & 0x03E0) >>> 5;  // 00000011 11100000
					var b5 = (rgb15 & 0x001F) >>> 0;  // 00000000 00011111
					outputData[outputIndex++] = (r5 << 3) + (r5 >>> 2);
					outputData[outputIndex++] = (g5 << 3) + (g5 >>> 2);
					outputData[outputIndex++] = (b5 << 3) + (b5 >>> 2);
					outputData[outputIndex++] = 255;
				}
				if (usePadding) {
					inputIndex += 2;
				}
			}
		} else if (pixelSize == 24) {
			for (var y = 0; y < height; y++) {
				for (var x = 0; x < width; x++) {
					inputIndex++;
					outputData[outputIndex++] = data[inputIndex++];
					outputData[outputIndex++] = data[inputIndex++];
					outputData[outputIndex++] = data[inputIndex++];
					outputData[outputIndex++] = 255;
				}
			}
		} else if (pixelSize == 32) {
			if(this.usePremultipliedAlpha) {
				// ARGB -> RGBA
				for (var y = 0; y < height; y++) {
					for (var x = 0; x < width; x++) {
						var a = data[inputIndex++];
						outputData[outputIndex++] = data[inputIndex++];
						outputData[outputIndex++] = data[inputIndex++];
						outputData[outputIndex++] = data[inputIndex++];
						outputData[outputIndex++] = a;
					}
				}
			} else {
				// Need to convert from non-multiplied to multiplied.
				for (var y = 0; y < height; y++) {
					for (var x = 0; x < width; x++) {
						var a = data[inputIndex++];
						if(a == 255 || a == 0) {
							outputData[outputIndex++] = data[inputIndex++];
							outputData[outputIndex++] = data[inputIndex++];
							outputData[outputIndex++] = data[inputIndex++];
						} else {
							var aInverse = 255/a;
							for (var i=0; i < 3; i++) {
								var val = ~~(data[inputIndex++] * aInverse);
								outputData[outputIndex++] = 255 > val ? val:255;
							};
						}
						outputData[outputIndex++] = a;
					}
				}
			}
		}

		ctx.putImageData(output, 0, 0);
		return canvas;
	},
	createImageFromJpeg: function(sdata, dataStore) {
		var data = ImageManager.correctJpegImageData(sdata);
		return ImageManager.createImageFromJpegData(data, dataStore);
	},
	createImageFromJpegAndAlpha: function(sdata, alpha, dataStore) {
		var data = ImageManager.correctJpegImageData(sdata);
		var alphaData = (new Zlib.Inflate(alpha)).decompress();

		var b64_string = ImageManager.arrayToBase64String(data);
		var image = document.createElement("img");
		var canvas = document.createElement("canvas");
		// to check the image is loaded or not
		canvas.width = 0;
		canvas.height = 0;

		var usePremultipliedAlpha = this.usePremultipliedAlpha;
		image.onload = function() {
			var width = image.width;
			var height = image.height;

			canvas.width = width;
			canvas.height = height;
			var ctx = canvas.getContext('2d');
			ctx.drawImage(image, 0, 0);
			var imageData = ctx.getImageData(0, 0, width, height);
			var data = imageData.data;

			var len = width*height;
			var alpha;
			
			// The raw image data is already pre-multiplied by alpha/255
			if(usePremultipliedAlpha) {
				// RGB values will be divided by alpha/255 implicitly in putImageData
				// and can be larger than 255 by this implicit operation.
				// To make sure that RGB values will be not larger than 255 after putImageData,
				// reduce the values if they are larger than the alpha value
				for(var i = 0, j = 3; i < len; i++, j+=4) {
					alpha = data[j] = alphaData[i];
					if(alpha == 0) {
						data[j-1] = data[j-2] = data[j-3] = 0;
					} else if(alpha != 255) {
						if(alpha < data[j-1]) {
							data[j-1] = alpha;
						}
						if(alpha < data[j-2]) {
							data[j-2] = alpha;
						}
						if(alpha < data[j-3]) {
							data[j-3] = alpha;
						}
					}
				}
			} else {
				var aInverse;
				for(var i = 0, j = 3; i < len; i++, j+=4) {
					alpha = data[j] = alphaData[i];
					if (alpha != 255 && alpha != 0) {
						// convert premultiplied RGBA to non-premultiplied RGBA
						aInverse = 255/alpha;
						data[j-1] = ~~(data[j-1]*aInverse);
						data[j-2] = ~~(data[j-2]*aInverse);
						data[j-3] = ~~(data[j-3]*aInverse);
					}
				}
			}
			ctx.putImageData(imageData, 0, 0);
			--dataStore.loadingImageCount;
		};
		image.src = "data:image/jpeg;base64,"+ b64_string;
		++dataStore.loadingImageCount;

		// Android default browser on Android 3.x often never calls image.onload function
		// if doesn't call setTimeout function in this function (#544)
		setTimeout(function() {}, 0);

		return canvas;
	},
	createImageFromJpegTableAndBits: function(table, sdata, dataStore) {
		var data;
		if (table == null || table.length < 4) {
			data = sdata;
		} else {
			table = table.jpegData;
			data = table.slice(0, table.length - 2).concat(sdata.slice(2));
		}

		return ImageManager.createImageFromJpegData(data, dataStore);
	},
	createImageFromJpegData: function(data, dataStore) {
		var image = document.createElement("img");
		// to check the image is loaded or not
		
		image.onload = function() {
			--dataStore.loadingImageCount;
		};
		image.src = "data:image/jpeg;base64," + ImageManager.arrayToBase64String(data);
		++dataStore.loadingImageCount;

		return image;
	},
	correctJpegImageData: function(sdata) {
		var data;
		if (sdata[0] == 0xFF && sdata[1] == 0xD9 && sdata[2] == 0xFF
				&& sdata[3] == 0xD8) {
			// erroneous header
			data = sdata.slice(4);
		} else {
			data = [];
			var i = 0;
			if (sdata[i] == 0xFF && sdata[i + 1] == 0xD8) {
				data = data.concat(sdata.slice(i, i + 2));
				i += 2;
				while (i < sdata.length) {
					if (sdata[i] == 0xFF) {
						if (sdata[i + 1] == 0xD9 && sdata[i + 2] == 0xFF && sdata[i + 3] == 0xD8) {
							i += 4;
							data = data.concat(sdata.slice(i));
							break;
						} else if(sdata[i+1] == 0xDA) {
							data = data.concat(sdata.slice(i));
							break;
						} else {
							var segmentLength = (sdata[i + 2] << 8) + (sdata[i + 3] & 0xFF);
							data = data.concat(sdata.slice(i, i + segmentLength + 2));
							i += segmentLength + 2;
						}
					} else {
						EngineLogE("JPEG marker invalid: i=" + i);
					}
				}
			} else {
				EngineLogE("SOI missing");
			}
		}
		return data;
	},
	arrayToBase64String: function(arr) {
		var ret = [];
		var SIZE = 10000;

		// split to avoid error on iPhone when array size is more than 150k..200k
		var max = Math.ceil(arr.length / SIZE);
		for(var i = 0; i < max; i++) {
			ret.push(String.fromCharCode.apply(null, arr.slice(i * SIZE, Math.min((i + 1) * SIZE, arr.length))));
		}
		return btoa(ret.join(""));
	}
};

// use delayed evaluation just in case,
// because Document#createElement() might be executed
// before DOM is not initialized
ImageManager.__defineGetter__("usePremultipliedAlpha", function() {
	delete this.usePremultipliedAlpha;

	var canvas = document.createElement("canvas");
	canvas.width = canvas.height = 1;
	var ctx = canvas.getContext("2d");
	var output = ctx.createImageData(1, 1);
	var data = output.data;
	data[0] = data[3] = 128;
	ctx.putImageData(output, 0, 0);
	return this.usePremultipliedAlpha = (ctx.getImageData(0, 0, 1, 1).data[0] == 255);
});


/*//////////////////
  parser/inflate.min.js
//////////////////*/
/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
(function() {'use strict';var aa=this;function g(a,c,b){a=a.split(".");b=b||aa;!(a[0]in b)&&b.execScript&&b.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&void 0!==c?b[d]=c:b=b[d]?b[d]:b[d]={}}Math.floor(2147483648*Math.random()).toString(36);var j="function"===typeof Uint8Array&&"function"===typeof Uint16Array&&"function"===typeof Uint32Array;var ba=new (j?Uint8Array:Array)(256),l;for(l=0;256>l;++l){for(var ca=ba,da=l,n=l,o=n,q=7,n=n>>>1;n;n>>>=1)o<<=1,o|=n&1,--q;ca[da]=(o<<q&255)>>>0};var ea=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,
2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,
2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,
2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,
3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,
936918E3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];j&&new Uint32Array(ea);function r(a){var c=a.length,b=0,d=Number.POSITIVE_INFINITY,f,e,h,i,p,v,w,k,m;for(k=0;k<c;++k)a[k]>b&&(b=a[k]),a[k]<d&&(d=a[k]);f=1<<b;e=new (j?Uint32Array:Array)(f);h=1;i=0;for(p=2;h<=b;){for(k=0;k<c;++k)if(a[k]===h){v=0;w=i;for(m=0;m<h;++m)v=v<<1|w&1,w>>=1;for(m=v;m<f;m+=p)e[m]=h<<16|k;++i}++h;i<<=1;p<<=1}return[e,b,d]};var s=[],t;for(t=0;288>t;t++)switch(!0){case 143>=t:s.push([t+48,8]);break;case 255>=t:s.push([t-144+400,9]);break;case 279>=t:s.push([t-256+0,7]);break;case 287>=t:s.push([t-280+192,8]);break;default:throw"invalid literal: "+t;}function u(a,c){this.length=a;this.u=c}
function fa(a){switch(!0){case 3===a:return[257,a-3,0];case 4===a:return[258,a-4,0];case 5===a:return[259,a-5,0];case 6===a:return[260,a-6,0];case 7===a:return[261,a-7,0];case 8===a:return[262,a-8,0];case 9===a:return[263,a-9,0];case 10===a:return[264,a-10,0];case 12>=a:return[265,a-11,1];case 14>=a:return[266,a-13,1];case 16>=a:return[267,a-15,1];case 18>=a:return[268,a-17,1];case 22>=a:return[269,a-19,2];case 26>=a:return[270,a-23,2];case 30>=a:return[271,a-27,2];case 34>=a:return[272,a-31,2];case 42>=
a:return[273,a-35,3];case 50>=a:return[274,a-43,3];case 58>=a:return[275,a-51,3];case 66>=a:return[276,a-59,3];case 82>=a:return[277,a-67,4];case 98>=a:return[278,a-83,4];case 114>=a:return[279,a-99,4];case 130>=a:return[280,a-115,4];case 162>=a:return[281,a-131,5];case 194>=a:return[282,a-163,5];case 226>=a:return[283,a-195,5];case 257>=a:return[284,a-227,5];case 258===a:return[285,a-258,0];default:throw"invalid length: "+a;}}var x=[],y,z;for(y=3;258>=y;y++)z=fa(y),x[y]=z[2]<<24|z[1]<<16|z[0];
var ga=j?new Uint32Array(x):x;
u.prototype.B=function(a){switch(!0){case 1===a:a=[0,a-1,0];break;case 2===a:a=[1,a-2,0];break;case 3===a:a=[2,a-3,0];break;case 4===a:a=[3,a-4,0];break;case 6>=a:a=[4,a-5,1];break;case 8>=a:a=[5,a-7,1];break;case 12>=a:a=[6,a-9,2];break;case 16>=a:a=[7,a-13,2];break;case 24>=a:a=[8,a-17,3];break;case 32>=a:a=[9,a-25,3];break;case 48>=a:a=[10,a-33,4];break;case 64>=a:a=[11,a-49,4];break;case 96>=a:a=[12,a-65,5];break;case 128>=a:a=[13,a-97,5];break;case 192>=a:a=[14,a-129,6];break;case 256>=a:a=[15,
a-193,6];break;case 384>=a:a=[16,a-257,7];break;case 512>=a:a=[17,a-385,7];break;case 768>=a:a=[18,a-513,8];break;case 1024>=a:a=[19,a-769,8];break;case 1536>=a:a=[20,a-1025,9];break;case 2048>=a:a=[21,a-1537,9];break;case 3072>=a:a=[22,a-2049,10];break;case 4096>=a:a=[23,a-3073,10];break;case 6144>=a:a=[24,a-4097,11];break;case 8192>=a:a=[25,a-6145,11];break;case 12288>=a:a=[26,a-8193,12];break;case 16384>=a:a=[27,a-12289,12];break;case 24576>=a:a=[28,a-16385,13];break;case 32768>=a:a=[29,a-24577,
13];break;default:throw"invalid distance";}return a};u.prototype.M=function(){var a=this.u,c=[],b=0,d;d=ga[this.length];c[b++]=d&65535;c[b++]=d>>16&255;c[b++]=d>>24;d=this.B(a);c[b++]=d[0];c[b++]=d[1];c[b++]=d[2];return c};function A(a,c){this.k=[];this.f=32768;this.e=this.h=this.b=this.n=0;this.input=j?new Uint8Array(a):a;this.p=!1;this.i=B;this.I=!1;if(c&&(c.index&&(this.b=c.index),c.L&&(this.f=c.f),c.i))this.i=c.i;switch(this.i){case C:this.a=32768;this.c=new (j?Uint8Array:Array)(32768+this.f+258);break;case B:this.a=0;this.c=new (j?Uint8Array:Array)(this.f);this.g=this.A;this.q=this.v;this.l=this.z;break;default:throw Error("invalid inflate mode");}}var C=0,B=1,ha={K:C,J:B};
A.prototype.m=function(){for(;!this.p;)this.C();return this.q()};
var D=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],E=j?new Uint16Array(D):D,F=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],G=j?new Uint16Array(F):F,H=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],I=j?new Uint8Array(H):H,J=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],K=j?new Uint16Array(J):J,L=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,
13],M=j?new Uint8Array(L):L,N=new (j?Uint8Array:Array)(288),O,P;O=0;for(P=N.length;O<P;++O)N[O]=143>=O?8:255>=O?9:279>=O?7:8;var ia=r(N),Q=new (j?Uint8Array:Array)(30),R,S;R=0;for(S=Q.length;R<S;++R)Q[R]=5;var ja=r(Q);A.prototype.C=function(){var a=this.d(3);a&1&&(this.p=!0);a>>>=1;switch(a){case 0:this.G();break;case 1:this.F();break;case 2:this.D();break;default:throw Error("unknown BTYPE: "+a);}};
A.prototype.d=function(a){for(var c=this.h,b=this.e,d=this.input,f=this.b,e;b<a;){e=d[f++];if(void 0===e)throw Error("input buffer is broken");c|=e<<b;b+=8}e=c&(1<<a)-1;this.h=c>>>a;this.e=b-a;this.b=f;return e};A.prototype.j=function(a){for(var c=this.h,b=this.e,d=this.input,f=this.b,e=a[0],a=a[1],h;b<a;){h=d[f++];if(void 0===h)throw Error("input buffer is broken");c|=h<<b;b+=8}d=e[c&(1<<a)-1];e=d>>>16;this.h=c>>e;this.e=b-e;this.b=f;return d&65535};
A.prototype.G=function(){var a=this.input,c=this.b,b=this.c,d=this.a,f,e,h,i=b.length;this.e=this.h=0;f=a[c++];if(void 0===f)throw Error("invalid uncompressed block header: LEN (first byte)");e=f;f=a[c++];if(void 0===f)throw Error("invalid uncompressed block header: LEN (second byte)");e|=f<<8;f=a[c++];if(void 0===f)throw Error("invalid uncompressed block header: NLEN (first byte)");h=f;f=a[c++];if(void 0===f)throw Error("invalid uncompressed block header: NLEN (second byte)");if(e===~(h|f<<8))throw Error("invalid uncompressed block header: length verify");
if(c+e>a.length)throw Error("input buffer is broken");switch(this.i){case C:for(;d+e>=b.length;){f=i-d;e-=f;if(j)b.set(a.subarray(c,c+f),d),d+=f,c+=f;else for(;f--;)b[d++]=a[c++];this.a=d;b=this.g();d=this.a}break;case B:for(;d+e>b.length;)b=this.g({s:2});break;default:throw Error("invalid inflate mode");}if(j)b.set(a.subarray(c,c+e),d),d+=e,c+=e;else for(;e--;)b[d++]=a[c++];this.b=c;this.a=d;this.c=b};A.prototype.F=function(){this.l(ia,ja)};
A.prototype.D=function(){function a(a,d,b){for(var c,e,f=0,f=0;f<a;)switch(c=this.j(d),c){case 16:for(c=3+this.d(2);c--;)b[f++]=e;break;case 17:for(c=3+this.d(3);c--;)b[f++]=0;e=0;break;case 18:for(c=11+this.d(7);c--;)b[f++]=0;e=0;break;default:e=b[f++]=c}return b}var c=this.d(5)+257,b=this.d(5)+1,d=this.d(4)+4,f=new (j?Uint8Array:Array)(E.length),e;for(e=e=0;e<d;++e)f[E[e]]=this.d(3);d=r(f);f=new (j?Uint8Array:Array)(c);e=new (j?Uint8Array:Array)(b);this.l(r(a.call(this,c,d,f)),r(a.call(this,b,d,
e)))};A.prototype.l=function(a,c){var b=this.c,d=this.a;this.r=a;this.w=c;for(var f=b.length-258,e,h,i;256!==(e=this.j(a));)if(256>e)d>=f&&(this.a=d,b=this.g(),d=this.a),b[d++]=e;else{e-=257;i=G[e];0<I[e]&&(i+=this.d(I[e]));e=this.j(c);h=K[e];0<M[e]&&(h+=this.d(M[e]));d>=f&&(this.a=d,b=this.g(),d=this.a);for(;i--;)b[d]=b[d++-h]}for(;8<=this.e;)this.e-=8,this.b--;this.a=d};
A.prototype.z=function(a,c){var b=this.c,d=this.a;this.r=a;this.w=c;for(var f=b.length,e,h,i;256!==(e=this.j(a));)if(256>e)d===f&&(b=this.g(),f=b.length),b[d++]=e;else{e-=257;i=G[e];0<I[e]&&(i+=this.d(I[e]));e=this.j(c);h=K[e];0<M[e]&&(h+=this.d(M[e]));d+i>=f&&(b=this.g(),f=b.length);for(;i--;)b[d]=b[d++-h]}for(;8<=this.e;)this.e-=8,this.b--;this.a=d};
A.prototype.g=function(){var a=new (j?Uint8Array:Array)(this.a-32768),c=this.a-32768,b,d,f=this.c;if(j)a.set(f.subarray(32768,a.length));else{b=0;for(d=a.length;b<d;++b)a[b]=f[b+32768]}this.k.push(a);this.n+=a.length;if(j)f.set(f.subarray(c,c+32768));else for(b=0;32768>b;++b)f[b]=f[c+b];this.a=32768;return f};
A.prototype.A=function(a){var c=this.input.length/this.b+1|0,b=this.input,d=this.c;a&&("number"===typeof a.s&&(c=a.s),"number"===typeof a.t&&(c+=a.t));2>c?(a=(b.length-this.b)/this.r[2],a=258*(a/2)|0,a=a<d.length?d.length+a:d.length<<1):a=d.length*c;j?(a=new Uint8Array(a),a.set(d)):a=d;return this.c=a};
A.prototype.q=function(){var a=0,c=this.c,b=this.k,d,f=new (j?Uint8Array:Array)(this.n+(this.a-32768)),e,h,i,p;if(0===b.length)return j?this.c.subarray(32768,this.a):this.c.slice(32768,this.a);e=0;for(h=b.length;e<h;++e){d=b[e];i=0;for(p=d.length;i<p;++i)f[a++]=d[i]}e=32768;for(h=this.a;e<h;++e)f[a++]=c[e];this.k=[];return this.buffer=f};
A.prototype.v=function(){var a,c=this.a;this.I?j?(a=new Uint8Array(c),a.set(this.c.subarray(0,c))):a=this.c.slice(0,c):a=j?this.c.subarray(0,c):this.c.slice(0,c);return this.buffer=a};function T(a,c){var b,d,f;this.input=a;this.b=0;if(c&&(c.index&&(this.b=c.index),c.f&&(b=c.f),c.o))this.o=c.o;d=a[this.b++];f=a[this.b++];switch(d&15){case U:this.method=U;break;default:throw Error("unsupported compression method");}if(0!==((d<<8)+f)%31)throw Error("invalid fcheck flag:"+((d<<8)+f)%31);if(f&32)throw Error("fdict flag is not supported");this.H=new A(a,{index:this.b,f:b})}
T.prototype.m=function(){var a=this.input,c;c=this.H.m();if(this.o){var a=a[this.b++]<<24|a[this.b++]<<16|a[this.b++]<<8|a[this.b++],b=c;if("string"===typeof b){var b=b.split(""),d,f;d=0;for(f=b.length;d<f;d++)b[d]=(b[d].charCodeAt(0)&255)>>>0}d=1;f=0;for(var e=b.length,h,i=0;0<e;){h=1024<e?1024:e;e-=h;do d+=b[i++],f+=d;while(--h);d%=65521;f%=65521}if(a!==(f<<16|d)>>>0)throw Error("invalid adler-32 checksum");}return c};g("Zlib.Inflate",T,void 0);g("Zlib.Inflate.BufferType",ha,void 0);
g("Zlib.Inflate.prototype.decompress",T.prototype.m,void 0);var ka=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];j&&new Uint16Array(ka);var la=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258];j&&new Uint16Array(la);var ma=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0];j&&new Uint8Array(ma);var na=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];j&&new Uint16Array(na);
var oa=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];j&&new Uint8Array(oa);var V=new (j?Uint8Array:Array)(288),W,X;W=0;for(X=V.length;W<X;++W)V[W]=143>=W?8:255>=W?9:279>=W?7:8;r(V);var Y=new (j?Uint8Array:Array)(30),Z,$;Z=0;for($=Y.length;Z<$;++Z)Y[Z]=5;r(Y);var U=8;}).call((new Function("return this"))());


/*//////////////////
  footer.js
//////////////////*/
// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


})();
