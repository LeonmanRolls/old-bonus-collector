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
,sel_to_str(item));var iter__3973__auto__ = (function iter__37568(s__37569){return (new cljs.core.LazySeq(null,(function (){var s__37569__$1 = s__37569;while(true){
var temp__4092__auto__ = cljs.core.seq(s__37569__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var s = cljs.core.first(xs__4579__auto__);var iterys__3969__auto__ = ((function (s__37569__$1,s,xs__4579__auto__,temp__4092__auto__){
return (function iter__37570(s__37571){return (new cljs.core.LazySeq(null,((function (s__37569__$1,s,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__37571__$1 = s__37571;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__37571__$1);if(temp__4092__auto____$1)
{var s__37571__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__37571__$2))
{var c__3971__auto__ = cljs.core.chunk_first(s__37571__$2);var size__3972__auto__ = cljs.core.count(c__3971__auto__);var b__37573 = cljs.core.chunk_buffer(size__3972__auto__);if((function (){var i__37572 = 0;while(true){
if((i__37572 < size__3972__auto__))
{var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__3971__auto__,i__37572);cljs.core.chunk_append(b__37573,(function (){cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s,e], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(e,s);
})());
{
var G__37574 = (i__37572 + 1);
i__37572 = G__37574;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37573),iter__37570(cljs.core.chunk_rest(s__37571__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37573),null);
}
} else
{var e = cljs.core.first(s__37571__$2);return cljs.core.cons((function (){cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s,e], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(e,s);
})(),iter__37570(cljs.core.rest(s__37571__$2)));
}
} else
{return null;
}
break;
}
});})(s__37569__$1,s,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__37569__$1,s,xs__4579__auto__,temp__4092__auto__))
;var fs__3970__auto__ = cljs.core.seq(iterys__3969__auto__(end));if(fs__3970__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__3970__auto__,iter__37568(cljs.core.rest(s__37569__$1)));
} else
{{
var G__37575 = cljs.core.rest(s__37569__$1);
s__37569__$1 = G__37575;
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
enfocus.enlive.syntax.attr_pairs = (function attr_pairs(op,elms){var ts = (function (p__37578){var vec__37579 = p__37578;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37579,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37579,1,null);return [cljs.core.str("["),cljs.core.str(cljs.core.name(x)),cljs.core.str(op),cljs.core.str("='"),cljs.core.str(y),cljs.core.str("']")].join('');
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
attr_QMARK_.cljs$lang$applyTo = (function (arglist__37580){
var elms = cljs.core.seq(arglist__37580);
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
attr_EQ_.cljs$lang$applyTo = (function (arglist__37581){
var elms = cljs.core.seq(arglist__37581);
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
attr_has.cljs$lang$applyTo = (function (arglist__37582){
var x = cljs.core.first(arglist__37582);
var vals = cljs.core.rest(arglist__37582);
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
attr_starts.cljs$lang$applyTo = (function (arglist__37583){
var elms = cljs.core.seq(arglist__37583);
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
attr_ends.cljs$lang$applyTo = (function (arglist__37584){
var elms = cljs.core.seq(arglist__37584);
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
attr_contains.cljs$lang$applyTo = (function (arglist__37585){
var elms = cljs.core.seq(arglist__37585);
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
attr_BAR__EQ_.cljs$lang$applyTo = (function (arglist__37586){
var elms = cljs.core.seq(arglist__37586);
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
but.cljs$lang$applyTo = (function (arglist__37587){
var sel = cljs.core.seq(arglist__37587);
return but__delegate(sel);
});
but.cljs$core$IFn$_invoke$arity$variadic = but__delegate;
return but;
})()
;
