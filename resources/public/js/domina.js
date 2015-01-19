// Compiled by ClojureScript 0.0-2069
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_36588 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_36589 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_36590 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$127,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_36589,table_section_wrapper_36589,opt_wrapper_36588,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_36590,table_section_wrapper_36589,cell_wrapper_36590,opt_wrapper_36588,table_section_wrapper_36589,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_36589]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3273__auto__ = div.firstChild;if(cljs.core.truth_(and__3273__auto__))
{return div.firstChild.childNodes;
} else
{return and__3273__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__36595 = cljs.core.seq(tbody);var chunk__36596 = null;var count__36597 = 0;var i__36598 = 0;while(true){
if((i__36598 < count__36597))
{var child = chunk__36596.cljs$core$IIndexed$_nth$arity$2(null,i__36598);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36599 = seq__36595;
var G__36600 = chunk__36596;
var G__36601 = count__36597;
var G__36602 = (i__36598 + 1);
seq__36595 = G__36599;
chunk__36596 = G__36600;
count__36597 = G__36601;
i__36598 = G__36602;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__36595);if(temp__4092__auto__)
{var seq__36595__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36595__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__36595__$1);{
var G__36603 = cljs.core.chunk_rest(seq__36595__$1);
var G__36604 = c__4004__auto__;
var G__36605 = cljs.core.count(c__4004__auto__);
var G__36606 = 0;
seq__36595 = G__36603;
chunk__36596 = G__36604;
count__36597 = G__36605;
i__36598 = G__36606;
continue;
}
} else
{var child = cljs.core.first(seq__36595__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36607 = cljs.core.next(seq__36595__$1);
var G__36608 = null;
var G__36609 = 0;
var G__36610 = 0;
seq__36595 = G__36607;
chunk__36596 = G__36608;
count__36597 = G__36609;
i__36598 = G__36610;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__36612 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36612,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36612,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36612,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__36613 = wrapper.lastChild;
var G__36614 = (level - 1);
wrapper = G__36613;
level = G__36614;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3273__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3273__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3273__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_(div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj36616 = {};return obj36616;
})();
domina.nodes = (function nodes(content){if((function (){var and__3273__auto__ = content;if(and__3273__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3273__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__3883__auto__ = (((content == null))?null:content);return (function (){var or__3285__auto__ = (domina.nodes[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (domina.nodes["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3273__auto__ = nodeseq;if(and__3273__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3273__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__3883__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3285__auto__ = (domina.single_node[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (domina.single_node["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3273__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3273__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3273__auto__;
}
})()))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__36617){
var mesg = cljs.core.seq(arglist__36617);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__36618){
var mesg = cljs.core.seq(arglist__36618);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(class_name))));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__36619){
var contents = cljs.core.seq(arglist__36619);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36620_SHARP_){return p1__36620_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__36621_SHARP_,p2__36622_SHARP_){return goog.dom.insertChildAt(p1__36621_SHARP_,p2__36622_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__36621_SHARP_,p2__36622_SHARP_){return goog.dom.insertChildAt(p1__36621_SHARP_,p2__36622_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__36624_SHARP_,p2__36623_SHARP_){return goog.dom.insertSiblingBefore(p2__36623_SHARP_,p1__36624_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__36624_SHARP_,p2__36623_SHARP_){return goog.dom.insertSiblingBefore(p2__36623_SHARP_,p1__36624_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__36626_SHARP_,p2__36625_SHARP_){return goog.dom.insertSiblingAfter(p2__36625_SHARP_,p1__36626_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__36626_SHARP_,p2__36625_SHARP_){return goog.dom.insertSiblingAfter(p2__36625_SHARP_,p1__36626_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__36628_SHARP_,p2__36627_SHARP_){return goog.dom.replaceNode(p2__36627_SHARP_,p1__36628_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__36628_SHARP_,p2__36627_SHARP_){return goog.dom.replaceNode(p2__36627_SHARP_,p1__36628_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__36633_36637 = cljs.core.seq(domina.nodes(content));var chunk__36634_36638 = null;var count__36635_36639 = 0;var i__36636_36640 = 0;while(true){
if((i__36636_36640 < count__36635_36639))
{var n_36641 = chunk__36634_36638.cljs$core$IIndexed$_nth$arity$2(null,i__36636_36640);goog.style.setStyle(n_36641,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__36642 = seq__36633_36637;
var G__36643 = chunk__36634_36638;
var G__36644 = count__36635_36639;
var G__36645 = (i__36636_36640 + 1);
seq__36633_36637 = G__36642;
chunk__36634_36638 = G__36643;
count__36635_36639 = G__36644;
i__36636_36640 = G__36645;
continue;
}
} else
{var temp__4092__auto___36646 = cljs.core.seq(seq__36633_36637);if(temp__4092__auto___36646)
{var seq__36633_36647__$1 = temp__4092__auto___36646;if(cljs.core.chunked_seq_QMARK_(seq__36633_36647__$1))
{var c__4004__auto___36648 = cljs.core.chunk_first(seq__36633_36647__$1);{
var G__36649 = cljs.core.chunk_rest(seq__36633_36647__$1);
var G__36650 = c__4004__auto___36648;
var G__36651 = cljs.core.count(c__4004__auto___36648);
var G__36652 = 0;
seq__36633_36637 = G__36649;
chunk__36634_36638 = G__36650;
count__36635_36639 = G__36651;
i__36636_36640 = G__36652;
continue;
}
} else
{var n_36653 = cljs.core.first(seq__36633_36647__$1);goog.style.setStyle(n_36653,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__36654 = cljs.core.next(seq__36633_36647__$1);
var G__36655 = null;
var G__36656 = 0;
var G__36657 = 0;
seq__36633_36637 = G__36654;
chunk__36634_36638 = G__36655;
count__36635_36639 = G__36656;
i__36636_36640 = G__36657;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__36658){
var content = cljs.core.first(arglist__36658);
arglist__36658 = cljs.core.next(arglist__36658);
var name = cljs.core.first(arglist__36658);
var value = cljs.core.rest(arglist__36658);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__36663_36667 = cljs.core.seq(domina.nodes(content));var chunk__36664_36668 = null;var count__36665_36669 = 0;var i__36666_36670 = 0;while(true){
if((i__36666_36670 < count__36665_36669))
{var n_36671 = chunk__36664_36668.cljs$core$IIndexed$_nth$arity$2(null,i__36666_36670);n_36671.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__36672 = seq__36663_36667;
var G__36673 = chunk__36664_36668;
var G__36674 = count__36665_36669;
var G__36675 = (i__36666_36670 + 1);
seq__36663_36667 = G__36672;
chunk__36664_36668 = G__36673;
count__36665_36669 = G__36674;
i__36666_36670 = G__36675;
continue;
}
} else
{var temp__4092__auto___36676 = cljs.core.seq(seq__36663_36667);if(temp__4092__auto___36676)
{var seq__36663_36677__$1 = temp__4092__auto___36676;if(cljs.core.chunked_seq_QMARK_(seq__36663_36677__$1))
{var c__4004__auto___36678 = cljs.core.chunk_first(seq__36663_36677__$1);{
var G__36679 = cljs.core.chunk_rest(seq__36663_36677__$1);
var G__36680 = c__4004__auto___36678;
var G__36681 = cljs.core.count(c__4004__auto___36678);
var G__36682 = 0;
seq__36663_36667 = G__36679;
chunk__36664_36668 = G__36680;
count__36665_36669 = G__36681;
i__36666_36670 = G__36682;
continue;
}
} else
{var n_36683 = cljs.core.first(seq__36663_36677__$1);n_36683.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__36684 = cljs.core.next(seq__36663_36677__$1);
var G__36685 = null;
var G__36686 = 0;
var G__36687 = 0;
seq__36663_36667 = G__36684;
chunk__36664_36668 = G__36685;
count__36665_36669 = G__36686;
i__36666_36670 = G__36687;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__36688){
var content = cljs.core.first(arglist__36688);
arglist__36688 = cljs.core.next(arglist__36688);
var name = cljs.core.first(arglist__36688);
var value = cljs.core.rest(arglist__36688);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__36693_36697 = cljs.core.seq(domina.nodes(content));var chunk__36694_36698 = null;var count__36695_36699 = 0;var i__36696_36700 = 0;while(true){
if((i__36696_36700 < count__36695_36699))
{var n_36701 = chunk__36694_36698.cljs$core$IIndexed$_nth$arity$2(null,i__36696_36700);n_36701.removeAttribute(cljs.core.name(name));
{
var G__36702 = seq__36693_36697;
var G__36703 = chunk__36694_36698;
var G__36704 = count__36695_36699;
var G__36705 = (i__36696_36700 + 1);
seq__36693_36697 = G__36702;
chunk__36694_36698 = G__36703;
count__36695_36699 = G__36704;
i__36696_36700 = G__36705;
continue;
}
} else
{var temp__4092__auto___36706 = cljs.core.seq(seq__36693_36697);if(temp__4092__auto___36706)
{var seq__36693_36707__$1 = temp__4092__auto___36706;if(cljs.core.chunked_seq_QMARK_(seq__36693_36707__$1))
{var c__4004__auto___36708 = cljs.core.chunk_first(seq__36693_36707__$1);{
var G__36709 = cljs.core.chunk_rest(seq__36693_36707__$1);
var G__36710 = c__4004__auto___36708;
var G__36711 = cljs.core.count(c__4004__auto___36708);
var G__36712 = 0;
seq__36693_36697 = G__36709;
chunk__36694_36698 = G__36710;
count__36695_36699 = G__36711;
i__36696_36700 = G__36712;
continue;
}
} else
{var n_36713 = cljs.core.first(seq__36693_36707__$1);n_36713.removeAttribute(cljs.core.name(name));
{
var G__36714 = cljs.core.next(seq__36693_36707__$1);
var G__36715 = null;
var G__36716 = 0;
var G__36717 = 0;
seq__36693_36697 = G__36714;
chunk__36694_36698 = G__36715;
count__36695_36699 = G__36716;
i__36696_36700 = G__36717;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__36719 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36719,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36719,1,null);if(cljs.core.truth_((function (){var and__3273__auto__ = k;if(cljs.core.truth_(and__3273__auto__))
{return v;
} else
{return and__3273__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr(content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes(style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes(style.cssText);
} else
{if(cljs.core.constant$keyword$126)
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36720_SHARP_){var attr = attrs__$1.item(p1__36720_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__36727_36733 = cljs.core.seq(styles);var chunk__36728_36734 = null;var count__36729_36735 = 0;var i__36730_36736 = 0;while(true){
if((i__36730_36736 < count__36729_36735))
{var vec__36731_36737 = chunk__36728_36734.cljs$core$IIndexed$_nth$arity$2(null,i__36730_36736);var name_36738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36731_36737,0,null);var value_36739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36731_36737,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_36738,cljs.core.array_seq([value_36739], 0));
{
var G__36740 = seq__36727_36733;
var G__36741 = chunk__36728_36734;
var G__36742 = count__36729_36735;
var G__36743 = (i__36730_36736 + 1);
seq__36727_36733 = G__36740;
chunk__36728_36734 = G__36741;
count__36729_36735 = G__36742;
i__36730_36736 = G__36743;
continue;
}
} else
{var temp__4092__auto___36744 = cljs.core.seq(seq__36727_36733);if(temp__4092__auto___36744)
{var seq__36727_36745__$1 = temp__4092__auto___36744;if(cljs.core.chunked_seq_QMARK_(seq__36727_36745__$1))
{var c__4004__auto___36746 = cljs.core.chunk_first(seq__36727_36745__$1);{
var G__36747 = cljs.core.chunk_rest(seq__36727_36745__$1);
var G__36748 = c__4004__auto___36746;
var G__36749 = cljs.core.count(c__4004__auto___36746);
var G__36750 = 0;
seq__36727_36733 = G__36747;
chunk__36728_36734 = G__36748;
count__36729_36735 = G__36749;
i__36730_36736 = G__36750;
continue;
}
} else
{var vec__36732_36751 = cljs.core.first(seq__36727_36745__$1);var name_36752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36732_36751,0,null);var value_36753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36732_36751,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_36752,cljs.core.array_seq([value_36753], 0));
{
var G__36754 = cljs.core.next(seq__36727_36745__$1);
var G__36755 = null;
var G__36756 = 0;
var G__36757 = 0;
seq__36727_36733 = G__36754;
chunk__36728_36734 = G__36755;
count__36729_36735 = G__36756;
i__36730_36736 = G__36757;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__36764_36770 = cljs.core.seq(attrs);var chunk__36765_36771 = null;var count__36766_36772 = 0;var i__36767_36773 = 0;while(true){
if((i__36767_36773 < count__36766_36772))
{var vec__36768_36774 = chunk__36765_36771.cljs$core$IIndexed$_nth$arity$2(null,i__36767_36773);var name_36775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36768_36774,0,null);var value_36776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36768_36774,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_36775,cljs.core.array_seq([value_36776], 0));
{
var G__36777 = seq__36764_36770;
var G__36778 = chunk__36765_36771;
var G__36779 = count__36766_36772;
var G__36780 = (i__36767_36773 + 1);
seq__36764_36770 = G__36777;
chunk__36765_36771 = G__36778;
count__36766_36772 = G__36779;
i__36767_36773 = G__36780;
continue;
}
} else
{var temp__4092__auto___36781 = cljs.core.seq(seq__36764_36770);if(temp__4092__auto___36781)
{var seq__36764_36782__$1 = temp__4092__auto___36781;if(cljs.core.chunked_seq_QMARK_(seq__36764_36782__$1))
{var c__4004__auto___36783 = cljs.core.chunk_first(seq__36764_36782__$1);{
var G__36784 = cljs.core.chunk_rest(seq__36764_36782__$1);
var G__36785 = c__4004__auto___36783;
var G__36786 = cljs.core.count(c__4004__auto___36783);
var G__36787 = 0;
seq__36764_36770 = G__36784;
chunk__36765_36771 = G__36785;
count__36766_36772 = G__36786;
i__36767_36773 = G__36787;
continue;
}
} else
{var vec__36769_36788 = cljs.core.first(seq__36764_36782__$1);var name_36789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36769_36788,0,null);var value_36790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36769_36788,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_36789,cljs.core.array_seq([value_36790], 0));
{
var G__36791 = cljs.core.next(seq__36764_36782__$1);
var G__36792 = null;
var G__36793 = 0;
var G__36794 = 0;
seq__36764_36770 = G__36791;
chunk__36765_36771 = G__36792;
count__36766_36772 = G__36793;
i__36767_36773 = G__36794;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__36799_36803 = cljs.core.seq(domina.nodes(content));var chunk__36800_36804 = null;var count__36801_36805 = 0;var i__36802_36806 = 0;while(true){
if((i__36802_36806 < count__36801_36805))
{var node_36807 = chunk__36800_36804.cljs$core$IIndexed$_nth$arity$2(null,i__36802_36806);goog.dom.classes.add(node_36807,class$);
{
var G__36808 = seq__36799_36803;
var G__36809 = chunk__36800_36804;
var G__36810 = count__36801_36805;
var G__36811 = (i__36802_36806 + 1);
seq__36799_36803 = G__36808;
chunk__36800_36804 = G__36809;
count__36801_36805 = G__36810;
i__36802_36806 = G__36811;
continue;
}
} else
{var temp__4092__auto___36812 = cljs.core.seq(seq__36799_36803);if(temp__4092__auto___36812)
{var seq__36799_36813__$1 = temp__4092__auto___36812;if(cljs.core.chunked_seq_QMARK_(seq__36799_36813__$1))
{var c__4004__auto___36814 = cljs.core.chunk_first(seq__36799_36813__$1);{
var G__36815 = cljs.core.chunk_rest(seq__36799_36813__$1);
var G__36816 = c__4004__auto___36814;
var G__36817 = cljs.core.count(c__4004__auto___36814);
var G__36818 = 0;
seq__36799_36803 = G__36815;
chunk__36800_36804 = G__36816;
count__36801_36805 = G__36817;
i__36802_36806 = G__36818;
continue;
}
} else
{var node_36819 = cljs.core.first(seq__36799_36813__$1);goog.dom.classes.add(node_36819,class$);
{
var G__36820 = cljs.core.next(seq__36799_36813__$1);
var G__36821 = null;
var G__36822 = 0;
var G__36823 = 0;
seq__36799_36803 = G__36820;
chunk__36800_36804 = G__36821;
count__36801_36805 = G__36822;
i__36802_36806 = G__36823;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__36828_36832 = cljs.core.seq(domina.nodes(content));var chunk__36829_36833 = null;var count__36830_36834 = 0;var i__36831_36835 = 0;while(true){
if((i__36831_36835 < count__36830_36834))
{var node_36836 = chunk__36829_36833.cljs$core$IIndexed$_nth$arity$2(null,i__36831_36835);goog.dom.classes.remove(node_36836,class$);
{
var G__36837 = seq__36828_36832;
var G__36838 = chunk__36829_36833;
var G__36839 = count__36830_36834;
var G__36840 = (i__36831_36835 + 1);
seq__36828_36832 = G__36837;
chunk__36829_36833 = G__36838;
count__36830_36834 = G__36839;
i__36831_36835 = G__36840;
continue;
}
} else
{var temp__4092__auto___36841 = cljs.core.seq(seq__36828_36832);if(temp__4092__auto___36841)
{var seq__36828_36842__$1 = temp__4092__auto___36841;if(cljs.core.chunked_seq_QMARK_(seq__36828_36842__$1))
{var c__4004__auto___36843 = cljs.core.chunk_first(seq__36828_36842__$1);{
var G__36844 = cljs.core.chunk_rest(seq__36828_36842__$1);
var G__36845 = c__4004__auto___36843;
var G__36846 = cljs.core.count(c__4004__auto___36843);
var G__36847 = 0;
seq__36828_36832 = G__36844;
chunk__36829_36833 = G__36845;
count__36830_36834 = G__36846;
i__36831_36835 = G__36847;
continue;
}
} else
{var node_36848 = cljs.core.first(seq__36828_36842__$1);goog.dom.classes.remove(node_36848,class$);
{
var G__36849 = cljs.core.next(seq__36828_36842__$1);
var G__36850 = null;
var G__36851 = 0;
var G__36852 = 0;
seq__36828_36832 = G__36849;
chunk__36829_36833 = G__36850;
count__36830_36834 = G__36851;
i__36831_36835 = G__36852;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__36857_36861 = cljs.core.seq(domina.nodes(content));var chunk__36858_36862 = null;var count__36859_36863 = 0;var i__36860_36864 = 0;while(true){
if((i__36860_36864 < count__36859_36863))
{var node_36865 = chunk__36858_36862.cljs$core$IIndexed$_nth$arity$2(null,i__36860_36864);goog.dom.classes.toggle(node_36865,class$);
{
var G__36866 = seq__36857_36861;
var G__36867 = chunk__36858_36862;
var G__36868 = count__36859_36863;
var G__36869 = (i__36860_36864 + 1);
seq__36857_36861 = G__36866;
chunk__36858_36862 = G__36867;
count__36859_36863 = G__36868;
i__36860_36864 = G__36869;
continue;
}
} else
{var temp__4092__auto___36870 = cljs.core.seq(seq__36857_36861);if(temp__4092__auto___36870)
{var seq__36857_36871__$1 = temp__4092__auto___36870;if(cljs.core.chunked_seq_QMARK_(seq__36857_36871__$1))
{var c__4004__auto___36872 = cljs.core.chunk_first(seq__36857_36871__$1);{
var G__36873 = cljs.core.chunk_rest(seq__36857_36871__$1);
var G__36874 = c__4004__auto___36872;
var G__36875 = cljs.core.count(c__4004__auto___36872);
var G__36876 = 0;
seq__36857_36861 = G__36873;
chunk__36858_36862 = G__36874;
count__36859_36863 = G__36875;
i__36860_36864 = G__36876;
continue;
}
} else
{var node_36877 = cljs.core.first(seq__36857_36871__$1);goog.dom.classes.toggle(node_36877,class$);
{
var G__36878 = cljs.core.next(seq__36857_36871__$1);
var G__36879 = null;
var G__36880 = 0;
var G__36881 = 0;
seq__36857_36861 = G__36878;
chunk__36858_36862 = G__36879;
count__36859_36863 = G__36880;
i__36860_36864 = G__36881;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_36890__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__36886_36891 = cljs.core.seq(domina.nodes(content));var chunk__36887_36892 = null;var count__36888_36893 = 0;var i__36889_36894 = 0;while(true){
if((i__36889_36894 < count__36888_36893))
{var node_36895 = chunk__36887_36892.cljs$core$IIndexed$_nth$arity$2(null,i__36889_36894);goog.dom.classes.set(node_36895,classes_36890__$1);
{
var G__36896 = seq__36886_36891;
var G__36897 = chunk__36887_36892;
var G__36898 = count__36888_36893;
var G__36899 = (i__36889_36894 + 1);
seq__36886_36891 = G__36896;
chunk__36887_36892 = G__36897;
count__36888_36893 = G__36898;
i__36889_36894 = G__36899;
continue;
}
} else
{var temp__4092__auto___36900 = cljs.core.seq(seq__36886_36891);if(temp__4092__auto___36900)
{var seq__36886_36901__$1 = temp__4092__auto___36900;if(cljs.core.chunked_seq_QMARK_(seq__36886_36901__$1))
{var c__4004__auto___36902 = cljs.core.chunk_first(seq__36886_36901__$1);{
var G__36903 = cljs.core.chunk_rest(seq__36886_36901__$1);
var G__36904 = c__4004__auto___36902;
var G__36905 = cljs.core.count(c__4004__auto___36902);
var G__36906 = 0;
seq__36886_36891 = G__36903;
chunk__36887_36892 = G__36904;
count__36888_36893 = G__36905;
i__36889_36894 = G__36906;
continue;
}
} else
{var node_36907 = cljs.core.first(seq__36886_36901__$1);goog.dom.classes.set(node_36907,classes_36890__$1);
{
var G__36908 = cljs.core.next(seq__36886_36901__$1);
var G__36909 = null;
var G__36910 = 0;
var G__36911 = 0;
seq__36886_36891 = G__36908;
chunk__36887_36892 = G__36909;
count__36888_36893 = G__36910;
i__36889_36894 = G__36911;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__36916_36920 = cljs.core.seq(domina.nodes(content));var chunk__36917_36921 = null;var count__36918_36922 = 0;var i__36919_36923 = 0;while(true){
if((i__36919_36923 < count__36918_36922))
{var node_36924 = chunk__36917_36921.cljs$core$IIndexed$_nth$arity$2(null,i__36919_36923);goog.dom.setTextContent(node_36924,value);
{
var G__36925 = seq__36916_36920;
var G__36926 = chunk__36917_36921;
var G__36927 = count__36918_36922;
var G__36928 = (i__36919_36923 + 1);
seq__36916_36920 = G__36925;
chunk__36917_36921 = G__36926;
count__36918_36922 = G__36927;
i__36919_36923 = G__36928;
continue;
}
} else
{var temp__4092__auto___36929 = cljs.core.seq(seq__36916_36920);if(temp__4092__auto___36929)
{var seq__36916_36930__$1 = temp__4092__auto___36929;if(cljs.core.chunked_seq_QMARK_(seq__36916_36930__$1))
{var c__4004__auto___36931 = cljs.core.chunk_first(seq__36916_36930__$1);{
var G__36932 = cljs.core.chunk_rest(seq__36916_36930__$1);
var G__36933 = c__4004__auto___36931;
var G__36934 = cljs.core.count(c__4004__auto___36931);
var G__36935 = 0;
seq__36916_36920 = G__36932;
chunk__36917_36921 = G__36933;
count__36918_36922 = G__36934;
i__36919_36923 = G__36935;
continue;
}
} else
{var node_36936 = cljs.core.first(seq__36916_36930__$1);goog.dom.setTextContent(node_36936,value);
{
var G__36937 = cljs.core.next(seq__36916_36930__$1);
var G__36938 = null;
var G__36939 = 0;
var G__36940 = 0;
seq__36916_36920 = G__36937;
chunk__36917_36921 = G__36938;
count__36918_36922 = G__36939;
i__36919_36923 = G__36940;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__36945_36949 = cljs.core.seq(domina.nodes(content));var chunk__36946_36950 = null;var count__36947_36951 = 0;var i__36948_36952 = 0;while(true){
if((i__36948_36952 < count__36947_36951))
{var node_36953 = chunk__36946_36950.cljs$core$IIndexed$_nth$arity$2(null,i__36948_36952);goog.dom.forms.setValue(node_36953,value);
{
var G__36954 = seq__36945_36949;
var G__36955 = chunk__36946_36950;
var G__36956 = count__36947_36951;
var G__36957 = (i__36948_36952 + 1);
seq__36945_36949 = G__36954;
chunk__36946_36950 = G__36955;
count__36947_36951 = G__36956;
i__36948_36952 = G__36957;
continue;
}
} else
{var temp__4092__auto___36958 = cljs.core.seq(seq__36945_36949);if(temp__4092__auto___36958)
{var seq__36945_36959__$1 = temp__4092__auto___36958;if(cljs.core.chunked_seq_QMARK_(seq__36945_36959__$1))
{var c__4004__auto___36960 = cljs.core.chunk_first(seq__36945_36959__$1);{
var G__36961 = cljs.core.chunk_rest(seq__36945_36959__$1);
var G__36962 = c__4004__auto___36960;
var G__36963 = cljs.core.count(c__4004__auto___36960);
var G__36964 = 0;
seq__36945_36949 = G__36961;
chunk__36946_36950 = G__36962;
count__36947_36951 = G__36963;
i__36948_36952 = G__36964;
continue;
}
} else
{var node_36965 = cljs.core.first(seq__36945_36959__$1);goog.dom.forms.setValue(node_36965,value);
{
var G__36966 = cljs.core.next(seq__36945_36959__$1);
var G__36967 = null;
var G__36968 = 0;
var G__36969 = 0;
seq__36945_36949 = G__36966;
chunk__36946_36950 = G__36967;
count__36947_36951 = G__36968;
i__36948_36952 = G__36969;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3273__auto__ = allows_inner_html_QMARK_;if(and__3273__auto__)
{var and__3273__auto____$1 = (function (){var or__3285__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3273__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3273__auto____$1;
}
} else
{return and__3273__auto__;
}
})()))
{var value_36980 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__36976_36981 = cljs.core.seq(domina.nodes(content));var chunk__36977_36982 = null;var count__36978_36983 = 0;var i__36979_36984 = 0;while(true){
if((i__36979_36984 < count__36978_36983))
{var node_36985 = chunk__36977_36982.cljs$core$IIndexed$_nth$arity$2(null,i__36979_36984);node_36985.innerHTML = value_36980;
{
var G__36986 = seq__36976_36981;
var G__36987 = chunk__36977_36982;
var G__36988 = count__36978_36983;
var G__36989 = (i__36979_36984 + 1);
seq__36976_36981 = G__36986;
chunk__36977_36982 = G__36987;
count__36978_36983 = G__36988;
i__36979_36984 = G__36989;
continue;
}
} else
{var temp__4092__auto___36990 = cljs.core.seq(seq__36976_36981);if(temp__4092__auto___36990)
{var seq__36976_36991__$1 = temp__4092__auto___36990;if(cljs.core.chunked_seq_QMARK_(seq__36976_36991__$1))
{var c__4004__auto___36992 = cljs.core.chunk_first(seq__36976_36991__$1);{
var G__36993 = cljs.core.chunk_rest(seq__36976_36991__$1);
var G__36994 = c__4004__auto___36992;
var G__36995 = cljs.core.count(c__4004__auto___36992);
var G__36996 = 0;
seq__36976_36981 = G__36993;
chunk__36977_36982 = G__36994;
count__36978_36983 = G__36995;
i__36979_36984 = G__36996;
continue;
}
} else
{var node_36997 = cljs.core.first(seq__36976_36991__$1);node_36997.innerHTML = value_36980;
{
var G__36998 = cljs.core.next(seq__36976_36991__$1);
var G__36999 = null;
var G__37000 = 0;
var G__37001 = 0;
seq__36976_36981 = G__36998;
chunk__36977_36982 = G__36999;
count__36978_36983 = G__37000;
i__36979_36984 = G__37001;
continue;
}
}
} else
{}
}
break;
}
}catch (e36975){if((e36975 instanceof Error))
{var e_37002 = e36975;domina.replace_children_BANG_(content,value_36980);
} else
{if(cljs.core.constant$keyword$126)
{throw e36975;
} else
{}
}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3273__auto__ = bubble;if(cljs.core.truth_(and__3273__auto__))
{return (value == null);
} else
{return and__3273__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3285__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__37009_37013 = cljs.core.seq(children);var chunk__37010_37014 = null;var count__37011_37015 = 0;var i__37012_37016 = 0;while(true){
if((i__37012_37016 < count__37011_37015))
{var child_37017 = chunk__37010_37014.cljs$core$IIndexed$_nth$arity$2(null,i__37012_37016);frag.appendChild(child_37017);
{
var G__37018 = seq__37009_37013;
var G__37019 = chunk__37010_37014;
var G__37020 = count__37011_37015;
var G__37021 = (i__37012_37016 + 1);
seq__37009_37013 = G__37018;
chunk__37010_37014 = G__37019;
count__37011_37015 = G__37020;
i__37012_37016 = G__37021;
continue;
}
} else
{var temp__4092__auto___37022 = cljs.core.seq(seq__37009_37013);if(temp__4092__auto___37022)
{var seq__37009_37023__$1 = temp__4092__auto___37022;if(cljs.core.chunked_seq_QMARK_(seq__37009_37023__$1))
{var c__4004__auto___37024 = cljs.core.chunk_first(seq__37009_37023__$1);{
var G__37025 = cljs.core.chunk_rest(seq__37009_37023__$1);
var G__37026 = c__4004__auto___37024;
var G__37027 = cljs.core.count(c__4004__auto___37024);
var G__37028 = 0;
seq__37009_37013 = G__37025;
chunk__37010_37014 = G__37026;
count__37011_37015 = G__37027;
i__37012_37016 = G__37028;
continue;
}
} else
{var child_37029 = cljs.core.first(seq__37009_37023__$1);frag.appendChild(child_37029);
{
var G__37030 = cljs.core.next(seq__37009_37023__$1);
var G__37031 = null;
var G__37032 = 0;
var G__37033 = 0;
seq__37009_37013 = G__37030;
chunk__37010_37014 = G__37031;
count__37011_37015 = G__37032;
i__37012_37016 = G__37033;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__37003_SHARP_,p2__37004_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__37003_SHARP_,p2__37004_SHARP_) : f.call(null,p1__37003_SHARP_,p2__37004_SHARP_));
}),cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3273__auto__ = obj;if(cljs.core.truth_(and__3273__auto__))
{var and__3273__auto____$1 = cljs.core.not(obj.nodeName);if(and__3273__auto____$1)
{return obj.length;
} else
{return and__3273__auto____$1;
}
} else
{return and__3273__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__37035 = list_thing;if(G__37035)
{var bit__3906__auto__ = (G__37035.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3906__auto__) || (G__37035.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37035.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__37035);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__37035);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$127)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__37036 = content;if(G__37036)
{var bit__3906__auto__ = (G__37036.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3906__auto__) || (G__37036.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37036.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__37036);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__37036);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$127)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__37037 = content;if(G__37037)
{var bit__3906__auto__ = (G__37037.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3906__auto__) || (G__37037.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37037.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__37037);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__37037);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$127)
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist(coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}