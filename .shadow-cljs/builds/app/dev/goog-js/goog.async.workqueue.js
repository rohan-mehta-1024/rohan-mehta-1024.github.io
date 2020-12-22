["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/async/workqueue.js"],"~:js","goog.provide(\"goog.async.WorkItem\");\ngoog.provide(\"goog.async.WorkQueue\");\ngoog.require(\"goog.asserts\");\ngoog.require(\"goog.async.FreeList\");\ngoog.async.WorkQueue = function() {\n  this.workHead_ = null;\n  this.workTail_ = null;\n};\ngoog.async.WorkQueue.DEFAULT_MAX_UNUSED = goog.define(\"goog.async.WorkQueue.DEFAULT_MAX_UNUSED\", 100);\ngoog.async.WorkQueue.freelist_ = new goog.async.FreeList(function() {\n  return new goog.async.WorkItem;\n}, function(item) {\n  item.reset();\n}, goog.async.WorkQueue.DEFAULT_MAX_UNUSED);\ngoog.async.WorkQueue.prototype.add = function(fn, scope) {\n  var item = this.getUnusedItem_();\n  item.set(fn, scope);\n  if (this.workTail_) {\n    this.workTail_.next = item;\n    this.workTail_ = item;\n  } else {\n    goog.asserts.assert(!this.workHead_);\n    this.workHead_ = item;\n    this.workTail_ = item;\n  }\n};\ngoog.async.WorkQueue.prototype.remove = function() {\n  var item = null;\n  if (this.workHead_) {\n    item = this.workHead_;\n    this.workHead_ = this.workHead_.next;\n    if (!this.workHead_) {\n      this.workTail_ = null;\n    }\n    item.next = null;\n  }\n  return item;\n};\ngoog.async.WorkQueue.prototype.returnUnused = function(item) {\n  goog.async.WorkQueue.freelist_.put(item);\n};\ngoog.async.WorkQueue.prototype.getUnusedItem_ = function() {\n  return goog.async.WorkQueue.freelist_.get();\n};\ngoog.async.WorkItem = function() {\n  this.fn = null;\n  this.scope = null;\n  this.next = null;\n};\ngoog.async.WorkItem.prototype.set = function(fn, scope) {\n  this.fn = fn;\n  this.scope = scope;\n  this.next = null;\n};\ngoog.async.WorkItem.prototype.reset = function() {\n  this.fn = null;\n  this.scope = null;\n  this.next = null;\n};\n","~:source","// Copyright 2015 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\ngoog.provide('goog.async.WorkItem');\ngoog.provide('goog.async.WorkQueue');\n\ngoog.require('goog.asserts');\ngoog.require('goog.async.FreeList');\n\n\n// TODO(johnlenz): generalize the WorkQueue if this is used by more\n// than goog.async.run.\n\n\n\n/**\n * A low GC workqueue. The key elements of this design:\n *   - avoids the need for goog.bind or equivalent by carrying scope\n *   - avoids the need for array reallocation by using a linked list\n *   - minimizes work entry objects allocation by recycling objects\n * @constructor\n * @final\n * @struct\n */\ngoog.async.WorkQueue = function() {\n  this.workHead_ = null;\n  this.workTail_ = null;\n};\n\n\n/** @define {number} The maximum number of entries to keep for recycling. */\ngoog.async.WorkQueue.DEFAULT_MAX_UNUSED =\n    goog.define('goog.async.WorkQueue.DEFAULT_MAX_UNUSED', 100);\n\n\n/** @const @private {goog.async.FreeList<goog.async.WorkItem>} */\ngoog.async.WorkQueue.freelist_ = new goog.async.FreeList(\n    function() { return new goog.async.WorkItem(); },\n    function(item) { item.reset(); }, goog.async.WorkQueue.DEFAULT_MAX_UNUSED);\n\n\n/**\n * @param {function()} fn\n * @param {Object|null|undefined} scope\n */\ngoog.async.WorkQueue.prototype.add = function(fn, scope) {\n  var item = this.getUnusedItem_();\n  item.set(fn, scope);\n\n  if (this.workTail_) {\n    this.workTail_.next = item;\n    this.workTail_ = item;\n  } else {\n    goog.asserts.assert(!this.workHead_);\n    this.workHead_ = item;\n    this.workTail_ = item;\n  }\n};\n\n\n/**\n * @return {goog.async.WorkItem}\n */\ngoog.async.WorkQueue.prototype.remove = function() {\n  var item = null;\n\n  if (this.workHead_) {\n    item = this.workHead_;\n    this.workHead_ = this.workHead_.next;\n    if (!this.workHead_) {\n      this.workTail_ = null;\n    }\n    item.next = null;\n  }\n  return item;\n};\n\n\n/**\n * @param {goog.async.WorkItem} item\n */\ngoog.async.WorkQueue.prototype.returnUnused = function(item) {\n  goog.async.WorkQueue.freelist_.put(item);\n};\n\n\n/**\n * @return {goog.async.WorkItem}\n * @private\n */\ngoog.async.WorkQueue.prototype.getUnusedItem_ = function() {\n  return goog.async.WorkQueue.freelist_.get();\n};\n\n\n\n/**\n * @constructor\n * @final\n * @struct\n */\ngoog.async.WorkItem = function() {\n  /** @type {?function()} */\n  this.fn = null;\n  /** @type {?Object|null|undefined} */\n  this.scope = null;\n  /** @type {?goog.async.WorkItem} */\n  this.next = null;\n};\n\n\n/**\n * @param {function()} fn\n * @param {Object|null|undefined} scope\n */\ngoog.async.WorkItem.prototype.set = function(fn, scope) {\n  this.fn = fn;\n  this.scope = scope;\n  this.next = null;\n};\n\n\n/** Reset the work item so they don't prevent GC before reuse */\ngoog.async.WorkItem.prototype.reset = function() {\n  this.fn = null;\n  this.scope = null;\n  this.next = null;\n};\n","~:compiled-at",1608492775883,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.async.workqueue.js\",\n\"lineCount\":60,\n\"mappings\":\"AAcAA,IAAA,CAAKC,OAAL,CAAa,qBAAb,CAAA;AACAD,IAAA,CAAKC,OAAL,CAAa,sBAAb,CAAA;AAEAD,IAAA,CAAKE,OAAL,CAAa,cAAb,CAAA;AACAF,IAAA,CAAKE,OAAL,CAAa,qBAAb,CAAA;AAiBAF,IAAA,CAAKG,KAAL,CAAWC,SAAX,GAAuBC,QAAQ,EAAG;AAChC,MAAA,CAAKC,SAAL,GAAiB,IAAjB;AACA,MAAA,CAAKC,SAAL,GAAiB,IAAjB;AAFgC,CAAlC;AAOAP,IAAA,CAAKG,KAAL,CAAWC,SAAX,CAAqBI,kBAArB,GACIR,IAAA,CAAKS,MAAL,CAAY,yCAAZ,EAAuD,GAAvD,CADJ;AAKAT,IAAA,CAAKG,KAAL,CAAWC,SAAX,CAAqBM,SAArB,GAAiC,IAAIV,IAAJ,CAASG,KAAT,CAAeQ,QAAf,CAC7B,QAAQ,EAAG;AAAE,SAAO,IAAIX,IAAJ,CAASG,KAAT,CAAeS,QAAtB;AAAF,CADkB,EAE7B,QAAQ,CAACC,IAAD,CAAO;AAAEA,MAAA,CAAKC,KAAL,EAAA;AAAF,CAFc,EAEKd,IAFL,CAEUG,KAFV,CAEgBC,SAFhB,CAE0BI,kBAF1B,CAAjC;AASAR,IAAA,CAAKG,KAAL,CAAWC,SAAX,CAAqBW,SAArB,CAA+BC,GAA/B,GAAqCC,QAAQ,CAACC,EAAD,EAAKC,KAAL,CAAY;AACvD,MAAIN,OAAO,IAAA,CAAKO,cAAL,EAAX;AACAP,MAAA,CAAKQ,GAAL,CAASH,EAAT,EAAaC,KAAb,CAAA;AAEA,MAAI,IAAJ,CAASZ,SAAT,CAAoB;AAClB,QAAA,CAAKA,SAAL,CAAee,IAAf,GAAsBT,IAAtB;AACA,QAAA,CAAKN,SAAL,GAAiBM,IAAjB;AAFkB,GAApB,KAGO;AACLb,QAAA,CAAKuB,OAAL,CAAaC,MAAb,CAAoB,CAAC,IAAD,CAAMlB,SAA1B,CAAA;AACA,QAAA,CAAKA,SAAL,GAAiBO,IAAjB;AACA,QAAA,CAAKN,SAAL,GAAiBM,IAAjB;AAHK;AAPgD,CAAzD;AAkBAb,IAAA,CAAKG,KAAL,CAAWC,SAAX,CAAqBW,SAArB,CAA+BU,MAA/B,GAAwCC,QAAQ,EAAG;AACjD,MAAIb,OAAO,IAAX;AAEA,MAAI,IAAJ,CAASP,SAAT,CAAoB;AAClBO,QAAA,GAAO,IAAP,CAAYP,SAAZ;AACA,QAAA,CAAKA,SAAL,GAAiB,IAAjB,CAAsBA,SAAtB,CAAgCgB,IAAhC;AACA,QAAI,CAAC,IAAD,CAAMhB,SAAV;AACE,UAAA,CAAKC,SAAL,GAAiB,IAAjB;AADF;AAGAM,QAAA,CAAKS,IAAL,GAAY,IAAZ;AANkB;AAQpB,SAAOT,IAAP;AAXiD,CAAnD;AAkBAb,IAAA,CAAKG,KAAL,CAAWC,SAAX,CAAqBW,SAArB,CAA+BY,YAA/B,GAA8CC,QAAQ,CAACf,IAAD,CAAO;AAC3Db,MAAA,CAAKG,KAAL,CAAWC,SAAX,CAAqBM,SAArB,CAA+BmB,GAA/B,CAAmChB,IAAnC,CAAA;AAD2D,CAA7D;AASAb,IAAA,CAAKG,KAAL,CAAWC,SAAX,CAAqBW,SAArB,CAA+BK,cAA/B,GAAgDU,QAAQ,EAAG;AACzD,SAAO9B,IAAA,CAAKG,KAAL,CAAWC,SAAX,CAAqBM,SAArB,CAA+BqB,GAA/B,EAAP;AADyD,CAA3D;AAWA/B,IAAA,CAAKG,KAAL,CAAWS,QAAX,GAAsBoB,QAAQ,EAAG;AAE/B,MAAA,CAAKd,EAAL,GAAU,IAAV;AAEA,MAAA,CAAKC,KAAL,GAAa,IAAb;AAEA,MAAA,CAAKG,IAAL,GAAY,IAAZ;AAN+B,CAAjC;AAcAtB,IAAA,CAAKG,KAAL,CAAWS,QAAX,CAAoBG,SAApB,CAA8BM,GAA9B,GAAoCY,QAAQ,CAACf,EAAD,EAAKC,KAAL,CAAY;AACtD,MAAA,CAAKD,EAAL,GAAUA,EAAV;AACA,MAAA,CAAKC,KAAL,GAAaA,KAAb;AACA,MAAA,CAAKG,IAAL,GAAY,IAAZ;AAHsD,CAAxD;AAQAtB,IAAA,CAAKG,KAAL,CAAWS,QAAX,CAAoBG,SAApB,CAA8BD,KAA9B,GAAsCoB,QAAQ,EAAG;AAC/C,MAAA,CAAKhB,EAAL,GAAU,IAAV;AACA,MAAA,CAAKC,KAAL,GAAa,IAAb;AACA,MAAA,CAAKG,IAAL,GAAY,IAAZ;AAH+C,CAAjD;;\",\n\"sources\":[\"goog/async/workqueue.js\"],\n\"sourcesContent\":[\"// Copyright 2015 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\ngoog.provide('goog.async.WorkItem');\\ngoog.provide('goog.async.WorkQueue');\\n\\ngoog.require('goog.asserts');\\ngoog.require('goog.async.FreeList');\\n\\n\\n// TODO(johnlenz): generalize the WorkQueue if this is used by more\\n// than goog.async.run.\\n\\n\\n\\n/**\\n * A low GC workqueue. The key elements of this design:\\n *   - avoids the need for goog.bind or equivalent by carrying scope\\n *   - avoids the need for array reallocation by using a linked list\\n *   - minimizes work entry objects allocation by recycling objects\\n * @constructor\\n * @final\\n * @struct\\n */\\ngoog.async.WorkQueue = function() {\\n  this.workHead_ = null;\\n  this.workTail_ = null;\\n};\\n\\n\\n/** @define {number} The maximum number of entries to keep for recycling. */\\ngoog.async.WorkQueue.DEFAULT_MAX_UNUSED =\\n    goog.define('goog.async.WorkQueue.DEFAULT_MAX_UNUSED', 100);\\n\\n\\n/** @const @private {goog.async.FreeList<goog.async.WorkItem>} */\\ngoog.async.WorkQueue.freelist_ = new goog.async.FreeList(\\n    function() { return new goog.async.WorkItem(); },\\n    function(item) { item.reset(); }, goog.async.WorkQueue.DEFAULT_MAX_UNUSED);\\n\\n\\n/**\\n * @param {function()} fn\\n * @param {Object|null|undefined} scope\\n */\\ngoog.async.WorkQueue.prototype.add = function(fn, scope) {\\n  var item = this.getUnusedItem_();\\n  item.set(fn, scope);\\n\\n  if (this.workTail_) {\\n    this.workTail_.next = item;\\n    this.workTail_ = item;\\n  } else {\\n    goog.asserts.assert(!this.workHead_);\\n    this.workHead_ = item;\\n    this.workTail_ = item;\\n  }\\n};\\n\\n\\n/**\\n * @return {goog.async.WorkItem}\\n */\\ngoog.async.WorkQueue.prototype.remove = function() {\\n  var item = null;\\n\\n  if (this.workHead_) {\\n    item = this.workHead_;\\n    this.workHead_ = this.workHead_.next;\\n    if (!this.workHead_) {\\n      this.workTail_ = null;\\n    }\\n    item.next = null;\\n  }\\n  return item;\\n};\\n\\n\\n/**\\n * @param {goog.async.WorkItem} item\\n */\\ngoog.async.WorkQueue.prototype.returnUnused = function(item) {\\n  goog.async.WorkQueue.freelist_.put(item);\\n};\\n\\n\\n/**\\n * @return {goog.async.WorkItem}\\n * @private\\n */\\ngoog.async.WorkQueue.prototype.getUnusedItem_ = function() {\\n  return goog.async.WorkQueue.freelist_.get();\\n};\\n\\n\\n\\n/**\\n * @constructor\\n * @final\\n * @struct\\n */\\ngoog.async.WorkItem = function() {\\n  /** @type {?function()} */\\n  this.fn = null;\\n  /** @type {?Object|null|undefined} */\\n  this.scope = null;\\n  /** @type {?goog.async.WorkItem} */\\n  this.next = null;\\n};\\n\\n\\n/**\\n * @param {function()} fn\\n * @param {Object|null|undefined} scope\\n */\\ngoog.async.WorkItem.prototype.set = function(fn, scope) {\\n  this.fn = fn;\\n  this.scope = scope;\\n  this.next = null;\\n};\\n\\n\\n/** Reset the work item so they don't prevent GC before reuse */\\ngoog.async.WorkItem.prototype.reset = function() {\\n  this.fn = null;\\n  this.scope = null;\\n  this.next = null;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"async\",\"WorkQueue\",\"goog.async.WorkQueue\",\"workHead_\",\"workTail_\",\"DEFAULT_MAX_UNUSED\",\"define\",\"freelist_\",\"FreeList\",\"WorkItem\",\"item\",\"reset\",\"prototype\",\"add\",\"goog.async.WorkQueue.prototype.add\",\"fn\",\"scope\",\"getUnusedItem_\",\"set\",\"next\",\"asserts\",\"assert\",\"remove\",\"goog.async.WorkQueue.prototype.remove\",\"returnUnused\",\"goog.async.WorkQueue.prototype.returnUnused\",\"put\",\"goog.async.WorkQueue.prototype.getUnusedItem_\",\"get\",\"goog.async.WorkItem\",\"goog.async.WorkItem.prototype.set\",\"goog.async.WorkItem.prototype.reset\"]\n}\n"]