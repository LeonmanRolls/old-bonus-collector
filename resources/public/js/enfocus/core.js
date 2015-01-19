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
enfocus.core.ISelector = (function (){var obj36581 = {};return obj36581;
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
enfocus.core.ITransform = (function (){var obj36583 = {};return obj36583;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__36584_SHARP_){if(typeof p1__36584_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__36584_SHARP_)], null);
} else
{if(cljs.core.constant$keyword$129)
{return enfocus.core.nodes__GT_coll(p1__36584_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__36591_36597 = cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,values));var chunk__36592_36598 = null;var count__36593_36599 = 0;var i__36594_36600 = 0;while(true){
if((i__36594_36600 < count__36593_36599))
{var vec__36595_36601 = chunk__36592_36598.cljs$core$IIndexed$_nth$arity$2(null,i__36594_36600);var attr_36602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36595_36601,0,null);var value_36603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36595_36601,1,null);goog.style.setStyle(obj,cljs.core.name(attr_36602),value_36603);
{
var G__36604 = seq__36591_36597;
var G__36605 = chunk__36592_36598;
var G__36606 = count__36593_36599;
var G__36607 = (i__36594_36600 + 1);
seq__36591_36597 = G__36604;
chunk__36592_36598 = G__36605;
count__36593_36599 = G__36606;
i__36594_36600 = G__36607;
continue;
}
} else
{var temp__4092__auto___36608 = cljs.core.seq(seq__36591_36597);if(temp__4092__auto___36608)
{var seq__36591_36609__$1 = temp__4092__auto___36608;if(cljs.core.chunked_seq_QMARK_(seq__36591_36609__$1))
{var c__4004__auto___36610 = cljs.core.chunk_first(seq__36591_36609__$1);{
var G__36611 = cljs.core.chunk_rest(seq__36591_36609__$1);
var G__36612 = c__4004__auto___36610;
var G__36613 = cljs.core.count(c__4004__auto___36610);
var G__36614 = 0;
seq__36591_36597 = G__36611;
chunk__36592_36598 = G__36612;
count__36593_36599 = G__36613;
i__36594_36600 = G__36614;
continue;
}
} else
{var vec__36596_36615 = cljs.core.first(seq__36591_36609__$1);var attr_36616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36596_36615,0,null);var value_36617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36596_36615,1,null);goog.style.setStyle(obj,cljs.core.name(attr_36616),value_36617);
{
var G__36618 = cljs.core.next(seq__36591_36609__$1);
var G__36619 = null;
var G__36620 = 0;
var G__36621 = 0;
seq__36591_36597 = G__36618;
chunk__36592_36598 = G__36619;
count__36593_36599 = G__36620;
i__36594_36600 = G__36621;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__36626 = cljs.core.seq(values);var chunk__36627 = null;var count__36628 = 0;var i__36629 = 0;while(true){
if((i__36629 < count__36628))
{var attr = chunk__36627.cljs$core$IIndexed$_nth$arity$2(null,i__36629);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name(attr),"");
} else
{obj.style.removeProperty(cljs.core.name(attr));
}
{
var G__36630 = seq__36626;
var G__36631 = chunk__36627;
var G__36632 = count__36628;
var G__36633 = (i__36629 + 1);
seq__36626 = G__36630;
chunk__36627 = G__36631;
count__36628 = G__36632;
i__36629 = G__36633;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__36626);if(temp__4092__auto__)
{var seq__36626__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36626__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__36626__$1);{
var G__36634 = cljs.core.chunk_rest(seq__36626__$1);
var G__36635 = c__4004__auto__;
var G__36636 = cljs.core.count(c__4004__auto__);
var G__36637 = 0;
seq__36626 = G__36634;
chunk__36627 = G__36635;
count__36628 = G__36636;
i__36629 = G__36637;
continue;
}
} else
{var attr = cljs.core.first(seq__36626__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name(attr),"");
} else
{obj.style.removeProperty(cljs.core.name(attr));
}
{
var G__36638 = cljs.core.next(seq__36626__$1);
var G__36639 = null;
var G__36640 = 0;
var G__36641 = 0;
seq__36626 = G__36638;
chunk__36627 = G__36639;
count__36628 = G__36640;
i__36629 = G__36641;
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
{var seq__36648_36654 = cljs.core.seq(ats);var chunk__36649_36655 = null;var count__36650_36656 = 0;var i__36651_36657 = 0;while(true){
if((i__36651_36657 < count__36650_36656))
{var vec__36652_36658 = chunk__36649_36655.cljs$core$IIndexed$_nth$arity$2(null,i__36651_36657);var k_36659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36652_36658,0,null);var v_36660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36652_36658,1,null);add_map_attrs.cljs$core$IFn$_invoke$arity$3(elem,k_36659,v_36660);
{
var G__36661 = seq__36648_36654;
var G__36662 = chunk__36649_36655;
var G__36663 = count__36650_36656;
var G__36664 = (i__36651_36657 + 1);
seq__36648_36654 = G__36661;
chunk__36649_36655 = G__36662;
count__36650_36656 = G__36663;
i__36651_36657 = G__36664;
continue;
}
} else
{var temp__4092__auto___36665 = cljs.core.seq(seq__36648_36654);if(temp__4092__auto___36665)
{var seq__36648_36666__$1 = temp__4092__auto___36665;if(cljs.core.chunked_seq_QMARK_(seq__36648_36666__$1))
{var c__4004__auto___36667 = cljs.core.chunk_first(seq__36648_36666__$1);{
var G__36668 = cljs.core.chunk_rest(seq__36648_36666__$1);
var G__36669 = c__4004__auto___36667;
var G__36670 = cljs.core.count(c__4004__auto___36667);
var G__36671 = 0;
seq__36648_36654 = G__36668;
chunk__36649_36655 = G__36669;
count__36650_36656 = G__36670;
i__36651_36657 = G__36671;
continue;
}
} else
{var vec__36653_36672 = cljs.core.first(seq__36648_36666__$1);var k_36673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36653_36672,0,null);var v_36674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36653_36672,1,null);add_map_attrs.cljs$core$IFn$_invoke$arity$3(elem,k_36673,v_36674);
{
var G__36675 = cljs.core.next(seq__36648_36666__$1);
var G__36676 = null;
var G__36677 = 0;
var G__36678 = 0;
seq__36648_36654 = G__36675;
chunk__36649_36655 = G__36676;
count__36650_36656 = G__36677;
i__36651_36657 = G__36678;
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
var seq__36683_36687 = cljs.core.seq(domina.nodes(child));var chunk__36684_36688 = null;var count__36685_36689 = 0;var i__36686_36690 = 0;while(true){
if((i__36686_36690 < count__36685_36689))
{var node_36691 = chunk__36684_36688.cljs$core$IIndexed$_nth$arity$2(null,i__36686_36690);goog.dom.appendChild(div,node_36691);
{
var G__36692 = seq__36683_36687;
var G__36693 = chunk__36684_36688;
var G__36694 = count__36685_36689;
var G__36695 = (i__36686_36690 + 1);
seq__36683_36687 = G__36692;
chunk__36684_36688 = G__36693;
count__36685_36689 = G__36694;
i__36686_36690 = G__36695;
continue;
}
} else
{var temp__4092__auto___36696 = cljs.core.seq(seq__36683_36687);if(temp__4092__auto___36696)
{var seq__36683_36697__$1 = temp__4092__auto___36696;if(cljs.core.chunked_seq_QMARK_(seq__36683_36697__$1))
{var c__4004__auto___36698 = cljs.core.chunk_first(seq__36683_36697__$1);{
var G__36699 = cljs.core.chunk_rest(seq__36683_36697__$1);
var G__36700 = c__4004__auto___36698;
var G__36701 = cljs.core.count(c__4004__auto___36698);
var G__36702 = 0;
seq__36683_36687 = G__36699;
chunk__36684_36688 = G__36700;
count__36685_36689 = G__36701;
i__36686_36690 = G__36702;
continue;
}
} else
{var node_36703 = cljs.core.first(seq__36683_36697__$1);goog.dom.appendChild(div,node_36703);
{
var G__36704 = cljs.core.next(seq__36683_36697__$1);
var G__36705 = null;
var G__36706 = 0;
var G__36707 = 0;
seq__36683_36687 = G__36704;
chunk__36684_36688 = G__36705;
count__36685_36689 = G__36706;
i__36686_36690 = G__36707;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = (enfocus.core.css_select.cljs$core$IFn$_invoke$arity$2 ? enfocus.core.css_select.cljs$core$IFn$_invoke$arity$2(nod,"*[id]") : enfocus.core.css_select.call(null,nod,"*[id]"));var nod_col = enfocus.core.nodes__GT_coll(id_nodes);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36708_SHARP_){var id = p1__36708_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__36708_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref(enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__36710 = enfocus.core.replace_ids.cljs$core$IFn$_invoke$arity$2(id_mask,text);var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36710,0,null);var txt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36710,1,null);return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__36715_36719 = cljs.core.seq(dfa);var chunk__36716_36720 = null;var count__36717_36721 = 0;var i__36718_36722 = 0;while(true){
if((i__36718_36722 < count__36717_36721))
{var df_36723 = chunk__36716_36720.cljs$core$IIndexed$_nth$arity$2(null,i__36718_36722);goog.dom.append(frag,df_36723);
{
var G__36724 = seq__36715_36719;
var G__36725 = chunk__36716_36720;
var G__36726 = count__36717_36721;
var G__36727 = (i__36718_36722 + 1);
seq__36715_36719 = G__36724;
chunk__36716_36720 = G__36725;
count__36717_36721 = G__36726;
i__36718_36722 = G__36727;
continue;
}
} else
{var temp__4092__auto___36728 = cljs.core.seq(seq__36715_36719);if(temp__4092__auto___36728)
{var seq__36715_36729__$1 = temp__4092__auto___36728;if(cljs.core.chunked_seq_QMARK_(seq__36715_36729__$1))
{var c__4004__auto___36730 = cljs.core.chunk_first(seq__36715_36729__$1);{
var G__36731 = cljs.core.chunk_rest(seq__36715_36729__$1);
var G__36732 = c__4004__auto___36730;
var G__36733 = cljs.core.count(c__4004__auto___36730);
var G__36734 = 0;
seq__36715_36719 = G__36731;
chunk__36716_36720 = G__36732;
count__36717_36721 = G__36733;
i__36718_36722 = G__36734;
continue;
}
} else
{var df_36735 = cljs.core.first(seq__36715_36729__$1);goog.dom.append(frag,df_36735);
{
var G__36736 = cljs.core.next(seq__36715_36729__$1);
var G__36737 = null;
var G__36738 = 0;
var G__36739 = 0;
seq__36715_36719 = G__36736;
chunk__36716_36720 = G__36737;
count__36717_36721 = G__36738;
i__36718_36722 = G__36739;
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
{var vec__36742 = enfocus.core.get_cached_dom(uri);var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36742,0,null);var tdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36742,1,null);var dom = enfocus.core.create_hidden_dom(tdom);var tsnip = domina.nodes((enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3 ? enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3(sym,dom,sel) : enfocus.core.css_select.call(null,sym,dom,sel)));var html_snip = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__36742,sym,tdom,dom,tsnip){
return (function (p1__36740_SHARP_){return p1__36740_SHARP_.outerHTML;
});})(vec__36742,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t36746 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t36746 = (function (trans,func,extr_multi_node,meta36747){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta36747 = meta36747;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t36746.cljs$lang$type = true;
enfocus.core.t36746.cljs$lang$ctorStr = "enfocus.core/t36746";
enfocus.core.t36746.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"enfocus.core/t36746");
});
enfocus.core.t36746.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t36746.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(nodes,null) : self__.trans.call(null,nodes,null));
});
enfocus.core.t36746.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(nodes,chain) : self__.trans.call(null,nodes,chain));
});
enfocus.core.t36746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36748){var self__ = this;
var _36748__$1 = this;return self__.meta36747;
});
enfocus.core.t36746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36748,meta36747__$1){var self__ = this;
var _36748__$1 = this;return (new enfocus.core.t36746(self__.trans,self__.func,self__.extr_multi_node,meta36747__$1));
});
enfocus.core.__GT_t36746 = (function __GT_t36746(trans__$1,func__$1,extr_multi_node__$1,meta36747){return (new enfocus.core.t36746(trans__$1,func__$1,extr_multi_node__$1,meta36747));
});
}
return (new enfocus.core.t36746(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t36756 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t36756 = (function (trans,func,multi_node_chain,meta36757){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta36757 = meta36757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t36756.cljs$lang$type = true;
enfocus.core.t36756.cljs$lang$ctorStr = "enfocus.core/t36756";
enfocus.core.t36756.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"enfocus.core/t36756");
});
enfocus.core.t36756.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t36756.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(nodes,null) : self__.trans.call(null,nodes,null));
});
enfocus.core.t36756.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(nodes,chain) : self__.trans.call(null,nodes,chain));
});
enfocus.core.t36756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36758){var self__ = this;
var _36758__$1 = this;return self__.meta36757;
});
enfocus.core.t36756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36758,meta36757__$1){var self__ = this;
var _36758__$1 = this;return (new enfocus.core.t36756(self__.trans,self__.func,self__.multi_node_chain,meta36757__$1));
});
enfocus.core.__GT_t36756 = (function __GT_t36756(trans__$1,func__$1,multi_node_chain__$1,meta36757){return (new enfocus.core.t36756(trans__$1,func__$1,multi_node_chain__$1,meta36757));
});
}
return (new enfocus.core.t36756(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__36749_SHARP_){return domina.nodes(p1__36749_SHARP_);
}),values);var val = (func.cljs$core$IFn$_invoke$arity$2 ? func.cljs$core$IFn$_invoke$arity$2(nodes,vnodes) : func.call(null,nodes,vnodes));if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t36759 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t36759 = (function (trans,func,values,multi_node_chain,meta36760){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta36760 = meta36760;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t36759.cljs$lang$type = true;
enfocus.core.t36759.cljs$lang$ctorStr = "enfocus.core/t36759";
enfocus.core.t36759.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"enfocus.core/t36759");
});
enfocus.core.t36759.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t36759.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(nodes,null) : self__.trans.call(null,nodes,null));
});
enfocus.core.t36759.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(nodes,chain) : self__.trans.call(null,nodes,chain));
});
enfocus.core.t36759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36761){var self__ = this;
var _36761__$1 = this;return self__.meta36760;
});
enfocus.core.t36759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36761,meta36760__$1){var self__ = this;
var _36761__$1 = this;return (new enfocus.core.t36759(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta36760__$1));
});
enfocus.core.__GT_t36759 = (function __GT_t36759(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta36760){return (new enfocus.core.t36759(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta36760));
});
}
return (new enfocus.core.t36759(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__36762_SHARP_,p2__36763_SHARP_){domina.destroy_children_BANG_(p1__36762_SHARP_);
return domina.append_BANG_(p1__36762_SHARP_,p2__36763_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__36764){
var values = cljs.core.seq(arglist__36764);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__36765_SHARP_){return domina.set_html_BANG_(p1__36765_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,values);return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__36766_SHARP_){var seq__36773 = cljs.core.seq(pairs);var chunk__36774 = null;var count__36775 = 0;var i__36776 = 0;while(true){
if((i__36776 < count__36775))
{var vec__36777 = chunk__36774.cljs$core$IIndexed$_nth$arity$2(null,i__36776);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36777,0,null);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36777,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__36766_SHARP_,name,cljs.core.array_seq([value], 0));
{
var G__36779 = seq__36773;
var G__36780 = chunk__36774;
var G__36781 = count__36775;
var G__36782 = (i__36776 + 1);
seq__36773 = G__36779;
chunk__36774 = G__36780;
count__36775 = G__36781;
i__36776 = G__36782;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__36773);if(temp__4092__auto__)
{var seq__36773__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36773__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__36773__$1);{
var G__36783 = cljs.core.chunk_rest(seq__36773__$1);
var G__36784 = c__4004__auto__;
var G__36785 = cljs.core.count(c__4004__auto__);
var G__36786 = 0;
seq__36773 = G__36783;
chunk__36774 = G__36784;
count__36775 = G__36785;
i__36776 = G__36786;
continue;
}
} else
{var vec__36778 = cljs.core.first(seq__36773__$1);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36778,0,null);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36778,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__36766_SHARP_,name,cljs.core.array_seq([value], 0));
{
var G__36787 = cljs.core.next(seq__36773__$1);
var G__36788 = null;
var G__36789 = 0;
var G__36790 = 0;
seq__36773 = G__36787;
chunk__36774 = G__36788;
count__36775 = G__36789;
i__36776 = G__36790;
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
set_attr.cljs$lang$applyTo = (function (arglist__36791){
var values = cljs.core.seq(arglist__36791);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__36792_SHARP_){var seq__36797 = cljs.core.seq(values);var chunk__36798 = null;var count__36799 = 0;var i__36800 = 0;while(true){
if((i__36800 < count__36799))
{var name = chunk__36798.cljs$core$IIndexed$_nth$arity$2(null,i__36800);domina.remove_attr_BANG_(p1__36792_SHARP_,name);
{
var G__36801 = seq__36797;
var G__36802 = chunk__36798;
var G__36803 = count__36799;
var G__36804 = (i__36800 + 1);
seq__36797 = G__36801;
chunk__36798 = G__36802;
count__36799 = G__36803;
i__36800 = G__36804;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__36797);if(temp__4092__auto__)
{var seq__36797__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36797__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__36797__$1);{
var G__36805 = cljs.core.chunk_rest(seq__36797__$1);
var G__36806 = c__4004__auto__;
var G__36807 = cljs.core.count(c__4004__auto__);
var G__36808 = 0;
seq__36797 = G__36805;
chunk__36798 = G__36806;
count__36799 = G__36807;
i__36800 = G__36808;
continue;
}
} else
{var name = cljs.core.first(seq__36797__$1);domina.remove_attr_BANG_(p1__36792_SHARP_,name);
{
var G__36809 = cljs.core.next(seq__36797__$1);
var G__36810 = null;
var G__36811 = 0;
var G__36812 = 0;
seq__36797 = G__36809;
chunk__36798 = G__36810;
count__36799 = G__36811;
i__36800 = G__36812;
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
remove_attr.cljs$lang$applyTo = (function (arglist__36813){
var values = cljs.core.seq(arglist__36813);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p__36816){var vec__36817 = p__36816;var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36817,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36817,1,null);return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.name(n));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,forms));return goog.dom.setProperties(node,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__36818){
var forms = cljs.core.seq(arglist__36818);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__36819_SHARP_){var seq__36824 = cljs.core.seq(values);var chunk__36825 = null;var count__36826 = 0;var i__36827 = 0;while(true){
if((i__36827 < count__36826))
{var val = chunk__36825.cljs$core$IIndexed$_nth$arity$2(null,i__36827);domina.add_class_BANG_(p1__36819_SHARP_,val);
{
var G__36828 = seq__36824;
var G__36829 = chunk__36825;
var G__36830 = count__36826;
var G__36831 = (i__36827 + 1);
seq__36824 = G__36828;
chunk__36825 = G__36829;
count__36826 = G__36830;
i__36827 = G__36831;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__36824);if(temp__4092__auto__)
{var seq__36824__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36824__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__36824__$1);{
var G__36832 = cljs.core.chunk_rest(seq__36824__$1);
var G__36833 = c__4004__auto__;
var G__36834 = cljs.core.count(c__4004__auto__);
var G__36835 = 0;
seq__36824 = G__36832;
chunk__36825 = G__36833;
count__36826 = G__36834;
i__36827 = G__36835;
continue;
}
} else
{var val = cljs.core.first(seq__36824__$1);domina.add_class_BANG_(p1__36819_SHARP_,val);
{
var G__36836 = cljs.core.next(seq__36824__$1);
var G__36837 = null;
var G__36838 = 0;
var G__36839 = 0;
seq__36824 = G__36836;
chunk__36825 = G__36837;
count__36826 = G__36838;
i__36827 = G__36839;
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
add_class.cljs$lang$applyTo = (function (arglist__36840){
var values = cljs.core.seq(arglist__36840);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__36841_SHARP_){var seq__36846 = cljs.core.seq(values);var chunk__36847 = null;var count__36848 = 0;var i__36849 = 0;while(true){
if((i__36849 < count__36848))
{var val = chunk__36847.cljs$core$IIndexed$_nth$arity$2(null,i__36849);domina.remove_class_BANG_(p1__36841_SHARP_,val);
{
var G__36850 = seq__36846;
var G__36851 = chunk__36847;
var G__36852 = count__36848;
var G__36853 = (i__36849 + 1);
seq__36846 = G__36850;
chunk__36847 = G__36851;
count__36848 = G__36852;
i__36849 = G__36853;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__36846);if(temp__4092__auto__)
{var seq__36846__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36846__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__36846__$1);{
var G__36854 = cljs.core.chunk_rest(seq__36846__$1);
var G__36855 = c__4004__auto__;
var G__36856 = cljs.core.count(c__4004__auto__);
var G__36857 = 0;
seq__36846 = G__36854;
chunk__36847 = G__36855;
count__36848 = G__36856;
i__36849 = G__36857;
continue;
}
} else
{var val = cljs.core.first(seq__36846__$1);domina.remove_class_BANG_(p1__36841_SHARP_,val);
{
var G__36858 = cljs.core.next(seq__36846__$1);
var G__36859 = null;
var G__36860 = 0;
var G__36861 = 0;
seq__36846 = G__36858;
chunk__36847 = G__36859;
count__36848 = G__36860;
i__36849 = G__36861;
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
remove_class.cljs$lang$applyTo = (function (arglist__36862){
var values = cljs.core.seq(arglist__36862);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__36863_SHARP_){return domina.set_classes_BANG_(p1__36863_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__36864){
var values = cljs.core.seq(arglist__36864);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__36869 = cljs.core.seq(forms);var chunk__36870 = null;var count__36871 = 0;var i__36872 = 0;while(true){
if((i__36872 < count__36871))
{var fun = chunk__36870.cljs$core$IIndexed$_nth$arity$2(null,i__36872);enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(fun,pnod);
{
var G__36873 = seq__36869;
var G__36874 = chunk__36870;
var G__36875 = count__36871;
var G__36876 = (i__36872 + 1);
seq__36869 = G__36873;
chunk__36870 = G__36874;
count__36871 = G__36875;
i__36872 = G__36876;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__36869);if(temp__4092__auto__)
{var seq__36869__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36869__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__36869__$1);{
var G__36877 = cljs.core.chunk_rest(seq__36869__$1);
var G__36878 = c__4004__auto__;
var G__36879 = cljs.core.count(c__4004__auto__);
var G__36880 = 0;
seq__36869 = G__36877;
chunk__36870 = G__36878;
count__36871 = G__36879;
i__36872 = G__36880;
continue;
}
} else
{var fun = cljs.core.first(seq__36869__$1);enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(fun,pnod);
{
var G__36881 = cljs.core.next(seq__36869__$1);
var G__36882 = null;
var G__36883 = 0;
var G__36884 = 0;
seq__36869 = G__36881;
chunk__36870 = G__36882;
count__36871 = G__36883;
i__36872 = G__36884;
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
do__GT_.cljs$lang$applyTo = (function (arglist__36885){
var forms = cljs.core.seq(arglist__36885);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__36886_SHARP_,p2__36887_SHARP_){return domina.append_BANG_(p1__36886_SHARP_,p2__36887_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__36888){
var values = cljs.core.seq(arglist__36888);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__36889_SHARP_,p2__36890_SHARP_){return domina.prepend_BANG_(p1__36889_SHARP_,p2__36890_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__36891){
var values = cljs.core.seq(arglist__36891);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__36892_SHARP_,p2__36893_SHARP_){return domina.insert_before_BANG_(p1__36892_SHARP_,p2__36893_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__36894){
var values = cljs.core.seq(arglist__36894);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__36895_SHARP_,p2__36896_SHARP_){return domina.insert_after_BANG_(p1__36895_SHARP_,p2__36896_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__36897){
var values = cljs.core.seq(arglist__36897);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__36898_SHARP_,p2__36899_SHARP_){return domina.swap_content_BANG_(p1__36898_SHARP_,p2__36899_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__36900){
var values = cljs.core.seq(arglist__36900);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__36901_SHARP_){return domina.detach_BANG_(p1__36901_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,values);return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__36902_SHARP_){var seq__36909 = cljs.core.seq(pairs);var chunk__36910 = null;var count__36911 = 0;var i__36912 = 0;while(true){
if((i__36912 < count__36911))
{var vec__36913 = chunk__36910.cljs$core$IIndexed$_nth$arity$2(null,i__36912);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36913,0,null);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36913,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__36902_SHARP_,name,cljs.core.array_seq([value], 0));
{
var G__36915 = seq__36909;
var G__36916 = chunk__36910;
var G__36917 = count__36911;
var G__36918 = (i__36912 + 1);
seq__36909 = G__36915;
chunk__36910 = G__36916;
count__36911 = G__36917;
i__36912 = G__36918;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__36909);if(temp__4092__auto__)
{var seq__36909__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36909__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__36909__$1);{
var G__36919 = cljs.core.chunk_rest(seq__36909__$1);
var G__36920 = c__4004__auto__;
var G__36921 = cljs.core.count(c__4004__auto__);
var G__36922 = 0;
seq__36909 = G__36919;
chunk__36910 = G__36920;
count__36911 = G__36921;
i__36912 = G__36922;
continue;
}
} else
{var vec__36914 = cljs.core.first(seq__36909__$1);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36914,0,null);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36914,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__36902_SHARP_,name,cljs.core.array_seq([value], 0));
{
var G__36923 = cljs.core.next(seq__36909__$1);
var G__36924 = null;
var G__36925 = 0;
var G__36926 = 0;
seq__36909 = G__36923;
chunk__36910 = G__36924;
count__36911 = G__36925;
i__36912 = G__36926;
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
set_style.cljs$lang$applyTo = (function (arglist__36927){
var values = cljs.core.seq(arglist__36927);
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
remove_style.cljs$lang$applyTo = (function (arglist__36928){
var values = cljs.core.seq(arglist__36928);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__36929_SHARP_){return domina.set_data_BANG_(p1__36929_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__36930){
var ttime = cljs.core.first(arglist__36930);
var funcs = cljs.core.rest(arglist__36930);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace(text,/\$\{\s*(\S+)\s*}/,(function (p1__36932_SHARP_,p2__36931_SHARP_){return (vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p2__36931_SHARP_)) : vars.call(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p2__36931_SHARP_)));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__36957_36965 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(pnod.attributes.length));var chunk__36958_36966 = null;var count__36959_36967 = 0;var i__36960_36968 = 0;while(true){
if((i__36960_36968 < count__36959_36967))
{var idx_36969 = chunk__36958_36966.cljs$core$IIndexed$_nth$arity$2(null,i__36960_36968);var attr_36970 = pnod.attributes.item(idx_36969);if(cljs.core.truth_(attr_36970.specified))
{attr_36970.value = (rep_str.cljs$core$IFn$_invoke$arity$1 ? rep_str.cljs$core$IFn$_invoke$arity$1(attr_36970.value) : rep_str.call(null,attr_36970.value));
} else
{}
{
var G__36971 = seq__36957_36965;
var G__36972 = chunk__36958_36966;
var G__36973 = count__36959_36967;
var G__36974 = (i__36960_36968 + 1);
seq__36957_36965 = G__36971;
chunk__36958_36966 = G__36972;
count__36959_36967 = G__36973;
i__36960_36968 = G__36974;
continue;
}
} else
{var temp__4092__auto___36975 = cljs.core.seq(seq__36957_36965);if(temp__4092__auto___36975)
{var seq__36957_36976__$1 = temp__4092__auto___36975;if(cljs.core.chunked_seq_QMARK_(seq__36957_36976__$1))
{var c__4004__auto___36977 = cljs.core.chunk_first(seq__36957_36976__$1);{
var G__36978 = cljs.core.chunk_rest(seq__36957_36976__$1);
var G__36979 = c__4004__auto___36977;
var G__36980 = cljs.core.count(c__4004__auto___36977);
var G__36981 = 0;
seq__36957_36965 = G__36978;
chunk__36958_36966 = G__36979;
count__36959_36967 = G__36980;
i__36960_36968 = G__36981;
continue;
}
} else
{var idx_36982 = cljs.core.first(seq__36957_36976__$1);var attr_36983 = pnod.attributes.item(idx_36982);if(cljs.core.truth_(attr_36983.specified))
{attr_36983.value = (rep_str.cljs$core$IFn$_invoke$arity$1 ? rep_str.cljs$core$IFn$_invoke$arity$1(attr_36983.value) : rep_str.call(null,attr_36983.value));
} else
{}
{
var G__36984 = cljs.core.next(seq__36957_36976__$1);
var G__36985 = null;
var G__36986 = 0;
var G__36987 = 0;
seq__36957_36965 = G__36984;
chunk__36958_36966 = G__36985;
count__36959_36967 = G__36986;
i__36960_36968 = G__36987;
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
{var seq__36961 = cljs.core.seq(enfocus.core.nodes__GT_coll(pnod.childNodes));var chunk__36962 = null;var count__36963 = 0;var i__36964 = 0;while(true){
if((i__36964 < count__36963))
{var cnode = chunk__36962.cljs$core$IIndexed$_nth$arity$2(null,i__36964);rep_node(cnode);
{
var G__36988 = seq__36961;
var G__36989 = chunk__36962;
var G__36990 = count__36963;
var G__36991 = (i__36964 + 1);
seq__36961 = G__36988;
chunk__36962 = G__36989;
count__36963 = G__36990;
i__36964 = G__36991;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__36961);if(temp__4092__auto__)
{var seq__36961__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36961__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__36961__$1);{
var G__36992 = cljs.core.chunk_rest(seq__36961__$1);
var G__36993 = c__4004__auto__;
var G__36994 = cljs.core.count(c__4004__auto__);
var G__36995 = 0;
seq__36961 = G__36992;
chunk__36962 = G__36993;
count__36963 = G__36994;
i__36964 = G__36995;
continue;
}
} else
{var cnode = cljs.core.first(seq__36961__$1);rep_node(cnode);
{
var G__36996 = cljs.core.next(seq__36961__$1);
var G__36997 = null;
var G__36998 = 0;
var G__36999 = 0;
seq__36961 = G__36996;
chunk__36962 = G__36997;
count__36963 = G__36998;
i__36964 = G__36999;
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
{var vec__37009 = node_spec;var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37009,0,null);var vec__37010 = cljs.core.nthnext(vec__37009,1);var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37010,0,null);var ms = cljs.core.nthnext(vec__37010,1);var more = vec__37010;var _ = enfocus.core.log_debug(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tag,m,ms], 0)));var vec__37011 = cljs.core.name(tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37011,0,null);var segments = cljs.core.nthnext(vec__37011,1);var id = cljs.core.some(((function (vec__37009,tag,vec__37010,m,ms,more,_,vec__37011,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",seg.charAt(0)))
{return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(seg,1);
} else
{return null;
}
});})(vec__37009,tag,vec__37010,m,ms,more,_,vec__37011,tag_name,segments))
,segments);var classes = cljs.core.keep(((function (vec__37009,tag,vec__37010,m,ms,more,_,vec__37011,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",seg.charAt(0)))
{return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(seg,1);
} else
{return null;
}
});})(vec__37009,tag,vec__37010,m,ms,more,_,vec__37011,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_(m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.constant$keyword$143,id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_(classes)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs__$1,cljs.core.constant$keyword$193,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",classes))):attrs__$1);var content = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(html,((cljs.core.map_QMARK_(m))?ms:more)));var node = document.createElement(tag_name);var seq__37012_37018 = cljs.core.seq(attrs__$2);var chunk__37013_37019 = null;var count__37014_37020 = 0;var i__37015_37021 = 0;while(true){
if((i__37015_37021 < count__37014_37020))
{var vec__37016_37022 = chunk__37013_37019.cljs$core$IIndexed$_nth$arity$2(null,i__37015_37021);var key_37023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37016_37022,0,null);var val_37024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37016_37022,1,null);node.setAttribute(cljs.core.name(key_37023),val_37024);
{
var G__37025 = seq__37012_37018;
var G__37026 = chunk__37013_37019;
var G__37027 = count__37014_37020;
var G__37028 = (i__37015_37021 + 1);
seq__37012_37018 = G__37025;
chunk__37013_37019 = G__37026;
count__37014_37020 = G__37027;
i__37015_37021 = G__37028;
continue;
}
} else
{var temp__4092__auto___37029 = cljs.core.seq(seq__37012_37018);if(temp__4092__auto___37029)
{var seq__37012_37030__$1 = temp__4092__auto___37029;if(cljs.core.chunked_seq_QMARK_(seq__37012_37030__$1))
{var c__4004__auto___37031 = cljs.core.chunk_first(seq__37012_37030__$1);{
var G__37032 = cljs.core.chunk_rest(seq__37012_37030__$1);
var G__37033 = c__4004__auto___37031;
var G__37034 = cljs.core.count(c__4004__auto___37031);
var G__37035 = 0;
seq__37012_37018 = G__37032;
chunk__37013_37019 = G__37033;
count__37014_37020 = G__37034;
i__37015_37021 = G__37035;
continue;
}
} else
{var vec__37017_37036 = cljs.core.first(seq__37012_37030__$1);var key_37037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37017_37036,0,null);var val_37038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37017_37036,1,null);node.setAttribute(cljs.core.name(key_37037),val_37038);
{
var G__37039 = cljs.core.next(seq__37012_37030__$1);
var G__37040 = null;
var G__37041 = 0;
var G__37042 = 0;
seq__37012_37018 = G__37039;
chunk__37013_37019 = G__37040;
count__37014_37020 = G__37041;
i__37015_37021 = G__37042;
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
{if(cljs.core.constant$keyword$129)
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
{if(cljs.core.constant$keyword$129)
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
return (function (p1__37043_SHARP_){return p1__37043_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val(col,nm,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37044_SHARP_){return p1__37044_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node((function (node){var inputs = node.elements;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__37046_SHARP_,p2__37045_SHARP_){var G__37049 = p2__37045_SHARP_.nodeName;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("BUTTON",G__37049))
{return enfocus.core.read_simple_input(p2__37045_SHARP_,p1__37046_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("SELECT",G__37049))
{return enfocus.core.read_select_input(p2__37045_SHARP_,p1__37046_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("TEXTAREA",G__37049))
{return enfocus.core.read_simple_input(p2__37045_SHARP_,p1__37046_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("INPUT",G__37049))
{var G__37050 = p2__37045_SHARP_.type;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("radio",G__37050))
{return enfocus.core.read_checked_input(p2__37045_SHARP_,p1__37046_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",G__37050))
{return enfocus.core.read_checked_input(p2__37045_SHARP_,p1__37046_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("submit",G__37050))
{return enfocus.core.read_simple_input(p2__37045_SHARP_,p1__37046_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("reset",G__37050))
{return enfocus.core.read_simple_input(p2__37045_SHARP_,p1__37046_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("button",G__37050))
{return enfocus.core.read_simple_input(p2__37045_SHARP_,p1__37046_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("password",G__37050))
{return enfocus.core.read_simple_input(p2__37045_SHARP_,p1__37046_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("hidden",G__37050))
{return enfocus.core.read_simple_input(p2__37045_SHARP_,p1__37046_SHARP_);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("text",G__37050))
{return enfocus.core.read_simple_input(p2__37045_SHARP_,p1__37046_SHARP_);
} else
{if(cljs.core.constant$keyword$129)
{return p1__37046_SHARP_;
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
{if(cljs.core.constant$keyword$129)
{return p1__37046_SHARP_;
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
enfocus.core.register_filter(cljs.core.constant$keyword$194,enfocus.core.selected_options);
enfocus.core.register_filter(cljs.core.constant$keyword$195,enfocus.core.checked_radio_checkbox);
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
{if(cljs.core.constant$keyword$129)
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37051_SHARP_){if((p1__37051_SHARP_ instanceof cljs.core.Symbol))
{return (enfocus.core.css_syms.cljs$core$IFn$_invoke$arity$1 ? enfocus.core.css_syms.cljs$core$IFn$_invoke$arity$1(p1__37051_SHARP_) : enfocus.core.css_syms.call(null,p1__37051_SHARP_));
} else
{if((p1__37051_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name(p1__37051_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_(p1__37051_SHARP_))
{return create_sel_str.cljs$core$IFn$_invoke$arity$1(p1__37051_SHARP_);
} else
{if(typeof p1__37051_SHARP_ === 'string')
{return p1__37051_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count(trans);var sel_QMARK_ = (function (){var G__37060 = node;if(G__37060)
{var bit__3906__auto__ = null;if(cljs.core.truth_((function (){var or__3285__auto__ = bit__3906__auto__;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return G__37060.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__37060.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(enfocus.core.ISelector,G__37060);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(enfocus.core.ISelector,G__37060);
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cnt)))
{return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(cljs.core.first(trans),node);
} else
{var vec__37061 = ((sel_QMARK_)?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(trans,node)),document):cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37061,0,null);var trans__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37061,1,null);var seq__37062 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,trans__$1));var chunk__37063 = null;var count__37064 = 0;var i__37065 = 0;while(true){
if((i__37065 < count__37064))
{var vec__37066 = chunk__37063.cljs$core$IIndexed$_nth$arity$2(null,i__37065);var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37066,0,null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37066,1,null);enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(enfocus.core.nil_t(t),enfocus.core.select.cljs$core$IFn$_invoke$arity$3(sel,node__$1,id_mask));
{
var G__37068 = seq__37062;
var G__37069 = chunk__37063;
var G__37070 = count__37064;
var G__37071 = (i__37065 + 1);
seq__37062 = G__37068;
chunk__37063 = G__37069;
count__37064 = G__37070;
i__37065 = G__37071;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__37062);if(temp__4092__auto__)
{var seq__37062__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37062__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__37062__$1);{
var G__37072 = cljs.core.chunk_rest(seq__37062__$1);
var G__37073 = c__4004__auto__;
var G__37074 = cljs.core.count(c__4004__auto__);
var G__37075 = 0;
seq__37062 = G__37072;
chunk__37063 = G__37073;
count__37064 = G__37074;
i__37065 = G__37075;
continue;
}
} else
{var vec__37067 = cljs.core.first(seq__37062__$1);var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37067,0,null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37067,1,null);enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(enfocus.core.nil_t(t),enfocus.core.select.cljs$core$IFn$_invoke$arity$3(sel,node__$1,id_mask));
{
var G__37076 = cljs.core.next(seq__37062__$1);
var G__37077 = null;
var G__37078 = 0;
var G__37079 = 0;
seq__37062 = G__37076;
chunk__37063 = G__37077;
count__37064 = G__37078;
i__37065 = G__37079;
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
i_at.cljs$lang$applyTo = (function (arglist__37080){
var id_mask = cljs.core.first(arglist__37080);
arglist__37080 = cljs.core.next(arglist__37080);
var node = cljs.core.first(arglist__37080);
var trans = cljs.core.rest(arglist__37080);
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
at.cljs$lang$applyTo = (function (arglist__37081){
var node = cljs.core.first(arglist__37081);
var trans = cljs.core.rest(arglist__37081);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count(trans);var sel_QMARK_ = (function (){var G__37086 = node;if(G__37086)
{var bit__3906__auto__ = null;if(cljs.core.truth_((function (){var or__3285__auto__ = bit__3906__auto__;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return G__37086.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__37086.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(enfocus.core.ISelector,G__37086);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(enfocus.core.ISelector,G__37086);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cnt)))
{return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(cljs.core.first(trans),enfocus.core.select.cljs$core$IFn$_invoke$arity$1(node));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cnt))
{return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(cljs.core.first(trans),node);
} else
{if(cljs.core.constant$keyword$129)
{var vec__37087 = ((sel_QMARK_)?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(trans,node)),document):cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37087,0,null);var trans__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37087,1,null);return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p__37088){var vec__37089 = p__37088;var ky = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37089,0,null);var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37089,1,null);var ext = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37089,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(ext,enfocus.core.select.cljs$core$IFn$_invoke$arity$3(sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__37090){
var node = cljs.core.first(arglist__37090);
var trans = cljs.core.rest(arglist__37090);
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
var G__37091 = null;
var G__37091__1 = (function (this$){return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$,document,"");
});
var G__37091__2 = (function (this$,root){return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$,root,"");
});
var G__37091__3 = (function (this$,root,id_mask){return enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3(id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__37091 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__37091__1.call(this,this$);
case 2:
return G__37091__2.call(this,this$,root);
case 3:
return G__37091__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__37091;
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
var G__37092 = null;
var G__37092__1 = (function (this$){return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$,document,"");
});
var G__37092__2 = (function (this$,root){return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$,root,"");
});
var G__37092__3 = (function (this$,root,id_mask){return (this$.cljs$core$IFn$_invoke$arity$2 ? this$.cljs$core$IFn$_invoke$arity$2(root,id_mask) : this$.call(null,root,id_mask));
});
G__37092 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__37092__1.call(this,this$);
case 2:
return G__37092__2.call(this,this$,root);
case 3:
return G__37092__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__37092;
})()
);
(enfocus.core.ITransform["function"] = true);
(enfocus.core.apply_transform["function"] = (function() {
var G__37093 = null;
var G__37093__2 = (function (trans,nodes){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(trans,enfocus.core.nodes__GT_coll(nodes)));
});
var G__37093__3 = (function (trans,nodes,chain){var pnod_col = enfocus.core.nodes__GT_coll(nodes);var val = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(trans,pnod_col));if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(chain,nodes);
} else
{return val;
}
});
G__37093 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__37093__2.call(this,trans,nodes);
case 3:
return G__37093__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__37093;
})()
);
