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

/** @module vertx-js/http_server_response */
var utils = require('vertx-js/util/utils');
var Buffer = require('vertx-js/buffer');
var HttpFrame = require('vertx-js/http_frame');
var WriteStream = require('vertx-js/write_stream');
var MultiMap = require('vertx-js/multi_map');
var Cookie = require('vertx-js/cookie');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JHttpServerResponse = Java.type('io.vertx.core.http.HttpServerResponse');
var StreamPriority = Java.type('io.vertx.core.http.StreamPriority');

/**
 Represents a server-side HTTP response.
 <p>
 An instance of this is created and associated to every instance of
 @class
*/
var HttpServerResponse = function(j_val) {

  var j_httpServerResponse = j_val;
  var that = this;
  WriteStream.call(this, j_val);

  var __super_end = this.end;
  var __super_writeQueueFull = this.writeQueueFull;
  var __super_exceptionHandler = this.exceptionHandler;
  var __super_write = this.write;
  var __super_write = this.write;
  var __super_setWriteQueueMaxSize = this.setWriteQueueMaxSize;
  var __super_drainHandler = this.drainHandler;
  var __super_getStatusCode = this.getStatusCode;
  var __super_setStatusCode = this.setStatusCode;
  var __super_getStatusMessage = this.getStatusMessage;
  var __super_setStatusMessage = this.setStatusMessage;
  var __super_setChunked = this.setChunked;
  var __super_isChunked = this.isChunked;
  var __super_headers = this.headers;
  var __super_putHeader = this.putHeader;
  var __super_trailers = this.trailers;
  var __super_putTrailer = this.putTrailer;
  var __super_closeHandler = this.closeHandler;
  var __super_endHandler = this.endHandler;
  var __super_write = this.write;
  var __super_write = this.write;
  var __super_write = this.write;
  var __super_write = this.write;
  var __super_writeContinue = this.writeContinue;
  var __super_end = this.end;
  var __super_end = this.end;
  var __super_end = this.end;
  var __super_end = this.end;
  var __super_end = this.end;
  var __super_end = this.end;
  var __super_end = this.end;
  var __super_sendFile = this.sendFile;
  var __super_sendFile = this.sendFile;
  var __super_sendFile = this.sendFile;
  var __super_sendFile = this.sendFile;
  var __super_sendFile = this.sendFile;
  var __super_sendFile = this.sendFile;
  var __super_close = this.close;
  var __super_ended = this.ended;
  var __super_closed = this.closed;
  var __super_headWritten = this.headWritten;
  var __super_headersEndHandler = this.headersEndHandler;
  var __super_bodyEndHandler = this.bodyEndHandler;
  var __super_bytesWritten = this.bytesWritten;
  var __super_streamId = this.streamId;
  var __super_push = this.push;
  var __super_push = this.push;
  var __super_push = this.push;
  var __super_push = this.push;
  var __super_reset = this.reset;
  var __super_reset = this.reset;
  var __super_writeCustomFrame = this.writeCustomFrame;
  var __super_writeCustomFrame = this.writeCustomFrame;
  var __super_setStreamPriority = this.setStreamPriority;
  var __super_addCookie = this.addCookie;
  var __super_removeCookie = this.removeCookie;
  var __super_removeCookie = this.removeCookie;
  /**
   Ends the response. If no data has been written to the response body,
   the actual response won't get written until this method gets called.
   <p>
   Once the response has ended, it cannot be used any more.

   @public

   */
  this.end =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpServerResponse["end(io.vertx.core.Handler)"](function(ar) {
        if (ar.succeeded()) {
          __args[0](null, null);
        } else {
          __args[0](null, ar.cause());
        }
      });
    } else if (__args.length === 1 && typeof __args[0] === 'string') {
      j_httpServerResponse["end(java.lang.String)"](__args[0]);
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_httpServerResponse["end(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_httpServerResponse["end(java.lang.String,java.lang.String)"](__args[0], __args[1]);
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_httpServerResponse["end(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](null, null);
        } else {
          __args[2](null, ar.cause());
        }
      });
    } else if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_httpServerResponse["end(io.vertx.core.buffer.Buffer)"](__args[0]._jdel);
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_httpServerResponse["end(io.vertx.core.buffer.Buffer,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (__args.length === 0) {
      j_httpServerResponse["end()"]();
    } else if (typeof __super_end != 'undefined') {
      return __super_end.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   This will return <code>true</code> if there are more bytes in the write queue than the value set using {@link HttpServerResponse#setWriteQueueMaxSize}

   @public

   @return {boolean} true if write queue is full
   */
  this.writeQueueFull =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerResponse["writeQueueFull()"]() ;
    } else if (typeof __super_writeQueueFull != 'undefined') {
      return __super_writeQueueFull.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {HttpServerResponse}
   */
  this.exceptionHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpServerResponse["exceptionHandler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (typeof __super_exceptionHandler != 'undefined') {
      return __super_exceptionHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Same as {@link HttpServerResponse#write} but with an <code>handler</code> called when the operation completes

   @public
   @param chunk {string} 
   @param handler {function} 
   @return {HttpServerResponse}
   */
  this.write =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_httpServerResponse["write(io.vertx.core.buffer.Buffer)"](__args[0]._jdel) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_httpServerResponse["write(io.vertx.core.buffer.Buffer,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_httpServerResponse["write(java.lang.String,java.lang.String)"](__args[0], __args[1]) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_httpServerResponse["write(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](null, null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 1 && typeof __args[0] === 'string') {
      j_httpServerResponse["write(java.lang.String)"](__args[0]) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_httpServerResponse["write(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
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
   @return {HttpServerResponse}
   */
  this.setWriteQueueMaxSize =  function(maxSize) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_httpServerResponse["setWriteQueueMaxSize(int)"](__args[0]) ;
      return that;
    } else if (typeof __super_setWriteQueueMaxSize != 'undefined') {
      return __super_setWriteQueueMaxSize.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {HttpServerResponse}
   */
  this.drainHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpServerResponse["drainHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_drainHandler != 'undefined') {
      return __super_drainHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {number} the HTTP status code of the response. The default is <code>200</code> representing <code>OK</code>.
   */
  this.getStatusCode =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerResponse["getStatusCode()"]() ;
    } else if (typeof __super_getStatusCode != 'undefined') {
      return __super_getStatusCode.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set the status code. If the status message hasn't been explicitly set, a default status message corresponding
   to the code will be looked-up and used.

   @public
   @param statusCode {number} 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.setStatusCode =  function(statusCode) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_httpServerResponse["setStatusCode(int)"](__args[0]) ;
      return that;
    } else if (typeof __super_setStatusCode != 'undefined') {
      return __super_setStatusCode.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the HTTP status message of the response. If this is not specified a default value will be used depending on what {@link HttpServerResponse#setStatusCode} has been set to.
   */
  this.getStatusMessage =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerResponse["getStatusMessage()"]() ;
    } else if (typeof __super_getStatusMessage != 'undefined') {
      return __super_getStatusMessage.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set the status message

   @public
   @param statusMessage {string} 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.setStatusMessage =  function(statusMessage) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_httpServerResponse["setStatusMessage(java.lang.String)"](__args[0]) ;
      return that;
    } else if (typeof __super_setStatusMessage != 'undefined') {
      return __super_setStatusMessage.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   If <code>chunked</code> is <code>true</code>, this response will use HTTP chunked encoding, and each call to write to the body
   will correspond to a new HTTP chunk sent on the wire.
   <p>
   If chunked encoding is used the HTTP header <code>Transfer-Encoding</code> with a value of <code>Chunked</code> will be
   automatically inserted in the response.
   <p>
   If <code>chunked</code> is <code>false</code>, this response will not use HTTP chunked encoding, and therefore the total size
   of any data that is written in the respone body must be set in the <code>Content-Length</code> header <b>before</b> any
   data is written out.
   <p>
   An HTTP chunked response is typically used when you do not know the total size of the request body up front.

   @public
   @param chunked {boolean} 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.setChunked =  function(chunked) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      j_httpServerResponse["setChunked(boolean)"](__args[0]) ;
      return that;
    } else if (typeof __super_setChunked != 'undefined') {
      return __super_setChunked.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean} is the response chunked?
   */
  this.isChunked =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerResponse["isChunked()"]() ;
    } else if (typeof __super_isChunked != 'undefined') {
      return __super_isChunked.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {MultiMap} The HTTP headers
   */
  this.headers =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedheaders == null) {
        that.cachedheaders = utils.convReturnVertxGen(MultiMap, j_httpServerResponse["headers()"]());
      }
      return that.cachedheaders;
    } else if (typeof __super_headers != 'undefined') {
      return __super_headers.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Put an HTTP header

   @public
   @param name {string} the header name 
   @param value {string} the header value. 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.putHeader =  function(name, value) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_httpServerResponse["putHeader(java.lang.String,java.lang.String)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_putHeader != 'undefined') {
      return __super_putHeader.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {MultiMap} The HTTP trailers
   */
  this.trailers =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedtrailers == null) {
        that.cachedtrailers = utils.convReturnVertxGen(MultiMap, j_httpServerResponse["trailers()"]());
      }
      return that.cachedtrailers;
    } else if (typeof __super_trailers != 'undefined') {
      return __super_trailers.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Put an HTTP trailer

   @public
   @param name {string} the trailer name 
   @param value {string} the trailer value 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.putTrailer =  function(name, value) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_httpServerResponse["putTrailer(java.lang.String,java.lang.String)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_putTrailer != 'undefined') {
      return __super_putTrailer.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set a close handler for the response, this is called when the underlying connection is closed and the response
   was still using the connection.
   <p>
   For HTTP/1.x it is called when the connection is closed before <code>end()</code> is called, therefore it is not
   guaranteed to be called.
   <p>
   For HTTP/2 it is called when the related stream is closed, and therefore it will be always be called.

   @public
   @param handler {function} the handler 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.closeHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpServerResponse["closeHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_closeHandler != 'undefined') {
      return __super_closeHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set an end handler for the response. This will be called when the response is disposed to allow consistent cleanup
   of the response.

   @public
   @param handler {function} the handler 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.endHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpServerResponse["endHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_endHandler != 'undefined') {
      return __super_endHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Used to write an interim 100 Continue response to signify that the client should send the rest of the request.
   Must only be used if the request contains an "Expect:100-Continue" header

   @public

   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.writeContinue =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpServerResponse["writeContinue()"]() ;
      return that;
    } else if (typeof __super_writeContinue != 'undefined') {
      return __super_writeContinue.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link HttpServerResponse#sendFile} but providing a handler which will be notified once the file has been
   completely written to the wire.

   @public
   @param filename {string} path to the file to serve 
   @param offset {number} the offset to serve from 
   @param length {number} the length to serve to 
   @param resultHandler {function} handler that will be called on completion 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.sendFile =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_httpServerResponse["sendFile(java.lang.String)"](__args[0]) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] ==='number') {
      j_httpServerResponse["sendFile(java.lang.String,long)"](__args[0], __args[1]) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] ==='number') {
      j_httpServerResponse["sendFile(java.lang.String,long,long)"](__args[0], __args[1], __args[2]) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_httpServerResponse["sendFile(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      j_httpServerResponse["sendFile(java.lang.String,long,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](null, null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] ==='number' && typeof __args[3] === 'function') {
      j_httpServerResponse["sendFile(java.lang.String,long,long,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(ar) {
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
   Close the underlying TCP connection corresponding to the request.

   @public

   */
  this.close =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpServerResponse["close()"]();
    } else if (typeof __super_close != 'undefined') {
      return __super_close.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean} has the response already ended?
   */
  this.ended =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerResponse["ended()"]() ;
    } else if (typeof __super_ended != 'undefined') {
      return __super_ended.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean} has the underlying TCP connection corresponding to the request already been closed?
   */
  this.closed =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerResponse["closed()"]() ;
    } else if (typeof __super_closed != 'undefined') {
      return __super_closed.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean} have the headers for the response already been written?
   */
  this.headWritten =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerResponse["headWritten()"]() ;
    } else if (typeof __super_headWritten != 'undefined') {
      return __super_headWritten.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Provide a handler that will be called just before the headers are written to the wire.<p>
   This provides a hook allowing you to add any more headers or do any more operations before this occurs.

   @public
   @param handler {function} the handler 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.headersEndHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpServerResponse["headersEndHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_headersEndHandler != 'undefined') {
      return __super_headersEndHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Provides a handler that will be called after the last part of the body is written to the wire.
   The handler is called asynchronously of when the response has been received by the client.
   This provides a hook allowing you to do more operations once the request has been sent over the wire
   such as resource cleanup.

   @public
   @param handler {function} the handler 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.bodyEndHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpServerResponse["bodyEndHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_bodyEndHandler != 'undefined') {
      return __super_bodyEndHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {number} the total number of bytes written for the body of the response.
   */
  this.bytesWritten =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerResponse["bytesWritten()"]() ;
    } else if (typeof __super_bytesWritten != 'undefined') {
      return __super_bytesWritten.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {number} the id of the stream of this response,  for HTTP/1.x
   */
  this.streamId =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerResponse["streamId()"]() ;
    } else if (typeof __super_streamId != 'undefined') {
      return __super_streamId.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Push a response to the client.<p/>

   The <code>handler</code> will be notified with a <i>success</i> when the push can be sent and with
   a <i>failure</i> when the client has disabled push or reset the push before it has been sent.<p/>

   The <code>handler</code> may be queued if the client has reduced the maximum number of streams the server can push
   concurrently.<p/>

   Push can be sent only for peer initiated streams and if the response is not ended.

   @public
   @param method {Object} the method of the promised request 
   @param host {string} the host of the promised request 
   @param path {string} the path of the promised request 
   @param headers {MultiMap} the headers of the promised request 
   @param handler {function} the handler notified when the response can be written 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.push =  function() {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      j_httpServerResponse["push(io.vertx.core.http.HttpMethod,java.lang.String,java.lang.String,io.vertx.core.Handler)"](io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1], __args[2], function(ar) {
        if (ar.succeeded()) {
          __args[3](utils.convReturnVertxGen(HttpServerResponse, ar.result()), null);
        } else {
          __args[3](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'function') {
      j_httpServerResponse["push(io.vertx.core.http.HttpMethod,java.lang.String,io.vertx.core.MultiMap,io.vertx.core.Handler)"](io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1], __args[2]._jdel, function(ar) {
        if (ar.succeeded()) {
          __args[3](utils.convReturnVertxGen(HttpServerResponse, ar.result()), null);
        } else {
          __args[3](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_httpServerResponse["push(io.vertx.core.http.HttpMethod,java.lang.String,io.vertx.core.Handler)"](io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](utils.convReturnVertxGen(HttpServerResponse, ar.result()), null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'object' && __args[3]._jdel && typeof __args[4] === 'function') {
      j_httpServerResponse["push(io.vertx.core.http.HttpMethod,java.lang.String,java.lang.String,io.vertx.core.MultiMap,io.vertx.core.Handler)"](io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1], __args[2], __args[3]._jdel, function(ar) {
        if (ar.succeeded()) {
          __args[4](utils.convReturnVertxGen(HttpServerResponse, ar.result()), null);
        } else {
          __args[4](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_push != 'undefined') {
      return __super_push.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Reset this HTTP/2 stream with the error <code>code</code>.

   @public
   @param code {number} the error code 
   */
  this.reset =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpServerResponse["reset()"]();
    } else if (__args.length === 1 && typeof __args[0] ==='number') {
      j_httpServerResponse["reset(long)"](__args[0]);
    } else if (typeof __super_reset != 'undefined') {
      return __super_reset.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link HttpServerResponse#writeCustomFrame} but with an {@link HttpFrame}.

   @public
   @param frame {HttpFrame} the frame to write 
   @return {HttpServerResponse}
   */
  this.writeCustomFrame =  function() {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] ==='number' && typeof __args[2] === 'object' && __args[2]._jdel) {
      j_httpServerResponse["writeCustomFrame(int,int,io.vertx.core.buffer.Buffer)"](__args[0], __args[1], __args[2]._jdel) ;
      return that;
    } else if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_httpServerResponse["writeCustomFrame(io.vertx.core.http.HttpFrame)"](__args[0]._jdel) ;
      return that;
    } else if (typeof __super_writeCustomFrame != 'undefined') {
      return __super_writeCustomFrame.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the priority of the associated stream
   <p/>
   This is not implemented for HTTP/1.x.

   @public
   @param streamPriority {Object} the priority for this request's stream 
   @return {HttpServerResponse}
   */
  this.setStreamPriority =  function(streamPriority) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_httpServerResponse["setStreamPriority(io.vertx.core.http.StreamPriority)"](__args[0]  != null ? new StreamPriority(new JsonObject(Java.asJSONCompatible(__args[0]))) : null) ;
      return that;
    } else if (typeof __super_setStreamPriority != 'undefined') {
      return __super_setStreamPriority.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Add a cookie. This will be sent back to the client in the response.

   @public
   @param cookie {Cookie} the cookie 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.addCookie =  function(cookie) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_httpServerResponse["addCookie(io.vertx.core.http.Cookie)"](__args[0]._jdel) ;
      return that;
    } else if (typeof __super_addCookie != 'undefined') {
      return __super_addCookie.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Remove a cookie from the cookie set. If invalidate is true then it will expire a cookie, notifying a User Agent to
   remove it from its cookie jar.

   @public
   @param name {string} the name of the cookie 
   @param invalidate {boolean} 
   @return {Cookie} the cookie, if it existed, or null
   */
  this.removeCookie =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(Cookie, j_httpServerResponse["removeCookie(java.lang.String)"](__args[0])) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] ==='boolean') {
      return utils.convReturnVertxGen(Cookie, j_httpServerResponse["removeCookie(java.lang.String,boolean)"](__args[0], __args[1])) ;
    } else if (typeof __super_removeCookie != 'undefined') {
      return __super_removeCookie.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_httpServerResponse;
};

HttpServerResponse._jclass = utils.getJavaClass("io.vertx.core.http.HttpServerResponse");
HttpServerResponse._jtype = {accept: function(obj) {
    return HttpServerResponse._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(HttpServerResponse.prototype, {});
    HttpServerResponse.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
HttpServerResponse._create = function(jdel) {var obj = Object.create(HttpServerResponse.prototype, {});
  HttpServerResponse.apply(obj, arguments);
  return obj;
}
module.exports = HttpServerResponse;