["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/result/simpleresult.js"],"~:js","goog.provide(\"goog.result.SimpleResult\");\ngoog.provide(\"goog.result.SimpleResult.StateError\");\ngoog.require(\"goog.Promise\");\ngoog.require(\"goog.Thenable\");\ngoog.require(\"goog.debug.Error\");\ngoog.require(\"goog.result.Result\");\ngoog.result.SimpleResult = function() {\n  this.state_ = goog.result.Result.State.PENDING;\n  this.handlers_ = [];\n  this.value_ = undefined;\n  this.error_ = undefined;\n};\ngoog.Thenable.addImplementation(goog.result.SimpleResult);\ngoog.result.SimpleResult.HandlerEntry_;\ngoog.result.SimpleResult.StateError = function() {\n  goog.result.SimpleResult.StateError.base(this, \"constructor\", \"Multiple attempts to set the state of this Result\");\n};\ngoog.inherits(goog.result.SimpleResult.StateError, goog.debug.Error);\ngoog.result.SimpleResult.prototype.getState = function() {\n  return this.state_;\n};\ngoog.result.SimpleResult.prototype.getValue = function() {\n  return this.value_;\n};\ngoog.result.SimpleResult.prototype.getError = function() {\n  return this.error_;\n};\ngoog.result.SimpleResult.prototype.wait = function(handler, opt_scope) {\n  if (this.isPending_()) {\n    this.handlers_.push({callback:handler, scope:opt_scope || null});\n  } else {\n    handler.call(opt_scope, this);\n  }\n};\ngoog.result.SimpleResult.prototype.setValue = function(value) {\n  if (this.isPending_()) {\n    this.value_ = value;\n    this.state_ = goog.result.Result.State.SUCCESS;\n    this.callHandlers_();\n  } else {\n    if (!this.isCanceled()) {\n      throw new goog.result.SimpleResult.StateError;\n    }\n  }\n};\ngoog.result.SimpleResult.prototype.setError = function(opt_error) {\n  if (this.isPending_()) {\n    this.error_ = opt_error;\n    this.state_ = goog.result.Result.State.ERROR;\n    this.callHandlers_();\n  } else {\n    if (!this.isCanceled()) {\n      throw new goog.result.SimpleResult.StateError;\n    }\n  }\n};\ngoog.result.SimpleResult.prototype.callHandlers_ = function() {\n  var handlers = this.handlers_;\n  this.handlers_ = [];\n  for (var n = 0; n < handlers.length; n++) {\n    var handlerEntry = handlers[n];\n    handlerEntry.callback.call(handlerEntry.scope, this);\n  }\n};\ngoog.result.SimpleResult.prototype.isPending_ = function() {\n  return this.state_ == goog.result.Result.State.PENDING;\n};\ngoog.result.SimpleResult.prototype.cancel = function() {\n  if (this.isPending_()) {\n    this.setError(new goog.result.Result.CancelError);\n    return true;\n  }\n  return false;\n};\ngoog.result.SimpleResult.prototype.isCanceled = function() {\n  return this.state_ == goog.result.Result.State.ERROR && this.error_ instanceof goog.result.Result.CancelError;\n};\ngoog.result.SimpleResult.prototype.then = function(opt_onFulfilled, opt_onRejected, opt_context) {\n  var resolve, reject;\n  var promise = new goog.Promise(function(res, rej) {\n    resolve = res;\n    reject = rej;\n  });\n  this.wait(function(result) {\n    if (result.isCanceled()) {\n      promise.cancel();\n    } else {\n      if (result.getState() == goog.result.Result.State.SUCCESS) {\n        resolve(result.getValue());\n      } else {\n        if (result.getState() == goog.result.Result.State.ERROR) {\n          reject(result.getError());\n        }\n      }\n    }\n  });\n  return promise.then(opt_onFulfilled, opt_onRejected, opt_context);\n};\ngoog.result.SimpleResult.fromPromise = function(promise) {\n  var result = new goog.result.SimpleResult;\n  promise.then(result.setValue, result.setError, result);\n  return result;\n};\n","~:source","// Copyright 2012 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview A SimpleResult object that implements goog.result.Result.\n * See below for a more detailed description.\n */\n\ngoog.provide('goog.result.SimpleResult');\ngoog.provide('goog.result.SimpleResult.StateError');\n\ngoog.require('goog.Promise');\ngoog.require('goog.Thenable');\ngoog.require('goog.debug.Error');\ngoog.require('goog.result.Result');\n\n\n\n/**\n * A SimpleResult object is a basic implementation of the\n * goog.result.Result interface. This could be subclassed(e.g. XHRResult)\n * or instantiated and returned by another class as a form of result. The caller\n * receiving the result could then attach handlers to be called when the result\n * is resolved(success or error).\n *\n * @constructor\n * @implements {goog.result.Result}\n * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration\n */\ngoog.result.SimpleResult = function() {\n  /**\n   * The current state of this Result.\n   * @type {goog.result.Result.State}\n   * @private\n   */\n  this.state_ = goog.result.Result.State.PENDING;\n\n  /**\n   * The list of handlers to call when this Result is resolved.\n   * @type {!Array<!goog.result.SimpleResult.HandlerEntry_>}\n   * @private\n   */\n  this.handlers_ = [];\n\n  // The value_ and error_ properties are initialized in the constructor to\n  // ensure that all SimpleResult instances share the same hidden class in\n  // modern JavaScript engines.\n\n  /**\n   * The 'value' of this Result.\n   * @type {*}\n   * @private\n   */\n  this.value_ = undefined;\n\n  /**\n   * The error slug for this Result.\n   * @type {*}\n   * @private\n   */\n  this.error_ = undefined;\n};\ngoog.Thenable.addImplementation(goog.result.SimpleResult);\n\n\n/**\n * A waiting handler entry.\n * @typedef {{\n *   callback: function(!goog.result.SimpleResult),\n *   scope: Object\n * }}\n * @private\n */\ngoog.result.SimpleResult.HandlerEntry_;\n\n\n\n/**\n * Error thrown if there is an attempt to set the value or error for this result\n * more than once.\n *\n * @constructor\n * @extends {goog.debug.Error}\n * @final\n * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration\n */\ngoog.result.SimpleResult.StateError = function() {\n  goog.result.SimpleResult.StateError.base(\n      this, 'constructor', 'Multiple attempts to set the state of this Result');\n};\ngoog.inherits(goog.result.SimpleResult.StateError, goog.debug.Error);\n\n\n/** @override */\ngoog.result.SimpleResult.prototype.getState = function() {\n  return this.state_;\n};\n\n\n/** @override */\ngoog.result.SimpleResult.prototype.getValue = function() {\n  return this.value_;\n};\n\n\n/** @override */\ngoog.result.SimpleResult.prototype.getError = function() {\n  return this.error_;\n};\n\n\n/**\n * Attaches handlers to be called when the value of this Result is available.\n *\n * @param {function(this:T, !goog.result.SimpleResult)} handler The function\n *     called when the value is available. The function is passed the Result\n *     object as the only argument.\n * @param {T=} opt_scope Optional scope for the handler.\n * @template T\n * @override\n */\ngoog.result.SimpleResult.prototype.wait = function(handler, opt_scope) {\n  if (this.isPending_()) {\n    this.handlers_.push({callback: handler, scope: opt_scope || null});\n  } else {\n    handler.call(opt_scope, this);\n  }\n};\n\n\n/**\n * Sets the value of this Result, changing the state.\n *\n * @param {*} value The value to set for this Result.\n */\ngoog.result.SimpleResult.prototype.setValue = function(value) {\n  if (this.isPending_()) {\n    this.value_ = value;\n    this.state_ = goog.result.Result.State.SUCCESS;\n    this.callHandlers_();\n  } else if (!this.isCanceled()) {\n    // setValue is a no-op if this Result has been canceled.\n    throw new goog.result.SimpleResult.StateError();\n  }\n};\n\n\n/**\n * Sets the Result to be an error Result.\n *\n * @param {*=} opt_error Optional error slug to set for this Result.\n */\ngoog.result.SimpleResult.prototype.setError = function(opt_error) {\n  if (this.isPending_()) {\n    this.error_ = opt_error;\n    this.state_ = goog.result.Result.State.ERROR;\n    this.callHandlers_();\n  } else if (!this.isCanceled()) {\n    // setError is a no-op if this Result has been canceled.\n    throw new goog.result.SimpleResult.StateError();\n  }\n};\n\n\n/**\n * Calls the handlers registered for this Result.\n *\n * @private\n */\ngoog.result.SimpleResult.prototype.callHandlers_ = function() {\n  var handlers = this.handlers_;\n  this.handlers_ = [];\n  for (var n = 0; n < handlers.length; n++) {\n    var handlerEntry = handlers[n];\n    handlerEntry.callback.call(handlerEntry.scope, this);\n  }\n};\n\n\n/**\n * @return {boolean} Whether the Result is pending.\n * @private\n */\ngoog.result.SimpleResult.prototype.isPending_ = function() {\n  return this.state_ == goog.result.Result.State.PENDING;\n};\n\n\n/**\n * Cancels the Result.\n *\n * @return {boolean} Whether the result was canceled. It will not be canceled if\n *    the result was already canceled or has already resolved.\n * @override\n */\ngoog.result.SimpleResult.prototype.cancel = function() {\n  // cancel is a no-op if the result has been resolved.\n  if (this.isPending_()) {\n    this.setError(new goog.result.Result.CancelError());\n    return true;\n  }\n  return false;\n};\n\n\n/** @override */\ngoog.result.SimpleResult.prototype.isCanceled = function() {\n  return this.state_ == goog.result.Result.State.ERROR &&\n      this.error_ instanceof goog.result.Result.CancelError;\n};\n\n\n/** @override */\ngoog.result.SimpleResult.prototype.then = function(\n    opt_onFulfilled, opt_onRejected, opt_context) {\n  var resolve, reject;\n  // Copy the resolvers to outer scope, so that they are available\n  // when the callback to wait() fires (which may be synchronous).\n  var promise = new goog.Promise(function(res, rej) {\n    resolve = res;\n    reject = rej;\n  });\n  this.wait(function(result) {\n    if (result.isCanceled()) {\n      promise.cancel();\n    } else if (result.getState() == goog.result.Result.State.SUCCESS) {\n      resolve(result.getValue());\n    } else if (result.getState() == goog.result.Result.State.ERROR) {\n      reject(result.getError());\n    }\n  });\n  return promise.then(opt_onFulfilled, opt_onRejected, opt_context);\n};\n\n\n/**\n * Creates a SimpleResult that fires when the given promise resolves.\n * Use only during migration to Promises.\n * @param {!goog.Promise<?>} promise\n * @return {!goog.result.Result}\n */\ngoog.result.SimpleResult.fromPromise = function(promise) {\n  var result = new goog.result.SimpleResult();\n  promise.then(result.setValue, result.setError, result);\n  return result;\n};\n","~:compiled-at",1612899772502,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.result.simpleresult.js\",\n\"lineCount\":104,\n\"mappings\":\"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\",\n\"sources\":[\"goog/result/simpleresult.js\"],\n\"sourcesContent\":[\"// Copyright 2012 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview A SimpleResult object that implements goog.result.Result.\\n * See below for a more detailed description.\\n */\\n\\ngoog.provide('goog.result.SimpleResult');\\ngoog.provide('goog.result.SimpleResult.StateError');\\n\\ngoog.require('goog.Promise');\\ngoog.require('goog.Thenable');\\ngoog.require('goog.debug.Error');\\ngoog.require('goog.result.Result');\\n\\n\\n\\n/**\\n * A SimpleResult object is a basic implementation of the\\n * goog.result.Result interface. This could be subclassed(e.g. XHRResult)\\n * or instantiated and returned by another class as a form of result. The caller\\n * receiving the result could then attach handlers to be called when the result\\n * is resolved(success or error).\\n *\\n * @constructor\\n * @implements {goog.result.Result}\\n * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration\\n */\\ngoog.result.SimpleResult = function() {\\n  /**\\n   * The current state of this Result.\\n   * @type {goog.result.Result.State}\\n   * @private\\n   */\\n  this.state_ = goog.result.Result.State.PENDING;\\n\\n  /**\\n   * The list of handlers to call when this Result is resolved.\\n   * @type {!Array<!goog.result.SimpleResult.HandlerEntry_>}\\n   * @private\\n   */\\n  this.handlers_ = [];\\n\\n  // The value_ and error_ properties are initialized in the constructor to\\n  // ensure that all SimpleResult instances share the same hidden class in\\n  // modern JavaScript engines.\\n\\n  /**\\n   * The 'value' of this Result.\\n   * @type {*}\\n   * @private\\n   */\\n  this.value_ = undefined;\\n\\n  /**\\n   * The error slug for this Result.\\n   * @type {*}\\n   * @private\\n   */\\n  this.error_ = undefined;\\n};\\ngoog.Thenable.addImplementation(goog.result.SimpleResult);\\n\\n\\n/**\\n * A waiting handler entry.\\n * @typedef {{\\n *   callback: function(!goog.result.SimpleResult),\\n *   scope: Object\\n * }}\\n * @private\\n */\\ngoog.result.SimpleResult.HandlerEntry_;\\n\\n\\n\\n/**\\n * Error thrown if there is an attempt to set the value or error for this result\\n * more than once.\\n *\\n * @constructor\\n * @extends {goog.debug.Error}\\n * @final\\n * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration\\n */\\ngoog.result.SimpleResult.StateError = function() {\\n  goog.result.SimpleResult.StateError.base(\\n      this, 'constructor', 'Multiple attempts to set the state of this Result');\\n};\\ngoog.inherits(goog.result.SimpleResult.StateError, goog.debug.Error);\\n\\n\\n/** @override */\\ngoog.result.SimpleResult.prototype.getState = function() {\\n  return this.state_;\\n};\\n\\n\\n/** @override */\\ngoog.result.SimpleResult.prototype.getValue = function() {\\n  return this.value_;\\n};\\n\\n\\n/** @override */\\ngoog.result.SimpleResult.prototype.getError = function() {\\n  return this.error_;\\n};\\n\\n\\n/**\\n * Attaches handlers to be called when the value of this Result is available.\\n *\\n * @param {function(this:T, !goog.result.SimpleResult)} handler The function\\n *     called when the value is available. The function is passed the Result\\n *     object as the only argument.\\n * @param {T=} opt_scope Optional scope for the handler.\\n * @template T\\n * @override\\n */\\ngoog.result.SimpleResult.prototype.wait = function(handler, opt_scope) {\\n  if (this.isPending_()) {\\n    this.handlers_.push({callback: handler, scope: opt_scope || null});\\n  } else {\\n    handler.call(opt_scope, this);\\n  }\\n};\\n\\n\\n/**\\n * Sets the value of this Result, changing the state.\\n *\\n * @param {*} value The value to set for this Result.\\n */\\ngoog.result.SimpleResult.prototype.setValue = function(value) {\\n  if (this.isPending_()) {\\n    this.value_ = value;\\n    this.state_ = goog.result.Result.State.SUCCESS;\\n    this.callHandlers_();\\n  } else if (!this.isCanceled()) {\\n    // setValue is a no-op if this Result has been canceled.\\n    throw new goog.result.SimpleResult.StateError();\\n  }\\n};\\n\\n\\n/**\\n * Sets the Result to be an error Result.\\n *\\n * @param {*=} opt_error Optional error slug to set for this Result.\\n */\\ngoog.result.SimpleResult.prototype.setError = function(opt_error) {\\n  if (this.isPending_()) {\\n    this.error_ = opt_error;\\n    this.state_ = goog.result.Result.State.ERROR;\\n    this.callHandlers_();\\n  } else if (!this.isCanceled()) {\\n    // setError is a no-op if this Result has been canceled.\\n    throw new goog.result.SimpleResult.StateError();\\n  }\\n};\\n\\n\\n/**\\n * Calls the handlers registered for this Result.\\n *\\n * @private\\n */\\ngoog.result.SimpleResult.prototype.callHandlers_ = function() {\\n  var handlers = this.handlers_;\\n  this.handlers_ = [];\\n  for (var n = 0; n < handlers.length; n++) {\\n    var handlerEntry = handlers[n];\\n    handlerEntry.callback.call(handlerEntry.scope, this);\\n  }\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the Result is pending.\\n * @private\\n */\\ngoog.result.SimpleResult.prototype.isPending_ = function() {\\n  return this.state_ == goog.result.Result.State.PENDING;\\n};\\n\\n\\n/**\\n * Cancels the Result.\\n *\\n * @return {boolean} Whether the result was canceled. It will not be canceled if\\n *    the result was already canceled or has already resolved.\\n * @override\\n */\\ngoog.result.SimpleResult.prototype.cancel = function() {\\n  // cancel is a no-op if the result has been resolved.\\n  if (this.isPending_()) {\\n    this.setError(new goog.result.Result.CancelError());\\n    return true;\\n  }\\n  return false;\\n};\\n\\n\\n/** @override */\\ngoog.result.SimpleResult.prototype.isCanceled = function() {\\n  return this.state_ == goog.result.Result.State.ERROR &&\\n      this.error_ instanceof goog.result.Result.CancelError;\\n};\\n\\n\\n/** @override */\\ngoog.result.SimpleResult.prototype.then = function(\\n    opt_onFulfilled, opt_onRejected, opt_context) {\\n  var resolve, reject;\\n  // Copy the resolvers to outer scope, so that they are available\\n  // when the callback to wait() fires (which may be synchronous).\\n  var promise = new goog.Promise(function(res, rej) {\\n    resolve = res;\\n    reject = rej;\\n  });\\n  this.wait(function(result) {\\n    if (result.isCanceled()) {\\n      promise.cancel();\\n    } else if (result.getState() == goog.result.Result.State.SUCCESS) {\\n      resolve(result.getValue());\\n    } else if (result.getState() == goog.result.Result.State.ERROR) {\\n      reject(result.getError());\\n    }\\n  });\\n  return promise.then(opt_onFulfilled, opt_onRejected, opt_context);\\n};\\n\\n\\n/**\\n * Creates a SimpleResult that fires when the given promise resolves.\\n * Use only during migration to Promises.\\n * @param {!goog.Promise<?>} promise\\n * @return {!goog.result.Result}\\n */\\ngoog.result.SimpleResult.fromPromise = function(promise) {\\n  var result = new goog.result.SimpleResult();\\n  promise.then(result.setValue, result.setError, result);\\n  return result;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"result\",\"SimpleResult\",\"goog.result.SimpleResult\",\"state_\",\"Result\",\"State\",\"PENDING\",\"handlers_\",\"value_\",\"undefined\",\"error_\",\"Thenable\",\"addImplementation\",\"HandlerEntry_\",\"StateError\",\"goog.result.SimpleResult.StateError\",\"base\",\"inherits\",\"debug\",\"Error\",\"prototype\",\"getState\",\"goog.result.SimpleResult.prototype.getState\",\"getValue\",\"goog.result.SimpleResult.prototype.getValue\",\"getError\",\"goog.result.SimpleResult.prototype.getError\",\"wait\",\"goog.result.SimpleResult.prototype.wait\",\"handler\",\"opt_scope\",\"isPending_\",\"push\",\"callback\",\"scope\",\"call\",\"setValue\",\"goog.result.SimpleResult.prototype.setValue\",\"value\",\"SUCCESS\",\"callHandlers_\",\"isCanceled\",\"setError\",\"goog.result.SimpleResult.prototype.setError\",\"opt_error\",\"ERROR\",\"goog.result.SimpleResult.prototype.callHandlers_\",\"handlers\",\"n\",\"length\",\"handlerEntry\",\"goog.result.SimpleResult.prototype.isPending_\",\"cancel\",\"goog.result.SimpleResult.prototype.cancel\",\"CancelError\",\"goog.result.SimpleResult.prototype.isCanceled\",\"then\",\"goog.result.SimpleResult.prototype.then\",\"opt_onFulfilled\",\"opt_onRejected\",\"opt_context\",\"resolve\",\"reject\",\"promise\",\"Promise\",\"res\",\"rej\",\"fromPromise\",\"goog.result.SimpleResult.fromPromise\"]\n}\n"]