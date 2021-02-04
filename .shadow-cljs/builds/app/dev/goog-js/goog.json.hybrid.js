["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/json/hybrid.js"],"~:js","goog.provide(\"goog.json.hybrid\");\ngoog.require(\"goog.asserts\");\ngoog.require(\"goog.json\");\ngoog.json.hybrid.stringify = goog.json.USE_NATIVE_JSON ? goog.global[\"JSON\"][\"stringify\"] : function(obj) {\n  if (goog.global.JSON) {\n    try {\n      return goog.global.JSON.stringify(obj);\n    } catch (e) {\n    }\n  }\n  return goog.json.serialize(obj);\n};\ngoog.json.hybrid.parse_ = function(jsonString, fallbackParser) {\n  if (goog.global.JSON) {\n    try {\n      var obj = goog.global.JSON.parse(jsonString);\n      goog.asserts.assert(typeof obj == \"object\");\n      return obj;\n    } catch (e) {\n    }\n  }\n  return fallbackParser(jsonString);\n};\ngoog.json.hybrid.parse = goog.json.USE_NATIVE_JSON ? goog.global[\"JSON\"][\"parse\"] : function(jsonString) {\n  return goog.json.hybrid.parse_(jsonString, goog.json.parse);\n};\n","~:source","// Copyright 2013 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n\n/**\n * @fileoverview Utility to attempt native JSON processing, falling back to\n *     goog.json if not available.\n *\n *     This is intended as a drop-in for current users of goog.json who want\n *     to take advantage of native JSON if present.\n *\n * @author nnaze@google.com (Nathan Naze)\n */\n\ngoog.provide('goog.json.hybrid');\n\ngoog.require('goog.asserts');\ngoog.require('goog.json');\n\n\n/**\n * Attempts to serialize the JSON string natively, falling back to\n * `goog.json.serialize` if unsuccessful.\n * @param {!Object} obj JavaScript object to serialize to JSON.\n * @return {string} Resulting JSON string.\n */\ngoog.json.hybrid.stringify =\n    goog.json.USE_NATIVE_JSON ? goog.global['JSON']['stringify'] : function(\n                                                                       obj) {\n      if (goog.global.JSON) {\n        try {\n          return goog.global.JSON.stringify(obj);\n        } catch (e) {\n          // Native serialization failed.  Fall through to retry with\n          // goog.json.serialize.\n        }\n      }\n\n      return goog.json.serialize(obj);\n    };\n\n\n/**\n * Attempts to parse the JSON string natively, falling back to\n * the supplied `fallbackParser` if unsuccessful.\n * @param {string} jsonString JSON string to parse.\n * @param {function(string):Object} fallbackParser Fallback JSON parser used\n *     if native\n * @return {?Object} Resulting JSON object.\n * @private\n */\ngoog.json.hybrid.parse_ = function(jsonString, fallbackParser) {\n  if (goog.global.JSON) {\n    try {\n      var obj = goog.global.JSON.parse(jsonString);\n      goog.asserts.assert(typeof obj == 'object');\n      return /** @type {?Object} */ (obj);\n    } catch (e) {\n      // Native parse failed.  Fall through to retry with goog.json.parse.\n    }\n  }\n\n  return fallbackParser(jsonString);\n};\n\n\n/**\n * Attempts to parse the JSON string natively, falling back to\n * `goog.json.parse` if unsuccessful.\n * @param {string} jsonString JSON string to parse.\n * @return {?Object} Resulting JSON object.\n */\ngoog.json.hybrid.parse =\n    goog.json.USE_NATIVE_JSON ? goog.global['JSON']['parse'] : function(\n                                                                   jsonString) {\n      return goog.json.hybrid.parse_(jsonString, goog.json.parse);\n    };\n","~:compiled-at",1612454780881,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.json.hybrid.js\",\n\"lineCount\":27,\n\"mappings\":\"AAyBAA,IAAA,CAAKC,OAAL,CAAa,kBAAb,CAAA;AAEAD,IAAA,CAAKE,OAAL,CAAa,cAAb,CAAA;AACAF,IAAA,CAAKE,OAAL,CAAa,WAAb,CAAA;AASAF,IAAA,CAAKG,IAAL,CAAUC,MAAV,CAAiBC,SAAjB,GACIL,IAAA,CAAKG,IAAL,CAAUG,eAAV,GAA4BN,IAAA,CAAKO,MAAL,CAAY,MAAZ,CAAA,CAAoB,WAApB,CAA5B,GAA+D,QAAQ,CACJC,GADI,CACC;AACtE,MAAIR,IAAJ,CAASO,MAAT,CAAgBE,IAAhB;AACE,OAAI;AACF,aAAOT,IAAA,CAAKO,MAAL,CAAYE,IAAZ,CAAiBJ,SAAjB,CAA2BG,GAA3B,CAAP;AADE,KAEF,QAAOE,CAAP,CAAU;;AAHd;AASA,SAAOV,IAAA,CAAKG,IAAL,CAAUQ,SAAV,CAAoBH,GAApB,CAAP;AAVsE,CAF5E;AAyBAR,IAAA,CAAKG,IAAL,CAAUC,MAAV,CAAiBQ,MAAjB,GAA0BC,QAAQ,CAACC,UAAD,EAAaC,cAAb,CAA6B;AAC7D,MAAIf,IAAJ,CAASO,MAAT,CAAgBE,IAAhB;AACE,OAAI;AACF,UAAID,MAAMR,IAAA,CAAKO,MAAL,CAAYE,IAAZ,CAAiBO,KAAjB,CAAuBF,UAAvB,CAAV;AACAd,UAAA,CAAKiB,OAAL,CAAaC,MAAb,CAAoB,MAAOV,IAA3B,IAAkC,QAAlC,CAAA;AACA,aAA+BA,GAA/B;AAHE,KAIF,QAAOE,CAAP,CAAU;;AALd;AAUA,SAAOK,cAAA,CAAeD,UAAf,CAAP;AAX6D,CAA/D;AAqBAd,IAAA,CAAKG,IAAL,CAAUC,MAAV,CAAiBY,KAAjB,GACIhB,IAAA,CAAKG,IAAL,CAAUG,eAAV,GAA4BN,IAAA,CAAKO,MAAL,CAAY,MAAZ,CAAA,CAAoB,OAApB,CAA5B,GAA2D,QAAQ,CACJO,UADI,CACQ;AACzE,SAAOd,IAAA,CAAKG,IAAL,CAAUC,MAAV,CAAiBQ,MAAjB,CAAwBE,UAAxB,EAAoCd,IAApC,CAAyCG,IAAzC,CAA8Ca,KAA9C,CAAP;AADyE,CAF/E;;\",\n\"sources\":[\"goog/json/hybrid.js\"],\n\"sourcesContent\":[\"// Copyright 2013 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n\\n/**\\n * @fileoverview Utility to attempt native JSON processing, falling back to\\n *     goog.json if not available.\\n *\\n *     This is intended as a drop-in for current users of goog.json who want\\n *     to take advantage of native JSON if present.\\n *\\n * @author nnaze@google.com (Nathan Naze)\\n */\\n\\ngoog.provide('goog.json.hybrid');\\n\\ngoog.require('goog.asserts');\\ngoog.require('goog.json');\\n\\n\\n/**\\n * Attempts to serialize the JSON string natively, falling back to\\n * `goog.json.serialize` if unsuccessful.\\n * @param {!Object} obj JavaScript object to serialize to JSON.\\n * @return {string} Resulting JSON string.\\n */\\ngoog.json.hybrid.stringify =\\n    goog.json.USE_NATIVE_JSON ? goog.global['JSON']['stringify'] : function(\\n                                                                       obj) {\\n      if (goog.global.JSON) {\\n        try {\\n          return goog.global.JSON.stringify(obj);\\n        } catch (e) {\\n          // Native serialization failed.  Fall through to retry with\\n          // goog.json.serialize.\\n        }\\n      }\\n\\n      return goog.json.serialize(obj);\\n    };\\n\\n\\n/**\\n * Attempts to parse the JSON string natively, falling back to\\n * the supplied `fallbackParser` if unsuccessful.\\n * @param {string} jsonString JSON string to parse.\\n * @param {function(string):Object} fallbackParser Fallback JSON parser used\\n *     if native\\n * @return {?Object} Resulting JSON object.\\n * @private\\n */\\ngoog.json.hybrid.parse_ = function(jsonString, fallbackParser) {\\n  if (goog.global.JSON) {\\n    try {\\n      var obj = goog.global.JSON.parse(jsonString);\\n      goog.asserts.assert(typeof obj == 'object');\\n      return /** @type {?Object} */ (obj);\\n    } catch (e) {\\n      // Native parse failed.  Fall through to retry with goog.json.parse.\\n    }\\n  }\\n\\n  return fallbackParser(jsonString);\\n};\\n\\n\\n/**\\n * Attempts to parse the JSON string natively, falling back to\\n * `goog.json.parse` if unsuccessful.\\n * @param {string} jsonString JSON string to parse.\\n * @return {?Object} Resulting JSON object.\\n */\\ngoog.json.hybrid.parse =\\n    goog.json.USE_NATIVE_JSON ? goog.global['JSON']['parse'] : function(\\n                                                                   jsonString) {\\n      return goog.json.hybrid.parse_(jsonString, goog.json.parse);\\n    };\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"json\",\"hybrid\",\"stringify\",\"USE_NATIVE_JSON\",\"global\",\"obj\",\"JSON\",\"e\",\"serialize\",\"parse_\",\"goog.json.hybrid.parse_\",\"jsonString\",\"fallbackParser\",\"parse\",\"asserts\",\"assert\"]\n}\n"]