["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/useragent/platform.js"],"~:js","goog.provide(\"goog.userAgent.platform\");\ngoog.require(\"goog.string\");\ngoog.require(\"goog.userAgent\");\ngoog.userAgent.platform.determineVersion_ = function() {\n  var re;\n  if (goog.userAgent.WINDOWS) {\n    re = /Windows NT ([0-9.]+)/;\n    var match = re.exec(goog.userAgent.getUserAgentString());\n    if (match) {\n      return match[1];\n    } else {\n      return \"0\";\n    }\n  } else {\n    if (goog.userAgent.MAC) {\n      re = /10[_.][0-9_.]+/;\n      var match = re.exec(goog.userAgent.getUserAgentString());\n      return match ? match[0].replace(/_/g, \".\") : \"10\";\n    } else {\n      if (goog.userAgent.ANDROID) {\n        re = /Android\\s+([^\\);]+)(\\)|;)/;\n        var match = re.exec(goog.userAgent.getUserAgentString());\n        return match ? match[1] : \"\";\n      } else {\n        if (goog.userAgent.IPHONE || goog.userAgent.IPAD || goog.userAgent.IPOD) {\n          re = /(?:iPhone|CPU)\\s+OS\\s+(\\S+)/;\n          var match = re.exec(goog.userAgent.getUserAgentString());\n          return match ? match[1].replace(/_/g, \".\") : \"\";\n        }\n      }\n    }\n  }\n  return \"\";\n};\ngoog.userAgent.platform.VERSION = goog.userAgent.platform.determineVersion_();\ngoog.userAgent.platform.isVersion = function(version) {\n  return goog.string.compareVersions(goog.userAgent.platform.VERSION, version) >= 0;\n};\n","~:source","// Copyright 2010 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Utilities for getting details about the user's platform.\n */\n\ngoog.provide('goog.userAgent.platform');\n\ngoog.require('goog.string');\ngoog.require('goog.userAgent');\n\n\n/**\n * Detects the version of the OS/platform the browser is running in. Not\n * supported for Linux, where an empty string is returned.\n *\n * @private\n * @return {string} The platform version.\n */\ngoog.userAgent.platform.determineVersion_ = function() {\n  var re;\n  if (goog.userAgent.WINDOWS) {\n    re = /Windows NT ([0-9.]+)/;\n    var match = re.exec(goog.userAgent.getUserAgentString());\n    if (match) {\n      return match[1];\n    } else {\n      return '0';\n    }\n  } else if (goog.userAgent.MAC) {\n    re = /10[_.][0-9_.]+/;\n    var match = re.exec(goog.userAgent.getUserAgentString());\n    // Note: some old versions of Camino do not report an OSX version.\n    // Default to 10.\n    return match ? match[0].replace(/_/g, '.') : '10';\n  } else if (goog.userAgent.ANDROID) {\n    re = /Android\\s+([^\\);]+)(\\)|;)/;\n    var match = re.exec(goog.userAgent.getUserAgentString());\n    return match ? match[1] : '';\n  } else if (\n      goog.userAgent.IPHONE || goog.userAgent.IPAD || goog.userAgent.IPOD) {\n    re = /(?:iPhone|CPU)\\s+OS\\s+(\\S+)/;\n    var match = re.exec(goog.userAgent.getUserAgentString());\n    // Report the version as x.y.z and not x_y_z\n    return match ? match[1].replace(/_/g, '.') : '';\n  }\n\n  return '';\n};\n\n\n/**\n * The version of the platform. We don't determine the version of Linux.\n * For Windows, we only look at the NT version. Non-NT-based versions\n * (e.g. 95, 98, etc.) are given version 0.0.\n * @type {string}\n */\ngoog.userAgent.platform.VERSION = goog.userAgent.platform.determineVersion_();\n\n\n/**\n * Whether the user agent platform version is higher or the same as the given\n * version.\n *\n * @param {string|number} version The version to check.\n * @return {boolean} Whether the user agent platform version is higher or the\n *     same as the given version.\n */\ngoog.userAgent.platform.isVersion = function(version) {\n  return goog.string.compareVersions(\n             goog.userAgent.platform.VERSION, version) >= 0;\n};\n","~:compiled-at",1609807670227,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.useragent.platform.js\",\n\"lineCount\":39,\n\"mappings\":\"AAkBAA,IAAA,CAAKC,OAAL,CAAa,yBAAb,CAAA;AAEAD,IAAA,CAAKE,OAAL,CAAa,aAAb,CAAA;AACAF,IAAA,CAAKE,OAAL,CAAa,gBAAb,CAAA;AAUAF,IAAA,CAAKG,SAAL,CAAeC,QAAf,CAAwBC,iBAAxB,GAA4CC,QAAQ,EAAG;AACrD,MAAIC,EAAJ;AACA,MAAIP,IAAJ,CAASG,SAAT,CAAmBK,OAAnB,CAA4B;AAC1BD,MAAA,GAAK,sBAAL;AACA,QAAIE,QAAQF,EAAA,CAAGG,IAAH,CAAQV,IAAA,CAAKG,SAAL,CAAeQ,kBAAf,EAAR,CAAZ;AACA,QAAIF,KAAJ;AACE,aAAOA,KAAA,CAAM,CAAN,CAAP;AADF;AAGE,aAAO,GAAP;AAHF;AAH0B,GAA5B;AAQO,QAAIT,IAAJ,CAASG,SAAT,CAAmBS,GAAnB,CAAwB;AAC7BL,QAAA,GAAK,gBAAL;AACA,UAAIE,QAAQF,EAAA,CAAGG,IAAH,CAAQV,IAAA,CAAKG,SAAL,CAAeQ,kBAAf,EAAR,CAAZ;AAGA,aAAOF,KAAA,GAAQA,KAAA,CAAM,CAAN,CAAA,CAASI,OAAT,CAAiB,IAAjB,EAAuB,GAAvB,CAAR,GAAsC,IAA7C;AAL6B,KAAxB;AAMA,UAAIb,IAAJ,CAASG,SAAT,CAAmBW,OAAnB,CAA4B;AACjCP,UAAA,GAAK,2BAAL;AACA,YAAIE,QAAQF,EAAA,CAAGG,IAAH,CAAQV,IAAA,CAAKG,SAAL,CAAeQ,kBAAf,EAAR,CAAZ;AACA,eAAOF,KAAA,GAAQA,KAAA,CAAM,CAAN,CAAR,GAAmB,EAA1B;AAHiC,OAA5B;AAIA,YACHT,IADG,CACEG,SADF,CACYY,MADZ,IACsBf,IADtB,CAC2BG,SAD3B,CACqCa,IADrC,IAC6ChB,IAD7C,CACkDG,SADlD,CAC4Dc,IAD5D,CACkE;AACvEV,YAAA,GAAK,6BAAL;AACA,cAAIE,QAAQF,EAAA,CAAGG,IAAH,CAAQV,IAAA,CAAKG,SAAL,CAAeQ,kBAAf,EAAR,CAAZ;AAEA,iBAAOF,KAAA,GAAQA,KAAA,CAAM,CAAN,CAAA,CAASI,OAAT,CAAiB,IAAjB,EAAuB,GAAvB,CAAR,GAAsC,EAA7C;AAJuE;AALlE;AANA;AARP;AA0BA,SAAO,EAAP;AA5BqD,CAAvD;AAsCAb,IAAA,CAAKG,SAAL,CAAeC,QAAf,CAAwBc,OAAxB,GAAkClB,IAAA,CAAKG,SAAL,CAAeC,QAAf,CAAwBC,iBAAxB,EAAlC;AAWAL,IAAA,CAAKG,SAAL,CAAeC,QAAf,CAAwBe,SAAxB,GAAoCC,QAAQ,CAACC,OAAD,CAAU;AACpD,SAAOrB,IAAA,CAAKsB,MAAL,CAAYC,eAAZ,CACIvB,IADJ,CACSG,SADT,CACmBC,QADnB,CAC4Bc,OAD5B,EACqCG,OADrC,CAAP,IACwD,CADxD;AADoD,CAAtD;;\",\n\"sources\":[\"goog/useragent/platform.js\"],\n\"sourcesContent\":[\"// Copyright 2010 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Utilities for getting details about the user's platform.\\n */\\n\\ngoog.provide('goog.userAgent.platform');\\n\\ngoog.require('goog.string');\\ngoog.require('goog.userAgent');\\n\\n\\n/**\\n * Detects the version of the OS/platform the browser is running in. Not\\n * supported for Linux, where an empty string is returned.\\n *\\n * @private\\n * @return {string} The platform version.\\n */\\ngoog.userAgent.platform.determineVersion_ = function() {\\n  var re;\\n  if (goog.userAgent.WINDOWS) {\\n    re = /Windows NT ([0-9.]+)/;\\n    var match = re.exec(goog.userAgent.getUserAgentString());\\n    if (match) {\\n      return match[1];\\n    } else {\\n      return '0';\\n    }\\n  } else if (goog.userAgent.MAC) {\\n    re = /10[_.][0-9_.]+/;\\n    var match = re.exec(goog.userAgent.getUserAgentString());\\n    // Note: some old versions of Camino do not report an OSX version.\\n    // Default to 10.\\n    return match ? match[0].replace(/_/g, '.') : '10';\\n  } else if (goog.userAgent.ANDROID) {\\n    re = /Android\\\\s+([^\\\\);]+)(\\\\)|;)/;\\n    var match = re.exec(goog.userAgent.getUserAgentString());\\n    return match ? match[1] : '';\\n  } else if (\\n      goog.userAgent.IPHONE || goog.userAgent.IPAD || goog.userAgent.IPOD) {\\n    re = /(?:iPhone|CPU)\\\\s+OS\\\\s+(\\\\S+)/;\\n    var match = re.exec(goog.userAgent.getUserAgentString());\\n    // Report the version as x.y.z and not x_y_z\\n    return match ? match[1].replace(/_/g, '.') : '';\\n  }\\n\\n  return '';\\n};\\n\\n\\n/**\\n * The version of the platform. We don't determine the version of Linux.\\n * For Windows, we only look at the NT version. Non-NT-based versions\\n * (e.g. 95, 98, etc.) are given version 0.0.\\n * @type {string}\\n */\\ngoog.userAgent.platform.VERSION = goog.userAgent.platform.determineVersion_();\\n\\n\\n/**\\n * Whether the user agent platform version is higher or the same as the given\\n * version.\\n *\\n * @param {string|number} version The version to check.\\n * @return {boolean} Whether the user agent platform version is higher or the\\n *     same as the given version.\\n */\\ngoog.userAgent.platform.isVersion = function(version) {\\n  return goog.string.compareVersions(\\n             goog.userAgent.platform.VERSION, version) >= 0;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"userAgent\",\"platform\",\"determineVersion_\",\"goog.userAgent.platform.determineVersion_\",\"re\",\"WINDOWS\",\"match\",\"exec\",\"getUserAgentString\",\"MAC\",\"replace\",\"ANDROID\",\"IPHONE\",\"IPAD\",\"IPOD\",\"VERSION\",\"isVersion\",\"goog.userAgent.platform.isVersion\",\"version\",\"string\",\"compareVersions\"]\n}\n"]