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

/** @module vertx-js/http_server_request */
var utils = require('vertx-js/util/utils');
var ServerWebSocket = require('vertx-js/server_web_socket');
var HttpServerFileUpload = require('vertx-js/http_server_file_upload');
var MultiMap = require('vertx-js/multi_map');
var Pipe = require('vertx-js/pipe');
var Buffer = require('vertx-js/buffer');
var HttpFrame = require('vertx-js/http_frame');
var WriteStream = require('vertx-js/write_stream');
var HttpServerResponse = require('vertx-js/http_server_response');
var ReadStream = require('vertx-js/read_stream');
var HttpConnection = require('vertx-js/http_connection');
var Cookie = require('vertx-js/cookie');
var SocketAddress = require('vertx-js/socket_address');
var NetSocket = require('vertx-js/net_socket');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JHttpServerRequest = Java.type('io.vertx.core.http.HttpServerRequest');
var StreamPriority = Java.type('io.vertx.core.http.StreamPriority');

/**
 Represents a server-side HTTP request.
 <p>
 Instances are created for each request and passed to the user via a handler.
 <p>
 @class
*/
var HttpServerRequest = function(j_val) {

  var j_httpServerRequest = j_val;
  var that = this;
  ReadStream.call(this, j_val);

  var __super_pipe = this.pipe;
  var __super_pipeTo = this.pipeTo;
  var __super_pipeTo = this.pipeTo;
  var __super_exceptionHandler = this.exceptionHandler;
  var __super_handler = this.handler;
  var __super_pause = this.pause;
  var __super_resume = this.resume;
  var __super_fetch = this.fetch;
  var __super_endHandler = this.endHandler;
  var __super_version = this.version;
  var __super_method = this.method;
  var __super_rawMethod = this.rawMethod;
  var __super_isSSL = this.isSSL;
  var __super_scheme = this.scheme;
  var __super_uri = this.uri;
  var __super_path = this.path;
  var __super_query = this.query;
  var __super_host = this.host;
  var __super_bytesRead = this.bytesRead;
  var __super_response = this.response;
  var __super_headers = this.headers;
  var __super_getHeader = this.getHeader;
  var __super_params = this.params;
  var __super_getParam = this.getParam;
  var __super_remoteAddress = this.remoteAddress;
  var __super_localAddress = this.localAddress;
  var __super_absoluteURI = this.absoluteURI;
  var __super_bodyHandler = this.bodyHandler;
  var __super_netSocket = this.netSocket;
  var __super_toNetSocket = this.toNetSocket;
  var __super_setExpectMultipart = this.setExpectMultipart;
  var __super_isExpectMultipart = this.isExpectMultipart;
  var __super_uploadHandler = this.uploadHandler;
  var __super_formAttributes = this.formAttributes;
  var __super_getFormAttribute = this.getFormAttribute;
  var __super_upgrade = this.upgrade;
  var __super_toWebSocket = this.toWebSocket;
  var __super_isEnded = this.isEnded;
  var __super_customFrameHandler = this.customFrameHandler;
  var __super_connection = this.connection;
  var __super_streamPriority = this.streamPriority;
  var __super_streamPriorityHandler = this.streamPriorityHandler;
  var __super_getCookie = this.getCookie;
  var __super_cookieCount = this.cookieCount;
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
      return utils.convReturnVertxGen(Pipe, j_httpServerRequest["pipe()"](), Buffer._jtype) ;
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
      j_httpServerRequest["pipeTo(io.vertx.core.streams.WriteStream)"](__args[0]._jdel);
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_httpServerRequest["pipeTo(io.vertx.core.streams.WriteStream,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
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
   @return {HttpServerRequest}
   */
  this.exceptionHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpServerRequest["exceptionHandler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
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
   @return {HttpServerRequest}
   */
  this.handler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpServerRequest["handler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
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

   @return {HttpServerRequest}
   */
  this.pause =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpServerRequest["pause()"]() ;
      return that;
    } else if (typeof __super_pause != 'undefined') {
      return __super_pause.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {HttpServerRequest}
   */
  this.resume =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpServerRequest["resume()"]() ;
      return that;
    } else if (typeof __super_resume != 'undefined') {
      return __super_resume.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param amount {number} 
   @return {HttpServerRequest}
   */
  this.fetch =  function(amount) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_httpServerRequest["fetch(long)"](__args[0]) ;
      return that;
    } else if (typeof __super_fetch != 'undefined') {
      return __super_fetch.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param endHandler {function} 
   @return {HttpServerRequest}
   */
  this.endHandler =  function(endHandler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpServerRequest["endHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_endHandler != 'undefined') {
      return __super_endHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Object} the HTTP version of the request
   */
  this.version =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnEnum(j_httpServerRequest["version()"]()) ;
    } else if (typeof __super_version != 'undefined') {
      return __super_version.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Object} the HTTP method for the request.
   */
  this.method =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnEnum(j_httpServerRequest["method()"]()) ;
    } else if (typeof __super_method != 'undefined') {
      return __super_method.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the HTTP method as sent by the client
   */
  this.rawMethod =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerRequest["rawMethod()"]() ;
    } else if (typeof __super_rawMethod != 'undefined') {
      return __super_rawMethod.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean} true if this {@link NetSocket} is encrypted via SSL/TLS
   */
  this.isSSL =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerRequest["isSSL()"]() ;
    } else if (typeof __super_isSSL != 'undefined') {
      return __super_isSSL.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the scheme of the request
   */
  this.scheme =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerRequest["scheme()"]() ;
    } else if (typeof __super_scheme != 'undefined') {
      return __super_scheme.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the URI of the request. This is usually a relative URI
   */
  this.uri =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerRequest["uri()"]() ;
    } else if (typeof __super_uri != 'undefined') {
      return __super_uri.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} The path part of the uri. For example /somepath/somemorepath/someresource.foo
   */
  this.path =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerRequest["path()"]() ;
    } else if (typeof __super_path != 'undefined') {
      return __super_path.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the query part of the uri. For example someparam=32&amp;someotherparam=x
   */
  this.query =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerRequest["query()"]() ;
    } else if (typeof __super_query != 'undefined') {
      return __super_query.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the request host. For HTTP2 it returns the  pseudo header otherwise it returns the  header
   */
  this.host =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerRequest["host()"]() ;
    } else if (typeof __super_host != 'undefined') {
      return __super_host.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {number} the total number of bytes read for the body of the request.
   */
  this.bytesRead =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerRequest["bytesRead()"]() ;
    } else if (typeof __super_bytesRead != 'undefined') {
      return __super_bytesRead.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {HttpServerResponse} the response. Each instance of this class has an {@link HttpServerResponse} instance attached to it. This is used to send the response back to the client.
   */
  this.response =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedresponse == null) {
        that.cachedresponse = utils.convReturnVertxGen(HttpServerResponse, j_httpServerRequest["response()"]());
      }
      return that.cachedresponse;
    } else if (typeof __super_response != 'undefined') {
      return __super_response.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {MultiMap} the headers in the request.
   */
  this.headers =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedheaders == null) {
        that.cachedheaders = utils.convReturnVertxGen(MultiMap, j_httpServerRequest["headers()"]());
      }
      return that.cachedheaders;
    } else if (typeof __super_headers != 'undefined') {
      return __super_headers.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Return the first header value with the specified name

   @public
   @param headerName {string} the header name 
   @return {string} the header value
   */
  this.getHeader =  function(headerName) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_httpServerRequest["getHeader(java.lang.String)"](__args[0]) ;
    } else if (typeof __super_getHeader != 'undefined') {
      return __super_getHeader.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {MultiMap} the query parameters in the request
   */
  this.params =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedparams == null) {
        that.cachedparams = utils.convReturnVertxGen(MultiMap, j_httpServerRequest["params()"]());
      }
      return that.cachedparams;
    } else if (typeof __super_params != 'undefined') {
      return __super_params.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Return the first param value with the specified name

   @public
   @param paramName {string} the param name 
   @return {string} the param value
   */
  this.getParam =  function(paramName) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_httpServerRequest["getParam(java.lang.String)"](__args[0]) ;
    } else if (typeof __super_getParam != 'undefined') {
      return __super_getParam.apply(this, __args);
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
        that.cachedremoteAddress = utils.convReturnVertxGen(SocketAddress, j_httpServerRequest["remoteAddress()"]());
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
        that.cachedlocalAddress = utils.convReturnVertxGen(SocketAddress, j_httpServerRequest["localAddress()"]());
      }
      return that.cachedlocalAddress;
    } else if (typeof __super_localAddress != 'undefined') {
      return __super_localAddress.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the absolute URI corresponding to the the HTTP request
   */
  this.absoluteURI =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerRequest["absoluteURI()"]() ;
    } else if (typeof __super_absoluteURI != 'undefined') {
      return __super_absoluteURI.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Convenience method for receiving the entire request body in one piece.
   <p>
   This saves the user having to manually setting a data and end handler and append the chunks of the body until
   the whole body received. Don't use this if your request body is large - you could potentially run out of RAM.

   @public
   @param bodyHandler {function} This handler will be called after all the body has been received 
   @return {HttpServerRequest}
   */
  this.bodyHandler =  function(bodyHandler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpServerRequest["bodyHandler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](utils.convReturnVertxGen(Buffer, jVal));
      }) ;
      return that;
    } else if (typeof __super_bodyHandler != 'undefined') {
      return __super_bodyHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Get a net socket for the underlying connection of this request.
   <p/>
   This method must be called before the server response is ended.
   <p/>
   With <code>CONNECT</code> requests, a <code>200</code> response is sent with no <code>content-length</code> header set
   before returning the socket.
   <p/>
   <pre>
   server.requestHandler(req -> {
     if (req.method() == HttpMethod.CONNECT) {
       // Send a 200 response to accept the connect
       NetSocket socket = req.netSocket();
       socket.handler(buff -> {
         socket.write(buff);
       });
     }
     ...
   });
   </pre>
   <p/>
   For other HTTP/1 requests once you have called this method, you must handle writing to the connection yourself using
   the net socket, the server request instance will no longer be usable as normal. USE THIS WITH CAUTION! Writing to the socket directly if you don't know what you're
   doing can easily break the HTTP protocol.
   <p/>
   With HTTP/2, a <code>200</code> response is always sent with no <code>content-length</code> header set before returning the socket
   like in the <code>CONNECT</code> case above.
   <p/>

   @public

   @return {NetSocket} the net socket
   */
  this.netSocket =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachednetSocket == null) {
        that.cachednetSocket = utils.convReturnVertxGen(NetSocket, j_httpServerRequest["netSocket()"]());
      }
      return that.cachednetSocket;
    } else if (typeof __super_netSocket != 'undefined') {
      return __super_netSocket.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Establish a TCP <a href="https://tools.ietf.org/html/rfc7231#section-4.3.6">tunnel<a/> with the client.

   <p> This must be called only for <code>CONNECT</code> HTTP method and before any response is sent.

   <p> Calling this sends a <code>200</code> response with no <code>content-length</code> header set and
   then provides the <code>NetSocket</code> for handling the created tunnel. Any HTTP header set on the
   response before calling this method will be sent.

   <pre>
   server.requestHandler(req -> {
     if (req.method() == HttpMethod.CONNECT) {
       // Send a 200 response to accept the connect
       NetSocket socket = req.netSocket();
       socket.handler(buff -> {
         socket.write(buff);
       });
     }
     ...
   });
   </pre>

   @public
   @param handler {function} the completion handler 
   */
  this.toNetSocket =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpServerRequest["toNetSocket(io.vertx.core.Handler)"](function(ar) {
        if (ar.succeeded()) {
          __args[0](utils.convReturnVertxGen(NetSocket, ar.result()), null);
        } else {
          __args[0](null, ar.cause());
        }
      });
    } else if (typeof __super_toNetSocket != 'undefined') {
      return __super_toNetSocket.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Call this with true if you are expecting a multi-part body to be submitted in the request.
   This must be called before the body of the request has been received

   @public
   @param expect {boolean} true - if you are expecting a multi-part body 
   @return {HttpServerRequest} a reference to this, so the API can be used fluently
   */
  this.setExpectMultipart =  function(expect) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      j_httpServerRequest["setExpectMultipart(boolean)"](__args[0]) ;
      return that;
    } else if (typeof __super_setExpectMultipart != 'undefined') {
      return __super_setExpectMultipart.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean} true if we are expecting a multi-part body for this request. See {@link HttpServerRequest#setExpectMultipart}.
   */
  this.isExpectMultipart =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerRequest["isExpectMultipart()"]() ;
    } else if (typeof __super_isExpectMultipart != 'undefined') {
      return __super_isExpectMultipart.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set an upload handler. The handler will get notified once a new file upload was received to allow you to deal
   with the file upload.

   @public
   @param uploadHandler {function} 
   @return {HttpServerRequest} a reference to this, so the API can be used fluently
   */
  this.uploadHandler =  function(uploadHandler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpServerRequest["uploadHandler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](utils.convReturnVertxGen(HttpServerFileUpload, jVal));
      }) ;
      return that;
    } else if (typeof __super_uploadHandler != 'undefined') {
      return __super_uploadHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns a map of all form attributes in the request.
   <p>
   Be aware that the attributes will only be available after the whole body has been received, i.e. after
   the request end handler has been called.
   <p>
   {@link HttpServerRequest#setExpectMultipart} must be called first before trying to get the form attributes.

   @public

   @return {MultiMap} the form attributes
   */
  this.formAttributes =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedformAttributes == null) {
        that.cachedformAttributes = utils.convReturnVertxGen(MultiMap, j_httpServerRequest["formAttributes()"]());
      }
      return that.cachedformAttributes;
    } else if (typeof __super_formAttributes != 'undefined') {
      return __super_formAttributes.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Return the first form attribute value with the specified name

   @public
   @param attributeName {string} the attribute name 
   @return {string} the attribute value
   */
  this.getFormAttribute =  function(attributeName) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_httpServerRequest["getFormAttribute(java.lang.String)"](__args[0]) ;
    } else if (typeof __super_getFormAttribute != 'undefined') {
      return __super_getFormAttribute.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Upgrade the connection to a WebSocket connection.
   <p>
   This is an alternative way of handling WebSockets and can only be used if no WebSocket handler is set on the
   <code>HttpServer</code>, and can only be used during the upgrade request during the WebSocket handshake.

   @public

   @return {ServerWebSocket} the WebSocket
   */
  this.upgrade =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(ServerWebSocket, j_httpServerRequest["upgrade()"]()) ;
    } else if (typeof __super_upgrade != 'undefined') {
      return __super_upgrade.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Upgrade the connection of the current request to a WebSocket.
   <p>
   This is an alternative way of handling WebSockets and can only be used if no WebSocket handler is set on the
   <code>HttpServer</code>, and can only be used during the upgrade request during the WebSocket handshake.

   <p> Both {@link HttpServerRequest#handler} and {@link HttpServerRequest#endHandler} will be set to get the full body of the
   request that is necessary to perform the WebSocket handshake.

   <p> If you need to do an asynchronous upgrade, i.e not performed immediately in your request handler,
   you need to {@link HttpServerRequest#pause} the request in order to not lose HTTP events necessary to upgrade the
   request.

   @public
   @param handler {function} the completion handler 
   */
  this.toWebSocket =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpServerRequest["toWebSocket(io.vertx.core.Handler)"](function(ar) {
        if (ar.succeeded()) {
          __args[0](utils.convReturnVertxGen(ServerWebSocket, ar.result()), null);
        } else {
          __args[0](null, ar.cause());
        }
      });
    } else if (typeof __super_toWebSocket != 'undefined') {
      return __super_toWebSocket.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Has the request ended? I.e. has the entire request, including the body been read?

   @public

   @return {boolean} true if ended
   */
  this.isEnded =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerRequest["isEnded()"]() ;
    } else if (typeof __super_isEnded != 'undefined') {
      return __super_isEnded.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set a custom frame handler. The handler will get notified when the http stream receives an custom HTTP/2
   frame. HTTP/2 permits extension of the protocol.

   @public
   @param handler {function} 
   @return {HttpServerRequest} a reference to this, so the API can be used fluently
   */
  this.customFrameHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpServerRequest["customFrameHandler(io.vertx.core.Handler)"](function(jVal) {
        __args[0](utils.convReturnVertxGen(HttpFrame, jVal));
      }) ;
      return that;
    } else if (typeof __super_customFrameHandler != 'undefined') {
      return __super_customFrameHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {HttpConnection} the {@link HttpConnection} associated with this request
   */
  this.connection =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedconnection == null) {
        that.cachedconnection = utils.convReturnVertxGen(HttpConnection, j_httpServerRequest["connection()"]());
      }
      return that.cachedconnection;
    } else if (typeof __super_connection != 'undefined') {
      return __super_connection.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Object} the priority of the associated HTTP/2 stream for HTTP/2 otherwise <code>null</code>
   */
  this.streamPriority =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnDataObject(j_httpServerRequest["streamPriority()"]()) ;
    } else if (typeof __super_streamPriority != 'undefined') {
      return __super_streamPriority.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set an handler for stream priority changes
   <p>
   This is not implemented for HTTP/1.x.

   @public
   @param handler {function} the handler to be called when stream priority changes 
   @return {HttpServerRequest}
   */
  this.streamPriorityHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpServerRequest["streamPriorityHandler(io.vertx.core.Handler)"](function(jVal) {
        __args[0](utils.convReturnDataObject(jVal));
      }) ;
      return that;
    } else if (typeof __super_streamPriorityHandler != 'undefined') {
      return __super_streamPriorityHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Get the cookie with the specified name.

   @public
   @param name {string} the cookie name 
   @return {Cookie} the cookie
   */
  this.getCookie =  function(name) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(Cookie, j_httpServerRequest["getCookie(java.lang.String)"](__args[0])) ;
    } else if (typeof __super_getCookie != 'undefined') {
      return __super_getCookie.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {number} the number of cookieMap.
   */
  this.cookieCount =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerRequest["cookieCount()"]() ;
    } else if (typeof __super_cookieCount != 'undefined') {
      return __super_cookieCount.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_httpServerRequest;
};

HttpServerRequest._jclass = utils.getJavaClass("io.vertx.core.http.HttpServerRequest");
HttpServerRequest._jtype = {accept: function(obj) {
    return HttpServerRequest._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(HttpServerRequest.prototype, {});
    HttpServerRequest.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
HttpServerRequest._create = function(jdel) {var obj = Object.create(HttpServerRequest.prototype, {});
  HttpServerRequest.apply(obj, arguments);
  return obj;
}
module.exports = HttpServerRequest;