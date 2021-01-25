["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/structs/structs.js"],"~:js","goog.provide(\"goog.structs\");\ngoog.require(\"goog.array\");\ngoog.require(\"goog.object\");\ngoog.structs.getCount = function(col) {\n  if (col.getCount && typeof col.getCount == \"function\") {\n    return col.getCount();\n  }\n  if (goog.isArrayLike(col) || typeof col === \"string\") {\n    return col.length;\n  }\n  return goog.object.getCount(col);\n};\ngoog.structs.getValues = function(col) {\n  if (col.getValues && typeof col.getValues == \"function\") {\n    return col.getValues();\n  }\n  if (typeof col === \"string\") {\n    return col.split(\"\");\n  }\n  if (goog.isArrayLike(col)) {\n    var rv = [];\n    var l = col.length;\n    for (var i = 0; i < l; i++) {\n      rv.push(col[i]);\n    }\n    return rv;\n  }\n  return goog.object.getValues(col);\n};\ngoog.structs.getKeys = function(col) {\n  if (col.getKeys && typeof col.getKeys == \"function\") {\n    return col.getKeys();\n  }\n  if (col.getValues && typeof col.getValues == \"function\") {\n    return undefined;\n  }\n  if (goog.isArrayLike(col) || typeof col === \"string\") {\n    var rv = [];\n    var l = col.length;\n    for (var i = 0; i < l; i++) {\n      rv.push(i);\n    }\n    return rv;\n  }\n  return goog.object.getKeys(col);\n};\ngoog.structs.contains = function(col, val) {\n  if (col.contains && typeof col.contains == \"function\") {\n    return col.contains(val);\n  }\n  if (col.containsValue && typeof col.containsValue == \"function\") {\n    return col.containsValue(val);\n  }\n  if (goog.isArrayLike(col) || typeof col === \"string\") {\n    return goog.array.contains(col, val);\n  }\n  return goog.object.containsValue(col, val);\n};\ngoog.structs.isEmpty = function(col) {\n  if (col.isEmpty && typeof col.isEmpty == \"function\") {\n    return col.isEmpty();\n  }\n  if (goog.isArrayLike(col) || typeof col === \"string\") {\n    return goog.array.isEmpty(col);\n  }\n  return goog.object.isEmpty(col);\n};\ngoog.structs.clear = function(col) {\n  if (col.clear && typeof col.clear == \"function\") {\n    col.clear();\n  } else {\n    if (goog.isArrayLike(col)) {\n      goog.array.clear(col);\n    } else {\n      goog.object.clear(col);\n    }\n  }\n};\ngoog.structs.forEach = function(col, f, opt_obj) {\n  if (col.forEach && typeof col.forEach == \"function\") {\n    col.forEach(f, opt_obj);\n  } else {\n    if (goog.isArrayLike(col) || typeof col === \"string\") {\n      goog.array.forEach(col, f, opt_obj);\n    } else {\n      var keys = goog.structs.getKeys(col);\n      var values = goog.structs.getValues(col);\n      var l = values.length;\n      for (var i = 0; i < l; i++) {\n        f.call(opt_obj, values[i], keys && keys[i], col);\n      }\n    }\n  }\n};\ngoog.structs.filter = function(col, f, opt_obj) {\n  if (typeof col.filter == \"function\") {\n    return col.filter(f, opt_obj);\n  }\n  if (goog.isArrayLike(col) || typeof col === \"string\") {\n    return goog.array.filter(col, f, opt_obj);\n  }\n  var rv;\n  var keys = goog.structs.getKeys(col);\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  if (keys) {\n    rv = {};\n    for (var i = 0; i < l; i++) {\n      if (f.call(opt_obj, values[i], keys[i], col)) {\n        rv[keys[i]] = values[i];\n      }\n    }\n  } else {\n    rv = [];\n    for (var i = 0; i < l; i++) {\n      if (f.call(opt_obj, values[i], undefined, col)) {\n        rv.push(values[i]);\n      }\n    }\n  }\n  return rv;\n};\ngoog.structs.map = function(col, f, opt_obj) {\n  if (typeof col.map == \"function\") {\n    return col.map(f, opt_obj);\n  }\n  if (goog.isArrayLike(col) || typeof col === \"string\") {\n    return goog.array.map(col, f, opt_obj);\n  }\n  var rv;\n  var keys = goog.structs.getKeys(col);\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  if (keys) {\n    rv = {};\n    for (var i = 0; i < l; i++) {\n      rv[keys[i]] = f.call(opt_obj, values[i], keys[i], col);\n    }\n  } else {\n    rv = [];\n    for (var i = 0; i < l; i++) {\n      rv[i] = f.call(opt_obj, values[i], undefined, col);\n    }\n  }\n  return rv;\n};\ngoog.structs.some = function(col, f, opt_obj) {\n  if (typeof col.some == \"function\") {\n    return col.some(f, opt_obj);\n  }\n  if (goog.isArrayLike(col) || typeof col === \"string\") {\n    return goog.array.some(col, f, opt_obj);\n  }\n  var keys = goog.structs.getKeys(col);\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  for (var i = 0; i < l; i++) {\n    if (f.call(opt_obj, values[i], keys && keys[i], col)) {\n      return true;\n    }\n  }\n  return false;\n};\ngoog.structs.every = function(col, f, opt_obj) {\n  if (typeof col.every == \"function\") {\n    return col.every(f, opt_obj);\n  }\n  if (goog.isArrayLike(col) || typeof col === \"string\") {\n    return goog.array.every(col, f, opt_obj);\n  }\n  var keys = goog.structs.getKeys(col);\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  for (var i = 0; i < l; i++) {\n    if (!f.call(opt_obj, values[i], keys && keys[i], col)) {\n      return false;\n    }\n  }\n  return true;\n};\n","~:source","// Copyright 2006 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Generics method for collection-like classes and objects.\n *\n * @author arv@google.com (Erik Arvidsson)\n *\n * This file contains functions to work with collections. It supports using\n * Map, Set, Array and Object and other classes that implement collection-like\n * methods.\n * @suppress {strictMissingProperties}\n */\n\n\ngoog.provide('goog.structs');\n\ngoog.require('goog.array');\ngoog.require('goog.object');\n\n\n// We treat an object as a dictionary if it has getKeys or it is an object that\n// isn't arrayLike.\n\n\n/**\n * Returns the number of values in the collection-like object.\n * @param {Object} col The collection-like object.\n * @return {number} The number of values in the collection-like object.\n */\ngoog.structs.getCount = function(col) {\n  if (col.getCount && typeof col.getCount == 'function') {\n    return col.getCount();\n  }\n  if (goog.isArrayLike(col) || typeof col === 'string') {\n    return col.length;\n  }\n  return goog.object.getCount(col);\n};\n\n\n/**\n * Returns the values of the collection-like object.\n * @param {Object} col The collection-like object.\n * @return {!Array<?>} The values in the collection-like object.\n */\ngoog.structs.getValues = function(col) {\n  if (col.getValues && typeof col.getValues == 'function') {\n    return col.getValues();\n  }\n  if (typeof col === 'string') {\n    return col.split('');\n  }\n  if (goog.isArrayLike(col)) {\n    var rv = [];\n    var l = col.length;\n    for (var i = 0; i < l; i++) {\n      rv.push(col[i]);\n    }\n    return rv;\n  }\n  return goog.object.getValues(col);\n};\n\n\n/**\n * Returns the keys of the collection. Some collections have no notion of\n * keys/indexes and this function will return undefined in those cases.\n * @param {Object} col The collection-like object.\n * @return {!Array|undefined} The keys in the collection.\n */\ngoog.structs.getKeys = function(col) {\n  if (col.getKeys && typeof col.getKeys == 'function') {\n    return col.getKeys();\n  }\n  // if we have getValues but no getKeys we know this is a key-less collection\n  if (col.getValues && typeof col.getValues == 'function') {\n    return undefined;\n  }\n  if (goog.isArrayLike(col) || typeof col === 'string') {\n    var rv = [];\n    var l = col.length;\n    for (var i = 0; i < l; i++) {\n      rv.push(i);\n    }\n    return rv;\n  }\n\n  return goog.object.getKeys(col);\n};\n\n\n/**\n * Whether the collection contains the given value. This is O(n) and uses\n * equals (==) to test the existence.\n * @param {Object} col The collection-like object.\n * @param {*} val The value to check for.\n * @return {boolean} True if the map contains the value.\n */\ngoog.structs.contains = function(col, val) {\n  if (col.contains && typeof col.contains == 'function') {\n    return col.contains(val);\n  }\n  if (col.containsValue && typeof col.containsValue == 'function') {\n    return col.containsValue(val);\n  }\n  if (goog.isArrayLike(col) || typeof col === 'string') {\n    return goog.array.contains(/** @type {!Array<?>} */ (col), val);\n  }\n  return goog.object.containsValue(col, val);\n};\n\n\n/**\n * Whether the collection is empty.\n * @param {Object} col The collection-like object.\n * @return {boolean} True if empty.\n */\ngoog.structs.isEmpty = function(col) {\n  if (col.isEmpty && typeof col.isEmpty == 'function') {\n    return col.isEmpty();\n  }\n\n  // We do not use goog.string.isEmptyOrWhitespace because here we treat the\n  // string as\n  // collection and as such even whitespace matters\n\n  if (goog.isArrayLike(col) || typeof col === 'string') {\n    return goog.array.isEmpty(/** @type {!Array<?>} */ (col));\n  }\n  return goog.object.isEmpty(col);\n};\n\n\n/**\n * Removes all the elements from the collection.\n * @param {Object} col The collection-like object.\n */\ngoog.structs.clear = function(col) {\n  // NOTE(arv): This should not contain strings because strings are immutable\n  if (col.clear && typeof col.clear == 'function') {\n    col.clear();\n  } else if (goog.isArrayLike(col)) {\n    goog.array.clear(/** @type {IArrayLike<?>} */ (col));\n  } else {\n    goog.object.clear(col);\n  }\n};\n\n\n/**\n * Calls a function for each value in a collection. The function takes\n * three arguments; the value, the key and the collection.\n *\n * @param {S} col The collection-like object.\n * @param {function(this:T,?,?,S):?} f The function to call for every value.\n *     This function takes\n *     3 arguments (the value, the key or undefined if the collection has no\n *     notion of keys, and the collection) and the return value is irrelevant.\n * @param {T=} opt_obj The object to be used as the value of 'this'\n *     within `f`.\n * @template T,S\n * @deprecated Use a more specific method, e.g. goog.array.forEach,\n *     goog.object.forEach, or for-of.\n */\ngoog.structs.forEach = function(col, f, opt_obj) {\n  if (col.forEach && typeof col.forEach == 'function') {\n    col.forEach(f, opt_obj);\n  } else if (goog.isArrayLike(col) || typeof col === 'string') {\n    goog.array.forEach(/** @type {!Array<?>} */ (col), f, opt_obj);\n  } else {\n    var keys = goog.structs.getKeys(col);\n    var values = goog.structs.getValues(col);\n    var l = values.length;\n    for (var i = 0; i < l; i++) {\n      f.call(/** @type {?} */ (opt_obj), values[i], keys && keys[i], col);\n    }\n  }\n};\n\n\n/**\n * Calls a function for every value in the collection. When a call returns true,\n * adds the value to a new collection (Array is returned by default).\n *\n * @param {S} col The collection-like object.\n * @param {function(this:T,?,?,S):boolean} f The function to call for every\n *     value. This function takes\n *     3 arguments (the value, the key or undefined if the collection has no\n *     notion of keys, and the collection) and should return a Boolean. If the\n *     return value is true the value is added to the result collection. If it\n *     is false the value is not included.\n * @param {T=} opt_obj The object to be used as the value of 'this'\n *     within `f`.\n * @return {!Object|!Array<?>} A new collection where the passed values are\n *     present. If col is a key-less collection an array is returned.  If col\n *     has keys and values a plain old JS object is returned.\n * @template T,S\n */\ngoog.structs.filter = function(col, f, opt_obj) {\n  if (typeof col.filter == 'function') {\n    return col.filter(f, opt_obj);\n  }\n  if (goog.isArrayLike(col) || typeof col === 'string') {\n    return goog.array.filter(/** @type {!Array<?>} */ (col), f, opt_obj);\n  }\n\n  var rv;\n  var keys = goog.structs.getKeys(col);\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  if (keys) {\n    rv = {};\n    for (var i = 0; i < l; i++) {\n      if (f.call(/** @type {?} */ (opt_obj), values[i], keys[i], col)) {\n        rv[keys[i]] = values[i];\n      }\n    }\n  } else {\n    // We should not use goog.array.filter here since we want to make sure that\n    // the index is undefined as well as make sure that col is passed to the\n    // function.\n    rv = [];\n    for (var i = 0; i < l; i++) {\n      if (f.call(opt_obj, values[i], undefined, col)) {\n        rv.push(values[i]);\n      }\n    }\n  }\n  return rv;\n};\n\n\n/**\n * Calls a function for every value in the collection and adds the result into a\n * new collection (defaults to creating a new Array).\n *\n * @param {S} col The collection-like object.\n * @param {function(this:T,?,?,S):V} f The function to call for every value.\n *     This function takes 3 arguments (the value, the key or undefined if the\n *     collection has no notion of keys, and the collection) and should return\n *     something. The result will be used as the value in the new collection.\n * @param {T=} opt_obj  The object to be used as the value of 'this'\n *     within `f`.\n * @return {!Object<V>|!Array<V>} A new collection with the new values.  If\n *     col is a key-less collection an array is returned.  If col has keys and\n *     values a plain old JS object is returned.\n * @template T,S,V\n */\ngoog.structs.map = function(col, f, opt_obj) {\n  if (typeof col.map == 'function') {\n    return col.map(f, opt_obj);\n  }\n  if (goog.isArrayLike(col) || typeof col === 'string') {\n    return goog.array.map(/** @type {!Array<?>} */ (col), f, opt_obj);\n  }\n\n  var rv;\n  var keys = goog.structs.getKeys(col);\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  if (keys) {\n    rv = {};\n    for (var i = 0; i < l; i++) {\n      rv[keys[i]] = f.call(/** @type {?} */ (opt_obj), values[i], keys[i], col);\n    }\n  } else {\n    // We should not use goog.array.map here since we want to make sure that\n    // the index is undefined as well as make sure that col is passed to the\n    // function.\n    rv = [];\n    for (var i = 0; i < l; i++) {\n      rv[i] = f.call(/** @type {?} */ (opt_obj), values[i], undefined, col);\n    }\n  }\n  return rv;\n};\n\n\n/**\n * Calls f for each value in a collection. If any call returns true this returns\n * true (without checking the rest). If all returns false this returns false.\n *\n * @param {S} col The collection-like object.\n * @param {function(this:T,?,?,S):boolean} f The function to call for every\n *     value. This function takes 3 arguments (the value, the key or undefined\n *     if the collection has no notion of keys, and the collection) and should\n *     return a boolean.\n * @param {T=} opt_obj  The object to be used as the value of 'this'\n *     within `f`.\n * @return {boolean} True if any value passes the test.\n * @template T,S\n */\ngoog.structs.some = function(col, f, opt_obj) {\n  if (typeof col.some == 'function') {\n    return col.some(f, opt_obj);\n  }\n  if (goog.isArrayLike(col) || typeof col === 'string') {\n    return goog.array.some(/** @type {!Array<?>} */ (col), f, opt_obj);\n  }\n  var keys = goog.structs.getKeys(col);\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  for (var i = 0; i < l; i++) {\n    if (f.call(/** @type {?} */ (opt_obj), values[i], keys && keys[i], col)) {\n      return true;\n    }\n  }\n  return false;\n};\n\n\n/**\n * Calls f for each value in a collection. If all calls return true this return\n * true this returns true. If any returns false this returns false at this point\n *  and does not continue to check the remaining values.\n *\n * @param {S} col The collection-like object.\n * @param {function(this:T,?,?,S):boolean} f The function to call for every\n *     value. This function takes 3 arguments (the value, the key or\n *     undefined if the collection has no notion of keys, and the collection)\n *     and should return a boolean.\n * @param {T=} opt_obj  The object to be used as the value of 'this'\n *     within `f`.\n * @return {boolean} True if all key-value pairs pass the test.\n * @template T,S\n */\ngoog.structs.every = function(col, f, opt_obj) {\n  if (typeof col.every == 'function') {\n    return col.every(f, opt_obj);\n  }\n  if (goog.isArrayLike(col) || typeof col === 'string') {\n    return goog.array.every(/** @type {!Array<?>} */ (col), f, opt_obj);\n  }\n  var keys = goog.structs.getKeys(col);\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  for (var i = 0; i < l; i++) {\n    if (!f.call(/** @type {?} */ (opt_obj), values[i], keys && keys[i], col)) {\n      return false;\n    }\n  }\n  return true;\n};\n","~:compiled-at",1611537232739,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.structs.structs.js\",\n\"lineCount\":181,\n\"mappings\":\"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\",\n\"sources\":[\"goog/structs/structs.js\"],\n\"sourcesContent\":[\"// Copyright 2006 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Generics method for collection-like classes and objects.\\n *\\n * @author arv@google.com (Erik Arvidsson)\\n *\\n * This file contains functions to work with collections. It supports using\\n * Map, Set, Array and Object and other classes that implement collection-like\\n * methods.\\n * @suppress {strictMissingProperties}\\n */\\n\\n\\ngoog.provide('goog.structs');\\n\\ngoog.require('goog.array');\\ngoog.require('goog.object');\\n\\n\\n// We treat an object as a dictionary if it has getKeys or it is an object that\\n// isn't arrayLike.\\n\\n\\n/**\\n * Returns the number of values in the collection-like object.\\n * @param {Object} col The collection-like object.\\n * @return {number} The number of values in the collection-like object.\\n */\\ngoog.structs.getCount = function(col) {\\n  if (col.getCount && typeof col.getCount == 'function') {\\n    return col.getCount();\\n  }\\n  if (goog.isArrayLike(col) || typeof col === 'string') {\\n    return col.length;\\n  }\\n  return goog.object.getCount(col);\\n};\\n\\n\\n/**\\n * Returns the values of the collection-like object.\\n * @param {Object} col The collection-like object.\\n * @return {!Array<?>} The values in the collection-like object.\\n */\\ngoog.structs.getValues = function(col) {\\n  if (col.getValues && typeof col.getValues == 'function') {\\n    return col.getValues();\\n  }\\n  if (typeof col === 'string') {\\n    return col.split('');\\n  }\\n  if (goog.isArrayLike(col)) {\\n    var rv = [];\\n    var l = col.length;\\n    for (var i = 0; i < l; i++) {\\n      rv.push(col[i]);\\n    }\\n    return rv;\\n  }\\n  return goog.object.getValues(col);\\n};\\n\\n\\n/**\\n * Returns the keys of the collection. Some collections have no notion of\\n * keys/indexes and this function will return undefined in those cases.\\n * @param {Object} col The collection-like object.\\n * @return {!Array|undefined} The keys in the collection.\\n */\\ngoog.structs.getKeys = function(col) {\\n  if (col.getKeys && typeof col.getKeys == 'function') {\\n    return col.getKeys();\\n  }\\n  // if we have getValues but no getKeys we know this is a key-less collection\\n  if (col.getValues && typeof col.getValues == 'function') {\\n    return undefined;\\n  }\\n  if (goog.isArrayLike(col) || typeof col === 'string') {\\n    var rv = [];\\n    var l = col.length;\\n    for (var i = 0; i < l; i++) {\\n      rv.push(i);\\n    }\\n    return rv;\\n  }\\n\\n  return goog.object.getKeys(col);\\n};\\n\\n\\n/**\\n * Whether the collection contains the given value. This is O(n) and uses\\n * equals (==) to test the existence.\\n * @param {Object} col The collection-like object.\\n * @param {*} val The value to check for.\\n * @return {boolean} True if the map contains the value.\\n */\\ngoog.structs.contains = function(col, val) {\\n  if (col.contains && typeof col.contains == 'function') {\\n    return col.contains(val);\\n  }\\n  if (col.containsValue && typeof col.containsValue == 'function') {\\n    return col.containsValue(val);\\n  }\\n  if (goog.isArrayLike(col) || typeof col === 'string') {\\n    return goog.array.contains(/** @type {!Array<?>} */ (col), val);\\n  }\\n  return goog.object.containsValue(col, val);\\n};\\n\\n\\n/**\\n * Whether the collection is empty.\\n * @param {Object} col The collection-like object.\\n * @return {boolean} True if empty.\\n */\\ngoog.structs.isEmpty = function(col) {\\n  if (col.isEmpty && typeof col.isEmpty == 'function') {\\n    return col.isEmpty();\\n  }\\n\\n  // We do not use goog.string.isEmptyOrWhitespace because here we treat the\\n  // string as\\n  // collection and as such even whitespace matters\\n\\n  if (goog.isArrayLike(col) || typeof col === 'string') {\\n    return goog.array.isEmpty(/** @type {!Array<?>} */ (col));\\n  }\\n  return goog.object.isEmpty(col);\\n};\\n\\n\\n/**\\n * Removes all the elements from the collection.\\n * @param {Object} col The collection-like object.\\n */\\ngoog.structs.clear = function(col) {\\n  // NOTE(arv): This should not contain strings because strings are immutable\\n  if (col.clear && typeof col.clear == 'function') {\\n    col.clear();\\n  } else if (goog.isArrayLike(col)) {\\n    goog.array.clear(/** @type {IArrayLike<?>} */ (col));\\n  } else {\\n    goog.object.clear(col);\\n  }\\n};\\n\\n\\n/**\\n * Calls a function for each value in a collection. The function takes\\n * three arguments; the value, the key and the collection.\\n *\\n * @param {S} col The collection-like object.\\n * @param {function(this:T,?,?,S):?} f The function to call for every value.\\n *     This function takes\\n *     3 arguments (the value, the key or undefined if the collection has no\\n *     notion of keys, and the collection) and the return value is irrelevant.\\n * @param {T=} opt_obj The object to be used as the value of 'this'\\n *     within `f`.\\n * @template T,S\\n * @deprecated Use a more specific method, e.g. goog.array.forEach,\\n *     goog.object.forEach, or for-of.\\n */\\ngoog.structs.forEach = function(col, f, opt_obj) {\\n  if (col.forEach && typeof col.forEach == 'function') {\\n    col.forEach(f, opt_obj);\\n  } else if (goog.isArrayLike(col) || typeof col === 'string') {\\n    goog.array.forEach(/** @type {!Array<?>} */ (col), f, opt_obj);\\n  } else {\\n    var keys = goog.structs.getKeys(col);\\n    var values = goog.structs.getValues(col);\\n    var l = values.length;\\n    for (var i = 0; i < l; i++) {\\n      f.call(/** @type {?} */ (opt_obj), values[i], keys && keys[i], col);\\n    }\\n  }\\n};\\n\\n\\n/**\\n * Calls a function for every value in the collection. When a call returns true,\\n * adds the value to a new collection (Array is returned by default).\\n *\\n * @param {S} col The collection-like object.\\n * @param {function(this:T,?,?,S):boolean} f The function to call for every\\n *     value. This function takes\\n *     3 arguments (the value, the key or undefined if the collection has no\\n *     notion of keys, and the collection) and should return a Boolean. If the\\n *     return value is true the value is added to the result collection. If it\\n *     is false the value is not included.\\n * @param {T=} opt_obj The object to be used as the value of 'this'\\n *     within `f`.\\n * @return {!Object|!Array<?>} A new collection where the passed values are\\n *     present. If col is a key-less collection an array is returned.  If col\\n *     has keys and values a plain old JS object is returned.\\n * @template T,S\\n */\\ngoog.structs.filter = function(col, f, opt_obj) {\\n  if (typeof col.filter == 'function') {\\n    return col.filter(f, opt_obj);\\n  }\\n  if (goog.isArrayLike(col) || typeof col === 'string') {\\n    return goog.array.filter(/** @type {!Array<?>} */ (col), f, opt_obj);\\n  }\\n\\n  var rv;\\n  var keys = goog.structs.getKeys(col);\\n  var values = goog.structs.getValues(col);\\n  var l = values.length;\\n  if (keys) {\\n    rv = {};\\n    for (var i = 0; i < l; i++) {\\n      if (f.call(/** @type {?} */ (opt_obj), values[i], keys[i], col)) {\\n        rv[keys[i]] = values[i];\\n      }\\n    }\\n  } else {\\n    // We should not use goog.array.filter here since we want to make sure that\\n    // the index is undefined as well as make sure that col is passed to the\\n    // function.\\n    rv = [];\\n    for (var i = 0; i < l; i++) {\\n      if (f.call(opt_obj, values[i], undefined, col)) {\\n        rv.push(values[i]);\\n      }\\n    }\\n  }\\n  return rv;\\n};\\n\\n\\n/**\\n * Calls a function for every value in the collection and adds the result into a\\n * new collection (defaults to creating a new Array).\\n *\\n * @param {S} col The collection-like object.\\n * @param {function(this:T,?,?,S):V} f The function to call for every value.\\n *     This function takes 3 arguments (the value, the key or undefined if the\\n *     collection has no notion of keys, and the collection) and should return\\n *     something. The result will be used as the value in the new collection.\\n * @param {T=} opt_obj  The object to be used as the value of 'this'\\n *     within `f`.\\n * @return {!Object<V>|!Array<V>} A new collection with the new values.  If\\n *     col is a key-less collection an array is returned.  If col has keys and\\n *     values a plain old JS object is returned.\\n * @template T,S,V\\n */\\ngoog.structs.map = function(col, f, opt_obj) {\\n  if (typeof col.map == 'function') {\\n    return col.map(f, opt_obj);\\n  }\\n  if (goog.isArrayLike(col) || typeof col === 'string') {\\n    return goog.array.map(/** @type {!Array<?>} */ (col), f, opt_obj);\\n  }\\n\\n  var rv;\\n  var keys = goog.structs.getKeys(col);\\n  var values = goog.structs.getValues(col);\\n  var l = values.length;\\n  if (keys) {\\n    rv = {};\\n    for (var i = 0; i < l; i++) {\\n      rv[keys[i]] = f.call(/** @type {?} */ (opt_obj), values[i], keys[i], col);\\n    }\\n  } else {\\n    // We should not use goog.array.map here since we want to make sure that\\n    // the index is undefined as well as make sure that col is passed to the\\n    // function.\\n    rv = [];\\n    for (var i = 0; i < l; i++) {\\n      rv[i] = f.call(/** @type {?} */ (opt_obj), values[i], undefined, col);\\n    }\\n  }\\n  return rv;\\n};\\n\\n\\n/**\\n * Calls f for each value in a collection. If any call returns true this returns\\n * true (without checking the rest). If all returns false this returns false.\\n *\\n * @param {S} col The collection-like object.\\n * @param {function(this:T,?,?,S):boolean} f The function to call for every\\n *     value. This function takes 3 arguments (the value, the key or undefined\\n *     if the collection has no notion of keys, and the collection) and should\\n *     return a boolean.\\n * @param {T=} opt_obj  The object to be used as the value of 'this'\\n *     within `f`.\\n * @return {boolean} True if any value passes the test.\\n * @template T,S\\n */\\ngoog.structs.some = function(col, f, opt_obj) {\\n  if (typeof col.some == 'function') {\\n    return col.some(f, opt_obj);\\n  }\\n  if (goog.isArrayLike(col) || typeof col === 'string') {\\n    return goog.array.some(/** @type {!Array<?>} */ (col), f, opt_obj);\\n  }\\n  var keys = goog.structs.getKeys(col);\\n  var values = goog.structs.getValues(col);\\n  var l = values.length;\\n  for (var i = 0; i < l; i++) {\\n    if (f.call(/** @type {?} */ (opt_obj), values[i], keys && keys[i], col)) {\\n      return true;\\n    }\\n  }\\n  return false;\\n};\\n\\n\\n/**\\n * Calls f for each value in a collection. If all calls return true this return\\n * true this returns true. If any returns false this returns false at this point\\n *  and does not continue to check the remaining values.\\n *\\n * @param {S} col The collection-like object.\\n * @param {function(this:T,?,?,S):boolean} f The function to call for every\\n *     value. This function takes 3 arguments (the value, the key or\\n *     undefined if the collection has no notion of keys, and the collection)\\n *     and should return a boolean.\\n * @param {T=} opt_obj  The object to be used as the value of 'this'\\n *     within `f`.\\n * @return {boolean} True if all key-value pairs pass the test.\\n * @template T,S\\n */\\ngoog.structs.every = function(col, f, opt_obj) {\\n  if (typeof col.every == 'function') {\\n    return col.every(f, opt_obj);\\n  }\\n  if (goog.isArrayLike(col) || typeof col === 'string') {\\n    return goog.array.every(/** @type {!Array<?>} */ (col), f, opt_obj);\\n  }\\n  var keys = goog.structs.getKeys(col);\\n  var values = goog.structs.getValues(col);\\n  var l = values.length;\\n  for (var i = 0; i < l; i++) {\\n    if (!f.call(/** @type {?} */ (opt_obj), values[i], keys && keys[i], col)) {\\n      return false;\\n    }\\n  }\\n  return true;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"structs\",\"getCount\",\"goog.structs.getCount\",\"col\",\"isArrayLike\",\"length\",\"object\",\"getValues\",\"goog.structs.getValues\",\"split\",\"rv\",\"l\",\"i\",\"push\",\"getKeys\",\"goog.structs.getKeys\",\"undefined\",\"contains\",\"goog.structs.contains\",\"val\",\"containsValue\",\"array\",\"isEmpty\",\"goog.structs.isEmpty\",\"clear\",\"goog.structs.clear\",\"forEach\",\"goog.structs.forEach\",\"f\",\"opt_obj\",\"keys\",\"values\",\"call\",\"filter\",\"goog.structs.filter\",\"map\",\"goog.structs.map\",\"some\",\"goog.structs.some\",\"every\",\"goog.structs.every\"]\n}\n"]