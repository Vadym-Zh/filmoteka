!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},n=t.parcelRequire03d3;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire03d3=n);var i=n("bpxeT"),l=n("2TvXO"),u=n("4Nugj"),d=n("iU1Pc"),s=n("f7J5Q"),c=n("xjavX"),o=n("cA2C5"),f=n("ayUZl"),p="current",y=new(0,s.default),v=JSON.parse(localStorage.getItem("watched")),b=JSON.parse(localStorage.getItem("queue")),h=JSON.parse(localStorage.getItem(p));function m(e,t,a){return _.apply(this,arguments)}function _(){return(_=e(i)(e(l).mark((function t(a,r,n){var i,u;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.classList.remove("header__library-btn--active"),r.classList.add("header__library-btn--active"),i=r.classList,u=i[1],localStorage.setItem(p,JSON.stringify(u)),g(n);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function g(e){return L.apply(this,arguments)}function L(){return L=e(i)(e(l).mark((function t(a){var r,n;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return");case 2:return d.Loading.standard(),t.next=5,Promise.all(a.map(function(){var t=e(i)(e(l).mark((function t(a){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.fetchMovieDetails(a,f.default);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 5:return(r=t.sent)&&(u.default.myLibraryWrap.children[0].style.display="block",u.default.myLibraryWrap.children[1].style.display="block",d.Loading.remove()),t.next=9,(0,c.default)(r);case 9:n=t.sent,u.default.movies.innerHTML=n,n.includes('li class="movies__item"')&&(u.default.myLibraryWrap.children[0].style.display="none",u.default.myLibraryWrap.children[1].style.display="none"),d.Loading.remove();case 13:case"end":return t.stop()}}),t)}))),L.apply(this,arguments)}h||(u.default.watchedBtn.classList.add("header__library-btn--active"),u.default.queueBtn.classList.remove("header__library-btn--active"),g(v)),"header__library-btn--watched"===h&&(u.default.watchedBtn.classList.add("header__library-btn--active"),u.default.queueBtn.classList.remove("header__library-btn--active"),g(v)),"header__library-btn--queue"===h&&(u.default.watchedBtn.classList.remove("header__library-btn--active"),u.default.queueBtn.classList.add("header__library-btn--active"),g(b)),u.default.movies.addEventListener("click",o.default),u.default.watchedBtn.addEventListener("click",(function(){m(u.default.queueBtn,u.default.watchedBtn,v)})),u.default.queueBtn.addEventListener("click",(function(){m(u.default.watchedBtn,u.default.queueBtn,b)}));u=n("4Nugj");var w=n("bZwXY"),x=n("3WUaf");u.default.googleSignOutFromLibrary.addEventListener("click",(function(){(0,w.signOutFromGoogle)(x.app)}))}();
//# sourceMappingURL=library.6e1a9046.js.map
