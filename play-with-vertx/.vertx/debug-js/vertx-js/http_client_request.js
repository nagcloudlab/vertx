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

/** @module vertx-js/http_client_request */
var utils = require('vertx-js/util/utils');
var HttpClientResponse = require('vertx-js/http_client_response');
var Pipe = require('vertx-js/pipe');
var Buffer = require('vertx-js/buffer');
var HttpFrame = require('vertx-js/http_frame');
var WriteStream = require('vertx-js/write_stream');
var MultiMap = require('vertx-js/multi_map');
var ReadStream = require('vertx-js/read_stream');
var HttpConnection = require('vertx-js/http_connection');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JHttpClientRequest = Java.type('io.vertx.core.http.HttpClientRequest');
var StreamPriority = Java.type('io.vertx.core.http.StreamPriority');

/**
 Represents a client-side HTTP request.
 <p>
 @class
*/
var HttpClientRequest = function(j_val) {

  var j_httpClientRequest = j_val;
  var that = this;
  WriteStream.call(this, j_val);
  ReadStream.call(this, j_val);

  var __super_writeQueueFull = this.writeQueueFull;
  var __super_pipe = this.pipe;
  var __super_pipeTo = this.pipeTo;
  var __super_pipeTo = this.pipeTo;
  var __super_exceptionHandler = this.exceptionHandler;
  var __super_write = this.write;
  var __super_write = this.write;
  var __super_setWriteQueueMaxSize = this.setWriteQueueMaxSize;
  var __super_drainHandler = this.drainHandler;
  var __super_handler = this.handler;
  var __super_pause = this.pause;
  var __super_resume = this.resume;
  var __super_fetch = this.fetch;
  var __super_endHandler = this.endHandler;
  var __super_setFollowRedirects = this.setFollowRedirects;
  var __super_setMaxRedirects = this.setMaxRedirects;
  var __super_setChunked = this.setChunked;
  var __super_isChunked = this.isChunked;
  var __super_method = this.method;
  var __super_getRawMethod = this.getRawMethod;
  var __super_setRawMethod = this.setRawMethod;
  var __super_absoluteURI = this.absoluteURI;
  var __super_uri = this.uri;
  var __super_path = this.path;
  var __super_query = this.query;
  var __super_setHost = this.setHost;
  var __super_getHost = this.getHost;
  var __super_headers = this.headers;
  var __super_putHeader = this.putHeader;
  var __super_write = this.write;
  var __super_write = this.write;
  var __super_write = this.write;
  var __super_write = this.write;
  var __super_continueHandler = this.continueHandler;
  var __super_sendHead = this.sendHead;
  var __super_sendHead = this.sendHead;
  var __super_end = this.end;
  var __super_end = this.end;
  var __super_end = this.end;
  var __super_end = this.end;
  var __super_end = this.end;
  var __super_end = this.end;
  var __super_end = this.end;
  var __super_end = this.end;
  var __super_setTimeout = this.setTimeout;
  var __super_pushHandler = this.pushHandler;
  var __super_reset = this.reset;
  var __super_reset = this.reset;
  var __super_connection = this.connection;
  var __super_connectionHandler = this.connectionHandler;
  var __super_writeCustomFrame = this.writeCustomFrame;
  var __super_streamId = this.streamId;
  var __super_writeCustomFrame = this.writeCustomFrame;
  var __super_setStreamPriority = this.setStreamPriority;
  var __super_getStreamPriority = this.getStreamPriority;
  /**
   This will return <code>true</code> if there are more bytes in the write queue than the value set using {@link HttpClientRequest#setWriteQueueMaxSize}

   @public

   @return {boolean} true if write queue is full
   */
  this.writeQueueFull =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpClientRequest["writeQueueFull()"]() ;
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
      return utils.convReturnVertxGen(Pipe, j_httpClientRequest["pipe()"](), HttpClientResponse._jtype) ;
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
      j_httpClientRequest["pipeTo(io.vertx.core.streams.WriteStream)"](__args[0]._jdel);
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_httpClientRequest["pipeTo(io.vertx.core.streams.WriteStream,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
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
   @return {HttpClientRequest}
   */
  this.exceptionHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpClientRequest["exceptionHandler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (typeof __super_exceptionHandler != 'undefined') {
      return __super_exceptionHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Same as {@link HttpClientRequest#write} but with an <code>handler</code> called when the operation completes

   @public
   @param chunk {string} 
   @param enc {string} 
   @param handler {function} 
   @return {HttpClientRequest}
   */
  this.write =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_httpClientRequest["write(io.vertx.core.buffer.Buffer)"](__args[0]._jdel) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_httpClientRequest["write(io.vertx.core.buffer.Buffer,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 1 && typeof __args[0] === 'string') {
      j_httpClientRequest["write(java.lang.String)"](__args[0]) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_httpClientRequest["write(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_httpClientRequest["write(java.lang.String,java.lang.String)"](__args[0], __args[1]) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_httpClientRequest["write(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](null, null);
        } else {
          __args[2](null, ar.cause());
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
   @return {HttpClientRequest}
   */
  this.setWriteQueueMaxSize =  function(maxSize) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_httpClientRequest["setWriteQueueMaxSize(int)"](__args[0]) ;
      return that;
    } else if (typeof __super_setWriteQueueMaxSize != 'undefined') {
      return __super_setWriteQueueMaxSize.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {HttpClientRequest}
   */
  this.drainHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpClientRequest["drainHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_drainHandler != 'undefined') {
      return __super_drainHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {HttpClientRequest}
   */
  this.handler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpClientRequest["handler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](utils.convReturnVertxGen(HttpClientResponse, jVal));
      }) ;
      return that;
    } else if (typeof __super_handler != 'undefined') {
      return __super_handler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {HttpClientRequest}
   */
  this.pause =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpClientRequest["pause()"]() ;
      return that;
    } else if (typeof __super_pause != 'undefined') {
      return __super_pause.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {HttpClientRequest}
   */
  this.resume =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpClientRequest["resume()"]() ;
      return that;
    } else if (typeof __super_resume != 'undefined') {
      return __super_resume.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param amount {number} 
   @return {HttpClientRequest}
   */
  this.fetch =  function(amount) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_httpClientRequest["fetch(long)"](__args[0]) ;
      return that;
    } else if (typeof __super_fetch != 'undefined') {
      return __super_fetch.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param endHandler {function} 
   @return {HttpClientRequest}
   */
  this.endHandler =  function(endHandler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpClientRequest["endHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_endHandler != 'undefined') {
      return __super_endHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set the request to follow HTTP redirects up to <a href="../../dataobjects.html#HttpClientOptions">HttpClientOptions</a>.

   @public
   @param followRedirects {boolean} <code>true</code> to follow HTTP redirects 
   @return {HttpClientRequest} a reference to this, so the API can be used fluently
   */
  this.setFollowRedirects =  function(followRedirects) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      j_httpClientRequest["setFollowRedirects(boolean)"](__args[0]) ;
      return that;
    } else if (typeof __super_setFollowRedirects != 'undefined') {
      return __super_setFollowRedirects.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set the max number of HTTP redirects this request will follow. The default is <code>0</code> which means
   no redirects.

   @public
   @param maxRedirects {number} the number of HTTP redirect to follow 
   @return {HttpClientRequest} a reference to this, so the API can be used fluently
   */
  this.setMaxRedirects =  function(maxRedirects) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_httpClientRequest["setMaxRedirects(int)"](__args[0]) ;
      return that;
    } else if (typeof __super_setMaxRedirects != 'undefined') {
      return __super_setMaxRedirects.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   If chunked is true then the request will be set into HTTP chunked mode

   @public
   @param chunked {boolean} true if chunked encoding 
   @return {HttpClientRequest} a reference to this, so the API can be used fluently
   */
  this.setChunked =  function(chunked) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      j_httpClientRequest["setChunked(boolean)"](__args[0]) ;
      return that;
    } else if (typeof __super_setChunked != 'undefined') {
      return __super_setChunked.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean} Is the request chunked?
   */
  this.isChunked =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpClientRequest["isChunked()"]() ;
    } else if (typeof __super_isChunked != 'undefined') {
      return __super_isChunked.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   The HTTP method for the request.

   @public

   @return {Object}
   */
  this.method =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnEnum(j_httpClientRequest["method()"]()) ;
    } else if (typeof __super_method != 'undefined') {
      return __super_method.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the raw value of the method this request sends
   */
  this.getRawMethod =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpClientRequest["getRawMethod()"]() ;
    } else if (typeof __super_getRawMethod != 'undefined') {
      return __super_getRawMethod.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set the value the method to send when the method  is used.

   @public
   @param method {string} the raw method 
   @return {HttpClientRequest} a reference to this, so the API can be used fluently
   */
  this.setRawMethod =  function(method) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_httpClientRequest["setRawMethod(java.lang.String)"](__args[0]) ;
      return that;
    } else if (typeof __super_setRawMethod != 'undefined') {
      return __super_setRawMethod.apply(this, __args);
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
      return j_httpClientRequest["absoluteURI()"]() ;
    } else if (typeof __super_absoluteURI != 'undefined') {
      return __super_absoluteURI.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} The URI of the request.
   */
  this.uri =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpClientRequest["uri()"]() ;
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
      return j_httpClientRequest["path()"]() ;
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
      return j_httpClientRequest["query()"]() ;
    } else if (typeof __super_query != 'undefined') {
      return __super_query.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set the request host.<p/>

   For HTTP/2 it sets the  pseudo header otherwise it sets the  header

   @public
   @param host {string} 
   @return {HttpClientRequest}
   */
  this.setHost =  function(host) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_httpClientRequest["setHost(java.lang.String)"](__args[0]) ;
      return that;
    } else if (typeof __super_setHost != 'undefined') {
      return __super_setHost.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the request host. For HTTP/2 it returns the  pseudo header otherwise it returns the  header
   */
  this.getHost =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpClientRequest["getHost()"]() ;
    } else if (typeof __super_getHost != 'undefined') {
      return __super_getHost.apply(this, __args);
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
        that.cachedheaders = utils.convReturnVertxGen(MultiMap, j_httpClientRequest["headers()"]());
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
   @param name {string} The header name 
   @param value {string} The header value 
   @return {HttpClientRequest} a reference to this, so the API can be used fluently
   */
  this.putHeader =  function(name, value) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_httpClientRequest["putHeader(java.lang.String,java.lang.String)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_putHeader != 'undefined') {
      return __super_putHeader.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   If you send an HTTP request with the header <code>Expect</code> set to the value <code>100-continue</code>
   and the server responds with an interim HTTP response with a status code of <code>100</code> and a continue handler
   has been set using this method, then the <code>handler</code> will be called.
   <p>
   You can then continue to write data to the request body and later end it. This is normally used in conjunction with
   the {@link HttpClientRequest#sendHead} method to force the request header to be written before the request has ended.

   @public
   @param handler {function} 
   @return {HttpClientRequest} a reference to this, so the API can be used fluently
   */
  this.continueHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpClientRequest["continueHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_continueHandler != 'undefined') {
      return __super_continueHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link HttpClientRequest#sendHead} but with an handler after headers have been sent. The handler will be called with
   the <a href="../../enums.html#HttpVersion">HttpVersion</a> if it can be determined or null otherwise.<p>

   @public
   @param completionHandler {function} 
   @return {HttpClientRequest}
   */
  this.sendHead =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpClientRequest["sendHead()"]() ;
      return that;
    } else if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpClientRequest["sendHead(io.vertx.core.Handler)"](function(jVal) {
        __args[0](utils.convReturnEnum(jVal));
      }) ;
      return that;
    } else if (typeof __super_sendHead != 'undefined') {
      return __super_sendHead.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Same as {@link HttpClientRequest#end} but with an <code>handler</code> called when the operation completes

   @public
   @param handler {function} 
   */
  this.end =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_httpClientRequest["end(java.lang.String)"](__args[0]);
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_httpClientRequest["end(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_httpClientRequest["end(java.lang.String,java.lang.String)"](__args[0], __args[1]);
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_httpClientRequest["end(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](null, null);
        } else {
          __args[2](null, ar.cause());
        }
      });
    } else if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_httpClientRequest["end(io.vertx.core.buffer.Buffer)"](__args[0]._jdel);
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_httpClientRequest["end(io.vertx.core.buffer.Buffer,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (__args.length === 0) {
      j_httpClientRequest["end()"]();
    } else if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpClientRequest["end(io.vertx.core.Handler)"](function(ar) {
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
   Set's the amount of time after which if the request does not return any data within the timeout period an
   TimeoutException will be passed to the exception handler (if provided) and
   the request will be closed.
   <p>
   Calling this method more than once has the effect of canceling any existing timeout and starting
   the timeout from scratch.

   @public
   @param timeoutMs {number} The quantity of time in milliseconds. 
   @return {HttpClientRequest} a reference to this, so the API can be used fluently
   */
  this.setTimeout =  function(timeoutMs) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_httpClientRequest["setTimeout(long)"](__args[0]) ;
      return that;
    } else if (typeof __super_setTimeout != 'undefined') {
      return __super_setTimeout.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set a push handler for this request.<p/>

   The handler is called when the client receives a <i>push promise</i> from the server. The handler can be called
   multiple times, for each push promise.<p/>

   The handler is called with a <i>read-only</i> {@link HttpClientRequest}, the following methods can be called:<p/>

   <ul>
     <li>{@link HttpClientRequest#method}</li>
     <li>{@link HttpClientRequest#uri}</li>
     <li>{@link HttpClientRequest#headers}</li>
     <li>{@link HttpClientRequest#getHost}</li>
   </ul>

   In addition the handler should call the {@link HttpClientRequest#handler} method to set an handler to
   process the response.<p/>

   @public
   @param handler {function} the handler 
   @return {HttpClientRequest} a reference to this, so the API can be used fluently
   */
  this.pushHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpClientRequest["pushHandler(io.vertx.core.Handler)"](function(jVal) {
        __args[0](utils.convReturnVertxGen(HttpClientRequest, jVal));
      }) ;
      return that;
    } else if (typeof __super_pushHandler != 'undefined') {
      return __super_pushHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Reset this request:
   <p/>
   <ul>
     <li>for HTTP/2, this performs send an HTTP/2 reset frame with the specified error <code>code</code></li>
     <li>for HTTP/1.x, this closes the connection when the current request is inflight</li>
   </ul>
   <p/>
   When the request has not yet been sent, the request will be aborted and false is returned as indicator.
   <p/>

   @public
   @param code {number} the error code 
   @return {boolean} true when reset has been performed
   */
  this.reset =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpClientRequest["reset()"]() ;
    } else if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_httpClientRequest["reset(long)"](__args[0]) ;
    } else if (typeof __super_reset != 'undefined') {
      return __super_reset.apply(this, __args);
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
        that.cachedconnection = utils.convReturnVertxGen(HttpConnection, j_httpClientRequest["connection()"]());
      }
      return that.cachedconnection;
    } else if (typeof __super_connection != 'undefined') {
      return __super_connection.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set a connection handler called when an HTTP connection has been established.

   @public
   @param handler {function} the handler 
   @return {HttpClientRequest} a reference to this, so the API can be used fluently
   */
  this.connectionHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpClientRequest["connectionHandler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](utils.convReturnVertxGen(HttpConnection, jVal));
      }) ;
      return that;
    } else if (typeof __super_connectionHandler != 'undefined') {
      return __super_connectionHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link HttpClientRequest#writeCustomFrame} but with an {@link HttpFrame}.

   @public
   @param frame {HttpFrame} the frame to write 
   @return {HttpClientRequest}
   */
  this.writeCustomFrame =  function() {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] ==='number' && typeof __args[2] === 'object' && __args[2]._jdel) {
      j_httpClientRequest["writeCustomFrame(int,int,io.vertx.core.buffer.Buffer)"](__args[0], __args[1], __args[2]._jdel) ;
      return that;
    } else if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_httpClientRequest["writeCustomFrame(io.vertx.core.http.HttpFrame)"](__args[0]._jdel) ;
      return that;
    } else if (typeof __super_writeCustomFrame != 'undefined') {
      return __super_writeCustomFrame.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {number} the id of the stream of this response,  when it is not yet determined, i.e the request has not been yet sent or it is not supported HTTP/1.x
   */
  this.streamId =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpClientRequest["streamId()"]() ;
    } else if (typeof __super_streamId != 'undefined') {
      return __super_streamId.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the priority of the associated stream.
   <p/>
   This is not implemented for HTTP/1.x.

   @public
   @param streamPriority {Object} the priority of this request's stream 
   @return {HttpClientRequest}
   */
  this.setStreamPriority =  function(streamPriority) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_httpClientRequest["setStreamPriority(io.vertx.core.http.StreamPriority)"](__args[0]  != null ? new StreamPriority(new JsonObject(Java.asJSONCompatible(__args[0]))) : null) ;
      return that;
    } else if (typeof __super_setStreamPriority != 'undefined') {
      return __super_setStreamPriority.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Object} the priority of the associated HTTP/2 stream for HTTP/2 otherwise <code>null</code>
   */
  this.getStreamPriority =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnDataObject(j_httpClientRequest["getStreamPriority()"]()) ;
    } else if (typeof __super_getStreamPriority != 'undefined') {
      return __super_getStreamPriority.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_httpClientRequest;
};

HttpClientRequest._jclass = utils.getJavaClass("io.vertx.core.http.HttpClientRequest");
HttpClientRequest._jtype = {accept: function(obj) {
    return HttpClientRequest._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(HttpClientRequest.prototype, {});
    HttpClientRequest.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
HttpClientRequest._create = function(jdel) {var obj = Object.create(HttpClientRequest.prototype, {});
  HttpClientRequest.apply(obj, arguments);
  return obj;
}
module.exports = HttpClientRequest;