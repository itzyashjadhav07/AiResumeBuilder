;
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "766f4c1c-ec4e-40f1-8d2a-0b26057c0ccf", e._sentryDebugIdIdentifier = "sentry-dbid-766f4c1c-ec4e-40f1-8d2a-0b26057c0ccf")
    } catch (e) {}
}();
var _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
_global.SENTRY_RELEASE = {
    id: "production-v1.1243.3"
};
(self["webpackChunkresume_io_frontend"] = self["webpackChunkresume_io_frontend"] || []).push([
    [8150], {
        57236: ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            var es_symbol_description = __webpack_require__(62341);
            var es_symbol_async_iterator = __webpack_require__(23043);
            var es_symbol_match = __webpack_require__(58698);
            var es_symbol_match_all = __webpack_require__(83809);
            var es_symbol_replace = __webpack_require__(32478);
            var es_symbol_search = __webpack_require__(80843);
            var es_symbol_split = __webpack_require__(57688);
            var es_error_cause = __webpack_require__(38584);
            var es_aggregate_error = __webpack_require__(75058);
            var es_aggregate_error_cause = __webpack_require__(3957);
            var es_array_at = __webpack_require__(72446);
            var es_array_flat = __webpack_require__(34920);
            var es_array_flat_map = __webpack_require__(89999);
            var es_array_includes = __webpack_require__(15845);
            var es_array_reduce = __webpack_require__(76917);
            var es_array_reduce_right = __webpack_require__(9109);
            var es_array_sort = __webpack_require__(59690);
            var es_array_unscopables_flat = __webpack_require__(8743);
            var es_array_unscopables_flat_map = __webpack_require__(58613);
            var es_global_this = __webpack_require__(19501);
            var es_json_stringify = __webpack_require__(43334);
            var es_math_hypot = __webpack_require__(41545);
            var es_number_parse_float = __webpack_require__(57162);
            var es_number_parse_int = __webpack_require__(28849);
            var es_number_to_exponential = __webpack_require__(95556);
            var es_number_to_fixed = __webpack_require__(80901);
            var es_object_assign = __webpack_require__(19992);
            var es_object_from_entries = __webpack_require__(25212);
            var es_object_has_own = __webpack_require__(85059);
            var es_parse_float = __webpack_require__(14681);
            var es_parse_int = __webpack_require__(59192);
            var es_promise = __webpack_require__(50527);
            var es_promise_all_settled = __webpack_require__(20429);
            var es_promise_any = __webpack_require__(85997);
            var es_promise_finally = __webpack_require__(32064);
            var es_reflect_set = __webpack_require__(83225);
            var es_reflect_to_string_tag = __webpack_require__(31440);
            var es_regexp_constructor = __webpack_require__(10335);
            var es_regexp_dot_all = __webpack_require__(68523);
            var es_regexp_exec = __webpack_require__(77072);
            var es_regexp_flags = __webpack_require__(9502);
            var es_regexp_test = __webpack_require__(67371);
            var es_regexp_to_string = __webpack_require__(57592);
            var es_string_at_alternative = __webpack_require__(17521);
            var es_string_ends_with = __webpack_require__(32354);
            var es_string_includes = __webpack_require__(7974);
            var es_string_match = __webpack_require__(49329);
            var es_string_match_all = __webpack_require__(67206);
            var es_string_replace = __webpack_require__(59886);
            var es_string_replace_all = __webpack_require__(41546);
            var es_string_search = __webpack_require__(15556);
            var es_string_split = __webpack_require__(74364);
            var es_string_starts_with = __webpack_require__(23405);
            var es_string_trim_end = __webpack_require__(12836);
            var es_string_trim_start = __webpack_require__(73421);
            var es_typed_array_float32_array = __webpack_require__(51810);
            var es_typed_array_float64_array = __webpack_require__(16594);
            var es_typed_array_int8_array = __webpack_require__(10062);
            var es_typed_array_int16_array = __webpack_require__(88223);
            var es_typed_array_int32_array = __webpack_require__(98218);
            var es_typed_array_uint8_array = __webpack_require__(11472);
            var es_typed_array_uint8_clamped_array = __webpack_require__(88659);
            var es_typed_array_uint16_array = __webpack_require__(13050);
            var es_typed_array_uint32_array = __webpack_require__(40262);
            var es_typed_array_at = __webpack_require__(17228);
            var es_typed_array_fill = __webpack_require__(80099);
            var es_typed_array_from = __webpack_require__(51578);
            var es_typed_array_of = __webpack_require__(11202);
            var es_typed_array_set = __webpack_require__(69986);
            var es_typed_array_sort = __webpack_require__(34355);
            var es_typed_array_to_locale_string = __webpack_require__(29813);
            var es_weak_map = __webpack_require__(26126);
            var web_dom_collections_iterator = __webpack_require__(47771);
            var web_dom_exception_constructor = __webpack_require__(14454);
            var web_dom_exception_stack = __webpack_require__(30835);
            var web_dom_exception_to_string_tag = __webpack_require__(64082);
            var web_immediate = __webpack_require__(32996);
            var web_queue_microtask = __webpack_require__(21619);
            var web_structured_clone = __webpack_require__(31377);
            var web_url = __webpack_require__(89954);
            var web_url_to_json = __webpack_require__(21507);
            var web_url_search_params = __webpack_require__(88373);
            var jquery = __webpack_require__(52474);
            var jquery_default = __webpack_require__.n(jquery);;
            const ready = callback => {
                if (document.readyState !== 'loading') {
                    window.queueMicrotask(callback);
                } else {
                    document.addEventListener('DOMContentLoaded', callback, {
                        once: true
                    });
                }
            };
            var throttle = __webpack_require__(46118);
            var throttle_default = __webpack_require__.n(throttle);
            var debounce = __webpack_require__(60352);
            var debounce_default = __webpack_require__.n(debounce);;
            const $window = jquery_default()(window);
            class ScrollableSlideShow {
                constructor($el, config) {
                    this.showStep = throttle_default()(stepNumber => {
                        if (stepNumber === this.currentStep) return false;
                        this.$items.eq(this.currentStep).removeClass('show');
                        this.$items.eq(stepNumber).addClass('show');
                        this.currentStep = stepNumber;
                    }, 350);
                    this.setSizes = () => {
                        this.offsetY = parseInt(this.$container.css('top')) || 0;
                        const trackHeight = this.$el.height();
                        const trackTopPos = this.$el.offset().top;
                        const itemsLength = this.$items.length;
                        const lastItemHeight = this.$items.last().height();
                        const stepHeight = (trackHeight - lastItemHeight) / itemsLength;
                        this.stepsBorders = this.$items.toArray().map((_, i) => {
                            const nextIndex = i + 1;
                            const top = i === 0 ? 0 : stepHeight * i + trackTopPos;
                            const bottom = nextIndex < itemsLength ? stepHeight * nextIndex + trackTopPos : Infinity;
                            return [top, bottom];
                        });
                        this.$container.css({
                            height: lastItemHeight
                        });
                    };
                    this.handleResize = debounce_default()(() => {
                        this.setSizes();
                        this.handleScroll();
                    }, 300);
                    this.handleScroll = () => {
                        const scrollTop = $window.scrollTop() + this.offsetY;
                        this.stepsBorders.some((step, index) => {
                            const [topBorderStep, bottomBorderStep] = step;
                            if (scrollTop >= topBorderStep && scrollTop < bottomBorderStep) {
                                this.showStep(index);
                                return true;
                            }
                            return false;
                        });
                    };
                    this.$el = $el;
                    this.config = config || {};
                    this.$container = this.$el.find(this.config.contentSelector);
                    this.$items = this.$el.find(this.config.itemSelector);
                    if (!this.$el.length && !this.$items.length && !this.$container.length && !this.$items.length) return;
                    if (this.$items.length > 1) {
                        $window.on('scroll', this.handleScroll);
                        $window.on('resize', this.handleResize);
                        this.handleResize();
                    } else {
                        this.$items.addClass('show').css({
                            position: 'static'
                        });
                    }
                }
            }
            ready(function() {
                return new ScrollableSlideShow(jquery_default()('.author__aside'), {
                    contentSelector: '.author__aside-content',
                    itemSelector: '.author__aside-content-item'
                });
            });;

            function throttle_throttle(func, timeFrame) {
                let lastTime = 0;
                return function() {
                    let now = Date.now();
                    if (now - lastTime >= timeFrame) {
                        func(...arguments);
                        lastTime = now;
                    }
                };
            };
            const TRACK_EVENT_TIMEOUT = false ? 0 : 5000;
            const callbackWithTimeout = (callback, timeout) => {
                let timeoutFired = false;
                const timer = setTimeout(() => {
                    timeoutFired = true;
                    callback();
                }, timeout);
                return () => {
                    if (timeoutFired) return;
                    clearTimeout(timer);
                    callback();
                };
            };
            const trackMarketingEvent = function trackMarketingEvent(eventCategory, eventAction, options) {
                if (options === void 0) {
                    options = {};
                }
                return new Promise(resolve => {
                    const eventCallback = callbackWithTimeout(() => resolve(), TRACK_EVENT_TIMEOUT);
                    const gtmEvent = Object.assign({
                        event: 'gtmAppEvent',
                        eventCategory,
                        eventAction,
                        eventCallback
                    }, options);
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push(gtmEvent);
                    if (false) {}
                });
            };
            const createMarketingEventHandler = function createMarketingEventHandler() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }
                return () => trackMarketingEvent(...args);
            };
            var isIFrame = __webpack_require__(65390);
            var events = __webpack_require__(93805);;
            const getResolutions = () => ({
                window_width: window.innerWidth,
                window_height: window.innerHeight,
                screen_width: window.screen.width,
                screen_height: window.screen.height
            });
            const shouldShareEventFromWidgetMode = event => {
                return ['create_resume', 'download_resume', 'change_resume_template', 'rename_resume', 'open_full_screen_resume_preview', 'visit_resume_editor', 'click_download_resume_button', 'click_edit_resume_button', 'open_sharing_modal', 'visit_dashboard'].includes(event);
            };
            const isEventUsedPubliclyAndPrivately = event => {
                return ['track_utm'].includes(event);
            };
            const trackInternalEvent = function trackInternalEvent(eventCode, payload) {
                if (payload === void 0) {
                    payload = {};
                }
                if (typeof eventCode !== 'string') {
                    return console.error('🛑 ClickHouse Tracking: An event code must be provided');
                }
                const timestamp = Math.round(Date.now() / 1000);
                const timestampMs = Date.now();
                const params = Object.assign({}, payload, getResolutions(), {
                    timestamp,
                    timestamp_ms: timestampMs
                });
                if ('navigator' in window && typeof navigator.sendBeacon === 'function') {
                    try {
                        navigator.sendBeacon("/api/reporting/event/" + eventCode, JSON.stringify({
                            params
                        }));
                    } catch (error) {
                        console.error(error);
                    }
                }
                if ((0, isIFrame.f)() && shouldShareEventFromWidgetMode(eventCode)) {
                    try {
                        const eventDetails = {
                            eventCode: eventCode,
                            payload: payload
                        };
                        window.top.postMessage(eventDetails, '*');
                    } catch (error) {
                        console.error('🛑 Parent event: error dispatching to parent window', error);
                    }
                }
                if (false) {}
            };
            const createInternalEventHandler = function createInternalEventHandler() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }
                return () => trackInternalEvent(...args);
            };;;
            class BlogAside {
                constructor($el) {
                    this.$el = $el;
                    if (!this.$el.length) return;
                    new ScrollableSlideShow(this.$el.parent(), {
                        contentSelector: '.blog-aside',
                        itemSelector: '.blog-aside__item'
                    });
                    this.handleBlogAsideCtaVisibility();
                    this.wideElements = jquery_default()('.js-wide-element, .image--large, .wide-element').toArray();
                    if (!this.wideElements.length) return;
                    this.throttledScrollHandler = throttle_throttle(this.checkIntersections.bind(this), 100);
                    this.debouncedResizeHandler = debounce_default()(this.checkScreenSize.bind(this), 100);
                    window.addEventListener('resize', this.debouncedResizeHandler);
                    this.checkScreenSize();
                }
                handleScroll(removeCtaBannerExamples) {
                    const blogAsideCta = document.getElementById('blog-aside-cta');
                    if (blogAsideCta && removeCtaBannerExamples === true) {
                        const mainContentHeight = jquery_default()('.blog-post__content-main-wrapper').height();
                        let rightPanelHeight = mainContentHeight * (70 / 100);
                        jquery_default()('#blog-post-content-right').css({
                            height: rightPanelHeight
                        });
                    }
                }
                handleBlogAsideCtaVisibility() {
                    let removeCtaBannerExamples = jquery_default()('#remove-cta-banner-value_examples').text();
                    if (removeCtaBannerExamples) {
                        removeCtaBannerExamples = removeCtaBannerExamples === 'true';
                        trackInternalEvent('cta_banner_examples', {
                            saw_cta_banner: !removeCtaBannerExamples
                        });
                        window.addEventListener('scroll', this.handleScroll(removeCtaBannerExamples));
                    }
                }
                checkScreenSize() {
                    const isDesktop = window.innerWidth > 1023;
                    if (isDesktop && !this.isMounted) {
                        window.addEventListener('scroll', this.throttledScrollHandler, {
                            passive: true
                        });
                        this.isMounted = true;
                    } else if (!isDesktop && this.isMounted) {
                        window.removeEventListener('scroll', this.throttledScrollHandler);
                        this.isMounted = false;
                    }
                }
                checkIntersections() {
                    const PADDING = 32;
                    const rect1 = this.$el[0].getBoundingClientRect();
                    const hasOverlap = this.wideElements.some(el => {
                        const rect2 = el.getBoundingClientRect();
                        return !(rect1.right + PADDING < rect2.left || rect1.left > rect2.right + PADDING || rect1.bottom + PADDING < rect2.top || rect1.top > rect2.bottom + PADDING);
                    });
                    if (hasOverlap) {
                        this.$el.css({
                            opacity: 0
                        });
                    } else {
                        this.$el.css({
                            opacity: 1
                        });
                    }
                }
            }
            ready(function() {
                jquery_default()('.blog-aside').each((_, el) => {
                    new BlogAside(jquery_default()(el));
                });
            });
            var styled_components_browser_esm = __webpack_require__(51685);
            var react_dom = __webpack_require__(79153);
            var react = __webpack_require__(95004);
            var jsx_runtime = __webpack_require__(2629);;
            const FormStates = {
                validationError: 'validationError',
                serverError: 'serverError',
                sent: 'sent',
                sending: 'sending'
            };

            function BlogAsideEmailShare(_ref) {
                let {
                    el
                } = _ref;
                const articleAbstract = jquery_default()('.blog-post__hero-lead').text();
                const articleTitle = jquery_default()('title').text();
                const [isOpened, setIsOpened] = (0, react.useState)(false);
                const [email, setEmail] = (0, react.useState)('');
                const [state, setState] = (0, react.useState)('');
                const ValidateEmail = email => {
                    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                        return true;
                    }
                    setState(FormStates.validationError);
                    return false;
                };
                el.on('click', () => {
                    setIsOpened(true);
                });
                jquery_default()('body').on('click', function(e) {
                    if (!jquery_default()(e.target).closest('.share-email-container').length && !jquery_default()(e.target).closest('.blog-post-sharing__item--email').length) {
                        setIsOpened(false);
                    }
                });
                const handleClick = () => {
                    trackInternalEvent('send_blog_email', {
                        'page title': articleTitle
                    });
                };
                return (0, jsx_runtime.jsxs)("div", {
                    children: [isOpened && (0, jsx_runtime.jsxs)("div", {
                        className: "share-email-container",
                        children: [(0, jsx_runtime.jsxs)("p", {
                            children: [state === FormStates.validationError && "Hmm... that email doesn't look valid", state === FormStates.sent && (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: ["Message sent successfully. ", (0, jsx_runtime.jsx)("br", {}), "Please check your email.", (0, jsx_runtime.jsx)("img", {})]
                            }), state === '' && "Send Me This!"]
                        }), state !== FormStates.sent && (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [(0, jsx_runtime.jsx)(_StyledInput, {
                                className: "share-email-input",
                                onChange: e => {
                                    setEmail(e.target.value);
                                },
                                name: "email"
                            }), (0, jsx_runtime.jsx)(_StyledButton, {
                                className: "button",
                                disabled: state === 'sending',
                                onClick: async () => {
                                    handleClick();
                                    if (ValidateEmail(email)) {
                                        var _window;
                                        setState(FormStates.sending);
                                        const res = await fetch("/api/app/save-page-email", {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                                email,
                                                blog_title: articleTitle,
                                                blog_description: articleAbstract,
                                                blog_url: (_window = window) == null || (_window = _window.location) == null ? void 0 : _window.href
                                            })
                                        });
                                        if (res.status === 200) {
                                            setEmail('');
                                        }
                                        setState(FormStates.sent);
                                    }
                                },
                                children: "Submit"
                            })]
                        })]
                    }), (0, jsx_runtime.jsx)("a", {
                        onClick: () => {
                            console.log('ONCLICK');
                            setIsOpened(isOpened => !isOpened);
                        },
                        children: (0, jsx_runtime.jsx)(EmailIcon, {})
                    })]
                });
            }

            function EmailIcon() {
                return (0, jsx_runtime.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "16",
                    viewBox: "0 0 24 16",
                    fill: "none",
                    children: [(0, jsx_runtime.jsx)("path", {
                        d: "M4.4 1H19.6C20.645 1 21.5 1.7875 21.5 2.75V13.25C21.5 14.2125 20.645 15 19.6 15H4.4C3.355 15 2.5 14.2125 2.5 13.25V2.75C2.5 1.7875 3.355 1 4.4 1Z",
                        fill: "#54AFF8",
                        stroke: "#54AFF8",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, jsx_runtime.jsx)("path", {
                        d: "M22.5 2L12 10L1.5 2",
                        stroke: "#EFF2F9",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                });
            }
            ready(function() {
                jquery_default()('.blog-post-sharing__item--email').each((i, el) => {
                    console.log(el);
                    react_dom.render((0, jsx_runtime.jsx)(BlogAsideEmailShare, {
                        el: jquery_default()(el)
                    }), el);
                });
            });
            var _StyledInput = (0, styled_components_browser_esm.ZP)("input")({
                marginTop: '20px',
                marginBottom: '12px',
                width: '100%'
            });
            var _StyledButton = (0, styled_components_browser_esm.ZP)("button")({
                borderRadius: '8px'
            });;

            function matchMediaQueries(width) {
                if (width === void 0) {
                    width = window.innerWidth;
                }
                return {
                    isPhone: width <= 767,
                    isTablet: width <= 1023,
                    isLaptop: width <= 1199,
                    isDesktop: width >= 1200
                };
            }
            const mediaQueries = (matchMediaQueries);;
            class Collapse {
                constructor($root, config) {
                    this.itemInit = $item => {
                        const $toggle = $item.find("." + this.config.toggleClass);
                        $toggle.on('click', () => {
                            if (!$item.hasClass(this.isOpenClass)) {
                                this.open($item);
                            } else {
                                this.close($item);
                            }
                        });
                    };
                    this.open = $item => {
                        const $body = $item.find("." + this.config.bodyClass);
                        this.changeToggleText($item);
                        if (this.config.isAccordion) {
                            this.$items.filter("." + this.isOpenClass).each((_, el) => this.close(jquery_default()(el)));
                        }
                        $item.addClass(this.isOpenClass);
                        $body.css({
                            height: 0,
                            opacity: 0,
                            overflow: 'hidden'
                        });
                        $body.animate({
                            height: $body.get(0).scrollHeight,
                            opacity: 1
                        }, {
                            queue: false,
                            duration: 300,
                            complete: () => {
                                $body.css({
                                    overflow: '',
                                    height: 'auto'
                                });
                            }
                        });
                        this.config.onOpen();
                    };
                    this.close = $item => {
                        const $body = $item.find("." + this.config.bodyClass);
                        this.changeToggleText($item);
                        $item.removeClass(this.isOpenClass);
                        $body.css({
                            height: $body.get(0).scrollHeight,
                            opacity: 1,
                            overflow: 'hidden'
                        });
                        $body.animate({
                            height: 0,
                            opacity: 0
                        }, {
                            queue: false,
                            duration: 300
                        });
                    };
                    this.changeToggleText = $item => {
                        const $toggle = $item.find("." + this.config.toggleClass);
                        const altText = $toggle.data('alt-text');
                        if (altText) {
                            const $toggleText = $toggle.find('span');
                            $toggle.data('alt-text', $toggleText.text());
                            $toggleText.text(altText);
                        }
                    };
                    this.config = Object.assign({
                        itemClass: 'collapse__item',
                        bodyClass: 'collapse__body',
                        toggleClass: 'collapse__toggle',
                        onOpen: () => {}
                    }, config || {});
                    this.$root = $root;
                    this.$items = $root.find("." + this.config.itemClass);
                    this.isOpenClass = 'is-open';
                    this.$items.each((_, el) => this.itemInit(jquery_default()(el)));
                }
            }
            ready(function() {
                jquery_default()('.collapse').each((_, el) => new Collapse(jquery_default()(el)));
            });;
            class BlogAsideToc {
                constructor($root) {
                    this.handleToggleBody = () => {
                        const isOpen = this.$root.hasClass('blog-aside-toc--open');
                        this.$body[isOpen ? 'slideUp' : 'slideDown']({
                            duration: 200
                        });
                        this.$root.toggleClass('blog-aside-toc--open');
                    };
                    this.handleResize = () => {
                        const {
                            isTablet
                        } = mediaQueries();
                        if (isTablet && (!this.isModeMobile || !this.initialized)) {
                            this.isModeMobile = true;
                            this.initialized = true;
                        } else if (!isTablet && (this.isModeMobile || !this.initialized)) {
                            this.resetBody();
                            this.isModeMobile = false;
                            this.initialized = true;
                        }
                    };
                    this.resetBody = () => {
                        this.$body.stop().removeAttr('style');
                        this.$root.removeClass('blog-aside-toc--open');
                    };
                    this.$root = $root;
                    if (!this.$root.length) return;
                    this.initialized = false;
                    this.isModeMobile = false;
                    this.$title = $root.find('.blog-aside-toc__title');
                    this.$body = $root.find('.blog-aside-toc__body');
                    this.$title.on('click', this.handleToggleBody);
                    window.addEventListener('resize', this.handleResize);
                    this.handleResize();
                    new Collapse(this.$body, {
                        itemClass: 'blog-aside-toc__section',
                        toggleClass: 'blog-aside-toc__section-title',
                        bodyClass: 'blog-aside-toc__list'
                    });
                }
            }
            ready(function() {
                return new BlogAsideToc(jquery_default()('.blog-aside-toc'));
            });
            var dist_clipboard = __webpack_require__(86666);
            var clipboard_default = __webpack_require__.n(dist_clipboard);;
            class EmbedComponent {
                constructor($el) {
                    if (!clipboard_default().isSupported()) return;
                    const $button = $el.find('.embed-code__button');
                    const $buttonText = $el.find('.embed-code__button-text');
                    const clipboard = new(clipboard_default())($button.get(0), {
                        target: trigger => {
                            return jquery_default()(trigger).closest('.embed-code').find('.embed-code__content').get(0);
                        }
                    });
                    clipboard.on('success', () => {
                        $buttonText.text($buttonText.data('copied-text'));
                        setTimeout(() => $buttonText.text($buttonText.data('default-text')), 1000);
                    });
                }
            };
            class CopyableComponent {
                constructor(copyableNode) {
                    if (!clipboard_default().isSupported()) return;
                    const $el = jquery_default()(copyableNode);
                    const $copyableButton = $el.find('.copyable__button');
                    const $copyableTooltip = $el.find('.copyable__tooltip');
                    const clipboard = new(clipboard_default())($copyableButton.get(0));
                    clipboard.on('success', () => {
                        $copyableTooltip.css({
                            opacity: 1
                        });
                        setTimeout(() => $copyableTooltip.css({
                            opacity: 0
                        }), 1000);
                    });
                }
            };
            class ResourcesComponent {
                constructor(_resourcesNode) {
                    this.foldableHeight = 187;
                    this.classes = {
                        folded: 'resources--folded',
                        dynamic: 'resources--dynamic',
                        toggle: 'resources__toggle',
                        content: 'resources__content',
                        toggleVisible: 'resources__toggle--visible'
                    };
                    this.initialize = () => {
                        const {
                            resourcesNode
                        } = this;
                        const contentNode = resourcesNode.querySelector("." + this.classes.content);
                        const height = contentNode.clientHeight;
                        if (height < this.foldableHeight) return;
                        jquery_default()(contentNode).css({
                            height
                        });
                        jquery_default()(resourcesNode).addClass(this.classes.dynamic).addClass(this.classes.folded).find("." + this.classes.toggle).addClass(this.classes.toggleVisible).on('click', () => {
                            jquery_default()(resourcesNode).toggleClass(this.classes.folded);
                        });
                    };
                    this.resourcesNode = _resourcesNode;
                    window.addEventListener('load', this.initialize);
                }
            }
            var objectWithoutPropertiesLoose = __webpack_require__(99140);;
            const _excluded = ["callback"];
            class VisibilityObserver {
                constructor(el, options) {
                    if (options === void 0) {
                        options = {};
                    }
                    this.isSupported = 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window;
                    this.isVisible = function(entry) {
                        if (entry === void 0) {
                            entry = {};
                        }
                        return entry.isIntersecting || entry.intersectionRatio > 0;
                    };
                    this.handleIntersection = entries => {
                        if (!this.isVisible(entries[0])) return;
                        this.callback();
                        this.observer.disconnect();
                    };
                    const {
                        callback
                    } = options, settings = (0, objectWithoutPropertiesLoose.Z)(options, _excluded);
                    this.el = el instanceof(jquery_default()) ? el.get(0) : el;
                    if (callback) {
                        this.callback = callback;
                    } else {
                        return console.warn('VisibilityObserver: `callback` option must be providen');
                    }
                    if (this.isSupported) {
                        this.observer = new IntersectionObserver(this.handleIntersection, settings);
                        this.observer.observe(this.el);
                    } else {
                        this.callback();
                    }
                }
            }
            var slick = __webpack_require__(20938);
            var slick_slick = __webpack_require__(26414);;
            class TemplateSliderComponent {
                constructor($el) {
                    this.getCurrentSlickOptions = () => {
                        return {
                            draggable: this.currentMediaQueries.isTablet,
                            dots: null,
                            infinite: true,
                            speed: 600,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: true,
                            centerPadding: 0,
                            initialSlide: 0,
                            variableWidth: true,
                            adaptiveHeight: false,
                            focusOnSelect: true,
                            nextArrow: null,
                            prevArrow: null
                        };
                    };
                    this.showColorsForSlide = index => {
                        const $currentColors = jquery_default()("[data-template=\"template-" + index + "\"]");
                        this.$colors.removeClass('template-slider__colors--visible');
                        $currentColors.addClass('template-slider__colors--visible');
                    };
                    this.initSlider = () => {
                        this.showColorsForSlide(0);
                        this.$slider.slick(this.getCurrentSlickOptions());
                    };
                    this.initListeners = () => {
                        this.$prevButton.on('click', () => this.$slider.slick('slickPrev'));
                        this.$nextButton.on('click', () => this.$slider.slick('slickNext'));
                        this.$slider.on('afterChange', (e, slick, index) => this.showColorsForSlide(index));
                    };
                    this.triggerSlider = () => {
                        this.$el.addClass('template-slider--triggered');
                        this.$slider.slick('slickNext');
                    };
                    this.currentMediaQueries = mediaQueries();
                    this.$el = $el;
                    this.$slider = this.$el.find('.template-slider__gallery-items');
                    this.$sliderItems = this.$el.find('.template-slider__gallery-item');
                    this.$colors = this.$el.find('.template-slider__colors');
                    this.$nextButton = this.$el.find('.template-slider__button-next');
                    this.$prevButton = this.$el.find('.template-slider__button-previous');
                    this.initSlider();
                    this.initListeners();
                    new VisibilityObserver(this.$el, {
                        threshold: 0.5,
                        callback: this.triggerSlider
                    });
                }
            };
            class CompareResumesComponent {
                constructor($container) {
                    this.handleResumeHover = () => {
                        if (this.$view.hasClass(this.classes.ready)) {
                            this.$view.addClass(this.classes.hover);
                        }
                    };
                    this.animate = () => {
                        this.$view.addClass(this.classes.intro);
                        setTimeout(() => {
                            this.$view.addClass(this.classes.ready);
                            if (mediaQueries().isPhone) {
                                setTimeout(this.handleResumeHover, 500);
                            }
                        }, this.introAnimationDuration);
                    };
                    this.introAnimationDuration = 900;
                    this.classes = {
                        goodResume: '.compare-resumes__resume--good',
                        view: '.compare-resumes__view',
                        intro: 'compare-resumes__view--intro',
                        ready: 'compare-resumes__view--ready',
                        hover: 'compare-resumes__view--hover'
                    };
                    this.$goodResume = $container.find(this.classes.goodResume);
                    this.$view = $container.find(this.classes.view);
                    this.$goodResume.on('mouseover', this.handleResumeHover);
                    this.$goodResume.on('mouseleave', () => {
                        this.$view.removeClass(this.classes.hover);
                    });
                    new VisibilityObserver($container, {
                        rootMargin: '-50% 0% -50% 0%',
                        callback: this.animate
                    });
                }
            };
            class SalariesComponent {
                constructor($container) {
                    this.classes = {
                        salaryItem: '.salary__item',
                        salaryItemAmount: '.salary__item_amnt',
                        salaryItemBar: '.salary__item_bar'
                    };
                    const salaryItems = $container.find(this.classes.salaryItem);
                    let total = this.getTotal(salaryItems);
                    salaryItems.each((i, v) => {
                        const value = parseFloat(jquery_default()(v).find(this.classes.salaryItemAmount).text().replace('$', '').replace(' / yr'));
                        const width = this.getWidth(value, total, salaryItems.length);
                        jquery_default()(v).find(this.classes.salaryItemBar).width(width.toString() + '%');
                    });
                }
                getTotal(salaryItems) {
                    let total = 0;
                    salaryItems.each((i, v) => {
                        total += parseFloat(jquery_default()(v).find('.salary__item_amnt').text().replace('$', '').replace(' / yr'));
                    });
                    return total;
                }
                getWidth(value, total, count) {
                    if (count === 1) {
                        return 100;
                    }
                    return Math.round(value / total * 100) + count * 15;
                }
            };
            class BlogPostView {
                constructor($blogPost) {
                    this.handleStarsHover = () => {
                        if (this.isRated) return;
                        this.$ratingStars.addClass('blog-post-footer__rating-star--inactive');
                    };
                    this.handleStarsBlur = () => {
                        if (this.isRated) return;
                        this.$ratingStars.each((i, el) => {
                            if (i === 0 && this.inactiveStarsCount) return;
                            jquery_default()(el).removeClass('blog-post-footer__rating-star--inactive');
                        });
                    };
                    this.handleStarClick = event => {
                        if (this.isRated) return;
                        this.isRated = true;
                        const reversedStars = this.$ratingStars.get().reverse();
                        const starIndex = reversedStars.indexOf(event.currentTarget);
                        reversedStars.forEach((el, i) => {
                            if (i > starIndex) return;
                            jquery_default()(el).removeClass('blog-post-footer__rating-star--inactive');
                        });
                        this.$ratingStars.removeClass('blog-post-footer__rating-star--with-hover');
                        const amount = parseInt(this.$ratingAmount.data('amount')) + 1;
                        const text = this.$ratingAmount.data('template').replace('#AMOUNT#', amount);
                        this.$ratingAmount.text(text);
                    };
                    if (!$blogPost.length) return;
                    $blogPost.find('.resources').each(function() {
                        new ResourcesComponent(this);
                    });
                    $blogPost.find('.copyable').each(function() {
                        new CopyableComponent(jquery_default()(this));
                    });
                    $blogPost.find('.template-slider').each(function() {
                        new TemplateSliderComponent(jquery_default()(this));
                    });
                    $blogPost.find('.embed-code').each(function() {
                        new EmbedComponent(jquery_default()(this));
                    });
                    $blogPost.find('.compare-resumes').each(function() {
                        new CompareResumesComponent(jquery_default()(this));
                    });
                    $blogPost.find('.salaries').each(function() {
                        new SalariesComponent(jquery_default()(this));
                    });
                    $blogPost.find('.post-cta').click(() => trackMarketingEvent('Blog Post', 'CTA click'));
                    $blogPost.find('.blog-post__content-main-wrapper').find('a[href$="https://resume.io/create-resume"]').click(() => trackMarketingEvent('Blog Post', 'Content CTA click'));
                    this.$shareButtons = $blogPost.find('.blog-post__sharing-item');
                    this.$shareButtons.on('click', this.handleShareClick);
                    this.isRated = false;
                    this.$ratingStars = $blogPost.find('.blog-post-footer__rating-star');
                    this.$ratingAmount = $blogPost.find('.blog-post-footer__rating-amount');
                    this.inactiveStarsCount = $blogPost.find('.blog-post-footer__rating-star--inactive').length;
                    this.$ratingStars.on('mouseover', this.handleStarsHover);
                    this.$ratingStars.on('mouseleave', this.handleStarsBlur);
                    this.$ratingStars.on('click', this.handleStarClick);
                }
                handleShareClick() {
                    const width = 600;
                    const height = 400;
                    const left = window.screen.width / 2 - width / 2;
                    const top = window.screen.height / 2 - height / 2;
                    window.open(this.href, '', "menubar=no,\n      toolbar=no,\n      resizable=yes,\n      scrollbars=yes,\n      height=" + height + ",\n      width=" + width + ",\n      left=" + left + ",\n      top=" + top);
                    return false;
                }
            }
            ready(function() {
                return new BlogPostView(jquery_default()('.blog-post'));
            });;
            class BlogPostFooterComponent {
                constructor($el) {
                    if (!$el.length) return;
                    this.$el = $el;
                    this.$shareButtons = $el.find('.blog-post-footer__share-button').not('.blog-post-sharing__item--email');
                    this.$shareButtons.on('click', this.handleShareClick);
                }
                handleShareClick() {
                    const width = 600;
                    const height = 400;
                    const left = window.screen.width / 2 - width / 2;
                    const top = window.screen.height / 2 - height / 2;
                    window.open(this.href, '', "menubar=no,\n      toolbar=no,\n      resizable=yes,\n      scrollbars=yes,\n      height=" + height + ",\n      width=" + width + ",\n      left=" + left + ",\n      top=" + top);
                    return false;
                }
            }
            ready(function() {
                return new BlogPostFooterComponent(jquery_default()('.blog-post-footer'));
            });;
            class PageLoader {
                constructor($el, _params) {
                    this.page = 1;
                    this.startObserveLoader = () => this.observer.observe(this.$loader[0]);
                    this.stopObserveLoader = () => this.observer.disconnect();
                    this.show = () => this.$loader.css({
                        display: 'flex'
                    });
                    this.hide = () => this.$loader.hide();
                    this.handleIntersection = entries => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                this.stopObserveLoader();
                                this.loadPage();
                            }
                        });
                    };
                    this.loadPage = () => {
                        const urlParams = new URLSearchParams(window.location.search);
                        const query = Object.assign({
                            page: ++this.page,
                            per_page: urlParams.get('per_page')
                        }, this.queryParams);
                        const params = new URLSearchParams();
                        for (const key in query)
                            if (query[key]) params.append(key, query[key]);
                        const queryString = params.toString();
                        jquery_default().get(this.url + "?" + queryString).done(response => {
                            const isPageLimit = response.size * response.page >= response.totalElements;
                            if (response.numberOfElements === 0 || response.numberOfElements < response.size || isPageLimit) {
                                this.hide();
                            }
                            this.$targetPosts.append(response.content);
                            this.startObserveLoader();
                        }).fail().always();
                    };
                    this.setQueryParams = query => {
                        this.queryParams = Object.assign({}, this.queryParams, query);
                    };
                    this.reset = () => {
                        this.page = 1;
                        this.startObserveLoader();
                        this.show();
                    };
                    this.$loader = $el;
                    if (!_params || !this.$loader.length) return;
                    this.url = this.$loader.data('api-endpoint');
                    this.$targetPosts = jquery_default()(_params.targetPostsSelector);
                    this.queryParams = _params.queryParams;
                    this.observer = new IntersectionObserver(this.handleIntersection, {
                        threshold: [0.7]
                    });
                }
            }
            ready(function() {
                jquery_default()('.blog-main__page-loader').each(function() {
                    const loader = new PageLoader(jquery_default()(this), {
                        targetPostsSelector: '.blog-main__posts-feed-inner',
                        queryParams: {
                            category: jquery_default()(this).data('category')
                        }
                    });
                    loader.startObserveLoader();
                });
            });;

            function debounce_debounce(fn, wait) {
                let timeout;
                return () => {
                    let args = arguments;
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        timeout = null;
                        fn.apply(this, args);
                    }, wait);
                };
            };
            const FEED_MODES = {
                feed: 'FEED',
                searchResults: 'SEARCH'
            };
            const searchPanels = [];
            class BlogSearch {
                constructor($el, pageLoader) {
                    this.$allSearchPanels = jquery_default()([]);
                    this.lastSearchQuery = '';
                    this.initialPostsFeedMode = FEED_MODES.feed;
                    this.classes = {
                        navigation: {
                            container: 'blog-main__top-box-nav',
                            openSearch: 'blog-main__top-box-nav--show-search'
                        },
                        spinner: {
                            container: 'blog-main__search-spinner',
                            visible: 'blog-main__search-spinner--visible'
                        },
                        searchResultContainer: 'blog-main__search-result-posts',
                        blogMainContainer: {
                            container: 'blog-main__container',
                            showSearchResults: 'blog-main__container--show-search-results'
                        },
                        blogPostsContainer: 'blog-main__posts-feed',
                        blogMainPostContainer: 'blog-main__main-post',
                        counter: 'blog-main__search-result-counter',
                        open: 'blog-search--open',
                        responsive: 'blog-search--responsive',
                        clearButton: 'blog-search__clear',
                        openResponsiveSearchButton: 'blog-search__open-button'
                    };
                    this.setEventListeners = () => {
                        this.$form.on('click', this.open);
                        this.$input.on('change keyup', this.onInputChange);
                        this.$input.on('focus', this.open);
                        this.$clear.on('click', this.onClear);
                        if (this.$form.hasClass(this.classes.responsive)) {
                            this.$openResponsiveSearchButton.on('click', this.open);
                        }
                        this.$form.on('submit', e => e.preventDefault());
                    };
                    this.search = () => {
                        const action = this.$form.attr('action');
                        const data = this.$form.serializeArray();
                        this.showSpinner();
                        this.pageLoader && this.pageLoader.hide();
                        jquery_default().post(action, data).done(this.showResults).fail(this.setDefaultState);
                    };
                    this.showResults = response => {
                        if (response.searchQuery === this.$input.val()) {
                            this.hideSpinner();
                            if (!this.isEmptyQuery()) {
                                jquery_default()(window).scrollTop(0);
                                this.setSearchContent(response.html);
                                this.getAllSearchPanels().val(response.searchQuery);
                                this.getAllSearchPanels().filter(':visible').focus();
                                this.showResultsCounter(response.localizedPostsCount);
                                if (response.postsCount) {
                                    this.pageLoader && this.pageLoader.reset();
                                }
                            } else {
                                this.showEnvironmentBlocks();
                                this.setBlogContent(response.mainPostHtml, response.html);
                                this.initialPostsFeedMode = FEED_MODES.feed;
                            }
                        }
                    };
                    this.onInputChange = debounce_debounce(() => {
                        if (this.isEmptyQuery()) {
                            this.setDefaultState();
                        } else if (this.lastSearchQuery !== this.$input.val()) {
                            searchPanels.forEach(searchPanel => searchPanel.lastSearchQuery = this.$input.val());
                            this.pageLoader && this.pageLoader.setQueryParams({
                                search: this.lastSearchQuery
                            });
                            this.$searchResultContainer.html('');
                            this.search();
                        }
                    }, 500);
                    this.setDefaultState = () => {
                        searchPanels.forEach(searchPanel => searchPanel.lastSearchQuery = '');
                        this.getAllSearchPanels().val(null);
                        this.$searchResultContainer.html('');
                        this.pageLoader && this.pageLoader.setQueryParams({
                            search: this.lastSearchQuery
                        });
                        if (this.initialPostsFeedMode === FEED_MODES.feed) {
                            this.showEnvironmentBlocks();
                        } else {
                            this.search();
                        }
                        this.hideResultsCounter();
                    };
                    this.setSearchContent = html => {
                        this.$searchResultContainer.html(html);
                    };
                    this.setBlogContent = (mainPostHtml, postsHtml) => {
                        this.$searchResultContainer.html('');
                        this.$blogMainPostContainer.html(mainPostHtml);
                        this.$blogPostsContainer.html(postsHtml);
                    };
                    this.onClear = event => {
                        event.stopPropagation();
                        this.setDefaultState();
                        this.close();
                    };
                    this.open = () => {
                        if (!this.isOpen()) {
                            searchPanels.forEach(searchBox => searchBox.$form.addClass(searchBox.classes.open));
                            this.$navigation.addClass(this.classes.navigation.openSearch);
                            this.$input.focus();
                        }
                    };
                    this.close = () => {
                        searchPanels.forEach(searchBox => searchBox.$form.removeClass(searchBox.classes.open));
                        this.$navigation.removeClass(this.classes.navigation.openSearch);
                    };
                    this.showResultsCounter = counterText => {
                        this.$counter.text(counterText);
                    };
                    this.hideResultsCounter = () => {
                        this.$counter.text('');
                    };
                    this.hideEnvironmentBlocks = () => {
                        this.$blogMainContainer.addClass(this.classes.blogMainContainer.showSearchResults);
                    };
                    this.showEnvironmentBlocks = () => {
                        this.$blogMainContainer.removeClass(this.classes.blogMainContainer.showSearchResults);
                    };
                    this.showSpinner = () => {
                        this.$spinner.addClass(this.classes.spinner.visible);
                        this.hideEnvironmentBlocks();
                    };
                    this.hideSpinner = () => this.$spinner.removeClass(this.classes.spinner.visible);
                    this.isEmptyQuery = () => !this.$input.val().trim();
                    this.isOpen = () => this.$form.hasClass(this.classes.open);
                    this.getAllSearchPanels = () => {
                        const inputs = searchPanels.map(searchPanel => searchPanel.$input[0]);
                        return jquery_default()(inputs);
                    };
                    this.$form = $el;
                    this.$input = $el.find('input');
                    this.$clear = $el.find("." + this.classes.clearButton);
                    this.$navigation = jquery_default()("." + this.classes.navigation.container);
                    this.$searchResultContainer = jquery_default()("." + this.classes.searchResultContainer);
                    this.$blogMainPostContainer = jquery_default()("." + this.classes.blogMainPostContainer);
                    this.$blogPostsContainer = jquery_default()("." + this.classes.blogPostsContainer);
                    this.$counter = jquery_default()("." + this.classes.counter);
                    this.$spinner = jquery_default()("." + this.classes.spinner.container);
                    this.$blogMainContainer = jquery_default()("." + this.classes.blogMainContainer.container);
                    this.$openResponsiveSearchButton = jquery_default()("." + this.classes.openResponsiveSearchButton);
                    this.pageLoader = pageLoader;
                    this.pageLoader && this.pageLoader.setQueryParams({
                        search: this.$input.val()
                    });
                    this.initialPostsFeedMode = this.isEmptyQuery() ? FEED_MODES.feed : FEED_MODES.searchResults;
                    if (!this.isEmptyQuery()) {
                        this.pageLoader && this.pageLoader.startObserveLoader();
                        this.pageLoader && this.pageLoader.show();
                    }
                    this.setEventListeners();
                    searchPanels.push(this);
                }
            }
            ready(function() {
                const $loader = jquery_default()('.blog-main__search-result-loader');
                let pageLoader;
                if ($loader.length) {
                    pageLoader = new PageLoader($loader, {
                        targetPostsSelector: '.blog-main__search-result-posts'
                    });
                    pageLoader.hide();
                }
                jquery_default()('.blog-search').each(function() {
                    new BlogSearch(jquery_default()(this), pageLoader);
                });
            });;
            class BlogPostComments {
                constructor($blogPostComments, config) {
                    this.loadScript = url => {
                        const head = document.querySelector('head');
                        const script = document.createElement('script');
                        this.$blogPostComments.addClass('loading');
                        script.type = 'text/javascript';
                        script.src = url;
                        head.appendChild(script);
                        script.onload = () => {
                            this.$blogPostComments.removeClass('loading');
                        };
                    };
                    if (!$blogPostComments.length) return;
                    this.$blogPostComments = $blogPostComments;
                    this.trackingLabel = config.trackingLabel;
                    new VisibilityObserver(this.$blogPostComments, {
                        rootMargin: '50% 0% 50% 0%',
                        callback: () => this.loadScript('https://cdn.commento.io/js/commento.js')
                    });
                    new VisibilityObserver(this.$blogPostComments, {
                        rootMargin: '0%',
                        callback: () => trackInternalEvent('see_comments_section', {
                            label: this.trackingLabel
                        })
                    });
                }
            }
            ready(function() {
                return new BlogPostComments(jquery_default()('.blog-post-comments'), {
                    trackingLabel: 'posts'
                });
            });;
            const blogTopScrollPanel_$window = jquery_default()(window);
            class BlogTopScrollPanel {
                constructor($el) {
                    this.classes = {
                        scrollWrapper: 'blog-main__scroll-panel',
                        scrollInner: 'blog-main__scroll-panel-inner'
                    };
                    this.handleResize = () => {
                        const leftPos = this.$scrollParent.offset().left;
                        const viewPortWidth = blogTopScrollPanel_$window.width();
                        if (viewPortWidth < 1024) {
                            this.$scrollPanel.css({
                                left: -leftPos,
                                width: viewPortWidth
                            });
                            this.$scrollInner.css({
                                paddingLeft: leftPos,
                                paddingRight: leftPos
                            });
                        } else {
                            this.$scrollPanel.css({
                                width: '',
                                left: ''
                            });
                            this.$scrollInner.css({
                                paddingLeft: '',
                                paddingRight: ''
                            });
                        }
                    };
                    this.$scrollParent = $el;
                    this.$scrollPanel = this.$scrollParent.find("." + this.classes.scrollWrapper);
                    this.$scrollInner = this.$scrollParent.find("." + this.classes.scrollInner);
                    this.debouncedHandleResize = debounce_debounce(this.handleResize, 100);
                    this.debouncedHandleResize();
                    blogTopScrollPanel_$window.on('resize', this.debouncedHandleResize);
                }
            }
            ready(function() {
                jquery_default()('.blog-main__top-box-nav').each(function() {
                    new BlogTopScrollPanel(jquery_default()(this));
                });
            });
            var core_class = __webpack_require__(66721);
            var lazy = __webpack_require__(88402);
            var navigation = __webpack_require__(35412);
            var scrollbar = __webpack_require__(77);;
            core_class.Z.use([lazy.Z, navigation.Z, scrollbar.Z]);
            class BlogFeaturedPostComponent {
                constructor(node) {
                    this.initializeSlider = () => {
                        new core_class.Z(this.$el.get(0), {
                            loop: this.$el.find('.blog-featured-posts__slider-item').length > 3,
                            slidesPerView: 'auto',
                            threshold: 15,
                            navigation: {
                                prevEl: '.blog-featured-posts__nav--prev',
                                nextEl: '.blog-featured-posts__nav--next'
                            },
                            slideClass: 'blog-featured-posts__slider-item',
                            wrapperClass: 'blog-featured-posts__slider-inner',
                            breakpoints: {
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 20
                                }
                            }
                        });
                    };
                    this.$el = jquery_default()(node);
                    new VisibilityObserver(this.$el, {
                        rootMargin: '50% 0% 50% 0%',
                        callback: this.initializeSlider
                    });
                }
            }
            ready(function() {
                jquery_default()('.blog-featured-posts__slider-container').each((_, node) => {
                    new BlogFeaturedPostComponent(node);
                });
            });;
            const blogArticlesHeadersNav_$window = jquery_default()(window);
            class BlogArticlesHeadersNav {
                constructor($root) {
                    this.setSizes = () => {
                        this.mediaQueries = mediaQueries();
                        this.viewPortHeight = blogArticlesHeadersNav_$window.height();
                        this.offsetY = this.viewPortHeight / 2;
                        this.articlePartsPos = [];
                        this.articlePos = {
                            height: this.$articleBody.height(),
                            top: this.$articleBody.offset().top
                        };
                        this.articlePos.bottom = this.articlePos.top + this.articlePos.height;
                        this.$headers.each((i, el) => {
                            const nextIndex = i + 1;
                            const bottomPos = nextIndex !== this.$headers.length ? this.$headers.eq(nextIndex).offset().top : this.articlePos.bottom;
                            this.articlePartsPos.push({
                                top: jquery_default()(el).offset().top,
                                bottom: bottomPos
                            });
                        });
                    };
                    this.headerHandleClick = e => {
                        e.preventDefault();
                        const $target = jquery_default()(e.target.hash);
                        if ($target.length) jquery_default()('html, body').animate({
                            scrollTop: $target.offset().top - 80
                        }, 800);
                    };
                    this.checkScrollPosition = () => {
                        if (this.mediaQueries.isTablet) return;
                        const scrollTop = blogArticlesHeadersNav_$window.scrollTop() + this.offsetY;
                        const scrollBottom = blogArticlesHeadersNav_$window.scrollTop() + this.viewPortHeight;
                        this.articlePartsPos.forEach((articlePart, i) => {
                            if (scrollTop >= articlePart.top && scrollTop < articlePart.bottom) {
                                this.$tableOfContentItems.eq(i).addClass('active');
                            } else {
                                this.$tableOfContentItems.eq(i).removeClass('active');
                            }
                        });
                        if (scrollBottom >= this.articlePos.top && scrollBottom < this.articlePos.bottom) {
                            const readingProgress = (scrollBottom - this.articlePos.top) / this.articlePos.height;
                            this.$articleProgressInner.css({
                                transform: "scaleX(" + readingProgress + ")"
                            });
                        }
                    };
                    this.updateState = () => {
                        this.setSizes();
                        this.checkScrollPosition();
                    };
                    this.$root = $root;
                    this.$articleBody = jquery_default()('.blog-post__content-main-wrapper');
                    this.$headers = this.$articleBody.find('h2');
                    this.$articleProgressInner = this.$root.find('.blog-aside-toc__progress-inner');
                    this.$tableOfContentItems = this.$root.find('.blog-aside-toc__item');
                    const debouncedUpdateState = debounce_default()(this.updateState, 300);
                    const throttledUpdateState = throttle_default()(this.updateState, 1000);
                    blogArticlesHeadersNav_$window.on('scroll', this.checkScrollPosition);
                    blogArticlesHeadersNav_$window.on('scroll', throttledUpdateState);
                    blogArticlesHeadersNav_$window.on('resize', debouncedUpdateState);
                    this.$tableOfContentItems.on('click', this.headerHandleClick);
                    this.updateState();
                }
            }
            ready(function() {
                jquery_default()('.blog-aside-toc--flat').each((_, el) => new BlogArticlesHeadersNav(jquery_default()(el)));
            });
            const blogArticlesHeadersNav = ((null && (BlogArticlesHeadersNav)));;
            class Recaptcha {
                constructor(siteKey) {
                    this.api = null;
                    this.siteKey = siteKey;
                }
                getApi() {
                    if (this.api) return Promise.resolve(this.api);
                    return new Promise(resolve => {
                        const cbName = 'grecaptchaLoaded';
                        window[cbName] = () => {
                            this.api = window.grecaptcha;
                            this.api.ready(() => resolve(this.api));
                        };
                        const script = document.createElement('script');
                        script.src = "https://www.google.com/recaptcha/api.js?render=" + this.siteKey + "&onload=" + cbName;
                        document.head.appendChild(script);
                    });
                }
                execute(options) {
                    return this.getApi().then(api => {
                        return api.execute(this.siteKey, options);
                    });
                }
            }
            const recaptcha = (new Recaptcha("6LeVHq8UAAAAALGOCFGSUENd8yFUepA9ure6HqyX"));;
            class CancellationFormView {
                constructor($el) {
                    if (!$el.length) return;
                    this.$el = $el;
                    this.$email = this.$el.find('.field__input');
                    this.$button = this.$el.find('.button');
                    this.$email.on('keyup change', this.updateFormState.bind(this));
                    this.$el.on('submit', this.handleSubmit.bind(this));
                    this.captchaReady = false;
                    this.fetchCaptchaScoreToken();
                }
                updateFormState() {
                    const isEmailNotEmpty = this.$email.val().length > 1;
                    const isFormValid = isEmailNotEmpty && this.captchaReady;
                    this.$button.prop('disabled', !isFormValid);
                }
                fetchCaptchaScoreToken() {
                    recaptcha.execute({
                        action: 'cancellation'
                    }).then(token => {
                        this.$el.find('[name="captcha_token_v3"]').val(token);
                        this.captchaReady = true;
                        this.updateFormState();
                    });
                }
                handleSubmit(event) {
                    this.$button.prop('disabled', true);
                }
            }
            ready(function() {
                new CancellationFormView(jquery_default()('.cancellation__form'));
            });;
            class ContactUsView {
                constructor($el) {
                    if (!$el.length) return;
                    this.$el = $el;
                    this.initForm();
                    this.initTopics();
                }
                initForm() {
                    this.$form = this.$el.find('.contact__form');
                    this.$button = this.$el.find('.button');
                    this.isSubmitting = false;
                    this.fetchCaptchaScoreToken();
                    this.$form.on('submit', this.handleFormSubmit.bind(this));
                }
                fetchCaptchaScoreToken() {
                    recaptcha.execute({
                        action: 'contact_form'
                    }).then(token => {
                        this.$el.find('[name="captcha_token_v3"]').val(token);
                        this.$button.prop('disabled', false);
                    });
                }
                toggleSubmitting(state) {
                    this.isSubmitting = state;
                    this.$button.prop('disabled', state);
                }
                handleFormSubmit(event) {
                    event.preventDefault();
                    if (this.isSubmitting) return;
                    this.toggleSubmitting(true);
                    const formValues = this.$form.serializeArray();
                    this.submitTicket(formValues);
                }
                submitTicket(formValues) {
                    const subjectKey = formValues.find(el => el.name === 'topic');
                    if (subjectKey) formValues.push({
                        name: 'subject',
                        value: subjectKey.value
                    });
                    jquery_default().post('/support/ticket', formValues).done(response => {
                        this.toggleSubmitting(false);
                        if (!response.success) return this.handleError(response);
                        this.handleSuccess(response);
                    });
                }
                handleSuccess() {
                    this.$el.find('.contact__form-success').addClass('is-visible');
                    this.$el.find('.contact__form-container').addClass('is-hidden');
                }
                handleError(response) {
                    this.showErrorMessage(response.error);
                    if (response.error_code === 'captcha_required') this.showCaptcha();
                }
                showErrorMessage(message) {
                    const $error = this.$el.find('.contact__form-error');
                    $error.text(message).show();
                }
                initTopics() {
                    this.$topics = this.$form.find('input[name="topic"]');
                    this.topic = null;
                    this.$topics.on('change', this.handleTopicChange.bind(this));
                    this.handleTopicChange();
                }
                handleTopicChange() {
                    const topic = this.$topics.filter(':checked').val();
                    if (this.topic) this.$form.removeClass("contact__form--" + this.topic);
                    this.$form.addClass("contact__form--" + topic);
                    this.topic = topic;
                }
            }
            ready(function() {
                new ContactUsView(jquery_default()('.contact'));
            });;
            class BaseModal {
                constructor($root, options) {
                    if (options === void 0) {
                        options = {};
                    }
                    if (!$root || !$root.length) return;
                    this.$root = $root;
                    this.options = options;
                    this.preventFromClosing = false;
                    $root.on('click', '.modal__overlay', this.handleClickOverlay.bind(this));
                    $root.on('click', '.modal__close', this.close.bind(this));
                }
                close(forceClose) {
                    if (forceClose === void 0) {
                        forceClose = false;
                    }
                    if (forceClose || !this.preventFromClosing) {
                        this.$root.removeClass('is-visible is-animated');
                        jquery_default()('body').removeClass('is-modal-open');
                    }
                }
                open() {
                    this.$root.addClass('is-visible');
                    requestAnimationFrame(() => {
                        this.$root.addClass('is-animated');
                    });
                    jquery_default()('body').addClass('is-modal-open');
                }
                togglePreventClosing(state) {
                    if (state === void 0) {
                        state = true;
                    }
                    this.preventFromClosing = state;
                }
                handleClickOverlay(event) {
                    const isOverlay = jquery_default()(event.target).hasClass('modal-overlay') || jquery_default()(event.target).hasClass('modal__overlay');
                    if (isOverlay && !this.options.isBlocking) {
                        this.close();
                    }
                }
            }
            const baseModal = (BaseModal);;
            class ChangeCountryModal extends baseModal {}
            const changeCountryModal = (ChangeCountryModal);;
            const LS_KEY_ACTIVATED = 'INTERVIEW_MODAL_ACTIVATED';
            class InterviewModal extends baseModal {
                constructor($root) {
                    super($root);
                    if (!$root || !$root.length) return;
                    if (!this.shouldActivateModal()) return;
                    window.addEventListener('scroll', this.handleScroll.bind(this), {
                        passive: true
                    });
                    $root.on('click', '.interview-modal__skip', this.close.bind(this));
                    $root.on('click', '.interview-modal__book', this.close.bind(this));
                    this.deadlineTimer = setTimeout(this.triggerModal.bind(this), 15000);
                }
                shouldActivateModal() {
                    try {
                        return !localStorage.getItem(LS_KEY_ACTIVATED);
                    } catch (_error) {
                        return false;
                    }
                }
                handleScroll() {
                    if (this.scrollTriggered) return;
                    const max = document.body.scrollHeight - window.innerHeight;
                    const current = window.pageYOffset;
                    const scrollPercentage = current / max;
                    if (scrollPercentage > 0.1) {
                        this.scrollTriggered = true;
                        this.secondTimer = setTimeout(this.triggerModal.bind(this), 2000);
                    }
                }
                triggerModal() {
                    clearTimeout(this.deadlineTimer);
                    clearTimeout(this.secondTimer);
                    if (this.triggered) return;
                    this.triggered = true;
                    try {
                        localStorage.setItem(LS_KEY_ACTIVATED, 'true');
                    } catch (_error) {}
                    this.open();
                }
            }
            const interviewModal = (InterviewModal);;
            class CookieSettingsModal extends baseModal {}
            const cookieSettingsModal = (CookieSettingsModal);;
            let modals = {};
            ready(() => {
                modals.changeCountryModal = new changeCountryModal(jquery_default()('.modal--country-modal'));
                modals.interviewModal = new interviewModal(jquery_default()('.modal--interview-modal'));
                modals.cookieSettingsModal = new cookieSettingsModal(jquery_default()('.modal--cookie-settings-modal'));
            });
            const support_modals = (modals);;
            class CookiePanel {
                constructor($panel, cookieController) {
                    this.handleAcceptAllCookies = () => {
                        if (this.cookieController) {
                            this.cookieController.acceptAllCookies();
                        }
                        this.close();
                    };
                    this.handleRejectAllCookies = () => {
                        if (this.cookieController) {
                            this.cookieController.rejectAllCookies();
                        }
                        this.close();
                    };
                    this.open = () => {
                        this.$panel.addClass('is-open');
                    };
                    this.close = () => {
                        this.$panel.removeClass('is-open');
                    };
                    this.$panel = $panel;
                    this.cookieController = cookieController;
                    this.$acceptButton = this.$panel.find('.cookie-panel__accept');
                    this.$rejectButton = this.$panel.find('.cookie-panel__reject');
                    this.$settingsButton = this.$panel.find('.cookie-panel__settings');
                    this.open();
                    this.$acceptButton.click(this.handleAcceptAllCookies);
                    this.$rejectButton.click(this.handleRejectAllCookies);
                    this.$settingsButton.on('click', () => support_modals.cookieSettingsModal.open());
                }
            }
            const cookie_cookiePanel = (CookiePanel);;
            class CookieSettingsForm {
                constructor($form, cookieController, cookiePanel) {
                    this.handleSubmit = e => {
                        e.preventDefault();
                        const events = this.$form.serializeArray().map(item => item.value);
                        if (this.cookieController) {
                            this.cookieController.acceptCookies(events);
                        }
                        this.closeCookieControls();
                    };
                    this.handleClickAcceptAllButton = () => {
                        if (this.cookieController) {
                            this.cookieController.acceptAllCookies();
                        }
                        this.closeCookieControls();
                    };
                    this.handleClickRejectButton = () => {
                        if (this.cookieController) {
                            this.cookieController.rejectAllCookies();
                        }
                        this.closeCookieControls();
                    };
                    this.closeCookieControls = () => {
                        if (support_modals.cookieSettingsModal) {
                            support_modals.cookieSettingsModal.close();
                        }
                        if (this.cookiePanel) {
                            this.cookiePanel.close();
                        }
                    };
                    this.$form = $form;
                    this.cookieController = cookieController;
                    this.cookiePanel = cookiePanel;
                    this.$acceptAllCookiesButton = this.$form.find('.cookie-settings-modal__accept');
                    this.$rejectAllCookiesButton = this.$form.find('.cookie-settings-modal__reject');
                    this.$form.on('submit', this.handleSubmit);
                    this.$acceptAllCookiesButton.on('click', this.handleClickAcceptAllButton);
                    this.$rejectAllCookiesButton.on('click', this.handleClickRejectButton);
                }
            }
            const cookieSettingsForm = (CookieSettingsForm);;
            class Cookiebar {
                constructor($el, cookieController) {
                    this.handleScroll = () => {
                        this.handleAcceptAllCookies();
                        window.removeEventListener('scroll', this.handleScroll);
                    };
                    this.handleAcceptAllCookies = () => {
                        if (this.cookieController) {
                            this.cookieController.acceptAllCookies();
                        }
                        this.$el.removeClass('is-open');
                    };
                    this.$el = $el;
                    this.cookieController = cookieController;
                    this.$acceptButton = this.$el.find('.cookiebar__button');
                    this.$el.addClass('is-open');
                    const links = document.links;
                    Array.from(links).forEach(link => link.addEventListener('click', this.handleAcceptAllCookies));
                    this.$acceptButton.click(this.handleAcceptAllCookies);
                    window.addEventListener('scroll', this.handleScroll);
                }
            }
            const cookiebar = (Cookiebar);
            var js_cookie = __webpack_require__(2135);
            var js_cookie_default = __webpack_require__.n(js_cookie);;
            class CookieController {
                constructor() {
                    this.initializeStrictCookieControls = () => {
                        const $cookiePanel = jquery_default()('.cookie-panel');
                        if (!$cookiePanel.length) {
                            return this.setEarlierAcceptedCookies();
                        }
                        const cookiePanel = new cookie_cookiePanel($cookiePanel, this);
                        new cookieSettingsForm(jquery_default()('.cookie-settings-modal__form'), this, cookiePanel);
                    };
                    this.acceptCookies = types => {
                        const acceptedTypes = ['EssentialCookies', ...types];
                        if (!js_cookie_default().get('cookie_consent')) {
                            js_cookie_default().set('cookie_consent', acceptedTypes, {
                                expires: 365
                            });
                        }
                        if (types && types.length) {
                            if (this.strictMode) {
                                types.forEach(type => {
                                    if (this.allAdditionalTypes.indexOf(type) >= 0) {
                                        this.pushEventToDataLayer({
                                            event: type + 'Accepted'
                                        });
                                    }
                                });
                            } else {
                                this.pushEventToDataLayer({
                                    event: 'AcceptCookies'
                                });
                            }
                        }
                        this.addConsentStateUpdateToDatalayer(acceptedTypes);
                    };
                    this.acceptAllCookies = () => {
                        this.acceptCookies(this.allAdditionalTypes);
                    };
                    this.rejectAllCookies = () => {
                        this.acceptCookies([]);
                    };
                    this.setEarlierAcceptedCookies = () => {
                        const events = js_cookie_default().getJSON('cookie_consent');
                        if (events === true) {
                            return this.acceptCookies(this.allAdditionalTypes);
                        }
                        this.acceptCookies(events);
                    };
                    this.addConsentStateUpdateToDatalayer = acceptedTypes => {
                        if (this.strictMode) {
                            this.pushConsentToDataLayer(['consent', 'update', this.consentModeConfig(acceptedTypes, {
                                ad_storage: 'EssentialCookies',
                                ad_user_data: 'EssentialCookies',
                                ad_personalization: 'MarketingCookies',
                                analytics_storage: 'AnalyticalCookies'
                            })]);
                        } else {
                            this.pushConsentToDataLayer(['consent', 'update', this.consentModeConfig(acceptedTypes, {
                                ad_storage: 'EssentialCookies',
                                ad_user_data: 'EssentialCookies',
                                ad_personalization: 'EssentialCookies',
                                analytics_storage: 'EssentialCookies'
                            })]);
                        }
                    };
                    this.consentModeConfig = (acceptedTypes, consentTypeToCookieMapping) => {
                        function gtmConsentStateFor(cookieType) {
                            const COOKIE_CONSENT_GRANTED = 'granted';
                            const COOKIE_CONSENT_DENIED = 'denied';
                            return acceptedTypes.indexOf(cookieType) >= 0 ? COOKIE_CONSENT_GRANTED : COOKIE_CONSENT_DENIED;
                        }
                        const updatedConsent = Object.assign({}, consentTypeToCookieMapping);
                        for (const cookieType in consentTypeToCookieMapping) {
                            updatedConsent[cookieType] = gtmConsentStateFor(consentTypeToCookieMapping[cookieType]);
                        }
                        return updatedConsent;
                    };
                    this.allAdditionalTypes = ['AnalyticalCookies', 'MarketingCookies'];
                    this.strictMode = document.body.hasAttribute('data-strict-cookie-policy');
                    this.strictMode ? this.initializeStrictCookieControls() : this.initializeSimpleCookieControls();
                }
                initializeSimpleCookieControls() {
                    const $cookiebar = jquery_default()('.cookiebar');
                    if (!$cookiebar.length) {
                        return this.acceptAllCookies();
                    }
                    new cookiebar($cookiebar, this);
                }
                pushEventToDataLayer(data) {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push(data);
                }
                pushConsentToDataLayer(data) {
                    function gtag() {
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push(arguments);
                    }
                    gtag(...data);
                }
            }
            ready(function() {
                new CookieController();
            });;
            class DocumentsComponent {
                constructor($el) {
                    if ($el.length === 0) return;
                    this.$el = $el;
                    $el.find('.documents__tab-select').on('change', this.handleChange.bind(this));
                }
                handleChange(event) {
                    window.location = event.target.value;
                }
            }
            ready(function() {
                new DocumentsComponent(jquery_default()('.documents'));
            });;
            class ExamplesRootComponent {
                constructor($el) {
                    if ($el.length === 0) return;
                    this.toggleShowMoreCategories();
                    this.exampleType = $el.data('example-type');
                    if ($el.data('design') === 'new') {
                        new Collapse($el, {
                            itemClass: 'examples-category-card__collapse',
                            bodyClass: 'examples-category-card__collapse-body',
                            toggleClass: 'examples-category-card__collapse-button',
                            onOpen: () => trackInternalEvent("click_" + this.exampleType + "_examples_category", {
                                source: 'example_section_show_all'
                            })
                        });
                        return;
                    }
                    this.$el = $el;
                    this.isActive = false;
                    this.$stickyArea = $el.find('.examples-root__sidebar-sticky-area');
                    this.$scrollTop = $el.find('.examples-root__scroll-top');
                    this.throttledScrollHandler = throttle_throttle(this.handleScroll.bind(this), 150);
                    window.addEventListener('resize', this.handleResize.bind(this));
                    this.handleResize();
                    this.$scrollTop.on('click', this.scrollToCategories.bind(this));
                }
                handleResize() {
                    const isSidebarVisible = mediaQueries().isDesktop;
                    if (isSidebarVisible && !this.isActive) {
                        window.addEventListener('scroll', this.throttledScrollHandler, {
                            passive: true
                        });
                        this.handleScroll();
                        this.isActive = true;
                    } else if (!isSidebarVisible && this.isActive) {
                        window.removeEventListener('scroll', this.throttledScrollHandler);
                        this.isActive = false;
                    }
                }
                handleScroll() {
                    const isButtonVisible = jquery_default()(window).scrollTop() > this.$stickyArea.offset().top;
                    this.$scrollTop.toggleClass('examples-root__scroll-top--visible', isButtonVisible);
                }
                scrollToCategories() {
                    const navbarHeight = jquery_default()('.nav').height();
                    const scrollTop = this.$el.offset().top - navbarHeight;
                    jquery_default()('html, body').animate({
                        scrollTop
                    }, 300);
                }
                toggleShowMoreCategories() {
                    const section = document.getElementById('example-categories-section');
                    if (!section) return;
                    const showMoreButton = section.getElementsByClassName('examples-categories-button')[0];
                    if (!showMoreButton) return;
                    showMoreButton.addEventListener('click', event => {
                        let categories = section.getElementsByClassName('example-category-entry');
                        for (let category of categories) {
                            category.classList.toggle('show-category');
                        }
                        showMoreButton.classList.toggle('is-open');
                        const spanElement = showMoreButton.firstElementChild;
                        if (!spanElement) return;
                        const currentText = spanElement.textContent;
                        const newText = showMoreButton.getAttribute('data-alt-text');
                        spanElement.textContent = newText;
                        showMoreButton.setAttribute('data-alt-text', currentText || '');
                    });
                }
            }
            ready(function() {
                new ExamplesRootComponent(jquery_default()('.examples-root'));
            });;
            const trackingDebounced = debounce_default()((query, exampleType) => {
                trackInternalEvent("search_" + exampleType + "_example", {
                    query
                });
            }, 200);
            class ExamplesSearch {
                constructor(node) {
                    this.$el = jquery_default()(node);
                    this.$field = this.$el.find('.examples-search__input');
                    this.$dropdown = this.$el.find('.examples-search__dropdown');
                    this.$content = this.$el.find('.examples-search__content');
                    this.isReady = false;
                    this.isFieldFocused = false;
                    this.maxResults = 20;
                    this.exampleType = jquery_default()('.examples-root').data('example-type');
                    this.$field.on('focus', this.handleSearchFocus.bind(this));
                }
                prepare() {
                    this.searchEntries = this.serializeEntries();
                    this.$content.on('mousedown', 'a', this.handleLinkClick.bind(this));
                    this.$field.on('change keyup paste', this.renderDropdown.bind(this));
                    this.$field.on('blur', this.handleSearchBlur.bind(this));
                    this.isReady = true;
                }
                serializeEntries() {
                    const entries = jquery_default()('.js-example').map((i, el) => ({
                        title: jquery_default()(el).data('title'),
                        url: jquery_default()(el).attr('href')
                    }));
                    return entries.get().filter((val, i, arr) => arr.findIndex(item => item.title === val.title) === i);
                }
                handleLinkClick(event) {
                    event.stopPropagation();
                    return false;
                }
                handleSearchBlur(e) {
                    this.isFieldFocused = false;
                    this.renderDropdown(e);
                }
                handleSearchFocus(e) {
                    this.isFieldFocused = true;
                    trackInternalEvent("open_" + this.exampleType + "_example_search");
                    this.renderDropdown(e);
                }
                renderDropdown(e) {
                    if (!this.isReady) this.prepare();
                    const query = this.$field.val().trim().toLowerCase();
                    this.$content.empty();
                    const matches = this.searchEntries.filter(entry => query ? entry.title.toLowerCase().indexOf(query) !== -1 : true).slice(0, this.maxResults);
                    if (e.type === 'keyup') {
                        trackingDebounced(query, this.exampleType);
                    }
                    matches.forEach(entry => {
                        this.$content.append("\n          <a\n            class=\"examples-search__item\"\n            href=\"" + entry.url + "\"\n            data-internal-event='" + JSON.stringify({
                            name: "click_" + this.exampleType + "_example_search_result"
                        }) + "'\n          >\n            <span class=\"examples-search__item-name\">" + entry.title + "</span>\n          </a>\n        ");
                    });
                    const isActive = this.isFieldFocused && matches.length > 0;
                    this.$dropdown.toggleClass('is-active', isActive);
                    this.$content.scrollTop(0);
                }
            }
            ready(function() {
                document.querySelectorAll('.examples-search').forEach(node => {
                    new ExamplesSearch(node);
                });
            });;
            core_class.Z.use([lazy.Z, navigation.Z, scrollbar.Z]);
            class ExamplesCardsSlider {
                constructor(node) {
                    this.initializeSlider = () => {
                        new core_class.Z(this.$el.get(0), {
                            loop: this.$el.find('.examples-category-card__slider-item').length > 3,
                            slidesPerView: 'auto',
                            threshold: 15,
                            navigation: {
                                prevEl: '.examples-category-card__nav--prev',
                                nextEl: '.examples-category-card__nav--next'
                            },
                            pagination: {
                                el: '.examples-category-card__slider-pagination',
                                clickable: true
                            },
                            lazy: {
                                checkInView: true,
                                loadPrevNext: true,
                                loadOnTransitionStart: true,
                                elementClass: 'examples-category-card__link-image'
                            },
                            slideClass: 'examples-category-card__slider-item',
                            wrapperClass: 'examples-category-card__slider-inner',
                            breakpoints: {
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 20
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 8
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 8
                                }
                            }
                        });
                    };
                    this.$el = jquery_default()(node);
                    new VisibilityObserver(this.$el, {
                        rootMargin: '50% 0% 50% 0%',
                        callback: this.initializeSlider
                    });
                }
            }
            ready(function() {
                jquery_default()('.examples-category-card__slider-container').each((_, node) => {
                    new ExamplesCardsSlider(node);
                });
            });;
            class FooterComponent {
                constructor(node) {
                    this.initialize = () => {
                        this.$footerSharingLinks = this.$el.find('.footer__social-link');
                        this.$footerCountryButton = this.$el.find('.footer__country-switch');
                        this.$footerSharingLinks.each((i, item) => {
                            const $item = jquery_default()(item);
                            if (!$item.attr('href')) $item.on('click', e => this.handleShareClick(e, $item.data('type')));
                        });
                        this.$el.find('.footer__links-title').on('click', this.handleClick);
                        this.$footerCountryButton.on('click', () => support_modals.changeCountryModal.open());
                    };
                    this.handleClick = e => {
                        const $block = jquery_default()(e.target).parent('.footer__links-block');
                        const isBlockOpen = $block.hasClass('is-open');
                        const $openBlock = this.$el.find('.footer__links-block.is-open');
                        $openBlock.removeClass('is-open');
                        $openBlock.find('.footer__links-list').animate({
                            height: 0
                        }, 300);
                        if (!isBlockOpen) {
                            $block.addClass('is-open');
                            $block.find('.footer__links-list').animate({
                                height: $block.find('.footer__links-list').get(0).scrollHeight
                            }, 300);
                        }
                    };
                    this.handleShareClick = (event, name) => {
                        event.preventDefault();
                        const url = this.$el.data('url');
                        const title = this.$el.data('title');
                        const text = this.$el.data('text');
                        const textTwitter = this.$el.data('twitter');
                        switch (name) {
                            case 'facebook':
                                this.openSharingPopup('https://www.facebook.com/sharer.php', {
                                    s: 100,
                                    'p[url]': url
                                });
                                break;
                            case 'twitter':
                                this.openSharingPopup('https://twitter.com/share', {
                                    text: textTwitter,
                                    url: url
                                });
                                break;
                            case 'linkedin':
                                this.openSharingPopup('https://www.linkedin.com/shareArticle', {
                                    mini: 'true',
                                    url: url,
                                    title: title,
                                    summary: text
                                });
                                break;
                            case 'google':
                                this.openSharingPopup(' https://plus.google.com/share', {
                                    text: textTwitter,
                                    url: url
                                });
                                break;
                        }
                    };
                    this.openSharingPopup = function(url, params) {
                        if (params === void 0) {
                            params = {};
                        }
                        const windowFeatures = 'height=400, width=640, toolbar=no, menubar=no, ' + 'scrollbars=no, resizable=no, location=no,' + 'directories=no, status=no';
                        const windowName = 'sharing_popup';
                        const query = new URLSearchParams();
                        for (const name in params) query.append(name, params[name]);
                        window.open(url + "?" + query.toString(), windowName, windowFeatures);
                    };
                    this.$el = jquery_default()(node);
                    new VisibilityObserver(this.$el, {
                        callback: this.initialize
                    });
                }
            }
            ready(function() {
                jquery_default()('.footer').each((i, node) => {
                    new FooterComponent(node);
                });
            });
            var bodyScrollLock_min = __webpack_require__(92142);
            var headroom = __webpack_require__(13391);
            var headroom_default = __webpack_require__.n(headroom);;
            class Nav {
                constructor($el) {
                    if ($el.length === 0) return;
                    this.$el = $el;
                    this.initDropdownMenu();
                    this.initHeadroom();
                    this.initMobileMenu();
                }
                initMobileMenu() {
                    this.isMenuVisible = false;
                    this.$menu = this.$el.find('.nav__menu');
                    this.$hamburger = this.$el.find('.nav__bar-hamburger');
                    this.$hamburger.on('click', this.toggleMobileMenu.bind(this));
                    jquery_default()(window).on('resize', this.handleResize.bind(this));
                }
                handleResize() {
                    if (this.isMenuVisible && window.innerWidth > 1023) this.toggleMobileMenu();
                }
                toggleMobileMenu() {
                    this.isMenuVisible = !this.isMenuVisible;
                    this.$el.toggleClass('is-menu-opened', this.isMenuVisible);
                    this.$menu.toggleClass('is-visible', this.isMenuVisible);
                    this.$hamburger.toggleClass('is-menu-visible', this.isMenuVisible);
                    const updateBodyScroll = this.isMenuVisible ? bodyScrollLock_min.disableBodyScroll : bodyScrollLock_min.enableBodyScroll;
                    updateBodyScroll(this.$menu.get(0));
                }
                initDropdownMenu() {
                    const view = this;
                    view.categories = {};
                    view.visibleContent = null;
                    view.$triggers = this.$el.find('[data-trigger]');
                    view.$dropdown = this.$el.find('.nav__dropdown');
                    view.$content = this.$el.find('[data-content]');
                    view.$triggers.each(function(index) {
                        const name = jquery_default()(this).attr('data-trigger');
                        const $content = view.$el.find("[data-content=" + name + "]");
                        view.categories[name] = {
                            trigger: jquery_default()(this),
                            content: $content
                        };
                        if (index === 0) {
                            view.$dropdown.height($content.height());
                            jquery_default()(window).on('load.nav', () => view.$dropdown.height($content.height()));
                        }
                    });
                    view.$triggers.on('mouseleave', view.handleMouseLeave.bind(this));
                    view.$dropdown.on('mouseleave', view.handleMouseLeave.bind(this));
                    view.$triggers.on('mouseenter', view.handleMouseEnter.bind(this));
                    view.$dropdown.on('mouseenter', view.handleMouseEnter.bind(this));
                    view.$triggers.on('mouseleave', () => clearTimeout(view.showTimer));
                    view.$triggers.on('mouseenter', function() {
                        view.showTimer = setTimeout(() => view.showContent(jquery_default()(this).attr('data-trigger')), 100);
                        jquery_default()(window).off('load.nav');
                    });
                }
                hideContent(name) {
                    this.categories[name].trigger.removeClass('is-content-active');
                    this.categories[name].content.removeClass('is-visible');
                    this.visibleContent = null;
                }
                showContent(name) {
                    if (this.visibleContent) this.hideContent(this.visibleContent);
                    this.categories[name].trigger.addClass('is-content-active');
                    this.categories[name].content.addClass('is-visible');
                    this.$dropdown.height(this.categories[name].content.height());
                    this.toggleDropdown(true);
                    this.visibleContent = name;
                }
                toggleDropdown(visible) {
                    this.$el.toggleClass('is-dropdown-visible', visible);
                    this.$dropdown.toggleClass('is-visible', visible).toggleClass('is-hidden', !visible);
                    visible ? this.headroom.freeze() : this.headroom.unfreeze();
                }
                handleMouseEnter() {
                    clearTimeout(this.hideTimer);
                }
                handleMouseLeave() {
                    this.hideTimer = setTimeout(() => this.toggleDropdown(false), 50);
                }
                initHeadroom() {
                    this.headroom = new(headroom_default())(this.$el.get(0), {
                        offset: 100,
                        tolerance: 10,
                        classes: {
                            pinned: 'nav--pinned',
                            unpinned: 'nav--unpinned'
                        }
                    });
                    const updateState = () => {
                        const shouldUseHeadroom = window.innerWidth > 1023;
                        const {
                            initialised
                        } = this.headroom;
                        if (shouldUseHeadroom && !initialised) {
                            this.headroom.init();
                        } else if (!shouldUseHeadroom && initialised) {
                            this.headroom.destroy();
                        }
                    };
                    jquery_default()(window).on('resize', updateState);
                    updateState();
                }
            }
            ready(function() {
                new Nav(jquery_default()('.nav'));
            });;
            class PricingFaqView {
                constructor($el) {
                    if ($el.length === 0) return;
                    const view = this;
                    view.$el = $el;
                    view.$items = $el.find('.pricing__faq-item');
                    view.openIndex = -1;
                    view.$items.each(function(index) {
                        jquery_default()(this).on('click', () => view.toggle(index));
                    });
                }
                open(index) {
                    const $item = this.$items.eq(index);
                    const $answer = $item.find('.pricing__faq-answer');
                    $item.addClass('is-open');
                    $answer.animate({
                        height: $answer.get(0).scrollHeight
                    }, 300);
                    this.openIndex = index;
                }
                close(index) {
                    const $item = this.$items.eq(index);
                    $item.removeClass('is-open');
                    $item.find('.pricing__faq-answer').animate({
                        height: 0
                    }, 300);
                    this.openIndex = -1;
                }
                toggle(index) {
                    if (this.openIndex === index) {
                        this.close(index);
                    } else if (this.openIndex !== -1) {
                        this.close(this.openIndex);
                        this.open(index);
                    } else {
                        this.open(index);
                    }
                }
            }
            ready(function() {
                new PricingFaqView(jquery_default()('.pricing__faq'));
            });
            var autoplay = __webpack_require__(49583);
            var effect_fade = __webpack_require__(44769);;
            core_class.Z.use([autoplay.Z, effect_fade.Z]);
            class Showcase {
                constructor(node) {
                    this.insertVideos = () => {
                        this.$slides = this.$gallery.find('.showcase__video');
                        this.videos = [];
                        this.$slides.each((i, slideNode) => {
                            const $slide = jquery_default()(slideNode);
                            const src = $slide.data('video-src');
                            const $video = jquery_default()("<video muted=\"muted\" preload=\"auto\" type=\"video/mp4\" playsinline />");
                            const video = $video.attr({
                                src
                            }).appendTo($slide).get(0);
                            this.videos.push(video);
                        });
                        new VisibilityObserver(this.$gallery, {
                            callback: this.initializeSlider
                        });
                    };
                    this.configureDurations = () => {
                        this.$slides.each((i, slideNode) => {
                            const $slide = jquery_default()(slideNode);
                            const duration = parseInt($slide.data('video-duration')) * 1000;
                            $slide.attr('data-swiper-autoplay', duration);
                            this.navigation.setAnimationDuration(i, duration);
                        });
                    };
                    this.initializeSlider = () => {
                        const {
                            isTablet
                        } = mediaQueries();
                        this.$navigation = this.$el.find('.showcase__features');
                        this.navigation = new ShowcaseNavigation(this.$navigation.get(0), {
                            onClick: index => this.swiper && this.swiper.slideToLoop(index)
                        });
                        this.configureDurations();
                        this.swiper = new core_class.Z(this.$gallery.get(0), {
                            loop: true,
                            speed: 400,
                            slidesPerView: 1,
                            threshold: 15,
                            slideClass: 'showcase__video',
                            wrapperClass: 'showcase__videos-list',
                            simulateTouch: isTablet,
                            effect: isTablet ? 'slide' : 'fade',
                            fadeEffect: {
                                crossFade: true
                            },
                            autoplay: {
                                disableOnInteraction: false,
                                waitForTransition: false
                            },
                            pagination: {
                                el: '.showcase__bullets',
                                bulletClass: 'showcase__bullet',
                                bulletActiveClass: 'showcase__bullet--active'
                            }
                        });
                        this.swiper.on('slideChange', this.handleSlideChange);
                        this.swiper.on('slideChangeTransitionEnd', this.handleSlideChangeEnd);
                        this.handleSlideChange();
                    };
                    this.isSlideVisible = index => {
                        const {
                            slides,
                            activeIndex,
                            isBeginning,
                            isEnd
                        } = this.swiper;
                        if (index === activeIndex) return true;
                        if (isBeginning && index === slides.length - 1) return true;
                        if (isEnd && index === 0) return true;
                        return false;
                    };
                    this.handleSlideChange = () => {
                        const {
                            slides,
                            realIndex
                        } = this.swiper;
                        this.navigation.activate(realIndex);
                        slides.forEach((slide, index) => {
                            if (!this.isSlideVisible(index)) return;
                            const [video] = slide.childNodes;
                            video.currentTime = 0;
                            video.play();
                        });
                    };
                    this.handleSlideChangeEnd = () => {
                        const {
                            slides
                        } = this.swiper;
                        slides.forEach((slide, index) => {
                            if (this.isSlideVisible(index)) return;
                            const [video] = slide.childNodes;
                            video.currentTime = 0;
                        });
                    };
                    this.$el = jquery_default()(node);
                    this.$gallery = this.$el.find('.showcase__videos');
                    new VisibilityObserver(this.$gallery, {
                        rootMargin: '20% 0% 20% 0%',
                        callback: this.insertVideos
                    });
                }
            }
            class ShowcaseNavigation {
                constructor(node, options) {
                    this.updateDimensions = () => {
                        if (!mediaQueries().isTablet) return;
                        const tabHeights = this.$tabs.map((i, tab) => tab.scrollHeight).get();
                        const maxHeight = Math.max(...tabHeights);
                        this.$el.css('min-height', maxHeight);
                    };
                    this.setAnimationDuration = (index, duration) => {
                        this.$progressBars.eq(index).css('animation-duration', duration + "ms");
                    };
                    this.activate = index => {
                        if (this.activeIndex === index) return;
                        const {
                            isTablet
                        } = mediaQueries();
                        if (this.activeIndex !== null) {
                            this.$tabs.eq(this.activeIndex).removeClass('showcase__feature--active');
                            if (!isTablet) this.$subtitles.eq(this.activeIndex).slideUp(200);
                        }
                        this.$tabs.eq(index).addClass('showcase__feature--active');
                        if (!isTablet) this.$subtitles.eq(index).slideDown(200);
                        this.activeIndex = index;
                    };
                    this.$el = jquery_default()(node);
                    this.$tabs = this.$el.find('.showcase__feature');
                    this.$subtitles = this.$tabs.find('.showcase__feature-subtitle');
                    this.$progressBars = this.$tabs.find('.showcase__feature-bar-progress');
                    this.activeIndex = null;
                    this.updateDimensions();
                    jquery_default()(window).on('resize load', this.updateDimensions);
                    this.$tabs.each((index, tabNode) => {
                        jquery_default()(tabNode).on('click', () => options.onClick(index));
                    });
                }
            }
            ready(function() {
                jquery_default()('.showcase').each((i, node) => {
                    new Showcase(node);
                });
            });;
            core_class.Z.use([lazy.Z, navigation.Z, scrollbar.Z]);
            class DocumentExamplesComponent {
                constructor(node) {
                    this.initializeSlider = () => {
                        this.$gallery = this.$el.find('.document-examples__gallery');
                        this.$slider = this.$el.find('.document-examples__slider');
                        this.infinite = !mediaQueries().isPhone;
                        this.$gallery.toggleClass('document-examples__gallery--infinite', this.infinite);
                        new core_class.Z(this.$slider.get(0), {
                            loop: this.infinite,
                            slidesPerView: 'auto',
                            threshold: 15,
                            lazy: {
                                loadPrevNext: true,
                                loadPrevNextAmount: 8,
                                elementClass: 'document-examples__item-image'
                            },
                            navigation: {
                                prevEl: '.document-examples__nav--prev',
                                nextEl: '.document-examples__nav--next'
                            },
                            scrollbar: {
                                el: '.document-examples__scrollbar',
                                dragClass: 'document-examples__scrollbar-handle',
                                dragSize: 100
                            },
                            slideClass: 'document-examples__item',
                            slideActiveClass: 'document-examples__item--active',
                            wrapperClass: 'document-examples__list'
                        });
                        this.$el.addClass('document-examples--ready');
                    };
                    this.$el = jquery_default()(node);
                    new VisibilityObserver(this.$el, {
                        rootMargin: '50% 0% 50% 0%',
                        callback: this.initializeSlider
                    });
                }
            }
            ready(function() {
                jquery_default()('.document-examples').each((i, node) => {
                    new DocumentExamplesComponent(node);
                });
            });;
            const A4_FACTOR = 0.71;
            const VIEW_MODE_WIDTH = 356;
            const VIEW_MODE_HEIGHT = 480;
            const TEXT_CONTENT_MARGIN = 96;
            const TEMPLATE_MIN_HEIGHT = 326;
            const SUM_TOP_BOTTOM_CONTAINER_MARGINS = 160;
            const TEMPLATE_SIDE_MARGIN = 32;
            const TEMPLATES_CONTAINER_HEIGHT = 760;
            class TemplatesSlider {
                constructor($el) {
                    this.getCurrentSlickOptions = () => {
                        return {
                            draggable: this.currentMediaQueries.isTablet,
                            dots: this.isChoosingMode || this.currentMediaQueries.isTablet,
                            dotsClass: 'resume-templates__slider-dot',
                            infinite: true,
                            speed: 300,
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            centerMode: true,
                            centerPadding: 0,
                            initialSlide: 0,
                            variableWidth: true,
                            adaptiveHeight: true,
                            focusOnSelect: true,
                            nextArrow: null,
                            prevArrow: null
                        };
                    };
                    this.initSlider = () => {
                        this.insertSliderImages();
                        this.$templatesSlider.slick(this.getCurrentSlickOptions());
                        this.$el.find('.slick-slider').on('click', '.slick-slide', this.handleTemplateClick);
                        this.isInitiated = true;
                        this.handleWindowResize();
                        this.$el.addClass('resume-templates--ready');
                    };
                    this.insertSliderImages = () => {
                        this.$templatePreview.each((i, item) => {
                            item.src = jquery_default()(item).attr('data-template-bg');
                        });
                    };
                    this.setViewMode = () => {
                        let scaleFactorX = VIEW_MODE_WIDTH / this.templateWidth;
                        let scaleFactorY = VIEW_MODE_HEIGHT / this.templateHeight;
                        if (scaleFactorX > 1 || scaleFactorY > 1) {
                            scaleFactorX = 1;
                            scaleFactorY = 1;
                        }
                        this.$sliderWrapper.css('transform', "scale(" + scaleFactorX + ", " + scaleFactorY + ")");
                        const distanceFromWrapperToContainerX = this.$sliderContainer.offset().left - this.$sliderWrapper.offset().left;
                        const distanceFromContainerToTemplateY = this.$templates.eq(0).offset().top - this.$sliderWrapper.offset().top;
                        let translateDistance = this.$templatesTextContent.offset().left + this.$templatesTextContent.width() - distanceFromWrapperToContainerX + TEXT_CONTENT_MARGIN;
                        const translateDistanceY = this.$templatesTextContent.offset().top - this.$sliderWrapper.offset().top - distanceFromContainerToTemplateY;
                        this.$sliderWrapper.css('transform', "scale(" + scaleFactorX + ", " + scaleFactorY + ") " + ("translateX(" + translateDistance + "px) ") + ("translateY(" + translateDistanceY + "px)"));
                        this.updateSlickWithOptions(this.getCurrentSlickOptions());
                        setTimeout(() => {
                            this.$sliderWrapper.css('transition', "opacity 0.1s ease-in");
                            this.$sliderWrapper.addClass('is-visible');
                            this.viewModeSet = true;
                        }, 100);
                    };
                    this.updateSlickWithOptions = options => {
                        this.$templatesSlider.slick('slickSetOption', options, true);
                        this.$templatesSlider.slick('refresh');
                    };
                    this.handleWindowResize = () => {
                        if (!this.isInitiated) return;
                        this.currentMediaQueries = mediaQueries();
                        if (this.currentMediaQueries.isTablet) {
                            this.setSliderChoosingModeOff();
                            this.updateSlickWithOptions(this.getCurrentSlickOptions());
                            return;
                        }
                        if (!this.viewModeSet || this.isChoosingMode) {
                            this.templateHeight = Math.max(TEMPLATE_MIN_HEIGHT, TEMPLATES_CONTAINER_HEIGHT - SUM_TOP_BOTTOM_CONTAINER_MARGINS);
                            this.templateWidth = this.templateHeight * A4_FACTOR;
                            if (window.innerWidth < this.templateWidth * 3 + TEMPLATE_SIDE_MARGIN * 4) {
                                this.templateWidth = (window.innerWidth - TEMPLATE_SIDE_MARGIN * 4) / 3;
                                this.templateHeight = this.templateWidth / A4_FACTOR;
                            }
                            this.$sliderContainer.width(this.templateWidth * 3 + TEMPLATE_SIDE_MARGIN * 4);
                            this.$templates.width(this.templateWidth);
                            this.$templates.height(this.templateHeight);
                            this.updateSlickWithOptions(this.getCurrentSlickOptions());
                        }
                        if (!this.isChoosingMode) {
                            this.setViewMode();
                        }
                    };
                    this.handleTemplateClick = e => {
                        if (!this.isChoosingMode && !this.currentMediaQueries.isTablet) {
                            e.preventDefault();
                            e.stopPropagation();
                            this.setSliderChoosingModeOn();
                        }
                    };
                    this.showContentText = () => {
                        this.$templatesTextContent.css('transition', 'none');
                        this.$templatesTextContent.css('transform', "translateX(0)");
                        this.$templatesTextContent.css('opacity', 1);
                    };
                    this.hideContentText = () => {
                        const distance = this.$templatesTextContent.offset().left + this.$templatesTextContent.width();
                        this.$templatesTextContent.css('transform', "translateX(" + -distance + "px)");
                        this.$templatesTextContent.css('opacity', 0);
                    };
                    this.setSliderChoosingModeOff = () => {
                        this.showContentText();
                        this.$sliderWrapper.css('transition', 'none');
                        this.$sliderWrapper.css('transform', 'none');
                        this.$sliderWrapper.removeClass('is-choosing-mode-on');
                        this.$sliderButton.removeClass('resume-templates__item-button--visible');
                        this.$sliderControls.removeClass('is-visible');
                        this.$templatePreview.removeClass('is-choosing-mode-on');
                        this.$templateNameContainer.removeClass('is-visible');
                        this.isChoosingMode = false;
                    };
                    this.setSliderChoosingModeOn = () => {
                        this.hideContentText();
                        this.$sliderWrapper.css('transition', "transform 0.3s ease");
                        this.$sliderWrapper.css('transform', "scale(1, 1) translate(0, 0)");
                        this.$sliderWrapper.addClass('is-choosing-mode-on');
                        this.$templatePreview.addClass('is-choosing-mode-on');
                        this.$templateNameContainer.addClass('is-visible');
                        this.isChoosingMode = true;
                        this.updateSlickWithOptions(this.getCurrentSlickOptions());
                        setTimeout(() => {
                            this.$sliderButton.addClass('resume-templates__item-button--animated');
                            this.$sliderButton.addClass('resume-templates__item-button--visible');
                            this.$sliderControls.addClass('is-visible');
                            setTimeout(() => this.$sliderButton.removeClass('resume-templates__item-button--animated'), 200);
                        }, 200);
                    };
                    if ($el.length === 0) return;
                    this.$el = $el;
                    this.$templatesSlider = this.$el.find('.resume-templates__slider');
                    this.$templates = this.$el.find('.resume-templates__item').filter((i, item) => {
                        var _$$find$attr;
                        const templatePath = (_$$find$attr = jquery_default()(item).find('.resume-templates__item-button').attr('href')) != null ? _$$find$attr : '';
                        const templatePathWithoutParamValue = templatePath.split('=')[0];
                        const params = new URLSearchParams(templatePath);
                        let templateId = params.get(templatePathWithoutParamValue);
                        if (!templateId) {
                            templateId = params.get('template');
                        }
                        const japaneseTemplates = ['rirekisho', 'shokumukeirekisho'];
                        const isLocaleJp = Array.from(document.getElementsByClassName('footer__copyright')).some(item => item.textContent.includes('Rirekisho.jp'));
                        if (!isLocaleJp && japaneseTemplates.includes(templateId)) {
                            jquery_default()(item).remove();
                            return false;
                        }
                        const ATSTemplates = ['athens', 'brussels', 'prague', 'shanghai'];
                        if (isLocaleJp && ATSTemplates.includes(templateId)) {
                            jquery_default()(item).remove();
                            return false;
                        }
                        return true;
                    });
                    this.$templatesTextContent = this.$el.find('.resume-templates__content');
                    this.$sliderContainer = this.$el.find('.resume-templates__slider-container');
                    this.$sliderWrapper = this.$el.find('.resume-templates__slider-wrapper');
                    this.$sliderButton = this.$el.find('.resume-templates__item-button');
                    this.$sliderControls = this.$el.find('.resume-templates__slider-button');
                    this.$templatePreview = this.$el.find('.resume-templates__item-preview');
                    this.$templateNameContainer = this.$el.find('.resume-templates__item-name-container');
                    this.$sliderLeftButtom = this.$el.find('.resume-templates__slider-button--left');
                    this.$sliderRightButtom = this.$el.find('.resume-templates__slider-button--right');
                    this.$arrows = this.$el.find('.resume-templates__slider-arrow-container');
                    this.isChoosingMode = false;
                    this.templateHeight = 480;
                    this.templateWidth = 356;
                    this.viewModeSet = false;
                    this.currentMediaQueries = mediaQueries();
                    this.isInitiated = false;
                    this.$sliderLeftButtom.click(() => this.$templatesSlider.slick('slickPrev'));
                    this.$sliderRightButtom.click(() => this.$templatesSlider.slick('slickNext'));
                    this.$arrows.click(this.handleTemplateClick);
                    window.addEventListener('resize', this.handleWindowResize);
                    new VisibilityObserver(this.$el, {
                        rootMargin: '100% 0% 100% 0%',
                        callback: this.initSlider
                    });
                }
            }
            ready(function() {
                new TemplatesSlider(jquery_default()('.resume-templates'));
            });;
            class TemplatesRoot {
                constructor($root) {
                    this.serializeTags = () => {
                        const data = {};
                        this.$tabs.each((i, el) => {
                            const $tab = jquery_default()(el);
                            const tagName = $tab.data('tag');
                            const templatesOrder = $tab.data('templates-order').split(',');
                            const $cells = this.$cells.filter(function() {
                                return templatesOrder.includes(jquery_default()(this).data('name'));
                            });
                            data[tagName] = {
                                $tab,
                                $cells,
                                templatesOrder
                            };
                        });
                        return data;
                    };
                    this.handleTabClick = event => {
                        event.preventDefault();
                        const tagName = jquery_default()(event.target).data('tag');
                        trackInternalEvent('change_resume_templates_category', {
                            tab: tagName
                        });
                        this.showTag(tagName);
                    };
                    this.toggleTabState = (tagName, state) => {
                        const tag = this.tags[tagName];
                        tag.$tab.toggleClass('templates-filter__tab--active', state);
                    };
                    this.showTag = tagName => {
                        if (tagName === this.activeTagName || this.isAnimated) return;
                        this.isAnimated = true;
                        this.$grid.addClass('templates-grid--hidden');
                        this.toggleTabState(this.activeTagName, false);
                        this.activeTagName = tagName;
                        this.toggleTabState(tagName, true);
                        this.moveSelectorTo(tagName);
                        this.loadTagContent(tagName);
                        setTimeout(() => {
                            this.$cells.addClass('templates-grid__cell--hidden');
                            this.tags[tagName].$cells.removeClass('templates-grid__cell--hidden');
                            this.sortTemplates(tagName);
                            this.$grid.removeClass('templates-grid--hidden');
                            this.isAnimated = false;
                        }, 300);
                        const url = this.tags[tagName].$tab.attr('href');
                        window.history.replaceState({}, '', url);
                    };
                    this.sortTemplates = tagName => {
                        this.tags[tagName].templatesOrder.forEach(name => {
                            const $cell = this.$grid.find("[data-name=\"" + name + "\"]");
                            $cell.appendTo(this.$grid);
                        });
                    };
                    this.moveSelectorTo = tagName => {
                        const $tab = this.tags[tagName].$tab;
                        const {
                            left
                        } = $tab.position();
                        const width = $tab.width();
                        this.$selector.css('transform', "translateX(" + left + "px) scaleX(" + width / 100 + ")");
                        this.$selector.removeClass('templates-filter__tabs-selector--hidden');
                    };
                    this.handleRightCtaHeight = () => {
                        let removeCtaBannerTemplates = jquery_default()('#remove-cta-banner-value_templates').text();
                        if (removeCtaBannerTemplates) {
                            removeCtaBannerTemplates = removeCtaBannerTemplates === 'true';
                            trackInternalEvent('cta_banner_templates', {
                                saw_cta_banner: !removeCtaBannerTemplates
                            });
                            window.addEventListener('scroll', this.handleScroll(removeCtaBannerTemplates));
                        }
                    };
                    this.renderTagContent = tagName => {
                        if (tagName !== this.activeTagName) return;
                        const tag = this.tags[tagName];
                        this.$headerTitle.text(tag.headerTitle);
                        this.$headerSubtitle.text(tag.headerSubtitle);
                        this.$content.html(tag.content || '');
                        this.$post.css('display', tag.content ? 'block' : 'none');
                        let removeCtaBannerTemplates = jquery_default()('#remove-cta-banner-value_templates').text();
                        if (removeCtaBannerTemplates) {
                            removeCtaBannerTemplates = removeCtaBannerTemplates === 'true';
                            trackInternalEvent('cta_banner_templates', {
                                saw_cta_banner: !removeCtaBannerTemplates
                            });
                            window.addEventListener('scroll', this.handleScroll(removeCtaBannerTemplates));
                        }
                    };
                    this.loadTagContent = tagName => {
                        const tag = this.tags[tagName];
                        if (tag.loaded) return this.renderTagContent(tagName);
                        jquery_default().get(this.infoUrl, {
                            tag: tagName
                        }).done(result => {
                            Object.assign(tag, {
                                loaded: true,
                                headerTitle: result.title,
                                headerSubtitle: result.subtitle,
                                content: result.content
                            });
                            this.renderTagContent(tagName);
                        });
                    };
                    if ($root.length === 0) return;
                    this.$root = $root;
                    this.$filter = $root.find('.templates-filter');
                    this.$tabs = this.$filter.find('.templates-filter__tab');
                    this.$selector = this.$filter.find('.templates-filter__tabs-selector');
                    this.$grid = $root.find('.templates-grid');
                    this.$cells = $root.find('.templates-grid__cell');
                    this.$headerTitle = $root.find('.templates-root__header-title');
                    this.$headerSubtitle = $root.find('.templates-root__header-subtitle');
                    this.$post = $root.find('.blog-post');
                    this.$content = this.$post.find('.blog-post__content-main-wrapper');
                    this.infoUrl = this.$root.data('info-url');
                    this.activeTagName = $root.data('current-tag');
                    this.tags = this.serializeTags();
                    this.isAnimated = false;
                    this.$tabs.on('click', this.handleTabClick);
                    jquery_default()(window).on('load resize', () => {
                        this.moveSelectorTo(this.activeTagName);
                        this.handleRightCtaHeight();
                    });
                }
                handleScroll(removeCtaBannerTemplates) {
                    const postBannerCta = document.getElementById('post-banner-cta');
                    if (postBannerCta && removeCtaBannerTemplates === true) {
                        const mainContentHeight = jquery_default()('.blog-post__content-main-wrapper').height();
                        let rightPanelHeight = mainContentHeight * (70 / 100);
                        jquery_default()('#blog-post-banner-content-right').css({
                            height: rightPanelHeight
                        });
                    }
                }
            }
            ready(function() {
                new TemplatesRoot(jquery_default()('.templates-root'));
            });;
            class TemplatesCard {
                constructor(root) {
                    this.injectSecondaryImages = () => {
                        this.$card.find('[data-img-src]').each((i, el) => {
                            const $el = jquery_default()(el);
                            const src = $el.data('img-src');
                            const srcset = $el.data('img-srcset');
                            const width = $el.data('img-width');
                            const height = $el.data('img-height');
                            const color = $el.data('color');
                            const $img = jquery_default()('<img class="templates-card__preview-image" />').attr({
                                src,
                                srcset,
                                width,
                                height,
                                loading: 'lazy',
                                'data-color': color
                            });
                            $el.replaceWith($img);
                        });
                    };
                    this.makeInteractive = () => {
                        this.injectSecondaryImages();
                        this.$images = this.$card.find('.templates-card__preview-image');
                        this.colors = this.serializeColors(this.$colors, this.$images);
                        this.activeHex = this.$colors.filter('.templates-card__colors-item--active').data('color');
                        this.$colors.on('mouseenter', this.handleColorSelection);
                    };
                    this.serializeColors = ($colors, $images) => {
                        const data = {};
                        $colors.each((i, el) => {
                            const $control = jquery_default()(el);
                            const hex = $control.data('color');
                            const $image = $images.filter("[data-color=\"" + hex + "\"]");
                            data[hex] = {
                                $control,
                                $image
                            };
                        });
                        return data;
                    };
                    this.handleColorSelection = event => {
                        const hex = jquery_default()(event.target).data('color');
                        this.showColor(hex);
                    };
                    this.toggleColorState = (hex, state) => {
                        const color = this.colors[hex];
                        color.$control.toggleClass('templates-card__colors-item--active', state);
                        color.$image.toggleClass('templates-card__preview-image--active', state);
                    };
                    this.showColor = hex => {
                        if (hex === this.activeHex) return;
                        this.toggleColorState(this.activeHex, false);
                        this.toggleColorState(hex, true);
                        this.activeHex = hex;
                    };
                    this.$card = jquery_default()(root);
                    this.$colors = this.$card.find('.templates-card__colors-item');
                    if (this.$colors.length === 0) return;
                    this.$card.one('mouseenter', () => {
                        this.makeInteractive();
                        this.$card.addClass('templates-card--was-hovered');
                    });
                }
            }
            ready(function() {
                jquery_default()('.templates-grid__cell').each(function(index) {
                    var _$$find$attr;
                    const templatePath = (_$$find$attr = jquery_default()(this).find('.templates-card').attr('href')) != null ? _$$find$attr : '';
                    const templatePathWithoutParamValue = templatePath.split('=')[0];
                    const params = new URLSearchParams(templatePath);
                    const templateId = params.get(templatePathWithoutParamValue);
                    const japaneseTemplates = ['rirekisho', 'shokumukeirekisho'];
                    const isLocaleJp = Array.from(document.getElementsByClassName('footer__copyright')).some(item => item.textContent.includes('Rirekisho.jp'));
                    if (!isLocaleJp && japaneseTemplates.includes(templateId)) {
                        jquery_default()(this).remove();
                    }
                    const ATSTemplates = ['athens', 'brussels', 'prague', 'shanghai'];
                    if (isLocaleJp && ATSTemplates.includes(templateId)) {
                        jquery_default()(this).remove();
                    }
                    new TemplatesCard(this);
                });
            });;
            class TrustpilotSlider {
                constructor(node) {
                    var _this = this;
                    this.initializeSlider = () => {
                        this.$reviewsSlider = this.$el.find('.trustpilot-overview__reviews');
                        this.$buttonLeft = this.$el.find('.trustpilot-overview__reviews-button--left');
                        this.$buttonRight = this.$el.find('.trustpilot-overview__reviews-button--right');
                        this.$progressBar = this.$el.find('.trustpilot-overview__reviews-bar');
                        this.$progressLine = this.$el.find('.trustpilot-overview__reviews-bar-line');
                        this.$progressLineWrapper = this.$el.find('.trustpilot-overview__reviews-bar-line-wrapper');
                        this.$buttonLeft.on('click', () => this.$reviewsSlider.slick('slickPrev'));
                        this.$buttonRight.on('click', () => this.$reviewsSlider.slick('slickNext'));
                        window.addEventListener('resize', this.handleWindowResize.bind(this));
                        this.$reviewsSlider.slick(this.currentSlickOptions);
                        this.$reviewsSlider.on('beforeChange', this.handleChangeSlide);
                        this.updateProgressLineDimensions();
                        this.$el.addClass('trustpilot-overview--ready');
                    };
                    this.handleChangeSlide = (event, slick, currentSlide, nextSlide) => {
                        const edgeCases = this.detectEdgeCases(currentSlide, nextSlide);
                        this.setProgressLinePosition(currentSlide, nextSlide, edgeCases);
                    };
                    this.updateProgressLineDimensions = () => {
                        this.$progressLine.css('width', this.progressLineWidth + "px");
                        this.$progressLine.eq(0).css('transform', "translateX(" + -this.progressLineWidth * (this.countOfMoves + 1) + "px)");
                        this.$progressLine.eq(1).css('transform', "translateX(0px)");
                        this.$progressLine.eq(2).css('transform', "translateX(" + this.progressLineWidth * (this.countOfMoves + 1) + "px)");
                        this.setProgressLinePosition();
                    };
                    this.setProgressLinePosition = function(oldIndex, currentIndex, options) {
                        if (options === void 0) {
                            options = {};
                        }
                        const {
                            leftEdgeCase,
                            rightEdgeCase
                        } = options;
                        _this.$progressLineWrapper.css('transition', 'transform 0.2s ease');
                        if (rightEdgeCase) {
                            _this.applyLineTransition(_this.progressLineWidth * (_this.countOfMoves + 1));
                            return setTimeout(() => _this.applyLineTransition(0, true), 200);
                        }
                        if (leftEdgeCase) {
                            _this.applyLineTransition(-_this.progressLineWidth);
                            return setTimeout(() => _this.applyLineTransition(_this.progressLineWidth * _this.countOfMoves, true), 200);
                        }
                        _this.applyLineTransition(_this.progressLineWidth * currentIndex);
                    };
                    this.$el = jquery_default()(node);
                    new VisibilityObserver(this.$el, {
                        rootMargin: '50% 0% 50% 0%',
                        callback: this.initializeSlider
                    });
                }
                get currentSlickOptions() {
                    return {
                        draggable: false,
                        dots: false,
                        infinite: true,
                        speed: 250,
                        slidesToShow: this.countOfVisibleItems,
                        slidesToScroll: 1,
                        centerMode: false,
                        initialSlide: 0,
                        variableWidth: true,
                        variableHeight: true,
                        lazyLoad: 'progressive',
                        nextArrow: null,
                        prevArrow: null
                    };
                }
                get countOfVisibleItems() {
                    const currentMediaQueries = mediaQueries();
                    return currentMediaQueries.isTablet ? 2 : 3;
                }
                get countOfMoves() {
                    const countOfItems = this.$reviewsSlider.slick('getSlick').slideCount;
                    return countOfItems - 1;
                }
                get progressLineWidth() {
                    const barWidth = this.$progressBar.width();
                    return barWidth / (this.countOfMoves + 1);
                }
                detectEdgeCases(currentSlide, nextSlide) {
                    const slideCount = this.$reviewsSlider.slick('getSlick').slideCount;
                    const isCurrentSlideLast = currentSlide === slideCount - 1;
                    const isCurrentSlideFirst = currentSlide === 0;
                    const isNextSlideLast = nextSlide === slideCount - 1;
                    const isNextSlideFirst = nextSlide === 0;
                    if (isCurrentSlideFirst && isNextSlideLast) return {
                        leftEdgeCase: true
                    };
                    if (isCurrentSlideLast && isNextSlideFirst) return {
                        rightEdgeCase: true
                    };
                    return {};
                }
                handleWindowResize(e) {
                    this.$reviewsSlider.slick('slickSetOption', this.currentSlickOptions, true);
                    this.$reviewsSlider.slick('refresh');
                    this.updateProgressLineDimensions();
                }
                applyLineTransition(position, instant) {
                    if (instant === void 0) {
                        instant = false;
                    }
                    this.$progressLineWrapper.css({
                        transition: instant ? 'none' : 'transform 0.2s',
                        transform: "translateX(" + position + "px)"
                    });
                }
            }
            ready(function() {
                jquery_default()('.trustpilot-overview').each(function() {
                    new TrustpilotSlider(this);
                });
            });;
            class VideoCtaComponent {
                constructor($el) {
                    if ($el.length === 0 || !this.isDeviceSupported()) return;
                    this.$el = $el;
                    this.$visual = $el.find('.video-cta__visual');
                    this.videoSrc = $el.data('video-src');
                    this.video = this.createVideoNode();
                    this.wasPlayed = false;
                    this.loadObserver = new IntersectionObserver(this.handleLoadIntersection.bind(this), {
                        rootMargin: '75% 0% 75% 0%'
                    });
                    this.loadObserver.observe(this.video);
                    this.playObserver = new IntersectionObserver(this.handlePlayIntersection.bind(this));
                    this.playObserver.observe(this.video);
                }
                isDeviceSupported() {
                    const hasObserver = 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window;
                    const isMobile = mediaQueries().isTablet;
                    return !isMobile && hasObserver;
                }
                createVideoNode() {
                    return jquery_default()("<video class=\"video-cta__video\" muted=\"muted\" preload=\"none\" />").attr({
                        src: this.videoSrc,
                        type: 'video/mp4'
                    }).appendTo(this.$visual).get(0);
                }
                handlePlayIntersection(entries) {
                    if (!this.isVisible(entries[0])) return;
                    this.video.currentTime = 0;
                    this.video.play();
                    this.wasPlayed = true;
                }
                handleLoadIntersection(entries) {
                    if (!this.isVisible(entries[0])) return;
                    if (!this.wasPlayed) this.video.load();
                    this.loadObserver.disconnect();
                }
                isVisible(entry) {
                    if (entry === void 0) {
                        entry = {};
                    }
                    return entry.isIntersecting || entry.intersectionRatio > 0;
                }
            }
            ready(function() {
                new VideoCtaComponent(jquery_default()('.video-cta'));
            });;
            class PartnerBanner {
                constructor(node) {
                    node.addEventListener('click', function() {
                        const eventLabel = jquery_default()(node).data('company');
                        trackMarketingEvent('Blog Post', 'Open Partner Website', {
                            eventLabel
                        });
                    });
                }
            }
            ready(function() {
                jquery_default()('.partner-banner').each(function() {
                    new PartnerBanner(this);
                });
            });
            var imagesloaded = __webpack_require__(18517);
            var imagesloaded_default = __webpack_require__.n(imagesloaded);;
            class BuilderHeroResumes {
                constructor(node) {
                    this.$el = jquery_default()(node);
                    this.$lists = this.$el.find('.builder-hero__resumes-list');
                    this.$lists.each((columnIndex, column) => {
                        jquery_default()(column).find('.builder-hero__resume').each((index, el) => {
                            const delay = columnIndex * 0.15 + index * 0.175;
                            jquery_default()(el).css('transition-delay', delay + "s").find('img').css('transition-delay', delay + 0.075 + "s");
                        });
                    });
                    imagesloaded_default()(this.$el.find('img:visible'), e => {
                        this.$el.addClass('builder-hero__resumes--loaded');
                    });
                }
            }
            ready(function() {
                jquery_default()('.builder-hero__resumes').each(function() {
                    new BuilderHeroResumes(this);
                });
            });;
            class BuilderBenefit {
                constructor(node) {
                    this.handlePlayIntersection = entries => {
                        if (!this.isVisible(entries[0])) return;
                        this.video.currentTime = 0;
                        this.video.play();
                        this.wasPlayed = true;
                    };
                    this.handleLoadIntersection = entries => {
                        if (!this.isVisible(entries[0])) return;
                        if (!this.wasPlayed) this.video.load();
                        this.loadObserver.disconnect();
                    };
                    this.$el = jquery_default()(node);
                    this.$visual = this.$el.find('.builder-benefits__item-visual');
                    this.videoSrc = this.$visual.data('video-src');
                    this.video = this.createVideoNode();
                    this.wasPlayed = false;
                    jquery_default()(this.video).one('canplay', () => {
                        jquery_default()(this.video).addClass('builder-benefits__item-video--ready');
                    });
                    if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window) {
                        this.watchScrolling();
                    } else {
                        this.video.loop = true;
                        this.video.play();
                    }
                }
                watchScrolling() {
                    this.loadObserver = new IntersectionObserver(this.handleLoadIntersection, {
                        rootMargin: '100% 0% 100% 0%'
                    });
                    this.loadObserver.observe(this.video);
                    this.playObserver = new IntersectionObserver(this.handlePlayIntersection);
                    this.playObserver.observe(this.video);
                }
                createVideoNode() {
                    return jquery_default()("<video muted=\"muted\" preload=\"none\" playsinline />").attr({
                        src: this.videoSrc,
                        type: 'video/mp4'
                    }).addClass('builder-benefits__item-video').appendTo(this.$visual).get(0);
                }
                isVisible(entry) {
                    if (entry === void 0) {
                        entry = {};
                    }
                    return entry.isIntersecting || entry.intersectionRatio > 0;
                }
            }
            ready(function() {
                jquery_default()('.builder-benefits__item').each(function() {
                    new BuilderBenefit(this);
                });
            });;
            class BuilderResourcesGuide {
                constructor(node) {
                    this.updateContentOffset = () => {
                        const offset = this.$secondary.height();
                        const transform = "translateY(" + offset + "px)";
                        this.$content.css({
                            transform
                        });
                    };
                    this.$el = jquery_default()(node);
                    this.$content = this.$el.find('.builder-resources__guide-content');
                    this.$secondary = this.$el.find('.builder-resources__guide-secondary');
                    jquery_default()(window).on('resize load', this.updateContentOffset);
                    this.updateContentOffset();
                    this.$el.addClass('builder-resources__guide--ready');
                }
            }
            ready(function() {
                jquery_default()('.builder-resources__guide').each(function() {
                    new BuilderResourcesGuide(this);
                });
            });
            var pagination = __webpack_require__(65528);;
            core_class.Z.use([pagination.Z]);
            class BuilderHowSection {
                constructor(node) {
                    this.initialize = () => {
                        this.initializeAnimation();
                        this.updateMode();
                        jquery_default()(window).on('resize', this.updateMode);
                    };
                    this.updateMode = () => {
                        const {
                            isPhone
                        } = mediaQueries();
                        if (isPhone && !this.isSlider) {
                            this.buildSlider();
                        } else if (!isPhone && this.isSlider) {
                            this.swiper.destroy();
                        }
                    };
                    this.buildSlider = () => {
                        if (!mediaQueries().isPhone) return;
                        this.swiper = new core_class.Z(this.$steps.get(0), {
                            slidesPerView: 'auto',
                            slideClass: 'builder-how__step',
                            wrapperClass: 'builder-how__steps-list',
                            pagination: {
                                el: '.builder-how__bullets',
                                bulletClass: 'builder-how__bullet',
                                bulletActiveClass: 'builder-how__bullet--active'
                            }
                        });
                        this.swiper.on('slideChange', () => {
                            if (this.animation) this.animation.seekTo(this.swiper.activeIndex);
                        });
                    };
                    this.initializeAnimation = async () => {
                        const {
                            BuilderAnimation
                        } = await Promise.all([__webpack_require__.e(5769), __webpack_require__.e(7008)]).then(__webpack_require__.bind(__webpack_require__, 87008));
                        this.animation = new BuilderAnimation(this.$animation.get(0), this.$visual.get(0));
                        this.updateAnimation();
                        jquery_default()(window).on('resize', this.updateAnimation);
                        this.$animation.addClass('builder-how__animation--ready');
                    };
                    this.updateAnimation = () => {
                        const {
                            isPhone
                        } = mediaQueries();
                        const width = this.$animationWrapper.width();
                        const height = this.$animationWrapper.height();
                        const scale = width / this.animation.baseWidth;
                        this.$animation.css('transform', "scale(" + scale + ") translateZ(0)");
                        this.$animationWrapper.css('top', "calc(50% - " + (height / 2 - 30) + "px)");
                        this.animation.toggleScrollListener(!isPhone);
                    };
                    this.$el = jquery_default()(node);
                    this.$steps = this.$el.find('.builder-how__steps');
                    this.$visual = this.$el.find('.builder-how__visual');
                    this.$animationWrapper = this.$el.find('.builder-how__visual-inner');
                    this.$animation = this.$el.find('.builder-how__animation');
                    new VisibilityObserver(this.$el, {
                        rootMargin: '200% 0% 200% 0%',
                        callback: this.initialize
                    });
                }
                get isSlider() {
                    return this.swiper && !this.swiper.destroyed;
                }
            }
            ready(function() {
                jquery_default()('.builder-how').each(function() {
                    new BuilderHowSection(this);
                });
            });;
            class HomeResumeMaker {
                constructor(node) {
                    this.openLightbox = () => {
                        this.$lightboxContent.html("\n      <iframe\n        width=\"560\"\n        height=\"315\"\n        src=\"" + this.iframeSrc + "\"\n        frameborder=\"0\"\n        allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope\"\n        allowfullscreen\n      ></iframe>\n    ");
                        this.$lightbox.addClass('home-resume-maker__lightbox--rendered');
                        requestAnimationFrame(() => this.$lightbox.addClass('home-resume-maker__lightbox--visible'));
                    };
                    this.closeLightbox = () => {
                        this.$lightbox.removeClass('home-resume-maker__lightbox--rendered home-resume-maker__lightbox--visible');
                        this.$lightboxContent.empty();
                    };
                    this.handleLightboxClick = event => {
                        const [lightboxNode] = this.$lightbox;
                        const [closeButtonNode] = this.$closeButton;
                        if (event.target === lightboxNode || event.target === closeButtonNode) this.closeLightbox();
                    };
                    this.$root = jquery_default()(node);
                    this.$playButton = this.$root.find('.home-resume-maker__watch');
                    this.$lightbox = this.$root.find('.home-resume-maker__lightbox');
                    this.$lightboxContent = this.$root.find('.home-resume-maker__lightbox-content');
                    this.$closeButton = this.$root.find('.home-resume-maker__lightbox-close');
                    this.iframeSrc = this.$playButton.data('iframe-src');
                    this.$playButton.on('click', this.openLightbox);
                    this.$lightbox.on('click', this.handleLightboxClick);
                }
            }
            ready(function() {
                jquery_default()('.home-resume-maker').each(function() {
                    new HomeResumeMaker(this);
                });
            });
            var effect_coverflow = __webpack_require__(36889);;
            core_class.Z.use([lazy.Z, navigation.Z, effect_coverflow.Z]);
            class HomeTemplates {
                constructor(node) {
                    this.initializeSlider = () => {
                        const {
                            isPhone
                        } = mediaQueries();
                        this.$gallery = this.$el.find('.home-templates__gallery');
                        this.$slider = this.$el.find('.home-templates__slider');
                        this.$itemLinks = this.$el.find('.home-templates__item-link');
                        this.$headers = this.$el.find('.home-templates__header');
                        this.$useLink = this.$el.find('.home-templates__use-link');
                        this.$useLink.toggleClass('button--small', isPhone);
                        this.swiper = new core_class.Z(this.$gallery.get(0), {
                            loop: true,
                            slidesPerView: 'auto',
                            centeredSlides: true,
                            threshold: 15,
                            grabCursor: true,
                            slideClass: 'home-templates__item',
                            slideActiveClass: 'home-templates__item--active',
                            wrapperClass: 'home-templates__slider',
                            lazy: {
                                checkInView: true,
                                loadPrevNext: true,
                                loadPrevNextAmount: 3,
                                loadOnTransitionStart: true,
                                elementClass: 'home-templates__item-image'
                            },
                            navigation: {
                                prevEl: '.home-templates__nav--prev',
                                nextEl: '.home-templates__nav--next'
                            },
                            on: {
                                slideChange: swiper => {
                                    this.$headers.removeClass('home-templates__header--active');
                                    this.$headers.eq(swiper.realIndex).addClass('home-templates__header--active');
                                    this.$useLink.attr('href', this.$itemLinks.eq(swiper.realIndex).attr('href'));
                                }
                            },
                            spaceBetween: isPhone ? 16 : 0,
                            effect: isPhone ? 'slide' : 'coverflow',
                            coverflowEffect: {
                                rotate: 0,
                                stretch: 0,
                                depth: 250,
                                modifier: 1,
                                slideShadows: false
                            }
                        });
                        this.$el.addClass('home-templates--ready');
                        jquery_default()(window).on('load', () => this.swiper.update());
                    };
                    this.$el = jquery_default()(node);
                    new VisibilityObserver(this.$el, {
                        rootMargin: '50% 0% 50% 0%',
                        callback: this.initializeSlider
                    });
                }
            }
            ready(function() {
                jquery_default()('.home-templates').each((i, node) => {
                    new HomeTemplates(node);
                });
            });;
            core_class.Z.use([autoplay.Z, lazy.Z, effect_fade.Z]);
            class HomeHow {
                constructor(node) {
                    this.initializeSlider = () => {
                        const {
                            isPhone
                        } = mediaQueries();
                        const autoplayDelay = isPhone ? 15000 : 20000;
                        this.swiper = new core_class.Z(this.$gallery.get(0), {
                            loop: true,
                            slidesPerView: 1,
                            threshold: 15,
                            slideClass: 'home-how__pane',
                            wrapperClass: 'home-how__panes-list',
                            simulateTouch: false,
                            effect: isPhone ? 'slide' : 'fade',
                            fadeEffect: {
                                crossFade: true
                            },
                            autoplay: {
                                delay: autoplayDelay,
                                disableOnInteraction: false,
                                waitForTransition: false
                            },
                            lazy: {
                                checkInView: true,
                                loadPrevNext: true,
                                loadPrevNextAmount: 1,
                                loadOnTransitionStart: true,
                                elementClass: 'home-how__pane'
                            },
                            pagination: {
                                el: '.home-how__bullets',
                                bulletClass: 'home-how__bullet',
                                bulletActiveClass: 'home-how__bullet--active'
                            },
                            on: {
                                slideChange: swiper => {
                                    this.$tabs.removeClass('home-how__tab--active');
                                    this.$tabs.eq(swiper.realIndex).addClass('home-how__tab--active');
                                }
                            }
                        });
                        this.$progressBars.css('animation-duration', autoplayDelay + "ms");
                        this.$tabs.each((index, tabNode) => {
                            jquery_default()(tabNode).on('click', () => this.swiper.slideToLoop(index));
                        });
                    };
                    this.$el = jquery_default()(node);
                    this.$gallery = this.$el.find('.home-how__panes');
                    this.$tabs = this.$el.find('.home-how__tab');
                    this.$progressBars = this.$el.find('.home-how__tab-bar-progress');
                    new VisibilityObserver(this.$gallery, {
                        rootMargin: '50% 0% 50% 0%',
                        callback: this.initializeSlider
                    });
                }
            }
            ready(function() {
                jquery_default()('.home-how').each((i, node) => {
                    new HomeHow(node);
                });
            });;
            class HomeLetters {
                constructor(node) {
                    this.initialize = () => {
                        let cardsHtml = '';
                        for (let i = 1; i <= 14; i++) {
                            cardsHtml += "\n        <div class=\"home-letters__card home-letters__card--" + i + "\">\n          <div class=\"home-letters__card-main\"></div>\n        </div>\n      ";
                        }
                        this.$el.prepend(cardsHtml);
                    };
                    this.$el = jquery_default()(node);
                    new VisibilityObserver(this.$el, {
                        rootMargin: '50% 0% 50% 0%',
                        callback: this.initialize
                    });
                }
            }
            ready(function() {
                jquery_default()('.home-letters').each(function() {
                    new HomeLetters(this);
                });
            });;
            const acFormId = "7" || 0;
            window._load_script = (url, callback) => {
                const head = document.querySelector('head');
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = url;
                head.appendChild(script);
                script.onload = () => {
                    callback && callback();
                    head.removeChild(script);
                };
            };
            class SubscribeNewsletter {
                constructor($el) {
                    this.handleSubmit = e => {
                        e.preventDefault();
                        if (!this.$emailField[0].value) return;
                        const recaptcha = this.$form.find('.g-recaptcha-response')[0];
                        if (recaptcha && !recaptcha.value) {
                            this.$recaptchaWrapper.addClass(this.classes.recaptcha.error);
                            setTimeout(() => this.$recaptchaWrapper.removeClass(this.classes.recaptcha.error), 600);
                            return;
                        }
                        this.$submit.addClass(this.classes.submit.showSpinner);
                        window._show_thank_you = this.handleSuccess;
                        window._show_error = this.showError;
                        const acFormParams = jquery_default().param({
                            u: acFormId,
                            f: acFormId,
                            c: 0,
                            m: 0,
                            act: 'sub',
                            v: 2,
                            'g-recaptcha-response': recaptcha ? recaptcha.value : null
                        });
                        window._load_script("https://resume.activehosted.com/proc.php?jsonp=true&" + this.$form.serialize() + "&" + acFormParams, () => this.$submit.removeClass(this.classes.submit.showSpinner));
                        this.resetError();
                    };
                    this.handleSuccess = () => {
                        this.$el.addClass(this.classes.success);
                        if (this.$el.hasClass(this.classes.insidePost)) {
                            this.showSuccessScreen(200, 50);
                            trackMarketingEvent('Blog Post', 'Subscribe to Newsletter');
                        } else if (this.$el.hasClass(this.classes.insideBlog) || this.$el.hasClass(this.classes.insideCategory)) {
                            this.showSuccessScreen(350, 100);
                            trackMarketingEvent('Blog Root', 'Subscribe to Newsletter');
                        } else if (this.$el.hasClass(this.classes.insideLandingTop)) {
                            this.showSuccessLabel(100);
                        } else {
                            this.showSuccessScreen(350, 100);
                        }
                        trackInternalEvent('subscribe_newsletter_banner', {
                            label: this.pageType
                        });
                    };
                    this.showError = (_, message, html) => {
                        this.$recaptchaWrapper.show(0);
                        this.$recaptcha.append(html);
                    };
                    this.resetError = () => {
                        this.$emailField.removeClass(this.classes.fieldError);
                        this.$message.text('');
                        this.$recaptcha.html('');
                        this.$recaptchaWrapper.hide(0);
                        this.$recaptchaWrapper.removeClass(this.classes.recaptcha.error);
                    };
                    this.showSuccessScreen = (durationEachScreen, delayBetweenScreen) => {
                        this.$container.css({
                            overflow: 'hidden'
                        }).animate({
                            height: this.$containerSuccess.outerHeight(),
                            opacity: 0
                        }, {
                            duration: durationEachScreen,
                            queue: false,
                            done: () => {
                                this.$container.css({
                                    visibility: 'hidden'
                                });
                                setTimeout(() => {
                                    this.$containerSuccess.css({
                                        visibility: 'visible'
                                    });
                                    this.$containerSuccess.dequeue('success_step');
                                }, delayBetweenScreen);
                            }
                        });
                        this.$containerSuccess.animate({
                            opacity: 1
                        }, {
                            duration: durationEachScreen,
                            queue: 'success_step',
                            done: () => {
                                this.$container.css({
                                    visibility: 'hidden',
                                    display: 'none'
                                });
                                this.$containerSuccess.css({
                                    position: 'static'
                                });
                                this.$containerSuccess.addClass('show-icon');
                            }
                        });
                    };
                    this.showSuccessLabel = delayBetweenScreen => {
                        this.$container.addClass('show-success');
                        setTimeout(() => {
                            this.$containerSuccess.addClass('show-icon');
                        }, delayBetweenScreen);
                    };
                    if ($el.length === 0) return;
                    this.classes = {
                        success: 'subscribe-newsletter--success',
                        insidePost: 'subscribe-newsletter--inside-post',
                        insideBlog: 'subscribe-newsletter--inside-blog',
                        insideCategory: 'subscribe-newsletter--inside-category',
                        insideLandingTop: 'subscribe-newsletter--inside-newsletters_landing_top',
                        container: {
                            root: 'subscribe-newsletter__container',
                            init: 'subscribe-newsletter__container--init',
                            success: 'subscribe-newsletter__container--success'
                        },
                        form: 'subscribe-newsletter__form',
                        formMessage: 'field__message',
                        fieldError: 'field--error',
                        submit: {
                            root: 'subscribe-newsletter__form-button',
                            showSpinner: 'subscribe-newsletter__form-button--show-spinner'
                        },
                        recaptcha: {
                            root: 'recaptcha',
                            wrapper: 'recaptcha-wrapper',
                            error: 'recaptcha-wrapper--error'
                        }
                    };
                    this.$el = $el;
                    this.pageType = this.$el.data('page-type');
                    this.$container = this.$el.find("." + this.classes.container.init);
                    this.$containerSuccess = this.$el.find("." + this.classes.container.success);
                    this.$form = this.$el.find("." + this.classes.form);
                    this.$emailField = this.$form.find('[name="email"]');
                    this.$message = this.$form.find("." + this.classes.formMessage);
                    this.$submit = this.$form.find("." + this.classes.submit.root);
                    this.$recaptcha = this.$form.find("." + this.classes.recaptcha.root);
                    this.$recaptchaWrapper = this.$form.find("." + this.classes.recaptcha.wrapper);
                    this.$form.on('submit', this.handleSubmit);
                    this.$emailField.on('focus', () => trackInternalEvent('focus_email_field_of_newsletter_banner', {
                        label: this.pageType
                    }));
                    new VisibilityObserver(this.$el, {
                        rootMargin: '0%',
                        callback: () => trackInternalEvent('see_newsletter_banner', {
                            label: this.pageType
                        })
                    });
                }
            }
            ready(function() {
                jquery_default()('.subscribe-newsletter').each((_, banner) => new SubscribeNewsletter(jquery_default()(banner)));
                const $newslettersSubscriberBottom = jquery_default()('.newsletter-subscriber-bottom');
                jquery_default()('.newsletters-subscribe__button').on('click', () => {
                    jquery_default()('html, body').animate({
                        scrollTop: $newslettersSubscriberBottom.offset().top - 80
                    }, 500, () => $newslettersSubscriberBottom.find('.field__input').trigger('focus'));
                });
            });;
            core_class.Z.use([lazy.Z, navigation.Z, scrollbar.Z]);
            class AboutUsHistoryComponent {
                constructor(node) {
                    this.initializeSlider = () => {
                        new core_class.Z(this.$el.get(0), {
                            slidesPerView: 'auto',
                            centeredSlides: false,
                            initialSlide: 0,
                            effect: 'slide',
                            slidesPerGroup: 1,
                            grabCursor: true,
                            freeMode: false,
                            navigation: {
                                prevEl: '.history-container-nav--prev',
                                nextEl: '.history-container-nav--next'
                            },
                            slideClass: 'history-card__slider-item',
                            wrapperClass: 'history-card__slider-inner',
                            breakpoints: {
                                768: {
                                    spaceBetween: 8
                                },
                                300: {
                                    loop: true
                                }
                            }
                        });
                    };
                    this.$el = jquery_default()(node);
                    new VisibilityObserver(this.$el, {
                        rootMargin: '50% 0% 50% 0%',
                        callback: this.initializeSlider
                    });
                }
            }
            ready(function() {
                jquery_default()('.history-card-slider__Container').each((_, node) => {
                    new AboutUsHistoryComponent(node);
                });
            });;
            core_class.Z.use([lazy.Z, navigation.Z, scrollbar.Z]);
            class AboutUsLeadershipComponent {
                constructor(node) {
                    this.initializeSlider = () => {
                        new core_class.Z(this.$el.get(0), {
                            slidesPerView: 1,
                            loop: true,
                            centeredSlides: true,
                            navigation: {
                                prevEl: '.leadership-container-nav--prev',
                                nextEl: '.leadership-container-nav--next'
                            },
                            slideClass: 'leadership-main-container__slider-item',
                            wrapperClass: 'leadership-main-container__slider',
                            pagination: {
                                el: '.leadership__pagination',
                                clickable: true
                            }
                        });
                    };
                    this.$el = jquery_default()(node);
                    new VisibilityObserver(this.$el, {
                        rootMargin: '50% 0% 50% 0%',
                        callback: this.initializeSlider
                    });
                }
            }
            ready(function() {
                jquery_default()('.leadership-main-container').each((_, node) => {
                    new AboutUsLeadershipComponent(node);
                });
            });;
            core_class.Z.use([lazy.Z, navigation.Z, scrollbar.Z]);
            class AboutUsFeatureGalleryComponent {
                constructor(node) {
                    this.initializeSlider = () => {
                        new core_class.Z(this.$el.get(0), {
                            effect: 'slider',
                            centeredSlides: true,
                            slidesPerView: 'auto',
                            spaceBetween: 30,
                            loop: true,
                            navigation: {
                                prevEl: '.feature-gallery-nav--prev',
                                nextEl: '.feature-gallery-nav--next'
                            },
                            pagination: {
                                el: '.gallery__pagination',
                                clickable: true
                            },
                            breakpoints: {
                                375: {
                                    spaceBetween: 8
                                },
                                768: {
                                    spaceBetween: 30
                                }
                            },
                            slideClass: 'feature-gallery__slide',
                            wrapperClass: 'feature-gallery__wrapper'
                        });
                    };
                    this.$el = jquery_default()(node);
                    new VisibilityObserver(this.$el, {
                        rootMargin: '50% 0% 50% 0%',
                        callback: this.initializeSlider
                    });
                }
            }
            ready(function() {
                jquery_default()('.feature-gallery').each((_, node) => {
                    new AboutUsFeatureGalleryComponent(node);
                });
            });;
            class AboutUsHero {
                constructor(node) {
                    this.$el = jquery_default()(node);
                    this.$visual = this.$el.find('.about__hero-video');
                    this.videoSrc = this.$visual.data('video-src');
                    this.video = this.createVideoNode();
                    this.wasPlayed = false;
                    jquery_default()(this.video).one('canplay', () => {
                        jquery_default()(this.video).addClass('about__hero-item-video--ready');
                    });
                    this.video.loop = true;
                    this.video.play();
                }
                createVideoNode() {
                    return jquery_default()("<video muted=\"muted\" preload=\"none\" playsinline />").attr({
                        src: this.videoSrc,
                        type: 'video/mp4'
                    }).addClass('about__hero-item-video').appendTo(this.$visual).get(0);
                }
            }
            ready(function() {
                jquery_default()('.about__hero').each(function() {
                    new AboutUsHero(this);
                });
            });;
            class Anchor {
                constructor(anchor) {
                    this.handleClick = e => {
                        e.preventDefault();
                        const offset = jquery_default()('.nav').height();
                        const scrollTop = this.$target.offset().top - offset;
                        jquery_default()('html, body').animate({
                            scrollTop
                        }, 400);
                    };
                    this.$anchor = jquery_default()(anchor);
                    const selector = this.$anchor.attr('href') || this.$anchor.data('anchor');
                    this.$target = jquery_default()(selector);
                    this.$anchor.on('click', this.handleClick);
                }
            }
            ready(function() {
                jquery_default()('[data-anchor]').each(function() {
                    new Anchor(this);
                });
            });
            var dist = __webpack_require__(25888);;
            const DRP = window.devicePixelRatio || 1;
            const getBestSourceUrl = srcset => {
                try {
                    const sources = (0, dist.Z)(srcset).sort((a, b) => a.density - b.density);
                    const fallback = sources.shift();
                    return sources.reduce((value, source) => {
                        return source.density && source.density <= DRP ? source.url : value;
                    }, fallback.url);
                } catch (error) {
                    return srcset;
                }
            };
            class LazyLoader {
                constructor() {
                    if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window) {
                        this.observer = new IntersectionObserver(this.handleIntersection.bind(this), {
                            rootMargin: '25% 0% 25% 0%'
                        });
                    }
                }
                attach(node) {
                    jquery_default()(node).find('[data-lazy-bg]').each((i, element) => this.add(element));
                }
                add(element) {
                    if (this.observer) {
                        this.observer.observe(element);
                    } else {
                        this.load(element);
                    }
                }
                handleIntersection(entries, observer) {
                    entries.filter(entry => entry.isIntersecting || entry.intersectionRatio > 0).forEach(entry => {
                        this.load(entry.target);
                        observer.unobserve(entry.target);
                    });
                }
                load(element) {
                    const img = new Image();
                    const $targetElement = jquery_default()(element);
                    const src = getBestSourceUrl($targetElement.attr('data-lazy-bg'));
                    img.onload = () => {
                        if ($targetElement.is('img')) {
                            element.src = src;
                        } else {
                            element.style.backgroundImage = "url(" + src + ")";
                        }
                        element.classList.add('is-image-loaded');
                    };
                    img.src = src;
                }
            }
            const lazyLoader = new LazyLoader();
            ready(function() {
                lazyLoader.attach(document.body);
            });
            const support_lazyLoader = ((null && (lazyLoader)));;
            const clickTracker_excluded = ["name"];
            const clickTracker = e => {
                const link = e.target.closest('a');
                if (!link || !link.hasAttribute('data-marketing-event') && !link.hasAttribute('data-internal-event')) return;
                const {
                    marketingEvent,
                    internalEvent
                } = Object.keys(link.dataset).reduce((acc, key) => {
                    if (key === 'marketingEvent' || key === 'internalEvent') {
                        acc[key] = JSON.parse(link.dataset[key]);
                    }
                    return acc;
                }, {});
                const _ref = internalEvent || {},
                    {
                        name: internalEventName
                    } = _ref,
                    internalEventPayload = (0, objectWithoutPropertiesLoose.Z)(_ref, clickTracker_excluded);
                if (e.ctrlKey || e.shiftKey || e.metaKey || e.button === 1 || e.target.target === '_blank') {
                    if (internalEvent) trackInternalEvent(internalEventName, internalEventPayload);
                    if (marketingEvent) trackMarketingEvent(marketingEvent.category, marketingEvent.action);
                    return;
                }
                e.preventDefault();
                if (marketingEvent) {
                    if (internalEvent) trackInternalEvent(internalEventName, internalEventPayload);
                    trackMarketingEvent(marketingEvent.category, marketingEvent.action).then(() => {
                        document.location = link.href;
                    });
                } else if (internalEvent) {
                    trackInternalEvent(internalEventName, internalEventPayload);
                    document.location = link.href;
                }
            };
            document.body.addEventListener('click', clickTracker);
            document.body.addEventListener('auxclick', clickTracker);
            var setVw = __webpack_require__(37724);;
            class AffiliateSignup {
                constructor($root) {
                    this.init = () => {
                        this.arrangeFields();
                        this.initPasswordToggles();
                        this.initPasswordConfirmationCheck();
                        jquery_default()('input[name="affiliate_application[payment_system]"]').on('change', () => {
                            this.arrangeFields();
                        });
                    };
                    this.checkPassword = () => {
                        const password = this.$passwordInput.val();
                        const passwordConfirmation = this.$passwordConfirmationInput.val();
                        const fieldsAreNotEmpty = !!password && !!passwordConfirmation;
                        const fieldsAreNotMatch = password !== passwordConfirmation;
                        if (fieldsAreNotEmpty && fieldsAreNotMatch) {
                            this.showPasswordError();
                            this.$submitButton.attr('disabled', true);
                        } else {
                            this.hidePasswordError();
                            this.$submitButton.attr('disabled', false);
                        }
                    };
                    this.hidePasswordError = () => {
                        this.$passwordError.hide();
                    };
                    this.showPasswordError = () => {
                        this.$passwordError.show();
                        this.$passwordInput.attr('type', 'text');
                        this.$passwordConfirmationInput.attr('type', 'text');
                        this.$passwordToggles.removeClass('affiliates-signup__password-icon--disabled');
                    };
                    this.initPasswordConfirmationCheck = () => {
                        this.checkPassword();
                        this.$passwordInput.on('change', this.checkPassword).on('focus', this.hidePasswordError);
                        this.$passwordConfirmationInput.on('change', this.checkPassword).on('focus', this.hidePasswordError);
                    };
                    this.initPasswordToggles = () => {
                        this.$passwordToggles.on('click', function() {
                            const $input = jquery_default()(this).siblings('input');
                            const type = $input.attr('type');
                            if (type === 'password') {
                                $input.attr('type', 'text');
                                jquery_default()(this).removeClass('affiliates-signup__password-icon--disabled');
                            } else {
                                $input.attr('type', 'password');
                                jquery_default()(this).addClass('affiliates-signup__password-icon--disabled');
                            }
                        });
                    };
                    this.arrangeFields = () => {
                        const checkedSystem = this.$root.find('input[name="affiliate_application[payment_system]"]:checked').val();
                        if (checkedSystem === this.paymentSystems.payPal) {
                            this.$payPalField.show();
                            this.$swiftFields.hide();
                        }
                        if (checkedSystem === this.paymentSystems.swift) {
                            this.$payPalField.hide();
                            this.$swiftFields.show();
                        }
                    };
                    this.$root = $root;
                    this.$swiftFields = $root.find('.js-swift-fields');
                    this.$payPalField = $root.find('.js-paypal-fields');
                    this.$passwordInput = $root.find('.js-password');
                    this.$passwordConfirmationInput = $root.find('.js-password-confirmation');
                    this.$passwordError = $root.find('.js-password-error');
                    this.$passwordToggles = $root.find('.affiliates-signup__password-icon');
                    this.$submitButton = $root.find('.affiliates-signup__button');
                    this.paymentSystems = {
                        payPal: 'paypal',
                        swift: 'swift'
                    };
                    this.init();
                }
            }
            ready(function() {
                const $form = jquery_default()('.affiliates-signup__form');
                if ($form.length) {
                    return new AffiliateSignup($form);
                }
            });;
            class Sponsorship {
                constructor($root, options) {
                    if (options === void 0) {
                        options = {};
                    }
                    this.handleLogoInputChange = changeEvent => {
                        const input = changeEvent.currentTarget;
                        let fileName = '';
                        if (input.files && input.files[0]) {
                            fileName = input.files[0].name;
                            const reader = new FileReader();
                            reader.onload = loadEvent => {
                                this.showLogoPreview(loadEvent.target.result, fileName);
                            };
                            reader.readAsDataURL(input.files[0]);
                        }
                    };
                    this.handleUploadFileClick = () => {
                        this.$logoUploader.trigger('click');
                    };
                    this.showLogoPreview = (src, fileName) => {
                        this.$uploadPreview.addClass('is-visible');
                        this.$uploadRegion.addClass('is-hidden');
                        this.$previewImage.css('background-image', "url(" + src + ")");
                        this.$previewName.text(fileName);
                    };
                    this.handleClickHeaderCta = () => {
                        jquery_default()('html, body').animate({
                            scrollTop: this.$applySection.offset().top + 'px'
                        });
                    };
                    this.handleCheckboxChange = () => {
                        const showButton = this.$checkboxes.length === this.$checkboxes.filter(':checked').length;
                        this.$submitButton.toggleClass('button--disabled', !showButton);
                    };
                    this.showAfterApplyState = () => {
                        this.handleClickHeaderCta();
                        setTimeout(() => {
                            this.$applyFormContainer.addClass('fade-out');
                            this.$applySection.addClass('small-height');
                            this.$applyResult.addClass('fade-in');
                        }, 300);
                    };
                    this.$root = $root;
                    this.$applySection = this.$root.find('.sponsorship__apply');
                    this.$logoUploader = this.$root.find('#sponsor-logo-uploader');
                    this.$uploadPreview = this.$root.find('.sponsorship__upload-preview');
                    this.$uploadRegion = this.$root.find('.sponsorship__upload-region');
                    this.$previewImage = this.$root.find('.sponsorship__upload-preview-image');
                    this.$previewName = this.$root.find('.sponsorship__upload-preview-name');
                    this.$checkboxes = this.$root.find('.checkbox__input');
                    this.$submitButton = this.$root.find('.sponsorship__apply-form-button');
                    this.$applyForm = this.$root.find('.sponsorship__apply-form');
                    this.$applyFormContainer = this.$root.find('.sponsorship__apply-form-container');
                    this.$applyResult = this.$root.find('.sposnorship__apply-result');
                    this.$logoUploader.change(this.handleLogoInputChange);
                    this.$root.find('.sponsorship__head-button').click(this.handleClickHeaderCta);
                    this.$root.find('.sponsorship__upload-preview-button').click(this.handleUploadFileClick);
                    this.$checkboxes.change(this.handleCheckboxChange);
                    this.$applyForm.submit(this.showAfterApplyState);
                }
            }
            ready(function() {
                return new Sponsorship(jquery_default()('.container--sponsorship'));
            });;
            class Faq {
                constructor(_ref) {
                    let {
                        root,
                        classes
                    } = _ref;
                    if (!root.length) return;
                    this.opened = false;
                    this.duration = 200;
                    this.root = root;
                    this.classes = classes;
                    this.$questions = this.root.find("." + this.classes.question);
                    this.currentClass = this.classes.opened;
                    this.$questions.each(index => {
                        this.$questions.eq(index).on('click', () => this.toggle(index));
                    });
                    if (this.classes.seen) {
                        new VisibilityObserver(this.root, {
                            rootMargin: '50% 0% 50% 0%',
                            callback: () => this.root.addClass(this.classes.seen)
                        });
                    }
                }
                toggle(index) {
                    if (this.opened === index) {
                        this.hide(index);
                    } else if (this.opened !== false) {
                        this.hide(this.opened);
                        this.show(index);
                    } else {
                        this.show(index);
                    }
                }
                show(index) {
                    const $question = this.$questions.eq(index).addClass(this.currentClass);
                    const $text = $question.find("." + this.classes.content);
                    $text.slideDown(this.duration).animate({
                        opacity: 1
                    }, {
                        duration: this.duration,
                        queue: false
                    });
                    this.opened = index;
                }
                hide(index) {
                    const $question = this.$questions.eq(index).removeClass(this.currentClass);
                    const $text = $question.find("." + this.classes.content);
                    $text.slideUp(this.duration).animate({
                        opacity: 0
                    }, {
                        duration: this.duration,
                        queue: false
                    });
                    this.opened = false;
                }
            }
            const faq = (Faq);;
            class LanguageSelect {
                constructor($root) {
                    this.select = $root.find('select');
                    this.init();
                }
                init() {
                    this.select.on('change select', e => {
                        window.location.href = e.currentTarget.value;
                    });
                }
            }
            const languageSelect = (LanguageSelect);;
            class BillingView {
                constructor($el) {
                    if ($el.length === 0) return;
                    this.$el = $el;
                    new faq({
                        root: $el.find('.billing-faq__questions'),
                        classes: {
                            question: 'billing-faq__question',
                            opened: 'billing-faq__question--opened',
                            content: 'billing-faq__question-text'
                        }
                    });
                    new languageSelect($el.find('.language-select'));
                }
            }
            ready(function() {
                return new BillingView(jquery_default()('.billing-faq'));
            });;
            class HomeView {
                constructor($el) {
                    this.animateTextLabel = ($label, content) => {
                        if (!$label.length || this.isLabelAnimated || !document.hasFocus()) {
                            return;
                        }
                        this.isLabelAnimated = true;
                        if (!$label.hasClass('home__hero-animated-label')) {
                            $label.addClass('home__hero-animated-label');
                        }
                        const $prevContent = $label.children(':first');
                        $prevContent.addClass('is-out');
                        const $newContent = jquery_default()('<div>').addClass('home__hero-counter-number').text(content).addClass('is-in');
                        $label.prepend($newContent);
                        $label.css({
                            width: $prevContent.outerWidth()
                        });
                        getComputedStyle($newContent.get(0)).opacity;
                        getComputedStyle($label.get(0)).opacity;
                        $label.css({
                            width: $newContent.outerWidth()
                        });
                        $newContent.addClass('is-in-active');
                        $newContent.one('webkitTransitionEnd transitionend', () => {
                            $prevContent.remove();
                            $newContent.removeClass('is-in', 'is-in-active');
                            this.isLabelAnimated = false;
                        });
                    };
                    if ($el.length === 0) return;
                    this.$el = $el;
                    this.isLabelAnimated = false;
                    new faq({
                        root: $el.find('.home__faq'),
                        classes: {
                            seen: 'home__faq--seen',
                            question: 'home__question',
                            opened: 'home__question--opened',
                            content: 'home__question-content'
                        }
                    });
                }
                handleResumeCount(data) {
                    const localized = data.localized[this.$el.data('locale')];
                    if (!localized) return;
                    const resumesToday = localized.today;
                    const resumesTotal = localized.total;
                    this.animateTextLabel(this.$el.find('.home__hero-counter-wrapper'), resumesToday);
                    this.$el.find('.home__companies-stats-signups').text(resumesToday);
                    this.$el.find('.home__companies-stats-resumes').text(resumesTotal);
                }
            }
            ready(function() {
                return new HomeView(jquery_default()('.home'));
            });;
            window.googleOneTapEventsCallback = notification => {
                if (notification.isDisplayed()) {
                    jquery_default()('.cookiebar, .cookie-panel, .modal--cookie-settings-modal').css({
                        zIndex: 10000
                    });
                    trackInternalEvent('see_google_one_tap_modal');
                }
                if (notification.isSkippedMoment() && notification.getSkippedReason() === 'user_cancel') {
                    trackInternalEvent('click_close_button_google_one_tap_modal');
                }
            };;
        }),
        37724: (() => {
            function setVw() {
                let vw = document.documentElement.clientWidth / 100;
                document.documentElement.style.setProperty('--vw', vw + "px");
            }
            setVw();
            window.addEventListener('resize', setVw);
        })
    }
]);