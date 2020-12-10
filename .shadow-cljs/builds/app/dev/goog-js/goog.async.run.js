["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/async/run.js"],"~:js","goog.provide(\"goog.async.run\");\ngoog.require(\"goog.async.WorkQueue\");\ngoog.require(\"goog.async.nextTick\");\ngoog.require(\"goog.async.throwException\");\ngoog.ASSUME_NATIVE_PROMISE = goog.define(\"goog.ASSUME_NATIVE_PROMISE\", false);\ngoog.async.run = function(callback, opt_context) {\n  if (!goog.async.run.schedule_) {\n    goog.async.run.initializeRunner_();\n  }\n  if (!goog.async.run.workQueueScheduled_) {\n    goog.async.run.schedule_();\n    goog.async.run.workQueueScheduled_ = true;\n  }\n  goog.async.run.workQueue_.add(callback, opt_context);\n};\ngoog.async.run.initializeRunner_ = function() {\n  if (goog.ASSUME_NATIVE_PROMISE || goog.global.Promise && goog.global.Promise.resolve) {\n    var promise = goog.global.Promise.resolve(undefined);\n    goog.async.run.schedule_ = function() {\n      promise.then(goog.async.run.processWorkQueue);\n    };\n  } else {\n    goog.async.run.schedule_ = function() {\n      goog.async.nextTick(goog.async.run.processWorkQueue);\n    };\n  }\n};\ngoog.async.run.forceNextTick = function(opt_realSetTimeout) {\n  goog.async.run.schedule_ = function() {\n    goog.async.nextTick(goog.async.run.processWorkQueue);\n    if (opt_realSetTimeout) {\n      opt_realSetTimeout(goog.async.run.processWorkQueue);\n    }\n  };\n};\ngoog.async.run.schedule_;\ngoog.async.run.workQueueScheduled_ = false;\ngoog.async.run.workQueue_ = new goog.async.WorkQueue;\nif (goog.DEBUG) {\n  goog.async.run.resetQueue = function() {\n    goog.async.run.workQueueScheduled_ = false;\n    goog.async.run.workQueue_ = new goog.async.WorkQueue;\n  };\n}\ngoog.async.run.processWorkQueue = function() {\n  var item = null;\n  while (item = goog.async.run.workQueue_.remove()) {\n    try {\n      item.fn.call(item.scope);\n    } catch (e) {\n      goog.async.throwException(e);\n    }\n    goog.async.run.workQueue_.returnUnused(item);\n  }\n  goog.async.run.workQueueScheduled_ = false;\n};\n","~:source","// Copyright 2013 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\ngoog.provide('goog.async.run');\n\ngoog.require('goog.async.WorkQueue');\ngoog.require('goog.async.nextTick');\ngoog.require('goog.async.throwException');\n\n/**\n * @define {boolean} If true, use the global Promise to implement goog.async.run\n * assuming either the native, or polyfill version will be used. Does still\n * permit tests to use forceNextTick.\n */\ngoog.ASSUME_NATIVE_PROMISE = goog.define('goog.ASSUME_NATIVE_PROMISE', false);\n\n/**\n * Fires the provided callback just before the current callstack unwinds, or as\n * soon as possible after the current JS execution context.\n * @param {function(this:THIS)} callback\n * @param {THIS=} opt_context Object to use as the \"this value\" when calling\n *     the provided function.\n * @template THIS\n */\ngoog.async.run = function(callback, opt_context) {\n  if (!goog.async.run.schedule_) {\n    goog.async.run.initializeRunner_();\n  }\n  if (!goog.async.run.workQueueScheduled_) {\n    // Nothing is currently scheduled, schedule it now.\n    goog.async.run.schedule_();\n    goog.async.run.workQueueScheduled_ = true;\n  }\n\n  goog.async.run.workQueue_.add(callback, opt_context);\n};\n\n\n/**\n * Initializes the function to use to process the work queue.\n * @private\n */\ngoog.async.run.initializeRunner_ = function() {\n  if (goog.ASSUME_NATIVE_PROMISE ||\n      (goog.global.Promise && goog.global.Promise.resolve)) {\n    // Use goog.global.Promise instead of just Promise because the relevant\n    // externs may be missing, and don't alias it because this could confuse the\n    // compiler into thinking the polyfill is required when it should be treated\n    // as optional.\n    var promise = goog.global.Promise.resolve(undefined);\n    goog.async.run.schedule_ = function() {\n      promise.then(goog.async.run.processWorkQueue);\n    };\n  } else {\n    goog.async.run.schedule_ = function() {\n      goog.async.nextTick(goog.async.run.processWorkQueue);\n    };\n  }\n};\n\n\n/**\n * Forces goog.async.run to use nextTick instead of Promise.\n *\n * This should only be done in unit tests. It's useful because MockClock\n * replaces nextTick, but not the browser Promise implementation, so it allows\n * Promise-based code to be tested with MockClock.\n *\n * However, we also want to run promises if the MockClock is no longer in\n * control so we schedule a backup \"setTimeout\" to the unmocked timeout if\n * provided.\n *\n * @param {function(function())=} opt_realSetTimeout\n */\ngoog.async.run.forceNextTick = function(opt_realSetTimeout) {\n  goog.async.run.schedule_ = function() {\n    goog.async.nextTick(goog.async.run.processWorkQueue);\n    if (opt_realSetTimeout) {\n      opt_realSetTimeout(goog.async.run.processWorkQueue);\n    }\n  };\n};\n\n\n/**\n * The function used to schedule work asynchronousely.\n * @private {function()}\n */\ngoog.async.run.schedule_;\n\n\n/** @private {boolean} */\ngoog.async.run.workQueueScheduled_ = false;\n\n\n/** @private {!goog.async.WorkQueue} */\ngoog.async.run.workQueue_ = new goog.async.WorkQueue();\n\n\nif (goog.DEBUG) {\n  /**\n   * Reset the work queue. Only available for tests in debug mode.\n   */\n  goog.async.run.resetQueue = function() {\n    goog.async.run.workQueueScheduled_ = false;\n    goog.async.run.workQueue_ = new goog.async.WorkQueue();\n  };\n}\n\n\n/**\n * Run any pending goog.async.run work items. This function is not intended\n * for general use, but for use by entry point handlers to run items ahead of\n * goog.async.nextTick.\n */\ngoog.async.run.processWorkQueue = function() {\n  // NOTE: additional work queue items may be added while processing.\n  var item = null;\n  while (item = goog.async.run.workQueue_.remove()) {\n    try {\n      item.fn.call(item.scope);\n    } catch (e) {\n      goog.async.throwException(e);\n    }\n    goog.async.run.workQueue_.returnUnused(item);\n  }\n\n  // There are no more work items, allow processing to be scheduled again.\n  goog.async.run.workQueueScheduled_ = false;\n};\n","~:compiled-at",1605912725106,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.async.run.js\",\n\"lineCount\":57,\n\"mappings\":\"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\",\n\"sources\":[\"goog/async/run.js\"],\n\"sourcesContent\":[\"// Copyright 2013 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\ngoog.provide('goog.async.run');\\n\\ngoog.require('goog.async.WorkQueue');\\ngoog.require('goog.async.nextTick');\\ngoog.require('goog.async.throwException');\\n\\n/**\\n * @define {boolean} If true, use the global Promise to implement goog.async.run\\n * assuming either the native, or polyfill version will be used. Does still\\n * permit tests to use forceNextTick.\\n */\\ngoog.ASSUME_NATIVE_PROMISE = goog.define('goog.ASSUME_NATIVE_PROMISE', false);\\n\\n/**\\n * Fires the provided callback just before the current callstack unwinds, or as\\n * soon as possible after the current JS execution context.\\n * @param {function(this:THIS)} callback\\n * @param {THIS=} opt_context Object to use as the \\\"this value\\\" when calling\\n *     the provided function.\\n * @template THIS\\n */\\ngoog.async.run = function(callback, opt_context) {\\n  if (!goog.async.run.schedule_) {\\n    goog.async.run.initializeRunner_();\\n  }\\n  if (!goog.async.run.workQueueScheduled_) {\\n    // Nothing is currently scheduled, schedule it now.\\n    goog.async.run.schedule_();\\n    goog.async.run.workQueueScheduled_ = true;\\n  }\\n\\n  goog.async.run.workQueue_.add(callback, opt_context);\\n};\\n\\n\\n/**\\n * Initializes the function to use to process the work queue.\\n * @private\\n */\\ngoog.async.run.initializeRunner_ = function() {\\n  if (goog.ASSUME_NATIVE_PROMISE ||\\n      (goog.global.Promise && goog.global.Promise.resolve)) {\\n    // Use goog.global.Promise instead of just Promise because the relevant\\n    // externs may be missing, and don't alias it because this could confuse the\\n    // compiler into thinking the polyfill is required when it should be treated\\n    // as optional.\\n    var promise = goog.global.Promise.resolve(undefined);\\n    goog.async.run.schedule_ = function() {\\n      promise.then(goog.async.run.processWorkQueue);\\n    };\\n  } else {\\n    goog.async.run.schedule_ = function() {\\n      goog.async.nextTick(goog.async.run.processWorkQueue);\\n    };\\n  }\\n};\\n\\n\\n/**\\n * Forces goog.async.run to use nextTick instead of Promise.\\n *\\n * This should only be done in unit tests. It's useful because MockClock\\n * replaces nextTick, but not the browser Promise implementation, so it allows\\n * Promise-based code to be tested with MockClock.\\n *\\n * However, we also want to run promises if the MockClock is no longer in\\n * control so we schedule a backup \\\"setTimeout\\\" to the unmocked timeout if\\n * provided.\\n *\\n * @param {function(function())=} opt_realSetTimeout\\n */\\ngoog.async.run.forceNextTick = function(opt_realSetTimeout) {\\n  goog.async.run.schedule_ = function() {\\n    goog.async.nextTick(goog.async.run.processWorkQueue);\\n    if (opt_realSetTimeout) {\\n      opt_realSetTimeout(goog.async.run.processWorkQueue);\\n    }\\n  };\\n};\\n\\n\\n/**\\n * The function used to schedule work asynchronousely.\\n * @private {function()}\\n */\\ngoog.async.run.schedule_;\\n\\n\\n/** @private {boolean} */\\ngoog.async.run.workQueueScheduled_ = false;\\n\\n\\n/** @private {!goog.async.WorkQueue} */\\ngoog.async.run.workQueue_ = new goog.async.WorkQueue();\\n\\n\\nif (goog.DEBUG) {\\n  /**\\n   * Reset the work queue. Only available for tests in debug mode.\\n   */\\n  goog.async.run.resetQueue = function() {\\n    goog.async.run.workQueueScheduled_ = false;\\n    goog.async.run.workQueue_ = new goog.async.WorkQueue();\\n  };\\n}\\n\\n\\n/**\\n * Run any pending goog.async.run work items. This function is not intended\\n * for general use, but for use by entry point handlers to run items ahead of\\n * goog.async.nextTick.\\n */\\ngoog.async.run.processWorkQueue = function() {\\n  // NOTE: additional work queue items may be added while processing.\\n  var item = null;\\n  while (item = goog.async.run.workQueue_.remove()) {\\n    try {\\n      item.fn.call(item.scope);\\n    } catch (e) {\\n      goog.async.throwException(e);\\n    }\\n    goog.async.run.workQueue_.returnUnused(item);\\n  }\\n\\n  // There are no more work items, allow processing to be scheduled again.\\n  goog.async.run.workQueueScheduled_ = false;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"ASSUME_NATIVE_PROMISE\",\"define\",\"async\",\"run\",\"goog.async.run\",\"callback\",\"opt_context\",\"schedule_\",\"initializeRunner_\",\"workQueueScheduled_\",\"workQueue_\",\"add\",\"goog.async.run.initializeRunner_\",\"global\",\"Promise\",\"resolve\",\"promise\",\"undefined\",\"goog.async.run.schedule_\",\"then\",\"processWorkQueue\",\"nextTick\",\"forceNextTick\",\"goog.async.run.forceNextTick\",\"opt_realSetTimeout\",\"WorkQueue\",\"DEBUG\",\"resetQueue\",\"goog.async.run.resetQueue\",\"goog.async.run.processWorkQueue\",\"item\",\"remove\",\"fn\",\"call\",\"scope\",\"e\",\"throwException\",\"returnUnused\"]\n}\n"]