// Compiled by ClojureScript 0.0-2069
goog.provide('modern_cljs.views');
goog.require('cljs.core');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
modern_cljs.views.bonuspolaroid = (function bonuspolaroid(prev,nextsong){if((cljs.core.empty_QMARK_((nextsong["attachment"]["href"]))) || (cljs.core.empty_QMARK_((nextsong["attachment"]["media"]))) || (cljs.core.empty_QMARK_((nextsong["attachment"]["name"]))) || (cljs.core.empty_QMARK_((nextsong["post_id"]))))
{return prev;
} else
{return [cljs.core.str([cljs.core.str("<li"),cljs.core.str(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$197,(nextsong["attachment"]["name"]),cljs.core.constant$keyword$198,"bonusli",cljs.core.constant$keyword$143,null,cljs.core.constant$keyword$193,"bonuslink"], null))),cljs.core.str(">"),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$199,"_blank",cljs.core.constant$keyword$200,(nextsong["attachment"]["href"]),cljs.core.constant$keyword$143,null,cljs.core.constant$keyword$193,null], null))),cljs.core.str(">"),cljs.core.str("<"),cljs.core.str("img"),cljs.core.str(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$201,"modern_cljs.gbc.bonuslistener(this.id);",cljs.core.constant$keyword$202,(nextsong["attachment"]["media"]["0"]["src"]),cljs.core.constant$keyword$203,"100",cljs.core.constant$keyword$204,"100",cljs.core.constant$keyword$143,(nextsong["post_id"]),cljs.core.constant$keyword$193,"img-polaroid addimgborder standardPolaroid"], null))),cljs.core.str(" />"),cljs.core.str("</a>"),cljs.core.str("<div"),cljs.core.str(" style=\"text-align:center\""),cljs.core.str(">"),cljs.core.str("<p"),cljs.core.str(" class=\"mainparagraph\""),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html((nextsong["attachment"]["name"]))),cljs.core.str("</p>"),cljs.core.str("</div>"),cljs.core.str("</li>")].join('')),cljs.core.str(prev)].join('');
}
});
