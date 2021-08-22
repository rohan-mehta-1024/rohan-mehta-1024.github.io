["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/labs/useragent/platform.js"],"~:js","goog.provide(\"goog.labs.userAgent.platform\");\ngoog.require(\"goog.labs.userAgent.util\");\ngoog.require(\"goog.string\");\ngoog.labs.userAgent.platform.isAndroid = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"Android\");\n};\ngoog.labs.userAgent.platform.isIpod = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"iPod\");\n};\ngoog.labs.userAgent.platform.isIphone = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"iPhone\") && !goog.labs.userAgent.util.matchUserAgent(\"iPod\") && !goog.labs.userAgent.util.matchUserAgent(\"iPad\");\n};\ngoog.labs.userAgent.platform.isIpad = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"iPad\");\n};\ngoog.labs.userAgent.platform.isIos = function() {\n  return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod();\n};\ngoog.labs.userAgent.platform.isMacintosh = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"Macintosh\");\n};\ngoog.labs.userAgent.platform.isLinux = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"Linux\");\n};\ngoog.labs.userAgent.platform.isWindows = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"Windows\");\n};\ngoog.labs.userAgent.platform.isChromeOS = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"CrOS\");\n};\ngoog.labs.userAgent.platform.isChromecast = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"CrKey\");\n};\ngoog.labs.userAgent.platform.isKaiOS = function() {\n  return goog.labs.userAgent.util.matchUserAgentIgnoreCase(\"KaiOS\");\n};\ngoog.labs.userAgent.platform.isGo2Phone = function() {\n  return goog.labs.userAgent.util.matchUserAgentIgnoreCase(\"GAFP\");\n};\ngoog.labs.userAgent.platform.getVersion = function() {\n  var userAgentString = goog.labs.userAgent.util.getUserAgent();\n  var version = \"\", re;\n  if (goog.labs.userAgent.platform.isWindows()) {\n    re = /Windows (?:NT|Phone) ([0-9.]+)/;\n    var match = re.exec(userAgentString);\n    if (match) {\n      version = match[1];\n    } else {\n      version = \"0.0\";\n    }\n  } else {\n    if (goog.labs.userAgent.platform.isIos()) {\n      re = /(?:iPhone|iPod|iPad|CPU)\\s+OS\\s+(\\S+)/;\n      var match = re.exec(userAgentString);\n      version = match && match[1].replace(/_/g, \".\");\n    } else {\n      if (goog.labs.userAgent.platform.isMacintosh()) {\n        re = /Mac OS X ([0-9_.]+)/;\n        var match = re.exec(userAgentString);\n        version = match ? match[1].replace(/_/g, \".\") : \"10\";\n      } else {\n        if (goog.labs.userAgent.platform.isKaiOS()) {\n          re = /(?:KaiOS)\\/(\\S+)/i;\n          var match = re.exec(userAgentString);\n          version = match && match[1];\n        } else {\n          if (goog.labs.userAgent.platform.isAndroid()) {\n            re = /Android\\s+([^\\);]+)(\\)|;)/;\n            var match = re.exec(userAgentString);\n            version = match && match[1];\n          } else {\n            if (goog.labs.userAgent.platform.isChromeOS()) {\n              re = /(?:CrOS\\s+(?:i686|x86_64)\\s+([0-9.]+))/;\n              var match = re.exec(userAgentString);\n              version = match && match[1];\n            }\n          }\n        }\n      }\n    }\n  }\n  return version || \"\";\n};\ngoog.labs.userAgent.platform.isVersionOrHigher = function(version) {\n  return goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), version) >= 0;\n};\n","~:source","// Copyright 2013 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Closure user agent platform detection.\n * @see <a href=\"http://www.useragentstring.com/\">User agent strings</a>\n * For more information on browser brand, rendering engine, or device see the\n * other sub-namespaces in goog.labs.userAgent (browser, engine, and device\n * respectively).\n *\n */\n\ngoog.provide('goog.labs.userAgent.platform');\n\ngoog.require('goog.labs.userAgent.util');\ngoog.require('goog.string');\n\n\n/**\n * @return {boolean} Whether the platform is Android.\n */\ngoog.labs.userAgent.platform.isAndroid = function() {\n  return goog.labs.userAgent.util.matchUserAgent('Android');\n};\n\n\n/**\n * @return {boolean} Whether the platform is iPod.\n */\ngoog.labs.userAgent.platform.isIpod = function() {\n  return goog.labs.userAgent.util.matchUserAgent('iPod');\n};\n\n\n/**\n * @return {boolean} Whether the platform is iPhone.\n */\ngoog.labs.userAgent.platform.isIphone = function() {\n  return goog.labs.userAgent.util.matchUserAgent('iPhone') &&\n      !goog.labs.userAgent.util.matchUserAgent('iPod') &&\n      !goog.labs.userAgent.util.matchUserAgent('iPad');\n};\n\n\n/**\n * @return {boolean} Whether the platform is iPad.\n */\ngoog.labs.userAgent.platform.isIpad = function() {\n  return goog.labs.userAgent.util.matchUserAgent('iPad');\n};\n\n\n/**\n * @return {boolean} Whether the platform is iOS.\n */\ngoog.labs.userAgent.platform.isIos = function() {\n  return goog.labs.userAgent.platform.isIphone() ||\n      goog.labs.userAgent.platform.isIpad() ||\n      goog.labs.userAgent.platform.isIpod();\n};\n\n\n/**\n * @return {boolean} Whether the platform is Mac.\n */\ngoog.labs.userAgent.platform.isMacintosh = function() {\n  return goog.labs.userAgent.util.matchUserAgent('Macintosh');\n};\n\n\n/**\n * Note: ChromeOS is not considered to be Linux as it does not report itself\n * as Linux in the user agent string.\n * @return {boolean} Whether the platform is Linux.\n */\ngoog.labs.userAgent.platform.isLinux = function() {\n  return goog.labs.userAgent.util.matchUserAgent('Linux');\n};\n\n\n/**\n * @return {boolean} Whether the platform is Windows.\n */\ngoog.labs.userAgent.platform.isWindows = function() {\n  return goog.labs.userAgent.util.matchUserAgent('Windows');\n};\n\n\n/**\n * @return {boolean} Whether the platform is ChromeOS.\n */\ngoog.labs.userAgent.platform.isChromeOS = function() {\n  return goog.labs.userAgent.util.matchUserAgent('CrOS');\n};\n\n/**\n * @return {boolean} Whether the platform is Chromecast.\n */\ngoog.labs.userAgent.platform.isChromecast = function() {\n  return goog.labs.userAgent.util.matchUserAgent('CrKey');\n};\n\n/**\n * @return {boolean} Whether the platform is KaiOS.\n */\ngoog.labs.userAgent.platform.isKaiOS = function() {\n  return goog.labs.userAgent.util.matchUserAgentIgnoreCase('KaiOS');\n};\n\n/**\n * @return {boolean} Whether the platform is Go2Phone.\n */\ngoog.labs.userAgent.platform.isGo2Phone = function() {\n  return goog.labs.userAgent.util.matchUserAgentIgnoreCase('GAFP');\n};\n\n/**\n * The version of the platform. We only determine the version for Windows,\n * Mac, and Chrome OS. It doesn't make much sense on Linux. For Windows, we only\n * look at the NT version. Non-NT-based versions (e.g. 95, 98, etc.) are given\n * version 0.0.\n *\n * @return {string} The platform version or empty string if version cannot be\n *     determined.\n */\ngoog.labs.userAgent.platform.getVersion = function() {\n  var userAgentString = goog.labs.userAgent.util.getUserAgent();\n  var version = '', re;\n  if (goog.labs.userAgent.platform.isWindows()) {\n    re = /Windows (?:NT|Phone) ([0-9.]+)/;\n    var match = re.exec(userAgentString);\n    if (match) {\n      version = match[1];\n    } else {\n      version = '0.0';\n    }\n  } else if (goog.labs.userAgent.platform.isIos()) {\n    re = /(?:iPhone|iPod|iPad|CPU)\\s+OS\\s+(\\S+)/;\n    var match = re.exec(userAgentString);\n    // Report the version as x.y.z and not x_y_z\n    version = match && match[1].replace(/_/g, '.');\n  } else if (goog.labs.userAgent.platform.isMacintosh()) {\n    re = /Mac OS X ([0-9_.]+)/;\n    var match = re.exec(userAgentString);\n    // Note: some old versions of Camino do not report an OSX version.\n    // Default to 10.\n    version = match ? match[1].replace(/_/g, '.') : '10';\n  } else if (goog.labs.userAgent.platform.isKaiOS()) {\n    re = /(?:KaiOS)\\/(\\S+)/i;\n    var match = re.exec(userAgentString);\n    version = match && match[1];\n  } else if (goog.labs.userAgent.platform.isAndroid()) {\n    re = /Android\\s+([^\\);]+)(\\)|;)/;\n    var match = re.exec(userAgentString);\n    version = match && match[1];\n  } else if (goog.labs.userAgent.platform.isChromeOS()) {\n    re = /(?:CrOS\\s+(?:i686|x86_64)\\s+([0-9.]+))/;\n    var match = re.exec(userAgentString);\n    version = match && match[1];\n  }\n  return version || '';\n};\n\n\n/**\n * @param {string|number} version The version to check.\n * @return {boolean} Whether the browser version is higher or the same as the\n *     given version.\n */\ngoog.labs.userAgent.platform.isVersionOrHigher = function(version) {\n  return goog.string.compareVersions(\n             goog.labs.userAgent.platform.getVersion(), version) >= 0;\n};\n","~:compiled-at",1629656112912,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.labs.useragent.platform.js\",\n\"lineCount\":87,\n\"mappings\":\"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\",\n\"sources\":[\"goog/labs/useragent/platform.js\"],\n\"sourcesContent\":[\"// Copyright 2013 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Closure user agent platform detection.\\n * @see <a href=\\\"http://www.useragentstring.com/\\\">User agent strings</a>\\n * For more information on browser brand, rendering engine, or device see the\\n * other sub-namespaces in goog.labs.userAgent (browser, engine, and device\\n * respectively).\\n *\\n */\\n\\ngoog.provide('goog.labs.userAgent.platform');\\n\\ngoog.require('goog.labs.userAgent.util');\\ngoog.require('goog.string');\\n\\n\\n/**\\n * @return {boolean} Whether the platform is Android.\\n */\\ngoog.labs.userAgent.platform.isAndroid = function() {\\n  return goog.labs.userAgent.util.matchUserAgent('Android');\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the platform is iPod.\\n */\\ngoog.labs.userAgent.platform.isIpod = function() {\\n  return goog.labs.userAgent.util.matchUserAgent('iPod');\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the platform is iPhone.\\n */\\ngoog.labs.userAgent.platform.isIphone = function() {\\n  return goog.labs.userAgent.util.matchUserAgent('iPhone') &&\\n      !goog.labs.userAgent.util.matchUserAgent('iPod') &&\\n      !goog.labs.userAgent.util.matchUserAgent('iPad');\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the platform is iPad.\\n */\\ngoog.labs.userAgent.platform.isIpad = function() {\\n  return goog.labs.userAgent.util.matchUserAgent('iPad');\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the platform is iOS.\\n */\\ngoog.labs.userAgent.platform.isIos = function() {\\n  return goog.labs.userAgent.platform.isIphone() ||\\n      goog.labs.userAgent.platform.isIpad() ||\\n      goog.labs.userAgent.platform.isIpod();\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the platform is Mac.\\n */\\ngoog.labs.userAgent.platform.isMacintosh = function() {\\n  return goog.labs.userAgent.util.matchUserAgent('Macintosh');\\n};\\n\\n\\n/**\\n * Note: ChromeOS is not considered to be Linux as it does not report itself\\n * as Linux in the user agent string.\\n * @return {boolean} Whether the platform is Linux.\\n */\\ngoog.labs.userAgent.platform.isLinux = function() {\\n  return goog.labs.userAgent.util.matchUserAgent('Linux');\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the platform is Windows.\\n */\\ngoog.labs.userAgent.platform.isWindows = function() {\\n  return goog.labs.userAgent.util.matchUserAgent('Windows');\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the platform is ChromeOS.\\n */\\ngoog.labs.userAgent.platform.isChromeOS = function() {\\n  return goog.labs.userAgent.util.matchUserAgent('CrOS');\\n};\\n\\n/**\\n * @return {boolean} Whether the platform is Chromecast.\\n */\\ngoog.labs.userAgent.platform.isChromecast = function() {\\n  return goog.labs.userAgent.util.matchUserAgent('CrKey');\\n};\\n\\n/**\\n * @return {boolean} Whether the platform is KaiOS.\\n */\\ngoog.labs.userAgent.platform.isKaiOS = function() {\\n  return goog.labs.userAgent.util.matchUserAgentIgnoreCase('KaiOS');\\n};\\n\\n/**\\n * @return {boolean} Whether the platform is Go2Phone.\\n */\\ngoog.labs.userAgent.platform.isGo2Phone = function() {\\n  return goog.labs.userAgent.util.matchUserAgentIgnoreCase('GAFP');\\n};\\n\\n/**\\n * The version of the platform. We only determine the version for Windows,\\n * Mac, and Chrome OS. It doesn't make much sense on Linux. For Windows, we only\\n * look at the NT version. Non-NT-based versions (e.g. 95, 98, etc.) are given\\n * version 0.0.\\n *\\n * @return {string} The platform version or empty string if version cannot be\\n *     determined.\\n */\\ngoog.labs.userAgent.platform.getVersion = function() {\\n  var userAgentString = goog.labs.userAgent.util.getUserAgent();\\n  var version = '', re;\\n  if (goog.labs.userAgent.platform.isWindows()) {\\n    re = /Windows (?:NT|Phone) ([0-9.]+)/;\\n    var match = re.exec(userAgentString);\\n    if (match) {\\n      version = match[1];\\n    } else {\\n      version = '0.0';\\n    }\\n  } else if (goog.labs.userAgent.platform.isIos()) {\\n    re = /(?:iPhone|iPod|iPad|CPU)\\\\s+OS\\\\s+(\\\\S+)/;\\n    var match = re.exec(userAgentString);\\n    // Report the version as x.y.z and not x_y_z\\n    version = match && match[1].replace(/_/g, '.');\\n  } else if (goog.labs.userAgent.platform.isMacintosh()) {\\n    re = /Mac OS X ([0-9_.]+)/;\\n    var match = re.exec(userAgentString);\\n    // Note: some old versions of Camino do not report an OSX version.\\n    // Default to 10.\\n    version = match ? match[1].replace(/_/g, '.') : '10';\\n  } else if (goog.labs.userAgent.platform.isKaiOS()) {\\n    re = /(?:KaiOS)\\\\/(\\\\S+)/i;\\n    var match = re.exec(userAgentString);\\n    version = match && match[1];\\n  } else if (goog.labs.userAgent.platform.isAndroid()) {\\n    re = /Android\\\\s+([^\\\\);]+)(\\\\)|;)/;\\n    var match = re.exec(userAgentString);\\n    version = match && match[1];\\n  } else if (goog.labs.userAgent.platform.isChromeOS()) {\\n    re = /(?:CrOS\\\\s+(?:i686|x86_64)\\\\s+([0-9.]+))/;\\n    var match = re.exec(userAgentString);\\n    version = match && match[1];\\n  }\\n  return version || '';\\n};\\n\\n\\n/**\\n * @param {string|number} version The version to check.\\n * @return {boolean} Whether the browser version is higher or the same as the\\n *     given version.\\n */\\ngoog.labs.userAgent.platform.isVersionOrHigher = function(version) {\\n  return goog.string.compareVersions(\\n             goog.labs.userAgent.platform.getVersion(), version) >= 0;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"labs\",\"userAgent\",\"platform\",\"isAndroid\",\"goog.labs.userAgent.platform.isAndroid\",\"util\",\"matchUserAgent\",\"isIpod\",\"goog.labs.userAgent.platform.isIpod\",\"isIphone\",\"goog.labs.userAgent.platform.isIphone\",\"isIpad\",\"goog.labs.userAgent.platform.isIpad\",\"isIos\",\"goog.labs.userAgent.platform.isIos\",\"isMacintosh\",\"goog.labs.userAgent.platform.isMacintosh\",\"isLinux\",\"goog.labs.userAgent.platform.isLinux\",\"isWindows\",\"goog.labs.userAgent.platform.isWindows\",\"isChromeOS\",\"goog.labs.userAgent.platform.isChromeOS\",\"isChromecast\",\"goog.labs.userAgent.platform.isChromecast\",\"isKaiOS\",\"goog.labs.userAgent.platform.isKaiOS\",\"matchUserAgentIgnoreCase\",\"isGo2Phone\",\"goog.labs.userAgent.platform.isGo2Phone\",\"getVersion\",\"goog.labs.userAgent.platform.getVersion\",\"userAgentString\",\"getUserAgent\",\"version\",\"re\",\"match\",\"exec\",\"replace\",\"isVersionOrHigher\",\"goog.labs.userAgent.platform.isVersionOrHigher\",\"string\",\"compareVersions\"]\n}\n"]