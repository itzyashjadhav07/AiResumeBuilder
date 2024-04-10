;
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "acd97759-c1ee-40a5-a068-5dbad5357f78", e._sentryDebugIdIdentifier = "sentry-dbid-acd97759-c1ee-40a5-a068-5dbad5357f78")
    } catch (e) {}
}();
var _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
_global.SENTRY_RELEASE = {
    id: "production-v1.1243.3"
};
"use strict";
(self["webpackChunkresume_io_frontend"] = self["webpackChunkresume_io_frontend"] || []).push([
    [9736], {
        65390: ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, {
                "f": () => (isIFrame)
            });
            const isIFrame = () => {
                try {
                    return window.self !== window.top;
                } catch (e) {
                    return true;
                }
            };
        }),
        93805: ((module) => {
            module.exports = {};
        })
    }
]);