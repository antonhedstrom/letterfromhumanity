webpackHotUpdate("styles",{

/***/ "./components/SignForm/Form.module.sass":
/*!**********************************************!*\
  !*** ./components/SignForm/Form.module.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"signup-form":"signup-form___1ixX3","help-text":"help-text___3AIMK","help-text--has-error":"help-text--has-error___2v7QC","field":"field___15A8-","desc":"desc___QMqzw","submit":"submit___3q1me","link":"link___1Auu0"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1570042122266");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.366ab5972ec471e3acbb.hot-update.js.map