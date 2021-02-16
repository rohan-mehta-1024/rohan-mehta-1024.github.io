goog.provide('kee_frame.core');
kee_frame.core.kee_frame_interceptors = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kee_frame.interceptors.add_global_interceptors,kee_frame.spec.spec_interceptor(kee_frame.state.app_db_spec),kee_frame.debug.debug_interceptor(kee_frame.state.debug_QMARK_),re_frame.core.trim_v], null);
kee_frame.core.valid_option_key_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"debug-config","debug-config",329260673),null,new cljs.core.Keyword(null,"routes","routes",457900162),null,new cljs.core.Keyword(null,"screen","screen",1990059748),null,new cljs.core.Keyword(null,"router","router",1091916230),null,new cljs.core.Keyword(null,"app-db-spec","app-db-spec",-1030582586),null,new cljs.core.Keyword(null,"route-change-event","route-change-event",1834214120),null,new cljs.core.Keyword(null,"hash-routing?","hash-routing?",471914732),null,new cljs.core.Keyword(null,"chain-links","chain-links",951542256),null,new cljs.core.Keyword(null,"process-route","process-route",-38423566),null,new cljs.core.Keyword(null,"debug?","debug?",-1831756173),null,new cljs.core.Keyword(null,"scroll","scroll",971553779),null,new cljs.core.Keyword(null,"not-found","not-found",-629079980),null,new cljs.core.Keyword(null,"root-component","root-component",-1807026475),null,new cljs.core.Keyword(null,"initial-db","initial-db",1939835102),null], null), null);
/**
 * Complete listing of invalid options sent to the `start!` function.
 */
kee_frame.core.extra_options = (function kee_frame$core$extra_options(options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__43222){
var vec__43223 = p__43222;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43223,(0),null);
return cljs.core.not((kee_frame.core.valid_option_key_QMARK_.cljs$core$IFn$_invoke$arity$1 ? kee_frame.core.valid_option_key_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : kee_frame.core.valid_option_key_QMARK_.call(null,k)));
}),options));
});
/**
 * Starts your client application with the specified `options`.
 * 
 *   This function is intentionally forgiving in certain ways:
 *   - You can call it as often as you want. Figwheel should call it on each code change
 *   - You can omit the `options` altogether. kee-frame chooses sensible defaults for you and leads the way.
 * 
 *   Usage:
 *   ```
 *   (k/start! {:debug?         true
 *           :routes         my-reitit-routes
 *           :hash-routing?  true
 *           :initial-db     {:some-property "default value"}
 *           :root-component [my-reagent-root-component]
 *           :app-db-spec    :spec/my-db-spec})
 *   ```
 */
kee_frame.core.start_BANG_ = (function kee_frame$core$start_BANG_(options){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.spec","start-options","kee-frame.spec/start-options",-1456248968),options)){
} else {
expound.alpha.expound.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.spec","start-options","kee-frame.spec/start-options",-1456248968),options);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid options",cljs.spec.alpha.explain_data(new cljs.core.Keyword("kee-frame.spec","start-options","kee-frame.spec/start-options",-1456248968),options));
}

var extras_43239 = kee_frame.core.extra_options(options);
if(cljs.core.seq(extras_43239)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Uknown startup options. Valid keys are ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kee_frame.core.valid_option_key_QMARK_)].join(''),extras_43239);
} else {
}

return kee_frame.router.start_BANG_(options);
});
kee_frame.core.debug_enabled_QMARK_ = (function kee_frame$core$debug_enabled_QMARK_(){
var map__43226 = cljs.core.deref(kee_frame.state.debug_config);
var map__43226__$1 = (((((!((map__43226 == null))))?(((((map__43226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43226):map__43226);
var overwrites_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43226__$1,new cljs.core.Keyword(null,"overwrites?","overwrites?",-1906761528),false);
var and__4115__auto__ = cljs.core.deref(kee_frame.state.debug_QMARK_);
if(cljs.core.truth_(and__4115__auto__)){
return overwrites_QMARK_;
} else {
return and__4115__auto__;
}
});
/**
 * Put a controller config map into the global controller registry.
 * 
 *   Parameters:
 * 
 *   `id`: Must be unique in controllere registry. Will appear in logs.
 * 
 *   `controller`: A map with the following keys:
 *   - `:params`: A function that receives the route data and returns the part that should be sent to the `start` function. A nil
 *   return means that the controller should not run for this route.
 * 
 *   - `:start`: A function or an event vector. Called when `params` returns a non-nil value different from the previous
 *   invocation. The function receives whatever non-nil value that was returned from `params`,
 *   and returns a re-frame event vector. If the function does nothing but returning the vector, the surrounding function
 *   can be omitted.
 * 
 *   - `:stop`: Optional. A function or an event vector. Called when previous invocation of `params` returned non-nil and the
 *   current invocation returned nil. If the function does nothing but returning the vector, the surrounding function
 *   can be omitted.
 */
kee_frame.core.reg_controller = (function kee_frame$core$reg_controller(id,controller){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.spec","controller","kee-frame.spec/controller",70465085),controller)){
} else {
expound.alpha.expound.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.spec","controller","kee-frame.spec/controller",70465085),controller);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid controller",cljs.spec.alpha.explain_data(new cljs.core.Keyword("kee-frame.spec","controller","kee-frame.spec/controller",70465085),controller));
}

if(cljs.core.truth_((function (){var and__4115__auto__ = kee_frame.core.debug_enabled_QMARK_();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kee_frame.state.controllers),id);
} else {
return and__4115__auto__;
}
})())){
re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Overwriting controller with id ",id], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kee_frame.state.controllers,cljs.core.assoc,id,controller);
});
/**
 * Exactly same signature as `re-frame.core/reg-event-fx`. Use this version if you want kee-frame logging and spec validation.
 * 
 *   `re-frame.core/trim-v` interceptor is also applied.
 */
kee_frame.core.reg_event_fx = (function kee_frame$core$reg_event_fx(var_args){
var G__43229 = arguments.length;
switch (G__43229) {
case 2:
return kee_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kee_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kee_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return kee_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(kee_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(kee_frame.core.kee_frame_interceptors,interceptors),handler);
}));

(kee_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3);

/**
 * Exactly same signature as `re-frame.core/reg-event-db`. Use this version if you want kee-frame logging and spec validation.
 * 
 *   `re-frame.core/trim-v` interceptor is also applied.
 */
kee_frame.core.reg_event_db = (function kee_frame$core$reg_event_db(var_args){
var G__43231 = arguments.length;
switch (G__43231) {
case 2:
return kee_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kee_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kee_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return kee_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(kee_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(kee_frame.core.kee_frame_interceptors,interceptors),handler);
}));

(kee_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3);

/**
 * Same as `reg-chain`, but with manually named event handlers. Useful when you need more meaningful names in your
 *   event log.
 * 
 *   Parameters:
 * 
 *   `handlers`: pairs of id and event handler.
 * 
 *   Usage:
 *   ```
 *   (k/reg-chain-named
 * 
 *  :load-customer-data
 *  (fn [ctx [customer-id]]
 *    {:http-xhrio {:uri "..."}})
 * 
 *  :receive-customer-data
 *   (fn [ctx [customer-id customer-data]]
 *    (assoc-in ctx [:db :customers customer-id] customer-data)))
 *   ```
 */
kee_frame.core.reg_chain_named = (function kee_frame$core$reg_chain_named(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43267 = arguments.length;
var i__4737__auto___43268 = (0);
while(true){
if((i__4737__auto___43268 < len__4736__auto___43267)){
args__4742__auto__.push((arguments[i__4737__auto___43268]));

var G__43269 = (i__4737__auto___43268 + (1));
i__4737__auto___43268 = G__43269;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return kee_frame.core.reg_chain_named.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(kee_frame.core.reg_chain_named.cljs$core$IFn$_invoke$arity$variadic = (function (handlers){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_chain.core.reg_chain_named_STAR_,kee_frame.core.kee_frame_interceptors,handlers);
}));

(kee_frame.core.reg_chain_named.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(kee_frame.core.reg_chain_named.cljs$lang$applyTo = (function (seq43232){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43232));
}));

/**
 * Register a list of re-frame fx handlers, chained together.
 * 
 *   The chaining is done through dispatch inference. https://github.com/Day8/re-frame-http-fx is supported by default,
 *   you can easily add your own like this: https://github.com/ingesolvoll/kee-frame#configuring-chains-since-020.
 * 
 *   Each handler's event vector is prepended with accumulated event vectors of previous handlers. So if the first handler
 *   receives [a b], and the second handler normally would receive [c], it will actually receive [a b c]. The purpose is
 *   to make all context available to the entire chain, without a complex framework or crazy scope tricks.
 * 
 *   Parameters:
 * 
 *   `id`: the id of the first re-frame event. The next events in the chain will get the same id followed by an index, so
 *   if your id is `add-todo`, the next one in chain will be called `add-todo-1`.
 * 
 *   `handlers`: re-frame event handler functions, registered with `kee-frame.core/reg-event-fx`.
 * 
 * 
 *   Usage:
 *   ```
 *   (k/reg-chain
 *  :load-customer-data
 * 
 *  (fn [ctx [customer-id]]
 *    {:http-xhrio {:uri    (str "/customer/" customer-id)
 *                  :method :get}})
 * 
 *  (fn [cxt [customer-id customer-data]
 *    (assoc-in ctx [:db :customers customer-id] customer-data)))
 *   ```
 */
kee_frame.core.reg_chain = (function kee_frame$core$reg_chain(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43270 = arguments.length;
var i__4737__auto___43271 = (0);
while(true){
if((i__4737__auto___43271 < len__4736__auto___43270)){
args__4742__auto__.push((arguments[i__4737__auto___43271]));

var G__43272 = (i__4737__auto___43271 + (1));
i__4737__auto___43271 = G__43272;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return kee_frame.core.reg_chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(kee_frame.core.reg_chain.cljs$core$IFn$_invoke$arity$variadic = (function (id,handlers){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(re_chain.core.reg_chain_STAR_,id,kee_frame.core.kee_frame_interceptors,handlers);
}));

(kee_frame.core.reg_chain.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kee_frame.core.reg_chain.cljs$lang$applyTo = (function (seq43233){
var G__43234 = cljs.core.first(seq43233);
var seq43233__$1 = cljs.core.next(seq43233);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43234,seq43233__$1);
}));

/**
 * Make a uri from route data. Useful for avoiding hard coded links in your app.
 * 
 *   Parameters:
 * 
 *   `handler`: The reitit handler from route data
 * 
 *   `params`: Reitit route params for the requested route
 * 
 *   Usage: `[:a {:href (k/path-for [:orders :sort-by :date]} "Orders sorted by date"]`
 */
kee_frame.core.path_for = (function kee_frame$core$path_for(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43273 = arguments.length;
var i__4737__auto___43274 = (0);
while(true){
if((i__4737__auto___43274 < len__4736__auto___43273)){
args__4742__auto__.push((arguments[i__4737__auto___43274]));

var G__43275 = (i__4737__auto___43274 + (1));
i__4737__auto___43274 = G__43275;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return kee_frame.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(kee_frame.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (handler,params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(kee_frame.router.url,handler,params);
}));

(kee_frame.core.path_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kee_frame.core.path_for.cljs$lang$applyTo = (function (seq43235){
var G__43236 = cljs.core.first(seq43235);
var seq43235__$1 = cljs.core.next(seq43235);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43236,seq43235__$1);
}));

/**
 * Reagent component that renders different components for different routes.
 * 
 *   You might need to include a case for `nil`, since there are no route data before the first navigation.
 * 
 *   Parameters:
 * 
 *   `f`: A function that receives the route data on every route change, and returns the value to dispatch on.
 * 
 *   `pairs`: A pair consists of the dispatch value and the reagent component to dispatch to.
 * 
 *   Returns the first component with a matching dispatch value.
 * 
 *   Usage:
 *   ```
 *   [k/switch-route (fn [route] (:handler route))
 *  :index [:div "This is index page"]
 *  :about [:div "This is the about page"]
 *  nil    [:div "Probably also the index page"]]
 *   ```
 */
kee_frame.core.switch_route = (function kee_frame$core$switch_route(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43277 = arguments.length;
var i__4737__auto___43278 = (0);
while(true){
if((i__4737__auto___43278 < len__4736__auto___43277)){
args__4742__auto__.push((arguments[i__4737__auto___43278]));

var G__43279 = (i__4737__auto___43278 + (1));
i__4737__auto___43278 = G__43279;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return kee_frame.core.switch_route.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(kee_frame.core.switch_route.cljs$core$IFn$_invoke$arity$variadic = (function (f,pairs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(kee_frame.router.switch_route,f,pairs);
}));

(kee_frame.core.switch_route.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kee_frame.core.switch_route.cljs$lang$applyTo = (function (seq43237){
var G__43238 = cljs.core.first(seq43237);
var seq43237__$1 = cljs.core.next(seq43237);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43238,seq43237__$1);
}));


//# sourceMappingURL=kee_frame.core.js.map
