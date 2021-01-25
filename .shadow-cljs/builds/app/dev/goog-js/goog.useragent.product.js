["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/useragent/product.js"],"~:js","goog.provide(\"goog.userAgent.product\");\ngoog.require(\"goog.labs.userAgent.browser\");\ngoog.require(\"goog.labs.userAgent.platform\");\ngoog.require(\"goog.userAgent\");\ngoog.userAgent.product.ASSUME_FIREFOX = goog.define(\"goog.userAgent.product.ASSUME_FIREFOX\", false);\ngoog.userAgent.product.ASSUME_IPHONE = goog.define(\"goog.userAgent.product.ASSUME_IPHONE\", false);\ngoog.userAgent.product.ASSUME_IPAD = goog.define(\"goog.userAgent.product.ASSUME_IPAD\", false);\ngoog.userAgent.product.ASSUME_ANDROID = goog.define(\"goog.userAgent.product.ASSUME_ANDROID\", false);\ngoog.userAgent.product.ASSUME_CHROME = goog.define(\"goog.userAgent.product.ASSUME_CHROME\", false);\ngoog.userAgent.product.ASSUME_SAFARI = goog.define(\"goog.userAgent.product.ASSUME_SAFARI\", false);\ngoog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI;\ngoog.userAgent.product.OPERA = goog.userAgent.OPERA;\ngoog.userAgent.product.IE = goog.userAgent.IE;\ngoog.userAgent.product.EDGE = goog.userAgent.EDGE;\ngoog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox();\ngoog.userAgent.product.isIphoneOrIpod_ = function() {\n  return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod();\n};\ngoog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_();\ngoog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();\ngoog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser();\ngoog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome();\ngoog.userAgent.product.isSafariDesktop_ = function() {\n  return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos();\n};\ngoog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_();\n","~:source","// Copyright 2008 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Detects the specific browser and not just the rendering engine.\n *\n */\n\ngoog.provide('goog.userAgent.product');\n\ngoog.require('goog.labs.userAgent.browser');\ngoog.require('goog.labs.userAgent.platform');\ngoog.require('goog.userAgent');\n\n\n/**\n * @define {boolean} Whether the code is running on the Firefox web browser.\n */\ngoog.userAgent.product.ASSUME_FIREFOX =\n    goog.define('goog.userAgent.product.ASSUME_FIREFOX', false);\n\n\n/**\n * @define {boolean} Whether we know at compile-time that the product is an\n *     iPhone.\n */\ngoog.userAgent.product.ASSUME_IPHONE =\n    goog.define('goog.userAgent.product.ASSUME_IPHONE', false);\n\n\n/**\n * @define {boolean} Whether we know at compile-time that the product is an\n *     iPad.\n */\ngoog.userAgent.product.ASSUME_IPAD =\n    goog.define('goog.userAgent.product.ASSUME_IPAD', false);\n\n\n/**\n * @define {boolean} Whether we know at compile-time that the product is an\n *     AOSP browser or WebView inside a pre KitKat Android phone or tablet.\n */\ngoog.userAgent.product.ASSUME_ANDROID =\n    goog.define('goog.userAgent.product.ASSUME_ANDROID', false);\n\n\n/**\n * @define {boolean} Whether the code is running on the Chrome web browser on\n * any platform or AOSP browser or WebView in a KitKat+ Android phone or tablet.\n */\ngoog.userAgent.product.ASSUME_CHROME =\n    goog.define('goog.userAgent.product.ASSUME_CHROME', false);\n\n\n/**\n * @define {boolean} Whether the code is running on the Safari web browser.\n */\ngoog.userAgent.product.ASSUME_SAFARI =\n    goog.define('goog.userAgent.product.ASSUME_SAFARI', false);\n\n\n/**\n * Whether we know the product type at compile-time.\n * @type {boolean}\n * @private\n */\ngoog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE ||\n    goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA ||\n    goog.userAgent.product.ASSUME_FIREFOX ||\n    goog.userAgent.product.ASSUME_IPHONE ||\n    goog.userAgent.product.ASSUME_IPAD ||\n    goog.userAgent.product.ASSUME_ANDROID ||\n    goog.userAgent.product.ASSUME_CHROME ||\n    goog.userAgent.product.ASSUME_SAFARI;\n\n\n/**\n * Whether the code is running on the Opera web browser.\n * @type {boolean}\n */\ngoog.userAgent.product.OPERA = goog.userAgent.OPERA;\n\n\n/**\n * Whether the code is running on an IE web browser.\n * @type {boolean}\n */\ngoog.userAgent.product.IE = goog.userAgent.IE;\n\n\n/**\n * Whether the code is running on an Edge web browser (EdgeHTML based).\n * @type {boolean}\n */\ngoog.userAgent.product.EDGE = goog.userAgent.EDGE;\n\n\n/**\n * Whether the code is running on the Firefox web browser.\n * @type {boolean}\n */\ngoog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ?\n    goog.userAgent.product.ASSUME_FIREFOX :\n    goog.labs.userAgent.browser.isFirefox();\n\n\n/**\n * Whether the user agent is an iPhone or iPod (as in iPod touch).\n * @return {boolean}\n * @private\n */\ngoog.userAgent.product.isIphoneOrIpod_ = function() {\n  return goog.labs.userAgent.platform.isIphone() ||\n      goog.labs.userAgent.platform.isIpod();\n};\n\n\n/**\n * Whether the code is running on an iPhone or iPod touch.\n *\n * iPod touch is considered an iPhone for legacy reasons.\n * @type {boolean}\n */\ngoog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ?\n    goog.userAgent.product.ASSUME_IPHONE :\n    goog.userAgent.product.isIphoneOrIpod_();\n\n\n/**\n * Whether the code is running on an iPad.\n * @type {boolean}\n */\ngoog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ?\n    goog.userAgent.product.ASSUME_IPAD :\n    goog.labs.userAgent.platform.isIpad();\n\n\n/**\n * Whether the code is running on AOSP browser or WebView inside\n * a pre KitKat Android phone or tablet.\n * @type {boolean}\n */\ngoog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ?\n    goog.userAgent.product.ASSUME_ANDROID :\n    goog.labs.userAgent.browser.isAndroidBrowser();\n\n\n/**\n * Whether the code is running on any Chromium-based web browser on any platform\n * or AOSP browser or WebView in a KitKat+ Android phone or tablet.\n * @type {boolean}\n */\ngoog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ?\n    goog.userAgent.product.ASSUME_CHROME :\n    goog.labs.userAgent.browser.isChrome();\n\n\n/**\n * @return {boolean} Whether the browser is Safari on desktop.\n * @private\n */\ngoog.userAgent.product.isSafariDesktop_ = function() {\n  return goog.labs.userAgent.browser.isSafari() &&\n      !goog.labs.userAgent.platform.isIos();\n};\n\n\n/**\n * Whether the code is running on the desktop Safari web browser.\n * Note: the legacy behavior here is only true for Safari not running\n * on iOS.\n * @type {boolean}\n */\ngoog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ?\n    goog.userAgent.product.ASSUME_SAFARI :\n    goog.userAgent.product.isSafariDesktop_();\n","~:compiled-at",1611537232806,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.useragent.product.js\",\n\"lineCount\":27,\n\"mappings\":\"AAmBAA,IAAA,CAAKC,OAAL,CAAa,wBAAb,CAAA;AAEAD,IAAA,CAAKE,OAAL,CAAa,6BAAb,CAAA;AACAF,IAAA,CAAKE,OAAL,CAAa,8BAAb,CAAA;AACAF,IAAA,CAAKE,OAAL,CAAa,gBAAb,CAAA;AAMAF,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuBC,cAAvB,GACIL,IAAA,CAAKM,MAAL,CAAY,uCAAZ,EAAqD,KAArD,CADJ;AAQAN,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuBG,aAAvB,GACIP,IAAA,CAAKM,MAAL,CAAY,sCAAZ,EAAoD,KAApD,CADJ;AAQAN,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuBI,WAAvB,GACIR,IAAA,CAAKM,MAAL,CAAY,oCAAZ,EAAkD,KAAlD,CADJ;AAQAN,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuBK,cAAvB,GACIT,IAAA,CAAKM,MAAL,CAAY,uCAAZ,EAAqD,KAArD,CADJ;AAQAN,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuBM,aAAvB,GACIV,IAAA,CAAKM,MAAL,CAAY,sCAAZ,EAAoD,KAApD,CADJ;AAOAN,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuBO,aAAvB,GACIX,IAAA,CAAKM,MAAL,CAAY,sCAAZ,EAAoD,KAApD,CADJ;AASAN,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuBQ,cAAvB,GAAwCZ,IAAxC,CAA6CG,SAA7C,CAAuDU,SAAvD,IACIb,IADJ,CACSG,SADT,CACmBW,WADnB,IACkCd,IADlC,CACuCG,SADvC,CACiDY,YADjD,IAEIf,IAFJ,CAESG,SAFT,CAEmBC,OAFnB,CAE2BC,cAF3B,IAGIL,IAHJ,CAGSG,SAHT,CAGmBC,OAHnB,CAG2BG,aAH3B,IAIIP,IAJJ,CAISG,SAJT,CAImBC,OAJnB,CAI2BI,WAJ3B,IAKIR,IALJ,CAKSG,SALT,CAKmBC,OALnB,CAK2BK,cAL3B,IAMIT,IANJ,CAMSG,SANT,CAMmBC,OANnB,CAM2BM,aAN3B,IAOIV,IAPJ,CAOSG,SAPT,CAOmBC,OAPnB,CAO2BO,aAP3B;AAcAX,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuBY,KAAvB,GAA+BhB,IAA/B,CAAoCG,SAApC,CAA8Ca,KAA9C;AAOAhB,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuBa,EAAvB,GAA4BjB,IAA5B,CAAiCG,SAAjC,CAA2Cc,EAA3C;AAOAjB,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuBc,IAAvB,GAA8BlB,IAA9B,CAAmCG,SAAnC,CAA6Ce,IAA7C;AAOAlB,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuBe,OAAvB,GAAiCnB,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuBQ,cAAvB,GAC7BZ,IAD6B,CACxBG,SADwB,CACdC,OADc,CACNC,cADM,GAE7BL,IAAA,CAAKoB,IAAL,CAAUjB,SAAV,CAAoBkB,OAApB,CAA4BC,SAA5B,EAFJ;AAUAtB,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuBmB,eAAvB,GAAyCC,QAAQ,EAAG;AAClD,SAAOxB,IAAA,CAAKoB,IAAL,CAAUjB,SAAV,CAAoBsB,QAApB,CAA6BC,QAA7B,EAAP,IACI1B,IAAA,CAAKoB,IAAL,CAAUjB,SAAV,CAAoBsB,QAApB,CAA6BE,MAA7B,EADJ;AADkD,CAApD;AAYA3B,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuBwB,MAAvB,GAAgC5B,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuBQ,cAAvB,GAC5BZ,IAD4B,CACvBG,SADuB,CACbC,OADa,CACLG,aADK,GAE5BP,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuBmB,eAAvB,EAFJ;AASAvB,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuByB,IAAvB,GAA8B7B,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuBQ,cAAvB,GAC1BZ,IAD0B,CACrBG,SADqB,CACXC,OADW,CACHI,WADG,GAE1BR,IAAA,CAAKoB,IAAL,CAAUjB,SAAV,CAAoBsB,QAApB,CAA6BK,MAA7B,EAFJ;AAUA9B,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuB2B,OAAvB,GAAiC/B,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuBQ,cAAvB,GAC7BZ,IAD6B,CACxBG,SADwB,CACdC,OADc,CACNK,cADM,GAE7BT,IAAA,CAAKoB,IAAL,CAAUjB,SAAV,CAAoBkB,OAApB,CAA4BW,gBAA5B,EAFJ;AAUAhC,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuB6B,MAAvB,GAAgCjC,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuBQ,cAAvB,GAC5BZ,IAD4B,CACvBG,SADuB,CACbC,OADa,CACLM,aADK,GAE5BV,IAAA,CAAKoB,IAAL,CAAUjB,SAAV,CAAoBkB,OAApB,CAA4Ba,QAA5B,EAFJ;AASAlC,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuB+B,gBAAvB,GAA0CC,QAAQ,EAAG;AACnD,SAAOpC,IAAA,CAAKoB,IAAL,CAAUjB,SAAV,CAAoBkB,OAApB,CAA4BgB,QAA5B,EAAP,IACI,CAACrC,IAAA,CAAKoB,IAAL,CAAUjB,SAAV,CAAoBsB,QAApB,CAA6Ba,KAA7B,EADL;AADmD,CAArD;AAYAtC,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuBmC,MAAvB,GAAgCvC,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuBQ,cAAvB,GAC5BZ,IAD4B,CACvBG,SADuB,CACbC,OADa,CACLO,aADK,GAE5BX,IAAA,CAAKG,SAAL,CAAeC,OAAf,CAAuB+B,gBAAvB,EAFJ;;\",\n\"sources\":[\"goog/useragent/product.js\"],\n\"sourcesContent\":[\"// Copyright 2008 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Detects the specific browser and not just the rendering engine.\\n *\\n */\\n\\ngoog.provide('goog.userAgent.product');\\n\\ngoog.require('goog.labs.userAgent.browser');\\ngoog.require('goog.labs.userAgent.platform');\\ngoog.require('goog.userAgent');\\n\\n\\n/**\\n * @define {boolean} Whether the code is running on the Firefox web browser.\\n */\\ngoog.userAgent.product.ASSUME_FIREFOX =\\n    goog.define('goog.userAgent.product.ASSUME_FIREFOX', false);\\n\\n\\n/**\\n * @define {boolean} Whether we know at compile-time that the product is an\\n *     iPhone.\\n */\\ngoog.userAgent.product.ASSUME_IPHONE =\\n    goog.define('goog.userAgent.product.ASSUME_IPHONE', false);\\n\\n\\n/**\\n * @define {boolean} Whether we know at compile-time that the product is an\\n *     iPad.\\n */\\ngoog.userAgent.product.ASSUME_IPAD =\\n    goog.define('goog.userAgent.product.ASSUME_IPAD', false);\\n\\n\\n/**\\n * @define {boolean} Whether we know at compile-time that the product is an\\n *     AOSP browser or WebView inside a pre KitKat Android phone or tablet.\\n */\\ngoog.userAgent.product.ASSUME_ANDROID =\\n    goog.define('goog.userAgent.product.ASSUME_ANDROID', false);\\n\\n\\n/**\\n * @define {boolean} Whether the code is running on the Chrome web browser on\\n * any platform or AOSP browser or WebView in a KitKat+ Android phone or tablet.\\n */\\ngoog.userAgent.product.ASSUME_CHROME =\\n    goog.define('goog.userAgent.product.ASSUME_CHROME', false);\\n\\n\\n/**\\n * @define {boolean} Whether the code is running on the Safari web browser.\\n */\\ngoog.userAgent.product.ASSUME_SAFARI =\\n    goog.define('goog.userAgent.product.ASSUME_SAFARI', false);\\n\\n\\n/**\\n * Whether we know the product type at compile-time.\\n * @type {boolean}\\n * @private\\n */\\ngoog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE ||\\n    goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA ||\\n    goog.userAgent.product.ASSUME_FIREFOX ||\\n    goog.userAgent.product.ASSUME_IPHONE ||\\n    goog.userAgent.product.ASSUME_IPAD ||\\n    goog.userAgent.product.ASSUME_ANDROID ||\\n    goog.userAgent.product.ASSUME_CHROME ||\\n    goog.userAgent.product.ASSUME_SAFARI;\\n\\n\\n/**\\n * Whether the code is running on the Opera web browser.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.OPERA = goog.userAgent.OPERA;\\n\\n\\n/**\\n * Whether the code is running on an IE web browser.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.IE = goog.userAgent.IE;\\n\\n\\n/**\\n * Whether the code is running on an Edge web browser (EdgeHTML based).\\n * @type {boolean}\\n */\\ngoog.userAgent.product.EDGE = goog.userAgent.EDGE;\\n\\n\\n/**\\n * Whether the code is running on the Firefox web browser.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ?\\n    goog.userAgent.product.ASSUME_FIREFOX :\\n    goog.labs.userAgent.browser.isFirefox();\\n\\n\\n/**\\n * Whether the user agent is an iPhone or iPod (as in iPod touch).\\n * @return {boolean}\\n * @private\\n */\\ngoog.userAgent.product.isIphoneOrIpod_ = function() {\\n  return goog.labs.userAgent.platform.isIphone() ||\\n      goog.labs.userAgent.platform.isIpod();\\n};\\n\\n\\n/**\\n * Whether the code is running on an iPhone or iPod touch.\\n *\\n * iPod touch is considered an iPhone for legacy reasons.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ?\\n    goog.userAgent.product.ASSUME_IPHONE :\\n    goog.userAgent.product.isIphoneOrIpod_();\\n\\n\\n/**\\n * Whether the code is running on an iPad.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ?\\n    goog.userAgent.product.ASSUME_IPAD :\\n    goog.labs.userAgent.platform.isIpad();\\n\\n\\n/**\\n * Whether the code is running on AOSP browser or WebView inside\\n * a pre KitKat Android phone or tablet.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ?\\n    goog.userAgent.product.ASSUME_ANDROID :\\n    goog.labs.userAgent.browser.isAndroidBrowser();\\n\\n\\n/**\\n * Whether the code is running on any Chromium-based web browser on any platform\\n * or AOSP browser or WebView in a KitKat+ Android phone or tablet.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ?\\n    goog.userAgent.product.ASSUME_CHROME :\\n    goog.labs.userAgent.browser.isChrome();\\n\\n\\n/**\\n * @return {boolean} Whether the browser is Safari on desktop.\\n * @private\\n */\\ngoog.userAgent.product.isSafariDesktop_ = function() {\\n  return goog.labs.userAgent.browser.isSafari() &&\\n      !goog.labs.userAgent.platform.isIos();\\n};\\n\\n\\n/**\\n * Whether the code is running on the desktop Safari web browser.\\n * Note: the legacy behavior here is only true for Safari not running\\n * on iOS.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ?\\n    goog.userAgent.product.ASSUME_SAFARI :\\n    goog.userAgent.product.isSafariDesktop_();\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"userAgent\",\"product\",\"ASSUME_FIREFOX\",\"define\",\"ASSUME_IPHONE\",\"ASSUME_IPAD\",\"ASSUME_ANDROID\",\"ASSUME_CHROME\",\"ASSUME_SAFARI\",\"PRODUCT_KNOWN_\",\"ASSUME_IE\",\"ASSUME_EDGE\",\"ASSUME_OPERA\",\"OPERA\",\"IE\",\"EDGE\",\"FIREFOX\",\"labs\",\"browser\",\"isFirefox\",\"isIphoneOrIpod_\",\"goog.userAgent.product.isIphoneOrIpod_\",\"platform\",\"isIphone\",\"isIpod\",\"IPHONE\",\"IPAD\",\"isIpad\",\"ANDROID\",\"isAndroidBrowser\",\"CHROME\",\"isChrome\",\"isSafariDesktop_\",\"goog.userAgent.product.isSafariDesktop_\",\"isSafari\",\"isIos\",\"SAFARI\"]\n}\n"]