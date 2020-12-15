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

/** @module vertx-js/pipe */
var utils = require('vertx-js/util/utils');
var WriteStream = require('vertx-js/write_stream');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JPipe = Java.type('io.vertx.core.streams.Pipe');

/**

 @class
*/
var Pipe = function(j_val, j_arg_0) {

  var j_pipe = j_val;
  var that = this;
  var j_T = typeof j_arg_0 !== 'undefined' ? j_arg_0 : utils.unknown_jtype;
  var __super_endOnFailure = this.endOnFailure;
  var __super_endOnSuccess = this.endOnSuccess;
  var __super_endOnComplete = this.endOnComplete;
  var __super_to = this.to;
  var __super_to = this.to;
  var __super_close = this.close;
  /**
   Set to <code>true</code> to call {@link WriteStream#end} when the source <code>ReadStream</code> fails, <code>false</code> otherwise.

   @public
   @param end {boolean} <code>true</code> to end the stream on a source <code>ReadStream</code> failure 
   @return {Pipe} a reference to this, so the API can be used fluently
   */
  this.endOnFailure =  function(end) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      j_pipe["endOnFailure(boolean)"](__args[0]) ;
      return that;
    } else if (typeof __super_endOnFailure != 'undefined') {
      return __super_endOnFailure.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set to <code>true</code> to call {@link WriteStream#end} when the source <code>ReadStream</code> succeeds, <code>false</code> otherwise.

   @public
   @param end {boolean} <code>true</code> to end the stream on a source <code>ReadStream</code> success 
   @return {Pipe} a reference to this, so the API can be used fluently
   */
  this.endOnSuccess =  function(end) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      j_pipe["endOnSuccess(boolean)"](__args[0]) ;
      return that;
    } else if (typeof __super_endOnSuccess != 'undefined') {
      return __super_endOnSuccess.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set to <code>true</code> to call {@link WriteStream#end} when the source <code>ReadStream</code> completes, <code>false</code> otherwise.
   <p>
   Calling this overwrites {@link Pipe#endOnFailure} and {@link Pipe#endOnSuccess}.

   @public
   @param end {boolean} <code>true</code> to end the stream on a source <code>ReadStream</code> completion 
   @return {Pipe} a reference to this, so the API can be used fluently
   */
  this.endOnComplete =  function(end) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      j_pipe["endOnComplete(boolean)"](__args[0]) ;
      return that;
    } else if (typeof __super_endOnComplete != 'undefined') {
      return __super_endOnComplete.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Start to pipe the elements to the destination <code>WriteStream</code>.
   <p>
   When the operation fails with a write error, the source stream is resumed.

   @public
   @param dst {WriteStream} the destination write stream 
   @param completionHandler {function} the handler called when the pipe operation completes 
   */
  this.to =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_pipe["to(io.vertx.core.streams.WriteStream)"](__args[0]._jdel);
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_pipe["to(io.vertx.core.streams.WriteStream,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (typeof __super_to != 'undefined') {
      return __super_to.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Close the pipe.
   <p>
   The streams handlers will be unset and the read stream resumed unless it is already ended.

   @public

   */
  this.close =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_pipe["close()"]();
    } else if (typeof __super_close != 'undefined') {
      return __super_close.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_pipe;
};

Pipe._jclass = utils.getJavaClass("io.vertx.core.streams.Pipe");
Pipe._jtype = {accept: function(obj) {
    return Pipe._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(Pipe.prototype, {});
    Pipe.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
Pipe._create = function(jdel) {var obj = Object.create(Pipe.prototype, {});
  Pipe.apply(obj, arguments);
  return obj;
}
module.exports = Pipe;