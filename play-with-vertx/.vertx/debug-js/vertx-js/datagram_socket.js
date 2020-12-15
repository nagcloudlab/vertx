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

/** @module vertx-js/datagram_socket */
var utils = require('vertx-js/util/utils');
var Pipe = require('vertx-js/pipe');
var Buffer = require('vertx-js/buffer');
var DatagramPacket = require('vertx-js/datagram_packet');
var Measured = require('vertx-js/measured');
var WriteStream = require('vertx-js/write_stream');
var ReadStream = require('vertx-js/read_stream');
var SocketAddress = require('vertx-js/socket_address');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JDatagramSocket = Java.type('io.vertx.core.datagram.DatagramSocket');

/**

 @class
*/
var DatagramSocket = function(j_val) {

  var j_datagramSocket = j_val;
  var that = this;
  ReadStream.call(this, j_val);
  Measured.call(this, j_val);

  var __super_isMetricsEnabled = this.isMetricsEnabled;
  var __super_pipe = this.pipe;
  var __super_pipeTo = this.pipeTo;
  var __super_pipeTo = this.pipeTo;
  var __super_send = this.send;
  var __super_sender = this.sender;
  var __super_send = this.send;
  var __super_send = this.send;
  var __super_close = this.close;
  var __super_close = this.close;
  var __super_localAddress = this.localAddress;
  var __super_listenMulticastGroup = this.listenMulticastGroup;
  var __super_listenMulticastGroup = this.listenMulticastGroup;
  var __super_unlistenMulticastGroup = this.unlistenMulticastGroup;
  var __super_unlistenMulticastGroup = this.unlistenMulticastGroup;
  var __super_blockMulticastGroup = this.blockMulticastGroup;
  var __super_blockMulticastGroup = this.blockMulticastGroup;
  var __super_listen = this.listen;
  var __super_pause = this.pause;
  var __super_resume = this.resume;
  var __super_fetch = this.fetch;
  var __super_endHandler = this.endHandler;
  var __super_handler = this.handler;
  var __super_exceptionHandler = this.exceptionHandler;
  /**
   Whether the metrics are enabled for this measured object

   @public

   @return {boolean} <code>true</code> if metrics are enabled
   */
  this.isMetricsEnabled =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_datagramSocket["isMetricsEnabled()"]() ;
    } else if (typeof __super_isMetricsEnabled != 'undefined') {
      return __super_isMetricsEnabled.apply(this, __args);
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
      return utils.convReturnVertxGen(Pipe, j_datagramSocket["pipe()"](), DatagramPacket._jtype) ;
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
      j_datagramSocket["pipeTo(io.vertx.core.streams.WriteStream)"](__args[0]._jdel);
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_datagramSocket["pipeTo(io.vertx.core.streams.WriteStream,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
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
   Write the given String to the {@link SocketAddress} using the given encoding.
   The  will be notified once the write completes.

   @public
   @param str {string} the String to write 
   @param enc {string} the charset used for encoding 
   @param port {number} the host port of the remote peer 
   @param host {string} the host address of the remote peer 
   @param handler {function} the {@link Handler} to notify once the write completes. 
   @return {DatagramSocket} a reference to this, so the API can be used fluently
   */
  this.send =  function() {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] ==='number' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      j_datagramSocket["send(io.vertx.core.buffer.Buffer,int,java.lang.String,io.vertx.core.Handler)"](__args[0]._jdel, __args[1], __args[2], function(ar) {
        if (ar.succeeded()) {
          __args[3](utils.convReturnVertxGen(DatagramSocket, ar.result()), null);
        } else {
          __args[3](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      j_datagramSocket["send(java.lang.String,int,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(ar) {
        if (ar.succeeded()) {
          __args[3](utils.convReturnVertxGen(DatagramSocket, ar.result()), null);
        } else {
          __args[3](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] ==='number' && typeof __args[3] === 'string' && typeof __args[4] === 'function') {
      j_datagramSocket["send(java.lang.String,java.lang.String,int,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], __args[3], function(ar) {
        if (ar.succeeded()) {
          __args[4](utils.convReturnVertxGen(DatagramSocket, ar.result()), null);
        } else {
          __args[4](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_send != 'undefined') {
      return __super_send.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns a <code>WriteStream<Buffer></code> able to send  to the
   {@link SocketAddress}.

   @public
   @param port {number} the port of the remote peer 
   @param host {string} the host address of the remote peer 
   @return {WriteStream} the write stream for sending packets
   */
  this.sender =  function(port, host) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'string') {
      return utils.convReturnVertxGen(WriteStream, j_datagramSocket["sender(int,java.lang.String)"](__args[0], __args[1]), Buffer._jtype) ;
    } else if (typeof __super_sender != 'undefined') {
      return __super_sender.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Closes the {@link DatagramSocket}. The close itself is asynchronous.

   @public

   */
  this.close =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_datagramSocket["close(io.vertx.core.Handler)"](function(ar) {
        if (ar.succeeded()) {
          __args[0](null, null);
        } else {
          __args[0](null, ar.cause());
        }
      });
    } else if (__args.length === 0) {
      j_datagramSocket["close()"]();
    } else if (typeof __super_close != 'undefined') {
      return __super_close.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Return the {@link SocketAddress} to which
   this {@link DatagramSocket} is bound.

   @public

   @return {SocketAddress} the socket address
   */
  this.localAddress =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedlocalAddress == null) {
        that.cachedlocalAddress = utils.convReturnVertxGen(SocketAddress, j_datagramSocket["localAddress()"]());
      }
      return that.cachedlocalAddress;
    } else if (typeof __super_localAddress != 'undefined') {
      return __super_localAddress.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Joins a multicast group and listens for packets send to it on the given network interface.
   The  is notified once the operation completes.

   @public
   @param multicastAddress {string} the address of the multicast group to join 
   @param networkInterface {string} the network interface on which to listen for packets. 
   @param source {string} the address of the source for which we will listen for multicast packets 
   @param handler {function} then handler to notify once the operation completes 
   @return {DatagramSocket} a reference to this, so the API can be used fluently
   */
  this.listenMulticastGroup =  function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_datagramSocket["listenMulticastGroup(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnVertxGen(DatagramSocket, ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && (typeof __args[2] === 'string' || __args[2] == null) && typeof __args[3] === 'function') {
      j_datagramSocket["listenMulticastGroup(java.lang.String,java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(ar) {
        if (ar.succeeded()) {
          __args[3](utils.convReturnVertxGen(DatagramSocket, ar.result()), null);
        } else {
          __args[3](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_listenMulticastGroup != 'undefined') {
      return __super_listenMulticastGroup.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Leaves a multicast group and stops listening for packets send to it on the given network interface.
   The  is notified once the operation completes.

   @public
   @param multicastAddress {string} the address of the multicast group to join 
   @param networkInterface {string} the network interface on which to listen for packets. 
   @param source {string} the address of the source for which we will listen for multicast packets 
   @param handler {function} the handler to notify once the operation completes 
   @return {DatagramSocket} a reference to this, so the API can be used fluently
   */
  this.unlistenMulticastGroup =  function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_datagramSocket["unlistenMulticastGroup(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnVertxGen(DatagramSocket, ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && (typeof __args[2] === 'string' || __args[2] == null) && typeof __args[3] === 'function') {
      j_datagramSocket["unlistenMulticastGroup(java.lang.String,java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(ar) {
        if (ar.succeeded()) {
          __args[3](utils.convReturnVertxGen(DatagramSocket, ar.result()), null);
        } else {
          __args[3](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_unlistenMulticastGroup != 'undefined') {
      return __super_unlistenMulticastGroup.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Block the given address for the given multicast address on the given network interface and notifies
   the  once the operation completes.

   @public
   @param multicastAddress {string} the address for which you want to block the source address 
   @param networkInterface {string} the network interface on which the blocking should occur. 
   @param sourceToBlock {string} the source address which should be blocked. You will not receive an multicast packets for it anymore. 
   @param handler {function} the handler to notify once the operation completes 
   @return {DatagramSocket} a reference to this, so the API can be used fluently
   */
  this.blockMulticastGroup =  function() {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_datagramSocket["blockMulticastGroup(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](utils.convReturnVertxGen(DatagramSocket, ar.result()), null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      j_datagramSocket["blockMulticastGroup(java.lang.String,java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(ar) {
        if (ar.succeeded()) {
          __args[3](utils.convReturnVertxGen(DatagramSocket, ar.result()), null);
        } else {
          __args[3](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_blockMulticastGroup != 'undefined') {
      return __super_blockMulticastGroup.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Start listening on the given port and host. The handler will be called when the socket is listening.

   @public
   @param port {number} the port to listen on 
   @param host {string} the host to listen on 
   @param handler {function} the handler will be called when listening 
   @return {DatagramSocket} a reference to this, so the API can be used fluently
   */
  this.listen =  function(port, host, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_datagramSocket["listen(int,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](utils.convReturnVertxGen(DatagramSocket, ar.result()), null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_listen != 'undefined') {
      return __super_listen.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {DatagramSocket}
   */
  this.pause =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_datagramSocket["pause()"]() ;
      return that;
    } else if (typeof __super_pause != 'undefined') {
      return __super_pause.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {DatagramSocket}
   */
  this.resume =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_datagramSocket["resume()"]() ;
      return that;
    } else if (typeof __super_resume != 'undefined') {
      return __super_resume.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param amount {number} 
   @return {DatagramSocket}
   */
  this.fetch =  function(amount) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_datagramSocket["fetch(long)"](__args[0]) ;
      return that;
    } else if (typeof __super_fetch != 'undefined') {
      return __super_fetch.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param endHandler {function} 
   @return {DatagramSocket}
   */
  this.endHandler =  function(endHandler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_datagramSocket["endHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_endHandler != 'undefined') {
      return __super_endHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {DatagramSocket}
   */
  this.handler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_datagramSocket["handler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](utils.convReturnVertxGen(DatagramPacket, jVal));
      }) ;
      return that;
    } else if (typeof __super_handler != 'undefined') {
      return __super_handler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {DatagramSocket}
   */
  this.exceptionHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_datagramSocket["exceptionHandler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (typeof __super_exceptionHandler != 'undefined') {
      return __super_exceptionHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_datagramSocket;
};

DatagramSocket._jclass = utils.getJavaClass("io.vertx.core.datagram.DatagramSocket");
DatagramSocket._jtype = {accept: function(obj) {
    return DatagramSocket._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(DatagramSocket.prototype, {});
    DatagramSocket.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
DatagramSocket._create = function(jdel) {var obj = Object.create(DatagramSocket.prototype, {});
  DatagramSocket.apply(obj, arguments);
  return obj;
}
module.exports = DatagramSocket;