
shadow.cljs.devtools.client.env.module_loaded('main');

try { personal_website.core.init(); } catch (e) { console.error("An error occurred when calling (personal-website.core/init)"); throw(e); }