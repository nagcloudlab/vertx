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

/** @module vertx-js/worker_executor */
var utils = require('vertx-js/util/utils');
var Measured = require('vertx-js/measured');
var Promise = require('vertx-js/promise');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JWorkerExecutor = Java.type('io.vertx.core.WorkerExecutor');

/**
 An executor for executing blocking code in Vert.x .<p>

 @class
*/
var WorkerExecutor = function(j_val) {

  var j_workerExecutor = j_val;
  var that = this;
  Measured.call(this, j_val);

  var __super_isMetricsEnabled = this.isMetricsEnabled;
  var __super_executeBlocking = this.executeBlocking;
  var __super_executeBlocking = this.executeBlocking;
  var __super_close = this.close;
  /**
   Whether the metrics are enabled for this measured object

   @public

   @return {boolean} <code>true</code> if metrics are enabled
   */
  this.isMetricsEnabled =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_workerExecutor["isMetricsEnabled()"]() ;
    } else if (typeof __super_isMetricsEnabled != 'undefined') {
      return __super_isMetricsEnabled.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link WorkerExecutor#executeBlocking} called with ordered = true.

   @public
   @param blockingCodeHandler {function} 
   @param resultHandler {function} 
   */
  this.executeBlocking =  function() {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'function' && typeof __args[1] ==='boolean' && typeof __args[2] === 'function') {
      j_workerExecutor["executeBlocking(io.vertx.core.Handler,boolean,io.vertx.core.Handler)"](function(jVal) {
        __args[0](utils.convReturnVertxGen(Promise, jVal, undefined));
      }, __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](utils.convReturnTypeUnknown(ar.result()), null);
        } else {
          __args[2](null, ar.cause());
        }
      });
    } else if (__args.length === 2 && typeof __args[0] === 'function' && typeof __args[1] === 'function') {
      j_workerExecutor["executeBlocking(io.vertx.core.Handler,io.vertx.core.Handler)"](function(jVal) {
        __args[0](utils.convReturnVertxGen(Promise, jVal, undefined));
      }, function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnTypeUnknown(ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (typeof __super_executeBlocking != 'undefined') {
      return __super_executeBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Close the executor.

   @public

   */
  this.close =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_workerExecutor["close()"]();
    } else if (typeof __super_close != 'undefined') {
      return __super_close.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_workerExecutor;
};

WorkerExecutor._jclass = utils.getJavaClass("io.vertx.core.WorkerExecutor");
WorkerExecutor._jtype = {accept: function(obj) {
    return WorkerExecutor._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(WorkerExecutor.prototype, {});
    WorkerExecutor.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
WorkerExecutor._create = function(jdel) {var obj = Object.create(WorkerExecutor.prototype, {});
  WorkerExecutor.apply(obj, arguments);
  return obj;
}
module.exports = WorkerExecutor;