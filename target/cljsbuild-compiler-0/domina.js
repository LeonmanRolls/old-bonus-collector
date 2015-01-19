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
var opt_wrapper_19777 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_19778 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_19779 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$7,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_19778,table_section_wrapper_19778,opt_wrapper_19777,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_19779,table_section_wrapper_19778,cell_wrapper_19779,opt_wrapper_19777,table_section_wrapper_19778,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_19778]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3273__auto__ = div.firstChild;if(cljs.core.truth_(and__3273__auto__))
{return div.firstChild.childNodes;
} else
{return and__3273__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__19784 = cljs.core.seq(tbody);var chunk__19785 = null;var count__19786 = 0;var i__19787 = 0;while(true){
if((i__19787 < count__19786))
{var child = chunk__19785.cljs$core$IIndexed$_nth$arity$2(null,i__19787);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19788 = seq__19784;
var G__19789 = chunk__19785;
var G__19790 = count__19786;
var G__19791 = (i__19787 + 1);
seq__19784 = G__19788;
chunk__19785 = G__19789;
count__19786 = G__19790;
i__19787 = G__19791;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__19784);if(temp__4092__auto__)
{var seq__19784__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19784__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__19784__$1);{
var G__19792 = cljs.core.chunk_rest(seq__19784__$1);
var G__19793 = c__4004__auto__;
var G__19794 = cljs.core.count(c__4004__auto__);
var G__19795 = 0;
seq__19784 = G__19792;
chunk__19785 = G__19793;
count__19786 = G__19794;
i__19787 = G__19795;
continue;
}
} else
{var child = cljs.core.first(seq__19784__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19796 = cljs.core.next(seq__19784__$1);
var G__19797 = null;
var G__19798 = 0;
var G__19799 = 0;
seq__19784 = G__19796;
chunk__19785 = G__19797;
count__19786 = G__19798;
i__19787 = G__19799;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__19801 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19801,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19801,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19801,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__19802 = wrapper.lastChild;
var G__19803 = (level - 1);
wrapper = G__19802;
level = G__19803;
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
domina.DomContent = (function (){var obj19805 = {};return obj19805;
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
log_debug.cljs$lang$applyTo = (function (arglist__19806){
var mesg = cljs.core.seq(arglist__19806);
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
log.cljs$lang$applyTo = (function (arglist__19807){
var mesg = cljs.core.seq(arglist__19807);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__19808){
var contents = cljs.core.seq(arglist__19808);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19809_SHARP_){return p1__19809_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__19810_SHARP_,p2__19811_SHARP_){return goog.dom.insertChildAt(p1__19810_SHARP_,p2__19811_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__19810_SHARP_,p2__19811_SHARP_){return goog.dom.insertChildAt(p1__19810_SHARP_,p2__19811_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__19813_SHARP_,p2__19812_SHARP_){return goog.dom.insertSiblingBefore(p2__19812_SHARP_,p1__19813_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__19813_SHARP_,p2__19812_SHARP_){return goog.dom.insertSiblingBefore(p2__19812_SHARP_,p1__19813_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__19815_SHARP_,p2__19814_SHARP_){return goog.dom.insertSiblingAfter(p2__19814_SHARP_,p1__19815_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__19815_SHARP_,p2__19814_SHARP_){return goog.dom.insertSiblingAfter(p2__19814_SHARP_,p1__19815_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__19817_SHARP_,p2__19816_SHARP_){return goog.dom.replaceNode(p2__19816_SHARP_,p1__19817_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__19817_SHARP_,p2__19816_SHARP_){return goog.dom.replaceNode(p2__19816_SHARP_,p1__19817_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__19822_19826 = cljs.core.seq(domina.nodes(content));var chunk__19823_19827 = null;var count__19824_19828 = 0;var i__19825_19829 = 0;while(true){
if((i__19825_19829 < count__19824_19828))
{var n_19830 = chunk__19823_19827.cljs$core$IIndexed$_nth$arity$2(null,i__19825_19829);goog.style.setStyle(n_19830,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__19831 = seq__19822_19826;
var G__19832 = chunk__19823_19827;
var G__19833 = count__19824_19828;
var G__19834 = (i__19825_19829 + 1);
seq__19822_19826 = G__19831;
chunk__19823_19827 = G__19832;
count__19824_19828 = G__19833;
i__19825_19829 = G__19834;
continue;
}
} else
{var temp__4092__auto___19835 = cljs.core.seq(seq__19822_19826);if(temp__4092__auto___19835)
{var seq__19822_19836__$1 = temp__4092__auto___19835;if(cljs.core.chunked_seq_QMARK_(seq__19822_19836__$1))
{var c__4004__auto___19837 = cljs.core.chunk_first(seq__19822_19836__$1);{
var G__19838 = cljs.core.chunk_rest(seq__19822_19836__$1);
var G__19839 = c__4004__auto___19837;
var G__19840 = cljs.core.count(c__4004__auto___19837);
var G__19841 = 0;
seq__19822_19826 = G__19838;
chunk__19823_19827 = G__19839;
count__19824_19828 = G__19840;
i__19825_19829 = G__19841;
continue;
}
} else
{var n_19842 = cljs.core.first(seq__19822_19836__$1);goog.style.setStyle(n_19842,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__19843 = cljs.core.next(seq__19822_19836__$1);
var G__19844 = null;
var G__19845 = 0;
var G__19846 = 0;
seq__19822_19826 = G__19843;
chunk__19823_19827 = G__19844;
count__19824_19828 = G__19845;
i__19825_19829 = G__19846;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19847){
var content = cljs.core.first(arglist__19847);
arglist__19847 = cljs.core.next(arglist__19847);
var name = cljs.core.first(arglist__19847);
var value = cljs.core.rest(arglist__19847);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__19852_19856 = cljs.core.seq(domina.nodes(content));var chunk__19853_19857 = null;var count__19854_19858 = 0;var i__19855_19859 = 0;while(true){
if((i__19855_19859 < count__19854_19858))
{var n_19860 = chunk__19853_19857.cljs$core$IIndexed$_nth$arity$2(null,i__19855_19859);n_19860.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__19861 = seq__19852_19856;
var G__19862 = chunk__19853_19857;
var G__19863 = count__19854_19858;
var G__19864 = (i__19855_19859 + 1);
seq__19852_19856 = G__19861;
chunk__19853_19857 = G__19862;
count__19854_19858 = G__19863;
i__19855_19859 = G__19864;
continue;
}
} else
{var temp__4092__auto___19865 = cljs.core.seq(seq__19852_19856);if(temp__4092__auto___19865)
{var seq__19852_19866__$1 = temp__4092__auto___19865;if(cljs.core.chunked_seq_QMARK_(seq__19852_19866__$1))
{var c__4004__auto___19867 = cljs.core.chunk_first(seq__19852_19866__$1);{
var G__19868 = cljs.core.chunk_rest(seq__19852_19866__$1);
var G__19869 = c__4004__auto___19867;
var G__19870 = cljs.core.count(c__4004__auto___19867);
var G__19871 = 0;
seq__19852_19856 = G__19868;
chunk__19853_19857 = G__19869;
count__19854_19858 = G__19870;
i__19855_19859 = G__19871;
continue;
}
} else
{var n_19872 = cljs.core.first(seq__19852_19866__$1);n_19872.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__19873 = cljs.core.next(seq__19852_19866__$1);
var G__19874 = null;
var G__19875 = 0;
var G__19876 = 0;
seq__19852_19856 = G__19873;
chunk__19853_19857 = G__19874;
count__19854_19858 = G__19875;
i__19855_19859 = G__19876;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__19877){
var content = cljs.core.first(arglist__19877);
arglist__19877 = cljs.core.next(arglist__19877);
var name = cljs.core.first(arglist__19877);
var value = cljs.core.rest(arglist__19877);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__19882_19886 = cljs.core.seq(domina.nodes(content));var chunk__19883_19887 = null;var count__19884_19888 = 0;var i__19885_19889 = 0;while(true){
if((i__19885_19889 < count__19884_19888))
{var n_19890 = chunk__19883_19887.cljs$core$IIndexed$_nth$arity$2(null,i__19885_19889);n_19890.removeAttribute(cljs.core.name(name));
{
var G__19891 = seq__19882_19886;
var G__19892 = chunk__19883_19887;
var G__19893 = count__19884_19888;
var G__19894 = (i__19885_19889 + 1);
seq__19882_19886 = G__19891;
chunk__19883_19887 = G__19892;
count__19884_19888 = G__19893;
i__19885_19889 = G__19894;
continue;
}
} else
{var temp__4092__auto___19895 = cljs.core.seq(seq__19882_19886);if(temp__4092__auto___19895)
{var seq__19882_19896__$1 = temp__4092__auto___19895;if(cljs.core.chunked_seq_QMARK_(seq__19882_19896__$1))
{var c__4004__auto___19897 = cljs.core.chunk_first(seq__19882_19896__$1);{
var G__19898 = cljs.core.chunk_rest(seq__19882_19896__$1);
var G__19899 = c__4004__auto___19897;
var G__19900 = cljs.core.count(c__4004__auto___19897);
var G__19901 = 0;
seq__19882_19886 = G__19898;
chunk__19883_19887 = G__19899;
count__19884_19888 = G__19900;
i__19885_19889 = G__19901;
continue;
}
} else
{var n_19902 = cljs.core.first(seq__19882_19896__$1);n_19902.removeAttribute(cljs.core.name(name));
{
var G__19903 = cljs.core.next(seq__19882_19896__$1);
var G__19904 = null;
var G__19905 = 0;
var G__19906 = 0;
seq__19882_19886 = G__19903;
chunk__19883_19887 = G__19904;
count__19884_19888 = G__19905;
i__19885_19889 = G__19906;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__19908 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19908,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19908,1,null);if(cljs.core.truth_((function (){var and__3273__auto__ = k;if(cljs.core.truth_(and__3273__auto__))
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
{if(cljs.core.constant$keyword$6)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19909_SHARP_){var attr = attrs__$1.item(p1__19909_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__19916_19922 = cljs.core.seq(styles);var chunk__19917_19923 = null;var count__19918_19924 = 0;var i__19919_19925 = 0;while(true){
if((i__19919_19925 < count__19918_19924))
{var vec__19920_19926 = chunk__19917_19923.cljs$core$IIndexed$_nth$arity$2(null,i__19919_19925);var name_19927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19920_19926,0,null);var value_19928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19920_19926,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_19927,cljs.core.array_seq([value_19928], 0));
{
var G__19929 = seq__19916_19922;
var G__19930 = chunk__19917_19923;
var G__19931 = count__19918_19924;
var G__19932 = (i__19919_19925 + 1);
seq__19916_19922 = G__19929;
chunk__19917_19923 = G__19930;
count__19918_19924 = G__19931;
i__19919_19925 = G__19932;
continue;
}
} else
{var temp__4092__auto___19933 = cljs.core.seq(seq__19916_19922);if(temp__4092__auto___19933)
{var seq__19916_19934__$1 = temp__4092__auto___19933;if(cljs.core.chunked_seq_QMARK_(seq__19916_19934__$1))
{var c__4004__auto___19935 = cljs.core.chunk_first(seq__19916_19934__$1);{
var G__19936 = cljs.core.chunk_rest(seq__19916_19934__$1);
var G__19937 = c__4004__auto___19935;
var G__19938 = cljs.core.count(c__4004__auto___19935);
var G__19939 = 0;
seq__19916_19922 = G__19936;
chunk__19917_19923 = G__19937;
count__19918_19924 = G__19938;
i__19919_19925 = G__19939;
continue;
}
} else
{var vec__19921_19940 = cljs.core.first(seq__19916_19934__$1);var name_19941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19921_19940,0,null);var value_19942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19921_19940,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_19941,cljs.core.array_seq([value_19942], 0));
{
var G__19943 = cljs.core.next(seq__19916_19934__$1);
var G__19944 = null;
var G__19945 = 0;
var G__19946 = 0;
seq__19916_19922 = G__19943;
chunk__19917_19923 = G__19944;
count__19918_19924 = G__19945;
i__19919_19925 = G__19946;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__19953_19959 = cljs.core.seq(attrs);var chunk__19954_19960 = null;var count__19955_19961 = 0;var i__19956_19962 = 0;while(true){
if((i__19956_19962 < count__19955_19961))
{var vec__19957_19963 = chunk__19954_19960.cljs$core$IIndexed$_nth$arity$2(null,i__19956_19962);var name_19964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19957_19963,0,null);var value_19965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19957_19963,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_19964,cljs.core.array_seq([value_19965], 0));
{
var G__19966 = seq__19953_19959;
var G__19967 = chunk__19954_19960;
var G__19968 = count__19955_19961;
var G__19969 = (i__19956_19962 + 1);
seq__19953_19959 = G__19966;
chunk__19954_19960 = G__19967;
count__19955_19961 = G__19968;
i__19956_19962 = G__19969;
continue;
}
} else
{var temp__4092__auto___19970 = cljs.core.seq(seq__19953_19959);if(temp__4092__auto___19970)
{var seq__19953_19971__$1 = temp__4092__auto___19970;if(cljs.core.chunked_seq_QMARK_(seq__19953_19971__$1))
{var c__4004__auto___19972 = cljs.core.chunk_first(seq__19953_19971__$1);{
var G__19973 = cljs.core.chunk_rest(seq__19953_19971__$1);
var G__19974 = c__4004__auto___19972;
var G__19975 = cljs.core.count(c__4004__auto___19972);
var G__19976 = 0;
seq__19953_19959 = G__19973;
chunk__19954_19960 = G__19974;
count__19955_19961 = G__19975;
i__19956_19962 = G__19976;
continue;
}
} else
{var vec__19958_19977 = cljs.core.first(seq__19953_19971__$1);var name_19978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19958_19977,0,null);var value_19979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19958_19977,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_19978,cljs.core.array_seq([value_19979], 0));
{
var G__19980 = cljs.core.next(seq__19953_19971__$1);
var G__19981 = null;
var G__19982 = 0;
var G__19983 = 0;
seq__19953_19959 = G__19980;
chunk__19954_19960 = G__19981;
count__19955_19961 = G__19982;
i__19956_19962 = G__19983;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__19988_19992 = cljs.core.seq(domina.nodes(content));var chunk__19989_19993 = null;var count__19990_19994 = 0;var i__19991_19995 = 0;while(true){
if((i__19991_19995 < count__19990_19994))
{var node_19996 = chunk__19989_19993.cljs$core$IIndexed$_nth$arity$2(null,i__19991_19995);goog.dom.classes.add(node_19996,class$);
{
var G__19997 = seq__19988_19992;
var G__19998 = chunk__19989_19993;
var G__19999 = count__19990_19994;
var G__20000 = (i__19991_19995 + 1);
seq__19988_19992 = G__19997;
chunk__19989_19993 = G__19998;
count__19990_19994 = G__19999;
i__19991_19995 = G__20000;
continue;
}
} else
{var temp__4092__auto___20001 = cljs.core.seq(seq__19988_19992);if(temp__4092__auto___20001)
{var seq__19988_20002__$1 = temp__4092__auto___20001;if(cljs.core.chunked_seq_QMARK_(seq__19988_20002__$1))
{var c__4004__auto___20003 = cljs.core.chunk_first(seq__19988_20002__$1);{
var G__20004 = cljs.core.chunk_rest(seq__19988_20002__$1);
var G__20005 = c__4004__auto___20003;
var G__20006 = cljs.core.count(c__4004__auto___20003);
var G__20007 = 0;
seq__19988_19992 = G__20004;
chunk__19989_19993 = G__20005;
count__19990_19994 = G__20006;
i__19991_19995 = G__20007;
continue;
}
} else
{var node_20008 = cljs.core.first(seq__19988_20002__$1);goog.dom.classes.add(node_20008,class$);
{
var G__20009 = cljs.core.next(seq__19988_20002__$1);
var G__20010 = null;
var G__20011 = 0;
var G__20012 = 0;
seq__19988_19992 = G__20009;
chunk__19989_19993 = G__20010;
count__19990_19994 = G__20011;
i__19991_19995 = G__20012;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__20017_20021 = cljs.core.seq(domina.nodes(content));var chunk__20018_20022 = null;var count__20019_20023 = 0;var i__20020_20024 = 0;while(true){
if((i__20020_20024 < count__20019_20023))
{var node_20025 = chunk__20018_20022.cljs$core$IIndexed$_nth$arity$2(null,i__20020_20024);goog.dom.classes.remove(node_20025,class$);
{
var G__20026 = seq__20017_20021;
var G__20027 = chunk__20018_20022;
var G__20028 = count__20019_20023;
var G__20029 = (i__20020_20024 + 1);
seq__20017_20021 = G__20026;
chunk__20018_20022 = G__20027;
count__20019_20023 = G__20028;
i__20020_20024 = G__20029;
continue;
}
} else
{var temp__4092__auto___20030 = cljs.core.seq(seq__20017_20021);if(temp__4092__auto___20030)
{var seq__20017_20031__$1 = temp__4092__auto___20030;if(cljs.core.chunked_seq_QMARK_(seq__20017_20031__$1))
{var c__4004__auto___20032 = cljs.core.chunk_first(seq__20017_20031__$1);{
var G__20033 = cljs.core.chunk_rest(seq__20017_20031__$1);
var G__20034 = c__4004__auto___20032;
var G__20035 = cljs.core.count(c__4004__auto___20032);
var G__20036 = 0;
seq__20017_20021 = G__20033;
chunk__20018_20022 = G__20034;
count__20019_20023 = G__20035;
i__20020_20024 = G__20036;
continue;
}
} else
{var node_20037 = cljs.core.first(seq__20017_20031__$1);goog.dom.classes.remove(node_20037,class$);
{
var G__20038 = cljs.core.next(seq__20017_20031__$1);
var G__20039 = null;
var G__20040 = 0;
var G__20041 = 0;
seq__20017_20021 = G__20038;
chunk__20018_20022 = G__20039;
count__20019_20023 = G__20040;
i__20020_20024 = G__20041;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__20046_20050 = cljs.core.seq(domina.nodes(content));var chunk__20047_20051 = null;var count__20048_20052 = 0;var i__20049_20053 = 0;while(true){
if((i__20049_20053 < count__20048_20052))
{var node_20054 = chunk__20047_20051.cljs$core$IIndexed$_nth$arity$2(null,i__20049_20053);goog.dom.classes.toggle(node_20054,class$);
{
var G__20055 = seq__20046_20050;
var G__20056 = chunk__20047_20051;
var G__20057 = count__20048_20052;
var G__20058 = (i__20049_20053 + 1);
seq__20046_20050 = G__20055;
chunk__20047_20051 = G__20056;
count__20048_20052 = G__20057;
i__20049_20053 = G__20058;
continue;
}
} else
{var temp__4092__auto___20059 = cljs.core.seq(seq__20046_20050);if(temp__4092__auto___20059)
{var seq__20046_20060__$1 = temp__4092__auto___20059;if(cljs.core.chunked_seq_QMARK_(seq__20046_20060__$1))
{var c__4004__auto___20061 = cljs.core.chunk_first(seq__20046_20060__$1);{
var G__20062 = cljs.core.chunk_rest(seq__20046_20060__$1);
var G__20063 = c__4004__auto___20061;
var G__20064 = cljs.core.count(c__4004__auto___20061);
var G__20065 = 0;
seq__20046_20050 = G__20062;
chunk__20047_20051 = G__20063;
count__20048_20052 = G__20064;
i__20049_20053 = G__20065;
continue;
}
} else
{var node_20066 = cljs.core.first(seq__20046_20060__$1);goog.dom.classes.toggle(node_20066,class$);
{
var G__20067 = cljs.core.next(seq__20046_20060__$1);
var G__20068 = null;
var G__20069 = 0;
var G__20070 = 0;
seq__20046_20050 = G__20067;
chunk__20047_20051 = G__20068;
count__20048_20052 = G__20069;
i__20049_20053 = G__20070;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_20079__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__20075_20080 = cljs.core.seq(domina.nodes(content));var chunk__20076_20081 = null;var count__20077_20082 = 0;var i__20078_20083 = 0;while(true){
if((i__20078_20083 < count__20077_20082))
{var node_20084 = chunk__20076_20081.cljs$core$IIndexed$_nth$arity$2(null,i__20078_20083);goog.dom.classes.set(node_20084,classes_20079__$1);
{
var G__20085 = seq__20075_20080;
var G__20086 = chunk__20076_20081;
var G__20087 = count__20077_20082;
var G__20088 = (i__20078_20083 + 1);
seq__20075_20080 = G__20085;
chunk__20076_20081 = G__20086;
count__20077_20082 = G__20087;
i__20078_20083 = G__20088;
continue;
}
} else
{var temp__4092__auto___20089 = cljs.core.seq(seq__20075_20080);if(temp__4092__auto___20089)
{var seq__20075_20090__$1 = temp__4092__auto___20089;if(cljs.core.chunked_seq_QMARK_(seq__20075_20090__$1))
{var c__4004__auto___20091 = cljs.core.chunk_first(seq__20075_20090__$1);{
var G__20092 = cljs.core.chunk_rest(seq__20075_20090__$1);
var G__20093 = c__4004__auto___20091;
var G__20094 = cljs.core.count(c__4004__auto___20091);
var G__20095 = 0;
seq__20075_20080 = G__20092;
chunk__20076_20081 = G__20093;
count__20077_20082 = G__20094;
i__20078_20083 = G__20095;
continue;
}
} else
{var node_20096 = cljs.core.first(seq__20075_20090__$1);goog.dom.classes.set(node_20096,classes_20079__$1);
{
var G__20097 = cljs.core.next(seq__20075_20090__$1);
var G__20098 = null;
var G__20099 = 0;
var G__20100 = 0;
seq__20075_20080 = G__20097;
chunk__20076_20081 = G__20098;
count__20077_20082 = G__20099;
i__20078_20083 = G__20100;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__20105_20109 = cljs.core.seq(domina.nodes(content));var chunk__20106_20110 = null;var count__20107_20111 = 0;var i__20108_20112 = 0;while(true){
if((i__20108_20112 < count__20107_20111))
{var node_20113 = chunk__20106_20110.cljs$core$IIndexed$_nth$arity$2(null,i__20108_20112);goog.dom.setTextContent(node_20113,value);
{
var G__20114 = seq__20105_20109;
var G__20115 = chunk__20106_20110;
var G__20116 = count__20107_20111;
var G__20117 = (i__20108_20112 + 1);
seq__20105_20109 = G__20114;
chunk__20106_20110 = G__20115;
count__20107_20111 = G__20116;
i__20108_20112 = G__20117;
continue;
}
} else
{var temp__4092__auto___20118 = cljs.core.seq(seq__20105_20109);if(temp__4092__auto___20118)
{var seq__20105_20119__$1 = temp__4092__auto___20118;if(cljs.core.chunked_seq_QMARK_(seq__20105_20119__$1))
{var c__4004__auto___20120 = cljs.core.chunk_first(seq__20105_20119__$1);{
var G__20121 = cljs.core.chunk_rest(seq__20105_20119__$1);
var G__20122 = c__4004__auto___20120;
var G__20123 = cljs.core.count(c__4004__auto___20120);
var G__20124 = 0;
seq__20105_20109 = G__20121;
chunk__20106_20110 = G__20122;
count__20107_20111 = G__20123;
i__20108_20112 = G__20124;
continue;
}
} else
{var node_20125 = cljs.core.first(seq__20105_20119__$1);goog.dom.setTextContent(node_20125,value);
{
var G__20126 = cljs.core.next(seq__20105_20119__$1);
var G__20127 = null;
var G__20128 = 0;
var G__20129 = 0;
seq__20105_20109 = G__20126;
chunk__20106_20110 = G__20127;
count__20107_20111 = G__20128;
i__20108_20112 = G__20129;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__20134_20138 = cljs.core.seq(domina.nodes(content));var chunk__20135_20139 = null;var count__20136_20140 = 0;var i__20137_20141 = 0;while(true){
if((i__20137_20141 < count__20136_20140))
{var node_20142 = chunk__20135_20139.cljs$core$IIndexed$_nth$arity$2(null,i__20137_20141);goog.dom.forms.setValue(node_20142,value);
{
var G__20143 = seq__20134_20138;
var G__20144 = chunk__20135_20139;
var G__20145 = count__20136_20140;
var G__20146 = (i__20137_20141 + 1);
seq__20134_20138 = G__20143;
chunk__20135_20139 = G__20144;
count__20136_20140 = G__20145;
i__20137_20141 = G__20146;
continue;
}
} else
{var temp__4092__auto___20147 = cljs.core.seq(seq__20134_20138);if(temp__4092__auto___20147)
{var seq__20134_20148__$1 = temp__4092__auto___20147;if(cljs.core.chunked_seq_QMARK_(seq__20134_20148__$1))
{var c__4004__auto___20149 = cljs.core.chunk_first(seq__20134_20148__$1);{
var G__20150 = cljs.core.chunk_rest(seq__20134_20148__$1);
var G__20151 = c__4004__auto___20149;
var G__20152 = cljs.core.count(c__4004__auto___20149);
var G__20153 = 0;
seq__20134_20138 = G__20150;
chunk__20135_20139 = G__20151;
count__20136_20140 = G__20152;
i__20137_20141 = G__20153;
continue;
}
} else
{var node_20154 = cljs.core.first(seq__20134_20148__$1);goog.dom.forms.setValue(node_20154,value);
{
var G__20155 = cljs.core.next(seq__20134_20148__$1);
var G__20156 = null;
var G__20157 = 0;
var G__20158 = 0;
seq__20134_20138 = G__20155;
chunk__20135_20139 = G__20156;
count__20136_20140 = G__20157;
i__20137_20141 = G__20158;
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
{var value_20169 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__20165_20170 = cljs.core.seq(domina.nodes(content));var chunk__20166_20171 = null;var count__20167_20172 = 0;var i__20168_20173 = 0;while(true){
if((i__20168_20173 < count__20167_20172))
{var node_20174 = chunk__20166_20171.cljs$core$IIndexed$_nth$arity$2(null,i__20168_20173);node_20174.innerHTML = value_20169;
{
var G__20175 = seq__20165_20170;
var G__20176 = chunk__20166_20171;
var G__20177 = count__20167_20172;
var G__20178 = (i__20168_20173 + 1);
seq__20165_20170 = G__20175;
chunk__20166_20171 = G__20176;
count__20167_20172 = G__20177;
i__20168_20173 = G__20178;
continue;
}
} else
{var temp__4092__auto___20179 = cljs.core.seq(seq__20165_20170);if(temp__4092__auto___20179)
{var seq__20165_20180__$1 = temp__4092__auto___20179;if(cljs.core.chunked_seq_QMARK_(seq__20165_20180__$1))
{var c__4004__auto___20181 = cljs.core.chunk_first(seq__20165_20180__$1);{
var G__20182 = cljs.core.chunk_rest(seq__20165_20180__$1);
var G__20183 = c__4004__auto___20181;
var G__20184 = cljs.core.count(c__4004__auto___20181);
var G__20185 = 0;
seq__20165_20170 = G__20182;
chunk__20166_20171 = G__20183;
count__20167_20172 = G__20184;
i__20168_20173 = G__20185;
continue;
}
} else
{var node_20186 = cljs.core.first(seq__20165_20180__$1);node_20186.innerHTML = value_20169;
{
var G__20187 = cljs.core.next(seq__20165_20180__$1);
var G__20188 = null;
var G__20189 = 0;
var G__20190 = 0;
seq__20165_20170 = G__20187;
chunk__20166_20171 = G__20188;
count__20167_20172 = G__20189;
i__20168_20173 = G__20190;
continue;
}
}
} else
{}
}
break;
}
}catch (e20164){if((e20164 instanceof Error))
{var e_20191 = e20164;domina.replace_children_BANG_(content,value_20169);
} else
{if(cljs.core.constant$keyword$6)
{throw e20164;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__20198_20202 = cljs.core.seq(children);var chunk__20199_20203 = null;var count__20200_20204 = 0;var i__20201_20205 = 0;while(true){
if((i__20201_20205 < count__20200_20204))
{var child_20206 = chunk__20199_20203.cljs$core$IIndexed$_nth$arity$2(null,i__20201_20205);frag.appendChild(child_20206);
{
var G__20207 = seq__20198_20202;
var G__20208 = chunk__20199_20203;
var G__20209 = count__20200_20204;
var G__20210 = (i__20201_20205 + 1);
seq__20198_20202 = G__20207;
chunk__20199_20203 = G__20208;
count__20200_20204 = G__20209;
i__20201_20205 = G__20210;
continue;
}
} else
{var temp__4092__auto___20211 = cljs.core.seq(seq__20198_20202);if(temp__4092__auto___20211)
{var seq__20198_20212__$1 = temp__4092__auto___20211;if(cljs.core.chunked_seq_QMARK_(seq__20198_20212__$1))
{var c__4004__auto___20213 = cljs.core.chunk_first(seq__20198_20212__$1);{
var G__20214 = cljs.core.chunk_rest(seq__20198_20212__$1);
var G__20215 = c__4004__auto___20213;
var G__20216 = cljs.core.count(c__4004__auto___20213);
var G__20217 = 0;
seq__20198_20202 = G__20214;
chunk__20199_20203 = G__20215;
count__20200_20204 = G__20216;
i__20201_20205 = G__20217;
continue;
}
} else
{var child_20218 = cljs.core.first(seq__20198_20212__$1);frag.appendChild(child_20218);
{
var G__20219 = cljs.core.next(seq__20198_20212__$1);
var G__20220 = null;
var G__20221 = 0;
var G__20222 = 0;
seq__20198_20202 = G__20219;
chunk__20199_20203 = G__20220;
count__20200_20204 = G__20221;
i__20201_20205 = G__20222;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__20192_SHARP_,p2__20193_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__20192_SHARP_,p2__20193_SHARP_) : f.call(null,p1__20192_SHARP_,p2__20193_SHARP_));
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
{if((function (){var G__20224 = list_thing;if(G__20224)
{var bit__3906__auto__ = (G__20224.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3906__auto__) || (G__20224.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20224.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__20224);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__20224);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$7)
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
{if((function (){var G__20225 = content;if(G__20225)
{var bit__3906__auto__ = (G__20225.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3906__auto__) || (G__20225.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20225.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__20225);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__20225);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$7)
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
{if((function (){var G__20226 = content;if(G__20226)
{var bit__3906__auto__ = (G__20226.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3906__auto__) || (G__20226.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20226.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__20226);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__20226);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$7)
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
