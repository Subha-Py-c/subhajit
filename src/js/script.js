(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  else if (typeof define === "function" && define.amd)
    define("ScrollTrigger", [], factory);
  else if (typeof exports === "object") exports["ScrollTrigger"] = factory();
  else root["ScrollTrigger"] = factory();
})(self, () => {
  return /******/ (() => {
    // webpackBootstrap
    /******/ var __webpack_modules__ = {
      /***/ 91: /***/ () => {
        /**
         * Faster than .forEach
         * @param {(function())} fn The function to call
         */
        Array.prototype.each = function (fn) {
          var l = this.length;
          for (var i = 0; i < l; i++) {
            var e = this[i];
            if (e) {
              fn(e, i);
            }
          }
        };

        /**
         * Give NodeList some Array functions
         */
        NodeList.prototype.each = Array.prototype.each;
        NodeList.prototype.filter = Array.prototype.filter;

        /***/
      },

      /***/ 160: /***/ (module) => {
        /*!
         * object-extend
         * A well-tested function to deep extend (or merge) JavaScript objects without further dependencies.
         *
         * http://github.com/bernhardw
         *
         * Copyright 2013, Bernhard Wanger <mail@bernhardwanger.com>
         * Released under the MIT license.
         *
         * Date: 2013-04-10
         */

        /**
         * Extend object a with object b.
         *
         * @param {Object} a Source object.
         * @param {Object} b Object to extend with.
         * @returns {Object} a Extended object.
         */
        module.exports = function extend(a, b) {
          // Don't touch 'null' or 'undefined' objects.
          if (a == null || b == null) {
            return a;
          }

          // TODO: Refactor to use for-loop for performance reasons.
          Object.keys(b).forEach(function (key) {
            // Detect object without array, date or null.
            // TODO: Performance test:
            // a) b.constructor === Object.prototype.constructor
            // b) Object.prototype.toString.call(b) == '[object Object]'
            if (Object.prototype.toString.call(b[key]) == "[object Object]") {
              if (Object.prototype.toString.call(a[key]) != "[object Object]") {
                a[key] = b[key];
              } else {
                a[key] = extend(a[key], b[key]);
              }
            } else {
              a[key] = b[key];
            }
          });

          return a;
        };

        /***/
      },

      /******/
    };
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
      /******/ // Check if module is in cache
      /******/ var cachedModule = __webpack_module_cache__[moduleId];
      /******/ if (cachedModule !== undefined) {
        /******/ return cachedModule.exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/ var module = (__webpack_module_cache__[moduleId] = {
        /******/ // no module.id needed
        /******/ // no module.loaded needed
        /******/ exports: {},
        /******/
      });
      /******/
      /******/ // Execute the module function
      /******/ __webpack_modules__[moduleId](
        module,
        module.exports,
        __webpack_require__
      );
      /******/
      /******/ // Return the exports of the module
      /******/ return module.exports;
      /******/
    }
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/compat get default export */
    /******/ (() => {
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/ __webpack_require__.n = (module) => {
        /******/ var getter =
          module && module.__esModule
            ? /******/ () => module["default"]
            : /******/ () => module;
        /******/ __webpack_require__.d(getter, { a: getter });
        /******/ return getter;
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/define property getters */
    /******/ (() => {
      /******/ // define getter functions for harmony exports
      /******/ __webpack_require__.d = (exports, definition) => {
        /******/ for (var key in definition) {
          /******/ if (
            __webpack_require__.o(definition, key) &&
            !__webpack_require__.o(exports, key)
          ) {
            /******/ Object.defineProperty(exports, key, {
              enumerable: true,
              get: definition[key],
            });
            /******/
          }
          /******/
        }
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/ (() => {
      /******/ __webpack_require__.o = (obj, prop) =>
        Object.prototype.hasOwnProperty.call(obj, prop);
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/ (() => {
      /******/ // define __esModule on exports
      /******/ __webpack_require__.r = (exports) => {
        /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          /******/ Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module",
          });
          /******/
        }
        /******/ Object.defineProperty(exports, "__esModule", { value: true });
        /******/
      };
      /******/
    })();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be in strict mode.
    (() => {
      "use strict";
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        ScrollAnimationLoop: () =>
          /* binding */ ScrollTrigger_ScrollAnimationLoop,
        Trigger: () => /* binding */ ScrollTrigger_Trigger,
        TriggerCollection: () => /* binding */ ScrollTrigger_TriggerCollection,
        default: () => /* binding */ ScrollTrigger,
      }); // CONCATENATED MODULE: ./src/config/DefaultOptions.js

      /**
       * Default options for ScrollTrigger
       */
      /* harmony default export */ function DefaultOptions() {
        /**
         * The default options for a trigger
         *
         * @type {
         * {
         *  once: boolean,
         *  offset: {
         *    viewport: {
         *      x: number|(function(frame, direction)),
         *      y: number|(function(frame, direction))
         *    },
         *    element: {
         *      x: number|(function(rect, direction)),
         *      y: number|(function(rect, direction))
         *    }
         *  },
         *  toggle: {
         *    class: {
         *      in: string|string[],
         *      out: string|string[]
         *    },
         *  callback: {
         *    in: {TriggerInCallback},
         *    visible: (function()),
         *    out: (function())
         *  }
         * }
         * }}
         */
        this.trigger = {
          once: false,
          offset: {
            viewport: {
              x: 0,
              y: 0,
            },
            element: {
              x: 0,
              y: 0,
            },
          },
          toggle: {
            class: {
              in: "visible",
              out: "invisible",
            },
            callback: {
              in: null,
              visible: null,
              out: null,
            },
          },
        };

        /**
         * The `in` callback is called when the element enters the viewport
         * @callback TriggerInCallback
         * @param {{x: Number, y: Number}} position
         * @param {string} direction
         */

        /**
         * The default options for the scroll behaviour
         * @type {
         * {
         *  sustain: number,
         *  element: Window|HTMLDocument|HTMLElement,
         *  callback: {ScrollCallback},
         *  start: (function()),
         *  stop: (function()),
         *  directionChange: (function(direction: {string}))
         * }
         * }
         */
        this.scroll = {
          sustain: 300,
          element: window,
          callback: function callback() {},
          start: function start() {},
          stop: function stop() {},
          directionChange: function directionChange() {},
        };

        /**
         * The scroll callback is called when the user scrolls
         * @callback ScrollCallback
         * @param {{x: Number, y: Number}} position
         * @param {string} direction
         */
      }
      // EXTERNAL MODULE: ./node_modules/object-extend/lib/extend.js
      var extend = __webpack_require__(160);
      var extend_default = /*#__PURE__*/ __webpack_require__.n(extend);
      // EXTERNAL MODULE: ./src/extensions/Array.js
      var extensions_Array = __webpack_require__(91); // CONCATENATED MODULE: ./src/scripts/Trigger.js
      function _typeof(obj) {
        "@babel/helpers - typeof";
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(
            target,
            _toPropertyKey(descriptor.key),
            descriptor
          );
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return _typeof(key) === "symbol" ? key : String(key);
      }
      function _toPrimitive(input, hint) {
        if (_typeof(input) !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (_typeof(res) !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }

      function isInt(n) {
        return Number(n) === n && n % 1 === 0;
      }
      function isFloat(n) {
        return Number(n) === n && n % 1 !== 0;
      }
      var Trigger = /*#__PURE__*/ (function () {
        /**
         * Creates a new Trigger from the given element and options
         *
         * @param {Element|HTMLElement} element
         * @param {DefaultOptions.trigger} [options=DefaultOptions.trigger] options
         */
        function Trigger(element, options) {
          _classCallCheck(this, Trigger);
          this.element = element;
          options = extend_default()(new DefaultOptions().trigger, options);
          this.offset = options.offset;
          this.toggle = options.toggle;
          this.once = options.once;
          this.visible = null;
          this.active = true;
        }

        /**
         * Checks if the Trigger is in the viewport, calls the callbacks and toggles the classes
         * @param {HTMLElement|HTMLDocument|Window} parent
         * @param {string} direction top, bottom, left, right
         * @returns {boolean} If the element is visible
         */
        _createClass(Trigger, [
          {
            key: "checkVisibility",
            value: function checkVisibility(parent, direction) {
              if (!this.active) {
                return this.visible;
              }
              var parentWidth = parent.offsetWidth || parent.innerWidth || 0;
              var parentHeight = parent.offsetHeight || parent.innerHeight || 0;
              var parentFrame = {
                w: parentWidth,
                h: parentHeight,
              };
              var rect = this.getBounds();
              var visible = this._checkVisibility(rect, parentFrame, direction);
              if (visible !== this.visible) {
                this.visible = visible;
                var response = this._toggleCallback();
                if (response instanceof Promise) {
                  response
                    .then(this._toggleClass.bind(this))
                    ["catch"](function (e) {
                      console.error("Trigger promise failed");
                      console.error(e);
                    });
                } else {
                  this._toggleClass();
                }
                if (this.visible && this.once) {
                  this.active = false;
                }
              } else if (visible) {
                if (typeof this.toggle.callback.visible == "function") {
                  return this.toggle.callback.visible.call(this.element, this);
                }
              }
              return visible;
            },

            /**
             * Get the bounds of this element
             * @return {ClientRect | DOMRect}
             */
          },
          {
            key: "getBounds",
            value: function getBounds() {
              return this.element.getBoundingClientRect();
            },

            /**
             * Get the calculated offset to place on the element
             * @param {ClientRect} rect
             * @param {string} direction top, bottom, left, right
             * @returns {{x: number, y: number}}
             * @private
             */
          },
          {
            key: "_getElementOffset",
            value: function _getElementOffset(rect, direction) {
              var offset = {
                x: 0,
                y: 0,
              };
              if (typeof this.offset.element.x === "function") {
                offset.x =
                  rect.width * this.offset.element.x(this, rect, direction);
              } else if (isFloat(this.offset.element.x)) {
                offset.x = rect.width * this.offset.element.x;
              } else if (isInt(this.offset.element.x)) {
                offset.x = this.offset.element.x;
              }
              if (typeof this.offset.element.y === "function") {
                offset.y =
                  rect.height * this.offset.element.y(this, rect, direction);
              } else if (isFloat(this.offset.element.y)) {
                offset.y = rect.height * this.offset.element.y;
              } else if (isInt(this.offset.element.y)) {
                offset.y = this.offset.element.y;
              }
              return offset;
            },

            /**
             * Get the calculated offset to place on the viewport
             * @param {{w: number, h: number}} parent
             * @param {string} direction top, bottom, left, right
             * @returns {{x: number, y: number}}
             * @private
             */
          },
          {
            key: "_getViewportOffset",
            value: function _getViewportOffset(parent, direction) {
              var offset = {
                x: 0,
                y: 0,
              };
              if (typeof this.offset.viewport.x === "function") {
                offset.x =
                  parent.w * this.offset.viewport.x(this, parent, direction);
              } else if (isFloat(this.offset.viewport.x)) {
                offset.x = parent.w * this.offset.viewport.x;
              } else if (isInt(this.offset.viewport.x)) {
                offset.x = this.offset.viewport.x;
              }
              if (typeof this.offset.viewport.y === "function") {
                offset.y =
                  parent.h * this.offset.viewport.y(this, parent, direction);
              } else if (isFloat(this.offset.viewport.y)) {
                offset.y = parent.h * this.offset.viewport.y;
              } else if (isInt(this.offset.viewport.y)) {
                offset.y = this.offset.viewport.y;
              }
              return offset;
            },

            /**
             * Check the visibility of the trigger in the viewport, with offsets applied
             * @param {ClientRect} rect
             * @param {{w: number, h: number}} parent
             * @param {string} direction top, bottom, left, right
             * @returns {boolean}
             * @private
             */
          },
          {
            key: "_checkVisibility",
            value: function _checkVisibility(rect, parent, direction) {
              var elementOffset = this._getElementOffset(rect, direction);
              var viewportOffset = this._getViewportOffset(parent, direction);
              var visible = true;
              if (
                rect.left - viewportOffset.x <
                -(rect.width - elementOffset.x)
              ) {
                visible = false;
              }
              if (rect.left + viewportOffset.x > parent.w - elementOffset.x) {
                visible = false;
              }
              if (
                rect.top - viewportOffset.y <
                -(rect.height - elementOffset.y)
              ) {
                visible = false;
              }
              if (rect.top + viewportOffset.y > parent.h - elementOffset.y) {
                visible = false;
              }
              return visible;
            },

            /**
             * Toggles the classes
             * @private
             */
          },
          {
            key: "_toggleClass",
            value: function _toggleClass() {
              var _this = this;
              if (this.visible) {
                if (Array.isArray(this.toggle["class"]["in"])) {
                  this.toggle["class"]["in"].each(function (className) {
                    _this.element.classList.add(className);
                  });
                } else {
                  this.element.classList.add(this.toggle["class"]["in"]);
                }
                if (Array.isArray(this.toggle["class"].out)) {
                  this.toggle["class"].out.each(function (className) {
                    _this.element.classList.remove(className);
                  });
                } else {
                  this.element.classList.remove(this.toggle["class"].out);
                }
                return;
              }
              if (Array.isArray(this.toggle["class"]["in"])) {
                this.toggle["class"]["in"].each(function (className) {
                  _this.element.classList.remove(className);
                });
              } else {
                this.element.classList.remove(this.toggle["class"]["in"]);
              }
              if (Array.isArray(this.toggle["class"].out)) {
                this.toggle["class"].out.each(function (className) {
                  _this.element.classList.add(className);
                });
              } else {
                this.element.classList.add(this.toggle["class"].out);
              }
            },

            /**
             * Toggles the callback
             * @private
             * @return null|Promise
             */
          },
          {
            key: "_toggleCallback",
            value: function _toggleCallback() {
              if (this.visible) {
                if (typeof this.toggle.callback["in"] == "function") {
                  return this.toggle.callback["in"].call(this.element, this);
                }
              } else {
                if (typeof this.toggle.callback.out == "function") {
                  return this.toggle.callback.out.call(this.element, this);
                }
              }
            },
          },
        ]);
        return Trigger;
      })(); // CONCATENATED MODULE: ./src/scripts/TriggerCollection.js

      function TriggerCollection_typeof(obj) {
        "@babel/helpers - typeof";
        return (
          (TriggerCollection_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          TriggerCollection_typeof(obj)
        );
      }
      function TriggerCollection_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function TriggerCollection_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(
            target,
            TriggerCollection_toPropertyKey(descriptor.key),
            descriptor
          );
        }
      }
      function TriggerCollection_createClass(
        Constructor,
        protoProps,
        staticProps
      ) {
        if (protoProps)
          TriggerCollection_defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          TriggerCollection_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function TriggerCollection_toPropertyKey(arg) {
        var key = TriggerCollection_toPrimitive(arg, "string");
        return TriggerCollection_typeof(key) === "symbol" ? key : String(key);
      }
      function TriggerCollection_toPrimitive(input, hint) {
        if (TriggerCollection_typeof(input) !== "object" || input === null)
          return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (TriggerCollection_typeof(res) !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }

      var TriggerCollection = /*#__PURE__*/ (function () {
        /**
         * Initializes the collection
         * @param {Trigger[]} [triggers=[]] triggers A set of triggers to init with, optional
         */
        function TriggerCollection(triggers) {
          TriggerCollection_classCallCheck(this, TriggerCollection);
          /**
           * @member {Trigger[]}
           */
          this.triggers = triggers instanceof Array ? triggers : [];
        }

        /**
         * Adds one or multiple Trigger objects
         * @param {Trigger|Trigger[]} objects
         */
        TriggerCollection_createClass(TriggerCollection, [
          {
            key: "add",
            value: function add(objects) {
              var _this = this;
              if (objects instanceof Trigger) {
                // single
                return this.triggers.push(objects);
              }
              objects.each(function (trigger) {
                if (trigger instanceof Trigger) {
                  _this.triggers.push(trigger);
                } else {
                  console.error(
                    "Object added to TriggerCollection is not a Trigger. Object: ",
                    trigger
                  );
                }
              });
            },

            /**
             * Removes one or multiple Trigger objects
             * @param {Trigger|Trigger[]} objects
             */
          },
          {
            key: "remove",
            value: function remove(objects) {
              if (objects instanceof Trigger) {
                objects = [objects];
              }
              this.triggers = this.triggers.filter(function (trigger) {
                var hit = false;
                objects.each(function (object) {
                  if (object == trigger) {
                    hit = true;
                  }
                });
                return !hit;
              });
            },

            /**
             * Lookup one or multiple triggers by a query string
             * @param {string} selector
             * @returns {Trigger[]}
             */
          },
          {
            key: "query",
            value: function query(selector) {
              return this.triggers.filter(function (trigger) {
                var element = trigger.element;
                var parent = element.parentNode;
                var nodes = [].slice.call(parent.querySelectorAll(selector));
                return nodes.indexOf(element) > -1;
              });
            },

            /**
             * Lookup one or multiple triggers by a certain HTMLElement or NodeList
             * @param {HTMLElement|HTMLElement[]|NodeList} element
             * @returns {Trigger|Trigger[]|null}
             */
          },
          {
            key: "search",
            value: function search(element) {
              var found = this.triggers.filter(function (trigger) {
                if (element instanceof NodeList || Array.isArray(element)) {
                  var hit = false;
                  element.each(function (el) {
                    if (trigger.element == el) {
                      hit = true;
                    }
                  });
                  return hit;
                }
                return trigger.element == element;
              });
              return found.length == 0
                ? null
                : found.length > 1
                ? found
                : found[0];
            },

            /**
             * Calls a function on all triggers
             * @param {(function())} callback
             */
          },
          {
            key: "call",
            value: function call(callback) {
              this.triggers.each(callback);
            },
          },
        ]);
        return TriggerCollection;
      })(); // CONCATENATED MODULE: ./src/scripts/ScrollAnimationLoop.js

      function ScrollAnimationLoop_typeof(obj) {
        "@babel/helpers - typeof";
        return (
          (ScrollAnimationLoop_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          ScrollAnimationLoop_typeof(obj)
        );
      }
      function ScrollAnimationLoop_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function ScrollAnimationLoop_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(
            target,
            ScrollAnimationLoop_toPropertyKey(descriptor.key),
            descriptor
          );
        }
      }
      function ScrollAnimationLoop_createClass(
        Constructor,
        protoProps,
        staticProps
      ) {
        if (protoProps)
          ScrollAnimationLoop_defineProperties(
            Constructor.prototype,
            protoProps
          );
        if (staticProps)
          ScrollAnimationLoop_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function ScrollAnimationLoop_toPropertyKey(arg) {
        var key = ScrollAnimationLoop_toPrimitive(arg, "string");
        return ScrollAnimationLoop_typeof(key) === "symbol" ? key : String(key);
      }
      function ScrollAnimationLoop_toPrimitive(input, hint) {
        if (ScrollAnimationLoop_typeof(input) !== "object" || input === null)
          return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (ScrollAnimationLoop_typeof(res) !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }

      var ScrollAnimationLoop = /*#__PURE__*/ (function () {
        /**
         * ScrollAnimationLoop constructor.
         * Starts a requestAnimationFrame loop as long as the user has scrolled the scrollElement. Stops after a certain time.
         *
         * @param {DefaultOptions.scroll} [options=DefaultOptions.scroll] options The options for the loop
         * @param {ScrollCallback} callback [loop=null] The loop callback
         */
        function ScrollAnimationLoop(options, callback) {
          ScrollAnimationLoop_classCallCheck(this, ScrollAnimationLoop);
          this._parseOptions(options);
          if (typeof callback === "function") {
            this.callback = callback;
          }
          this.direction = "none";
          this.position = this.getPosition();
          this.lastAction = this._getTimestamp();
          this._startRun();
          this._boundListener = this._didScroll.bind(this);
          this.element.addEventListener("scroll", this._boundListener);
        }

        /**
         * Parses the options
         *
         * @param {DefaultOptions.scroll} [options=DefaultOptions.scroll] options The options for the loop
         * @private
         */
        ScrollAnimationLoop_createClass(ScrollAnimationLoop, [
          {
            key: "_parseOptions",
            value: function _parseOptions(options) {
              var defaults = new DefaultOptions().scroll;
              if (typeof options != "function") {
                defaults.callback = function () {};
                defaults = extend_default()(defaults, options);
              } else {
                defaults.callback = options;
              }
              this.element = defaults.element;
              this.sustain = defaults.sustain;
              this.callback = defaults.callback;
              this.startCallback = defaults.start;
              this.stopCallback = defaults.stop;
              this.directionChange = defaults.directionChange;
            },

            /**
             * Callback when the user scrolled the element
             * @private
             */
          },
          {
            key: "_didScroll",
            value: function _didScroll() {
              var newPosition = this.getPosition();
              if (this.position !== newPosition) {
                var newDirection = this.direction;
                if (newPosition.x !== this.position.x) {
                  newDirection =
                    newPosition.x > this.position.x ? "right" : "left";
                } else if (newPosition.y !== this.position.y) {
                  newDirection =
                    newPosition.y > this.position.y ? "bottom" : "top";
                } else {
                  newDirection = "none";
                }
                if (newDirection !== this.direction) {
                  this.direction = newDirection;
                  if (typeof this.directionChange === "function") {
                    this.directionChange(this.direction);
                  }
                }
                this.position = newPosition;
                this.lastAction = this._getTimestamp();
              } else {
                this.direction = "none";
              }
              if (!this.running) {
                this._startRun();
              }
            },

            /**
             * Starts the loop, calls the start callback
             * @private
             */
          },
          {
            key: "_startRun",
            value: function _startRun() {
              this.running = true;
              if (typeof this.startCallback === "function") {
                this.startCallback();
              }
              this._loop();
            },

            /**
             * Stops the loop, calls the stop callback
             * @private
             */
          },
          {
            key: "_stopRun",
            value: function _stopRun() {
              this.running = false;
              if (typeof this.stopCallback === "function") {
                this.stopCallback();
              }
            },

            /**
             * The current position of the element
             * @returns {{x: number, y: number}}
             */
          },
          {
            key: "getPosition",
            value: function getPosition() {
              var left =
                this.element.pageXOffset ||
                this.element.scrollLeft ||
                document.documentElement.scrollLeft ||
                0;
              var top =
                this.element.pageYOffset ||
                this.element.scrollTop ||
                document.documentElement.scrollTop ||
                0;
              return {
                x: left,
                y: top,
              };
            },

            /**
             * The current timestamp in ms
             * @returns {number}
             * @private
             */
          },
          {
            key: "_getTimestamp",
            value: function _getTimestamp() {
              return Number(Date.now());
            },

            /**
             * One single tick of the animation
             * @private
             */
          },
          {
            key: "_tick",
            value: function _tick() {
              this.callback(this.position, this.direction);
              var now = this._getTimestamp();
              if (now - this.lastAction > this.sustain) {
                this._stopRun();
              }
              if (this.running) {
                this._loop();
              }
            },

            /**
             * Requests an animation frame
             * @private
             */
          },
          {
            key: "_loop",
            value: function _loop() {
              var frame =
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                function (callback) {
                  setTimeout(callback, 1000 / 60);
                };
              frame(this._tick.bind(this));
            },

            /**
             * Kills the loop forever
             */
          },
          {
            key: "kill",
            value: function kill() {
              this.running = false;
              this.element.removeEventListener("scroll", this._boundListener);
            },
          },
        ]);
        return ScrollAnimationLoop;
      })(); // CONCATENATED MODULE: ./src/ScrollTrigger.js

      function ScrollTrigger_typeof(obj) {
        "@babel/helpers - typeof";
        return (
          (ScrollTrigger_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          ScrollTrigger_typeof(obj)
        );
      }
      function ScrollTrigger_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function ScrollTrigger_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(
            target,
            ScrollTrigger_toPropertyKey(descriptor.key),
            descriptor
          );
        }
      }
      function ScrollTrigger_createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          ScrollTrigger_defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          ScrollTrigger_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function ScrollTrigger_toPropertyKey(arg) {
        var key = ScrollTrigger_toPrimitive(arg, "string");
        return ScrollTrigger_typeof(key) === "symbol" ? key : String(key);
      }
      function ScrollTrigger_toPrimitive(input, hint) {
        if (ScrollTrigger_typeof(input) !== "object" || input === null)
          return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (ScrollTrigger_typeof(res) !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      /*!
       * ScrollTrigger
       *
       *
       * http://github.com/terwanerik
       *
       * Copyright 2017, Erik Terwan <erik@erikterwan.com>
       * Released under the MIT license.
       *
       * Date: 2017-07-09
       */

      /**
       * Created by Erik on 09/07/2017.
       */

      var ScrollTrigger_Trigger = Trigger;
      var ScrollTrigger_TriggerCollection = TriggerCollection;
      var ScrollTrigger_ScrollAnimationLoop = ScrollAnimationLoop;
      var ScrollTrigger = /*#__PURE__*/ (function () {
        /**
         * Constructor for the scroll trigger
         * @param {DefaultOptions} [options=DefaultOptions] options
         */
        function ScrollTrigger(options) {
          ScrollTrigger_classCallCheck(this, ScrollTrigger);
          this._parseOptions(options);
          this._initCollection();
          this._initLoop();
        }

        /**
         * Parses the options
         * @param {DefaultOptions} [options=DefaultOptions] options
         * @private
         */
        ScrollTrigger_createClass(ScrollTrigger, [
          {
            key: "_parseOptions",
            value: function _parseOptions(options) {
              options = extend_default()(new DefaultOptions(), options);
              this.defaultTrigger = options.trigger;
              this.scrollOptions = options.scroll;
            },

            /**
             * Initializes the collection, picks all [data-scroll] elements as initial elements
             * @private
             */
          },
          {
            key: "_initCollection",
            value: function _initCollection() {
              var scrollAttributes = document.querySelectorAll("[data-scroll]");
              var elements = [];
              if (scrollAttributes.length > 0) {
                elements = this.createTriggers(scrollAttributes);
              }
              this.collection = new ScrollTrigger_TriggerCollection(elements);
            },

            /**
             * Initializes the scroll loop
             * @private
             */
          },
          {
            key: "_initLoop",
            value: function _initLoop() {
              var _this = this;
              this.loop = new ScrollTrigger_ScrollAnimationLoop({
                sustain: this.scrollOptions.sustain,
                element: this.scrollOptions.element,
                callback: function callback(position, direction) {
                  _this._scrollCallback(position, direction);
                },
                start: function start() {
                  _this._scrollStart();
                },
                stop: function stop() {
                  _this._scrollStop();
                },
                directionChange: function directionChange(direction) {
                  _this._scrollDirectionChange(direction);
                },
              });
            },

            /**
             * Callback for checking triggers
             * @param {{x: number, y: number}} position
             * @param {string} direction
             * @private
             */
          },
          {
            key: "_scrollCallback",
            value: function _scrollCallback(position, direction) {
              var _this2 = this;
              this.collection.call(function (trigger) {
                trigger.checkVisibility(
                  _this2.scrollOptions.element,
                  direction
                );
              });
              this.scrollOptions.callback(position, direction);
            },

            /**
             * When the scrolling started
             * @private
             */
          },
          {
            key: "_scrollStart",
            value: function _scrollStart() {
              this.scrollOptions.start();
            },

            /**
             * When the scrolling stopped
             * @private
             */
          },
          {
            key: "_scrollStop",
            value: function _scrollStop() {
              this.scrollOptions.stop();
            },

            /**
             * When the direction changes
             * @param {string} direction
             * @private
             */
          },
          {
            key: "_scrollDirectionChange",
            value: function _scrollDirectionChange(direction) {
              this.scrollOptions.directionChange(direction);
            },

            /**
             * Creates a Trigger object from a given element and optional option set
             * @param {HTMLElement} element
             * @param {DefaultOptions.trigger} [options=DefaultOptions.trigger] options
             * @returns Trigger
             */
          },
          {
            key: "createTrigger",
            value: function createTrigger(element, options) {
              return new ScrollTrigger_Trigger(
                element,
                extend_default()(this.defaultTrigger, options)
              );
            },

            /**
             * Creates an array of triggers
             * @param {HTMLElement[]|NodeList} elements
             * @param {Object} [options=null] options
             * @returns {Trigger[]} Array of triggers
             */
          },
          {
            key: "createTriggers",
            value: function createTriggers(elements, options) {
              var _this3 = this;
              var triggers = [];
              elements.each(function (element) {
                triggers.push(_this3.createTrigger(element, options));
              });
              return triggers;
            },

            /**
             * Adds triggers
             * @param {string|HTMLElement|NodeList|Trigger|Trigger[]} objects A list of objects or a query
             * @param {Object} [options=null] options
             * @returns {ScrollTrigger}
             */
          },
          {
            key: "add",
            value: function add(objects, options) {
              if (objects instanceof HTMLElement) {
                this.collection.add(this.createTrigger(objects, options));
                return this;
              }
              if (objects instanceof ScrollTrigger_Trigger) {
                this.collection.add(objects);
                return this;
              }
              if (objects instanceof NodeList) {
                this.collection.add(this.createTriggers(objects, options));
                return this;
              }
              if (
                Array.isArray(objects) &&
                objects.length &&
                objects[0] instanceof ScrollTrigger_Trigger
              ) {
                this.collection.add(objects);
                return this;
              }
              if (
                Array.isArray(objects) &&
                objects.length &&
                objects[0] instanceof HTMLElement
              ) {
                this.collection.add(this.createTriggers(objects, options));
                return this;
              }

              // assume it's a query string
              this.collection.add(
                this.createTriggers(document.querySelectorAll(objects), options)
              );
              return this;
            },

            /**
             * Removes triggers
             * @param {string|HTMLElement|NodeList|Trigger|Trigger[]} objects A list of objects or a query
             * @returns {ScrollTrigger}
             */
          },
          {
            key: "remove",
            value: function remove(objects) {
              if (objects instanceof ScrollTrigger_Trigger) {
                this.collection.remove(objects);
                return this;
              }
              if (
                Array.isArray(objects) &&
                objects.length &&
                objects[0] instanceof ScrollTrigger_Trigger
              ) {
                this.collection.remove(objects);
                return this;
              }
              if (objects instanceof HTMLElement) {
                this.collection.remove(this.search(objects));
                return this;
              }
              if (
                Array.isArray(objects) &&
                objects.length &&
                objects[0] instanceof HTMLElement
              ) {
                this.collection.remove(this.search(objects));
                return this;
              }
              if (objects instanceof NodeList) {
                this.collection.remove(this.search(objects));
                return this;
              }
              if (
                Array.isArray(objects) &&
                objects.length &&
                objects[0] instanceof ScrollTrigger_Trigger
              ) {
                this.collection.remove(objects);
                return this;
              }

              // assume it's a query string
              this.collection.remove(this.query(objects.toString()));
              return this;
            },

            /**
             * Lookup one or multiple triggers by a query string
             * @param {string} selector
             * @returns {Trigger[]}
             */
          },
          {
            key: "query",
            value: function query(selector) {
              return this.collection.query(selector);
            },

            /**
             * Lookup one or multiple triggers by a certain HTMLElement or NodeList
             * @param {HTMLElement|HTMLElement[]|NodeList} element
             * @returns {Trigger|Trigger[]|null}
             */
          },
          {
            key: "search",
            value: function search(element) {
              return this.collection.search(element);
            },

            /**
             * Reattaches the scroll listener
             */
          },
          {
            key: "listen",
            value: function listen() {
              if (this.loop) {
                return;
              }
              this._initLoop();
            },

            /**
             * Kills the scroll listener
             */
          },
          {
            key: "kill",
            value: function kill() {
              this.loop.kill();
              this.loop = null;
            },
          },
        ]);
        return ScrollTrigger;
      })();
    })();

    /******/ return __webpack_exports__;
    /******/
  })();
});

var t, e;
(t = this),
  (e = function () {
    function t(t, e, i) {
      return Math.max(t, Math.min(e, i));
    }
    class Animate {
      advance(e) {
        if (!this.isRunning) return;
        let i = !1;
        if (this.lerp)
          (this.value =
            ((s = this.value),
            (o = this.to),
            (n = 60 * this.lerp),
            (l = e),
            (function (t, e, i) {
              return (1 - i) * t + i * e;
            })(s, o, 1 - Math.exp(-n * l)))),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (i = !0));
        else {
          this.currentTime += e;
          const s = t(0, this.currentTime / this.duration, 1);
          i = s >= 1;
          const o = i ? 1 : this.easing(s);
          this.value = this.from + (this.to - this.from) * o;
        }
        var s, o, n, l;
        this.onUpdate?.(this.value, i), i && this.stop();
      }
      stop() {
        this.isRunning = !1;
      }
      fromTo(
        t,
        e,
        {
          lerp: i = 0.1,
          duration: s = 1,
          easing: o = (t) => t,
          onStart: n,
          onUpdate: l,
        }
      ) {
        (this.from = this.value = t),
          (this.to = e),
          (this.lerp = i),
          (this.duration = s),
          (this.easing = o),
          (this.currentTime = 0),
          (this.isRunning = !0),
          n?.(),
          (this.onUpdate = l);
      }
    }
    class Dimensions {
      constructor({
        wrapper: t,
        content: e,
        autoResize: i = !0,
        debounce: s = 250,
      } = {}) {
        (this.wrapper = t),
          (this.content = e),
          i &&
            ((this.debouncedResize = (function (t, e) {
              let i;
              return function () {
                let s = arguments,
                  o = this;
                clearTimeout(i),
                  (i = setTimeout(function () {
                    t.apply(o, s);
                  }, e));
              };
            })(this.resize, s)),
            this.wrapper === window
              ? window.addEventListener("resize", this.debouncedResize, !1)
              : ((this.wrapperResizeObserver = new ResizeObserver(
                  this.debouncedResize
                )),
                this.wrapperResizeObserver.observe(this.wrapper)),
            (this.contentResizeObserver = new ResizeObserver(
              this.debouncedResize
            )),
            this.contentResizeObserver.observe(this.content)),
          this.resize();
      }
      destroy() {
        this.wrapperResizeObserver?.disconnect(),
          this.contentResizeObserver?.disconnect(),
          window.removeEventListener("resize", this.debouncedResize, !1);
      }
      resize = () => {
        this.onWrapperResize(), this.onContentResize();
      };
      onWrapperResize = () => {
        this.wrapper === window
          ? ((this.width = window.innerWidth),
            (this.height = window.innerHeight))
          : ((this.width = this.wrapper.clientWidth),
            (this.height = this.wrapper.clientHeight));
      };
      onContentResize = () => {
        this.wrapper === window
          ? ((this.scrollHeight = this.content.scrollHeight),
            (this.scrollWidth = this.content.scrollWidth))
          : ((this.scrollHeight = this.wrapper.scrollHeight),
            (this.scrollWidth = this.wrapper.scrollWidth));
      };
      get limit() {
        return {
          x: this.scrollWidth - this.width,
          y: this.scrollHeight - this.height,
        };
      }
    }
    class Emitter {
      constructor() {
        this.events = {};
      }
      emit(t, ...e) {
        let i = this.events[t] || [];
        for (let t = 0, s = i.length; t < s; t++) i[t](...e);
      }
      on(t, e) {
        return (
          this.events[t]?.push(e) || (this.events[t] = [e]),
          () => {
            this.events[t] = this.events[t]?.filter((t) => e !== t);
          }
        );
      }
      off(t, e) {
        this.events[t] = this.events[t]?.filter((t) => e !== t);
      }
      destroy() {
        this.events = {};
      }
    }
    const e = 100 / 6;
    class VirtualScroll {
      constructor(t, { wheelMultiplier: e = 1, touchMultiplier: i = 1 }) {
        (this.element = t),
          (this.wheelMultiplier = e),
          (this.touchMultiplier = i),
          (this.touchStart = { x: null, y: null }),
          (this.emitter = new Emitter()),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
          this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1,
          }),
          this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1,
          }),
          this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1,
          });
      }
      on(t, e) {
        return this.emitter.on(t, e);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, {
            passive: !1,
          }),
          this.element.removeEventListener("touchstart", this.onTouchStart, {
            passive: !1,
          }),
          this.element.removeEventListener("touchmove", this.onTouchMove, {
            passive: !1,
          }),
          this.element.removeEventListener("touchend", this.onTouchEnd, {
            passive: !1,
          });
      }
      onTouchStart = (t) => {
        const { clientX: e, clientY: i } = t.targetTouches
          ? t.targetTouches[0]
          : t;
        (this.touchStart.x = e),
          (this.touchStart.y = i),
          (this.lastDelta = { x: 0, y: 0 }),
          this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t });
      };
      onTouchMove = (t) => {
        const { clientX: e, clientY: i } = t.targetTouches
            ? t.targetTouches[0]
            : t,
          s = -(e - this.touchStart.x) * this.touchMultiplier,
          o = -(i - this.touchStart.y) * this.touchMultiplier;
        (this.touchStart.x = e),
          (this.touchStart.y = i),
          (this.lastDelta = { x: s, y: o }),
          this.emitter.emit("scroll", { deltaX: s, deltaY: o, event: t });
      };
      onTouchEnd = (t) => {
        this.emitter.emit("scroll", {
          deltaX: this.lastDelta.x,
          deltaY: this.lastDelta.y,
          event: t,
        });
      };
      onWheel = (t) => {
        let { deltaX: i, deltaY: s, deltaMode: o } = t;
        (i *= 1 === o ? e : 2 === o ? this.windowWidth : 1),
          (s *= 1 === o ? e : 2 === o ? this.windowHeight : 1),
          (i *= this.wheelMultiplier),
          (s *= this.wheelMultiplier),
          this.emitter.emit("scroll", { deltaX: i, deltaY: s, event: t });
      };
      onWindowResize = () => {
        (this.windowWidth = window.innerWidth),
          (this.windowHeight = window.innerHeight);
      };
    }
    return class Lenis {
      constructor({
        wrapper: t = window,
        content: e = document.documentElement,
        wheelEventsTarget: i = t,
        eventsTarget: s = i,
        smoothWheel: o = !0,
        syncTouch: n = !1,
        syncTouchLerp: l = 0.075,
        touchInertiaMultiplier: r = 35,
        duration: h,
        easing: a = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        lerp: c = !h && 0.1,
        infinite: d = !1,
        orientation: p = "vertical",
        gestureOrientation: u = "vertical",
        touchMultiplier: m = 1,
        wheelMultiplier: g = 1,
        autoResize: v = !0,
        __experimental__naiveDimensions: S = !1,
      } = {}) {
        (this.__isSmooth = !1),
          (this.__isScrolling = !1),
          (this.__isStopped = !1),
          (this.__isLocked = !1),
          (this.onVirtualScroll = ({ deltaX: t, deltaY: e, event: i }) => {
            if (i.ctrlKey) return;
            const s = i.type.includes("touch"),
              o = i.type.includes("wheel");
            if (
              this.options.syncTouch &&
              s &&
              "touchstart" === i.type &&
              !this.isStopped &&
              !this.isLocked
            )
              return void this.reset();
            const n = 0 === t && 0 === e,
              l =
                ("vertical" === this.options.gestureOrientation && 0 === e) ||
                ("horizontal" === this.options.gestureOrientation && 0 === t);
            if (n || l) return;
            let r = i.composedPath();
            if (
              ((r = r.slice(0, r.indexOf(this.rootElement))),
              r.find((t) => {
                var e, i, n, l, r;
                return (
                  (null === (e = t.hasAttribute) || void 0 === e
                    ? void 0
                    : e.call(t, "data-lenis-prevent")) ||
                  (s &&
                    (null === (i = t.hasAttribute) || void 0 === i
                      ? void 0
                      : i.call(t, "data-lenis-prevent-touch"))) ||
                  (o &&
                    (null === (n = t.hasAttribute) || void 0 === n
                      ? void 0
                      : n.call(t, "data-lenis-prevent-wheel"))) ||
                  ((null === (l = t.classList) || void 0 === l
                    ? void 0
                    : l.contains("lenis")) &&
                    !(null === (r = t.classList) || void 0 === r
                      ? void 0
                      : r.contains("lenis-stopped")))
                );
              }))
            )
              return;
            if (this.isStopped || this.isLocked) return void i.preventDefault();
            if (
              ((this.isSmooth =
                (this.options.syncTouch && s) ||
                (this.options.smoothWheel && o)),
              !this.isSmooth)
            )
              return (this.isScrolling = !1), void this.animate.stop();
            i.preventDefault();
            let h = e;
            "both" === this.options.gestureOrientation
              ? (h = Math.abs(e) > Math.abs(t) ? e : t)
              : "horizontal" === this.options.gestureOrientation && (h = t);
            const a = s && this.options.syncTouch,
              c = s && "touchend" === i.type && Math.abs(h) > 5;
            c && (h = this.velocity * this.options.touchInertiaMultiplier),
              this.scrollTo(
                this.targetScroll + h,
                Object.assign(
                  { programmatic: !1 },
                  a
                    ? { lerp: c ? this.options.syncTouchLerp : 1 }
                    : {
                        lerp: this.options.lerp,
                        duration: this.options.duration,
                        easing: this.options.easing,
                      }
                )
              );
          }),
          (this.onNativeScroll = () => {
            if (!this.__preventNextScrollEvent && !this.isScrolling) {
              const t = this.animatedScroll;
              (this.animatedScroll = this.targetScroll = this.actualScroll),
                (this.velocity = 0),
                (this.direction = Math.sign(this.animatedScroll - t)),
                this.emit();
            }
          }),
          (window.lenisVersion = "1.0.42"),
          (t !== document.documentElement && t !== document.body) ||
            (t = window),
          (this.options = {
            wrapper: t,
            content: e,
            wheelEventsTarget: i,
            eventsTarget: s,
            smoothWheel: o,
            syncTouch: n,
            syncTouchLerp: l,
            touchInertiaMultiplier: r,
            duration: h,
            easing: a,
            lerp: c,
            infinite: d,
            gestureOrientation: u,
            orientation: p,
            touchMultiplier: m,
            wheelMultiplier: g,
            autoResize: v,
            __experimental__naiveDimensions: S,
          }),
          (this.animate = new Animate()),
          (this.emitter = new Emitter()),
          (this.dimensions = new Dimensions({
            wrapper: t,
            content: e,
            autoResize: v,
          })),
          this.toggleClassName("lenis", !0),
          (this.velocity = 0),
          (this.isLocked = !1),
          (this.isStopped = !1),
          (this.isSmooth = n || o),
          (this.isScrolling = !1),
          (this.targetScroll = this.animatedScroll = this.actualScroll),
          this.options.wrapper.addEventListener(
            "scroll",
            this.onNativeScroll,
            !1
          ),
          (this.virtualScroll = new VirtualScroll(s, {
            touchMultiplier: m,
            wheelMultiplier: g,
          })),
          this.virtualScroll.on("scroll", this.onVirtualScroll);
      }
      destroy() {
        this.emitter.destroy(),
          this.options.wrapper.removeEventListener(
            "scroll",
            this.onNativeScroll,
            !1
          ),
          this.virtualScroll.destroy(),
          this.dimensions.destroy(),
          this.toggleClassName("lenis", !1),
          this.toggleClassName("lenis-smooth", !1),
          this.toggleClassName("lenis-scrolling", !1),
          this.toggleClassName("lenis-stopped", !1),
          this.toggleClassName("lenis-locked", !1);
      }
      on(t, e) {
        return this.emitter.on(t, e);
      }
      off(t, e) {
        return this.emitter.off(t, e);
      }
      setScroll(t) {
        this.isHorizontal
          ? (this.rootElement.scrollLeft = t)
          : (this.rootElement.scrollTop = t);
      }
      resize() {
        this.dimensions.resize();
      }
      emit() {
        this.emitter.emit("scroll", this);
      }
      reset() {
        (this.isLocked = !1),
          (this.isScrolling = !1),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          (this.velocity = 0),
          this.animate.stop();
      }
      start() {
        this.isStopped && ((this.isStopped = !1), this.reset());
      }
      stop() {
        this.isStopped ||
          ((this.isStopped = !0), this.animate.stop(), this.reset());
      }
      raf(t) {
        const e = t - (this.time || t);
        (this.time = t), this.animate.advance(0.001 * e);
      }
      scrollTo(
        e,
        {
          offset: i = 0,
          immediate: s = !1,
          lock: o = !1,
          duration: n = this.options.duration,
          easing: l = this.options.easing,
          lerp: r = !n && this.options.lerp,
          onComplete: h,
          force: a = !1,
          programmatic: c = !0,
        } = {}
      ) {
        if ((!this.isStopped && !this.isLocked) || a) {
          if (["top", "left", "start"].includes(e)) e = 0;
          else if (["bottom", "right", "end"].includes(e)) e = this.limit;
          else {
            let t;
            if (
              ("string" == typeof e
                ? (t = document.querySelector(e))
                : (null == e ? void 0 : e.nodeType) && (t = e),
              t)
            ) {
              if (this.options.wrapper !== window) {
                const t = this.options.wrapper.getBoundingClientRect();
                i -= this.isHorizontal ? t.left : t.top;
              }
              const s = t.getBoundingClientRect();
              e = (this.isHorizontal ? s.left : s.top) + this.animatedScroll;
            }
          }
          if ("number" == typeof e) {
            if (
              ((e += i),
              (e = Math.round(e)),
              this.options.infinite
                ? c && (this.targetScroll = this.animatedScroll = this.scroll)
                : (e = t(0, e, this.limit)),
              s)
            )
              return (
                (this.animatedScroll = this.targetScroll = e),
                this.setScroll(this.scroll),
                this.reset(),
                void (null == h || h(this))
              );
            if (!c) {
              if (e === this.targetScroll) return;
              this.targetScroll = e;
            }
            this.animate.fromTo(this.animatedScroll, e, {
              duration: n,
              easing: l,
              lerp: r,
              onStart: () => {
                o && (this.isLocked = !0), (this.isScrolling = !0);
              },
              onUpdate: (t, e) => {
                (this.isScrolling = !0),
                  (this.velocity = t - this.animatedScroll),
                  (this.direction = Math.sign(this.velocity)),
                  (this.animatedScroll = t),
                  this.setScroll(this.scroll),
                  c && (this.targetScroll = t),
                  e || this.emit(),
                  e &&
                    (this.reset(),
                    this.emit(),
                    null == h || h(this),
                    (this.__preventNextScrollEvent = !0),
                    requestAnimationFrame(() => {
                      delete this.__preventNextScrollEvent;
                    }));
              },
            });
          }
        }
      }
      get rootElement() {
        return this.options.wrapper === window
          ? document.documentElement
          : this.options.wrapper;
      }
      get limit() {
        return this.options.__experimental__naiveDimensions
          ? this.isHorizontal
            ? this.rootElement.scrollWidth - this.rootElement.clientWidth
            : this.rootElement.scrollHeight - this.rootElement.clientHeight
          : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
      }
      get isHorizontal() {
        return "horizontal" === this.options.orientation;
      }
      get actualScroll() {
        return this.isHorizontal
          ? this.rootElement.scrollLeft
          : this.rootElement.scrollTop;
      }
      get scroll() {
        return this.options.infinite
          ? ((t = this.animatedScroll), (e = this.limit), ((t % e) + e) % e)
          : this.animatedScroll;
        var t, e;
      }
      get progress() {
        return 0 === this.limit ? 1 : this.scroll / this.limit;
      }
      get isSmooth() {
        return this.__isSmooth;
      }
      set isSmooth(t) {
        this.__isSmooth !== t &&
          ((this.__isSmooth = t), this.toggleClassName("lenis-smooth", t));
      }
      get isScrolling() {
        return this.__isScrolling;
      }
      set isScrolling(t) {
        this.__isScrolling !== t &&
          ((this.__isScrolling = t),
          this.toggleClassName("lenis-scrolling", t));
      }
      get isStopped() {
        return this.__isStopped;
      }
      set isStopped(t) {
        this.__isStopped !== t &&
          ((this.__isStopped = t), this.toggleClassName("lenis-stopped", t));
      }
      get isLocked() {
        return this.__isLocked;
      }
      set isLocked(t) {
        this.__isLocked !== t &&
          ((this.__isLocked = t), this.toggleClassName("lenis-locked", t));
      }
      get className() {
        let t = "lenis";
        return (
          this.isStopped && (t += " lenis-stopped"),
          this.isLocked && (t += " lenis-locked"),
          this.isScrolling && (t += " lenis-scrolling"),
          this.isSmooth && (t += " lenis-smooth"),
          t
        );
      }
      toggleClassName(t, e) {
        this.rootElement.classList.toggle(t, e),
          this.emitter.emit("className change", this);
      }
    };
  }),
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = "undefined" != typeof globalThis ? globalThis : t || self).Lenis =
        e());
