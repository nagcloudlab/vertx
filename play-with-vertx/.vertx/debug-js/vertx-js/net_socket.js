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

/** @module vertx-js/net_socket */
var utils = require('vertx-js/util/utils');
var Pipe = require('vertx-js/pipe');
var Buffer = require('vertx-js/buffer');
var WriteStream = require('vertx-js/write_stream');
var ReadStream = require('vertx-js/read_stream');
var SocketAddress = require('vertx-js/socket_address');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JNetSocket = Java.type('io.vertx.core.net.NetSocket');

/**
 Represents a socket-like interface to a TCP connection on either the
 client or the server side.
 <p>
 @class
*/
var NetSocket = function(j_val) {

  var j_netSocket = j_val;
  var that = this;
  ReadStream.call(this, j_val);
  WriteStream.call(this, j_val);

  var __super_end = this.end;
  var __super_end = this.end;
  var __super_writeQueueFull = this.writeQueueFull;
  var __super_pipe = this.pipe;
  var __super_pipeTo = this.pipeTo;
  var __super_pipeTo = this.pipeTo;
  var __super_exceptionHandler = this.exceptionHandler;
  var __super_handler = this.handler;
  var __super_pause = this.pause;
  var __super_resume = this.resume;
  var __super_fetch = this.fetch;
  var __super_endHandler = this.endHandler;
  var __super_write = this.write;
  var __super_setWriteQueueMaxSize = this.setWriteQueueMaxSize;
  var __super_drainHandler = this.drainHandler;
  var __super_writeHandlerID = this.writeHandlerID;
  var __super_write = this.write;
  var __super_write = this.write;
  var __super_write = this.write;
  var __super_write = this.write;
  var __super_write = this.write;
  var __super_sendFile = this.sendFile;
  var __super_sendFile = this.sendFile;
  var __super_sendFile = this.sendFile;
  var __super_sendFile = this.sendFile;
  var __super_sendFile = this.sendFile;
  var __super_sendFile = this.sendFile;
  var __super_remoteAddress = this.remoteAddress;
  var __super_localAddress = this.localAddress;
  var __super_end = this.end;
  var __super_end = this.end;
  var __super_close = this.close;
  var __super_close = this.close;
  var __super_closeHandler = this.closeHandler;
  var __super_upgradeToSsl = this.upgradeToSsl;
  var __super_upgradeToSsl = this.upgradeToSsl;
  var __super_isSsl = this.isSsl;
  var __super_indicatedServerName = this.indicatedServerName;
  /**
   Calls {@link NetSocket#end}

   @public
   @param handler {function} 
   */
  this.end =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_netSocket["end(io.vertx.core.buffer.Buffer)"](__args[0]._jdel);
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_netSocket["end(io.vertx.core.buffer.Buffer,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (__args.length === 0) {
      j_netSocket["end()"]();
    } else if (__args.length === 1 && typeof __args[0] === 'function') {
      j_netSocket["end(io.vertx.core.Handler)"](function(ar) {
        if (ar.succeeded()) {
          __args[0](null, null);
        } else {
          __args[0](null, ar.cause());
        }
      });
    } else if (typeof __super_end != 'undefined') {
      return __super_end.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   This will return <code>true</code> if there are more bytes in the write queue than the value set using {@link NetSocket#setWriteQueueMaxSize}

   @public

   @return {boolean} true if write queue is full
   */
  this.writeQueueFull =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_netSocket["writeQueueFull()"]() ;
    } else if (typeof __super_writeQueueFull != 'undefined') {
      return __super_writeQueueFull.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

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
      return utils.convReturnVertxGen(Pipe, j_netSocket["pipe()"](), Buffer._jtype) ;
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
      j_netSocket["pipeTo(io.vertx.core.streams.WriteStream)"](__args[0]._jdel);
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_netSocket["pipeTo(io.vertx.core.streams.WriteStream,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
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
   @return {NetSocket}
   */
  this.exceptionHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_netSocket["exceptionHandler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
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
   @return {NetSocket}
   */
  this.handler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_netSocket["handler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](utils.convReturnVertxGen(Buffer, jVal));
      }) ;
      return that;
    } else if (typeof __super_handler != 'undefined') {
      return __super_handler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {NetSocket}
   */
  this.pause =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_netSocket["pause()"]() ;
      return that;
    } else if (typeof __super_pause != 'undefined') {
      return __super_pause.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {NetSocket}
   */
  this.resume =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_netSocket["resume()"]() ;
      return that;
    } else if (typeof __super_resume != 'undefined') {
      return __super_resume.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param amount {number} 
   @return {NetSocket}
   */
  this.fetch =  function(amount) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_netSocket["fetch(long)"](__args[0]) ;
      return that;
    } else if (typeof __super_fetch != 'undefined') {
      return __super_fetch.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   
   <p>
   This handler might be called after the close handler when the socket is paused and there are still
   buffers to deliver.

   @public
   @param endHandler {function} 
   @return {NetSocket}
   */
  this.endHandler =  function(endHandler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_netSocket["endHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_endHandler != 'undefined') {
      return __super_endHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like  but with an <code>handler</code> called when the message has been written
   or failed to be written.

   @public
   @param message {Buffer} 
   @param handler {function} 
   @return {NetSocket}
   */
  this.write =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_netSocket["write(io.vertx.core.buffer.Buffer)"](__args[0]._jdel) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_netSocket["write(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 1 && typeof __args[0] === 'string') {
      j_netSocket["write(java.lang.String)"](__args[0]) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_netSocket["write(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](null, null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_netSocket["write(java.lang.String,java.lang.String)"](__args[0], __args[1]) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_netSocket["write(io.vertx.core.buffer.Buffer,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_write != 'undefined') {
      return __super_write.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param maxSize {number} 
   @return {NetSocket}
   */
  this.setWriteQueueMaxSize =  function(maxSize) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_netSocket["setWriteQueueMaxSize(int)"](__args[0]) ;
      return that;
    } else if (typeof __super_setWriteQueueMaxSize != 'undefined') {
      return __super_setWriteQueueMaxSize.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {NetSocket}
   */
  this.drainHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_netSocket["drainHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_drainHandler != 'undefined') {
      return __super_drainHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   When a <code>NetSocket</code> is created it automatically registers an event handler with the event bus, the ID of that
   handler is given by <code>writeHandlerID</code>.
   <p>
   Given this ID, a different event loop can send a buffer to that event handler using the event bus and
   that buffer will be received by this instance in its own event loop and written to the underlying connection. This
   allows you to write data to other connections which are owned by different event loops.

   @public

   @return {string} the write handler ID
   */
  this.writeHandlerID =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_netSocket["writeHandlerID()"]() ;
    } else if (typeof __super_writeHandlerID != 'undefined') {
      return __super_writeHandlerID.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Same as {@link NetSocket#sendFile} but also takes a handler that will be called when the send has completed or
   a failure has occurred

   @public
   @param filename {string} file name of the file to send 
   @param offset {number} offset 
   @param length {number} length 
   @param resultHandler {function} handler 
   @return {NetSocket} a reference to this, so the API can be used fluently
   */
  this.sendFile =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_netSocket["sendFile(java.lang.String)"](__args[0]) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] ==='number') {
      j_netSocket["sendFile(java.lang.String,long)"](__args[0], __args[1]) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] ==='number') {
      j_netSocket["sendFile(java.lang.String,long,long)"](__args[0], __args[1], __args[2]) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_netSocket["sendFile(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      j_netSocket["sendFile(java.lang.String,long,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](null, null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] ==='number' && typeof __args[3] === 'function') {
      j_netSocket["sendFile(java.lang.String,long,long,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(ar) {
        if (ar.succeeded()) {
          __args[3](null, null);
        } else {
          __args[3](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_sendFile != 'undefined') {
      return __super_sendFile.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {SocketAddress} the remote address for this connection, possibly <code>null</code> (e.g a server bound on a domain socket)
   */
  this.remoteAddress =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedremoteAddress == null) {
        that.cachedremoteAddress = utils.convReturnVertxGen(SocketAddress, j_netSocket["remoteAddress()"]());
      }
      return that.cachedremoteAddress;
    } else if (typeof __super_remoteAddress != 'undefined') {
      return __super_remoteAddress.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {SocketAddress} the local address for this connection, possibly <code>null</code> (e.g a server bound on a domain socket)
   */
  this.localAddress =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedlocalAddress == null) {
        that.cachedlocalAddress = utils.convReturnVertxGen(SocketAddress, j_netSocket["localAddress()"]());
      }
      return that.cachedlocalAddress;
    } else if (typeof __super_localAddress != 'undefined') {
      return __super_localAddress.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Close the NetSocket and notify the <code>handler</code> when the operation completes.

   @public
   @param handler {function} 
   */
  this.close =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_netSocket["close()"]();
    } else if (__args.length === 1 && typeof __args[0] === 'function') {
      j_netSocket["close(io.vertx.core.Handler)"](function(ar) {
        if (ar.succeeded()) {
          __args[0](null, null);
        } else {
          __args[0](null, ar.cause());
        }
      });
    } else if (typeof __super_close != 'undefined') {
      return __super_close.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set a handler that will be called when the NetSocket is closed

   @public
   @param handler {function} the handler 
   @return {NetSocket} a reference to this, so the API can be used fluently
   */
  this.closeHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_netSocket["closeHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_closeHandler != 'undefined') {
      return __super_closeHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Upgrade channel to use SSL/TLS. Be aware that for this to work SSL must be configured.

   @public
   @param serverName {string} the server name 
   @param handler {function} the handler will be notified when it's upgraded 
   @return {NetSocket} a reference to this, so the API can be used fluently
   */
  this.upgradeToSsl =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_netSocket["upgradeToSsl(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_netSocket["upgradeToSsl(java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_upgradeToSsl != 'undefined') {
      return __super_upgradeToSsl.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean} true if this {@link NetSocket} is encrypted via SSL/TLS.
   */
  this.isSsl =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_netSocket["isSsl()"]() ;
    } else if (typeof __super_isSsl != 'undefined') {
      return __super_isSsl.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns the SNI server name presented during the SSL handshake by the client.

   @public

   @return {string} the indicated server name
   */
  this.indicatedServerName =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_netSocket["indicatedServerName()"]() ;
    } else if (typeof __super_indicatedServerName != 'undefined') {
      return __super_indicatedServerName.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_netSocket;
};

NetSocket._jclass = utils.getJavaClass("io.vertx.core.net.NetSocket");
NetSocket._jtype = {accept: function(obj) {
    return NetSocket._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(NetSocket.prototype, {});
    NetSocket.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
NetSocket._create = function(jdel) {var obj = Object.create(NetSocket.prototype, {});
  NetSocket.apply(obj, arguments);
  return obj;
}
module.exports = NetSocket;