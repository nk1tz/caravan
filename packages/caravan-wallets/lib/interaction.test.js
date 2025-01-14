"use strict";

require("core-js/modules/es6.function.name");
require("core-js/modules/es6.array.for-each");
require("core-js/modules/es6.promise");
require("core-js/modules/es6.object.to-string");
require("core-js/modules/es6.reflect.get");
require("core-js/modules/es6.object.create");
require("core-js/modules/es6.reflect.construct");
require("core-js/modules/es6.function.bind");
require("core-js/modules/es6.object.set-prototype-of");
require("regenerator-runtime/runtime");
require("core-js/modules/es6.number.constructor");
require("core-js/modules/es7.symbol.async-iterator");
require("core-js/modules/es6.symbol");
require("core-js/modules/es6.object.define-property");
var _interaction = require("./interaction");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                               * @jest-environment jsdom
                                                                                                                                                                                                                                                                                                                                                                                               */
describe("KeystoreInteraction", function () {
  var TestKeystoreInteraction = /*#__PURE__*/function (_KeystoreInteraction) {
    _inherits(TestKeystoreInteraction, _KeystoreInteraction);
    var _super = _createSuper(TestKeystoreInteraction);
    function TestKeystoreInteraction(_ref) {
      var _this;
      var param = _ref.param;
      _classCallCheck(this, TestKeystoreInteraction);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized(_this), "param", void 0);
      _this.param = param;
      return _this;
    }
    _createClass(TestKeystoreInteraction, [{
      key: "messages",
      value: function messages() {
        var messages = _get(_getPrototypeOf(TestKeystoreInteraction.prototype), "messages", this).call(this);
        messages.push({
          state: _interaction.PENDING,
          level: _interaction.WARNING,
          text: "First message",
          code: "alpha",
          param: this.param
        });
        messages.push({
          state: _interaction.ACTIVE,
          level: _interaction.INFO,
          text: "Second message",
          code: "beta",
          param: this.param,
          version: "2.x"
        });
        return messages;
      }
    }]);
    return TestKeystoreInteraction;
  }(_interaction.KeystoreInteraction);
  var param = "foo";
  var interaction = new TestKeystoreInteraction({
    param: param
  });
  it("has an environment", function () {
    expect(interaction.environment).toBeDefined();
  });
  it("isSupported", function () {
    expect(interaction.isSupported()).toBe(true);
  });
  it("can accept parameters through a constructor", function () {
    expect(interaction.param).toEqual(param);
  });
  describe("filtering messages", function () {
    it("requires at least one argument", function () {
      expect(function () {
        interaction.messagesFor(null);
      }).toThrow();
    });
    it("matches all messages when passed no known options", function () {
      expect(interaction.messagesFor({}).length).toEqual(2);
    });
    it("matches all messages when passed unknown options", function () {
      expect(interaction.messagesFor({
        ding: "dong"
      }).length).toEqual(2);
    });
    describe("by state", function () {
      it("can find matching messages", function () {
        expect(interaction.messagesFor({
          state: _interaction.PENDING
        }).length).toEqual(1);
      });
      it("returns an empty array if there are no matches", function () {
        expect(interaction.messagesFor({
          state: _interaction.UNSUPPORTED
        }).length).toEqual(0);
      });
    });
    describe("by level", function () {
      it("can find matching messages", function () {
        expect(interaction.messagesFor({
          level: _interaction.INFO
        }).length).toEqual(1);
      });
      it("returns an empty array if there are no matches", function () {
        expect(interaction.messagesFor({
          level: _interaction.ERROR
        }).length).toEqual(0);
      });
    });
    describe("by text", function () {
      it("can find messages that are exact matches", function () {
        expect(interaction.messagesFor({
          text: "First"
        }).length).toEqual(1);
      });
      it("can find messages that are partial matches", function () {
        expect(interaction.messagesFor({
          text: "econ"
        }).length).toEqual(1);
      });
      it("can find messages via regular expression", function () {
        expect(interaction.messagesFor({
          text: /ss+/
        }).length).toEqual(2);
      });
      it("returns an empty array if there are no matches", function () {
        expect(interaction.messagesFor({
          text: "third"
        }).length).toEqual(0);
      });
    });
    describe("by code", function () {
      it("can find messages that are exact matches", function () {
        expect(interaction.messagesFor({
          code: "alpha"
        }).length).toEqual(1);
      });
      it("can find messages that are partial matches", function () {
        expect(interaction.messagesFor({
          code: "lph"
        }).length).toEqual(1);
      });
      it("can find messages via regular expression", function () {
        expect(interaction.messagesFor({
          code: /a$/
        }).length).toEqual(2);
      });
      it("returns an empty array if there are no matches", function () {
        expect(interaction.messagesFor({
          code: "gamma"
        }).length).toEqual(0);
      });
    });
    describe("by version", function () {
      it("can find messages that are exact matches", function () {
        expect(interaction.messagesFor({
          version: "2.x"
        }).length).toEqual(1);
      });
      it("can find messages that are partial matches", function () {
        expect(interaction.messagesFor({
          version: "2"
        }).length).toEqual(1);
      });
      it("can find messages via regular expression", function () {
        expect(interaction.messagesFor({
          version: /^2/
        }).length).toEqual(1);
      });
      it("returns an empty array if there are no matches", function () {
        expect(interaction.messagesFor({
          version: "3"
        }).length).toEqual(0);
      });
    });
    describe("by multiple options", function () {
      it("can find matching messages", function () {
        expect(interaction.messagesFor({
          state: _interaction.PENDING,
          level: _interaction.WARNING
        }).length).toEqual(1);
      });
      it("returns an empty array if there are no matches", function () {
        expect(interaction.messagesFor({
          state: _interaction.PENDING,
          level: _interaction.INFO
        }).length).toEqual(0);
      });
    });
  });
  describe("hasMessagesFor", function () {
    it("returns true when more than one message matches", function () {
      expect(interaction.hasMessagesFor({
        text: "message"
      })).toBe(true);
    });
    it("returns true when exactly one message matches", function () {
      expect(interaction.hasMessagesFor({
        state: _interaction.PENDING
      })).toBe(true);
    });
    it("returns false when no message matches", function () {
      expect(interaction.hasMessagesFor({
        state: _interaction.UNSUPPORTED
      })).toBe(false);
    });
  });
  describe("messageFor", function () {
    it("returns the first matching message", function () {
      expect(interaction.messageFor({
        text: "message"
      })?.code).toEqual("alpha");
    });
    it("returns null if no message is found", function () {
      expect(interaction.messageFor({
        state: _interaction.UNSUPPORTED
      })).toBeNull();
    });
  });
  describe("messageTextFor", function () {
    it("returns the text of the first matching message", function () {
      expect(interaction.messageTextFor({
        text: "message"
      })).toEqual("First message");
    });
    it("returns null if no message is found", function () {
      expect(interaction.messageTextFor({
        state: _interaction.UNSUPPORTED
      })).toBeNull();
    });
  });
});
describe("UnsupportedInteraction", function () {
  var text = "Unsupported interaction";
  var code = "alpha";
  var interaction = new _interaction.UnsupportedInteraction({
    text: text,
    code: code
  });
  it("is not supported", function () {
    expect(interaction.isSupported()).toBe(false);
  });
  it("has a message explaining why it is unsupported", function () {
    expect(interaction.hasMessagesFor({
      state: _interaction.UNSUPPORTED,
      level: _interaction.ERROR,
      code: code,
      text: text
    })).toBe(true);
  });
});
describe("DirectKeystoreInteraction", function () {
  var TestDirectKeystoreInteraction = /*#__PURE__*/function (_DirectKeystoreIntera) {
    _inherits(TestDirectKeystoreInteraction, _DirectKeystoreIntera);
    var _super2 = _createSuper(TestDirectKeystoreInteraction);
    function TestDirectKeystoreInteraction(_ref2) {
      var _this2;
      var param = _ref2.param;
      _classCallCheck(this, TestDirectKeystoreInteraction);
      _this2 = _super2.call(this);
      _defineProperty(_assertThisInitialized(_this2), "param", void 0);
      _this2.param = param;
      return _this2;
    }
    _createClass(TestDirectKeystoreInteraction, [{
      key: "run",
      value: function () {
        var _run = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.param);
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function run() {
          return _run.apply(this, arguments);
        }
        return run;
      }()
    }]);
    return TestDirectKeystoreInteraction;
  }(_interaction.DirectKeystoreInteraction);
  var param = "foo";
  var interaction = new TestDirectKeystoreInteraction({
    param: param
  });
  it("can accept parameters through a constructor", function () {
    expect(interaction.param).toEqual(param);
  });
  it("has an async `run` method", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return expect(interaction.run()).resolves.toEqual(param);
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  it("throws an error if the `request` method is called", function () {
    expect(function () {
      interaction.request();
    }).toThrow();
  });
  it("throws an error if the `parse` method is called", function () {
    expect(function () {
      interaction.parse();
    }).toThrow();
  });
});
describe("IndirectKeystoreInteraction", function () {
  var TestIndirectKeystoreInteraction = /*#__PURE__*/function (_IndirectKeystoreInte) {
    _inherits(TestIndirectKeystoreInteraction, _IndirectKeystoreInte);
    var _super3 = _createSuper(TestIndirectKeystoreInteraction);
    function TestIndirectKeystoreInteraction(_ref4) {
      var _this3;
      var param = _ref4.param;
      _classCallCheck(this, TestIndirectKeystoreInteraction);
      _this3 = _super3.call(this);
      _defineProperty(_assertThisInitialized(_this3), "param", void 0);
      _this3.param = param;
      return _this3;
    }
    _createClass(TestIndirectKeystoreInteraction, [{
      key: "request",
      value: function request() {
        return this.param;
      }
    }, {
      key: "parse",
      value: function parse(response) {
        return (response || "").toLowerCase();
      }
    }]);
    return TestIndirectKeystoreInteraction;
  }(_interaction.IndirectKeystoreInteraction);
  var param = "foo";
  var interaction = new TestIndirectKeystoreInteraction({
    param: param
  });
  it("can accept parameters through a constructor", function () {
    expect(interaction.param).toEqual(param);
  });
  it("has a `request` method", function () {
    expect(interaction.request()).toEqual(param);
  });
  it("has a `parse` method", function () {
    expect(interaction.parse("BANG")).toEqual("bang");
  });
  it("throws an error if the `run` method is called", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return expect(interaction.run()).rejects.toThrow();
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
});