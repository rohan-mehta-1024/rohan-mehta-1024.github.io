["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/fx/anim/anim.js"],"~:js","goog.provide(\"goog.fx.anim\");\ngoog.provide(\"goog.fx.anim.Animated\");\ngoog.require(\"goog.async.AnimationDelay\");\ngoog.require(\"goog.async.Delay\");\ngoog.require(\"goog.object\");\ngoog.fx.anim.Animated = function() {\n};\ngoog.fx.anim.Animated.prototype.onAnimationFrame;\ngoog.fx.anim.TIMEOUT = goog.async.AnimationDelay.TIMEOUT;\ngoog.fx.anim.activeAnimations_ = {};\ngoog.fx.anim.animationWindow_ = null;\ngoog.fx.anim.animationDelay_ = null;\ngoog.fx.anim.registerAnimation = function(animation) {\n  var uid = goog.getUid(animation);\n  if (!(uid in goog.fx.anim.activeAnimations_)) {\n    goog.fx.anim.activeAnimations_[uid] = animation;\n  }\n  goog.fx.anim.requestAnimationFrame_();\n};\ngoog.fx.anim.unregisterAnimation = function(animation) {\n  var uid = goog.getUid(animation);\n  delete goog.fx.anim.activeAnimations_[uid];\n  if (goog.object.isEmpty(goog.fx.anim.activeAnimations_)) {\n    goog.fx.anim.cancelAnimationFrame_();\n  }\n};\ngoog.fx.anim.tearDown = function() {\n  goog.fx.anim.animationWindow_ = null;\n  goog.dispose(goog.fx.anim.animationDelay_);\n  goog.fx.anim.animationDelay_ = null;\n  goog.fx.anim.activeAnimations_ = {};\n};\ngoog.fx.anim.setAnimationWindow = function(animationWindow) {\n  var hasTimer = goog.fx.anim.animationDelay_ && goog.fx.anim.animationDelay_.isActive();\n  goog.dispose(goog.fx.anim.animationDelay_);\n  goog.fx.anim.animationDelay_ = null;\n  goog.fx.anim.animationWindow_ = animationWindow;\n  if (hasTimer) {\n    goog.fx.anim.requestAnimationFrame_();\n  }\n};\ngoog.fx.anim.requestAnimationFrame_ = function() {\n  if (!goog.fx.anim.animationDelay_) {\n    if (goog.fx.anim.animationWindow_) {\n      goog.fx.anim.animationDelay_ = new goog.async.AnimationDelay(function(now) {\n        goog.fx.anim.cycleAnimations_(now);\n      }, goog.fx.anim.animationWindow_);\n    } else {\n      goog.fx.anim.animationDelay_ = new goog.async.Delay(function() {\n        goog.fx.anim.cycleAnimations_(goog.now());\n      }, goog.fx.anim.TIMEOUT);\n    }\n  }\n  var delay = goog.fx.anim.animationDelay_;\n  if (!delay.isActive()) {\n    delay.start();\n  }\n};\ngoog.fx.anim.cancelAnimationFrame_ = function() {\n  if (goog.fx.anim.animationDelay_) {\n    goog.fx.anim.animationDelay_.stop();\n  }\n};\ngoog.fx.anim.cycleAnimations_ = function(now) {\n  goog.object.forEach(goog.fx.anim.activeAnimations_, function(anim) {\n    anim.onAnimationFrame(now);\n  });\n  if (!goog.object.isEmpty(goog.fx.anim.activeAnimations_)) {\n    goog.fx.anim.requestAnimationFrame_();\n  }\n};\n","~:source","// Copyright 2006 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Basic animation controls.\n *\n * @author arv@google.com (Erik Arvidsson)\n */\ngoog.provide('goog.fx.anim');\ngoog.provide('goog.fx.anim.Animated');\n\ngoog.require('goog.async.AnimationDelay');\ngoog.require('goog.async.Delay');\ngoog.require('goog.object');\n\n\n\n/**\n * An interface for programatically animated objects. I.e. rendered in\n * javascript frame by frame.\n *\n * @interface\n */\ngoog.fx.anim.Animated = function() {};\n\n\n/**\n * Function called when a frame is requested for the animation.\n *\n * @param {number} now Current time in milliseconds.\n */\ngoog.fx.anim.Animated.prototype.onAnimationFrame;\n\n\n/**\n * Default wait timeout for animations (in milliseconds).  Only used for timed\n * animation, which uses a timer (setTimeout) to schedule animation.\n *\n * @type {number}\n * @const\n */\ngoog.fx.anim.TIMEOUT = goog.async.AnimationDelay.TIMEOUT;\n\n\n/**\n * A map of animations which should be cycled on the global timer.\n *\n * @type {!Object<number, goog.fx.anim.Animated>}\n * @private\n */\ngoog.fx.anim.activeAnimations_ = {};\n\n\n/**\n * An optional animation window.\n * @type {?Window}\n * @private\n */\ngoog.fx.anim.animationWindow_ = null;\n\n\n/**\n * An interval ID for the global timer or event handler uid.\n * @type {?goog.async.Delay|?goog.async.AnimationDelay}\n * @private\n */\ngoog.fx.anim.animationDelay_ = null;\n\n\n/**\n * Registers an animation to be cycled on the global timer.\n * @param {goog.fx.anim.Animated} animation The animation to register.\n */\ngoog.fx.anim.registerAnimation = function(animation) {\n  var uid = goog.getUid(animation);\n  if (!(uid in goog.fx.anim.activeAnimations_)) {\n    goog.fx.anim.activeAnimations_[uid] = animation;\n  }\n\n  // If the timer is not already started, start it now.\n  goog.fx.anim.requestAnimationFrame_();\n};\n\n\n/**\n * Removes an animation from the list of animations which are cycled on the\n * global timer.\n * @param {goog.fx.anim.Animated} animation The animation to unregister.\n */\ngoog.fx.anim.unregisterAnimation = function(animation) {\n  var uid = goog.getUid(animation);\n  delete goog.fx.anim.activeAnimations_[uid];\n\n  // If a timer is running and we no longer have any active timers we stop the\n  // timers.\n  if (goog.object.isEmpty(goog.fx.anim.activeAnimations_)) {\n    goog.fx.anim.cancelAnimationFrame_();\n  }\n};\n\n\n/**\n * Tears down this module. Useful for testing.\n */\n// TODO(nicksantos): Wow, this api is pretty broken. This should be fixed.\ngoog.fx.anim.tearDown = function() {\n  goog.fx.anim.animationWindow_ = null;\n  goog.dispose(goog.fx.anim.animationDelay_);\n  goog.fx.anim.animationDelay_ = null;\n  goog.fx.anim.activeAnimations_ = {};\n};\n\n\n/**\n * Registers an animation window. This allows usage of the timing control API\n * for animations. Note that this window must be visible, as non-visible\n * windows can potentially stop animating. This window does not necessarily\n * need to be the window inside which animation occurs, but must remain visible.\n * See: https://developer.mozilla.org/en/DOM/window.mozRequestAnimationFrame.\n *\n * @param {Window} animationWindow The window in which to animate elements.\n */\ngoog.fx.anim.setAnimationWindow = function(animationWindow) {\n  // If a timer is currently running, reset it and restart with new functions\n  // after a timeout. This is to avoid mismatching timer UIDs if we change the\n  // animation window during a running animation.\n  //\n  // In practice this cannot happen before some animation window and timer\n  // control functions has already been set.\n  var hasTimer =\n      goog.fx.anim.animationDelay_ && goog.fx.anim.animationDelay_.isActive();\n\n  goog.dispose(goog.fx.anim.animationDelay_);\n  goog.fx.anim.animationDelay_ = null;\n  goog.fx.anim.animationWindow_ = animationWindow;\n\n  // If the timer was running, start it again.\n  if (hasTimer) {\n    goog.fx.anim.requestAnimationFrame_();\n  }\n};\n\n\n/**\n * Requests an animation frame based on the requestAnimationFrame and\n * cancelRequestAnimationFrame function pair.\n * @private\n */\ngoog.fx.anim.requestAnimationFrame_ = function() {\n  if (!goog.fx.anim.animationDelay_) {\n    // We cannot guarantee that the global window will be one that fires\n    // requestAnimationFrame events (consider off-screen chrome extension\n    // windows). Default to use goog.async.Delay, unless\n    // the client has explicitly set an animation window.\n    if (goog.fx.anim.animationWindow_) {\n      // requestAnimationFrame will call cycleAnimations_ with the current\n      // time in ms, as returned from goog.now().\n      goog.fx.anim.animationDelay_ =\n          new goog.async.AnimationDelay(function(now) {\n            goog.fx.anim.cycleAnimations_(now);\n          }, goog.fx.anim.animationWindow_);\n    } else {\n      goog.fx.anim.animationDelay_ = new goog.async.Delay(function() {\n        goog.fx.anim.cycleAnimations_(goog.now());\n      }, goog.fx.anim.TIMEOUT);\n    }\n  }\n\n  var delay = goog.fx.anim.animationDelay_;\n  if (!delay.isActive()) {\n    delay.start();\n  }\n};\n\n\n/**\n * Cancels an animation frame created by requestAnimationFrame_().\n * @private\n */\ngoog.fx.anim.cancelAnimationFrame_ = function() {\n  if (goog.fx.anim.animationDelay_) {\n    goog.fx.anim.animationDelay_.stop();\n  }\n};\n\n\n/**\n * Cycles through all registered animations.\n * @param {number} now Current time in milliseconds.\n * @private\n */\ngoog.fx.anim.cycleAnimations_ = function(now) {\n  goog.object.forEach(goog.fx.anim.activeAnimations_, function(anim) {\n    anim.onAnimationFrame(now);\n  });\n\n  if (!goog.object.isEmpty(goog.fx.anim.activeAnimations_)) {\n    goog.fx.anim.requestAnimationFrame_();\n  }\n};\n","~:compiled-at",1609807670223,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.fx.anim.anim.js\",\n\"lineCount\":72,\n\"mappings\":\"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\",\n\"sources\":[\"goog/fx/anim/anim.js\"],\n\"sourcesContent\":[\"// Copyright 2006 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Basic animation controls.\\n *\\n * @author arv@google.com (Erik Arvidsson)\\n */\\ngoog.provide('goog.fx.anim');\\ngoog.provide('goog.fx.anim.Animated');\\n\\ngoog.require('goog.async.AnimationDelay');\\ngoog.require('goog.async.Delay');\\ngoog.require('goog.object');\\n\\n\\n\\n/**\\n * An interface for programatically animated objects. I.e. rendered in\\n * javascript frame by frame.\\n *\\n * @interface\\n */\\ngoog.fx.anim.Animated = function() {};\\n\\n\\n/**\\n * Function called when a frame is requested for the animation.\\n *\\n * @param {number} now Current time in milliseconds.\\n */\\ngoog.fx.anim.Animated.prototype.onAnimationFrame;\\n\\n\\n/**\\n * Default wait timeout for animations (in milliseconds).  Only used for timed\\n * animation, which uses a timer (setTimeout) to schedule animation.\\n *\\n * @type {number}\\n * @const\\n */\\ngoog.fx.anim.TIMEOUT = goog.async.AnimationDelay.TIMEOUT;\\n\\n\\n/**\\n * A map of animations which should be cycled on the global timer.\\n *\\n * @type {!Object<number, goog.fx.anim.Animated>}\\n * @private\\n */\\ngoog.fx.anim.activeAnimations_ = {};\\n\\n\\n/**\\n * An optional animation window.\\n * @type {?Window}\\n * @private\\n */\\ngoog.fx.anim.animationWindow_ = null;\\n\\n\\n/**\\n * An interval ID for the global timer or event handler uid.\\n * @type {?goog.async.Delay|?goog.async.AnimationDelay}\\n * @private\\n */\\ngoog.fx.anim.animationDelay_ = null;\\n\\n\\n/**\\n * Registers an animation to be cycled on the global timer.\\n * @param {goog.fx.anim.Animated} animation The animation to register.\\n */\\ngoog.fx.anim.registerAnimation = function(animation) {\\n  var uid = goog.getUid(animation);\\n  if (!(uid in goog.fx.anim.activeAnimations_)) {\\n    goog.fx.anim.activeAnimations_[uid] = animation;\\n  }\\n\\n  // If the timer is not already started, start it now.\\n  goog.fx.anim.requestAnimationFrame_();\\n};\\n\\n\\n/**\\n * Removes an animation from the list of animations which are cycled on the\\n * global timer.\\n * @param {goog.fx.anim.Animated} animation The animation to unregister.\\n */\\ngoog.fx.anim.unregisterAnimation = function(animation) {\\n  var uid = goog.getUid(animation);\\n  delete goog.fx.anim.activeAnimations_[uid];\\n\\n  // If a timer is running and we no longer have any active timers we stop the\\n  // timers.\\n  if (goog.object.isEmpty(goog.fx.anim.activeAnimations_)) {\\n    goog.fx.anim.cancelAnimationFrame_();\\n  }\\n};\\n\\n\\n/**\\n * Tears down this module. Useful for testing.\\n */\\n// TODO(nicksantos): Wow, this api is pretty broken. This should be fixed.\\ngoog.fx.anim.tearDown = function() {\\n  goog.fx.anim.animationWindow_ = null;\\n  goog.dispose(goog.fx.anim.animationDelay_);\\n  goog.fx.anim.animationDelay_ = null;\\n  goog.fx.anim.activeAnimations_ = {};\\n};\\n\\n\\n/**\\n * Registers an animation window. This allows usage of the timing control API\\n * for animations. Note that this window must be visible, as non-visible\\n * windows can potentially stop animating. This window does not necessarily\\n * need to be the window inside which animation occurs, but must remain visible.\\n * See: https://developer.mozilla.org/en/DOM/window.mozRequestAnimationFrame.\\n *\\n * @param {Window} animationWindow The window in which to animate elements.\\n */\\ngoog.fx.anim.setAnimationWindow = function(animationWindow) {\\n  // If a timer is currently running, reset it and restart with new functions\\n  // after a timeout. This is to avoid mismatching timer UIDs if we change the\\n  // animation window during a running animation.\\n  //\\n  // In practice this cannot happen before some animation window and timer\\n  // control functions has already been set.\\n  var hasTimer =\\n      goog.fx.anim.animationDelay_ && goog.fx.anim.animationDelay_.isActive();\\n\\n  goog.dispose(goog.fx.anim.animationDelay_);\\n  goog.fx.anim.animationDelay_ = null;\\n  goog.fx.anim.animationWindow_ = animationWindow;\\n\\n  // If the timer was running, start it again.\\n  if (hasTimer) {\\n    goog.fx.anim.requestAnimationFrame_();\\n  }\\n};\\n\\n\\n/**\\n * Requests an animation frame based on the requestAnimationFrame and\\n * cancelRequestAnimationFrame function pair.\\n * @private\\n */\\ngoog.fx.anim.requestAnimationFrame_ = function() {\\n  if (!goog.fx.anim.animationDelay_) {\\n    // We cannot guarantee that the global window will be one that fires\\n    // requestAnimationFrame events (consider off-screen chrome extension\\n    // windows). Default to use goog.async.Delay, unless\\n    // the client has explicitly set an animation window.\\n    if (goog.fx.anim.animationWindow_) {\\n      // requestAnimationFrame will call cycleAnimations_ with the current\\n      // time in ms, as returned from goog.now().\\n      goog.fx.anim.animationDelay_ =\\n          new goog.async.AnimationDelay(function(now) {\\n            goog.fx.anim.cycleAnimations_(now);\\n          }, goog.fx.anim.animationWindow_);\\n    } else {\\n      goog.fx.anim.animationDelay_ = new goog.async.Delay(function() {\\n        goog.fx.anim.cycleAnimations_(goog.now());\\n      }, goog.fx.anim.TIMEOUT);\\n    }\\n  }\\n\\n  var delay = goog.fx.anim.animationDelay_;\\n  if (!delay.isActive()) {\\n    delay.start();\\n  }\\n};\\n\\n\\n/**\\n * Cancels an animation frame created by requestAnimationFrame_().\\n * @private\\n */\\ngoog.fx.anim.cancelAnimationFrame_ = function() {\\n  if (goog.fx.anim.animationDelay_) {\\n    goog.fx.anim.animationDelay_.stop();\\n  }\\n};\\n\\n\\n/**\\n * Cycles through all registered animations.\\n * @param {number} now Current time in milliseconds.\\n * @private\\n */\\ngoog.fx.anim.cycleAnimations_ = function(now) {\\n  goog.object.forEach(goog.fx.anim.activeAnimations_, function(anim) {\\n    anim.onAnimationFrame(now);\\n  });\\n\\n  if (!goog.object.isEmpty(goog.fx.anim.activeAnimations_)) {\\n    goog.fx.anim.requestAnimationFrame_();\\n  }\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"fx\",\"anim\",\"Animated\",\"goog.fx.anim.Animated\",\"prototype\",\"onAnimationFrame\",\"TIMEOUT\",\"async\",\"AnimationDelay\",\"activeAnimations_\",\"animationWindow_\",\"animationDelay_\",\"registerAnimation\",\"goog.fx.anim.registerAnimation\",\"animation\",\"uid\",\"getUid\",\"requestAnimationFrame_\",\"unregisterAnimation\",\"goog.fx.anim.unregisterAnimation\",\"object\",\"isEmpty\",\"cancelAnimationFrame_\",\"tearDown\",\"goog.fx.anim.tearDown\",\"dispose\",\"setAnimationWindow\",\"goog.fx.anim.setAnimationWindow\",\"animationWindow\",\"hasTimer\",\"isActive\",\"goog.fx.anim.requestAnimationFrame_\",\"now\",\"cycleAnimations_\",\"Delay\",\"delay\",\"start\",\"goog.fx.anim.cancelAnimationFrame_\",\"stop\",\"goog.fx.anim.cycleAnimations_\",\"forEach\"]\n}\n"]