["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/structs/collection.js"],"~:js","goog.provide(\"goog.structs.Collection\");\ngoog.structs.Collection = function() {\n};\ngoog.structs.Collection.prototype.add;\ngoog.structs.Collection.prototype.remove;\ngoog.structs.Collection.prototype.contains;\ngoog.structs.Collection.prototype.getCount;\n","~:source","// Copyright 2011 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Defines the collection interface.\n *\n * @author nnaze@google.com (Nathan Naze)\n */\n\ngoog.provide('goog.structs.Collection');\n\n\n\n/**\n * An interface for a collection of values.\n * @interface\n * @template T\n */\ngoog.structs.Collection = function() {};\n\n\n/**\n * @param {T} value Value to add to the collection.\n */\ngoog.structs.Collection.prototype.add;\n\n\n/**\n * @param {T} value Value to remove from the collection.\n */\ngoog.structs.Collection.prototype.remove;\n\n\n/**\n * @param {T} value Value to find in the collection.\n * @return {boolean} Whether the collection contains the specified value.\n */\ngoog.structs.Collection.prototype.contains;\n\n\n/**\n * @return {number} The number of values stored in the collection.\n */\ngoog.structs.Collection.prototype.getCount;\n","~:compiled-at",1610580718804,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.structs.collection.js\",\n\"lineCount\":8,\n\"mappings\":\"AAoBAA,IAAA,CAAKC,OAAL,CAAa,yBAAb,CAAA;AASAD,IAAA,CAAKE,OAAL,CAAaC,UAAb,GAA0BC,QAAQ,EAAG;CAArC;AAMAJ,IAAA,CAAKE,OAAL,CAAaC,UAAb,CAAwBE,SAAxB,CAAkCC,GAAlC;AAMAN,IAAA,CAAKE,OAAL,CAAaC,UAAb,CAAwBE,SAAxB,CAAkCE,MAAlC;AAOAP,IAAA,CAAKE,OAAL,CAAaC,UAAb,CAAwBE,SAAxB,CAAkCG,QAAlC;AAMAR,IAAA,CAAKE,OAAL,CAAaC,UAAb,CAAwBE,SAAxB,CAAkCI,QAAlC;;\",\n\"sources\":[\"goog/structs/collection.js\"],\n\"sourcesContent\":[\"// Copyright 2011 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Defines the collection interface.\\n *\\n * @author nnaze@google.com (Nathan Naze)\\n */\\n\\ngoog.provide('goog.structs.Collection');\\n\\n\\n\\n/**\\n * An interface for a collection of values.\\n * @interface\\n * @template T\\n */\\ngoog.structs.Collection = function() {};\\n\\n\\n/**\\n * @param {T} value Value to add to the collection.\\n */\\ngoog.structs.Collection.prototype.add;\\n\\n\\n/**\\n * @param {T} value Value to remove from the collection.\\n */\\ngoog.structs.Collection.prototype.remove;\\n\\n\\n/**\\n * @param {T} value Value to find in the collection.\\n * @return {boolean} Whether the collection contains the specified value.\\n */\\ngoog.structs.Collection.prototype.contains;\\n\\n\\n/**\\n * @return {number} The number of values stored in the collection.\\n */\\ngoog.structs.Collection.prototype.getCount;\\n\"],\n\"names\":[\"goog\",\"provide\",\"structs\",\"Collection\",\"goog.structs.Collection\",\"prototype\",\"add\",\"remove\",\"contains\",\"getCount\"]\n}\n"]