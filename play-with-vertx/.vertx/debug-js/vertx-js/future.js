/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-js/future */
var utils = require('vertx-js/util/utils');
var Promise = require('vertx-js/promise');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JFuture = Java.type('io.vertx.core.Future');

/**
 Represents the result of an action that may, or may not, have occurred yet.
 <p>

 @class
*/
var Future = function(j_val, j_arg_0) {

  var j_future = j_val;
  var that = this;
  var j_T = typeof j_arg_0 !== 'undefined' ? j_arg_0 : utils.unknown_jtype;
  var __super_future = this.future;
  var __super_future = this.future;
  var __super_succeededFuture = this.succeededFuture;
  var __super_succeededFuture = this.succeededFuture;
  var __super_failedFuture = this.failedFuture;
  var __super_failedFuture = this.failedFuture;
  var __super_isComplete = this.isComplete;
  var __super_setHandler = this.setHandler;
  var __super_onComplete = this.onComplete;
  var __super_onSuccess = this.onSuccess;
  var __super_onFailure = this.onFailure;
  var __super_complete = this.complete;
  var __super_complete = this.complete;
  var __super_fail = this.fail;
  var __super_fail = this.fail;
  var __super_tryComplete = this.tryComplete;
  var __super_tryComplete = this.tryComplete;
  var __super_tryFail = this.tryFail;
  var __super_tryFail = this.tryFail;
  var __super_result = this.result;
  var __super_cause = this.cause;
  var __super_succeeded = this.succeeded;
  var __super_failed = this.failed;
  var __super_flatMap = this.flatMap;
  var __super_compose = this.compose;
  var __super_compose = this.compose;
  var __super_map = this.map;
  var __super_map = this.map;
  var __super_mapEmpty = this.mapEmpty;
  var __super_completer = this.completer;
  var __super_recover = this.recover;
  var __super_otherwise = this.otherwise;
  var __super_otherwise = this.otherwise;
  var __super_otherwiseEmpty = this.otherwiseEmpty;
  /**
   Has the future completed?
   <p>
   It's completed if it's either succeeded or failed.

   @public

   @return {boolean} true if completed, false if not
   */
  this.isComplete =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_future["isComplete()"]() ;
    } else if (typeof __super_isComplete != 'undefined') {
      return __super_isComplete.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link Future#onComplete}.

   @public
   @param handler {function} 
   @return {Future}
   */
  this.setHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_future["setHandler(io.vertx.core.Handler)"](function(ar) {
        if (ar.succeeded()) {
          __args[0](j_T.wrap(ar.result()), null);
        } else {
          __args[0](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_setHandler != 'undefined') {
      return __super_setHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Add a handler to be notified of the result.
   <br/>

   @public
   @param handler {function} the handler that will be called with the result 
   @return {Future} a reference to this, so it can be used fluently
   */
  this.onComplete =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_future["onComplete(io.vertx.core.Handler)"](function(ar) {
        if (ar.succeeded()) {
          __args[0](j_T.wrap(ar.result()), null);
        } else {
          __args[0](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_onComplete != 'undefined') {
      return __super_onComplete.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Add a handler to be notified of the succeeded result.
   <br/>

   @public
   @param handler {function} the handler that will be called with the succeeded result 
   @return {Future} a reference to this, so it can be used fluently
   */
  this.onSuccess =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_future["onSuccess(io.vertx.core.Handler)"](function(jVal) {
        __args[0](j_T.wrap(jVal));
      }) ;
      return that;
    } else if (typeof __super_onSuccess != 'undefined') {
      return __super_onSuccess.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Add a handler to be notified of the failed result.
   <br/>

   @public
   @param handler {function} the handler that will be called with the failed result 
   @return {Future} a reference to this, so it can be used fluently
   */
  this.onFailure =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_future["onFailure(io.vertx.core.Handler)"](function(jVal) {
        __args[0](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (typeof __super_onFailure != 'undefined') {
      return __super_onFailure.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set a null result. Any handler will be called, if there is one, and the future will be marked as completed.

   @public

   */
  this.complete =  function() {
    var __args = arguments;
    if (__args.length === 1 && j_T.accept(__args[0])) {
      j_future["complete(java.lang.Object)"](j_T.unwrap(__args[0]));
    } else if (__args.length === 0) {
      j_future["complete()"]();
    } else if (typeof __super_complete != 'undefined') {
      return __super_complete.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Try to set the failure. When it happens, any handler will be called, if there is one, and the future will be marked as completed.

   @public
   @param failureMessage {string} the failure message 
   */
  this.fail =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object') {
      j_future["fail(java.lang.Throwable)"](utils.convParamThrowable(__args[0]));
    } else if (__args.length === 1 && typeof __args[0] === 'string') {
      j_future["fail(java.lang.String)"](__args[0]);
    } else if (typeof __super_fail != 'undefined') {
      return __super_fail.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Try to set the result. When it happens, any handler will be called, if there is one, and the future will be marked as completed.

   @public

   @return {boolean} false when the future is already completed
   */
  this.tryComplete =  function() {
    var __args = arguments;
    if (__args.length === 1 && j_T.accept(__args[0])) {
      return j_future["tryComplete(java.lang.Object)"](j_T.unwrap(__args[0])) ;
    } else if (__args.length === 0) {
      return j_future["tryComplete()"]() ;
    } else if (typeof __super_tryComplete != 'undefined') {
      return __super_tryComplete.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Try to set the failure. When it happens, any handler will be called, if there is one, and the future will be marked as completed.

   @public
   @param failureMessage {string} the failure message 
   @return {boolean} false when the future is already completed
   */
  this.tryFail =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object') {
      return j_future["tryFail(java.lang.Throwable)"](utils.convParamThrowable(__args[0])) ;
    } else if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_future["tryFail(java.lang.String)"](__args[0]) ;
    } else if (typeof __super_tryFail != 'undefined') {
      return __super_tryFail.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   The result of the operation. This will be null if the operation failed.

   @public

   @return {Object} the result or null if the operation failed.
   */
  this.result =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_T.wrap(j_future["result()"]()) ;
    } else if (typeof __super_result != 'undefined') {
      return __super_result.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   A Throwable describing failure. This will be null if the operation succeeded.

   @public

   @return {todo} the cause or null if the operation succeeded.
   */
  this.cause =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnThrowable(j_future["cause()"]()) ;
    } else if (typeof __super_cause != 'undefined') {
      return __super_cause.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Did it succeed?

   @public

   @return {boolean} true if it succeded or false otherwise
   */
  this.succeeded =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_future["succeeded()"]() ;
    } else if (typeof __super_succeeded != 'undefined') {
      return __super_succeeded.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Did it fail?

   @public

   @return {boolean} true if it failed or false otherwise
   */
  this.failed =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_future["failed()"]() ;
    } else if (typeof __super_failed != 'undefined') {
      return __super_failed.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Alias for {@link Future#compose}.

   @public
   @param mapper {function} 
   @return {Future}
   */
  this.flatMap =  function(mapper) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(Future, j_future["flatMap(java.util.function.Function)"](function(jVal) {
        var jRet = __args[0](j_T.wrap(jVal));
        return jRet._jdel;
      }), undefined) ;
    } else if (typeof __super_flatMap != 'undefined') {
      return __super_flatMap.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Compose this future with a <code>successMapper</code> and <code>failureMapper</code> functions.<p>
   <p>
   When this future (the one on which <code>compose</code> is called) succeeds, the <code>successMapper</code> will be called with
   the completed value and this mapper returns another future object. This returned future completion will complete
   the future returned by this method call.<p>
   <p>
   When this future (the one on which <code>compose</code> is called) fails, the <code>failureMapper</code> will be called with
   the failure and this mapper returns another future object. This returned future completion will complete
   the future returned by this method call.<p>
   <p>
   If any mapper function throws an exception, the returned future will be failed with this exception.<p>

   @public
   @param successMapper {function} the function mapping the success 
   @param failureMapper {function} the function mapping the failure 
   @return {Future} the composed future
   */
  this.compose =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(Future, j_future["compose(java.util.function.Function)"](function(jVal) {
        var jRet = __args[0](j_T.wrap(jVal));
        return jRet._jdel;
      }), undefined) ;
    } else if (__args.length === 2 && typeof __args[0] === 'function' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(Future, j_future["compose(java.util.function.Function,java.util.function.Function)"](function(jVal) {
        var jRet = __args[0](j_T.wrap(jVal));
        return jRet._jdel;
      }, function(jVal) {
        var jRet = __args[1](utils.convReturnThrowable(jVal));
        return jRet._jdel;
      }), undefined) ;
    } else if (typeof __super_compose != 'undefined') {
      return __super_compose.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Map the result of a future to a specific <code>value</code>.<p>
   <p>
   When this future succeeds, this <code>value</code> will complete the future returned by this method call.<p>
   <p>
   When this future fails, the failure will be propagated to the returned future.

   @public
   @param value {Object} the value that eventually completes the mapped future 
   @return {Future} the mapped future
   */
  this.map =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(Future, j_future["map(java.util.function.Function)"](function(jVal) {
        var jRet = __args[0](j_T.wrap(jVal));
        return utils.convParamTypeUnknown(jRet);
      }), undefined) ;
    } else if (__args.length === 1 && typeof __args[0] !== 'function') {
      return utils.convReturnVertxGen(Future, j_future["map(java.lang.Object)"](utils.convParamTypeUnknown(__args[0])), undefined) ;
    } else if (typeof __super_map != 'undefined') {
      return __super_map.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Map the result of a future to <code>null</code>.<p>
   <p>
   This is a conveniency for <code>future.map((T) null)</code> or <code>future.map((Void) null)</code>.<p>
   <p>
   When this future succeeds, <code>null</code> will complete the future returned by this method call.<p>
   <p>
   When this future fails, the failure will be propagated to the returned future.

   @public

   @return {Future} the mapped future
   */
  this.mapEmpty =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(Future, j_future["mapEmpty()"](), undefined) ;
    } else if (typeof __super_mapEmpty != 'undefined') {
      return __super_mapEmpty.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {function} an handler completing this future
   */
  this.completer =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedcompleter == null) {
        that.cachedcompleter = utils.convReturnHandlerAsyncResult(j_future["completer()"](), function(result) { return j_T.unwrap(result); });
      }
      return that.cachedcompleter;
    } else if (typeof __super_completer != 'undefined') {
      return __super_completer.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Handles a failure of this Future by returning the result of another Future.
   If the mapper fails, then the returned future will be failed with this failure.

   @public
   @param mapper {function} A function which takes the exception of a failure and returns a new future. 
   @return {Future} A recovered future
   */
  this.recover =  function(mapper) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(Future, j_future["recover(java.util.function.Function)"](function(jVal) {
        var jRet = __args[0](utils.convReturnThrowable(jVal));
        return jRet._jdel;
      }), undefined) ;
    } else if (typeof __super_recover != 'undefined') {
      return __super_recover.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Map the failure of a future to a specific <code>value</code>.<p>
   <p>
   When this future fails, this <code>value</code> will complete the future returned by this method call.<p>
   <p>
   When this future succeeds, the result will be propagated to the returned future.

   @public
   @param value {Object} the value that eventually completes the mapped future 
   @return {Future} the mapped future
   */
  this.otherwise =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(Future, j_future["otherwise(java.util.function.Function)"](function(jVal) {
        var jRet = __args[0](utils.convReturnThrowable(jVal));
        return j_T.unwrap(jRet);
      }), undefined) ;
    } else if (__args.length === 1 && j_T.accept(__args[0])) {
      return utils.convReturnVertxGen(Future, j_future["otherwise(java.lang.Object)"](j_T.unwrap(__args[0])), undefined) ;
    } else if (typeof __super_otherwise != 'undefined') {
      return __super_otherwise.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Map the failure of a future to <code>null</code>.<p>
   <p>
   This is a convenience for <code>future.otherwise((T) null)</code>.<p>
   <p>
   When this future fails, the <code>null</code> value will complete the future returned by this method call.<p>
   <p>
   When this future succeeds, the result will be propagated to the returned future.

   @public

   @return {Future} the mapped future
   */
  this.otherwiseEmpty =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(Future, j_future["otherwiseEmpty()"](), undefined) ;
    } else if (typeof __super_otherwiseEmpty != 'undefined') {
      return __super_otherwiseEmpty.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_future;
};

Future._jclass = utils.getJavaClass("io.vertx.core.Future");
Future._jtype = {accept: function(obj) {
    return Future._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(Future.prototype, {});
    Future.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
Future._create = function(jdel) {var obj = Object.create(Future.prototype, {});
  Future.apply(obj, arguments);
  return obj;
}
/**
 Create a future that hasn't completed yet

 @memberof module:vertx-js/future

 @return {Future} the future
 */
Future.future =  function() {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'function') {
    return utils.convReturnVertxGen(Future, JFuture["future(io.vertx.core.Handler)"](function(jVal) {
      __args[0](utils.convReturnVertxGen(Promise, jVal, undefined));
    }), undefined) ;
  } else if (__args.length === 0) {
    return utils.convReturnVertxGen(Future, JFuture["future()"](), undefined) ;
  }else throw new TypeError('function invoked with invalid arguments');
};

/**
 Created a succeeded future with the specified result.

 @memberof module:vertx-js/future
 @param result {Object} the result 
 @return {Future} the future
 */
Future.succeededFuture =  function() {
  var __args = arguments;
  if (__args.length === 0) {
    return utils.convReturnVertxGen(Future, JFuture["succeededFuture()"](), undefined) ;
  } else if (__args.length === 1 && typeof __args[0] !== 'function') {
    return utils.convReturnVertxGen(Future, JFuture["succeededFuture(java.lang.Object)"](utils.convParamTypeUnknown(__args[0])), undefined) ;
  }else throw new TypeError('function invoked with invalid arguments');
};

/**
 Create a failed future with the specified failure message.

 @memberof module:vertx-js/future
 @param failureMessage {string} the failure message 
 @return {Future} the future
 */
Future.failedFuture =  function() {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'object') {
    return utils.convReturnVertxGen(Future, JFuture["failedFuture(java.lang.Throwable)"](utils.convParamThrowable(__args[0])), undefined) ;
  } else if (__args.length === 1 && typeof __args[0] === 'string') {
    return utils.convReturnVertxGen(Future, JFuture["failedFuture(java.lang.String)"](__args[0]), undefined) ;
  }else throw new TypeError('function invoked with invalid arguments');
};

module.exports = Future;