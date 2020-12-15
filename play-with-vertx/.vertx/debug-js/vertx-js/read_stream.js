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

/** @module vertx-js/read_stream */
var utils = require('vertx-js/util/utils');
var Pipe = require('vertx-js/pipe');
var WriteStream = require('vertx-js/write_stream');
var StreamBase = require('vertx-js/stream_base');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JReadStream = Java.type('io.vertx.core.streams.ReadStream');

/**
 Represents a stream of items that can be read from.
 <p>
 @class
*/
var ReadStream = function(j_val, j_arg_0) {

  var j_readStream = j_val;
  var that = this;
  var j_T = typeof j_arg_0 !== 'undefined' ? j_arg_0 : utils.unknown_jtype;StreamBase.call(this, j_val);

  var __super_exceptionHandler = this.exceptionHandler;
  var __super_handler = this.handler;
  var __super_pause = this.pause;
  var __super_resume = this.resume;
  var __super_fetch = this.fetch;
  var __super_endHandler = this.endHandler;
  var __super_pipe = this.pipe;
  var __super_pipeTo = this.pipeTo;
  var __super_pipeTo = this.pipeTo;
  /**
   Set an exception handler on the read stream.

   @public
   @param handler {function} the exception handler 
   @return {ReadStream} a reference to this, so the API can be used fluently
   */
  this.exceptionHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_readStream["exceptionHandler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (typeof __super_exceptionHandler != 'undefined') {
      return __super_exceptionHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set a data handler. As data is read, the handler will be called with the data.

   @public
   @param handler {function} 
   @return {ReadStream} a reference to this, so the API can be used fluently
   */
  this.handler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_readStream["handler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](j_T.wrap(jVal));
      }) ;
      return that;
    } else if (typeof __super_handler != 'undefined') {
      return __super_handler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Pause the <code>ReadStream</code>, it sets the buffer in <code>fetch</code> mode and clears the actual demand.
   <p>
   While it's paused, no data will be sent to the data <code>handler</code>.

   @public

   @return {ReadStream} a reference to this, so the API can be used fluently
   */
  this.pause =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_readStream["pause()"]() ;
      return that;
    } else if (typeof __super_pause != 'undefined') {
      return __super_pause.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Resume reading, and sets the buffer in <code>flowing</code> mode.
   <p/>
   If the <code>ReadStream</code> has been paused, reading will recommence on it.

   @public

   @return {ReadStream} a reference to this, so the API can be used fluently
   */
  this.resume =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_readStream["resume()"]() ;
      return that;
    } else if (typeof __super_resume != 'undefined') {
      return __super_resume.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Fetch the specified <code>amount</code> of elements. If the <code>ReadStream</code> has been paused, reading will
   recommence with the specified <code>amount</code> of items, otherwise the specified <code>amount</code> will
   be added to the current stream demand.

   @public
   @param amount {number} 
   @return {ReadStream} a reference to this, so the API can be used fluently
   */
  this.fetch =  function(amount) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_readStream["fetch(long)"](__args[0]) ;
      return that;
    } else if (typeof __super_fetch != 'undefined') {
      return __super_fetch.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set an end handler. Once the stream has ended, and there is no more data to be read, this handler will be called.

   @public
   @param endHandler {function} 
   @return {ReadStream} a reference to this, so the API can be used fluently
   */
  this.endHandler =  function(endHandler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_readStream["endHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_endHandler != 'undefined') {
      return __super_endHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Pause this stream and return a {@link Pipe} to transfer the elements of this stream to a destination {@link WriteStream}.
   <p/>
   The stream will be resumed when the pipe will be wired to a <code>WriteStream</code>.

   @public

   @return {Pipe} a pipe
   */
  this.pipe =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(Pipe, j_readStream["pipe()"](), undefined) ;
    } else if (typeof __super_pipe != 'undefined') {
      return __super_pipe.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Pipe this <code>ReadStream</code> to the <code>WriteStream</code>.
   <p>
   Elements emitted by this stream will be written to the write stream until this stream ends or fails.
   <p>
   Once this stream has ended or failed, the write stream will be ended and the <code>handler</code> will be
   called with the result.

   @public
   @param dst {WriteStream} the destination write stream 
   @param handler {function} 
   */
  this.pipeTo =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_readStream["pipeTo(io.vertx.core.streams.WriteStream)"](__args[0]._jdel);
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_readStream["pipeTo(io.vertx.core.streams.WriteStream,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (typeof __super_pipeTo != 'undefined') {
      return __super_pipeTo.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_readStream;
};

ReadStream._jclass = utils.getJavaClass("io.vertx.core.streams.ReadStream");
ReadStream._jtype = {accept: function(obj) {
    return ReadStream._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(ReadStream.prototype, {});
    ReadStream.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
ReadStream._create = function(jdel) {var obj = Object.create(ReadStream.prototype, {});
  ReadStream.apply(obj, arguments);
  return obj;
}
module.exports = ReadStream;