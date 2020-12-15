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

/** @module vertx-js/http_connection */
var utils = require('vertx-js/util/utils');
var Buffer = require('vertx-js/buffer');
var SocketAddress = require('vertx-js/socket_address');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JHttpConnection = Java.type('io.vertx.core.http.HttpConnection');
var GoAway = Java.type('io.vertx.core.http.GoAway');
var Http2Settings = Java.type('io.vertx.core.http.Http2Settings');

/**
 Represents an HTTP connection.
 <p/>
 HTTP/1.x connection provides an limited implementation, the following methods are implemented:
 <ul>
 @class
*/
var HttpConnection = function(j_val) {

  var j_httpConnection = j_val;
  var that = this;

  var __super_getWindowSize = this.getWindowSize;
  var __super_setWindowSize = this.setWindowSize;
  var __super_goAway = this.goAway;
  var __super_goAway = this.goAway;
  var __super_goAway = this.goAway;
  var __super_goAwayHandler = this.goAwayHandler;
  var __super_shutdownHandler = this.shutdownHandler;
  var __super_shutdown = this.shutdown;
  var __super_shutdown = this.shutdown;
  var __super_closeHandler = this.closeHandler;
  var __super_close = this.close;
  var __super_settings = this.settings;
  var __super_updateSettings = this.updateSettings;
  var __super_updateSettings = this.updateSettings;
  var __super_remoteSettings = this.remoteSettings;
  var __super_remoteSettingsHandler = this.remoteSettingsHandler;
  var __super_ping = this.ping;
  var __super_pingHandler = this.pingHandler;
  var __super_exceptionHandler = this.exceptionHandler;
  var __super_remoteAddress = this.remoteAddress;
  var __super_localAddress = this.localAddress;
  var __super_isSsl = this.isSsl;
  var __super_indicatedServerName = this.indicatedServerName;
  /**

   @public

   @return {number} the current connection window size or <code>-1</code> for HTTP/1.x
   */
  this.getWindowSize =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpConnection["getWindowSize()"]() ;
    } else if (typeof __super_getWindowSize != 'undefined') {
      return __super_getWindowSize.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Update the current connection wide window size to a new size.
   <p/>
   Increasing this value, gives better performance when several data streams are multiplexed
   <p/>
   This is not implemented for HTTP/1.x.

   @public
   @param windowSize {number} the new window size 
   @return {HttpConnection} a reference to this, so the API can be used fluently
   */
  this.setWindowSize =  function(windowSize) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_httpConnection["setWindowSize(int)"](__args[0]) ;
      return that;
    } else if (typeof __super_setWindowSize != 'undefined') {
      return __super_setWindowSize.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Send a go away frame to the remote endpoint of the connection.
   <p/>
   <ul>
     <li>a  frame is sent to the to the remote endpoint with the <code>errorCode</code> and <code>debugData</code></li>
     <li>any stream created after the stream identified by <code>lastStreamId</code> will be closed</li>
     <li>for an  is different than <code>0</code> when all the remaining streams are closed this connection will be closed automatically</li>
   </ul>
   <p/>
   This is not implemented for HTTP/1.x.

   @public
   @param errorCode {number} the  error code 
   @param lastStreamId {number} the last stream id 
   @param debugData {Buffer} additional debug data sent to the remote endpoint 
   @return {HttpConnection} a reference to this, so the API can be used fluently
   */
  this.goAway =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_httpConnection["goAway(long)"](__args[0]) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] ==='number') {
      j_httpConnection["goAway(long,int)"](__args[0], __args[1]) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] ==='number' && typeof __args[2] === 'object' && __args[2]._jdel) {
      j_httpConnection["goAway(long,int,io.vertx.core.buffer.Buffer)"](__args[0], __args[1], __args[2]._jdel) ;
      return that;
    } else if (typeof __super_goAway != 'undefined') {
      return __super_goAway.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set an handler called when a  frame is received.
   <p/>
   This is not implemented for HTTP/1.x.

   @public
   @param handler {function} the handler 
   @return {HttpConnection} a reference to this, so the API can be used fluently
   */
  this.goAwayHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpConnection["goAwayHandler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](utils.convReturnDataObject(jVal));
      }) ;
      return that;
    } else if (typeof __super_goAwayHandler != 'undefined') {
      return __super_goAwayHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set an handler called when a  frame has been sent or received and all connections are closed.
   <p/>
   This is not implemented for HTTP/1.x.

   @public
   @param handler {function} the handler 
   @return {HttpConnection} a reference to this, so the API can be used fluently
   */
  this.shutdownHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpConnection["shutdownHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_shutdownHandler != 'undefined') {
      return __super_shutdownHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link HttpConnection#shutdown} but with a configurable timeout value.

   @public
   @param timeoutMs {number} the timeout in milliseconds 
   @return {HttpConnection} a reference to this, so the API can be used fluently
   */
  this.shutdown =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpConnection["shutdown()"]() ;
      return that;
    } else if (__args.length === 1 && typeof __args[0] ==='number') {
      j_httpConnection["shutdown(long)"](__args[0]) ;
      return that;
    } else if (typeof __super_shutdown != 'undefined') {
      return __super_shutdown.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set a close handler. The handler will get notified when the connection is closed.

   @public
   @param handler {function} the handler to be notified 
   @return {HttpConnection} a reference to this, so the API can be used fluently
   */
  this.closeHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpConnection["closeHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_closeHandler != 'undefined') {
      return __super_closeHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Close the connection and all the currently active streams.
   <p/>
   An HTTP/2 connection will send a  frame before.

   @public

   */
  this.close =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpConnection["close()"]();
    } else if (typeof __super_close != 'undefined') {
      return __super_close.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Object} the latest server settings acknowledged by the remote endpoint - this is not implemented for HTTP/1.x
   */
  this.settings =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnDataObject(j_httpConnection["settings()"]()) ;
    } else if (typeof __super_settings != 'undefined') {
      return __super_settings.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Send to the remote endpoint an update of this endpoint settings
   <p/>
   The <code>completionHandler</code> will be notified when the remote endpoint has acknowledged the settings.
   <p/>
   This is not implemented for HTTP/1.x.

   @public
   @param settings {Object} the new settings 
   @param completionHandler {function} the handler notified when the settings have been acknowledged by the remote endpoint 
   @return {HttpConnection} a reference to this, so the API can be used fluently
   */
  this.updateSettings =  function() {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_httpConnection["updateSettings(io.vertx.core.http.Http2Settings)"](__args[0]  != null ? new Http2Settings(new JsonObject(Java.asJSONCompatible(__args[0]))) : null) ;
      return that;
    } else if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      j_httpConnection["updateSettings(io.vertx.core.http.Http2Settings,io.vertx.core.Handler)"](__args[0]  != null ? new Http2Settings(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_updateSettings != 'undefined') {
      return __super_updateSettings.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Object} the current remote endpoint settings for this connection - this is not implemented for HTTP/1.x
   */
  this.remoteSettings =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnDataObject(j_httpConnection["remoteSettings()"]()) ;
    } else if (typeof __super_remoteSettings != 'undefined') {
      return __super_remoteSettings.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set an handler that is called when remote endpoint <a href="../../dataobjects.html#Http2Settings">Http2Settings</a> are updated.
   <p/>
   This is not implemented for HTTP/1.x.

   @public
   @param handler {function} the handler for remote endpoint settings 
   @return {HttpConnection} a reference to this, so the API can be used fluently
   */
  this.remoteSettingsHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpConnection["remoteSettingsHandler(io.vertx.core.Handler)"](function(jVal) {
        __args[0](utils.convReturnDataObject(jVal));
      }) ;
      return that;
    } else if (typeof __super_remoteSettingsHandler != 'undefined') {
      return __super_remoteSettingsHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Send a  frame to the remote endpoint.
   <p/>
   This is not implemented for HTTP/1.x.

   @public
   @param data {Buffer} the 8 bytes data of the frame 
   @param pongHandler {function} an async result handler notified with pong reply or the failure 
   @return {HttpConnection} a reference to this, so the API can be used fluently
   */
  this.ping =  function(data, pongHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_httpConnection["ping(io.vertx.core.buffer.Buffer,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnVertxGen(Buffer, ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_ping != 'undefined') {
      return __super_ping.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set an handler notified when a  frame is received from the remote endpoint.
   <p/>
   This is not implemented for HTTP/1.x.

   @public
   @param handler {function} the handler to be called when a  is received 
   @return {HttpConnection} a reference to this, so the API can be used fluently
   */
  this.pingHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpConnection["pingHandler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](utils.convReturnVertxGen(Buffer, jVal));
      }) ;
      return that;
    } else if (typeof __super_pingHandler != 'undefined') {
      return __super_pingHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set an handler called when a connection error happens

   @public
   @param handler {function} the handler 
   @return {HttpConnection} a reference to this, so the API can be used fluently
   */
  this.exceptionHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpConnection["exceptionHandler(io.vertx.core.Handler)"](function(jVal) {
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

   @return {SocketAddress} the remote address for this connection, possibly <code>null</code> (e.g a server bound on a domain socket)
   */
  this.remoteAddress =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedremoteAddress == null) {
        that.cachedremoteAddress = utils.convReturnVertxGen(SocketAddress, j_httpConnection["remoteAddress()"]());
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
        that.cachedlocalAddress = utils.convReturnVertxGen(SocketAddress, j_httpConnection["localAddress()"]());
      }
      return that.cachedlocalAddress;
    } else if (typeof __super_localAddress != 'undefined') {
      return __super_localAddress.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean} true if this {@link HttpConnection} is encrypted via SSL/TLS.
   */
  this.isSsl =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpConnection["isSsl()"]() ;
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
      return j_httpConnection["indicatedServerName()"]() ;
    } else if (typeof __super_indicatedServerName != 'undefined') {
      return __super_indicatedServerName.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_httpConnection;
};

HttpConnection._jclass = utils.getJavaClass("io.vertx.core.http.HttpConnection");
HttpConnection._jtype = {accept: function(obj) {
    return HttpConnection._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(HttpConnection.prototype, {});
    HttpConnection.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
HttpConnection._create = function(jdel) {var obj = Object.create(HttpConnection.prototype, {});
  HttpConnection.apply(obj, arguments);
  return obj;
}
module.exports = HttpConnection;