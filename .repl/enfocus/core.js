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
enfocus.core.ISelector = (function (){var obj22182 = {};return obj22182;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__4777__auto__ = this$;if(and__4777__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__4777__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__5387__auto__ = (((this$ == null))?null:this$);return (function (){var or__4789__auto__ = (enfocus.core.select[goog.typeOf(x__5387__auto__)]);if(or__4789__auto__)
{return or__4789__auto__;
} else
{var or__4789__auto____$1 = (enfocus.core.select["_"]);if(or__4789__auto____$1)
{return or__4789__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__4777__auto__ = this$;if(and__4777__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__4777__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__5387__auto__ = (((this$ == null))?null:this$);return (function (){var or__4789__auto__ = (enfocus.core.select[goog.typeOf(x__5387__auto__)]);if(or__4789__auto__)
{return or__4789__auto__;
} else
{var or__4789__auto____$1 = (enfocus.core.select["_"]);if(or__4789__auto____$1)
{return or__4789__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__4777__auto__ = this$;if(and__4777__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__4777__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__5387__auto__ = (((this$ == null))?null:this$);return (function (){var or__4789__auto__ = (enfocus.core.select[goog.typeOf(x__5387__auto__)]);if(or__4789__auto__)
{return or__4789__auto__;
} else
{var or__4789__auto____$1 = (enfocus.core.select["_"]);if(or__4789__auto____$1)
{return or__4789__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
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
enfocus.core.ITransform = (function (){var obj22184 = {};return obj22184;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__4777__auto__ = this$;if(and__4777__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__4777__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__5387__auto__ = (((this$ == null))?null:this$);return (function (){var or__4789__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__5387__auto__)]);if(or__4789__auto__)
{return or__4789__auto__;
} else
{var or__4789__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__4789__auto____$1)
{return or__4789__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__4777__auto__ = this$;if(and__4777__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__4777__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__5387__auto__ = (((this$ == null))?null:this$);return (function (){var or__4789__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__5387__auto__)]);if(or__4789__auto__)
{return or__4789__auto__;
} else
{var or__4789__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__4789__auto____$1)
{return or__4789__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
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
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__4777__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__4777__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__4777__auto__;
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
enfocus.core.nodes__GT_coll = (function nodes__GT_coll(nl){if(cljs.core._EQ_.call(null,nl,window))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nl], null);
} else
{return domina.nodes.call(null,nl);
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__22185_SHARP_){if(typeof p1__22185_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__22185_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__22185_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__22192_22198 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__22193_22199 = null;var count__22194_22200 = 0;var i__22195_22201 = 0;while(true){
if((i__22195_22201 < count__22194_22200))
{var vec__22196_22202 = cljs.core._nth.call(null,chunk__22193_22199,i__22195_22201);var attr_22203 = cljs.core.nth.call(null,vec__22196_22202,0,null);var value_22204 = cljs.core.nth.call(null,vec__22196_22202,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_22203),value_22204);
{
var G__22205 = seq__22192_22198;
var G__22206 = chunk__22193_22199;
var G__22207 = count__22194_22200;
var G__22208 = (i__22195_22201 + 1);
seq__22192_22198 = G__22205;
chunk__22193_22199 = G__22206;
count__22194_22200 = G__22207;
i__22195_22201 = G__22208;
continue;
}
} else
{var temp__4092__auto___22209 = cljs.core.seq.call(null,seq__22192_22198);if(temp__4092__auto___22209)
{var seq__22192_22210__$1 = temp__4092__auto___22209;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22192_22210__$1))
{var c__5508__auto___22211 = cljs.core.chunk_first.call(null,seq__22192_22210__$1);{
var G__22212 = cljs.core.chunk_rest.call(null,seq__22192_22210__$1);
var G__22213 = c__5508__auto___22211;
var G__22214 = cljs.core.count.call(null,c__5508__auto___22211);
var G__22215 = 0;
seq__22192_22198 = G__22212;
chunk__22193_22199 = G__22213;
count__22194_22200 = G__22214;
i__22195_22201 = G__22215;
continue;
}
} else
{var vec__22197_22216 = cljs.core.first.call(null,seq__22192_22210__$1);var attr_22217 = cljs.core.nth.call(null,vec__22197_22216,0,null);var value_22218 = cljs.core.nth.call(null,vec__22197_22216,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_22217),value_22218);
{
var G__22219 = cljs.core.next.call(null,seq__22192_22210__$1);
var G__22220 = null;
var G__22221 = 0;
var G__22222 = 0;
seq__22192_22198 = G__22219;
chunk__22193_22199 = G__22220;
count__22194_22200 = G__22221;
i__22195_22201 = G__22222;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__22227 = cljs.core.seq.call(null,values);var chunk__22228 = null;var count__22229 = 0;var i__22230 = 0;while(true){
if((i__22230 < count__22229))
{var attr = cljs.core._nth.call(null,chunk__22228,i__22230);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__22231 = seq__22227;
var G__22232 = chunk__22228;
var G__22233 = count__22229;
var G__22234 = (i__22230 + 1);
seq__22227 = G__22231;
chunk__22228 = G__22232;
count__22229 = G__22233;
i__22230 = G__22234;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__22227);if(temp__4092__auto__)
{var seq__22227__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22227__$1))
{var c__5508__auto__ = cljs.core.chunk_first.call(null,seq__22227__$1);{
var G__22235 = cljs.core.chunk_rest.call(null,seq__22227__$1);
var G__22236 = c__5508__auto__;
var G__22237 = cljs.core.count.call(null,c__5508__auto__);
var G__22238 = 0;
seq__22227 = G__22235;
chunk__22228 = G__22236;
count__22229 = G__22237;
i__22230 = G__22238;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__22227__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__22239 = cljs.core.next.call(null,seq__22227__$1);
var G__22240 = null;
var G__22241 = 0;
var G__22242 = 0;
seq__22227 = G__22239;
chunk__22228 = G__22240;
count__22229 = G__22241;
i__22230 = G__22242;
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
{return Math.floor.call(null,step);
} else
{return Math.ceil.call(null,step);
}
});
enfocus.core.add_map_attrs = (function() {
var add_map_attrs = null;
var add_map_attrs__2 = (function (elem,ats){if(cljs.core.truth_(elem))
{if(cljs.core.map_QMARK_.call(null,ats))
{var seq__22249_22255 = cljs.core.seq.call(null,ats);var chunk__22250_22256 = null;var count__22251_22257 = 0;var i__22252_22258 = 0;while(true){
if((i__22252_22258 < count__22251_22257))
{var vec__22253_22259 = cljs.core._nth.call(null,chunk__22250_22256,i__22252_22258);var k_22260 = cljs.core.nth.call(null,vec__22253_22259,0,null);var v_22261 = cljs.core.nth.call(null,vec__22253_22259,1,null);add_map_attrs.call(null,elem,k_22260,v_22261);
{
var G__22262 = seq__22249_22255;
var G__22263 = chunk__22250_22256;
var G__22264 = count__22251_22257;
var G__22265 = (i__22252_22258 + 1);
seq__22249_22255 = G__22262;
chunk__22250_22256 = G__22263;
count__22251_22257 = G__22264;
i__22252_22258 = G__22265;
continue;
}
} else
{var temp__4092__auto___22266 = cljs.core.seq.call(null,seq__22249_22255);if(temp__4092__auto___22266)
{var seq__22249_22267__$1 = temp__4092__auto___22266;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22249_22267__$1))
{var c__5508__auto___22268 = cljs.core.chunk_first.call(null,seq__22249_22267__$1);{
var G__22269 = cljs.core.chunk_rest.call(null,seq__22249_22267__$1);
var G__22270 = c__5508__auto___22268;
var G__22271 = cljs.core.count.call(null,c__5508__auto___22268);
var G__22272 = 0;
seq__22249_22255 = G__22269;
chunk__22250_22256 = G__22270;
count__22251_22257 = G__22271;
i__22252_22258 = G__22272;
continue;
}
} else
{var vec__22254_22273 = cljs.core.first.call(null,seq__22249_22267__$1);var k_22274 = cljs.core.nth.call(null,vec__22254_22273,0,null);var v_22275 = cljs.core.nth.call(null,vec__22254_22273,1,null);add_map_attrs.call(null,elem,k_22274,v_22275);
{
var G__22276 = cljs.core.next.call(null,seq__22249_22267__$1);
var G__22277 = null;
var G__22278 = 0;
var G__22279 = 0;
seq__22249_22255 = G__22276;
chunk__22250_22256 = G__22277;
count__22251_22257 = G__22278;
i__22252_22258 = G__22279;
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
var add_map_attrs__3 = (function (elem,k,v){elem.setAttribute(cljs.core.name.call(null,k),v);
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
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,0);
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
enfocus.core.hide_style = new cljs.core.PersistentArrayMap(null, 1, ["style","display: none; width: 0px; height: 0px"], null).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this has to be done
* because css selectors do not work unless we have it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){var div = goog.dom.createDom("div",enfocus.core.hide_style);if(cljs.core._EQ_.call(null,child.nodeType,11))
{goog.dom.appendChild(div,child);
} else
{enfocus.core.log_debug.call(null,cljs.core.count.call(null,domina.nodes.call(null,child)));
var seq__22284_22288 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__22285_22289 = null;var count__22286_22290 = 0;var i__22287_22291 = 0;while(true){
if((i__22287_22291 < count__22286_22290))
{var node_22292 = cljs.core._nth.call(null,chunk__22285_22289,i__22287_22291);goog.dom.appendChild(div,node_22292);
{
var G__22293 = seq__22284_22288;
var G__22294 = chunk__22285_22289;
var G__22295 = count__22286_22290;
var G__22296 = (i__22287_22291 + 1);
seq__22284_22288 = G__22293;
chunk__22285_22289 = G__22294;
count__22286_22290 = G__22295;
i__22287_22291 = G__22296;
continue;
}
} else
{var temp__4092__auto___22297 = cljs.core.seq.call(null,seq__22284_22288);if(temp__4092__auto___22297)
{var seq__22284_22298__$1 = temp__4092__auto___22297;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22284_22298__$1))
{var c__5508__auto___22299 = cljs.core.chunk_first.call(null,seq__22284_22298__$1);{
var G__22300 = cljs.core.chunk_rest.call(null,seq__22284_22298__$1);
var G__22301 = c__5508__auto___22299;
var G__22302 = cljs.core.count.call(null,c__5508__auto___22299);
var G__22303 = 0;
seq__22284_22288 = G__22300;
chunk__22285_22289 = G__22301;
count__22286_22290 = G__22302;
i__22287_22291 = G__22303;
continue;
}
} else
{var node_22304 = cljs.core.first.call(null,seq__22284_22298__$1);goog.dom.appendChild(div,node_22304);
{
var G__22305 = cljs.core.next.call(null,seq__22284_22298__$1);
var G__22306 = null;
var G__22307 = 0;
var G__22308 = 0;
seq__22284_22288 = G__22305;
chunk__22285_22289 = G__22306;
count__22286_22290 = G__22307;
i__22287_22291 = G__22308;
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
var replace_ids__1 = (function (text){return replace_ids.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.gensym.call(null,"id"))),cljs.core.str("_")].join(''),text);
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__22309_SHARP_){var id = p1__22309_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__22309_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__22311 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__22311,0,null);var txt = cljs.core.nth.call(null,vec__22311,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
});})(req))
;goog.events.listen(req,goog.net.EventType.COMPLETE,(function (){callback.call(null,req);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req.send(uri,"GET");
} else
{return null;
}
});
enfocus.core.html_to_dom = (function html_to_dom(html){var dfa = enfocus.core.nodes__GT_coll.call(null,domina.html_to_dom.call(null,html));var frag = document.createDocumentFragment();enfocus.core.log_debug.call(null,cljs.core.count.call(null,dfa));
var seq__22316_22320 = cljs.core.seq.call(null,dfa);var chunk__22317_22321 = null;var count__22318_22322 = 0;var i__22319_22323 = 0;while(true){
if((i__22319_22323 < count__22318_22322))
{var df_22324 = cljs.core._nth.call(null,chunk__22317_22321,i__22319_22323);goog.dom.append(frag,df_22324);
{
var G__22325 = seq__22316_22320;
var G__22326 = chunk__22317_22321;
var G__22327 = count__22318_22322;
var G__22328 = (i__22319_22323 + 1);
seq__22316_22320 = G__22325;
chunk__22317_22321 = G__22326;
count__22318_22322 = G__22327;
i__22319_22323 = G__22328;
continue;
}
} else
{var temp__4092__auto___22329 = cljs.core.seq.call(null,seq__22316_22320);if(temp__4092__auto___22329)
{var seq__22316_22330__$1 = temp__4092__auto___22329;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22316_22330__$1))
{var c__5508__auto___22331 = cljs.core.chunk_first.call(null,seq__22316_22330__$1);{
var G__22332 = cljs.core.chunk_rest.call(null,seq__22316_22330__$1);
var G__22333 = c__5508__auto___22331;
var G__22334 = cljs.core.count.call(null,c__5508__auto___22331);
var G__22335 = 0;
seq__22316_22320 = G__22332;
chunk__22317_22321 = G__22333;
count__22318_22322 = G__22334;
i__22319_22323 = G__22335;
continue;
}
} else
{var df_22336 = cljs.core.first.call(null,seq__22316_22330__$1);goog.dom.append(frag,df_22336);
{
var G__22337 = cljs.core.next.call(null,seq__22316_22330__$1);
var G__22338 = null;
var G__22339 = 0;
var G__22340 = 0;
seq__22316_22320 = G__22337;
chunk__22317_22321 = G__22338;
count__22318_22322 = G__22339;
i__22319_22323 = G__22340;
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
enfocus.core.get_cached_dom = (function get_cached_dom(uri){var nod = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);if(cljs.core.truth_(nod))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nod),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,nod))], null);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){var sel_str = enfocus.core.create_sel_str.call(null,sel);var cache = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''));if(cljs.core.truth_(cache))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cache),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,cache))], null);
} else
{var vec__22343 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__22343,0,null);var tdom = cljs.core.nth.call(null,vec__22343,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__22343,sym,tdom,dom,tsnip){
return (function (p1__22341_SHARP_){return p1__22341_SHARP_.outerHTML;
});})(vec__22343,sym,tdom,dom,tsnip))
,tsnip));enfocus.core.remove_node_return_child.call(null,dom);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,html_snip], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,enfocus.core.html_to_dom.call(null,html_snip)], null);
}
});
/**
* wrapper function for extractors that maps the extraction to all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function extr_multi_node(func){var trans = (function trans(pnodes){var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);var result = cljs.core.map.call(null,func,pnod_col);if((cljs.core.count.call(null,result) <= 1))
{return cljs.core.first.call(null,result);
} else
{return result;
}
});if(typeof enfocus.core.t22347 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t22347 = (function (trans,func,extr_multi_node,meta22348){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta22348 = meta22348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t22347.cljs$lang$type = true;
enfocus.core.t22347.cljs$lang$ctorStr = "enfocus.core/t22347";
enfocus.core.t22347.cljs$lang$ctorPrWriter = (function (this__5328__auto__,writer__5329__auto__,opt__5330__auto__){return cljs.core._write.call(null,writer__5329__auto__,"enfocus.core/t22347");
});
enfocus.core.t22347.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t22347.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t22347.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t22347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22349){var self__ = this;
var _22349__$1 = this;return self__.meta22348;
});
enfocus.core.t22347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22349,meta22348__$1){var self__ = this;
var _22349__$1 = this;return (new enfocus.core.t22347(self__.trans,self__.func,self__.extr_multi_node,meta22348__$1));
});
enfocus.core.__GT_t22347 = (function __GT_t22347(trans__$1,func__$1,extr_multi_node__$1,meta22348){return (new enfocus.core.t22347(trans__$1,func__$1,extr_multi_node__$1,meta22348));
});
}
return (new enfocus.core.t22347(trans,func,extr_multi_node,null));
});
/**
* Allows standard domina functions to be chainable
*/
enfocus.core.multi_node_chain = (function() {
var multi_node_chain = null;
var multi_node_chain__1 = (function (func){var trans = (function (nodes,chain){var val = func.call(null,nodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t22357 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t22357 = (function (trans,func,multi_node_chain,meta22358){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta22358 = meta22358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t22357.cljs$lang$type = true;
enfocus.core.t22357.cljs$lang$ctorStr = "enfocus.core/t22357";
enfocus.core.t22357.cljs$lang$ctorPrWriter = (function (this__5328__auto__,writer__5329__auto__,opt__5330__auto__){return cljs.core._write.call(null,writer__5329__auto__,"enfocus.core/t22357");
});
enfocus.core.t22357.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t22357.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t22357.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t22357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22359){var self__ = this;
var _22359__$1 = this;return self__.meta22358;
});
enfocus.core.t22357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22359,meta22358__$1){var self__ = this;
var _22359__$1 = this;return (new enfocus.core.t22357(self__.trans,self__.func,self__.multi_node_chain,meta22358__$1));
});
enfocus.core.__GT_t22357 = (function __GT_t22357(trans__$1,func__$1,multi_node_chain__$1,meta22358){return (new enfocus.core.t22357(trans__$1,func__$1,multi_node_chain__$1,meta22358));
});
}
return (new enfocus.core.t22357(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__22350_SHARP_){return domina.nodes.call(null,p1__22350_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t22360 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t22360 = (function (trans,func,values,multi_node_chain,meta22361){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta22361 = meta22361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t22360.cljs$lang$type = true;
enfocus.core.t22360.cljs$lang$ctorStr = "enfocus.core/t22360";
enfocus.core.t22360.cljs$lang$ctorPrWriter = (function (this__5328__auto__,writer__5329__auto__,opt__5330__auto__){return cljs.core._write.call(null,writer__5329__auto__,"enfocus.core/t22360");
});
enfocus.core.t22360.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t22360.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t22360.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t22360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22362){var self__ = this;
var _22362__$1 = this;return self__.meta22361;
});
enfocus.core.t22360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22362,meta22361__$1){var self__ = this;
var _22362__$1 = this;return (new enfocus.core.t22360(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta22361__$1));
});
enfocus.core.__GT_t22360 = (function __GT_t22360(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta22361){return (new enfocus.core.t22360(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta22361));
});
}
return (new enfocus.core.t22360(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__22363_SHARP_,p2__22364_SHARP_){domina.destroy_children_BANG_.call(null,p1__22363_SHARP_);
return domina.append_BANG_.call(null,p1__22363_SHARP_,p2__22364_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__22365){
var values = cljs.core.seq(arglist__22365);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__22366_SHARP_){return domina.set_html_BANG_.call(null,p1__22366_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__22367_SHARP_){var seq__22374 = cljs.core.seq.call(null,pairs);var chunk__22375 = null;var count__22376 = 0;var i__22377 = 0;while(true){
if((i__22377 < count__22376))
{var vec__22378 = cljs.core._nth.call(null,chunk__22375,i__22377);var name = cljs.core.nth.call(null,vec__22378,0,null);var value = cljs.core.nth.call(null,vec__22378,1,null);domina.set_attr_BANG_.call(null,p1__22367_SHARP_,name,value);
{
var G__22380 = seq__22374;
var G__22381 = chunk__22375;
var G__22382 = count__22376;
var G__22383 = (i__22377 + 1);
seq__22374 = G__22380;
chunk__22375 = G__22381;
count__22376 = G__22382;
i__22377 = G__22383;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__22374);if(temp__4092__auto__)
{var seq__22374__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22374__$1))
{var c__5508__auto__ = cljs.core.chunk_first.call(null,seq__22374__$1);{
var G__22384 = cljs.core.chunk_rest.call(null,seq__22374__$1);
var G__22385 = c__5508__auto__;
var G__22386 = cljs.core.count.call(null,c__5508__auto__);
var G__22387 = 0;
seq__22374 = G__22384;
chunk__22375 = G__22385;
count__22376 = G__22386;
i__22377 = G__22387;
continue;
}
} else
{var vec__22379 = cljs.core.first.call(null,seq__22374__$1);var name = cljs.core.nth.call(null,vec__22379,0,null);var value = cljs.core.nth.call(null,vec__22379,1,null);domina.set_attr_BANG_.call(null,p1__22367_SHARP_,name,value);
{
var G__22388 = cljs.core.next.call(null,seq__22374__$1);
var G__22389 = null;
var G__22390 = 0;
var G__22391 = 0;
seq__22374 = G__22388;
chunk__22375 = G__22389;
count__22376 = G__22390;
i__22377 = G__22391;
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
set_attr.cljs$lang$applyTo = (function (arglist__22392){
var values = cljs.core.seq(arglist__22392);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__22393_SHARP_){var seq__22398 = cljs.core.seq.call(null,values);var chunk__22399 = null;var count__22400 = 0;var i__22401 = 0;while(true){
if((i__22401 < count__22400))
{var name = cljs.core._nth.call(null,chunk__22399,i__22401);domina.remove_attr_BANG_.call(null,p1__22393_SHARP_,name);
{
var G__22402 = seq__22398;
var G__22403 = chunk__22399;
var G__22404 = count__22400;
var G__22405 = (i__22401 + 1);
seq__22398 = G__22402;
chunk__22399 = G__22403;
count__22400 = G__22404;
i__22401 = G__22405;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__22398);if(temp__4092__auto__)
{var seq__22398__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22398__$1))
{var c__5508__auto__ = cljs.core.chunk_first.call(null,seq__22398__$1);{
var G__22406 = cljs.core.chunk_rest.call(null,seq__22398__$1);
var G__22407 = c__5508__auto__;
var G__22408 = cljs.core.count.call(null,c__5508__auto__);
var G__22409 = 0;
seq__22398 = G__22406;
chunk__22399 = G__22407;
count__22400 = G__22408;
i__22401 = G__22409;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__22398__$1);domina.remove_attr_BANG_.call(null,p1__22393_SHARP_,name);
{
var G__22410 = cljs.core.next.call(null,seq__22398__$1);
var G__22411 = null;
var G__22412 = 0;
var G__22413 = 0;
seq__22398 = G__22410;
chunk__22399 = G__22411;
count__22400 = G__22412;
i__22401 = G__22413;
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
remove_attr.cljs$lang$applyTo = (function (arglist__22414){
var values = cljs.core.seq(arglist__22414);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__22417){var vec__22418 = p__22417;var n = cljs.core.nth.call(null,vec__22418,0,null);var v = cljs.core.nth.call(null,vec__22418,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__22419){
var forms = cljs.core.seq(arglist__22419);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__22420_SHARP_){var seq__22425 = cljs.core.seq.call(null,values);var chunk__22426 = null;var count__22427 = 0;var i__22428 = 0;while(true){
if((i__22428 < count__22427))
{var val = cljs.core._nth.call(null,chunk__22426,i__22428);domina.add_class_BANG_.call(null,p1__22420_SHARP_,val);
{
var G__22429 = seq__22425;
var G__22430 = chunk__22426;
var G__22431 = count__22427;
var G__22432 = (i__22428 + 1);
seq__22425 = G__22429;
chunk__22426 = G__22430;
count__22427 = G__22431;
i__22428 = G__22432;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__22425);if(temp__4092__auto__)
{var seq__22425__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22425__$1))
{var c__5508__auto__ = cljs.core.chunk_first.call(null,seq__22425__$1);{
var G__22433 = cljs.core.chunk_rest.call(null,seq__22425__$1);
var G__22434 = c__5508__auto__;
var G__22435 = cljs.core.count.call(null,c__5508__auto__);
var G__22436 = 0;
seq__22425 = G__22433;
chunk__22426 = G__22434;
count__22427 = G__22435;
i__22428 = G__22436;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__22425__$1);domina.add_class_BANG_.call(null,p1__22420_SHARP_,val);
{
var G__22437 = cljs.core.next.call(null,seq__22425__$1);
var G__22438 = null;
var G__22439 = 0;
var G__22440 = 0;
seq__22425 = G__22437;
chunk__22426 = G__22438;
count__22427 = G__22439;
i__22428 = G__22440;
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
add_class.cljs$lang$applyTo = (function (arglist__22441){
var values = cljs.core.seq(arglist__22441);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__22442_SHARP_){var seq__22447 = cljs.core.seq.call(null,values);var chunk__22448 = null;var count__22449 = 0;var i__22450 = 0;while(true){
if((i__22450 < count__22449))
{var val = cljs.core._nth.call(null,chunk__22448,i__22450);domina.remove_class_BANG_.call(null,p1__22442_SHARP_,val);
{
var G__22451 = seq__22447;
var G__22452 = chunk__22448;
var G__22453 = count__22449;
var G__22454 = (i__22450 + 1);
seq__22447 = G__22451;
chunk__22448 = G__22452;
count__22449 = G__22453;
i__22450 = G__22454;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__22447);if(temp__4092__auto__)
{var seq__22447__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22447__$1))
{var c__5508__auto__ = cljs.core.chunk_first.call(null,seq__22447__$1);{
var G__22455 = cljs.core.chunk_rest.call(null,seq__22447__$1);
var G__22456 = c__5508__auto__;
var G__22457 = cljs.core.count.call(null,c__5508__auto__);
var G__22458 = 0;
seq__22447 = G__22455;
chunk__22448 = G__22456;
count__22449 = G__22457;
i__22450 = G__22458;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__22447__$1);domina.remove_class_BANG_.call(null,p1__22442_SHARP_,val);
{
var G__22459 = cljs.core.next.call(null,seq__22447__$1);
var G__22460 = null;
var G__22461 = 0;
var G__22462 = 0;
seq__22447 = G__22459;
chunk__22448 = G__22460;
count__22449 = G__22461;
i__22450 = G__22462;
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
remove_class.cljs$lang$applyTo = (function (arglist__22463){
var values = cljs.core.seq(arglist__22463);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__22464_SHARP_){return domina.set_classes_BANG_.call(null,p1__22464_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__22465){
var values = cljs.core.seq(arglist__22465);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__22470 = cljs.core.seq.call(null,forms);var chunk__22471 = null;var count__22472 = 0;var i__22473 = 0;while(true){
if((i__22473 < count__22472))
{var fun = cljs.core._nth.call(null,chunk__22471,i__22473);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__22474 = seq__22470;
var G__22475 = chunk__22471;
var G__22476 = count__22472;
var G__22477 = (i__22473 + 1);
seq__22470 = G__22474;
chunk__22471 = G__22475;
count__22472 = G__22476;
i__22473 = G__22477;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__22470);if(temp__4092__auto__)
{var seq__22470__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22470__$1))
{var c__5508__auto__ = cljs.core.chunk_first.call(null,seq__22470__$1);{
var G__22478 = cljs.core.chunk_rest.call(null,seq__22470__$1);
var G__22479 = c__5508__auto__;
var G__22480 = cljs.core.count.call(null,c__5508__auto__);
var G__22481 = 0;
seq__22470 = G__22478;
chunk__22471 = G__22479;
count__22472 = G__22480;
i__22473 = G__22481;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__22470__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__22482 = cljs.core.next.call(null,seq__22470__$1);
var G__22483 = null;
var G__22484 = 0;
var G__22485 = 0;
seq__22470 = G__22482;
chunk__22471 = G__22483;
count__22472 = G__22484;
i__22473 = G__22485;
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
do__GT_.cljs$lang$applyTo = (function (arglist__22486){
var forms = cljs.core.seq(arglist__22486);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__22487_SHARP_,p2__22488_SHARP_){return domina.append_BANG_.call(null,p1__22487_SHARP_,p2__22488_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__22489){
var values = cljs.core.seq(arglist__22489);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__22490_SHARP_,p2__22491_SHARP_){return domina.prepend_BANG_.call(null,p1__22490_SHARP_,p2__22491_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__22492){
var values = cljs.core.seq(arglist__22492);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__22493_SHARP_,p2__22494_SHARP_){return domina.insert_before_BANG_.call(null,p1__22493_SHARP_,p2__22494_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__22495){
var values = cljs.core.seq(arglist__22495);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__22496_SHARP_,p2__22497_SHARP_){return domina.insert_after_BANG_.call(null,p1__22496_SHARP_,p2__22497_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__22498){
var values = cljs.core.seq(arglist__22498);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__22499_SHARP_,p2__22500_SHARP_){return domina.swap_content_BANG_.call(null,p1__22499_SHARP_,p2__22500_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__22501){
var values = cljs.core.seq(arglist__22501);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__22502_SHARP_){return domina.detach_BANG_.call(null,p1__22502_SHARP_);
}));
});
/**
* wrap and element in a new element defined as :div {:class 'temp'}
*/
enfocus.core.wrap = (function wrap(elm,mattr){return (function (pnod){var elem = goog.dom.createElement(cljs.core.name.call(null,elm));enfocus.core.add_map_attrs.call(null,elem,mattr);
enfocus.core.at.call(null,elem,enfocus.core.content.call(null,pnod.cloneNode(true)));
return enfocus.core.at.call(null,pnod,enfocus.core.do__GT_.call(null,enfocus.core.after.call(null,elem),enfocus.core.remove_node.call(null)));
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__22503_SHARP_){var seq__22510 = cljs.core.seq.call(null,pairs);var chunk__22511 = null;var count__22512 = 0;var i__22513 = 0;while(true){
if((i__22513 < count__22512))
{var vec__22514 = cljs.core._nth.call(null,chunk__22511,i__22513);var name = cljs.core.nth.call(null,vec__22514,0,null);var value = cljs.core.nth.call(null,vec__22514,1,null);domina.set_style_BANG_.call(null,p1__22503_SHARP_,name,value);
{
var G__22516 = seq__22510;
var G__22517 = chunk__22511;
var G__22518 = count__22512;
var G__22519 = (i__22513 + 1);
seq__22510 = G__22516;
chunk__22511 = G__22517;
count__22512 = G__22518;
i__22513 = G__22519;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__22510);if(temp__4092__auto__)
{var seq__22510__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22510__$1))
{var c__5508__auto__ = cljs.core.chunk_first.call(null,seq__22510__$1);{
var G__22520 = cljs.core.chunk_rest.call(null,seq__22510__$1);
var G__22521 = c__5508__auto__;
var G__22522 = cljs.core.count.call(null,c__5508__auto__);
var G__22523 = 0;
seq__22510 = G__22520;
chunk__22511 = G__22521;
count__22512 = G__22522;
i__22513 = G__22523;
continue;
}
} else
{var vec__22515 = cljs.core.first.call(null,seq__22510__$1);var name = cljs.core.nth.call(null,vec__22515,0,null);var value = cljs.core.nth.call(null,vec__22515,1,null);domina.set_style_BANG_.call(null,p1__22503_SHARP_,name,value);
{
var G__22524 = cljs.core.next.call(null,seq__22510__$1);
var G__22525 = null;
var G__22526 = 0;
var G__22527 = 0;
seq__22510 = G__22524;
chunk__22511 = G__22525;
count__22512 = G__22526;
i__22513 = G__22527;
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
set_style.cljs$lang$applyTo = (function (arglist__22528){
var values = cljs.core.seq(arglist__22528);
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
var remove_style__delegate = function (values){return (function (pnod){return enfocus.core.style_remove.call(null,pnod,values);
});
};
var remove_style = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_style__delegate.call(this,values);};
remove_style.cljs$lang$maxFixedArity = 0;
remove_style.cljs$lang$applyTo = (function (arglist__22529){
var values = cljs.core.seq(arglist__22529);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__22530_SHARP_){return domina.set_data_BANG_.call(null,p1__22530_SHARP_,ky,val);
}));
});
/**
* delays and action by a set timeout, note this is an async operations
* @param {...*} var_args
*/
enfocus.core.delay = (function() { 
var delay__delegate = function (ttime,funcs){return (function (pnod){return enfocus.core.setTimeout.call(null,(function (){return cljs.core.apply.call(null,enfocus.core.at,pnod,funcs);
}),ttime);
});
};
var delay = function (ttime,var_args){
var funcs = null;if (arguments.length > 1) {
  funcs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delay__delegate.call(this,ttime,funcs);};
delay.cljs$lang$maxFixedArity = 1;
delay.cljs$lang$applyTo = (function (arglist__22531){
var ttime = cljs.core.first(arglist__22531);
var funcs = cljs.core.rest(arglist__22531);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__22533_SHARP_,p2__22532_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__22532_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__22558_22566 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__22559_22567 = null;var count__22560_22568 = 0;var i__22561_22569 = 0;while(true){
if((i__22561_22569 < count__22560_22568))
{var idx_22570 = cljs.core._nth.call(null,chunk__22559_22567,i__22561_22569);var attr_22571 = pnod.attributes.item(idx_22570);if(cljs.core.truth_(attr_22571.specified))
{attr_22571.value = rep_str.call(null,attr_22571.value);
} else
{}
{
var G__22572 = seq__22558_22566;
var G__22573 = chunk__22559_22567;
var G__22574 = count__22560_22568;
var G__22575 = (i__22561_22569 + 1);
seq__22558_22566 = G__22572;
chunk__22559_22567 = G__22573;
count__22560_22568 = G__22574;
i__22561_22569 = G__22575;
continue;
}
} else
{var temp__4092__auto___22576 = cljs.core.seq.call(null,seq__22558_22566);if(temp__4092__auto___22576)
{var seq__22558_22577__$1 = temp__4092__auto___22576;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22558_22577__$1))
{var c__5508__auto___22578 = cljs.core.chunk_first.call(null,seq__22558_22577__$1);{
var G__22579 = cljs.core.chunk_rest.call(null,seq__22558_22577__$1);
var G__22580 = c__5508__auto___22578;
var G__22581 = cljs.core.count.call(null,c__5508__auto___22578);
var G__22582 = 0;
seq__22558_22566 = G__22579;
chunk__22559_22567 = G__22580;
count__22560_22568 = G__22581;
i__22561_22569 = G__22582;
continue;
}
} else
{var idx_22583 = cljs.core.first.call(null,seq__22558_22577__$1);var attr_22584 = pnod.attributes.item(idx_22583);if(cljs.core.truth_(attr_22584.specified))
{attr_22584.value = rep_str.call(null,attr_22584.value);
} else
{}
{
var G__22585 = cljs.core.next.call(null,seq__22558_22577__$1);
var G__22586 = null;
var G__22587 = 0;
var G__22588 = 0;
seq__22558_22566 = G__22585;
chunk__22559_22567 = G__22586;
count__22560_22568 = G__22587;
i__22561_22569 = G__22588;
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
if(cljs.core._EQ_.call(null,pnod.nodeType,3))
{return pnod.nodeValue = rep_str.call(null,pnod.nodeValue);
} else
{var seq__22562 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__22563 = null;var count__22564 = 0;var i__22565 = 0;while(true){
if((i__22565 < count__22564))
{var cnode = cljs.core._nth.call(null,chunk__22563,i__22565);rep_node.call(null,cnode);
{
var G__22589 = seq__22562;
var G__22590 = chunk__22563;
var G__22591 = count__22564;
var G__22592 = (i__22565 + 1);
seq__22562 = G__22589;
chunk__22563 = G__22590;
count__22564 = G__22591;
i__22565 = G__22592;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__22562);if(temp__4092__auto__)
{var seq__22562__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22562__$1))
{var c__5508__auto__ = cljs.core.chunk_first.call(null,seq__22562__$1);{
var G__22593 = cljs.core.chunk_rest.call(null,seq__22562__$1);
var G__22594 = c__5508__auto__;
var G__22595 = cljs.core.count.call(null,c__5508__auto__);
var G__22596 = 0;
seq__22562 = G__22593;
chunk__22563 = G__22594;
count__22564 = G__22595;
i__22565 = G__22596;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__22562__$1);rep_node.call(null,cnode);
{
var G__22597 = cljs.core.next.call(null,seq__22562__$1);
var G__22598 = null;
var G__22599 = 0;
var G__22600 = 0;
seq__22562 = G__22597;
chunk__22563 = G__22598;
count__22564 = G__22599;
i__22565 = G__22600;
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
{if(cljs.core.vector_QMARK_.call(null,node_spec))
{var vec__22610 = node_spec;var tag = cljs.core.nth.call(null,vec__22610,0,null);var vec__22611 = cljs.core.nthnext.call(null,vec__22610,1);var m = cljs.core.nth.call(null,vec__22611,0,null);var ms = cljs.core.nthnext.call(null,vec__22611,1);var more = vec__22611;var _ = enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,tag,m,ms));var vec__22612 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__22612,0,null);var segments = cljs.core.nthnext.call(null,vec__22612,1);var id = cljs.core.some.call(null,((function (vec__22610,tag,vec__22611,m,ms,more,_,vec__22612,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__22610,tag,vec__22611,m,ms,more,_,vec__22612,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__22610,tag,vec__22611,m,ms,more,_,vec__22612,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__22610,tag,vec__22611,m,ms,more,_,vec__22612,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__22613_22619 = cljs.core.seq.call(null,attrs__$2);var chunk__22614_22620 = null;var count__22615_22621 = 0;var i__22616_22622 = 0;while(true){
if((i__22616_22622 < count__22615_22621))
{var vec__22617_22623 = cljs.core._nth.call(null,chunk__22614_22620,i__22616_22622);var key_22624 = cljs.core.nth.call(null,vec__22617_22623,0,null);var val_22625 = cljs.core.nth.call(null,vec__22617_22623,1,null);node.setAttribute(cljs.core.name.call(null,key_22624),val_22625);
{
var G__22626 = seq__22613_22619;
var G__22627 = chunk__22614_22620;
var G__22628 = count__22615_22621;
var G__22629 = (i__22616_22622 + 1);
seq__22613_22619 = G__22626;
chunk__22614_22620 = G__22627;
count__22615_22621 = G__22628;
i__22616_22622 = G__22629;
continue;
}
} else
{var temp__4092__auto___22630 = cljs.core.seq.call(null,seq__22613_22619);if(temp__4092__auto___22630)
{var seq__22613_22631__$1 = temp__4092__auto___22630;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22613_22631__$1))
{var c__5508__auto___22632 = cljs.core.chunk_first.call(null,seq__22613_22631__$1);{
var G__22633 = cljs.core.chunk_rest.call(null,seq__22613_22631__$1);
var G__22634 = c__5508__auto___22632;
var G__22635 = cljs.core.count.call(null,c__5508__auto___22632);
var G__22636 = 0;
seq__22613_22619 = G__22633;
chunk__22614_22620 = G__22634;
count__22615_22621 = G__22635;
i__22616_22622 = G__22636;
continue;
}
} else
{var vec__22618_22637 = cljs.core.first.call(null,seq__22613_22631__$1);var key_22638 = cljs.core.nth.call(null,vec__22618_22637,0,null);var val_22639 = cljs.core.nth.call(null,vec__22618_22637,1,null);node.setAttribute(cljs.core.name.call(null,key_22638),val_22639);
{
var G__22640 = cljs.core.next.call(null,seq__22613_22631__$1);
var G__22641 = null;
var G__22642 = 0;
var G__22643 = 0;
seq__22613_22619 = G__22640;
chunk__22614_22620 = G__22641;
count__22615_22621 = G__22642;
i__22616_22622 = G__22643;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(content))
{return domina.append_BANG_.call(null,node,content);
} else
{return null;
}
} else
{if(cljs.core.sequential_QMARK_.call(null,node_spec))
{return cljs.core.flatten.call(null,cljs.core.map.call(null,html,node_spec));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
enfocus.core.get_attr = (function get_attr(attr){return enfocus.core.extr_multi_node.call(null,(function (pnod){return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
* returns the text value of the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_text = (function get_text(){return enfocus.core.extr_multi_node.call(null,(function (pnod){return goog.dom.getTextContent(pnod);
}));
});
/**
* returns the data on a selected node for a given key. If bubble is set will look at parent
*/
enfocus.core.get_data = (function() {
var get_data = null;
var get_data__1 = (function (ky){return get_data.call(null,ky,false);
});
var get_data__2 = (function (ky,bubble){return enfocus.core.extr_multi_node.call(null,(function (node){return domina.get_data.call(null,node,ky,bubble);
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
enfocus.core.get_prop = (function get_prop(prop){return enfocus.core.extr_multi_node.call(null,(function (pnod){return (pnod[cljs.core.name.call(null,prop)]);
}));
});
/**
* this function takes a map, key and value.  It will check if
* the value exists and create a seq of values if one exits.
*/
enfocus.core.merge_form_val = (function merge_form_val(form_map,ky,val){var mval = form_map.call(null,ky);if(cljs.core.coll_QMARK_.call(null,mval))
{return cljs.core.assoc.call(null,form_map,ky,cljs.core.conj.call(null,mval,val));
} else
{if(cljs.core.truth_(mval))
{return cljs.core.assoc.call(null,form_map,ky,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,mval),val));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.assoc.call(null,form_map,ky,val);
} else
{return null;
}
}
}
});
enfocus.core.read_simple_input = (function read_simple_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__4777__auto__ = el.checked;if(cljs.core.truth_(and__4777__auto__))
{return !(cljs.core.empty_QMARK_.call(null,el.name));
} else
{return and__4777__auto__;
}
})()))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{var nm = cljs.core.keyword.call(null,el.name);var onodes = domina.nodes.call(null,el.options);var opts = cljs.core.filter.call(null,((function (nm,onodes){
return (function (p1__22644_SHARP_){return p1__22644_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__22645_SHARP_){return p1__22645_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__22647_SHARP_,p2__22646_SHARP_){var G__22650 = p2__22646_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__22650))
{return enfocus.core.read_simple_input.call(null,p2__22646_SHARP_,p1__22647_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__22650))
{return enfocus.core.read_select_input.call(null,p2__22646_SHARP_,p1__22647_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__22650))
{return enfocus.core.read_simple_input.call(null,p2__22646_SHARP_,p1__22647_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__22650))
{var G__22651 = p2__22646_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__22651))
{return enfocus.core.read_checked_input.call(null,p2__22646_SHARP_,p1__22647_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__22651))
{return enfocus.core.read_checked_input.call(null,p2__22646_SHARP_,p1__22647_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__22651))
{return enfocus.core.read_simple_input.call(null,p2__22646_SHARP_,p1__22647_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__22651))
{return enfocus.core.read_simple_input.call(null,p2__22646_SHARP_,p1__22647_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__22651))
{return enfocus.core.read_simple_input.call(null,p2__22646_SHARP_,p1__22647_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__22651))
{return enfocus.core.read_simple_input.call(null,p2__22646_SHARP_,p1__22647_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__22651))
{return enfocus.core.read_simple_input.call(null,p2__22646_SHARP_,p1__22647_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__22651))
{return enfocus.core.read_simple_input.call(null,p2__22646_SHARP_,p1__22647_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__22647_SHARP_;
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__22647_SHARP_;
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
enfocus.core.reg_filt = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* filter allows you to apply function to futhur scope down what is returned by a selector
*/
enfocus.core.filter = (function filter(tst,trans){return enfocus.core.multi_node_chain.call(null,(function() {
var filt = null;
var filt__1 = (function (pnodes){return filt.call(null,pnodes,null);
});
var filt__2 = (function (pnodes,chain){var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);var ttest = (((tst instanceof cljs.core.Keyword))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);var res = cljs.core.filter.call(null,ttest,pnod_col);if((chain == null))
{return enfocus.core.apply_transform.call(null,trans,res);
} else
{return enfocus.core.apply_transform.call(null,trans,res,chain);
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
enfocus.core.register_filter = (function register_filter(ky,func){return cljs.core.swap_BANG_.call(null,enfocus.core.reg_filt,cljs.core.assoc,ky,func);
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
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"selected","selected",2205476365),enfocus.core.selected_options);
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"checked","checked",1756218137),enfocus.core.checked_radio_checkbox);
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),enfocus.core.nodes__GT_coll.call(null,enfocus.core.select.call(null,node)));
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
var create_sel_str__1 = (function (css_sel){return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__22652_SHARP_){if((p1__22652_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__22652_SHARP_);
} else
{if((p1__22652_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__22652_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__22652_SHARP_))
{return create_sel_str.call(null,p1__22652_SHARP_);
} else
{if(typeof p1__22652_SHARP_ === 'string')
{return p1__22652_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
var css_select__1 = (function (css_sel){return css_select.call(null,"",document,css_sel);
});
var css_select__2 = (function (dom_node,css_sel){return css_select.call(null,"",dom_node,css_sel);
});
var css_select__3 = (function (id_mask_sym,dom_node,css_sel){var sel = clojure.string.trim.call(null,enfocus.enlive.syntax.convert.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)));var ret = domina.css.sel.call(null,dom_node,sel);return ret;
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
enfocus.core.nil_t = (function nil_t(func){var or__4789__auto__ = func;if(cljs.core.truth_(or__4789__auto__))
{return or__4789__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__22661 = node;if(G__22661)
{var bit__5410__auto__ = null;if(cljs.core.truth_((function (){var or__4789__auto__ = bit__5410__auto__;if(cljs.core.truth_(or__4789__auto__))
{return or__4789__auto__;
} else
{return G__22661.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__22661.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__22661);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__22661);
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__22662 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__22662,0,null);var trans__$1 = cljs.core.nth.call(null,vec__22662,1,null);var seq__22663 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__22664 = null;var count__22665 = 0;var i__22666 = 0;while(true){
if((i__22666 < count__22665))
{var vec__22667 = cljs.core._nth.call(null,chunk__22664,i__22666);var sel = cljs.core.nth.call(null,vec__22667,0,null);var t = cljs.core.nth.call(null,vec__22667,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__22669 = seq__22663;
var G__22670 = chunk__22664;
var G__22671 = count__22665;
var G__22672 = (i__22666 + 1);
seq__22663 = G__22669;
chunk__22664 = G__22670;
count__22665 = G__22671;
i__22666 = G__22672;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__22663);if(temp__4092__auto__)
{var seq__22663__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22663__$1))
{var c__5508__auto__ = cljs.core.chunk_first.call(null,seq__22663__$1);{
var G__22673 = cljs.core.chunk_rest.call(null,seq__22663__$1);
var G__22674 = c__5508__auto__;
var G__22675 = cljs.core.count.call(null,c__5508__auto__);
var G__22676 = 0;
seq__22663 = G__22673;
chunk__22664 = G__22674;
count__22665 = G__22675;
i__22666 = G__22676;
continue;
}
} else
{var vec__22668 = cljs.core.first.call(null,seq__22663__$1);var sel = cljs.core.nth.call(null,vec__22668,0,null);var t = cljs.core.nth.call(null,vec__22668,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__22677 = cljs.core.next.call(null,seq__22663__$1);
var G__22678 = null;
var G__22679 = 0;
var G__22680 = 0;
seq__22663 = G__22677;
chunk__22664 = G__22678;
count__22665 = G__22679;
i__22666 = G__22680;
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
i_at.cljs$lang$applyTo = (function (arglist__22681){
var id_mask = cljs.core.first(arglist__22681);
arglist__22681 = cljs.core.next(arglist__22681);
var node = cljs.core.first(arglist__22681);
var trans = cljs.core.rest(arglist__22681);
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
var at__delegate = function (node,trans){return cljs.core.apply.call(null,enfocus.core.i_at,"",node,trans);
};
var at = function (node,var_args){
var trans = null;if (arguments.length > 1) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return at__delegate.call(this,node,trans);};
at.cljs$lang$maxFixedArity = 1;
at.cljs$lang$applyTo = (function (arglist__22682){
var node = cljs.core.first(arglist__22682);
var trans = cljs.core.rest(arglist__22682);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__22687 = node;if(G__22687)
{var bit__5410__auto__ = null;if(cljs.core.truth_((function (){var or__4789__auto__ = bit__5410__auto__;if(cljs.core.truth_(or__4789__auto__))
{return or__4789__auto__;
} else
{return G__22687.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__22687.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__22687);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__22687);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__22688 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__22688,0,null);var trans__$1 = cljs.core.nth.call(null,vec__22688,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__22689){var vec__22690 = p__22689;var ky = cljs.core.nth.call(null,vec__22690,0,null);var sel = cljs.core.nth.call(null,vec__22690,1,null);var ext = cljs.core.nth.call(null,vec__22690,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
}),cljs.core.partition.call(null,3,trans__$1)));
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
from.cljs$lang$applyTo = (function (arglist__22691){
var node = cljs.core.first(arglist__22691);
var trans = cljs.core.rest(arglist__22691);
return from__delegate(node,trans);
});
from.cljs$core$IFn$_invoke$arity$variadic = from__delegate;
return from;
})()
;
enfocus.core.xpath = (function xpath(path){return (function (root,id_mask){if(cljs.core.empty_QMARK_.call(null,id_mask))
{return domina.xpath.xpath.call(null,root,path);
} else
{var tmp = path.replace("@ID='",[cljs.core.str("@ID='"),cljs.core.str(id_mask)].join(''));var mpath = path.replace("@id='",[cljs.core.str("@id='"),cljs.core.str(id_mask)].join(''));return domina.xpath.xpath.call(null,root,mpath);
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
var G__22692 = null;
var G__22692__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__22692__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__22692__3 = (function (this$,root,id_mask){return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__22692 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__22692__1.call(this,this$);
case 2:
return G__22692__2.call(this,this$,root);
case 3:
return G__22692__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__22692;
})()
);
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$ = true;
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$1 = (function (this$){var this$__$1 = this;return enfocus.core.select.call(null,this$__$1,document,"");
});
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$2 = (function (this$,root){var this$__$1 = this;return enfocus.core.select.call(null,this$__$1,root,"");
});
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$3 = (function (this$,root,id_mask){var this$__$1 = this;return enfocus.core.css_select.call(null,id_mask,root,this$__$1);
});
(enfocus.core.ISelector["function"] = true);
(enfocus.core.select["function"] = (function() {
var G__22693 = null;
var G__22693__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__22693__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__22693__3 = (function (this$,root,id_mask){return this$.call(null,root,id_mask);
});
G__22693 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__22693__1.call(this,this$);
case 2:
return G__22693__2.call(this,this$,root);
case 3:
return G__22693__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__22693;
})()
);
(enfocus.core.ITransform["function"] = true);
(enfocus.core.apply_transform["function"] = (function() {
var G__22694 = null;
var G__22694__2 = (function (trans,nodes){return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__22694__3 = (function (trans,nodes,chain){var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});
G__22694 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__22694__2.call(this,trans,nodes);
case 3:
return G__22694__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__22694;
})()
);
