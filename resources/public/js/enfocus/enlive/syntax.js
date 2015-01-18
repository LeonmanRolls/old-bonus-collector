// Compiled by ClojureScript 0.0-2069
goog.provide('enfocus.enlive.syntax');
goog.require('cljs.core');
enfocus.enlive.syntax.sel_to_str = (function sel_to_str(input){var item = cljs.core.first(input);var rest = cljs.core.rest(input);var end = ((cljs.core.empty_QMARK_(rest))?cljs.core.list(cljs.core.List.EMPTY):sel_to_str(rest));if((item instanceof cljs.core.Keyword))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10639_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__10639_SHARP_,cljs.core.name(item));
}),end);
} else
{if(typeof item === 'string')
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10640_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__10640_SHARP_,item);
}),end);
} else
{if(cljs.core.set_QMARK_(item))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r1,it){return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(r1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10641_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__10641_SHARP_,it);
}),end));
}),cljs.core.PersistentVector.EMPTY,cljs.core.flatten(sel_to_str(item)));
} else
{if(cljs.core.coll_QMARK_(item))
{var x1 = sel_to_str(item);var sub = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (x1){
return (function (p1__10642_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__10642_SHARP_);
});})(x1))
,sel_to_str(item));var iter__3973__auto__ = (function iter__37054(s__37055){return (new cljs.core.LazySeq(null,(function (){var s__37055__$1 = s__37055;while(true){
var temp__4092__auto__ = cljs.core.seq(s__37055__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var s = cljs.core.first(xs__4579__auto__);var iterys__3969__auto__ = ((function (s__37055__$1,s,xs__4579__auto__,temp__4092__auto__){
return (function iter__37056(s__37057){return (new cljs.core.LazySeq(null,((function (s__37055__$1,s,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__37057__$1 = s__37057;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__37057__$1);if(temp__4092__auto____$1)
{var s__37057__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__37057__$2))
{var c__3971__auto__ = cljs.core.chunk_first(s__37057__$2);var size__3972__auto__ = cljs.core.count(c__3971__auto__);var b__37059 = cljs.core.chunk_buffer(size__3972__auto__);if((function (){var i__37058 = 0;while(true){
if((i__37058 < size__3972__auto__))
{var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__3971__auto__,i__37058);cljs.core.chunk_append(b__37059,(function (){cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s,e], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(e,s);
})());
{
var G__37060 = (i__37058 + 1);
i__37058 = G__37060;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37059),iter__37056(cljs.core.chunk_rest(s__37057__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37059),null);
}
} else
{var e = cljs.core.first(s__37057__$2);return cljs.core.cons((function (){cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s,e], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(e,s);
})(),iter__37056(cljs.core.rest(s__37057__$2)));
}
} else
{return null;
}
break;
}
});})(s__37055__$1,s,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__37055__$1,s,xs__4579__auto__,temp__4092__auto__))
;var fs__3970__auto__ = cljs.core.seq(iterys__3969__auto__(end));if(fs__3970__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__3970__auto__,iter__37054(cljs.core.rest(s__37055__$1)));
} else
{{
var G__37061 = cljs.core.rest(s__37055__$1);
s__37055__$1 = G__37061;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3973__auto__(sub);
} else
{return null;
}
}
}
}
});
enfocus.enlive.syntax.convert = (function convert(sel){if(typeof sel === 'string')
{return sel;
} else
{var ors = enfocus.enlive.syntax.sel_to_str(sel);return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.interpose(",",ors))));
}
});
enfocus.enlive.syntax.attr_pairs = (function attr_pairs(op,elms){var ts = (function (p__37064){var vec__37065 = p__37064;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37065,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37065,1,null);return [cljs.core.str("["),cljs.core.str(cljs.core.name(x)),cljs.core.str(op),cljs.core.str("='"),cljs.core.str(y),cljs.core.str("']")].join('');
});return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(ts,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,elms)));
});
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_QMARK_ = (function() { 
var attr_QMARK___delegate = function (elms){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15817_SHARP_){return [cljs.core.str("["),cljs.core.str(cljs.core.name(p1__15817_SHARP_)),cljs.core.str("]")].join('');
}),elms));
};
var attr_QMARK_ = function (var_args){
var elms = null;if (arguments.length > 0) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return attr_QMARK___delegate.call(this,elms);};
attr_QMARK_.cljs$lang$maxFixedArity = 0;
attr_QMARK_.cljs$lang$applyTo = (function (arglist__37066){
var elms = cljs.core.seq(arglist__37066);
return attr_QMARK___delegate(elms);
});
attr_QMARK_.cljs$core$IFn$_invoke$arity$variadic = attr_QMARK___delegate;
return attr_QMARK_;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_EQ_ = (function() { 
var attr_EQ___delegate = function (elms){return enfocus.enlive.syntax.attr_pairs("",elms);
};
var attr_EQ_ = function (var_args){
var elms = null;if (arguments.length > 0) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return attr_EQ___delegate.call(this,elms);};
attr_EQ_.cljs$lang$maxFixedArity = 0;
attr_EQ_.cljs$lang$applyTo = (function (arglist__37067){
var elms = cljs.core.seq(arglist__37067);
return attr_EQ___delegate(elms);
});
attr_EQ_.cljs$core$IFn$_invoke$arity$variadic = attr_EQ___delegate;
return attr_EQ_;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_has = (function() { 
var attr_has__delegate = function (x,vals){var ts = (function (y){return [cljs.core.str("["),cljs.core.str(cljs.core.name(x)),cljs.core.str("~='"),cljs.core.str(y),cljs.core.str("']")].join('');
});return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(ts,vals));
};
var attr_has = function (x,var_args){
var vals = null;if (arguments.length > 1) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return attr_has__delegate.call(this,x,vals);};
attr_has.cljs$lang$maxFixedArity = 1;
attr_has.cljs$lang$applyTo = (function (arglist__37068){
var x = cljs.core.first(arglist__37068);
var vals = cljs.core.rest(arglist__37068);
return attr_has__delegate(x,vals);
});
attr_has.cljs$core$IFn$_invoke$arity$variadic = attr_has__delegate;
return attr_has;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_starts = (function() { 
var attr_starts__delegate = function (elms){return enfocus.enlive.syntax.attr_pairs("^",elms);
};
var attr_starts = function (var_args){
var elms = null;if (arguments.length > 0) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return attr_starts__delegate.call(this,elms);};
attr_starts.cljs$lang$maxFixedArity = 0;
attr_starts.cljs$lang$applyTo = (function (arglist__37069){
var elms = cljs.core.seq(arglist__37069);
return attr_starts__delegate(elms);
});
attr_starts.cljs$core$IFn$_invoke$arity$variadic = attr_starts__delegate;
return attr_starts;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_ends = (function() { 
var attr_ends__delegate = function (elms){return enfocus.enlive.syntax.attr_pairs("$",elms);
};
var attr_ends = function (var_args){
var elms = null;if (arguments.length > 0) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return attr_ends__delegate.call(this,elms);};
attr_ends.cljs$lang$maxFixedArity = 0;
attr_ends.cljs$lang$applyTo = (function (arglist__37070){
var elms = cljs.core.seq(arglist__37070);
return attr_ends__delegate(elms);
});
attr_ends.cljs$core$IFn$_invoke$arity$variadic = attr_ends__delegate;
return attr_ends;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_contains = (function() { 
var attr_contains__delegate = function (elms){return enfocus.enlive.syntax.attr_pairs("*",elms);
};
var attr_contains = function (var_args){
var elms = null;if (arguments.length > 0) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return attr_contains__delegate.call(this,elms);};
attr_contains.cljs$lang$maxFixedArity = 0;
attr_contains.cljs$lang$applyTo = (function (arglist__37071){
var elms = cljs.core.seq(arglist__37071);
return attr_contains__delegate(elms);
});
attr_contains.cljs$core$IFn$_invoke$arity$variadic = attr_contains__delegate;
return attr_contains;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_BAR__EQ_ = (function() { 
var attr_BAR__EQ___delegate = function (elms){return enfocus.enlive.syntax.attr_pairs("|",elms);
};
var attr_BAR__EQ_ = function (var_args){
var elms = null;if (arguments.length > 0) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return attr_BAR__EQ___delegate.call(this,elms);};
attr_BAR__EQ_.cljs$lang$maxFixedArity = 0;
attr_BAR__EQ_.cljs$lang$applyTo = (function (arglist__37072){
var elms = cljs.core.seq(arglist__37072);
return attr_BAR__EQ___delegate(elms);
});
attr_BAR__EQ_.cljs$core$IFn$_invoke$arity$variadic = attr_BAR__EQ___delegate;
return attr_BAR__EQ_;
})()
;
enfocus.enlive.syntax.nth_op = (function() {
var nth_op = null;
var nth_op__2 = (function (op,x){return [cljs.core.str(":nth-"),cljs.core.str(op),cljs.core.str("("),cljs.core.str(x),cljs.core.str(")")].join('');
});
var nth_op__3 = (function (op,x,y){return [cljs.core.str(":nth-"),cljs.core.str(op),cljs.core.str("("),cljs.core.str(x),cljs.core.str("n"),cljs.core.str((((y > 0))?"+":null)),cljs.core.str(y)].join('');
});
nth_op = function(op,x,y){
switch(arguments.length){
case 2:
return nth_op__2.call(this,op,x);
case 3:
return nth_op__3.call(this,op,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_op.cljs$core$IFn$_invoke$arity$2 = nth_op__2;
nth_op.cljs$core$IFn$_invoke$arity$3 = nth_op__3;
return nth_op;
})()
;
enfocus.enlive.syntax.nth_child = (function() {
var nth_child = null;
var nth_child__1 = (function (x){return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$2("child",x);
});
var nth_child__2 = (function (x,y){return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$3("child",x,y);
});
nth_child = function(x,y){
switch(arguments.length){
case 1:
return nth_child__1.call(this,x);
case 2:
return nth_child__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_child.cljs$core$IFn$_invoke$arity$1 = nth_child__1;
nth_child.cljs$core$IFn$_invoke$arity$2 = nth_child__2;
return nth_child;
})()
;
enfocus.enlive.syntax.nth_last_child = (function() {
var nth_last_child = null;
var nth_last_child__1 = (function (x){return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$2("last-child",x);
});
var nth_last_child__2 = (function (x,y){return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$3("last-child",x,y);
});
nth_last_child = function(x,y){
switch(arguments.length){
case 1:
return nth_last_child__1.call(this,x);
case 2:
return nth_last_child__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_last_child.cljs$core$IFn$_invoke$arity$1 = nth_last_child__1;
nth_last_child.cljs$core$IFn$_invoke$arity$2 = nth_last_child__2;
return nth_last_child;
})()
;
enfocus.enlive.syntax.nth_of_type = (function() {
var nth_of_type = null;
var nth_of_type__1 = (function (x){return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$2("of-type",x);
});
var nth_of_type__2 = (function (x,y){return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$3("of-type",x,y);
});
nth_of_type = function(x,y){
switch(arguments.length){
case 1:
return nth_of_type__1.call(this,x);
case 2:
return nth_of_type__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_of_type.cljs$core$IFn$_invoke$arity$1 = nth_of_type__1;
nth_of_type.cljs$core$IFn$_invoke$arity$2 = nth_of_type__2;
return nth_of_type;
})()
;
enfocus.enlive.syntax.nth_last_of_type = (function() {
var nth_last_of_type = null;
var nth_last_of_type__1 = (function (x){return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$2("last-of-type",x);
});
var nth_last_of_type__2 = (function (x,y){return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$3("last-of-type",x,y);
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case 1:
return nth_last_of_type__1.call(this,x);
case 2:
return nth_last_of_type__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_last_of_type.cljs$core$IFn$_invoke$arity$1 = nth_last_of_type__1;
nth_last_of_type.cljs$core$IFn$_invoke$arity$2 = nth_last_of_type__2;
return nth_last_of_type;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.but = (function() { 
var but__delegate = function (sel){return [cljs.core.str("not("),cljs.core.str(enfocus.enlive.syntax.convert(sel)),cljs.core.str(")")].join('');
};
var but = function (var_args){
var sel = null;if (arguments.length > 0) {
  sel = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return but__delegate.call(this,sel);};
but.cljs$lang$maxFixedArity = 0;
but.cljs$lang$applyTo = (function (arglist__37073){
var sel = cljs.core.seq(arglist__37073);
return but__delegate(sel);
});
but.cljs$core$IFn$_invoke$arity$variadic = but__delegate;
return but;
})()
;
