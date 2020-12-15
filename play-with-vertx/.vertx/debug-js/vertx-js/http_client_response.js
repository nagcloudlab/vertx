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

/** @module vertx-js/http_client_response */
var utils = require('vertx-js/util/utils');
var HttpClientRequest = require('vertx-js/http_client_request');
var Pipe = require('vertx-js/pipe');
var Buffer = require('vertx-js/buffer');
var HttpFrame = require('vertx-js/http_frame');
var WriteStream = require('vertx-js/write_stream');
var MultiMap = require('vertx-js/multi_map');
var ReadStream = require('vertx-js/read_stream');
var NetSocket = require('vertx-js/net_socket');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JHttpClientResponse = Java.type('io.vertx.core.http.HttpClientResponse');
var StreamPriority = Java.type('io.vertx.core.http.StreamPriority');

/**
 Represents a client-side HTTP response.
 <p>
 @class
*/
var HttpClientResponse = function(j_val) {

  var j_httpClientResponse = j_val;
  var that = this;
  ReadStream.call(this, j_val);

  var __super_pipe = this.pipe;
  var __super_pipeTo = this.pipeTo;
  var __super_pipeTo = this.pipeTo;
  var __super_fetch = this.fetch;
  var __super_resume = this.resume;
  var __super_exceptionHandler = this.exceptionHandler;
  var __super_handler = this.handler;
  var __super_pause = this.pause;
  var __super_endHandler = this.endHandler;
  var __super_version = this.version;
  var __super_statusCode = this.statusCode;
  var __super_statusMessage = this.statusMessage;
  var __super_headers = this.headers;
  var __super_getHeader = this.getHeader;
  var __super_getTrailer = this.getTrailer;
  var __super_trailers = this.trailers;
  var __super_cookies = this.cookies;
  var __super_bodyHandler = this.bodyHandler;
  var __super_customFrameHandler = this.customFrameHandler;
  var __super_netSocket = this.netSocket;
  var __super_request = this.request;
  var __super_streamPriorityHandler = this.streamPriorityHandler;
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
      return utils.convReturnVertxGen(Pipe, j_httpClientResponse["pipe()"](), Buffer._jtype) ;
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
      j_httpClientResponse["pipeTo(io.vertx.core.streams.WriteStream)"](__args[0]._jdel);
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_httpClientResponse["pipeTo(io.vertx.core.streams.WriteStream,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
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
   @param amount {number} 
   @return {HttpClientResponse}
   */
  this.fetch =  function(amount) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_httpClientResponse["fetch(long)"](__args[0]) ;
      return that;
    } else if (typeof __super_fetch != 'undefined') {
      return __super_fetch.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {HttpClientResponse}
   */
  this.resume =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpClientResponse["resume()"]() ;
      return that;
    } else if (typeof __super_resume != 'undefined') {
      return __super_resume.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {HttpClientResponse}
   */
  this.exceptionHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpClientResponse["exceptionHandler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
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
   @return {HttpClientResponse}
   */
  this.handler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpClientResponse["handler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
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

   @return {HttpClientResponse}
   */
  this.pause =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpClientResponse["pause()"]() ;
      return that;
    } else if (typeof __super_pause != 'undefined') {
      return __super_pause.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param endHandler {function} 
   @return {HttpClientResponse}
   */
  this.endHandler =  function(endHandler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpClientResponse["endHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_endHandler != 'undefined') {
      return __super_endHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Object} the version of the response
   */
  this.version =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnEnum(j_httpClientResponse["version()"]()) ;
    } else if (typeof __super_version != 'undefined') {
      return __super_version.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {number} the status code of the response
   */
  this.statusCode =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpClientResponse["statusCode()"]() ;
    } else if (typeof __super_statusCode != 'undefined') {
      return __super_statusCode.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the status message of the response
   */
  this.statusMessage =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpClientResponse["statusMessage()"]() ;
    } else if (typeof __super_statusMessage != 'undefined') {
      return __super_statusMessage.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {MultiMap} the headers
   */
  this.headers =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedheaders == null) {
        that.cachedheaders = utils.convReturnVertxGen(MultiMap, j_httpClientResponse["headers()"]());
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
      return j_httpClientResponse["getHeader(java.lang.String)"](__args[0]) ;
    } else if (typeof __super_getHeader != 'undefined') {
      return __super_getHeader.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Return the first trailer value with the specified name

   @public
   @param trailerName {string} the trailer name 
   @return {string} the trailer value
   */
  this.getTrailer =  function(trailerName) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_httpClientResponse["getTrailer(java.lang.String)"](__args[0]) ;
    } else if (typeof __super_getTrailer != 'undefined') {
      return __super_getTrailer.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {MultiMap} the trailers
   */
  this.trailers =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedtrailers == null) {
        that.cachedtrailers = utils.convReturnVertxGen(MultiMap, j_httpClientResponse["trailers()"]());
      }
      return that.cachedtrailers;
    } else if (typeof __super_trailers != 'undefined') {
      return __super_trailers.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<string>} the Set-Cookie headers (including trailers)
   */
  this.cookies =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedcookies == null) {
        that.cachedcookies = j_httpClientResponse["cookies()"]();
      }
      return that.cachedcookies;
    } else if (typeof __super_cookies != 'undefined') {
      return __super_cookies.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Convenience method for receiving the entire request body in one piece.
   <p>
   This saves you having to manually set a dataHandler and an endHandler and append the chunks of the body until
   the whole body received. Don't use this if your request body is large - you could potentially run out of RAM.

   @public
   @param bodyHandler {function} This handler will be called after all the body has been received 
   @return {HttpClientResponse}
   */
  this.bodyHandler =  function(bodyHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpClientResponse["bodyHandler(io.vertx.core.Handler)"](function(jVal) {
        __args[0](utils.convReturnVertxGen(Buffer, jVal));
      }) ;
      return that;
    } else if (typeof __super_bodyHandler != 'undefined') {
      return __super_bodyHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set an custom frame handler. The handler will get notified when the http stream receives an custom HTTP/2
   frame. HTTP/2 permits extension of the protocol.

   @public
   @param handler {function} 
   @return {HttpClientResponse} a reference to this, so the API can be used fluently
   */
  this.customFrameHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpClientResponse["customFrameHandler(io.vertx.core.Handler)"](function(jVal) {
        __args[0](utils.convReturnVertxGen(HttpFrame, jVal));
      }) ;
      return that;
    } else if (typeof __super_customFrameHandler != 'undefined') {
      return __super_customFrameHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Get a net socket for the underlying connection of this request.
   <p>
   USE THIS WITH CAUTION! Writing to the socket directly if you don't know what you're doing can easily break the HTTP protocol.
   <p>
   HTTP/1.1 pipe-lined requests cannot support net socket upgrade.
   <p>
   One valid use-case for calling this is to receive the {@link NetSocket} after a HTTP CONNECT was issued to the
   remote peer and it responded with a status code of 200.

   @public

   @return {NetSocket} the net socket
   */
  this.netSocket =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachednetSocket == null) {
        that.cachednetSocket = utils.convReturnVertxGen(NetSocket, j_httpClientResponse["netSocket()"]());
      }
      return that.cachednetSocket;
    } else if (typeof __super_netSocket != 'undefined') {
      return __super_netSocket.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {HttpClientRequest} the corresponding request
   */
  this.request =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedrequest == null) {
        that.cachedrequest = utils.convReturnVertxGen(HttpClientRequest, j_httpClientResponse["request()"]());
      }
      return that.cachedrequest;
    } else if (typeof __super_request != 'undefined') {
      return __super_request.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set an handler for stream priority changes.
   <p/>
   This is not implemented for HTTP/1.x.

   @public
   @param handler {function} the handler to be called when the stream priority changes 
   @return {HttpClientResponse}
   */
  this.streamPriorityHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpClientResponse["streamPriorityHandler(io.vertx.core.Handler)"](function(jVal) {
        __args[0](utils.convReturnDataObject(jVal));
      }) ;
      return that;
    } else if (typeof __super_streamPriorityHandler != 'undefined') {
      return __super_streamPriorityHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_httpClientResponse;
};

HttpClientResponse._jclass = utils.getJavaClass("io.vertx.core.http.HttpClientResponse");
HttpClientResponse._jtype = {accept: function(obj) {
    return HttpClientResponse._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(HttpClientResponse.prototype, {});
    HttpClientResponse.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
HttpClientResponse._create = function(jdel) {var obj = Object.create(HttpClientResponse.prototype, {});
  HttpClientResponse.apply(obj, arguments);
  return obj;
}
module.exports = HttpClientResponse;