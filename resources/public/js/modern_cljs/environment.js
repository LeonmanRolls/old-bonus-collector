// Compiled by ClojureScript 0.0-2069
goog.provide('modern_cljs.environment');
goog.require('cljs.core');
modern_cljs.environment.version = "";
modern_cljs.environment.getLink = (function getLink(wantedLink){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"fblogo"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/img/fblogo_144.png")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"u1stlogo"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/img/logo3.png")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"loadinggif"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/img/loading-large.gif")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"adblockMessage"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/img/stopblabla.png")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"linkexchange"))
{return [cljs.core.str("https://u1stgames.com/"),cljs.core.str(modern_cljs.environment.version),cljs.core.str("/linkexchange/")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"bonuscollector"))
{return [cljs.core.str("https://u1stgames.com/"),cljs.core.str(modern_cljs.environment.version),cljs.core.str("/gbc/facebook/")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"bonuscollectornonfb"))
{return [cljs.core.str("https://u1stgames.com/"),cljs.core.str(modern_cljs.environment.version),cljs.core.str("/gbc/")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"cdnfallback"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/external/")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"cssstyle"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/css/style.css")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"cssDataTables"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/css/dataTables.css")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"fbboiler"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/external/facebookboiler.js")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"adblockJs"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/external/stopblabla.js")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"dataTables"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/external/jquery.dataTables.min.js")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"bla"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/external/bla.js")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"moment"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/external/moment.min.js")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"iefix"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/external/iefix.js")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"production"))
{if(cljs.core.truth_(cljs.core.re_find(/test/,modern_cljs.environment.version)))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/js/production_dbg.js")].join('');
} else
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/js/production.js")].join('');
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"ajaxInsertBonuses"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/insertBonuses/")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"ajaxInsertNewApplication"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/insertNewApplication/")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"ajaxGbcIds"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/gbcids/")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"ajaxGameIds"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/gameids/")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"ajaxApplicationIds"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/applicationids/")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"ajaxLatestLinks"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/latestLinks/")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"ajaxAllClickxLinks"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/allClickxLinks/")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"ajaxAddClickxLink"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/addClickxLink/")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"ajaxAddClickxBonus"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/addClickxBonus/")].join('');
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wantedLink,"ajaxClickUpdate"))
{return [cljs.core.str(modern_cljs.environment.version),cljs.core.str("/clickUpdate/")].join('');
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
