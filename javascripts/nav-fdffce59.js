(function(){$(function(){var t,e,a;return e=50,$("body").scrollspy({target:"#navbar",offset:e+20}),t=$("#all-parts"),$(window).on("scroll",function(){var a;return a=t.offset().top+t.outerHeight()+e,$(this).scrollTop()>a?($(".sections").addClass("active"),$(".navbar-default").addClass("active")):($(".sections").removeClass("active"),$(".navbar-default").removeClass("active"),"#top"!==window.location.hash?history.replaceState({},"","#top"):void 0)}),$(window).on("activate.bs.scrollspy",function(t){var e,a,o;return e=$("a[href^='#']",t.target),a=e.attr("href"),o=$("title").text()+" - "+e.text(),history.replaceState({},"",a),setTimeout(function(){return ga("set",{page:window.location.pathname+a,title:o}),ga("send","pageview")},1)}),$(window).trigger("scroll"),a=function(){return scrollBy(0,-1*e)},window.addEventListener("hashchange",a),window.location.hash?a():void 0})}).call(this);