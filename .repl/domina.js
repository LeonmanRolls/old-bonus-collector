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
var opt_wrapper_22703 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_22704 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_22705 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_22704,table_section_wrapper_22704,opt_wrapper_22703,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_22705,table_section_wrapper_22704,cell_wrapper_22705,opt_wrapper_22703,table_section_wrapper_22704,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_22704]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__4777__auto__ = div.firstChild;if(cljs.core.truth_(and__4777__auto__))
{return div.firstChild.childNodes;
} else
{return and__4777__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__22710 = cljs.core.seq.call(null,tbody);var chunk__22711 = null;var count__22712 = 0;var i__22713 = 0;while(true){
if((i__22713 < count__22712))
{var child = cljs.core._nth.call(null,chunk__22711,i__22713);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__22714 = seq__22710;
var G__22715 = chunk__22711;
var G__22716 = count__22712;
var G__22717 = (i__22713 + 1);
seq__22710 = G__22714;
chunk__22711 = G__22715;
count__22712 = G__22716;
i__22713 = G__22717;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__22710);if(temp__4092__auto__)
{var seq__22710__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22710__$1))
{var c__5508__auto__ = cljs.core.chunk_first.call(null,seq__22710__$1);{
var G__22718 = cljs.core.chunk_rest.call(null,seq__22710__$1);
var G__22719 = c__5508__auto__;
var G__22720 = cljs.core.count.call(null,c__5508__auto__);
var G__22721 = 0;
seq__22710 = G__22718;
chunk__22711 = G__22719;
count__22712 = G__22720;
i__22713 = G__22721;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__22710__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__22722 = cljs.core.next.call(null,seq__22710__$1);
var G__22723 = null;
var G__22724 = 0;
var G__22725 = 0;
seq__22710 = G__22722;
chunk__22711 = G__22723;
count__22712 = G__22724;
i__22713 = G__22725;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__22727 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__22727,0,null);var start_wrap = cljs.core.nth.call(null,vec__22727,1,null);var end_wrap = cljs.core.nth.call(null,vec__22727,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__22728 = wrapper.lastChild;
var G__22729 = (level - 1);
wrapper = G__22728;
level = G__22729;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__4777__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__4777__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__4777__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj22731 = {};return obj22731;
})();
domina.nodes = (function nodes(content){if((function (){var and__4777__auto__ = content;if(and__4777__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__4777__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__5387__auto__ = (((content == null))?null:content);return (function (){var or__4789__auto__ = (domina.nodes[goog.typeOf(x__5387__auto__)]);if(or__4789__auto__)
{return or__4789__auto__;
} else
{var or__4789__auto____$1 = (domina.nodes["_"]);if(or__4789__auto____$1)
{return or__4789__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__4777__auto__ = nodeseq;if(and__4777__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__4777__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__5387__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__4789__auto__ = (domina.single_node[goog.typeOf(x__5387__auto__)]);if(or__4789__auto__)
{return or__4789__auto__;
} else
{var or__4789__auto____$1 = (domina.single_node["_"]);if(or__4789__auto____$1)
{return or__4789__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__4777__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__4777__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__4777__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__22732){
var mesg = cljs.core.seq(arglist__22732);
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
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__22733){
var mesg = cljs.core.seq(arglist__22733);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__22734){
var contents = cljs.core.seq(arglist__22734);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__22735_SHARP_){return p1__22735_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__22736_SHARP_,p2__22737_SHARP_){return goog.dom.insertChildAt(p1__22736_SHARP_,p2__22737_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__22739_SHARP_,p2__22738_SHARP_){return goog.dom.insertSiblingBefore(p2__22738_SHARP_,p1__22739_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__22741_SHARP_,p2__22740_SHARP_){return goog.dom.insertSiblingAfter(p2__22740_SHARP_,p1__22741_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__22743_SHARP_,p2__22742_SHARP_){return goog.dom.replaceNode(p2__22742_SHARP_,p1__22743_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__22748_22752 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__22749_22753 = null;var count__22750_22754 = 0;var i__22751_22755 = 0;while(true){
if((i__22751_22755 < count__22750_22754))
{var n_22756 = cljs.core._nth.call(null,chunk__22749_22753,i__22751_22755);goog.style.setStyle(n_22756,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__22757 = seq__22748_22752;
var G__22758 = chunk__22749_22753;
var G__22759 = count__22750_22754;
var G__22760 = (i__22751_22755 + 1);
seq__22748_22752 = G__22757;
chunk__22749_22753 = G__22758;
count__22750_22754 = G__22759;
i__22751_22755 = G__22760;
continue;
}
} else
{var temp__4092__auto___22761 = cljs.core.seq.call(null,seq__22748_22752);if(temp__4092__auto___22761)
{var seq__22748_22762__$1 = temp__4092__auto___22761;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22748_22762__$1))
{var c__5508__auto___22763 = cljs.core.chunk_first.call(null,seq__22748_22762__$1);{
var G__22764 = cljs.core.chunk_rest.call(null,seq__22748_22762__$1);
var G__22765 = c__5508__auto___22763;
var G__22766 = cljs.core.count.call(null,c__5508__auto___22763);
var G__22767 = 0;
seq__22748_22752 = G__22764;
chunk__22749_22753 = G__22765;
count__22750_22754 = G__22766;
i__22751_22755 = G__22767;
continue;
}
} else
{var n_22768 = cljs.core.first.call(null,seq__22748_22762__$1);goog.style.setStyle(n_22768,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__22769 = cljs.core.next.call(null,seq__22748_22762__$1);
var G__22770 = null;
var G__22771 = 0;
var G__22772 = 0;
seq__22748_22752 = G__22769;
chunk__22749_22753 = G__22770;
count__22750_22754 = G__22771;
i__22751_22755 = G__22772;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__22773){
var content = cljs.core.first(arglist__22773);
arglist__22773 = cljs.core.next(arglist__22773);
var name = cljs.core.first(arglist__22773);
var value = cljs.core.rest(arglist__22773);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__22778_22782 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__22779_22783 = null;var count__22780_22784 = 0;var i__22781_22785 = 0;while(true){
if((i__22781_22785 < count__22780_22784))
{var n_22786 = cljs.core._nth.call(null,chunk__22779_22783,i__22781_22785);n_22786.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__22787 = seq__22778_22782;
var G__22788 = chunk__22779_22783;
var G__22789 = count__22780_22784;
var G__22790 = (i__22781_22785 + 1);
seq__22778_22782 = G__22787;
chunk__22779_22783 = G__22788;
count__22780_22784 = G__22789;
i__22781_22785 = G__22790;
continue;
}
} else
{var temp__4092__auto___22791 = cljs.core.seq.call(null,seq__22778_22782);if(temp__4092__auto___22791)
{var seq__22778_22792__$1 = temp__4092__auto___22791;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22778_22792__$1))
{var c__5508__auto___22793 = cljs.core.chunk_first.call(null,seq__22778_22792__$1);{
var G__22794 = cljs.core.chunk_rest.call(null,seq__22778_22792__$1);
var G__22795 = c__5508__auto___22793;
var G__22796 = cljs.core.count.call(null,c__5508__auto___22793);
var G__22797 = 0;
seq__22778_22782 = G__22794;
chunk__22779_22783 = G__22795;
count__22780_22784 = G__22796;
i__22781_22785 = G__22797;
continue;
}
} else
{var n_22798 = cljs.core.first.call(null,seq__22778_22792__$1);n_22798.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__22799 = cljs.core.next.call(null,seq__22778_22792__$1);
var G__22800 = null;
var G__22801 = 0;
var G__22802 = 0;
seq__22778_22782 = G__22799;
chunk__22779_22783 = G__22800;
count__22780_22784 = G__22801;
i__22781_22785 = G__22802;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__22803){
var content = cljs.core.first(arglist__22803);
arglist__22803 = cljs.core.next(arglist__22803);
var name = cljs.core.first(arglist__22803);
var value = cljs.core.rest(arglist__22803);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__22808_22812 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__22809_22813 = null;var count__22810_22814 = 0;var i__22811_22815 = 0;while(true){
if((i__22811_22815 < count__22810_22814))
{var n_22816 = cljs.core._nth.call(null,chunk__22809_22813,i__22811_22815);n_22816.removeAttribute(cljs.core.name.call(null,name));
{
var G__22817 = seq__22808_22812;
var G__22818 = chunk__22809_22813;
var G__22819 = count__22810_22814;
var G__22820 = (i__22811_22815 + 1);
seq__22808_22812 = G__22817;
chunk__22809_22813 = G__22818;
count__22810_22814 = G__22819;
i__22811_22815 = G__22820;
continue;
}
} else
{var temp__4092__auto___22821 = cljs.core.seq.call(null,seq__22808_22812);if(temp__4092__auto___22821)
{var seq__22808_22822__$1 = temp__4092__auto___22821;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22808_22822__$1))
{var c__5508__auto___22823 = cljs.core.chunk_first.call(null,seq__22808_22822__$1);{
var G__22824 = cljs.core.chunk_rest.call(null,seq__22808_22822__$1);
var G__22825 = c__5508__auto___22823;
var G__22826 = cljs.core.count.call(null,c__5508__auto___22823);
var G__22827 = 0;
seq__22808_22812 = G__22824;
chunk__22809_22813 = G__22825;
count__22810_22814 = G__22826;
i__22811_22815 = G__22827;
continue;
}
} else
{var n_22828 = cljs.core.first.call(null,seq__22808_22822__$1);n_22828.removeAttribute(cljs.core.name.call(null,name));
{
var G__22829 = cljs.core.next.call(null,seq__22808_22822__$1);
var G__22830 = null;
var G__22831 = 0;
var G__22832 = 0;
seq__22808_22812 = G__22829;
chunk__22809_22813 = G__22830;
count__22810_22814 = G__22831;
i__22811_22815 = G__22832;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__22834 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__22834,0,null);var v = cljs.core.nth.call(null,vec__22834,1,null);if(cljs.core.truth_((function (){var and__4777__auto__ = k;if(cljs.core.truth_(and__4777__auto__))
{return v;
} else
{return and__4777__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__22835_SHARP_){var attr = attrs__$1.item(p1__22835_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__22842_22848 = cljs.core.seq.call(null,styles);var chunk__22843_22849 = null;var count__22844_22850 = 0;var i__22845_22851 = 0;while(true){
if((i__22845_22851 < count__22844_22850))
{var vec__22846_22852 = cljs.core._nth.call(null,chunk__22843_22849,i__22845_22851);var name_22853 = cljs.core.nth.call(null,vec__22846_22852,0,null);var value_22854 = cljs.core.nth.call(null,vec__22846_22852,1,null);domina.set_style_BANG_.call(null,content,name_22853,value_22854);
{
var G__22855 = seq__22842_22848;
var G__22856 = chunk__22843_22849;
var G__22857 = count__22844_22850;
var G__22858 = (i__22845_22851 + 1);
seq__22842_22848 = G__22855;
chunk__22843_22849 = G__22856;
count__22844_22850 = G__22857;
i__22845_22851 = G__22858;
continue;
}
} else
{var temp__4092__auto___22859 = cljs.core.seq.call(null,seq__22842_22848);if(temp__4092__auto___22859)
{var seq__22842_22860__$1 = temp__4092__auto___22859;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22842_22860__$1))
{var c__5508__auto___22861 = cljs.core.chunk_first.call(null,seq__22842_22860__$1);{
var G__22862 = cljs.core.chunk_rest.call(null,seq__22842_22860__$1);
var G__22863 = c__5508__auto___22861;
var G__22864 = cljs.core.count.call(null,c__5508__auto___22861);
var G__22865 = 0;
seq__22842_22848 = G__22862;
chunk__22843_22849 = G__22863;
count__22844_22850 = G__22864;
i__22845_22851 = G__22865;
continue;
}
} else
{var vec__22847_22866 = cljs.core.first.call(null,seq__22842_22860__$1);var name_22867 = cljs.core.nth.call(null,vec__22847_22866,0,null);var value_22868 = cljs.core.nth.call(null,vec__22847_22866,1,null);domina.set_style_BANG_.call(null,content,name_22867,value_22868);
{
var G__22869 = cljs.core.next.call(null,seq__22842_22860__$1);
var G__22870 = null;
var G__22871 = 0;
var G__22872 = 0;
seq__22842_22848 = G__22869;
chunk__22843_22849 = G__22870;
count__22844_22850 = G__22871;
i__22845_22851 = G__22872;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__22879_22885 = cljs.core.seq.call(null,attrs);var chunk__22880_22886 = null;var count__22881_22887 = 0;var i__22882_22888 = 0;while(true){
if((i__22882_22888 < count__22881_22887))
{var vec__22883_22889 = cljs.core._nth.call(null,chunk__22880_22886,i__22882_22888);var name_22890 = cljs.core.nth.call(null,vec__22883_22889,0,null);var value_22891 = cljs.core.nth.call(null,vec__22883_22889,1,null);domina.set_attr_BANG_.call(null,content,name_22890,value_22891);
{
var G__22892 = seq__22879_22885;
var G__22893 = chunk__22880_22886;
var G__22894 = count__22881_22887;
var G__22895 = (i__22882_22888 + 1);
seq__22879_22885 = G__22892;
chunk__22880_22886 = G__22893;
count__22881_22887 = G__22894;
i__22882_22888 = G__22895;
continue;
}
} else
{var temp__4092__auto___22896 = cljs.core.seq.call(null,seq__22879_22885);if(temp__4092__auto___22896)
{var seq__22879_22897__$1 = temp__4092__auto___22896;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22879_22897__$1))
{var c__5508__auto___22898 = cljs.core.chunk_first.call(null,seq__22879_22897__$1);{
var G__22899 = cljs.core.chunk_rest.call(null,seq__22879_22897__$1);
var G__22900 = c__5508__auto___22898;
var G__22901 = cljs.core.count.call(null,c__5508__auto___22898);
var G__22902 = 0;
seq__22879_22885 = G__22899;
chunk__22880_22886 = G__22900;
count__22881_22887 = G__22901;
i__22882_22888 = G__22902;
continue;
}
} else
{var vec__22884_22903 = cljs.core.first.call(null,seq__22879_22897__$1);var name_22904 = cljs.core.nth.call(null,vec__22884_22903,0,null);var value_22905 = cljs.core.nth.call(null,vec__22884_22903,1,null);domina.set_attr_BANG_.call(null,content,name_22904,value_22905);
{
var G__22906 = cljs.core.next.call(null,seq__22879_22897__$1);
var G__22907 = null;
var G__22908 = 0;
var G__22909 = 0;
seq__22879_22885 = G__22906;
chunk__22880_22886 = G__22907;
count__22881_22887 = G__22908;
i__22882_22888 = G__22909;
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
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__22914_22918 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__22915_22919 = null;var count__22916_22920 = 0;var i__22917_22921 = 0;while(true){
if((i__22917_22921 < count__22916_22920))
{var node_22922 = cljs.core._nth.call(null,chunk__22915_22919,i__22917_22921);goog.dom.classes.add(node_22922,class$);
{
var G__22923 = seq__22914_22918;
var G__22924 = chunk__22915_22919;
var G__22925 = count__22916_22920;
var G__22926 = (i__22917_22921 + 1);
seq__22914_22918 = G__22923;
chunk__22915_22919 = G__22924;
count__22916_22920 = G__22925;
i__22917_22921 = G__22926;
continue;
}
} else
{var temp__4092__auto___22927 = cljs.core.seq.call(null,seq__22914_22918);if(temp__4092__auto___22927)
{var seq__22914_22928__$1 = temp__4092__auto___22927;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22914_22928__$1))
{var c__5508__auto___22929 = cljs.core.chunk_first.call(null,seq__22914_22928__$1);{
var G__22930 = cljs.core.chunk_rest.call(null,seq__22914_22928__$1);
var G__22931 = c__5508__auto___22929;
var G__22932 = cljs.core.count.call(null,c__5508__auto___22929);
var G__22933 = 0;
seq__22914_22918 = G__22930;
chunk__22915_22919 = G__22931;
count__22916_22920 = G__22932;
i__22917_22921 = G__22933;
continue;
}
} else
{var node_22934 = cljs.core.first.call(null,seq__22914_22928__$1);goog.dom.classes.add(node_22934,class$);
{
var G__22935 = cljs.core.next.call(null,seq__22914_22928__$1);
var G__22936 = null;
var G__22937 = 0;
var G__22938 = 0;
seq__22914_22918 = G__22935;
chunk__22915_22919 = G__22936;
count__22916_22920 = G__22937;
i__22917_22921 = G__22938;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__22943_22947 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__22944_22948 = null;var count__22945_22949 = 0;var i__22946_22950 = 0;while(true){
if((i__22946_22950 < count__22945_22949))
{var node_22951 = cljs.core._nth.call(null,chunk__22944_22948,i__22946_22950);goog.dom.classes.remove(node_22951,class$);
{
var G__22952 = seq__22943_22947;
var G__22953 = chunk__22944_22948;
var G__22954 = count__22945_22949;
var G__22955 = (i__22946_22950 + 1);
seq__22943_22947 = G__22952;
chunk__22944_22948 = G__22953;
count__22945_22949 = G__22954;
i__22946_22950 = G__22955;
continue;
}
} else
{var temp__4092__auto___22956 = cljs.core.seq.call(null,seq__22943_22947);if(temp__4092__auto___22956)
{var seq__22943_22957__$1 = temp__4092__auto___22956;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22943_22957__$1))
{var c__5508__auto___22958 = cljs.core.chunk_first.call(null,seq__22943_22957__$1);{
var G__22959 = cljs.core.chunk_rest.call(null,seq__22943_22957__$1);
var G__22960 = c__5508__auto___22958;
var G__22961 = cljs.core.count.call(null,c__5508__auto___22958);
var G__22962 = 0;
seq__22943_22947 = G__22959;
chunk__22944_22948 = G__22960;
count__22945_22949 = G__22961;
i__22946_22950 = G__22962;
continue;
}
} else
{var node_22963 = cljs.core.first.call(null,seq__22943_22957__$1);goog.dom.classes.remove(node_22963,class$);
{
var G__22964 = cljs.core.next.call(null,seq__22943_22957__$1);
var G__22965 = null;
var G__22966 = 0;
var G__22967 = 0;
seq__22943_22947 = G__22964;
chunk__22944_22948 = G__22965;
count__22945_22949 = G__22966;
i__22946_22950 = G__22967;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__22972_22976 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__22973_22977 = null;var count__22974_22978 = 0;var i__22975_22979 = 0;while(true){
if((i__22975_22979 < count__22974_22978))
{var node_22980 = cljs.core._nth.call(null,chunk__22973_22977,i__22975_22979);goog.dom.classes.toggle(node_22980,class$);
{
var G__22981 = seq__22972_22976;
var G__22982 = chunk__22973_22977;
var G__22983 = count__22974_22978;
var G__22984 = (i__22975_22979 + 1);
seq__22972_22976 = G__22981;
chunk__22973_22977 = G__22982;
count__22974_22978 = G__22983;
i__22975_22979 = G__22984;
continue;
}
} else
{var temp__4092__auto___22985 = cljs.core.seq.call(null,seq__22972_22976);if(temp__4092__auto___22985)
{var seq__22972_22986__$1 = temp__4092__auto___22985;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22972_22986__$1))
{var c__5508__auto___22987 = cljs.core.chunk_first.call(null,seq__22972_22986__$1);{
var G__22988 = cljs.core.chunk_rest.call(null,seq__22972_22986__$1);
var G__22989 = c__5508__auto___22987;
var G__22990 = cljs.core.count.call(null,c__5508__auto___22987);
var G__22991 = 0;
seq__22972_22976 = G__22988;
chunk__22973_22977 = G__22989;
count__22974_22978 = G__22990;
i__22975_22979 = G__22991;
continue;
}
} else
{var node_22992 = cljs.core.first.call(null,seq__22972_22986__$1);goog.dom.classes.toggle(node_22992,class$);
{
var G__22993 = cljs.core.next.call(null,seq__22972_22986__$1);
var G__22994 = null;
var G__22995 = 0;
var G__22996 = 0;
seq__22972_22976 = G__22993;
chunk__22973_22977 = G__22994;
count__22974_22978 = G__22995;
i__22975_22979 = G__22996;
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
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_23005__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__23001_23006 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23002_23007 = null;var count__23003_23008 = 0;var i__23004_23009 = 0;while(true){
if((i__23004_23009 < count__23003_23008))
{var node_23010 = cljs.core._nth.call(null,chunk__23002_23007,i__23004_23009);goog.dom.classes.set(node_23010,classes_23005__$1);
{
var G__23011 = seq__23001_23006;
var G__23012 = chunk__23002_23007;
var G__23013 = count__23003_23008;
var G__23014 = (i__23004_23009 + 1);
seq__23001_23006 = G__23011;
chunk__23002_23007 = G__23012;
count__23003_23008 = G__23013;
i__23004_23009 = G__23014;
continue;
}
} else
{var temp__4092__auto___23015 = cljs.core.seq.call(null,seq__23001_23006);if(temp__4092__auto___23015)
{var seq__23001_23016__$1 = temp__4092__auto___23015;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23001_23016__$1))
{var c__5508__auto___23017 = cljs.core.chunk_first.call(null,seq__23001_23016__$1);{
var G__23018 = cljs.core.chunk_rest.call(null,seq__23001_23016__$1);
var G__23019 = c__5508__auto___23017;
var G__23020 = cljs.core.count.call(null,c__5508__auto___23017);
var G__23021 = 0;
seq__23001_23006 = G__23018;
chunk__23002_23007 = G__23019;
count__23003_23008 = G__23020;
i__23004_23009 = G__23021;
continue;
}
} else
{var node_23022 = cljs.core.first.call(null,seq__23001_23016__$1);goog.dom.classes.set(node_23022,classes_23005__$1);
{
var G__23023 = cljs.core.next.call(null,seq__23001_23016__$1);
var G__23024 = null;
var G__23025 = 0;
var G__23026 = 0;
seq__23001_23006 = G__23023;
chunk__23002_23007 = G__23024;
count__23003_23008 = G__23025;
i__23004_23009 = G__23026;
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
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__23031_23035 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23032_23036 = null;var count__23033_23037 = 0;var i__23034_23038 = 0;while(true){
if((i__23034_23038 < count__23033_23037))
{var node_23039 = cljs.core._nth.call(null,chunk__23032_23036,i__23034_23038);goog.dom.setTextContent(node_23039,value);
{
var G__23040 = seq__23031_23035;
var G__23041 = chunk__23032_23036;
var G__23042 = count__23033_23037;
var G__23043 = (i__23034_23038 + 1);
seq__23031_23035 = G__23040;
chunk__23032_23036 = G__23041;
count__23033_23037 = G__23042;
i__23034_23038 = G__23043;
continue;
}
} else
{var temp__4092__auto___23044 = cljs.core.seq.call(null,seq__23031_23035);if(temp__4092__auto___23044)
{var seq__23031_23045__$1 = temp__4092__auto___23044;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23031_23045__$1))
{var c__5508__auto___23046 = cljs.core.chunk_first.call(null,seq__23031_23045__$1);{
var G__23047 = cljs.core.chunk_rest.call(null,seq__23031_23045__$1);
var G__23048 = c__5508__auto___23046;
var G__23049 = cljs.core.count.call(null,c__5508__auto___23046);
var G__23050 = 0;
seq__23031_23035 = G__23047;
chunk__23032_23036 = G__23048;
count__23033_23037 = G__23049;
i__23034_23038 = G__23050;
continue;
}
} else
{var node_23051 = cljs.core.first.call(null,seq__23031_23045__$1);goog.dom.setTextContent(node_23051,value);
{
var G__23052 = cljs.core.next.call(null,seq__23031_23045__$1);
var G__23053 = null;
var G__23054 = 0;
var G__23055 = 0;
seq__23031_23035 = G__23052;
chunk__23032_23036 = G__23053;
count__23033_23037 = G__23054;
i__23034_23038 = G__23055;
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
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__23060_23064 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23061_23065 = null;var count__23062_23066 = 0;var i__23063_23067 = 0;while(true){
if((i__23063_23067 < count__23062_23066))
{var node_23068 = cljs.core._nth.call(null,chunk__23061_23065,i__23063_23067);goog.dom.forms.setValue(node_23068,value);
{
var G__23069 = seq__23060_23064;
var G__23070 = chunk__23061_23065;
var G__23071 = count__23062_23066;
var G__23072 = (i__23063_23067 + 1);
seq__23060_23064 = G__23069;
chunk__23061_23065 = G__23070;
count__23062_23066 = G__23071;
i__23063_23067 = G__23072;
continue;
}
} else
{var temp__4092__auto___23073 = cljs.core.seq.call(null,seq__23060_23064);if(temp__4092__auto___23073)
{var seq__23060_23074__$1 = temp__4092__auto___23073;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23060_23074__$1))
{var c__5508__auto___23075 = cljs.core.chunk_first.call(null,seq__23060_23074__$1);{
var G__23076 = cljs.core.chunk_rest.call(null,seq__23060_23074__$1);
var G__23077 = c__5508__auto___23075;
var G__23078 = cljs.core.count.call(null,c__5508__auto___23075);
var G__23079 = 0;
seq__23060_23064 = G__23076;
chunk__23061_23065 = G__23077;
count__23062_23066 = G__23078;
i__23063_23067 = G__23079;
continue;
}
} else
{var node_23080 = cljs.core.first.call(null,seq__23060_23074__$1);goog.dom.forms.setValue(node_23080,value);
{
var G__23081 = cljs.core.next.call(null,seq__23060_23074__$1);
var G__23082 = null;
var G__23083 = 0;
var G__23084 = 0;
seq__23060_23064 = G__23081;
chunk__23061_23065 = G__23082;
count__23062_23066 = G__23083;
i__23063_23067 = G__23084;
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
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__4777__auto__ = allows_inner_html_QMARK_;if(and__4777__auto__)
{var and__4777__auto____$1 = (function (){var or__4789__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__4789__auto__))
{return or__4789__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__4777__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__4777__auto____$1;
}
} else
{return and__4777__auto__;
}
})()))
{var value_23095 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__23091_23096 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23092_23097 = null;var count__23093_23098 = 0;var i__23094_23099 = 0;while(true){
if((i__23094_23099 < count__23093_23098))
{var node_23100 = cljs.core._nth.call(null,chunk__23092_23097,i__23094_23099);node_23100.innerHTML = value_23095;
{
var G__23101 = seq__23091_23096;
var G__23102 = chunk__23092_23097;
var G__23103 = count__23093_23098;
var G__23104 = (i__23094_23099 + 1);
seq__23091_23096 = G__23101;
chunk__23092_23097 = G__23102;
count__23093_23098 = G__23103;
i__23094_23099 = G__23104;
continue;
}
} else
{var temp__4092__auto___23105 = cljs.core.seq.call(null,seq__23091_23096);if(temp__4092__auto___23105)
{var seq__23091_23106__$1 = temp__4092__auto___23105;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23091_23106__$1))
{var c__5508__auto___23107 = cljs.core.chunk_first.call(null,seq__23091_23106__$1);{
var G__23108 = cljs.core.chunk_rest.call(null,seq__23091_23106__$1);
var G__23109 = c__5508__auto___23107;
var G__23110 = cljs.core.count.call(null,c__5508__auto___23107);
var G__23111 = 0;
seq__23091_23096 = G__23108;
chunk__23092_23097 = G__23109;
count__23093_23098 = G__23110;
i__23094_23099 = G__23111;
continue;
}
} else
{var node_23112 = cljs.core.first.call(null,seq__23091_23106__$1);node_23112.innerHTML = value_23095;
{
var G__23113 = cljs.core.next.call(null,seq__23091_23106__$1);
var G__23114 = null;
var G__23115 = 0;
var G__23116 = 0;
seq__23091_23096 = G__23113;
chunk__23092_23097 = G__23114;
count__23093_23098 = G__23115;
i__23094_23099 = G__23116;
continue;
}
}
} else
{}
}
break;
}
}catch (e23090){if((e23090 instanceof Error))
{var e_23117 = e23090;domina.replace_children_BANG_.call(null,content,value_23095);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23090;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__4777__auto__ = bubble;if(cljs.core.truth_(and__4777__auto__))
{return (value == null);
} else
{return and__4777__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__4789__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__4789__auto__))
{return or__4789__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__23124_23128 = cljs.core.seq.call(null,children);var chunk__23125_23129 = null;var count__23126_23130 = 0;var i__23127_23131 = 0;while(true){
if((i__23127_23131 < count__23126_23130))
{var child_23132 = cljs.core._nth.call(null,chunk__23125_23129,i__23127_23131);frag.appendChild(child_23132);
{
var G__23133 = seq__23124_23128;
var G__23134 = chunk__23125_23129;
var G__23135 = count__23126_23130;
var G__23136 = (i__23127_23131 + 1);
seq__23124_23128 = G__23133;
chunk__23125_23129 = G__23134;
count__23126_23130 = G__23135;
i__23127_23131 = G__23136;
continue;
}
} else
{var temp__4092__auto___23137 = cljs.core.seq.call(null,seq__23124_23128);if(temp__4092__auto___23137)
{var seq__23124_23138__$1 = temp__4092__auto___23137;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23124_23138__$1))
{var c__5508__auto___23139 = cljs.core.chunk_first.call(null,seq__23124_23138__$1);{
var G__23140 = cljs.core.chunk_rest.call(null,seq__23124_23138__$1);
var G__23141 = c__5508__auto___23139;
var G__23142 = cljs.core.count.call(null,c__5508__auto___23139);
var G__23143 = 0;
seq__23124_23128 = G__23140;
chunk__23125_23129 = G__23141;
count__23126_23130 = G__23142;
i__23127_23131 = G__23143;
continue;
}
} else
{var child_23144 = cljs.core.first.call(null,seq__23124_23138__$1);frag.appendChild(child_23144);
{
var G__23145 = cljs.core.next.call(null,seq__23124_23138__$1);
var G__23146 = null;
var G__23147 = 0;
var G__23148 = 0;
seq__23124_23128 = G__23145;
chunk__23125_23129 = G__23146;
count__23126_23130 = G__23147;
i__23127_23131 = G__23148;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__23118_SHARP_,p2__23119_SHARP_){return f.call(null,p1__23118_SHARP_,p2__23119_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
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
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__4777__auto__ = obj;if(cljs.core.truth_(and__4777__auto__))
{var and__4777__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__4777__auto____$1)
{return obj.length;
} else
{return and__4777__auto____$1;
}
} else
{return and__4777__auto__;
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
{if((function (){var G__23150 = list_thing;if(G__23150)
{var bit__5410__auto__ = (G__23150.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__5410__auto__) || (G__23150.cljs$core$ISeqable$))
{return true;
} else
{if((!G__23150.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__23150);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__23150);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
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
{if((function (){var G__23151 = content;if(G__23151)
{var bit__5410__auto__ = (G__23151.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__5410__auto__) || (G__23151.cljs$core$ISeqable$))
{return true;
} else
{if((!G__23151.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__23151);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__23151);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
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
{if((function (){var G__23152 = content;if(G__23152)
{var bit__5410__auto__ = (G__23152.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__5410__auto__) || (G__23152.cljs$core$ISeqable$))
{return true;
} else
{if((!G__23152.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__23152);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__23152);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
