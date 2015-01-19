// Compiled by ClojureScript 0.0-2069
goog.provide('shoreleave.browser.cookies');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('goog.net.Cookies');
goog.require('goog.net.Cookies');
goog.net.Cookies.prototype.cljs$core$IHash$ = true;
goog.net.Cookies.prototype.cljs$core$IHash$_hash$arity$1 = (function (c){var c__$1 = this;return cljs.core._hash.call(null,cljs.core._persistent_BANG_.call(null,c__$1));
});
goog.net.Cookies.prototype.cljs$core$ILookup$ = true;
goog.net.Cookies.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (c,k){var c__$1 = this;return cljs.core._lookup.call(null,c__$1,k,null);
});
goog.net.Cookies.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (c,k,not_found){var c__$1 = this;var v = c__$1.get(cljs.core.name.call(null,k),not_found);if(typeof v === 'string')
{return goog.string.urlDecode(v);
} else
{return v;
}
});
goog.net.Cookies.prototype.cljs$core$IAssociative$ = true;
goog.net.Cookies.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (c,k,v){var c__$1 = this;return cljs.core._assoc.call(null,cljs.core._persistent_BANG_.call(null,c__$1),k,v);
});
goog.net.Cookies.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (c,k){var c__$1 = this;return c__$1.containsKey(cljs.core.name.call(null,k));
});
goog.net.Cookies.prototype.cljs$core$IFn$ = true;
goog.net.Cookies.prototype.call = (function() {
var G__12899 = null;
var G__12899__2 = (function (self__,k){var self____$1 = this;var c = self____$1;return cljs.core._lookup.call(null,c,k);
});
var G__12899__3 = (function (self__,k,not_found){var self____$1 = this;var c = self____$1;return cljs.core._lookup.call(null,c,k,not_found);
});
G__12899 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__12899__2.call(this,self__,k);
case 3:
return G__12899__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__12899;
})()
;
goog.net.Cookies.prototype.apply = (function (self__,args12896){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12896)));
});
goog.net.Cookies.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var c = this;return cljs.core._lookup.call(null,c,k);
});
goog.net.Cookies.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var c = this;return cljs.core._lookup.call(null,c,k,not_found);
});
goog.net.Cookies.prototype.cljs$core$IPrintWithWriter$ = true;
goog.net.Cookies.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (c,writer,opts){var c__$1 = this;return cljs.core._write.call(null,writer,cljs.core._persistent_BANG_.call(null,c__$1));
});
goog.net.Cookies.prototype.cljs$core$ITransientMap$ = true;
goog.net.Cookies.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$4 = (function() { 
var G__12900__delegate = function (c,k,opts){var c__$1 = this;var temp__4092__auto__ = (function (){var and__4988__auto__ = c__$1.isValidName(cljs.core.name.call(null,k));if(cljs.core.truth_(and__4988__auto__))
{return cljs.core.name.call(null,k);
} else
{return and__4988__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var k__$1 = temp__4092__auto__;var map__12897 = cljs.core.apply.call(null,cljs.core.hash_map,opts);var map__12897__$1 = ((cljs.core.seq_QMARK_.call(null,map__12897))?cljs.core.apply.call(null,cljs.core.hash_map,map__12897):map__12897);var domain = cljs.core.get.call(null,map__12897__$1,new cljs.core.Keyword(null,"domain","domain",3982673974));var path = cljs.core.get.call(null,map__12897__$1,new cljs.core.Keyword(null,"path","path",1017337751));return c__$1.remove(k__$1,path,domain);
} else
{return null;
}
};
var G__12900 = function (c,k,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12900__delegate.call(this,c,k,opts);};
G__12900.cljs$lang$maxFixedArity = 2;
G__12900.cljs$lang$applyTo = (function (arglist__12901){
var c = cljs.core.first(arglist__12901);
arglist__12901 = cljs.core.next(arglist__12901);
var k = cljs.core.first(arglist__12901);
var opts = cljs.core.rest(arglist__12901);
return G__12900__delegate(c,k,opts);
});
G__12900.cljs$core$IFn$_invoke$arity$variadic = G__12900__delegate;
return G__12900;
})()
;
goog.net.Cookies.prototype.cljs$core$ISeqable$ = true;
goog.net.Cookies.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (c){var c__$1 = this;return cljs.core.map.call(null,cljs.core.vector,c__$1.getKeys(),c__$1.getValues());
});
goog.net.Cookies.prototype.cljs$core$ICounted$ = true;
goog.net.Cookies.prototype.cljs$core$ICounted$_count$arity$1 = (function (c){var c__$1 = this;return c__$1.getCount();
});
goog.net.Cookies.prototype.cljs$core$ITransientCollection$ = true;
goog.net.Cookies.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (c){var c__$1 = this;return shoreleave.browser.cookies.as_hash_map.call(null,c__$1);
});
goog.net.Cookies.prototype.cljs$core$ITransientAssociative$ = true;
goog.net.Cookies.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$5 = (function() { 
var G__12902__delegate = function (c,k,v,opts){var c__$1 = this;var temp__4092__auto__ = (function (){var and__4988__auto__ = c__$1.isValidName(cljs.core.name.call(null,k));if(cljs.core.truth_(and__4988__auto__))
{return cljs.core.name.call(null,k);
} else
{return and__4988__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var k__$1 = temp__4092__auto__;var map__12898 = cljs.core.apply.call(null,cljs.core.hash_map,opts);var map__12898__$1 = ((cljs.core.seq_QMARK_.call(null,map__12898))?cljs.core.apply.call(null,cljs.core.hash_map,map__12898):map__12898);var secure_QMARK_ = cljs.core.get.call(null,map__12898__$1,new cljs.core.Keyword(null,"secure?","secure?",2984183578));var domain = cljs.core.get.call(null,map__12898__$1,new cljs.core.Keyword(null,"domain","domain",3982673974));var path = cljs.core.get.call(null,map__12898__$1,new cljs.core.Keyword(null,"path","path",1017337751));var max_age = cljs.core.get.call(null,map__12898__$1,new cljs.core.Keyword(null,"max-age","max-age",1856844936));return c__$1.set(k__$1,v,max_age,path,domain,secure_QMARK_);
} else
{return null;
}
};
var G__12902 = function (c,k,v,var_args){
var opts = null;if (arguments.length > 3) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__12902__delegate.call(this,c,k,v,opts);};
G__12902.cljs$lang$maxFixedArity = 3;
G__12902.cljs$lang$applyTo = (function (arglist__12903){
var c = cljs.core.first(arglist__12903);
arglist__12903 = cljs.core.next(arglist__12903);
var k = cljs.core.first(arglist__12903);
arglist__12903 = cljs.core.next(arglist__12903);
var v = cljs.core.first(arglist__12903);
var opts = cljs.core.rest(arglist__12903);
return G__12902__delegate(c,k,v,opts);
});
G__12902.cljs$core$IFn$_invoke$arity$variadic = G__12902__delegate;
return G__12902;
})()
;
shoreleave.browser.cookies.cookies = (new goog.net.Cookies(document));
shoreleave.browser.cookies.as_hash_map = (function() {
var as_hash_map = null;
var as_hash_map__0 = (function (){return as_hash_map.call(null,shoreleave.browser.cookies.cookies);
});
var as_hash_map__1 = (function (cks){return cljs.core.zipmap.call(null,cks.getKeys(),cks.getValues());
});
as_hash_map = function(cks){
switch(arguments.length){
case 0:
return as_hash_map__0.call(this);
case 1:
return as_hash_map__1.call(this,cks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
as_hash_map.cljs$core$IFn$_invoke$arity$0 = as_hash_map__0;
as_hash_map.cljs$core$IFn$_invoke$arity$1 = as_hash_map__1;
return as_hash_map;
})()
;
/**
* Returns a boolean, true if cookies are currently enabled for the browser
*/
shoreleave.browser.cookies.cookies_enabled_QMARK_ = (function() {
var cookies_enabled_QMARK_ = null;
var cookies_enabled_QMARK___0 = (function (){return cookies_enabled_QMARK_.call(null,shoreleave.browser.cookies.cookies);
});
var cookies_enabled_QMARK___1 = (function (cks){return cks.isEnabled();
});
cookies_enabled_QMARK_ = function(cks){
switch(arguments.length){
case 0:
return cookies_enabled_QMARK___0.call(this);
case 1:
return cookies_enabled_QMARK___1.call(this,cks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cookies_enabled_QMARK_.cljs$core$IFn$_invoke$arity$0 = cookies_enabled_QMARK___0;
cookies_enabled_QMARK_.cljs$core$IFn$_invoke$arity$1 = cookies_enabled_QMARK___1;
return cookies_enabled_QMARK_;
})()
;
shoreleave.browser.cookies.empty_BANG_ = (function empty_BANG_(cks){return cks.clear();
});
