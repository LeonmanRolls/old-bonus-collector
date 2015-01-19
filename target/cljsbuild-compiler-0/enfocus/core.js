// Compiled by ClojureScript 0.0-2069
goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('goog.Timer');
goog.require('goog.dom.query');
goog.require('goog.async.Delay');
goog.require('goog.dom.classes');
goog.require('enfocus.enlive.syntax');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.events');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.async.Delay');
goog.require('goog.dom');
goog.require('enfocus.enlive.syntax');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('goog.Timer');
goog.require('domina.xpath');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('domina');
goog.require('goog.net.XhrIo');
goog.require('goog.style');
goog.require('goog.dom.query');
goog.require('domina.css');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('domina.xpath');
goog.require('domina.css');
enfocus.core.ISelector = (function (){var obj19256 = {};return obj19256;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__3273__auto__ = this$;if(and__3273__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__3273__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__3883__auto__ = (((this$ == null))?null:this$);return (function (){var or__3285__auto__ = (enfocus.core.select[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (enfocus.core.select["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__3273__auto__ = this$;if(and__3273__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__3273__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__3883__auto__ = (((this$ == null))?null:this$);return (function (){var or__3285__auto__ = (enfocus.core.select[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (enfocus.core.select["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__3273__auto__ = this$;if(and__3273__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__3273__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__3883__auto__ = (((this$ == null))?null:this$);return (function (){var or__3285__auto__ = (enfocus.core.select[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (enfocus.core.select["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("ISelector.select",this$);
}
}
})().call(null,this$,root,id_mask);
}
});
select = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return select__1.call(this,this$);
case 2:
return select__2.call(this,this$,root);
case 3:
return select__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select.cljs$core$IFn$_invoke$arity$1 = select__1;
select.cljs$core$IFn$_invoke$arity$2 = select__2;
select.cljs$core$IFn$_invoke$arity$3 = select__3;
return select;
})()
;
enfocus.core.ITransform = (function (){var obj19258 = {};return obj19258;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__3273__auto__ = this$;if(and__3273__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__3273__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__3883__auto__ = (((this$ == null))?null:this$);return (function (){var or__3285__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__3273__auto__ = this$;if(and__3273__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__3273__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__3883__auto__ = (((this$ == null))?null:this$);return (function (){var or__3285__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes,callback);
}
});
apply_transform = function(this$,nodes,callback){
switch(arguments.length){
case 2:
return apply_transform__2.call(this,this$,nodes);
case 3:
return apply_transform__3.call(this,this$,nodes,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply_transform.cljs$core$IFn$_invoke$arity$2 = apply_transform__2;
apply_transform.cljs$core$IFn$_invoke$arity$3 = apply_transform__3;
return apply_transform;
})()
;
enfocus.core.debug = true;
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__3273__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__3273__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3273__auto__;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
enfocus.core.setTimeout = (function setTimeout(func,ttime){return goog.Timer.callOnce(func,ttime);
});
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){return goog.dom.isNodeLike(tst);
});
enfocus.core.nodelist_QMARK_ = (function nodelist_QMARK_(tst){return (tst instanceof NodeList);
});
/**
* coverts a nodelist, node into a collection
*/
enfocus.core.nodes__GT_coll = (function nodes__GT_coll(nl){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl,window))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nl], null);
} else
{return domina.nodes(nl);
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__19259_SHARP_){if(typeof p1__19259_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__19259_SHARP_)], null);
} else
{if(cljs.core.constant$keyword$6)
{return enfocus.core.nodes__GT_coll(p1__19259_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__19266_19272 = cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,values));var chunk__19267_19273 = null;var count__19268_19274 = 0;var i__19269_19275 = 0;while(true){
if((i__19269_19275 < count__19268_19274))
{var vec__19270_19276 = chunk__19267_19273.cljs$core$IIndexed$_nth$arity$2(null,i__19269_19275);var attr_19277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19270_19276,0,null);var value_19278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19270_19276,1,null);goog.style.setStyle(obj,cljs.core.name(attr_19277),value_19278);
{
var G__19279 = seq__19266_19272;
var G__19280 = chunk__19267_19273;
var G__19281 = count__19268_19274;
var G__19282 = (i__19269_19275 + 1);
seq__19266_19272 = G__19279;
chunk__19267_19273 = G__19280;
count__19268_19274 = G__19281;
i__19269_19275 = G__19282;
continue;
}
} else
{var temp__4092__auto___19283 = cljs.core.seq(seq__19266_19272);if(temp__4092__auto___19283)
{var seq__19266_19284__$1 = temp__4092__auto___19283;if(cljs.core.chunked_seq_QMARK_(seq__19266_19284__$1))
{var c__4004__auto___19285 = cljs.core.chunk_first(seq__19266_19284__$1);{
var G__19286 = cljs.core.chunk_rest(seq__19266_19284__$1);
var G__19287 = c__4004__auto___19285;
var G__19288 = cljs.core.count(c__4004__auto___19285);
var G__19289 = 0;
seq__19266_19272 = G__19286;
chunk__19267_19273 = G__19287;
count__19268_19274 = G__19288;
i__19269_19275 = G__19289;
continue;
}
} else
{var vec__19271_19290 = cljs.core.first(seq__19266_19284__$1);var attr_19291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19271_19290,0,null);var value_19292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19271_19290,1,null);goog.style.setStyle(obj,cljs.core.name(attr_19291),value_19292);
{
var G__19293 = cljs.core.next(seq__19266_19284__$1);
var G__19294 = null;
var G__19295 = 0;
var G__19296 = 0;
seq__19266_19272 = G__19293;
chunk__19267_19273 = G__19294;
count__19268_19274 = G__19295;
i__19269_19275 = G__19296;
continue;
}
}
} else
{}
}
break;
}
return obj;
});
/**
* removes the property value from an elements style obj.
*/
enfocus.core.style_remove = (function style_remove(obj,values){var seq__19301 = cljs.core.seq(values);var chunk__19302 = null;var count__19303 = 0;var i__19304 = 0;while(true){
if((i__19304 < count__19303))
{var attr = chunk__19302.cljs$core$IIndexed$_nth$arity$2(null,i__19304);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name(attr),"");
} else
{obj.style.removeProperty(cljs.core.name(attr));
}
{
var G__19305 = seq__19301;
var G__19306 = chunk__19302;
var G__19307 = count__19303;
var G__19308 = (i__19304 + 1);
seq__19301 = G__19305;
chunk__19302 = G__19306;
count__19303 = G__19307;
i__19304 = G__19308;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__19301);if(temp__4092__auto__)
{var seq__19301__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19301__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__19301__$1);{
var G__19309 = cljs.core.chunk_rest(seq__19301__$1);
var G__19310 = c__4004__auto__;
var G__19311 = cljs.core.count(c__4004__auto__);
var G__19312 = 0;
seq__19301 = G__19309;
chunk__19302 = G__19310;
count__19303 = G__19311;
i__19304 = G__19312;
continue;
}
} else
{var attr = cljs.core.first(seq__19301__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name(attr),"");
} else
{obj.style.removeProperty(cljs.core.name(attr));
}
{
var G__19313 = cljs.core.next(seq__19301__$1);
var G__19314 = null;
var G__19315 = 0;
var G__19316 = 0;
seq__19301 = G__19313;
chunk__19302 = G__19314;
count__19303 = G__19315;
i__19304 = G__19316;
continue;
}
}
} else
{return null;
}
}
break;
}
});
enfocus.core.get_eff_prop_name = (function get_eff_prop_name(etype){return [cljs.core.str("__ef_effect_"),cljs.core.str(etype)].join('');
});
enfocus.core.get_mills = (function get_mills(){return (new Date()).getMilliseconds();
});
enfocus.core.pix_round = (function pix_round(step){if((step < 0))
{return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(step) : Math.floor.call(null,step));
} else
{return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(step) : Math.ceil.call(null,step));
}
});
enfocus.core.add_map_attrs = (function() {
var add_map_attrs = null;
var add_map_attrs__2 = (function (elem,ats){if(cljs.core.truth_(elem))
{if(cljs.core.map_QMARK_(ats))
{var seq__19323_19329 = cljs.core.seq(ats);var chunk__19324_19330 = null;var count__19325_19331 = 0;var i__19326_19332 = 0;while(true){
if((i__19326_19332 < count__19325_19331))
{var vec__19327_19333 = chunk__19324_19330.cljs$core$IIndexed$_nth$arity$2(null,i__19326_19332);var k_19334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19327_19333,0,null);var v_19335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19327_19333,1,null);add_map_attrs.cljs$core$IFn$_invoke$arity$3(elem,k_19334,v_19335);
{
var G__19336 = seq__19323_19329;
var G__19337 = chunk__19324_19330;
var G__19338 = count__19325_19331;
var G__19339 = (i__19326_19332 + 1);
seq__19323_19329 = G__19336;
chunk__19324_19330 = G__19337;
count__19325_19331 = G__19338;
i__19326_19332 = G__19339;
continue;
}
} else
{var temp__4092__auto___19340 = cljs.core.seq(seq__19323_19329);if(temp__4092__auto___19340)
{var seq__19323_19341__$1 = temp__4092__auto___19340;if(cljs.core.chunked_seq_QMARK_(seq__19323_19341__$1))
{var c__4004__auto___19342 = cljs.core.chunk_first(seq__19323_19341__$1);{
var G__19343 = cljs.core.chunk_rest(seq__19323_19341__$1);
var G__19344 = c__4004__auto___19342;
var G__19345 = cljs.core.count(c__4004__auto___19342);
var G__19346 = 0;
seq__19323_19329 = G__19343;
chunk__19324_19330 = G__19344;
count__19325_19331 = G__19345;
i__19326_19332 = G__19346;
continue;
}
} else
{var vec__19328_19347 = cljs.core.first(seq__19323_19341__$1);var k_19348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19328_19347,0,null);var v_19349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19328_19347,1,null);add_map_attrs.cljs$core$IFn$_invoke$arity$3(elem,k_19348,v_19349);
{
var G__19350 = cljs.core.next(seq__19323_19341__$1);
var G__19351 = null;
var G__19352 = 0;
var G__19353 = 0;
seq__19323_19329 = G__19350;
chunk__19324_19330 = G__19351;
count__19325_19331 = G__19352;
i__19326_19332 = G__19353;
continue;
}
}
} else
{}
}
break;
}
return elem;
} else
{return null;
}
} else
{return null;
}
});
var add_map_attrs__3 = (function (elem,k,v){elem.setAttribute(cljs.core.name(k),v);
return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case 2:
return add_map_attrs__2.call(this,elem,k);
case 3:
return add_map_attrs__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_map_attrs.cljs$core$IFn$_invoke$arity$2 = add_map_attrs__2;
add_map_attrs.cljs$core$IFn$_invoke$arity$3 = add_map_attrs__3;
return add_map_attrs;
})()
;
/**
* this is incremented everytime a remote template is loaded and decremented when
* it is added to the dom cache
*/
enfocus.core.tpl_load_cnt = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0);
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
enfocus.core.hide_style = new cljs.core.PersistentArrayMap(null, 1, ["style","display: none; width: 0px; height: 0px"], null).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this has to be done
* because css selectors do not work unless we have it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){var div = goog.dom.createDom("div",enfocus.core.hide_style);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeType,11))
{goog.dom.appendChild(div,child);
} else
{enfocus.core.log_debug(cljs.core.count(domina.nodes(child)));
var seq__19358_19362 = cljs.core.seq(domina.nodes(child));var chunk__19359_19363 = null;var count__19360_19364 = 0;var i__19361_19365 = 0;while(true){
if((i__19361_19365 < count__19360_19364))
{var node_19366 = chunk__19359_19363.cljs$core$IIndexed$_nth$arity$2(null,i__19361_19365);goog.dom.appendChild(div,node_19366);
{
var G__19367 = seq__19358_19362;
var G__19368 = chunk__19359_19363;
var G__19369 = count__19360_19364;
var G__19370 = (i__19361_19365 + 1);
seq__19358_19362 = G__19367;
chunk__19359_19363 = G__19368;
count__19360_19364 = G__19369;
i__19361_19365 = G__19370;
continue;
}
} else
{var temp__4092__auto___19371 = cljs.core.seq(seq__19358_19362);if(temp__4092__auto___19371)
{var seq__19358_19372__$1 = temp__4092__auto___19371;if(cljs.core.chunked_seq_QMARK_(seq__19358_19372__$1))
{var c__4004__auto___19373 = cljs.core.chunk_first(seq__19358_19372__$1);{
var G__19374 = cljs.core.chunk_rest(seq__19358_19372__$1);
var G__19375 = c__4004__auto___19373;
var G__19376 = cljs.core.count(c__4004__auto___19373);
var G__19377 = 0;
seq__19358_19362 = G__19374;
chunk__19359_19363 = G__19375;
count__19360_19364 = G__19376;
i__19361_19365 = G__19377;
continue;
}
} else
{var node_19378 = cljs.core.first(seq__19358_19372__$1);goog.dom.appendChild(div,node_19378);
{
var G__19379 = cljs.core.next(seq__19358_19372__$1);
var G__19380 = null;
var G__19381 = 0;
var G__19382 = 0;
seq__19358_19362 = G__19379;
chunk__19359_19363 = G__19380;
count__19360_19364 = G__19381;
i__19361_19365 = G__19382;
continue;
}
}
} else
{}
}
break;
}
}
goog.dom.appendChild(goog.dom.getDocument().documentElement,div);
return div;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){var child = div.childNodes;var frag = document.createDocumentFragment();goog.dom.append(frag,child);
goog.dom.removeNode(div);
return frag;
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function() {
var replace_ids = null;
var replace_ids__1 = (function (text){return replace_ids.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("id"))),cljs.core.str("_")].join(''),text);
});
var replace_ids__2 = (function (id_mask,text){var re = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_mask,text.replace(re,(function (a,b,c,d){return [cljs.core.str(b),cljs.core.str(id_mask),cljs.core.str(c),cljs.core.str(d)].join('');
}))], null);
});
replace_ids = function(id_mask,text){
switch(arguments.length){
case 1:
return replace_ids__1.call(this,id_mask);
case 2:
return replace_ids__2.call(this,id_mask,text);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace_ids.cljs$core$IFn$_invoke$arity$1 = replace_ids__1;
replace_ids.cljs$core$IFn$_invoke$arity$2 = replace_ids__2;
return replace_ids;
})()
;
/**
* before adding the dom back into the live dom we reset the masked ids to orig vals
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = (enfocus.core.css_select.cljs$core$IFn$_invoke$arity$2 ? enfocus.core.css_select.cljs$core$IFn$_invoke$arity$2(nod,"*[id]") : enfocus.core.css_select.call(null,nod,"*[id]"));var nod_col = enfocus.core.nodes__GT_coll(id_nodes);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19383_SHARP_){var id = p1__19383_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__19383_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref(enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__19385 = enfocus.core.replace_ids.cljs$core$IFn$_invoke$arity$2(id_mask,text);var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19385,0,null);var txt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19385,1,null);return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
});})(req))
;goog.events.listen(req,goog.net.EventType.COMPLETE,(function (){callback(req);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req.send(uri,"GET");
} else
{return null;
}
});
enfocus.core.html_to_dom = (function html_to_dom(html){var dfa = enfocus.core.nodes__GT_coll(domina.html_to_dom(html));var frag = document.createDocumentFragment();enfocus.core.log_debug(cljs.core.count(dfa));
var seq__19390_19394 = cljs.core.seq(dfa);var chunk__19391_19395 = null;var count__19392_19396 = 0;var i__19393_19397 = 0;while(true){
if((i__19393_19397 < count__19392_19396))
{var df_19398 = chunk__19391_19395.cljs$core$IIndexed$_nth$arity$2(null,i__19393_19397);goog.dom.append(frag,df_19398);
{
var G__19399 = seq__19390_19394;
var G__19400 = chunk__19391_19395;
var G__19401 = count__19392_19396;
var G__19402 = (i__19393_19397 + 1);
seq__19390_19394 = G__19399;
chunk__19391_19395 = G__19400;
count__19392_19396 = G__19401;
i__19393_19397 = G__19402;
continue;
}
} else
{var temp__4092__auto___19403 = cljs.core.seq(seq__19390_19394);if(temp__4092__auto___19403)
{var seq__19390_19404__$1 = temp__4092__auto___19403;if(cljs.core.chunked_seq_QMARK_(seq__19390_19404__$1))
{var c__4004__auto___19405 = cljs.core.chunk_first(seq__19390_19404__$1);{
var G__19406 = cljs.core.chunk_rest(seq__19390_19404__$1);
var G__19407 = c__4004__auto___19405;
var G__19408 = cljs.core.count(c__4004__auto___19405);
var G__19409 = 0;
seq__19390_19394 = G__19406;
chunk__19391_19395 = G__19407;
count__19392_19396 = G__19408;
i__19393_19397 = G__19409;
continue;
}
} else
{var df_19410 = cljs.core.first(seq__19390_19404__$1);goog.dom.append(frag,df_19410);
{
var G__19411 = cljs.core.next(seq__19390_19404__$1);
var G__19412 = null;
var G__19413 = 0;
var G__19414 = 0;
seq__19390_19394 = G__19411;
chunk__19391_19395 = G__19412;
count__19392_19396 = G__19413;
i__19393_19397 = G__19414;
continue;
}
}
} else
{}
}
break;
}
return frag;
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){var nod = cljs.core.deref(enfocus.core.tpl_cache).call(null,uri);if(cljs.core.truth_(nod))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(nod),enfocus.core.html_to_dom(cljs.core.second(nod))], null);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){var sel_str = (enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$1 ? enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$1(sel) : enfocus.core.create_sel_str.call(null,sel));var cache = cljs.core.deref(enfocus.core.tpl_cache).call(null,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''));if(cljs.core.truth_(cache))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cache),enfocus.core.html_to_dom(cljs.core.second(cache))], null);
} else
{var vec__19417 = enfocus.core.get_cached_dom(uri);var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19417,0,null);var tdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19417,1,null);var dom = enfocus.core.create_hidden_dom(tdom);var tsnip = domina.nodes((enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3 ? enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3(sym,dom,sel) : enfocus.core.css_select.call(null,sym,dom,sel)));var html_snip = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__19417,sym,tdom,dom,tsnip){
return (function (p1__19415_SHARP_){return p1__19415_SHARP_.outerHTML;
});})(vec__19417,sym,tdom,dom,tsnip))
,tsnip));enfocus.core.remove_node_return_child(dom);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(enfocus.core.tpl_cache,cljs.core.assoc,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,html_snip], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,enfocus.core.html_to_dom(html_snip)], null);
}
});
/**
* wrapper function for extractors that maps the extraction to all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function extr_multi_node(func){var trans = (function trans(pnodes){var pnod_col = enfocus.core.nodes__GT_coll(pnodes);var result = cljs.core.map.cljs$core$IFn$_invoke$arity$2(func,pnod_col);if((cljs.core.count(result) <= 1))
{return cljs.core.first(result);
} else
{return result;
}
});if(typeof enfocus.core.t19421 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t19421 = (function (trans,func,extr_multi_node,meta19422){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta19422 = meta19422;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t19421.cljs$lang$type = true;
enfocus.core.t19421.cljs$lang$ctorStr = "enfocus.core/t19421";
enfocus.core.t19421.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"enfocus.core/t19421");
});
enfocus.core.t19421.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t19421.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(nodes,null) : self__.trans.call(null,nodes,null));
});
enfocus.core.t19421.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(nodes,chain) : self__.trans.call(null,nodes,chain));
});
enfocus.core.t19421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19423){var self__ = this;
var _19423__$1 = this;return self__.meta19422;
});
enfocus.core.t19421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19423,meta19422__$1){var self__ = this;
var _19423__$1 = this;return (new enfocus.core.t19421(self__.trans,self__.func,self__.extr_multi_node,meta19422__$1));
});
enfocus.core.__GT_t19421 = (function __GT_t19421(trans__$1,func__$1,extr_multi_node__$1,meta19422){return (new enfocus.core.t19421(trans__$1,func__$1,extr_multi_node__$1,meta19422));
});
}
return (new enfocus.core.t19421(trans,func,extr_multi_node,null));
});
/**
* Allows standard domina functions to be chainable
*/
enfocus.core.multi_node_chain = (function() {
var multi_node_chain = null;
var multi_node_chain__1 = (function (func){var trans = (function (nodes,chain){var val = (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(nodes) : func.call(null,nodes));if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t19431 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t19431 = (function (trans,func,multi_node_chain,meta19432){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta19432 = meta19432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t19431.cljs$lang$type = true;
enfocus.core.t19431.cljs$lang$ctorStr = "enfocus.core/t19431";
enfocus.core.t19431.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"enfocus.core/t19431");
});
enfocus.core.t19431.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t19431.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(nodes,null) : self__.trans.call(null,nodes,null));
});
enfocus.core.t19431.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(nodes,chain) : self__.trans.call(null,nodes,chain));
});
enfocus.core.t19431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19433){var self__ = this;
var _19433__$1 = this;return self__.meta19432;
});
enfocus.core.t19431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19433,meta19432__$1){var self__ = this;
var _19433__$1 = this;return (new enfocus.core.t19431(self__.trans,self__.func,self__.multi_node_chain,meta19432__$1));
});
enfocus.core.__GT_t19431 = (function __GT_t19431(trans__$1,func__$1,multi_node_chain__$1,meta19432){return (new enfocus.core.t19431(trans__$1,func__$1,multi_node_chain__$1,meta19432));
});
}
return (new enfocus.core.t19431(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__19424_SHARP_){return domina.nodes(p1__19424_SHARP_);
}),values);var val = (func.cljs$core$IFn$_invoke$arity$2 ? func.cljs$core$IFn$_invoke$arity$2(nodes,vnodes) : func.call(null,nodes,vnodes));if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t19434 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t19434 = (function (trans,func,values,multi_node_chain,meta19435){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta19435 = meta19435;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t19434.cljs$lang$type = true;
enfocus.core.t19434.cljs$lang$ctorStr = "enfocus.core/t19434";
enfocus.core.t19434.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"enfocus.core/t19434");
});
enfocus.core.t19434.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t19434.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(nodes,null) : self__.trans.call(null,nodes,null));
});
enfocus.core.t19434.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(nodes,chain) : self__.trans.call(null,nodes,chain));
});
enfocus.core.t19434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19436){var self__ = this;
var _19436__$1 = this;return self__.meta19435;
});
enfocus.core.t19434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19436,meta19435__$1){var self__ = this;
var _19436__$1 = this;return (new enfocus.core.t19434(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta19435__$1));
});
enfocus.core.__GT_t19434 = (function __GT_t19434(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta19435){return (new enfocus.core.t19434(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta19435));
});
}
return (new enfocus.core.t19434(trans,func,values,multi_node_chain,null));
});
multi_node_chain = function(values,func){
switch(arguments.length){
case 1:
return multi_node_chain__1.call(this,values);
case 2:
return multi_node_chain__2.call(this,values,func);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_node_chain.cljs$core$IFn$_invoke$arity$1 = multi_node_chain__1;
multi_node_chain.cljs$core$IFn$_invoke$arity$2 = multi_node_chain__2;
return multi_node_chain;
})()
;
/**
* Replaces the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.content = (function() { 
var content__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__19437_SHARP_,p2__19438_SHARP_){domina.destroy_children_BANG_(p1__19437_SHARP_);
return domina.append_BANG_(p1__19437_SHARP_,p2__19438_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__19439){
var values = cljs.core.seq(arglist__19439);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__19440_SHARP_){return domina.set_html_BANG_(p1__19440_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,values);return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__19441_SHARP_){var seq__19448 = cljs.core.seq(pairs);var chunk__19449 = null;var count__19450 = 0;var i__19451 = 0;while(true){
if((i__19451 < count__19450))
{var vec__19452 = chunk__19449.cljs$core$IIndexed$_nth$arity$2(null,i__19451);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19452,0,null);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19452,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__19441_SHARP_,name,cljs.core.array_seq([value], 0));
{
var G__19454 = seq__19448;
var G__19455 = chunk__19449;
var G__19456 = count__19450;
var G__19457 = (i__19451 + 1);
seq__19448 = G__19454;
chunk__19449 = G__19455;
count__19450 = G__19456;
i__19451 = G__19457;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__19448);if(temp__4092__auto__)
{var seq__19448__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19448__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__19448__$1);{
var G__19458 = cljs.core.chunk_rest(seq__19448__$1);
var G__19459 = c__4004__auto__;
var G__19460 = cljs.core.count(c__4004__auto__);
var G__19461 = 0;
seq__19448 = G__19458;
chunk__19449 = G__19459;
count__19450 = G__19460;
i__19451 = G__19461;
continue;
}
} else
{var vec__19453 = cljs.core.first(seq__19448__$1);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19453,0,null);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19453,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__19441_SHARP_,name,cljs.core.array_seq([value], 0));
{
var G__19462 = cljs.core.next(seq__19448__$1);
var G__19463 = null;
var G__19464 = 0;
var G__19465 = 0;
seq__19448 = G__19462;
chunk__19449 = G__19463;
count__19450 = G__19464;
i__19451 = G__19465;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var set_attr = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_attr__delegate.call(this,values);};
set_attr.cljs$lang$maxFixedArity = 0;
set_attr.cljs$lang$applyTo = (function (arglist__19466){
var values = cljs.core.seq(arglist__19466);
return set_attr__delegate(values);
});
set_attr.cljs$core$IFn$_invoke$arity$variadic = set_attr__delegate;
return set_attr;
})()
;
/**
* Dissocs attributes on the selected element.
* @param {...*} var_args
*/
enfocus.core.remove_attr = (function() { 
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__19467_SHARP_){var seq__19472 = cljs.core.seq(values);var chunk__19473 = null;var count__19474 = 0;var i__19475 = 0;while(true){
if((i__19475 < count__19474))
{var name = chunk__19473.cljs$core$IIndexed$_nth$arity$2(null,i__19475);domina.remove_attr_BANG_(p1__19467_SHARP_,name);
{
var G__19476 = seq__19472;
var G__19477 = chunk__19473;
var G__19478 = count__19474;
var G__19479 = (i__19475 + 1);
seq__19472 = G__19476;
chunk__19473 = G__19477;
count__19474 = G__19478;
i__19475 = G__19479;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__19472);if(temp__4092__auto__)
{var seq__19472__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19472__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__19472__$1);{
var G__19480 = cljs.core.chunk_rest(seq__19472__$1);
var G__19481 = c__4004__auto__;
var G__19482 = cljs.core.count(c__4004__auto__);
var G__19483 = 0;
seq__19472 = G__19480;
chunk__19473 = G__19481;
count__19474 = G__19482;
i__19475 = G__19483;
continue;
}
} else
{var name = cljs.core.first(seq__19472__$1);domina.remove_attr_BANG_(p1__19467_SHARP_,name);
{
var G__19484 = cljs.core.next(seq__19472__$1);
var G__19485 = null;
var G__19486 = 0;
var G__19487 = 0;
seq__19472 = G__19484;
chunk__19473 = G__19485;
count__19474 = G__19486;
i__19475 = G__19487;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var remove_attr = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_attr__delegate.call(this,values);};
remove_attr.cljs$lang$maxFixedArity = 0;
remove_attr.cljs$lang$applyTo = (function (arglist__19488){
var values = cljs.core.seq(arglist__19488);
return remove_attr__delegate(values);
});
remove_attr.cljs$core$IFn$_invoke$arity$variadic = remove_attr__delegate;
return remove_attr;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.set_prop = (function() { 
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p__19491){var vec__19492 = p__19491;var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19492,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19492,1,null);return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.name(n));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,forms));return goog.dom.setProperties(node,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__19493){
var forms = cljs.core.seq(arglist__19493);
return set_prop__delegate(forms);
});
set_prop.cljs$core$IFn$_invoke$arity$variadic = set_prop__delegate;
return set_prop;
})()
;
/**
* returns true if the element has a given class
*/
enfocus.core.has_class = (function has_class(el,cls){return goog.dom.classes.hasClass(el,cls);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.add_class = (function() { 
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__19494_SHARP_){var seq__19499 = cljs.core.seq(values);var chunk__19500 = null;var count__19501 = 0;var i__19502 = 0;while(true){
if((i__19502 < count__19501))
{var val = chunk__19500.cljs$core$IIndexed$_nth$arity$2(null,i__19502);domina.add_class_BANG_(p1__19494_SHARP_,val);
{
var G__19503 = seq__19499;
var G__19504 = chunk__19500;
var G__19505 = count__19501;
var G__19506 = (i__19502 + 1);
seq__19499 = G__19503;
chunk__19500 = G__19504;
count__19501 = G__19505;
i__19502 = G__19506;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__19499);if(temp__4092__auto__)
{var seq__19499__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19499__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__19499__$1);{
var G__19507 = cljs.core.chunk_rest(seq__19499__$1);
var G__19508 = c__4004__auto__;
var G__19509 = cljs.core.count(c__4004__auto__);
var G__19510 = 0;
seq__19499 = G__19507;
chunk__19500 = G__19508;
count__19501 = G__19509;
i__19502 = G__19510;
continue;
}
} else
{var val = cljs.core.first(seq__19499__$1);domina.add_class_BANG_(p1__19494_SHARP_,val);
{
var G__19511 = cljs.core.next(seq__19499__$1);
var G__19512 = null;
var G__19513 = 0;
var G__19514 = 0;
seq__19499 = G__19511;
chunk__19500 = G__19512;
count__19501 = G__19513;
i__19502 = G__19514;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var add_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return add_class__delegate.call(this,values);};
add_class.cljs$lang$maxFixedArity = 0;
add_class.cljs$lang$applyTo = (function (arglist__19515){
var values = cljs.core.seq(arglist__19515);
return add_class__delegate(values);
});
add_class.cljs$core$IFn$_invoke$arity$variadic = add_class__delegate;
return add_class;
})()
;
/**
* Removes the specified classes from the selected element.
* @param {...*} var_args
*/
enfocus.core.remove_class = (function() { 
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__19516_SHARP_){var seq__19521 = cljs.core.seq(values);var chunk__19522 = null;var count__19523 = 0;var i__19524 = 0;while(true){
if((i__19524 < count__19523))
{var val = chunk__19522.cljs$core$IIndexed$_nth$arity$2(null,i__19524);domina.remove_class_BANG_(p1__19516_SHARP_,val);
{
var G__19525 = seq__19521;
var G__19526 = chunk__19522;
var G__19527 = count__19523;
var G__19528 = (i__19524 + 1);
seq__19521 = G__19525;
chunk__19522 = G__19526;
count__19523 = G__19527;
i__19524 = G__19528;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__19521);if(temp__4092__auto__)
{var seq__19521__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19521__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__19521__$1);{
var G__19529 = cljs.core.chunk_rest(seq__19521__$1);
var G__19530 = c__4004__auto__;
var G__19531 = cljs.core.count(c__4004__auto__);
var G__19532 = 0;
seq__19521 = G__19529;
chunk__19522 = G__19530;
count__19523 = G__19531;
i__19524 = G__19532;
continue;
}
} else
{var val = cljs.core.first(seq__19521__$1);domina.remove_class_BANG_(p1__19516_SHARP_,val);
{
var G__19533 = cljs.core.next(seq__19521__$1);
var G__19534 = null;
var G__19535 = 0;
var G__19536 = 0;
seq__19521 = G__19533;
chunk__19522 = G__19534;
count__19523 = G__19535;
i__19524 = G__19536;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var remove_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_class__delegate.call(this,values);};
remove_class.cljs$lang$maxFixedArity = 0;
remove_class.cljs$lang$applyTo = (function (arglist__19537){
var values = cljs.core.seq(arglist__19537);
return remove_class__delegate(values);
});
remove_class.cljs$core$IFn$_invoke$arity$variadic = remove_class__delegate;
return remove_class;
})()
;
/**
* Sets the specified classes on the selected element
* @param {...*} var_args
*/
enfocus.core.set_class = (function() { 
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__19538_SHARP_){return domina.set_classes_BANG_(p1__19538_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__19539){
var values = cljs.core.seq(arglist__19539);
return set_class__delegate(values);
});
set_class.cljs$core$IFn$_invoke$arity$variadic = set_class__delegate;
return set_class;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.do__GT_ = (function() { 
var do__GT___delegate = function (forms){return (function (pnod){var seq__19544 = cljs.core.seq(forms);var chunk__19545 = null;var count__19546 = 0;var i__19547 = 0;while(true){
if((i__19547 < count__19546))
{var fun = chunk__19545.cljs$core$IIndexed$_nth$arity$2(null,i__19547);enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(fun,pnod);
{
var G__19548 = seq__19544;
var G__19549 = chunk__19545;
var G__19550 = count__19546;
var G__19551 = (i__19547 + 1);
seq__19544 = G__19548;
chunk__19545 = G__19549;
count__19546 = G__19550;
i__19547 = G__19551;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__19544);if(temp__4092__auto__)
{var seq__19544__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19544__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__19544__$1);{
var G__19552 = cljs.core.chunk_rest(seq__19544__$1);
var G__19553 = c__4004__auto__;
var G__19554 = cljs.core.count(c__4004__auto__);
var G__19555 = 0;
seq__19544 = G__19552;
chunk__19545 = G__19553;
count__19546 = G__19554;
i__19547 = G__19555;
continue;
}
} else
{var fun = cljs.core.first(seq__19544__$1);enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(fun,pnod);
{
var G__19556 = cljs.core.next(seq__19544__$1);
var G__19557 = null;
var G__19558 = 0;
var G__19559 = 0;
seq__19544 = G__19556;
chunk__19545 = G__19557;
count__19546 = G__19558;
i__19547 = G__19559;
continue;
}
}
} else
{return null;
}
}
break;
}
});
};
var do__GT_ = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return do__GT___delegate.call(this,forms);};
do__GT_.cljs$lang$maxFixedArity = 0;
do__GT_.cljs$lang$applyTo = (function (arglist__19560){
var forms = cljs.core.seq(arglist__19560);
return do__GT___delegate(forms);
});
do__GT_.cljs$core$IFn$_invoke$arity$variadic = do__GT___delegate;
return do__GT_;
})()
;
/**
* Appends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.append = (function() { 
var append__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__19561_SHARP_,p2__19562_SHARP_){return domina.append_BANG_(p1__19561_SHARP_,p2__19562_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__19563){
var values = cljs.core.seq(arglist__19563);
return append__delegate(values);
});
append.cljs$core$IFn$_invoke$arity$variadic = append__delegate;
return append;
})()
;
/**
* Prepends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.prepend = (function() { 
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__19564_SHARP_,p2__19565_SHARP_){return domina.prepend_BANG_(p1__19564_SHARP_,p2__19565_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__19566){
var values = cljs.core.seq(arglist__19566);
return prepend__delegate(values);
});
prepend.cljs$core$IFn$_invoke$arity$variadic = prepend__delegate;
return prepend;
})()
;
/**
* inserts the content before the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.before = (function() { 
var before__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__19567_SHARP_,p2__19568_SHARP_){return domina.insert_before_BANG_(p1__19567_SHARP_,p2__19568_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__19569){
var values = cljs.core.seq(arglist__19569);
return before__delegate(values);
});
before.cljs$core$IFn$_invoke$arity$variadic = before__delegate;
return before;
})()
;
/**
* inserts the content after the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.after = (function() { 
var after__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__19570_SHARP_,p2__19571_SHARP_){return domina.insert_after_BANG_(p1__19570_SHARP_,p2__19571_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__19572){
var values = cljs.core.seq(arglist__19572);
return after__delegate(values);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
/**
* substitutes the content for the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.substitute = (function() { 
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__19573_SHARP_,p2__19574_SHARP_){return domina.swap_content_BANG_(p1__19573_SHARP_,p2__19574_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__19575){
var values = cljs.core.seq(arglist__19575);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__19576_SHARP_){return domina.detach_BANG_(p1__19576_SHARP_);
}));
});
/**
* wrap and element in a new element defined as :div {:class 'temp'}
*/
enfocus.core.wrap = (function wrap(elm,mattr){return (function (pnod){var elem = goog.dom.createElement(cljs.core.name(elm));enfocus.core.add_map_attrs.cljs$core$IFn$_invoke$arity$2(elem,mattr);
(enfocus.core.at.cljs$core$IFn$_invoke$arity$2 ? enfocus.core.at.cljs$core$IFn$_invoke$arity$2(elem,enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pnod.cloneNode(true)], 0))) : enfocus.core.at.call(null,elem,enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pnod.cloneNode(true)], 0))));
return (enfocus.core.at.cljs$core$IFn$_invoke$arity$2 ? enfocus.core.at.cljs$core$IFn$_invoke$arity$2(pnod,enfocus.core.do__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([enfocus.core.after.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([elem], 0)),enfocus.core.remove_node()], 0))) : enfocus.core.at.call(null,pnod,enfocus.core.do__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([enfocus.core.after.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([elem], 0)),enfocus.core.remove_node()], 0))));
});
});
/**
* replaces a node with all its children
*/
enfocus.core.unwrap = (function unwrap(){return (function (pnod){var frag = document.createDocumentFragment();goog.dom.append(frag,pnod.childNodes);
return goog.dom.replaceNode(frag,pnod);
});
});
/**
* set a list of style elements from the selected nodes
* @param {...*} var_args
*/
enfocus.core.set_style = (function() { 
var set_style__delegate = function (values){var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,values);return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__19577_SHARP_){var seq__19584 = cljs.core.seq(pairs);var chunk__19585 = null;var count__19586 = 0;var i__19587 = 0;while(true){
if((i__19587 < count__19586))
{var vec__19588 = chunk__19585.cljs$core$IIndexed$_nth$arity$2(null,i__19587);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19588,0,null);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19588,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__19577_SHARP_,name,cljs.core.array_seq([value], 0));
{
var G__19590 = seq__19584;
var G__19591 = chunk__19585;
var G__19592 = count__19586;
var G__19593 = (i__19587 + 1);
seq__19584 = G__19590;
chunk__19585 = G__19591;
count__19586 = G__19592;
i__19587 = G__19593;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__19584);if(temp__4092__auto__)
{var seq__19584__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19584__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__19584__$1);{
var G__19594 = cljs.core.chunk_rest(seq__19584__$1);
var G__19595 = c__4004__auto__;
var G__19596 = cljs.core.count(c__4004__auto__);
var G__19597 = 0;
seq__19584 = G__19594;
chunk__19585 = G__19595;
count__19586 = G__19596;
i__19587 = G__19597;
continue;
}
} else
{var vec__19589 = cljs.core.first(seq__19584__$1);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19589,0,null);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19589,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__19577_SHARP_,name,cljs.core.array_seq([value], 0));
{
var G__19598 = cljs.core.next(seq__19584__$1);
var G__19599 = null;
var G__19600 = 0;
var G__19601 = 0;
seq__19584 = G__19598;
chunk__19585 = G__19599;
count__19586 = G__19600;
i__19587 = G__19601;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var set_style = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_style__delegate.call(this,values);};
set_style.cljs$lang$maxFixedArity = 0;
set_style.cljs$lang$applyTo = (function (arglist__19602){
var values = cljs.core.seq(arglist__19602);
return set_style__delegate(values);
});
set_style.cljs$core$IFn$_invoke$arity$variadic = set_style__delegate;
return set_style;
})()
;
/**
* remove a list style elements from the selected nodes. note: you can only remove styles that are inline
* @param {...*} var_args
*/
enfocus.core.remove_style = (function() { 
var remove_style__delegate = function (values){return (function (pnod){return enfocus.core.style_remove(pnod,values);
});
};
var remove_style = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_style__delegate.call(this,values);};
remove_style.cljs$lang$maxFixedArity = 0;
remove_style.cljs$lang$applyTo = (function (arglist__19603){
var values = cljs.core.seq(arglist__19603);
return remove_style__delegate(values);
});
remove_style.cljs$core$IFn$_invoke$arity$variadic = remove_style__delegate;
return remove_style;
})()
;
/**
* calls the focus function on the selected node
*/
enfocus.core.focus = (function focus(){return (function (node){return node.focus();
});
});
/**
* calls the blur function on the selected node
*/
enfocus.core.blur = (function blur(){return (function (node){return node.blur();
});
});
/**
* addes key value pair of data to the selected nodes. Only use clojure data structures when setting
*/
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__19604_SHARP_){return domina.set_data_BANG_(p1__19604_SHARP_,ky,val);
}));
});
/**
* delays and action by a set timeout, note this is an async operations
* @param {...*} var_args
*/
enfocus.core.delay = (function() { 
var delay__delegate = function (ttime,funcs){return (function (pnod){return enfocus.core.setTimeout((function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(enfocus.core.at,pnod,funcs);
}),ttime);
});
};
var delay = function (ttime,var_args){
var funcs = null;if (arguments.length > 1) {
  funcs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delay__delegate.call(this,ttime,funcs);};
delay.cljs$lang$maxFixedArity = 1;
delay.cljs$lang$applyTo = (function (arglist__19605){
var ttime = cljs.core.first(arglist__19605);
var funcs = cljs.core.rest(arglist__19605);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace(text,/\$\{\s*(\S+)\s*}/,(function (p1__19607_SHARP_,p2__19606_SHARP_){return (vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p2__19606_SHARP_)) : vars.call(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p2__19606_SHARP_)));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__19632_19640 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(pnod.attributes.length));var chunk__19633_19641 = null;var count__19634_19642 = 0;var i__19635_19643 = 0;while(true){
if((i__19635_19643 < count__19634_19642))
{var idx_19644 = chunk__19633_19641.cljs$core$IIndexed$_nth$arity$2(null,i__19635_19643);var attr_19645 = pnod.attributes.item(idx_19644);if(cljs.core.truth_(attr_19645.specified))
{attr_19645.value = (rep_str.cljs$core$IFn$_invoke$arity$1 ? rep_str.cljs$core$IFn$_invoke$arity$1(attr_19645.value) : rep_str.call(null,attr_19645.value));
} else
{}
{
var G__19646 = seq__19632_19640;
var G__19647 = chunk__19633_19641;
var G__19648 = count__19634_19642;
var G__19649 = (i__19635_19643 + 1);
seq__19632_19640 = G__19646;
chunk__19633_19641 = G__19647;
count__19634_19642 = G__19648;
i__19635_19643 = G__19649;
continue;
}
} else
{var temp__4092__auto___19650 = cljs.core.seq(seq__19632_19640);if(temp__4092__auto___19650)
{var seq__19632_19651__$1 = temp__4092__auto___19650;if(cljs.core.chunked_seq_QMARK_(seq__19632_19651__$1))
{var c__4004__auto___19652 = cljs.core.chunk_first(seq__19632_19651__$1);{
var G__19653 = cljs.core.chunk_rest(seq__19632_19651__$1);
var G__19654 = c__4004__auto___19652;
var G__19655 = cljs.core.count(c__4004__auto___19652);
var G__19656 = 0;
seq__19632_19640 = G__19653;
chunk__19633_19641 = G__19654;
count__19634_19642 = G__19655;
i__19635_19643 = G__19656;
continue;
}
} else
{var idx_19657 = cljs.core.first(seq__19632_19651__$1);var attr_19658 = pnod.attributes.item(idx_19657);if(cljs.core.truth_(attr_19658.specified))
{attr_19658.value = (rep_str.cljs$core$IFn$_invoke$arity$1 ? rep_str.cljs$core$IFn$_invoke$arity$1(attr_19658.value) : rep_str.call(null,attr_19658.value));
} else
{}
{
var G__19659 = cljs.core.next(seq__19632_19651__$1);
var G__19660 = null;
var G__19661 = 0;
var G__19662 = 0;
seq__19632_19640 = G__19659;
chunk__19633_19641 = G__19660;
count__19634_19642 = G__19661;
i__19635_19643 = G__19662;
continue;
}
}
} else
{}
}
break;
}
} else
{}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pnod.nodeType,3))
{return pnod.nodeValue = (rep_str.cljs$core$IFn$_invoke$arity$1 ? rep_str.cljs$core$IFn$_invoke$arity$1(pnod.nodeValue) : rep_str.call(null,pnod.nodeValue));
} else
{var seq__19636 = cljs.core.seq(enfocus.core.nodes__GT_coll(pnod.childNodes));var chunk__19637 = null;var count__19638 = 0;var i__19639 = 0;while(true){
if((i__19639 < count__19638))
{var cnode = chunk__19637.cljs$core$IIndexed$_nth$arity$2(null,i__19639);rep_node(cnode);
{
var G__19663 = seq__19636;
var G__19664 = chunk__19637;
var G__19665 = count__19638;
var G__19666 = (i__19639 + 1);
seq__19636 = G__19663;
chunk__19637 = G__19664;
count__19638 = G__19665;
i__19639 = G__19666;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__19636);if(temp__4092__auto__)
{var seq__19636__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19636__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__19636__$1);{
var G__19667 = cljs.core.chunk_rest(seq__19636__$1);
var G__19668 = c__4004__auto__;
var G__19669 = cljs.core.count(c__4004__auto__);
var G__19670 = 0;
seq__19636 = G__19667;
chunk__19637 = G__19668;
count__19638 = G__19669;
i__19639 = G__19670;
continue;
}
} else
{var cnode = cljs.core.first(seq__19636__$1);rep_node(cnode);
{
var G__19671 = cljs.core.next(seq__19636__$1);
var G__19672 = null;
var G__19673 = 0;
var G__19674 = 0;
seq__19636 = G__19671;
chunk__19637 = G__19672;
count__19638 = G__19673;
i__19639 = G__19674;
continue;
}
}
} else
{return null;
}
}
break;
}
}
});
});
/**
* takes clojure data structure and emits a document element
*/
enfocus.core.html = (function html(node_spec){if(typeof node_spec === 'string')
{return document.createTextNode(node_spec);
} else
{if(cljs.core.vector_QMARK_(node_spec))
{var vec__19684 = node_spec;var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19684,0,null);var vec__19685 = cljs.core.nthnext(vec__19684,1);var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19685,0,null);var ms = cljs.core.nthnext(vec__19685,1);var more = vec__19685;var _ = enfocus.core.log_debug(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tag,m,ms], 0)));var vec__19686 = cljs.core.name(tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19686,0,null);var segments = cljs.core.nthnext(vec__19686,1);var id = cljs.core.some(((function (vec__19684,tag,vec__19685,m,ms,more,_,vec__19686,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",seg.charAt(0)))
{return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(seg,1);
} else
{return null;
}
});})(vec__19684,tag,vec__19685,m,ms,more,_,vec__19686,tag_name,segments))
,segments);var classes = cljs.core.keep(((function (vec__19684,tag,vec__19685,m,ms,more,_,vec__19686,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",seg.charAt(0)))
{return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(seg,1);
} else
{return null;
}
});})(vec__19684,tag,vec__19685,m,ms,more,_,vec__19686,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_(m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.constant$keyword$20,id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_(classes)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs__$1,cljs.core.constant$keyword$70,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",classes))):attrs__$1);var content = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(html,((cljs.core.map_QMARK_(m))?ms:more)));var node = document.createElement(tag_name);var seq__19687_19693 = cljs.core.seq(attrs__$2);var chunk__19688_19694 = null;var count__19689_19695 = 0;var i__19690_19696 = 0;while(true){
if((i__19690_19696 < count__19689_19695))
{var vec__19691_19697 = chunk__19688_19694.cljs$core$IIndexed$_nth$arity$2(null,i__19690_19696);var key_19698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19691_19697,0,null);var val_19699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19691_19697,1,null);node.setAttribute(cljs.core.name(key_19698),val_19699);
{
var G__19700 = seq__19687_19693;
var G__19701 = chunk__19688_19694;
var G__19702 = count__19689_19695;
var G__19703 = (i__19690_19696 + 1);
seq__19687_19693 = G__19700;
chunk__19688_19694 = G__19701;
count__19689_19695 = G__19702;
i__19690_19696 = G__19703;
continue;
}
} else
{var temp__4092__auto___19704 = cljs.core.seq(seq__19687_19693);if(temp__4092__auto___19704)
{var seq__19687_19705__$1 = temp__4092__auto___19704;if(cljs.core.chunked_seq_QMARK_(seq__19687_19705__$1))
{var c__4004__auto___19706 = cljs.core.chunk_first(seq__19687_19705__$1);{
var G__19707 = cljs.core.chunk_rest(seq__19687_19705__$1);
var G__19708 = c__4004__auto___19706;
var G__19709 = cljs.core.count(c__4004__auto___19706);
var G__19710 = 0;
seq__19687_19693 = G__19707;
chunk__19688_19694 = G__19708;
count__19689_19695 = G__19709;
i__19690_19696 = G__19710;
continue;
}
} else
{var vec__19692_19711 = cljs.core.first(seq__19687_19705__$1);var key_19712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19692_19711,0,null);var val_19713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19692_19711,1,null);node.setAttribute(cljs.core.name(key_19712),val_19713);
{
var G__19714 = cljs.core.next(seq__19687_19705__$1);
var G__19715 = null;
var G__19716 = 0;
var G__19717 = 0;
seq__19687_19693 = G__19714;
chunk__19688_19694 = G__19715;
count__19689_19695 = G__19716;
i__19690_19696 = G__19717;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(content))
{return domina.append_BANG_(node,content);
} else
{return null;
}
} else
{if(cljs.core.sequential_QMARK_(node_spec))
{return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(html,node_spec));
} else
{if(cljs.core.constant$keyword$6)
{return document.createTextNode([cljs.core.str(node_spec)].join(''));
} else
{return null;
}
}
}
}
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_attr = (function get_attr(attr){return enfocus.core.extr_multi_node((function (pnod){return pnod.getAttribute(cljs.core.name(attr));
}));
});
/**
* returns the text value of the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_text = (function get_text(){return enfocus.core.extr_multi_node((function (pnod){return goog.dom.getTextContent(pnod);
}));
});
/**
* returns the data on a selected node for a given key. If bubble is set will look at parent
*/
enfocus.core.get_data = (function() {
var get_data = null;
var get_data__1 = (function (ky){return get_data.cljs$core$IFn$_invoke$arity$2(ky,false);
});
var get_data__2 = (function (ky,bubble){return enfocus.core.extr_multi_node((function (node){return domina.get_data.cljs$core$IFn$_invoke$arity$3(node,ky,bubble);
}));
});
get_data = function(ky,bubble){
switch(arguments.length){
case 1:
return get_data__1.call(this,ky);
case 2:
return get_data__2.call(this,ky,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$1 = get_data__1;
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
return get_data;
})()
;
/**
* returns the property on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_prop = (function get_prop(prop){return enfocus.core.extr_multi_node((function (pnod){return (pnod[cljs.core.name(prop)]);
}));
});
/**
* this function takes a map, key and value.  It will check if
* the value exists and create a seq of values if one exits.
*/
enfocus.core.merge_form_val = (function merge_form_val(form_map,ky,val){var mval = (form_map.cljs$core$IFn$_invoke$arity$1 ? form_map.cljs$core$IFn$_invoke$arity$1(ky) : form_map.call(null,ky));if(cljs.core.coll_QMARK_(mval))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_map,ky,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(mval,val));
} else
{if(cljs.core.truth_(mval))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_map,ky,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,mval),val));
} else
{if(cljs.core.constant$keyword$6)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_map,ky,val);
} else
{return null;
}
}
}
});
enfocus.core.read_simple_input = (function read_simple_input(el,col){if(!(cljs.core.empty_QMARK_(el.name)))
{return enfocus.core.merge_form_val(col,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__3273__auto__ = el.checked;if(cljs.core.truth_(and__3273__auto__))
{return !(cljs.core.empty_QMARK_(el.name));
} else
{return and__3273__auto__;
}
})()))
{return enfocus.core.merge_form_val(col,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_(el.name)))
{var nm = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(el.name);var onodes = domina.nodes(el.options);var opts = cljs.core.filter(((function (nm,onodes){
return (function (p1__19718_SHARP_){return p1__19718_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val(col,nm,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19719_SHARP_){return p1__19719_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node((function (node){var inputs = node.elements;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19721_SHARP_,p2__19720_SHARP_){var G__19724 = p2__19720_SHARP_.nodeName;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("BUTTON",G__19724))
{return enfocus.core.read_simple_input(p2__19720_SHARP_,p1__19721_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("SELECT",G__19724))
{return enfocus.core.read_select_input(p2__19720_SHARP_,p1__19721_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("TEXTAREA",G__19724))
{return enfocus.core.read_simple_input(p2__19720_SHARP_,p1__19721_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("INPUT",G__19724))
{var G__19725 = p2__19720_SHARP_.type;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("radio",G__19725))
{return enfocus.core.read_checked_input(p2__19720_SHARP_,p1__19721_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",G__19725))
{return enfocus.core.read_checked_input(p2__19720_SHARP_,p1__19721_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("submit",G__19725))
{return enfocus.core.read_simple_input(p2__19720_SHARP_,p1__19721_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("reset",G__19725))
{return enfocus.core.read_simple_input(p2__19720_SHARP_,p1__19721_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("button",G__19725))
{return enfocus.core.read_simple_input(p2__19720_SHARP_,p1__19721_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("password",G__19725))
{return enfocus.core.read_simple_input(p2__19720_SHARP_,p1__19721_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("hidden",G__19725))
{return enfocus.core.read_simple_input(p2__19720_SHARP_,p1__19721_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("text",G__19725))
{return enfocus.core.read_simple_input(p2__19720_SHARP_,p1__19721_SHARP_);
} else
{if(cljs.core.constant$keyword$6)
{return p1__19721_SHARP_;
} else
{return null;
}
}
}
}
}
}
}
}
}
} else
{if(cljs.core.constant$keyword$6)
{return p1__19721_SHARP_;
} else
{return null;
}
}
}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,inputs);
}));
});
enfocus.core.reg_filt = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
* filter allows you to apply function to futhur scope down what is returned by a selector
*/
enfocus.core.filter = (function filter(tst,trans){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function() {
var filt = null;
var filt__1 = (function (pnodes){return filt.cljs$core$IFn$_invoke$arity$2(pnodes,null);
});
var filt__2 = (function (pnodes,chain){var pnod_col = enfocus.core.nodes__GT_coll(pnodes);var ttest = (((tst instanceof cljs.core.Keyword))?cljs.core.deref(enfocus.core.reg_filt).call(null,tst):tst);var res = cljs.core.filter(ttest,pnod_col);if((chain == null))
{return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(trans,res);
} else
{return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$3(trans,res,chain);
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case 1:
return filt__1.call(this,pnodes);
case 2:
return filt__2.call(this,pnodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filt.cljs$core$IFn$_invoke$arity$1 = filt__1;
filt.cljs$core$IFn$_invoke$arity$2 = filt__2;
return filt;
})()
);
});
/**
* registers a filter for a given keyword
*/
enfocus.core.register_filter = (function register_filter(ky,func){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(enfocus.core.reg_filt,cljs.core.assoc,ky,func);
});
/**
* takes a list of options and returns the selected ones.
*/
enfocus.core.selected_options = (function selected_options(pnod){return pnod.selected;
});
/**
* takes a list of radio or checkboxes and returns the checked ones
*/
enfocus.core.checked_radio_checkbox = (function checked_radio_checkbox(pnod){return pnod.checked;
});
enfocus.core.register_filter(cljs.core.constant$keyword$71,enfocus.core.selected_options);
enfocus.core.register_filter(cljs.core.constant$keyword$72,enfocus.core.checked_radio_checkbox);
enfocus.core.match_QMARK_ = (function match_QMARK_(selector){return (function (node){if(cljs.core.truth_((node["matches"])))
{return node.matches(selector);
} else
{if(cljs.core.truth_((node["matchesSelector"])))
{return node.matchesSelector(selector);
} else
{if(cljs.core.truth_((node["msMatchesSelector"])))
{return node.msMatchesSelector(selector);
} else
{if(cljs.core.truth_((node["mozMatchesSelector"])))
{return node.mozMatchesSelector(selector);
} else
{if(cljs.core.truth_((node["webkitMatchesSelector"])))
{return node.webkitMatchesSelector(selector);
} else
{if(cljs.core.constant$keyword$6)
{return cljs.core.some(cljs.core.PersistentHashSet.fromArray([node], true),enfocus.core.nodes__GT_coll(enfocus.core.select.cljs$core$IFn$_invoke$arity$1(node)));
} else
{return null;
}
}
}
}
}
}
});
});
/**
* converts keywords, symbols and strings used in the enlive selector
* syntax to a string representing a standard css selector.  It also
* applys id masking if mask provided
*/
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__1 = (function (css_sel){return create_sel_str.cljs$core$IFn$_invoke$arity$2("",css_sel);
});
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19726_SHARP_){if((p1__19726_SHARP_ instanceof cljs.core.Symbol))
{return (enfocus.core.css_syms.cljs$core$IFn$_invoke$arity$1 ? enfocus.core.css_syms.cljs$core$IFn$_invoke$arity$1(p1__19726_SHARP_) : enfocus.core.css_syms.call(null,p1__19726_SHARP_));
} else
{if((p1__19726_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name(p1__19726_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_(p1__19726_SHARP_))
{return create_sel_str.cljs$core$IFn$_invoke$arity$1(p1__19726_SHARP_);
} else
{if(typeof p1__19726_SHARP_ === 'string')
{return p1__19726_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
} else
{return null;
}
}
}
}
}),css_sel));
});
create_sel_str = function(id_mask_sym,css_sel){
switch(arguments.length){
case 1:
return create_sel_str__1.call(this,id_mask_sym);
case 2:
return create_sel_str__2.call(this,id_mask_sym,css_sel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_sel_str.cljs$core$IFn$_invoke$arity$1 = create_sel_str__1;
create_sel_str.cljs$core$IFn$_invoke$arity$2 = create_sel_str__2;
return create_sel_str;
})()
;
/**
* takes either an enlive selector or a css3 selector and returns a set of nodes that match the selector
*/
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__1 = (function (css_sel){return css_select.cljs$core$IFn$_invoke$arity$3("",document,css_sel);
});
var css_select__2 = (function (dom_node,css_sel){return css_select.cljs$core$IFn$_invoke$arity$3("",dom_node,css_sel);
});
var css_select__3 = (function (id_mask_sym,dom_node,css_sel){var sel = clojure.string.trim(enfocus.enlive.syntax.convert(enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$2(id_mask_sym,css_sel)));var ret = domina.css.sel.cljs$core$IFn$_invoke$arity$2(dom_node,sel);return ret;
});
css_select = function(id_mask_sym,dom_node,css_sel){
switch(arguments.length){
case 1:
return css_select__1.call(this,id_mask_sym);
case 2:
return css_select__2.call(this,id_mask_sym,dom_node);
case 3:
return css_select__3.call(this,id_mask_sym,dom_node,css_sel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
css_select.cljs$core$IFn$_invoke$arity$1 = css_select__1;
css_select.cljs$core$IFn$_invoke$arity$2 = css_select__2;
css_select.cljs$core$IFn$_invoke$arity$3 = css_select__3;
return css_select;
})()
;
enfocus.core.nil_t = (function nil_t(func){var or__3285__auto__ = func;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count(trans);var sel_QMARK_ = (function (){var G__19735 = node;if(G__19735)
{var bit__3906__auto__ = null;if(cljs.core.truth_((function (){var or__3285__auto__ = bit__3906__auto__;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return G__19735.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__19735.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(enfocus.core.ISelector,G__19735);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(enfocus.core.ISelector,G__19735);
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cnt)))
{return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(cljs.core.first(trans),node);
} else
{var vec__19736 = ((sel_QMARK_)?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(trans,node)),document):cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19736,0,null);var trans__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19736,1,null);var seq__19737 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,trans__$1));var chunk__19738 = null;var count__19739 = 0;var i__19740 = 0;while(true){
if((i__19740 < count__19739))
{var vec__19741 = chunk__19738.cljs$core$IIndexed$_nth$arity$2(null,i__19740);var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19741,0,null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19741,1,null);enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(enfocus.core.nil_t(t),enfocus.core.select.cljs$core$IFn$_invoke$arity$3(sel,node__$1,id_mask));
{
var G__19743 = seq__19737;
var G__19744 = chunk__19738;
var G__19745 = count__19739;
var G__19746 = (i__19740 + 1);
seq__19737 = G__19743;
chunk__19738 = G__19744;
count__19739 = G__19745;
i__19740 = G__19746;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__19737);if(temp__4092__auto__)
{var seq__19737__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19737__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__19737__$1);{
var G__19747 = cljs.core.chunk_rest(seq__19737__$1);
var G__19748 = c__4004__auto__;
var G__19749 = cljs.core.count(c__4004__auto__);
var G__19750 = 0;
seq__19737 = G__19747;
chunk__19738 = G__19748;
count__19739 = G__19749;
i__19740 = G__19750;
continue;
}
} else
{var vec__19742 = cljs.core.first(seq__19737__$1);var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19742,0,null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19742,1,null);enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(enfocus.core.nil_t(t),enfocus.core.select.cljs$core$IFn$_invoke$arity$3(sel,node__$1,id_mask));
{
var G__19751 = cljs.core.next(seq__19737__$1);
var G__19752 = null;
var G__19753 = 0;
var G__19754 = 0;
seq__19737 = G__19751;
chunk__19738 = G__19752;
count__19739 = G__19753;
i__19740 = G__19754;
continue;
}
}
} else
{return null;
}
}
break;
}
}
};
var i_at = function (id_mask,node,var_args){
var trans = null;if (arguments.length > 2) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return i_at__delegate.call(this,id_mask,node,trans);};
i_at.cljs$lang$maxFixedArity = 2;
i_at.cljs$lang$applyTo = (function (arglist__19755){
var id_mask = cljs.core.first(arglist__19755);
arglist__19755 = cljs.core.next(arglist__19755);
var node = cljs.core.first(arglist__19755);
var trans = cljs.core.rest(arglist__19755);
return i_at__delegate(id_mask,node,trans);
});
i_at.cljs$core$IFn$_invoke$arity$variadic = i_at__delegate;
return i_at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.at = (function() { 
var at__delegate = function (node,trans){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(enfocus.core.i_at,"",node,trans);
};
var at = function (node,var_args){
var trans = null;if (arguments.length > 1) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return at__delegate.call(this,node,trans);};
at.cljs$lang$maxFixedArity = 1;
at.cljs$lang$applyTo = (function (arglist__19756){
var node = cljs.core.first(arglist__19756);
var trans = cljs.core.rest(arglist__19756);
return at__delegate(node,trans);
});
at.cljs$core$IFn$_invoke$arity$variadic = at__delegate;
return at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.from = (function() { 
var from__delegate = function (node,trans){var cnt = cljs.core.count(trans);var sel_QMARK_ = (function (){var G__19761 = node;if(G__19761)
{var bit__3906__auto__ = null;if(cljs.core.truth_((function (){var or__3285__auto__ = bit__3906__auto__;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return G__19761.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__19761.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(enfocus.core.ISelector,G__19761);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(enfocus.core.ISelector,G__19761);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cnt)))
{return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(cljs.core.first(trans),enfocus.core.select.cljs$core$IFn$_invoke$arity$1(node));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cnt))
{return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(cljs.core.first(trans),node);
} else
{if(cljs.core.constant$keyword$6)
{var vec__19762 = ((sel_QMARK_)?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(trans,node)),document):cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19762,0,null);var trans__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19762,1,null);return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p__19763){var vec__19764 = p__19763;var ky = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19764,0,null);var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19764,1,null);var ext = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19764,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(ext,enfocus.core.select.cljs$core$IFn$_invoke$arity$3(sel,node__$1,""))], null);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(3,trans__$1)));
} else
{return null;
}
}
}
};
var from = function (node,var_args){
var trans = null;if (arguments.length > 1) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return from__delegate.call(this,node,trans);};
from.cljs$lang$maxFixedArity = 1;
from.cljs$lang$applyTo = (function (arglist__19765){
var node = cljs.core.first(arglist__19765);
var trans = cljs.core.rest(arglist__19765);
return from__delegate(node,trans);
});
from.cljs$core$IFn$_invoke$arity$variadic = from__delegate;
return from;
})()
;
enfocus.core.xpath = (function xpath(path){return (function (root,id_mask){if(cljs.core.empty_QMARK_(id_mask))
{return domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(root,path);
} else
{var tmp = path.replace("@ID='",[cljs.core.str("@ID='"),cljs.core.str(id_mask)].join(''));var mpath = path.replace("@id='",[cljs.core.str("@id='"),cljs.core.str(id_mask)].join(''));return domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(root,mpath);
}
});
});
enfocus.core.this_node = (function this_node(root,id_mask){return root;
});
if(cljs.core.truth_((typeof Text != 'undefined')))
{Text.prototype.domina$DomContent$ = true;
Text.prototype.domina$DomContent$nodes$arity$1 = (function (content){var content__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$1], null);
});
Text.prototype.domina$DomContent$single_node$arity$1 = (function (content){var content__$1 = this;return content__$1;
});
} else
{}
(enfocus.core.ISelector["string"] = true);
(enfocus.core.select["string"] = (function() {
var G__19766 = null;
var G__19766__1 = (function (this$){return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$,document,"");
});
var G__19766__2 = (function (this$,root){return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$,root,"");
});
var G__19766__3 = (function (this$,root,id_mask){return enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3(id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__19766 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__19766__1.call(this,this$);
case 2:
return G__19766__2.call(this,this$,root);
case 3:
return G__19766__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__19766;
})()
);
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$ = true;
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$1 = (function (this$){var this$__$1 = this;return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$__$1,document,"");
});
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$2 = (function (this$,root){var this$__$1 = this;return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$__$1,root,"");
});
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$3 = (function (this$,root,id_mask){var this$__$1 = this;return enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3(id_mask,root,this$__$1);
});
(enfocus.core.ISelector["function"] = true);
(enfocus.core.select["function"] = (function() {
var G__19767 = null;
var G__19767__1 = (function (this$){return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$,document,"");
});
var G__19767__2 = (function (this$,root){return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$,root,"");
});
var G__19767__3 = (function (this$,root,id_mask){return (this$.cljs$core$IFn$_invoke$arity$2 ? this$.cljs$core$IFn$_invoke$arity$2(root,id_mask) : this$.call(null,root,id_mask));
});
G__19767 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__19767__1.call(this,this$);
case 2:
return G__19767__2.call(this,this$,root);
case 3:
return G__19767__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__19767;
})()
);
(enfocus.core.ITransform["function"] = true);
(enfocus.core.apply_transform["function"] = (function() {
var G__19768 = null;
var G__19768__2 = (function (trans,nodes){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(trans,enfocus.core.nodes__GT_coll(nodes)));
});
var G__19768__3 = (function (trans,nodes,chain){var pnod_col = enfocus.core.nodes__GT_coll(nodes);var val = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(trans,pnod_col));if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(chain,nodes);
} else
{return val;
}
});
G__19768 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__19768__2.call(this,trans,nodes);
case 3:
return G__19768__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__19768;
})()
);
