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

/** @module vertx-js/message_consumer */
var utils = require('vertx-js/util/utils');
var Pipe = require('vertx-js/pipe');
var WriteStream = require('vertx-js/write_stream');
var ReadStream = require('vertx-js/read_stream');
var Message = require('vertx-js/message');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JMessageConsumer = Java.type('io.vertx.core.eventbus.MessageConsumer');

/**

 @class
*/
var MessageConsumer = function(j_val, j_arg_0) {

  var j_messageConsumer = j_val;
  var that = this;
  var j_T = typeof j_arg_0 !== 'undefined' ? j_arg_0 : utils.unknown_jtype;ReadStream.call(this, j_val);

  var __super_pipe = this.pipe;
  var __super_pipeTo = this.pipeTo;
  var __super_pipeTo = this.pipeTo;
  var __super_exceptionHandler = this.exceptionHandler;
  var __super_handler = this.handler;
  var __super_pause = this.pause;
  var __super_resume = this.resume;
  var __super_fetch = this.fetch;
  var __super_endHandler = this.endHandler;
  var __super_bodyStream = this.bodyStream;
  var __super_isRegistered = this.isRegistered;
  var __super_address = this.address;
  var __super_setMaxBufferedMessages = this.setMaxBufferedMessages;
  var __super_getMaxBufferedMessages = this.getMaxBufferedMessages;
  var __super_completionHandler = this.completionHandler;
  var __super_unregister = this.unregister;
  var __super_unregister = this.unregister;
  /**
   Pause this stream and return a  to transfer the elements of this stream to a destination .
   <p/>
   The stream will be resumed when the pipe will be wired to a <code>WriteStream</code>.

   @public

   @return {Pipe} a pipe
   */
  this.pipe =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(Pipe, j_messageConsumer["pipe()"](), Message._jtype) ;
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
      j_messageConsumer["pipeTo(io.vertx.core.streams.WriteStream)"](__args[0]._jdel);
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_messageConsumer["pipeTo(io.vertx.core.streams.WriteStream,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
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

  /**

   @public
   @param handler {function} 
   @return {MessageConsumer}
   */
  this.exceptionHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_messageConsumer["exceptionHandler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (typeof __super_exceptionHandler != 'undefined') {
      return __super_exceptionHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {MessageConsumer}
   */
  this.handler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_messageConsumer["handler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](utils.convReturnVertxGen(Message, jVal, undefined));
      }) ;
      return that;
    } else if (typeof __super_handler != 'undefined') {
      return __super_handler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {MessageConsumer}
   */
  this.pause =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_messageConsumer["pause()"]() ;
      return that;
    } else if (typeof __super_pause != 'undefined') {
      return __super_pause.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {MessageConsumer}
   */
  this.resume =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_messageConsumer["resume()"]() ;
      return that;
    } else if (typeof __super_resume != 'undefined') {
      return __super_resume.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param amount {number} 
   @return {MessageConsumer}
   */
  this.fetch =  function(amount) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_messageConsumer["fetch(long)"](__args[0]) ;
      return that;
    } else if (typeof __super_fetch != 'undefined') {
      return __super_fetch.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param endHandler {function} 
   @return {MessageConsumer}
   */
  this.endHandler =  function(endHandler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_messageConsumer["endHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_endHandler != 'undefined') {
      return __super_endHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {ReadStream} a read stream for the body of the message stream.
   */
  this.bodyStream =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(ReadStream, j_messageConsumer["bodyStream()"](), undefined) ;
    } else if (typeof __super_bodyStream != 'undefined') {
      return __super_bodyStream.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean} true if the current consumer is registered
   */
  this.isRegistered =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_messageConsumer["isRegistered()"]() ;
    } else if (typeof __super_isRegistered != 'undefined') {
      return __super_isRegistered.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} The address the handler was registered with.
   */
  this.address =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_messageConsumer["address()"]() ;
    } else if (typeof __super_address != 'undefined') {
      return __super_address.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set the number of messages this registration will buffer when this stream is paused. The default
   value is <code>1000</code>.
   <p>
   When a new value is set, buffered messages may be discarded to reach the new value. The most recent
   messages will be kept.

   @public
   @param maxBufferedMessages {number} the maximum number of messages that can be buffered 
   @return {MessageConsumer} this registration
   */
  this.setMaxBufferedMessages =  function(maxBufferedMessages) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return utils.convReturnVertxGen(MessageConsumer, j_messageConsumer["setMaxBufferedMessages(int)"](__args[0]), undefined) ;
    } else if (typeof __super_setMaxBufferedMessages != 'undefined') {
      return __super_setMaxBufferedMessages.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {number} the maximum number of messages that can be buffered when this stream is paused
   */
  this.getMaxBufferedMessages =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_messageConsumer["getMaxBufferedMessages()"]() ;
    } else if (typeof __super_getMaxBufferedMessages != 'undefined') {
      return __super_getMaxBufferedMessages.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Optional method which can be called to indicate when the registration has been propagated across the cluster.

   @public
   @param completionHandler {function} the completion handler 
   */
  this.completionHandler =  function(completionHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_messageConsumer["completionHandler(io.vertx.core.Handler)"](function(ar) {
        if (ar.succeeded()) {
          __args[0](null, null);
        } else {
          __args[0](null, ar.cause());
        }
      });
    } else if (typeof __super_completionHandler != 'undefined') {
      return __super_completionHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Unregisters the handler which created this registration

   @public
   @param completionHandler {function} the handler called when the unregister is done. For example in a cluster when all nodes of the event bus have been unregistered. 
   */
  this.unregister =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_messageConsumer["unregister()"]();
    } else if (__args.length === 1 && typeof __args[0] === 'function') {
      j_messageConsumer["unregister(io.vertx.core.Handler)"](function(ar) {
        if (ar.succeeded()) {
          __args[0](null, null);
        } else {
          __args[0](null, ar.cause());
        }
      });
    } else if (typeof __super_unregister != 'undefined') {
      return __super_unregister.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_messageConsumer;
};

MessageConsumer._jclass = utils.getJavaClass("io.vertx.core.eventbus.MessageConsumer");
MessageConsumer._jtype = {accept: function(obj) {
    return MessageConsumer._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(MessageConsumer.prototype, {});
    MessageConsumer.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
MessageConsumer._create = function(jdel) {var obj = Object.create(MessageConsumer.prototype, {});
  MessageConsumer.apply(obj, arguments);
  return obj;
}
module.exports = MessageConsumer;