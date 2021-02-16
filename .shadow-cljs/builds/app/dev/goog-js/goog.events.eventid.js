["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/events/eventid.js"],"~:js","goog.provide(\"goog.events.EventId\");\ngoog.events.EventId = function(eventId) {\n  this.id = eventId;\n};\ngoog.events.EventId.prototype.toString = function() {\n  return this.id;\n};\n","~:source","// Copyright 2013 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\ngoog.provide('goog.events.EventId');\n\n\n\n/**\n * A templated class that is used when registering for events. Typical usage:\n *\n *    /** @type {goog.events.EventId<MyEventObj>} *\\\n *    var myEventId = new goog.events.EventId(\n *        goog.events.getUniqueId(('someEvent'));\n *\n *    // No need to cast or declare here since the compiler knows the\n *    // correct type of 'evt' (MyEventObj).\n *    something.listen(myEventId, function(evt) {});\n *\n * @param {string} eventId\n * @template T\n * @constructor\n * @struct\n * @final\n */\ngoog.events.EventId = function(eventId) {\n  /** @const */ this.id = eventId;\n};\n\n\n/**\n * @override\n */\ngoog.events.EventId.prototype.toString = function() {\n  return this.id;\n};\n","~:compiled-at",1612899773128,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.events.eventid.js\",\n\"lineCount\":8,\n\"mappings\":\"AAcAA,IAAA,CAAKC,OAAL,CAAa,qBAAb,CAAA;AAqBAD,IAAA,CAAKE,MAAL,CAAYC,OAAZ,GAAsBC,QAAQ,CAACC,OAAD,CAAU;AACxB,MAAA,CAAKC,EAAL,GAAUD,OAAV;AADwB,CAAxC;AAQAL,IAAA,CAAKE,MAAL,CAAYC,OAAZ,CAAoBI,SAApB,CAA8BC,QAA9B,GAAyCC,QAAQ,EAAG;AAClD,SAAO,IAAP,CAAYH,EAAZ;AADkD,CAApD;;\",\n\"sources\":[\"goog/events/eventid.js\"],\n\"sourcesContent\":[\"// Copyright 2013 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\ngoog.provide('goog.events.EventId');\\n\\n\\n\\n/**\\n * A templated class that is used when registering for events. Typical usage:\\n *\\n *    /** @type {goog.events.EventId<MyEventObj>} *\\\\\\n *    var myEventId = new goog.events.EventId(\\n *        goog.events.getUniqueId(('someEvent'));\\n *\\n *    // No need to cast or declare here since the compiler knows the\\n *    // correct type of 'evt' (MyEventObj).\\n *    something.listen(myEventId, function(evt) {});\\n *\\n * @param {string} eventId\\n * @template T\\n * @constructor\\n * @struct\\n * @final\\n */\\ngoog.events.EventId = function(eventId) {\\n  /** @const */ this.id = eventId;\\n};\\n\\n\\n/**\\n * @override\\n */\\ngoog.events.EventId.prototype.toString = function() {\\n  return this.id;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"events\",\"EventId\",\"goog.events.EventId\",\"eventId\",\"id\",\"prototype\",\"toString\",\"goog.events.EventId.prototype.toString\"]\n}\n"]