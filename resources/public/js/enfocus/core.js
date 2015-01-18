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
enfocus.core.ISelector = (function (){var obj36067 = {};return obj36067;
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
enfocus.core.ITransform = (function (){var obj36069 = {};return obj36069;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__36070_SHARP_){if(typeof p1__36070_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__36070_SHARP_)], null);
} else
{if(cljs.core.constant$keyword$126)
{return enfocus.core.nodes__GT_coll(p1__36070_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__36077_36083 = cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,values));var chunk__36078_36084 = null;var count__36079_36085 = 0;var i__36080_36086 = 0;while(true){
if((i__36080_36086 < count__36079_36085))
{var vec__36081_36087 = chunk__36078_36084.cljs$core$IIndexed$_nth$arity$2(null,i__36080_36086);var attr_36088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36081_36087,0,null);var value_36089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36081_36087,1,null);goog.style.setStyle(obj,cljs.core.name(attr_36088),value_36089);
{
var G__36090 = seq__36077_36083;
var G__36091 = chunk__36078_36084;
var G__36092 = count__36079_36085;
var G__36093 = (i__36080_36086 + 1);
seq__36077_36083 = G__36090;
chunk__36078_36084 = G__36091;
count__36079_36085 = G__36092;
i__36080_36086 = G__36093;
continue;
}
} else
{var temp__4092__auto___36094 = cljs.core.seq(seq__36077_36083);if(temp__4092__auto___36094)
{var seq__36077_36095__$1 = temp__4092__auto___36094;if(cljs.core.chunked_seq_QMARK_(seq__36077_36095__$1))
{var c__4004__auto___36096 = cljs.core.chunk_first(seq__36077_36095__$1);{
var G__36097 = cljs.core.chunk_rest(seq__36077_36095__$1);
var G__36098 = c__4004__auto___36096;
var G__36099 = cljs.core.count(c__4004__auto___36096);
var G__36100 = 0;
seq__36077_36083 = G__36097;
chunk__36078_36084 = G__36098;
count__36079_36085 = G__36099;
i__36080_36086 = G__36100;
continue;
}
} else
{var vec__36082_36101 = cljs.core.first(seq__36077_36095__$1);var attr_36102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36082_36101,0,null);var value_36103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36082_36101,1,null);goog.style.setStyle(obj,cljs.core.name(attr_36102),value_36103);
{
var G__36104 = cljs.core.next(seq__36077_36095__$1);
var G__36105 = null;
var G__36106 = 0;
var G__36107 = 0;
seq__36077_36083 = G__36104;
chunk__36078_36084 = G__36105;
count__36079_36085 = G__36106;
i__36080_36086 = G__36107;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__36112 = cljs.core.seq(values);var chunk__36113 = null;var count__36114 = 0;var i__36115 = 0;while(true){
if((i__36115 < count__36114))
{var attr = chunk__36113.cljs$core$IIndexed$_nth$arity$2(null,i__36115);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name(attr),"");
} else
{obj.style.removeProperty(cljs.core.name(attr));
}
{
var G__36116 = seq__36112;
var G__36117 = chunk__36113;
var G__36118 = count__36114;
var G__36119 = (i__36115 + 1);
seq__36112 = G__36116;
chunk__36113 = G__36117;
count__36114 = G__36118;
i__36115 = G__36119;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__36112);if(temp__4092__auto__)
{var seq__36112__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36112__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__36112__$1);{
var G__36120 = cljs.core.chunk_rest(seq__36112__$1);
var G__36121 = c__4004__auto__;
var G__36122 = cljs.core.count(c__4004__auto__);
var G__36123 = 0;
seq__36112 = G__36120;
chunk__36113 = G__36121;
count__36114 = G__36122;
i__36115 = G__36123;
continue;
}
} else
{var attr = cljs.core.first(seq__36112__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name(attr),"");
} else
{obj.style.removeProperty(cljs.core.name(attr));
}
{
var G__36124 = cljs.core.next(seq__36112__$1);
var G__36125 = null;
var G__36126 = 0;
var G__36127 = 0;
seq__36112 = G__36124;
chunk__36113 = G__36125;
count__36114 = G__36126;
i__36115 = G__36127;
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
{var seq__36134_36140 = cljs.core.seq(ats);var chunk__36135_36141 = null;var count__36136_36142 = 0;var i__36137_36143 = 0;while(true){
if((i__36137_36143 < count__36136_36142))
{var vec__36138_36144 = chunk__36135_36141.cljs$core$IIndexed$_nth$arity$2(null,i__36137_36143);var k_36145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36138_36144,0,null);var v_36146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36138_36144,1,null);add_map_attrs.cljs$core$IFn$_invoke$arity$3(elem,k_36145,v_36146);
{
var G__36147 = seq__36134_36140;
var G__36148 = chunk__36135_36141;
var G__36149 = count__36136_36142;
var G__36150 = (i__36137_36143 + 1);
seq__36134_36140 = G__36147;
chunk__36135_36141 = G__36148;
count__36136_36142 = G__36149;
i__36137_36143 = G__36150;
continue;
}
} else
{var temp__4092__auto___36151 = cljs.core.seq(seq__36134_36140);if(temp__4092__auto___36151)
{var seq__36134_36152__$1 = temp__4092__auto___36151;if(cljs.core.chunked_seq_QMARK_(seq__36134_36152__$1))
{var c__4004__auto___36153 = cljs.core.chunk_first(seq__36134_36152__$1);{
var G__36154 = cljs.core.chunk_rest(seq__36134_36152__$1);
var G__36155 = c__4004__auto___36153;
var G__36156 = cljs.core.count(c__4004__auto___36153);
var G__36157 = 0;
seq__36134_36140 = G__36154;
chunk__36135_36141 = G__36155;
count__36136_36142 = G__36156;
i__36137_36143 = G__36157;
continue;
}
} else
{var vec__36139_36158 = cljs.core.first(seq__36134_36152__$1);var k_36159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36139_36158,0,null);var v_36160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36139_36158,1,null);add_map_attrs.cljs$core$IFn$_invoke$arity$3(elem,k_36159,v_36160);
{
var G__36161 = cljs.core.next(seq__36134_36152__$1);
var G__36162 = null;
var G__36163 = 0;
var G__36164 = 0;
seq__36134_36140 = G__36161;
chunk__36135_36141 = G__36162;
count__36136_36142 = G__36163;
i__36137_36143 = G__36164;
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
var seq__36169_36173 = cljs.core.seq(domina.nodes(child));var chunk__36170_36174 = null;var count__36171_36175 = 0;var i__36172_36176 = 0;while(true){
if((i__36172_36176 < count__36171_36175))
{var node_36177 = chunk__36170_36174.cljs$core$IIndexed$_nth$arity$2(null,i__36172_36176);goog.dom.appendChild(div,node_36177);
{
var G__36178 = seq__36169_36173;
var G__36179 = chunk__36170_36174;
var G__36180 = count__36171_36175;
var G__36181 = (i__36172_36176 + 1);
seq__36169_36173 = G__36178;
chunk__36170_36174 = G__36179;
count__36171_36175 = G__36180;
i__36172_36176 = G__36181;
continue;
}
} else
{var temp__4092__auto___36182 = cljs.core.seq(seq__36169_36173);if(temp__4092__auto___36182)
{var seq__36169_36183__$1 = temp__4092__auto___36182;if(cljs.core.chunked_seq_QMARK_(seq__36169_36183__$1))
{var c__4004__auto___36184 = cljs.core.chunk_first(seq__36169_36183__$1);{
var G__36185 = cljs.core.chunk_rest(seq__36169_36183__$1);
var G__36186 = c__4004__auto___36184;
var G__36187 = cljs.core.count(c__4004__auto___36184);
var G__36188 = 0;
seq__36169_36173 = G__36185;
chunk__36170_36174 = G__36186;
count__36171_36175 = G__36187;
i__36172_36176 = G__36188;
continue;
}
} else
{var node_36189 = cljs.core.first(seq__36169_36183__$1);goog.dom.appendChild(div,node_36189);
{
var G__36190 = cljs.core.next(seq__36169_36183__$1);
var G__36191 = null;
var G__36192 = 0;
var G__36193 = 0;
seq__36169_36173 = G__36190;
chunk__36170_36174 = G__36191;
count__36171_36175 = G__36192;
i__36172_36176 = G__36193;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = (enfocus.core.css_select.cljs$core$IFn$_invoke$arity$2 ? enfocus.core.css_select.cljs$core$IFn$_invoke$arity$2(nod,"*[id]") : enfocus.core.css_select.call(null,nod,"*[id]"));var nod_col = enfocus.core.nodes__GT_coll(id_nodes);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36194_SHARP_){var id = p1__36194_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__36194_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref(enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__36196 = enfocus.core.replace_ids.cljs$core$IFn$_invoke$arity$2(id_mask,text);var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36196,0,null);var txt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36196,1,null);return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__36201_36205 = cljs.core.seq(dfa);var chunk__36202_36206 = null;var count__36203_36207 = 0;var i__36204_36208 = 0;while(true){
if((i__36204_36208 < count__36203_36207))
{var df_36209 = chunk__36202_36206.cljs$core$IIndexed$_nth$arity$2(null,i__36204_36208);goog.dom.append(frag,df_36209);
{
var G__36210 = seq__36201_36205;
var G__36211 = chunk__36202_36206;
var G__36212 = count__36203_36207;
var G__36213 = (i__36204_36208 + 1);
seq__36201_36205 = G__36210;
chunk__36202_36206 = G__36211;
count__36203_36207 = G__36212;
i__36204_36208 = G__36213;
continue;
}
} else
{var temp__4092__auto___36214 = cljs.core.seq(seq__36201_36205);if(temp__4092__auto___36214)
{var seq__36201_36215__$1 = temp__4092__auto___36214;if(cljs.core.chunked_seq_QMARK_(seq__36201_36215__$1))
{var c__4004__auto___36216 = cljs.core.chunk_first(seq__36201_36215__$1);{
var G__36217 = cljs.core.chunk_rest(seq__36201_36215__$1);
var G__36218 = c__4004__auto___36216;
var G__36219 = cljs.core.count(c__4004__auto___36216);
var G__36220 = 0;
seq__36201_36205 = G__36217;
chunk__36202_36206 = G__36218;
count__36203_36207 = G__36219;
i__36204_36208 = G__36220;
continue;
}
} else
{var df_36221 = cljs.core.first(seq__36201_36215__$1);goog.dom.append(frag,df_36221);
{
var G__36222 = cljs.core.next(seq__36201_36215__$1);
var G__36223 = null;
var G__36224 = 0;
var G__36225 = 0;
seq__36201_36205 = G__36222;
chunk__36202_36206 = G__36223;
count__36203_36207 = G__36224;
i__36204_36208 = G__36225;
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
{var vec__36228 = enfocus.core.get_cached_dom(uri);var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36228,0,null);var tdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36228,1,null);var dom = enfocus.core.create_hidden_dom(tdom);var tsnip = domina.nodes((enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3 ? enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3(sym,dom,sel) : enfocus.core.css_select.call(null,sym,dom,sel)));var html_snip = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__36228,sym,tdom,dom,tsnip){
return (function (p1__36226_SHARP_){return p1__36226_SHARP_.outerHTML;
});})(vec__36228,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t36232 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t36232 = (function (trans,func,extr_multi_node,meta36233){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta36233 = meta36233;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t36232.cljs$lang$type = true;
enfocus.core.t36232.cljs$lang$ctorStr = "enfocus.core/t36232";
enfocus.core.t36232.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"enfocus.core/t36232");
});
enfocus.core.t36232.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t36232.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(nodes,null) : self__.trans.call(null,nodes,null));
});
enfocus.core.t36232.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(nodes,chain) : self__.trans.call(null,nodes,chain));
});
enfocus.core.t36232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36234){var self__ = this;
var _36234__$1 = this;return self__.meta36233;
});
enfocus.core.t36232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36234,meta36233__$1){var self__ = this;
var _36234__$1 = this;return (new enfocus.core.t36232(self__.trans,self__.func,self__.extr_multi_node,meta36233__$1));
});
enfocus.core.__GT_t36232 = (function __GT_t36232(trans__$1,func__$1,extr_multi_node__$1,meta36233){return (new enfocus.core.t36232(trans__$1,func__$1,extr_multi_node__$1,meta36233));
});
}
return (new enfocus.core.t36232(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t36242 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t36242 = (function (trans,func,multi_node_chain,meta36243){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta36243 = meta36243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t36242.cljs$lang$type = true;
enfocus.core.t36242.cljs$lang$ctorStr = "enfocus.core/t36242";
enfocus.core.t36242.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"enfocus.core/t36242");
});
enfocus.core.t36242.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t36242.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(nodes,null) : self__.trans.call(null,nodes,null));
});
enfocus.core.t36242.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(nodes,chain) : self__.trans.call(null,nodes,chain));
});
enfocus.core.t36242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36244){var self__ = this;
var _36244__$1 = this;return self__.meta36243;
});
enfocus.core.t36242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36244,meta36243__$1){var self__ = this;
var _36244__$1 = this;return (new enfocus.core.t36242(self__.trans,self__.func,self__.multi_node_chain,meta36243__$1));
});
enfocus.core.__GT_t36242 = (function __GT_t36242(trans__$1,func__$1,multi_node_chain__$1,meta36243){return (new enfocus.core.t36242(trans__$1,func__$1,multi_node_chain__$1,meta36243));
});
}
return (new enfocus.core.t36242(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__36235_SHARP_){return domina.nodes(p1__36235_SHARP_);
}),values);var val = (func.cljs$core$IFn$_invoke$arity$2 ? func.cljs$core$IFn$_invoke$arity$2(nodes,vnodes) : func.call(null,nodes,vnodes));if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t36245 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t36245 = (function (trans,func,values,multi_node_chain,meta36246){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta36246 = meta36246;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t36245.cljs$lang$type = true;
enfocus.core.t36245.cljs$lang$ctorStr = "enfocus.core/t36245";
enfocus.core.t36245.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"enfocus.core/t36245");
});
enfocus.core.t36245.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t36245.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(nodes,null) : self__.trans.call(null,nodes,null));
});
enfocus.core.t36245.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(nodes,chain) : self__.trans.call(null,nodes,chain));
});
enfocus.core.t36245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36247){var self__ = this;
var _36247__$1 = this;return self__.meta36246;
});
enfocus.core.t36245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36247,meta36246__$1){var self__ = this;
var _36247__$1 = this;return (new enfocus.core.t36245(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta36246__$1));
});
enfocus.core.__GT_t36245 = (function __GT_t36245(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta36246){return (new enfocus.core.t36245(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta36246));
});
}
return (new enfocus.core.t36245(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__36248_SHARP_,p2__36249_SHARP_){domina.destroy_children_BANG_(p1__36248_SHARP_);
return domina.append_BANG_(p1__36248_SHARP_,p2__36249_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__36250){
var values = cljs.core.seq(arglist__36250);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__36251_SHARP_){return domina.set_html_BANG_(p1__36251_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,values);return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__36252_SHARP_){var seq__36259 = cljs.core.seq(pairs);var chunk__36260 = null;var count__36261 = 0;var i__36262 = 0;while(true){
if((i__36262 < count__36261))
{var vec__36263 = chunk__36260.cljs$core$IIndexed$_nth$arity$2(null,i__36262);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36263,0,null);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36263,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__36252_SHARP_,name,cljs.core.array_seq([value], 0));
{
var G__36265 = seq__36259;
var G__36266 = chunk__36260;
var G__36267 = count__36261;
var G__36268 = (i__36262 + 1);
seq__36259 = G__36265;
chunk__36260 = G__36266;
count__36261 = G__36267;
i__36262 = G__36268;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__36259);if(temp__4092__auto__)
{var seq__36259__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36259__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__36259__$1);{
var G__36269 = cljs.core.chunk_rest(seq__36259__$1);
var G__36270 = c__4004__auto__;
var G__36271 = cljs.core.count(c__4004__auto__);
var G__36272 = 0;
seq__36259 = G__36269;
chunk__36260 = G__36270;
count__36261 = G__36271;
i__36262 = G__36272;
continue;
}
} else
{var vec__36264 = cljs.core.first(seq__36259__$1);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36264,0,null);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36264,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__36252_SHARP_,name,cljs.core.array_seq([value], 0));
{
var G__36273 = cljs.core.next(seq__36259__$1);
var G__36274 = null;
var G__36275 = 0;
var G__36276 = 0;
seq__36259 = G__36273;
chunk__36260 = G__36274;
count__36261 = G__36275;
i__36262 = G__36276;
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
set_attr.cljs$lang$applyTo = (function (arglist__36277){
var values = cljs.core.seq(arglist__36277);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__36278_SHARP_){var seq__36283 = cljs.core.seq(values);var chunk__36284 = null;var count__36285 = 0;var i__36286 = 0;while(true){
if((i__36286 < count__36285))
{var name = chunk__36284.cljs$core$IIndexed$_nth$arity$2(null,i__36286);domina.remove_attr_BANG_(p1__36278_SHARP_,name);
{
var G__36287 = seq__36283;
var G__36288 = chunk__36284;
var G__36289 = count__36285;
var G__36290 = (i__36286 + 1);
seq__36283 = G__36287;
chunk__36284 = G__36288;
count__36285 = G__36289;
i__36286 = G__36290;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__36283);if(temp__4092__auto__)
{var seq__36283__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36283__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__36283__$1);{
var G__36291 = cljs.core.chunk_rest(seq__36283__$1);
var G__36292 = c__4004__auto__;
var G__36293 = cljs.core.count(c__4004__auto__);
var G__36294 = 0;
seq__36283 = G__36291;
chunk__36284 = G__36292;
count__36285 = G__36293;
i__36286 = G__36294;
continue;
}
} else
{var name = cljs.core.first(seq__36283__$1);domina.remove_attr_BANG_(p1__36278_SHARP_,name);
{
var G__36295 = cljs.core.next(seq__36283__$1);
var G__36296 = null;
var G__36297 = 0;
var G__36298 = 0;
seq__36283 = G__36295;
chunk__36284 = G__36296;
count__36285 = G__36297;
i__36286 = G__36298;
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
remove_attr.cljs$lang$applyTo = (function (arglist__36299){
var values = cljs.core.seq(arglist__36299);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p__36302){var vec__36303 = p__36302;var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36303,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36303,1,null);return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.name(n));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,forms));return goog.dom.setProperties(node,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__36304){
var forms = cljs.core.seq(arglist__36304);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__36305_SHARP_){var seq__36310 = cljs.core.seq(values);var chunk__36311 = null;var count__36312 = 0;var i__36313 = 0;while(true){
if((i__36313 < count__36312))
{var val = chunk__36311.cljs$core$IIndexed$_nth$arity$2(null,i__36313);domina.add_class_BANG_(p1__36305_SHARP_,val);
{
var G__36314 = seq__36310;
var G__36315 = chunk__36311;
var G__36316 = count__36312;
var G__36317 = (i__36313 + 1);
seq__36310 = G__36314;
chunk__36311 = G__36315;
count__36312 = G__36316;
i__36313 = G__36317;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__36310);if(temp__4092__auto__)
{var seq__36310__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36310__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__36310__$1);{
var G__36318 = cljs.core.chunk_rest(seq__36310__$1);
var G__36319 = c__4004__auto__;
var G__36320 = cljs.core.count(c__4004__auto__);
var G__36321 = 0;
seq__36310 = G__36318;
chunk__36311 = G__36319;
count__36312 = G__36320;
i__36313 = G__36321;
continue;
}
} else
{var val = cljs.core.first(seq__36310__$1);domina.add_class_BANG_(p1__36305_SHARP_,val);
{
var G__36322 = cljs.core.next(seq__36310__$1);
var G__36323 = null;
var G__36324 = 0;
var G__36325 = 0;
seq__36310 = G__36322;
chunk__36311 = G__36323;
count__36312 = G__36324;
i__36313 = G__36325;
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
add_class.cljs$lang$applyTo = (function (arglist__36326){
var values = cljs.core.seq(arglist__36326);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__36327_SHARP_){var seq__36332 = cljs.core.seq(values);var chunk__36333 = null;var count__36334 = 0;var i__36335 = 0;while(true){
if((i__36335 < count__36334))
{var val = chunk__36333.cljs$core$IIndexed$_nth$arity$2(null,i__36335);domina.remove_class_BANG_(p1__36327_SHARP_,val);
{
var G__36336 = seq__36332;
var G__36337 = chunk__36333;
var G__36338 = count__36334;
var G__36339 = (i__36335 + 1);
seq__36332 = G__36336;
chunk__36333 = G__36337;
count__36334 = G__36338;
i__36335 = G__36339;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__36332);if(temp__4092__auto__)
{var seq__36332__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36332__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__36332__$1);{
var G__36340 = cljs.core.chunk_rest(seq__36332__$1);
var G__36341 = c__4004__auto__;
var G__36342 = cljs.core.count(c__4004__auto__);
var G__36343 = 0;
seq__36332 = G__36340;
chunk__36333 = G__36341;
count__36334 = G__36342;
i__36335 = G__36343;
continue;
}
} else
{var val = cljs.core.first(seq__36332__$1);domina.remove_class_BANG_(p1__36327_SHARP_,val);
{
var G__36344 = cljs.core.next(seq__36332__$1);
var G__36345 = null;
var G__36346 = 0;
var G__36347 = 0;
seq__36332 = G__36344;
chunk__36333 = G__36345;
count__36334 = G__36346;
i__36335 = G__36347;
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
remove_class.cljs$lang$applyTo = (function (arglist__36348){
var values = cljs.core.seq(arglist__36348);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__36349_SHARP_){return domina.set_classes_BANG_(p1__36349_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__36350){
var values = cljs.core.seq(arglist__36350);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__36355 = cljs.core.seq(forms);var chunk__36356 = null;var count__36357 = 0;var i__36358 = 0;while(true){
if((i__36358 < count__36357))
{var fun = chunk__36356.cljs$core$IIndexed$_nth$arity$2(null,i__36358);enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(fun,pnod);
{
var G__36359 = seq__36355;
var G__36360 = chunk__36356;
var G__36361 = count__36357;
var G__36362 = (i__36358 + 1);
seq__36355 = G__36359;
chunk__36356 = G__36360;
count__36357 = G__36361;
i__36358 = G__36362;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__36355);if(temp__4092__auto__)
{var seq__36355__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36355__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__36355__$1);{
var G__36363 = cljs.core.chunk_rest(seq__36355__$1);
var G__36364 = c__4004__auto__;
var G__36365 = cljs.core.count(c__4004__auto__);
var G__36366 = 0;
seq__36355 = G__36363;
chunk__36356 = G__36364;
count__36357 = G__36365;
i__36358 = G__36366;
continue;
}
} else
{var fun = cljs.core.first(seq__36355__$1);enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(fun,pnod);
{
var G__36367 = cljs.core.next(seq__36355__$1);
var G__36368 = null;
var G__36369 = 0;
var G__36370 = 0;
seq__36355 = G__36367;
chunk__36356 = G__36368;
count__36357 = G__36369;
i__36358 = G__36370;
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
do__GT_.cljs$lang$applyTo = (function (arglist__36371){
var forms = cljs.core.seq(arglist__36371);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__36372_SHARP_,p2__36373_SHARP_){return domina.append_BANG_(p1__36372_SHARP_,p2__36373_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__36374){
var values = cljs.core.seq(arglist__36374);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__36375_SHARP_,p2__36376_SHARP_){return domina.prepend_BANG_(p1__36375_SHARP_,p2__36376_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__36377){
var values = cljs.core.seq(arglist__36377);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__36378_SHARP_,p2__36379_SHARP_){return domina.insert_before_BANG_(p1__36378_SHARP_,p2__36379_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__36380){
var values = cljs.core.seq(arglist__36380);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__36381_SHARP_,p2__36382_SHARP_){return domina.insert_after_BANG_(p1__36381_SHARP_,p2__36382_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__36383){
var values = cljs.core.seq(arglist__36383);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__36384_SHARP_,p2__36385_SHARP_){return domina.swap_content_BANG_(p1__36384_SHARP_,p2__36385_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__36386){
var values = cljs.core.seq(arglist__36386);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__36387_SHARP_){return domina.detach_BANG_(p1__36387_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,values);return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__36388_SHARP_){var seq__36395 = cljs.core.seq(pairs);var chunk__36396 = null;var count__36397 = 0;var i__36398 = 0;while(true){
if((i__36398 < count__36397))
{var vec__36399 = chunk__36396.cljs$core$IIndexed$_nth$arity$2(null,i__36398);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36399,0,null);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36399,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__36388_SHARP_,name,cljs.core.array_seq([value], 0));
{
var G__36401 = seq__36395;
var G__36402 = chunk__36396;
var G__36403 = count__36397;
var G__36404 = (i__36398 + 1);
seq__36395 = G__36401;
chunk__36396 = G__36402;
count__36397 = G__36403;
i__36398 = G__36404;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__36395);if(temp__4092__auto__)
{var seq__36395__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36395__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__36395__$1);{
var G__36405 = cljs.core.chunk_rest(seq__36395__$1);
var G__36406 = c__4004__auto__;
var G__36407 = cljs.core.count(c__4004__auto__);
var G__36408 = 0;
seq__36395 = G__36405;
chunk__36396 = G__36406;
count__36397 = G__36407;
i__36398 = G__36408;
continue;
}
} else
{var vec__36400 = cljs.core.first(seq__36395__$1);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36400,0,null);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36400,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__36388_SHARP_,name,cljs.core.array_seq([value], 0));
{
var G__36409 = cljs.core.next(seq__36395__$1);
var G__36410 = null;
var G__36411 = 0;
var G__36412 = 0;
seq__36395 = G__36409;
chunk__36396 = G__36410;
count__36397 = G__36411;
i__36398 = G__36412;
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
set_style.cljs$lang$applyTo = (function (arglist__36413){
var values = cljs.core.seq(arglist__36413);
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
remove_style.cljs$lang$applyTo = (function (arglist__36414){
var values = cljs.core.seq(arglist__36414);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__36415_SHARP_){return domina.set_data_BANG_(p1__36415_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__36416){
var ttime = cljs.core.first(arglist__36416);
var funcs = cljs.core.rest(arglist__36416);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace(text,/\$\{\s*(\S+)\s*}/,(function (p1__36418_SHARP_,p2__36417_SHARP_){return (vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p2__36417_SHARP_)) : vars.call(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p2__36417_SHARP_)));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__36443_36451 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(pnod.attributes.length));var chunk__36444_36452 = null;var count__36445_36453 = 0;var i__36446_36454 = 0;while(true){
if((i__36446_36454 < count__36445_36453))
{var idx_36455 = chunk__36444_36452.cljs$core$IIndexed$_nth$arity$2(null,i__36446_36454);var attr_36456 = pnod.attributes.item(idx_36455);if(cljs.core.truth_(attr_36456.specified))
{attr_36456.value = (rep_str.cljs$core$IFn$_invoke$arity$1 ? rep_str.cljs$core$IFn$_invoke$arity$1(attr_36456.value) : rep_str.call(null,attr_36456.value));
} else
{}
{
var G__36457 = seq__36443_36451;
var G__36458 = chunk__36444_36452;
var G__36459 = count__36445_36453;
var G__36460 = (i__36446_36454 + 1);
seq__36443_36451 = G__36457;
chunk__36444_36452 = G__36458;
count__36445_36453 = G__36459;
i__36446_36454 = G__36460;
continue;
}
} else
{var temp__4092__auto___36461 = cljs.core.seq(seq__36443_36451);if(temp__4092__auto___36461)
{var seq__36443_36462__$1 = temp__4092__auto___36461;if(cljs.core.chunked_seq_QMARK_(seq__36443_36462__$1))
{var c__4004__auto___36463 = cljs.core.chunk_first(seq__36443_36462__$1);{
var G__36464 = cljs.core.chunk_rest(seq__36443_36462__$1);
var G__36465 = c__4004__auto___36463;
var G__36466 = cljs.core.count(c__4004__auto___36463);
var G__36467 = 0;
seq__36443_36451 = G__36464;
chunk__36444_36452 = G__36465;
count__36445_36453 = G__36466;
i__36446_36454 = G__36467;
continue;
}
} else
{var idx_36468 = cljs.core.first(seq__36443_36462__$1);var attr_36469 = pnod.attributes.item(idx_36468);if(cljs.core.truth_(attr_36469.specified))
{attr_36469.value = (rep_str.cljs$core$IFn$_invoke$arity$1 ? rep_str.cljs$core$IFn$_invoke$arity$1(attr_36469.value) : rep_str.call(null,attr_36469.value));
} else
{}
{
var G__36470 = cljs.core.next(seq__36443_36462__$1);
var G__36471 = null;
var G__36472 = 0;
var G__36473 = 0;
seq__36443_36451 = G__36470;
chunk__36444_36452 = G__36471;
count__36445_36453 = G__36472;
i__36446_36454 = G__36473;
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
{var seq__36447 = cljs.core.seq(enfocus.core.nodes__GT_coll(pnod.childNodes));var chunk__36448 = null;var count__36449 = 0;var i__36450 = 0;while(true){
if((i__36450 < count__36449))
{var cnode = chunk__36448.cljs$core$IIndexed$_nth$arity$2(null,i__36450);rep_node(cnode);
{
var G__36474 = seq__36447;
var G__36475 = chunk__36448;
var G__36476 = count__36449;
var G__36477 = (i__36450 + 1);
seq__36447 = G__36474;
chunk__36448 = G__36475;
count__36449 = G__36476;
i__36450 = G__36477;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__36447);if(temp__4092__auto__)
{var seq__36447__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36447__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__36447__$1);{
var G__36478 = cljs.core.chunk_rest(seq__36447__$1);
var G__36479 = c__4004__auto__;
var G__36480 = cljs.core.count(c__4004__auto__);
var G__36481 = 0;
seq__36447 = G__36478;
chunk__36448 = G__36479;
count__36449 = G__36480;
i__36450 = G__36481;
continue;
}
} else
{var cnode = cljs.core.first(seq__36447__$1);rep_node(cnode);
{
var G__36482 = cljs.core.next(seq__36447__$1);
var G__36483 = null;
var G__36484 = 0;
var G__36485 = 0;
seq__36447 = G__36482;
chunk__36448 = G__36483;
count__36449 = G__36484;
i__36450 = G__36485;
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
{var vec__36495 = node_spec;var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36495,0,null);var vec__36496 = cljs.core.nthnext(vec__36495,1);var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36496,0,null);var ms = cljs.core.nthnext(vec__36496,1);var more = vec__36496;var _ = enfocus.core.log_debug(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tag,m,ms], 0)));var vec__36497 = cljs.core.name(tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36497,0,null);var segments = cljs.core.nthnext(vec__36497,1);var id = cljs.core.some(((function (vec__36495,tag,vec__36496,m,ms,more,_,vec__36497,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",seg.charAt(0)))
{return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(seg,1);
} else
{return null;
}
});})(vec__36495,tag,vec__36496,m,ms,more,_,vec__36497,tag_name,segments))
,segments);var classes = cljs.core.keep(((function (vec__36495,tag,vec__36496,m,ms,more,_,vec__36497,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",seg.charAt(0)))
{return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(seg,1);
} else
{return null;
}
});})(vec__36495,tag,vec__36496,m,ms,more,_,vec__36497,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_(m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.constant$keyword$140,id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_(classes)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs__$1,cljs.core.constant$keyword$189,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",classes))):attrs__$1);var content = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(html,((cljs.core.map_QMARK_(m))?ms:more)));var node = document.createElement(tag_name);var seq__36498_36504 = cljs.core.seq(attrs__$2);var chunk__36499_36505 = null;var count__36500_36506 = 0;var i__36501_36507 = 0;while(true){
if((i__36501_36507 < count__36500_36506))
{var vec__36502_36508 = chunk__36499_36505.cljs$core$IIndexed$_nth$arity$2(null,i__36501_36507);var key_36509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36502_36508,0,null);var val_36510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36502_36508,1,null);node.setAttribute(cljs.core.name(key_36509),val_36510);
{
var G__36511 = seq__36498_36504;
var G__36512 = chunk__36499_36505;
var G__36513 = count__36500_36506;
var G__36514 = (i__36501_36507 + 1);
seq__36498_36504 = G__36511;
chunk__36499_36505 = G__36512;
count__36500_36506 = G__36513;
i__36501_36507 = G__36514;
continue;
}
} else
{var temp__4092__auto___36515 = cljs.core.seq(seq__36498_36504);if(temp__4092__auto___36515)
{var seq__36498_36516__$1 = temp__4092__auto___36515;if(cljs.core.chunked_seq_QMARK_(seq__36498_36516__$1))
{var c__4004__auto___36517 = cljs.core.chunk_first(seq__36498_36516__$1);{
var G__36518 = cljs.core.chunk_rest(seq__36498_36516__$1);
var G__36519 = c__4004__auto___36517;
var G__36520 = cljs.core.count(c__4004__auto___36517);
var G__36521 = 0;
seq__36498_36504 = G__36518;
chunk__36499_36505 = G__36519;
count__36500_36506 = G__36520;
i__36501_36507 = G__36521;
continue;
}
} else
{var vec__36503_36522 = cljs.core.first(seq__36498_36516__$1);var key_36523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36503_36522,0,null);var val_36524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36503_36522,1,null);node.setAttribute(cljs.core.name(key_36523),val_36524);
{
var G__36525 = cljs.core.next(seq__36498_36516__$1);
var G__36526 = null;
var G__36527 = 0;
var G__36528 = 0;
seq__36498_36504 = G__36525;
chunk__36499_36505 = G__36526;
count__36500_36506 = G__36527;
i__36501_36507 = G__36528;
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
{if(cljs.core.constant$keyword$126)
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
{if(cljs.core.constant$keyword$126)
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
return (function (p1__36529_SHARP_){return p1__36529_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val(col,nm,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36530_SHARP_){return p1__36530_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node((function (node){var inputs = node.elements;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__36532_SHARP_,p2__36531_SHARP_){var G__36535 = p2__36531_SHARP_.nodeName;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("BUTTON",G__36535))
{return enfocus.core.read_simple_input(p2__36531_SHARP_,p1__36532_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("SELECT",G__36535))
{return enfocus.core.read_select_input(p2__36531_SHARP_,p1__36532_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("TEXTAREA",G__36535))
{return enfocus.core.read_simple_input(p2__36531_SHARP_,p1__36532_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("INPUT",G__36535))
{var G__36536 = p2__36531_SHARP_.type;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("radio",G__36536))
{return enfocus.core.read_checked_input(p2__36531_SHARP_,p1__36532_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",G__36536))
{return enfocus.core.read_checked_input(p2__36531_SHARP_,p1__36532_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("submit",G__36536))
{return enfocus.core.read_simple_input(p2__36531_SHARP_,p1__36532_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("reset",G__36536))
{return enfocus.core.read_simple_input(p2__36531_SHARP_,p1__36532_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("button",G__36536))
{return enfocus.core.read_simple_input(p2__36531_SHARP_,p1__36532_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("password",G__36536))
{return enfocus.core.read_simple_input(p2__36531_SHARP_,p1__36532_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("hidden",G__36536))
{return enfocus.core.read_simple_input(p2__36531_SHARP_,p1__36532_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("text",G__36536))
{return enfocus.core.read_simple_input(p2__36531_SHARP_,p1__36532_SHARP_);
} else
{if(cljs.core.constant$keyword$126)
{return p1__36532_SHARP_;
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
{if(cljs.core.constant$keyword$126)
{return p1__36532_SHARP_;
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
enfocus.core.register_filter(cljs.core.constant$keyword$190,enfocus.core.selected_options);
enfocus.core.register_filter(cljs.core.constant$keyword$191,enfocus.core.checked_radio_checkbox);
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
{if(cljs.core.constant$keyword$126)
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36537_SHARP_){if((p1__36537_SHARP_ instanceof cljs.core.Symbol))
{return (enfocus.core.css_syms.cljs$core$IFn$_invoke$arity$1 ? enfocus.core.css_syms.cljs$core$IFn$_invoke$arity$1(p1__36537_SHARP_) : enfocus.core.css_syms.call(null,p1__36537_SHARP_));
} else
{if((p1__36537_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name(p1__36537_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_(p1__36537_SHARP_))
{return create_sel_str.cljs$core$IFn$_invoke$arity$1(p1__36537_SHARP_);
} else
{if(typeof p1__36537_SHARP_ === 'string')
{return p1__36537_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count(trans);var sel_QMARK_ = (function (){var G__36546 = node;if(G__36546)
{var bit__3906__auto__ = null;if(cljs.core.truth_((function (){var or__3285__auto__ = bit__3906__auto__;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return G__36546.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__36546.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(enfocus.core.ISelector,G__36546);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(enfocus.core.ISelector,G__36546);
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cnt)))
{return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(cljs.core.first(trans),node);
} else
{var vec__36547 = ((sel_QMARK_)?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(trans,node)),document):cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36547,0,null);var trans__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36547,1,null);var seq__36548 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,trans__$1));var chunk__36549 = null;var count__36550 = 0;var i__36551 = 0;while(true){
if((i__36551 < count__36550))
{var vec__36552 = chunk__36549.cljs$core$IIndexed$_nth$arity$2(null,i__36551);var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36552,0,null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36552,1,null);enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(enfocus.core.nil_t(t),enfocus.core.select.cljs$core$IFn$_invoke$arity$3(sel,node__$1,id_mask));
{
var G__36554 = seq__36548;
var G__36555 = chunk__36549;
var G__36556 = count__36550;
var G__36557 = (i__36551 + 1);
seq__36548 = G__36554;
chunk__36549 = G__36555;
count__36550 = G__36556;
i__36551 = G__36557;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__36548);if(temp__4092__auto__)
{var seq__36548__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36548__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__36548__$1);{
var G__36558 = cljs.core.chunk_rest(seq__36548__$1);
var G__36559 = c__4004__auto__;
var G__36560 = cljs.core.count(c__4004__auto__);
var G__36561 = 0;
seq__36548 = G__36558;
chunk__36549 = G__36559;
count__36550 = G__36560;
i__36551 = G__36561;
continue;
}
} else
{var vec__36553 = cljs.core.first(seq__36548__$1);var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36553,0,null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36553,1,null);enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(enfocus.core.nil_t(t),enfocus.core.select.cljs$core$IFn$_invoke$arity$3(sel,node__$1,id_mask));
{
var G__36562 = cljs.core.next(seq__36548__$1);
var G__36563 = null;
var G__36564 = 0;
var G__36565 = 0;
seq__36548 = G__36562;
chunk__36549 = G__36563;
count__36550 = G__36564;
i__36551 = G__36565;
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
i_at.cljs$lang$applyTo = (function (arglist__36566){
var id_mask = cljs.core.first(arglist__36566);
arglist__36566 = cljs.core.next(arglist__36566);
var node = cljs.core.first(arglist__36566);
var trans = cljs.core.rest(arglist__36566);
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
at.cljs$lang$applyTo = (function (arglist__36567){
var node = cljs.core.first(arglist__36567);
var trans = cljs.core.rest(arglist__36567);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count(trans);var sel_QMARK_ = (function (){var G__36572 = node;if(G__36572)
{var bit__3906__auto__ = null;if(cljs.core.truth_((function (){var or__3285__auto__ = bit__3906__auto__;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return G__36572.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__36572.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(enfocus.core.ISelector,G__36572);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(enfocus.core.ISelector,G__36572);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cnt)))
{return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(cljs.core.first(trans),enfocus.core.select.cljs$core$IFn$_invoke$arity$1(node));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cnt))
{return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(cljs.core.first(trans),node);
} else
{if(cljs.core.constant$keyword$126)
{var vec__36573 = ((sel_QMARK_)?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(trans,node)),document):cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36573,0,null);var trans__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36573,1,null);return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p__36574){var vec__36575 = p__36574;var ky = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36575,0,null);var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36575,1,null);var ext = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36575,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(ext,enfocus.core.select.cljs$core$IFn$_invoke$arity$3(sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__36576){
var node = cljs.core.first(arglist__36576);
var trans = cljs.core.rest(arglist__36576);
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
var G__36577 = null;
var G__36577__1 = (function (this$){return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$,document,"");
});
var G__36577__2 = (function (this$,root){return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$,root,"");
});
var G__36577__3 = (function (this$,root,id_mask){return enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3(id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__36577 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__36577__1.call(this,this$);
case 2:
return G__36577__2.call(this,this$,root);
case 3:
return G__36577__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__36577;
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
var G__36578 = null;
var G__36578__1 = (function (this$){return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$,document,"");
});
var G__36578__2 = (function (this$,root){return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$,root,"");
});
var G__36578__3 = (function (this$,root,id_mask){return (this$.cljs$core$IFn$_invoke$arity$2 ? this$.cljs$core$IFn$_invoke$arity$2(root,id_mask) : this$.call(null,root,id_mask));
});
G__36578 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__36578__1.call(this,this$);
case 2:
return G__36578__2.call(this,this$,root);
case 3:
return G__36578__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__36578;
})()
);
(enfocus.core.ITransform["function"] = true);
(enfocus.core.apply_transform["function"] = (function() {
var G__36579 = null;
var G__36579__2 = (function (trans,nodes){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(trans,enfocus.core.nodes__GT_coll(nodes)));
});
var G__36579__3 = (function (trans,nodes,chain){var pnod_col = enfocus.core.nodes__GT_coll(nodes);var val = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(trans,pnod_col));if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(chain,nodes);
} else
{return val;
}
});
G__36579 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__36579__2.call(this,trans,nodes);
case 3:
return G__36579__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__36579;
})()
);
