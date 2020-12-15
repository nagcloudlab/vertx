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

/** @module vertx-js/shared_data */
var utils = require('vertx-js/util/utils');
var AsyncMap = require('vertx-js/async_map');
var Lock = require('vertx-js/lock');
var LocalMap = require('vertx-js/local_map');
var Counter = require('vertx-js/counter');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JSharedData = Java.type('io.vertx.core.shareddata.SharedData');

/**
 Shared data allows you to share data safely between different parts of your application in a safe way.
 <p>
 Shared data provides:
 <ul>
   <li>synchronous shared maps (local)</li>
   <li>asynchronous maps (local or cluster-wide)</li>
   <li>asynchronous locks (local or cluster-wide)</li>
   <li>asynchronous counters (local or cluster-wide)</li>
 </ul>
 <p>
 <p>
   <strong>WARNING</strong>: In clustered mode, asynchronous maps/locks/counters rely on distributed data structures provided by the cluster manager.
   Beware that the latency relative to asynchronous maps/locks/counters operations can be much higher in clustered than in local mode.
 </p>
 Please see the documentation for more information.

 @class
*/
var SharedData = function(j_val) {

  var j_sharedData = j_val;
  var that = this;

  var __super_getClusterWideMap = this.getClusterWideMap;
  var __super_getAsyncMap = this.getAsyncMap;
  var __super_getLocalAsyncMap = this.getLocalAsyncMap;
  var __super_getLock = this.getLock;
  var __super_getLockWithTimeout = this.getLockWithTimeout;
  var __super_getLocalLock = this.getLocalLock;
  var __super_getLocalLockWithTimeout = this.getLocalLockWithTimeout;
  var __super_getCounter = this.getCounter;
  var __super_getLocalCounter = this.getLocalCounter;
  var __super_getLocalMap = this.getLocalMap;
  /**
   Get the cluster wide map with the specified name. The map is accessible to all nodes in the cluster and data
   put into the map from any node is visible to to any other node.

   @public
   @param name {string} the name of the map 
   @param resultHandler {function} the map will be returned asynchronously in this handler 
   */
  this.getClusterWideMap =  function(name, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_sharedData["getClusterWideMap(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnVertxGen(AsyncMap, ar.result(), undefined, undefined), null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (typeof __super_getClusterWideMap != 'undefined') {
      return __super_getClusterWideMap.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Get the {@link AsyncMap} with the specified name. When clustered, the map is accessible to all nodes in the cluster
   and data put into the map from any node is visible to to any other node.
   <p>
     <strong>WARNING</strong>: In clustered mode, asynchronous shared maps rely on distributed data structures provided by the cluster manager.
     Beware that the latency relative to asynchronous shared maps operations can be much higher in clustered than in local mode.
   </p>

   @public
   @param name {string} the name of the map 
   @param resultHandler {function} the map will be returned asynchronously in this handler 
   */
  this.getAsyncMap =  function(name, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_sharedData["getAsyncMap(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnVertxGen(AsyncMap, ar.result(), undefined, undefined), null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (typeof __super_getAsyncMap != 'undefined') {
      return __super_getAsyncMap.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Get the {@link AsyncMap} with the specified name.
   <p>
   When clustered, the map is <b>NOT</b> accessible to all nodes in the cluster.
   Only the instance which created the map can put and retrieve data from this map.

   @public
   @param name {string} the name of the map 
   @param resultHandler {function} the map will be returned asynchronously in this handler 
   */
  this.getLocalAsyncMap =  function(name, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_sharedData["getLocalAsyncMap(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnVertxGen(AsyncMap, ar.result(), undefined, undefined), null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (typeof __super_getLocalAsyncMap != 'undefined') {
      return __super_getLocalAsyncMap.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Get an asynchronous lock with the specified name. The lock will be passed to the handler when it is available.
   <p>
     In general lock acquision is unordered, so that sequential attempts to acquire a lock,
     even from a single thread, can happen in non-sequential order.
   </p>

   @public
   @param name {string} the name of the lock 
   @param resultHandler {function} the handler 
   */
  this.getLock =  function(name, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_sharedData["getLock(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnVertxGen(Lock, ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (typeof __super_getLock != 'undefined') {
      return __super_getLock.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link SharedData#getLock} but specifying a timeout. If the lock is not obtained within the timeout
   a failure will be sent to the handler.
   <p>
     In general lock acquision is unordered, so that sequential attempts to acquire a lock,
     even from a single thread, can happen in non-sequential order.
   </p>

   @public
   @param name {string} the name of the lock 
   @param timeout {number} the timeout in ms 
   @param resultHandler {function} the handler 
   */
  this.getLockWithTimeout =  function(name, timeout, resultHandler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      j_sharedData["getLockWithTimeout(java.lang.String,long,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](utils.convReturnVertxGen(Lock, ar.result()), null);
        } else {
          __args[2](null, ar.cause());
        }
      });
    } else if (typeof __super_getLockWithTimeout != 'undefined') {
      return __super_getLockWithTimeout.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Get an asynchronous local lock with the specified name. The lock will be passed to the handler when it is available.
   <p>
     In general lock acquision is unordered, so that sequential attempts to acquire a lock,
     even from a single thread, can happen in non-sequential order.
   </p>

   @public
   @param name {string} the name of the lock 
   @param resultHandler {function} the handler 
   */
  this.getLocalLock =  function(name, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_sharedData["getLocalLock(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnVertxGen(Lock, ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (typeof __super_getLocalLock != 'undefined') {
      return __super_getLocalLock.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link SharedData#getLocalLock} but specifying a timeout. If the lock is not obtained within the timeout
   a failure will be sent to the handler.
   <p>
     In general lock acquision is unordered, so that sequential attempts to acquire a lock,
     even from a single thread, can happen in non-sequential order.
   </p>

   @public
   @param name {string} the name of the lock 
   @param timeout {number} the timeout in ms 
   @param resultHandler {function} the handler 
   */
  this.getLocalLockWithTimeout =  function(name, timeout, resultHandler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      j_sharedData["getLocalLockWithTimeout(java.lang.String,long,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](utils.convReturnVertxGen(Lock, ar.result()), null);
        } else {
          __args[2](null, ar.cause());
        }
      });
    } else if (typeof __super_getLocalLockWithTimeout != 'undefined') {
      return __super_getLocalLockWithTimeout.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Get an asynchronous counter. The counter will be passed to the handler.

   @public
   @param name {string} the name of the counter. 
   @param resultHandler {function} the handler 
   */
  this.getCounter =  function(name, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_sharedData["getCounter(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnVertxGen(Counter, ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (typeof __super_getCounter != 'undefined') {
      return __super_getCounter.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Get an asynchronous local counter. The counter will be passed to the handler.

   @public
   @param name {string} the name of the counter. 
   @param resultHandler {function} the handler 
   */
  this.getLocalCounter =  function(name, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_sharedData["getLocalCounter(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnVertxGen(Counter, ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (typeof __super_getLocalCounter != 'undefined') {
      return __super_getLocalCounter.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Return a <code>LocalMap</code> with the specific <code>name</code>.

   @public
   @param name {string} the name of the map 
   @return {LocalMap} the msp
   */
  this.getLocalMap =  function(name) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(LocalMap, j_sharedData["getLocalMap(java.lang.String)"](__args[0]), undefined, undefined) ;
    } else if (typeof __super_getLocalMap != 'undefined') {
      return __super_getLocalMap.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_sharedData;
};

SharedData._jclass = utils.getJavaClass("io.vertx.core.shareddata.SharedData");
SharedData._jtype = {accept: function(obj) {
    return SharedData._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(SharedData.prototype, {});
    SharedData.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
SharedData._create = function(jdel) {var obj = Object.create(SharedData.prototype, {});
  SharedData.apply(obj, arguments);
  return obj;
}
module.exports = SharedData;