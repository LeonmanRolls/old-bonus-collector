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
var opt_wrapper_37102 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_37103 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_37104 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$130,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_37103,table_section_wrapper_37103,opt_wrapper_37102,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_37104,table_section_wrapper_37103,cell_wrapper_37104,opt_wrapper_37102,table_section_wrapper_37103,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_37103]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3273__auto__ = div.firstChild;if(cljs.core.truth_(and__3273__auto__))
{return div.firstChild.childNodes;
} else
{return and__3273__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__37109 = cljs.core.seq(tbody);var chunk__37110 = null;var count__37111 = 0;var i__37112 = 0;while(true){
if((i__37112 < count__37111))
{var child = chunk__37110.cljs$core$IIndexed$_nth$arity$2(null,i__37112);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__37113 = seq__37109;
var G__37114 = chunk__37110;
var G__37115 = count__37111;
var G__37116 = (i__37112 + 1);
seq__37109 = G__37113;
chunk__37110 = G__37114;
count__37111 = G__37115;
i__37112 = G__37116;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__37109);if(temp__4092__auto__)
{var seq__37109__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37109__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__37109__$1);{
var G__37117 = cljs.core.chunk_rest(seq__37109__$1);
var G__37118 = c__4004__auto__;
var G__37119 = cljs.core.count(c__4004__auto__);
var G__37120 = 0;
seq__37109 = G__37117;
chunk__37110 = G__37118;
count__37111 = G__37119;
i__37112 = G__37120;
continue;
}
} else
{var child = cljs.core.first(seq__37109__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__37121 = cljs.core.next(seq__37109__$1);
var G__37122 = null;
var G__37123 = 0;
var G__37124 = 0;
seq__37109 = G__37121;
chunk__37110 = G__37122;
count__37111 = G__37123;
i__37112 = G__37124;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__37126 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$130.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37126,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37126,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37126,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__37127 = wrapper.lastChild;
var G__37128 = (level - 1);
wrapper = G__37127;
level = G__37128;
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
domina.DomContent = (function (){var obj37130 = {};return obj37130;
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
log_debug.cljs$lang$applyTo = (function (arglist__37131){
var mesg = cljs.core.seq(arglist__37131);
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
log.cljs$lang$applyTo = (function (arglist__37132){
var mesg = cljs.core.seq(arglist__37132);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__37133){
var contents = cljs.core.seq(arglist__37133);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37134_SHARP_){return p1__37134_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__37135_SHARP_,p2__37136_SHARP_){return goog.dom.insertChildAt(p1__37135_SHARP_,p2__37136_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__37135_SHARP_,p2__37136_SHARP_){return goog.dom.insertChildAt(p1__37135_SHARP_,p2__37136_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__37138_SHARP_,p2__37137_SHARP_){return goog.dom.insertSiblingBefore(p2__37137_SHARP_,p1__37138_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__37138_SHARP_,p2__37137_SHARP_){return goog.dom.insertSiblingBefore(p2__37137_SHARP_,p1__37138_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__37140_SHARP_,p2__37139_SHARP_){return goog.dom.insertSiblingAfter(p2__37139_SHARP_,p1__37140_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__37140_SHARP_,p2__37139_SHARP_){return goog.dom.insertSiblingAfter(p2__37139_SHARP_,p1__37140_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__37142_SHARP_,p2__37141_SHARP_){return goog.dom.replaceNode(p2__37141_SHARP_,p1__37142_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__37142_SHARP_,p2__37141_SHARP_){return goog.dom.replaceNode(p2__37141_SHARP_,p1__37142_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__37147_37151 = cljs.core.seq(domina.nodes(content));var chunk__37148_37152 = null;var count__37149_37153 = 0;var i__37150_37154 = 0;while(true){
if((i__37150_37154 < count__37149_37153))
{var n_37155 = chunk__37148_37152.cljs$core$IIndexed$_nth$arity$2(null,i__37150_37154);goog.style.setStyle(n_37155,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__37156 = seq__37147_37151;
var G__37157 = chunk__37148_37152;
var G__37158 = count__37149_37153;
var G__37159 = (i__37150_37154 + 1);
seq__37147_37151 = G__37156;
chunk__37148_37152 = G__37157;
count__37149_37153 = G__37158;
i__37150_37154 = G__37159;
continue;
}
} else
{var temp__4092__auto___37160 = cljs.core.seq(seq__37147_37151);if(temp__4092__auto___37160)
{var seq__37147_37161__$1 = temp__4092__auto___37160;if(cljs.core.chunked_seq_QMARK_(seq__37147_37161__$1))
{var c__4004__auto___37162 = cljs.core.chunk_first(seq__37147_37161__$1);{
var G__37163 = cljs.core.chunk_rest(seq__37147_37161__$1);
var G__37164 = c__4004__auto___37162;
var G__37165 = cljs.core.count(c__4004__auto___37162);
var G__37166 = 0;
seq__37147_37151 = G__37163;
chunk__37148_37152 = G__37164;
count__37149_37153 = G__37165;
i__37150_37154 = G__37166;
continue;
}
} else
{var n_37167 = cljs.core.first(seq__37147_37161__$1);goog.style.setStyle(n_37167,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__37168 = cljs.core.next(seq__37147_37161__$1);
var G__37169 = null;
var G__37170 = 0;
var G__37171 = 0;
seq__37147_37151 = G__37168;
chunk__37148_37152 = G__37169;
count__37149_37153 = G__37170;
i__37150_37154 = G__37171;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__37172){
var content = cljs.core.first(arglist__37172);
arglist__37172 = cljs.core.next(arglist__37172);
var name = cljs.core.first(arglist__37172);
var value = cljs.core.rest(arglist__37172);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__37177_37181 = cljs.core.seq(domina.nodes(content));var chunk__37178_37182 = null;var count__37179_37183 = 0;var i__37180_37184 = 0;while(true){
if((i__37180_37184 < count__37179_37183))
{var n_37185 = chunk__37178_37182.cljs$core$IIndexed$_nth$arity$2(null,i__37180_37184);n_37185.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__37186 = seq__37177_37181;
var G__37187 = chunk__37178_37182;
var G__37188 = count__37179_37183;
var G__37189 = (i__37180_37184 + 1);
seq__37177_37181 = G__37186;
chunk__37178_37182 = G__37187;
count__37179_37183 = G__37188;
i__37180_37184 = G__37189;
continue;
}
} else
{var temp__4092__auto___37190 = cljs.core.seq(seq__37177_37181);if(temp__4092__auto___37190)
{var seq__37177_37191__$1 = temp__4092__auto___37190;if(cljs.core.chunked_seq_QMARK_(seq__37177_37191__$1))
{var c__4004__auto___37192 = cljs.core.chunk_first(seq__37177_37191__$1);{
var G__37193 = cljs.core.chunk_rest(seq__37177_37191__$1);
var G__37194 = c__4004__auto___37192;
var G__37195 = cljs.core.count(c__4004__auto___37192);
var G__37196 = 0;
seq__37177_37181 = G__37193;
chunk__37178_37182 = G__37194;
count__37179_37183 = G__37195;
i__37180_37184 = G__37196;
continue;
}
} else
{var n_37197 = cljs.core.first(seq__37177_37191__$1);n_37197.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__37198 = cljs.core.next(seq__37177_37191__$1);
var G__37199 = null;
var G__37200 = 0;
var G__37201 = 0;
seq__37177_37181 = G__37198;
chunk__37178_37182 = G__37199;
count__37179_37183 = G__37200;
i__37180_37184 = G__37201;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__37202){
var content = cljs.core.first(arglist__37202);
arglist__37202 = cljs.core.next(arglist__37202);
var name = cljs.core.first(arglist__37202);
var value = cljs.core.rest(arglist__37202);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__37207_37211 = cljs.core.seq(domina.nodes(content));var chunk__37208_37212 = null;var count__37209_37213 = 0;var i__37210_37214 = 0;while(true){
if((i__37210_37214 < count__37209_37213))
{var n_37215 = chunk__37208_37212.cljs$core$IIndexed$_nth$arity$2(null,i__37210_37214);n_37215.removeAttribute(cljs.core.name(name));
{
var G__37216 = seq__37207_37211;
var G__37217 = chunk__37208_37212;
var G__37218 = count__37209_37213;
var G__37219 = (i__37210_37214 + 1);
seq__37207_37211 = G__37216;
chunk__37208_37212 = G__37217;
count__37209_37213 = G__37218;
i__37210_37214 = G__37219;
continue;
}
} else
{var temp__4092__auto___37220 = cljs.core.seq(seq__37207_37211);if(temp__4092__auto___37220)
{var seq__37207_37221__$1 = temp__4092__auto___37220;if(cljs.core.chunked_seq_QMARK_(seq__37207_37221__$1))
{var c__4004__auto___37222 = cljs.core.chunk_first(seq__37207_37221__$1);{
var G__37223 = cljs.core.chunk_rest(seq__37207_37221__$1);
var G__37224 = c__4004__auto___37222;
var G__37225 = cljs.core.count(c__4004__auto___37222);
var G__37226 = 0;
seq__37207_37211 = G__37223;
chunk__37208_37212 = G__37224;
count__37209_37213 = G__37225;
i__37210_37214 = G__37226;
continue;
}
} else
{var n_37227 = cljs.core.first(seq__37207_37221__$1);n_37227.removeAttribute(cljs.core.name(name));
{
var G__37228 = cljs.core.next(seq__37207_37221__$1);
var G__37229 = null;
var G__37230 = 0;
var G__37231 = 0;
seq__37207_37211 = G__37228;
chunk__37208_37212 = G__37229;
count__37209_37213 = G__37230;
i__37210_37214 = G__37231;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__37233 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37233,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37233,1,null);if(cljs.core.truth_((function (){var and__3273__auto__ = k;if(cljs.core.truth_(and__3273__auto__))
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
{if(cljs.core.constant$keyword$129)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37234_SHARP_){var attr = attrs__$1.item(p1__37234_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__37241_37247 = cljs.core.seq(styles);var chunk__37242_37248 = null;var count__37243_37249 = 0;var i__37244_37250 = 0;while(true){
if((i__37244_37250 < count__37243_37249))
{var vec__37245_37251 = chunk__37242_37248.cljs$core$IIndexed$_nth$arity$2(null,i__37244_37250);var name_37252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37245_37251,0,null);var value_37253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37245_37251,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_37252,cljs.core.array_seq([value_37253], 0));
{
var G__37254 = seq__37241_37247;
var G__37255 = chunk__37242_37248;
var G__37256 = count__37243_37249;
var G__37257 = (i__37244_37250 + 1);
seq__37241_37247 = G__37254;
chunk__37242_37248 = G__37255;
count__37243_37249 = G__37256;
i__37244_37250 = G__37257;
continue;
}
} else
{var temp__4092__auto___37258 = cljs.core.seq(seq__37241_37247);if(temp__4092__auto___37258)
{var seq__37241_37259__$1 = temp__4092__auto___37258;if(cljs.core.chunked_seq_QMARK_(seq__37241_37259__$1))
{var c__4004__auto___37260 = cljs.core.chunk_first(seq__37241_37259__$1);{
var G__37261 = cljs.core.chunk_rest(seq__37241_37259__$1);
var G__37262 = c__4004__auto___37260;
var G__37263 = cljs.core.count(c__4004__auto___37260);
var G__37264 = 0;
seq__37241_37247 = G__37261;
chunk__37242_37248 = G__37262;
count__37243_37249 = G__37263;
i__37244_37250 = G__37264;
continue;
}
} else
{var vec__37246_37265 = cljs.core.first(seq__37241_37259__$1);var name_37266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37246_37265,0,null);var value_37267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37246_37265,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_37266,cljs.core.array_seq([value_37267], 0));
{
var G__37268 = cljs.core.next(seq__37241_37259__$1);
var G__37269 = null;
var G__37270 = 0;
var G__37271 = 0;
seq__37241_37247 = G__37268;
chunk__37242_37248 = G__37269;
count__37243_37249 = G__37270;
i__37244_37250 = G__37271;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__37278_37284 = cljs.core.seq(attrs);var chunk__37279_37285 = null;var count__37280_37286 = 0;var i__37281_37287 = 0;while(true){
if((i__37281_37287 < count__37280_37286))
{var vec__37282_37288 = chunk__37279_37285.cljs$core$IIndexed$_nth$arity$2(null,i__37281_37287);var name_37289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37282_37288,0,null);var value_37290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37282_37288,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_37289,cljs.core.array_seq([value_37290], 0));
{
var G__37291 = seq__37278_37284;
var G__37292 = chunk__37279_37285;
var G__37293 = count__37280_37286;
var G__37294 = (i__37281_37287 + 1);
seq__37278_37284 = G__37291;
chunk__37279_37285 = G__37292;
count__37280_37286 = G__37293;
i__37281_37287 = G__37294;
continue;
}
} else
{var temp__4092__auto___37295 = cljs.core.seq(seq__37278_37284);if(temp__4092__auto___37295)
{var seq__37278_37296__$1 = temp__4092__auto___37295;if(cljs.core.chunked_seq_QMARK_(seq__37278_37296__$1))
{var c__4004__auto___37297 = cljs.core.chunk_first(seq__37278_37296__$1);{
var G__37298 = cljs.core.chunk_rest(seq__37278_37296__$1);
var G__37299 = c__4004__auto___37297;
var G__37300 = cljs.core.count(c__4004__auto___37297);
var G__37301 = 0;
seq__37278_37284 = G__37298;
chunk__37279_37285 = G__37299;
count__37280_37286 = G__37300;
i__37281_37287 = G__37301;
continue;
}
} else
{var vec__37283_37302 = cljs.core.first(seq__37278_37296__$1);var name_37303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37283_37302,0,null);var value_37304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37283_37302,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_37303,cljs.core.array_seq([value_37304], 0));
{
var G__37305 = cljs.core.next(seq__37278_37296__$1);
var G__37306 = null;
var G__37307 = 0;
var G__37308 = 0;
seq__37278_37284 = G__37305;
chunk__37279_37285 = G__37306;
count__37280_37286 = G__37307;
i__37281_37287 = G__37308;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__37313_37317 = cljs.core.seq(domina.nodes(content));var chunk__37314_37318 = null;var count__37315_37319 = 0;var i__37316_37320 = 0;while(true){
if((i__37316_37320 < count__37315_37319))
{var node_37321 = chunk__37314_37318.cljs$core$IIndexed$_nth$arity$2(null,i__37316_37320);goog.dom.classes.add(node_37321,class$);
{
var G__37322 = seq__37313_37317;
var G__37323 = chunk__37314_37318;
var G__37324 = count__37315_37319;
var G__37325 = (i__37316_37320 + 1);
seq__37313_37317 = G__37322;
chunk__37314_37318 = G__37323;
count__37315_37319 = G__37324;
i__37316_37320 = G__37325;
continue;
}
} else
{var temp__4092__auto___37326 = cljs.core.seq(seq__37313_37317);if(temp__4092__auto___37326)
{var seq__37313_37327__$1 = temp__4092__auto___37326;if(cljs.core.chunked_seq_QMARK_(seq__37313_37327__$1))
{var c__4004__auto___37328 = cljs.core.chunk_first(seq__37313_37327__$1);{
var G__37329 = cljs.core.chunk_rest(seq__37313_37327__$1);
var G__37330 = c__4004__auto___37328;
var G__37331 = cljs.core.count(c__4004__auto___37328);
var G__37332 = 0;
seq__37313_37317 = G__37329;
chunk__37314_37318 = G__37330;
count__37315_37319 = G__37331;
i__37316_37320 = G__37332;
continue;
}
} else
{var node_37333 = cljs.core.first(seq__37313_37327__$1);goog.dom.classes.add(node_37333,class$);
{
var G__37334 = cljs.core.next(seq__37313_37327__$1);
var G__37335 = null;
var G__37336 = 0;
var G__37337 = 0;
seq__37313_37317 = G__37334;
chunk__37314_37318 = G__37335;
count__37315_37319 = G__37336;
i__37316_37320 = G__37337;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__37342_37346 = cljs.core.seq(domina.nodes(content));var chunk__37343_37347 = null;var count__37344_37348 = 0;var i__37345_37349 = 0;while(true){
if((i__37345_37349 < count__37344_37348))
{var node_37350 = chunk__37343_37347.cljs$core$IIndexed$_nth$arity$2(null,i__37345_37349);goog.dom.classes.remove(node_37350,class$);
{
var G__37351 = seq__37342_37346;
var G__37352 = chunk__37343_37347;
var G__37353 = count__37344_37348;
var G__37354 = (i__37345_37349 + 1);
seq__37342_37346 = G__37351;
chunk__37343_37347 = G__37352;
count__37344_37348 = G__37353;
i__37345_37349 = G__37354;
continue;
}
} else
{var temp__4092__auto___37355 = cljs.core.seq(seq__37342_37346);if(temp__4092__auto___37355)
{var seq__37342_37356__$1 = temp__4092__auto___37355;if(cljs.core.chunked_seq_QMARK_(seq__37342_37356__$1))
{var c__4004__auto___37357 = cljs.core.chunk_first(seq__37342_37356__$1);{
var G__37358 = cljs.core.chunk_rest(seq__37342_37356__$1);
var G__37359 = c__4004__auto___37357;
var G__37360 = cljs.core.count(c__4004__auto___37357);
var G__37361 = 0;
seq__37342_37346 = G__37358;
chunk__37343_37347 = G__37359;
count__37344_37348 = G__37360;
i__37345_37349 = G__37361;
continue;
}
} else
{var node_37362 = cljs.core.first(seq__37342_37356__$1);goog.dom.classes.remove(node_37362,class$);
{
var G__37363 = cljs.core.next(seq__37342_37356__$1);
var G__37364 = null;
var G__37365 = 0;
var G__37366 = 0;
seq__37342_37346 = G__37363;
chunk__37343_37347 = G__37364;
count__37344_37348 = G__37365;
i__37345_37349 = G__37366;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__37371_37375 = cljs.core.seq(domina.nodes(content));var chunk__37372_37376 = null;var count__37373_37377 = 0;var i__37374_37378 = 0;while(true){
if((i__37374_37378 < count__37373_37377))
{var node_37379 = chunk__37372_37376.cljs$core$IIndexed$_nth$arity$2(null,i__37374_37378);goog.dom.classes.toggle(node_37379,class$);
{
var G__37380 = seq__37371_37375;
var G__37381 = chunk__37372_37376;
var G__37382 = count__37373_37377;
var G__37383 = (i__37374_37378 + 1);
seq__37371_37375 = G__37380;
chunk__37372_37376 = G__37381;
count__37373_37377 = G__37382;
i__37374_37378 = G__37383;
continue;
}
} else
{var temp__4092__auto___37384 = cljs.core.seq(seq__37371_37375);if(temp__4092__auto___37384)
{var seq__37371_37385__$1 = temp__4092__auto___37384;if(cljs.core.chunked_seq_QMARK_(seq__37371_37385__$1))
{var c__4004__auto___37386 = cljs.core.chunk_first(seq__37371_37385__$1);{
var G__37387 = cljs.core.chunk_rest(seq__37371_37385__$1);
var G__37388 = c__4004__auto___37386;
var G__37389 = cljs.core.count(c__4004__auto___37386);
var G__37390 = 0;
seq__37371_37375 = G__37387;
chunk__37372_37376 = G__37388;
count__37373_37377 = G__37389;
i__37374_37378 = G__37390;
continue;
}
} else
{var node_37391 = cljs.core.first(seq__37371_37385__$1);goog.dom.classes.toggle(node_37391,class$);
{
var G__37392 = cljs.core.next(seq__37371_37385__$1);
var G__37393 = null;
var G__37394 = 0;
var G__37395 = 0;
seq__37371_37375 = G__37392;
chunk__37372_37376 = G__37393;
count__37373_37377 = G__37394;
i__37374_37378 = G__37395;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_37404__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__37400_37405 = cljs.core.seq(domina.nodes(content));var chunk__37401_37406 = null;var count__37402_37407 = 0;var i__37403_37408 = 0;while(true){
if((i__37403_37408 < count__37402_37407))
{var node_37409 = chunk__37401_37406.cljs$core$IIndexed$_nth$arity$2(null,i__37403_37408);goog.dom.classes.set(node_37409,classes_37404__$1);
{
var G__37410 = seq__37400_37405;
var G__37411 = chunk__37401_37406;
var G__37412 = count__37402_37407;
var G__37413 = (i__37403_37408 + 1);
seq__37400_37405 = G__37410;
chunk__37401_37406 = G__37411;
count__37402_37407 = G__37412;
i__37403_37408 = G__37413;
continue;
}
} else
{var temp__4092__auto___37414 = cljs.core.seq(seq__37400_37405);if(temp__4092__auto___37414)
{var seq__37400_37415__$1 = temp__4092__auto___37414;if(cljs.core.chunked_seq_QMARK_(seq__37400_37415__$1))
{var c__4004__auto___37416 = cljs.core.chunk_first(seq__37400_37415__$1);{
var G__37417 = cljs.core.chunk_rest(seq__37400_37415__$1);
var G__37418 = c__4004__auto___37416;
var G__37419 = cljs.core.count(c__4004__auto___37416);
var G__37420 = 0;
seq__37400_37405 = G__37417;
chunk__37401_37406 = G__37418;
count__37402_37407 = G__37419;
i__37403_37408 = G__37420;
continue;
}
} else
{var node_37421 = cljs.core.first(seq__37400_37415__$1);goog.dom.classes.set(node_37421,classes_37404__$1);
{
var G__37422 = cljs.core.next(seq__37400_37415__$1);
var G__37423 = null;
var G__37424 = 0;
var G__37425 = 0;
seq__37400_37405 = G__37422;
chunk__37401_37406 = G__37423;
count__37402_37407 = G__37424;
i__37403_37408 = G__37425;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__37430_37434 = cljs.core.seq(domina.nodes(content));var chunk__37431_37435 = null;var count__37432_37436 = 0;var i__37433_37437 = 0;while(true){
if((i__37433_37437 < count__37432_37436))
{var node_37438 = chunk__37431_37435.cljs$core$IIndexed$_nth$arity$2(null,i__37433_37437);goog.dom.setTextContent(node_37438,value);
{
var G__37439 = seq__37430_37434;
var G__37440 = chunk__37431_37435;
var G__37441 = count__37432_37436;
var G__37442 = (i__37433_37437 + 1);
seq__37430_37434 = G__37439;
chunk__37431_37435 = G__37440;
count__37432_37436 = G__37441;
i__37433_37437 = G__37442;
continue;
}
} else
{var temp__4092__auto___37443 = cljs.core.seq(seq__37430_37434);if(temp__4092__auto___37443)
{var seq__37430_37444__$1 = temp__4092__auto___37443;if(cljs.core.chunked_seq_QMARK_(seq__37430_37444__$1))
{var c__4004__auto___37445 = cljs.core.chunk_first(seq__37430_37444__$1);{
var G__37446 = cljs.core.chunk_rest(seq__37430_37444__$1);
var G__37447 = c__4004__auto___37445;
var G__37448 = cljs.core.count(c__4004__auto___37445);
var G__37449 = 0;
seq__37430_37434 = G__37446;
chunk__37431_37435 = G__37447;
count__37432_37436 = G__37448;
i__37433_37437 = G__37449;
continue;
}
} else
{var node_37450 = cljs.core.first(seq__37430_37444__$1);goog.dom.setTextContent(node_37450,value);
{
var G__37451 = cljs.core.next(seq__37430_37444__$1);
var G__37452 = null;
var G__37453 = 0;
var G__37454 = 0;
seq__37430_37434 = G__37451;
chunk__37431_37435 = G__37452;
count__37432_37436 = G__37453;
i__37433_37437 = G__37454;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__37459_37463 = cljs.core.seq(domina.nodes(content));var chunk__37460_37464 = null;var count__37461_37465 = 0;var i__37462_37466 = 0;while(true){
if((i__37462_37466 < count__37461_37465))
{var node_37467 = chunk__37460_37464.cljs$core$IIndexed$_nth$arity$2(null,i__37462_37466);goog.dom.forms.setValue(node_37467,value);
{
var G__37468 = seq__37459_37463;
var G__37469 = chunk__37460_37464;
var G__37470 = count__37461_37465;
var G__37471 = (i__37462_37466 + 1);
seq__37459_37463 = G__37468;
chunk__37460_37464 = G__37469;
count__37461_37465 = G__37470;
i__37462_37466 = G__37471;
continue;
}
} else
{var temp__4092__auto___37472 = cljs.core.seq(seq__37459_37463);if(temp__4092__auto___37472)
{var seq__37459_37473__$1 = temp__4092__auto___37472;if(cljs.core.chunked_seq_QMARK_(seq__37459_37473__$1))
{var c__4004__auto___37474 = cljs.core.chunk_first(seq__37459_37473__$1);{
var G__37475 = cljs.core.chunk_rest(seq__37459_37473__$1);
var G__37476 = c__4004__auto___37474;
var G__37477 = cljs.core.count(c__4004__auto___37474);
var G__37478 = 0;
seq__37459_37463 = G__37475;
chunk__37460_37464 = G__37476;
count__37461_37465 = G__37477;
i__37462_37466 = G__37478;
continue;
}
} else
{var node_37479 = cljs.core.first(seq__37459_37473__$1);goog.dom.forms.setValue(node_37479,value);
{
var G__37480 = cljs.core.next(seq__37459_37473__$1);
var G__37481 = null;
var G__37482 = 0;
var G__37483 = 0;
seq__37459_37463 = G__37480;
chunk__37460_37464 = G__37481;
count__37461_37465 = G__37482;
i__37462_37466 = G__37483;
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
{var value_37494 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__37490_37495 = cljs.core.seq(domina.nodes(content));var chunk__37491_37496 = null;var count__37492_37497 = 0;var i__37493_37498 = 0;while(true){
if((i__37493_37498 < count__37492_37497))
{var node_37499 = chunk__37491_37496.cljs$core$IIndexed$_nth$arity$2(null,i__37493_37498);node_37499.innerHTML = value_37494;
{
var G__37500 = seq__37490_37495;
var G__37501 = chunk__37491_37496;
var G__37502 = count__37492_37497;
var G__37503 = (i__37493_37498 + 1);
seq__37490_37495 = G__37500;
chunk__37491_37496 = G__37501;
count__37492_37497 = G__37502;
i__37493_37498 = G__37503;
continue;
}
} else
{var temp__4092__auto___37504 = cljs.core.seq(seq__37490_37495);if(temp__4092__auto___37504)
{var seq__37490_37505__$1 = temp__4092__auto___37504;if(cljs.core.chunked_seq_QMARK_(seq__37490_37505__$1))
{var c__4004__auto___37506 = cljs.core.chunk_first(seq__37490_37505__$1);{
var G__37507 = cljs.core.chunk_rest(seq__37490_37505__$1);
var G__37508 = c__4004__auto___37506;
var G__37509 = cljs.core.count(c__4004__auto___37506);
var G__37510 = 0;
seq__37490_37495 = G__37507;
chunk__37491_37496 = G__37508;
count__37492_37497 = G__37509;
i__37493_37498 = G__37510;
continue;
}
} else
{var node_37511 = cljs.core.first(seq__37490_37505__$1);node_37511.innerHTML = value_37494;
{
var G__37512 = cljs.core.next(seq__37490_37505__$1);
var G__37513 = null;
var G__37514 = 0;
var G__37515 = 0;
seq__37490_37495 = G__37512;
chunk__37491_37496 = G__37513;
count__37492_37497 = G__37514;
i__37493_37498 = G__37515;
continue;
}
}
} else
{}
}
break;
}
}catch (e37489){if((e37489 instanceof Error))
{var e_37516 = e37489;domina.replace_children_BANG_(content,value_37494);
} else
{if(cljs.core.constant$keyword$129)
{throw e37489;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__37523_37527 = cljs.core.seq(children);var chunk__37524_37528 = null;var count__37525_37529 = 0;var i__37526_37530 = 0;while(true){
if((i__37526_37530 < count__37525_37529))
{var child_37531 = chunk__37524_37528.cljs$core$IIndexed$_nth$arity$2(null,i__37526_37530);frag.appendChild(child_37531);
{
var G__37532 = seq__37523_37527;
var G__37533 = chunk__37524_37528;
var G__37534 = count__37525_37529;
var G__37535 = (i__37526_37530 + 1);
seq__37523_37527 = G__37532;
chunk__37524_37528 = G__37533;
count__37525_37529 = G__37534;
i__37526_37530 = G__37535;
continue;
}
} else
{var temp__4092__auto___37536 = cljs.core.seq(seq__37523_37527);if(temp__4092__auto___37536)
{var seq__37523_37537__$1 = temp__4092__auto___37536;if(cljs.core.chunked_seq_QMARK_(seq__37523_37537__$1))
{var c__4004__auto___37538 = cljs.core.chunk_first(seq__37523_37537__$1);{
var G__37539 = cljs.core.chunk_rest(seq__37523_37537__$1);
var G__37540 = c__4004__auto___37538;
var G__37541 = cljs.core.count(c__4004__auto___37538);
var G__37542 = 0;
seq__37523_37527 = G__37539;
chunk__37524_37528 = G__37540;
count__37525_37529 = G__37541;
i__37526_37530 = G__37542;
continue;
}
} else
{var child_37543 = cljs.core.first(seq__37523_37537__$1);frag.appendChild(child_37543);
{
var G__37544 = cljs.core.next(seq__37523_37537__$1);
var G__37545 = null;
var G__37546 = 0;
var G__37547 = 0;
seq__37523_37527 = G__37544;
chunk__37524_37528 = G__37545;
count__37525_37529 = G__37546;
i__37526_37530 = G__37547;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__37517_SHARP_,p2__37518_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__37517_SHARP_,p2__37518_SHARP_) : f.call(null,p1__37517_SHARP_,p2__37518_SHARP_));
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
{if((function (){var G__37549 = list_thing;if(G__37549)
{var bit__3906__auto__ = (G__37549.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3906__auto__) || (G__37549.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37549.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__37549);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__37549);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$130)
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
{if((function (){var G__37550 = content;if(G__37550)
{var bit__3906__auto__ = (G__37550.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3906__auto__) || (G__37550.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37550.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__37550);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__37550);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$130)
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
{if((function (){var G__37551 = content;if(G__37551)
{var bit__3906__auto__ = (G__37551.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3906__auto__) || (G__37551.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37551.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__37551);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__37551);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$130)
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
