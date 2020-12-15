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

/** @module vertx-js/http_client */
var utils = require('vertx-js/util/utils');
var HttpClientRequest = require('vertx-js/http_client_request');
var HttpClientResponse = require('vertx-js/http_client_response');
var Measured = require('vertx-js/measured');
var MultiMap = require('vertx-js/multi_map');
var ReadStream = require('vertx-js/read_stream');
var WebSocket = require('vertx-js/web_socket');
var HttpConnection = require('vertx-js/http_connection');
var Future = require('vertx-js/future');
var SocketAddress = require('vertx-js/socket_address');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JHttpClient = Java.type('io.vertx.core.http.HttpClient');
var WebSocketConnectOptions = Java.type('io.vertx.core.http.WebSocketConnectOptions');
var RequestOptions = Java.type('io.vertx.core.http.RequestOptions');

/**
 An asynchronous HTTP client.
 <p>
 It allows you to make requests to HTTP servers, and a single client can make requests to any server.
 <p>
 It also allows you to open WebSockets to servers.
 <p>
 The client can also pool HTTP connections.
 <p>
 @class
*/
var HttpClient = function(j_val) {

  var j_httpClient = j_val;
  var that = this;
  Measured.call(this, j_val);

  var __super_isMetricsEnabled = this.isMetricsEnabled;
  var __super_request = this.request;
  var __super_request = this.request;
  var __super_request = this.request;
  var __super_request = this.request;
  var __super_request = this.request;
  var __super_request = this.request;
  var __super_request = this.request;
  var __super_request = this.request;
  var __super_request = this.request;
  var __super_request = this.request;
  var __super_request = this.request;
  var __super_request = this.request;
  var __super_requestAbs = this.requestAbs;
  var __super_requestAbs = this.requestAbs;
  var __super_requestAbs = this.requestAbs;
  var __super_requestAbs = this.requestAbs;
  var __super_get = this.get;
  var __super_get = this.get;
  var __super_get = this.get;
  var __super_get = this.get;
  var __super_get = this.get;
  var __super_get = this.get;
  var __super_get = this.get;
  var __super_get = this.get;
  var __super_getAbs = this.getAbs;
  var __super_getAbs = this.getAbs;
  var __super_getNow = this.getNow;
  var __super_getNow = this.getNow;
  var __super_getNow = this.getNow;
  var __super_getNow = this.getNow;
  var __super_post = this.post;
  var __super_post = this.post;
  var __super_post = this.post;
  var __super_post = this.post;
  var __super_post = this.post;
  var __super_post = this.post;
  var __super_post = this.post;
  var __super_post = this.post;
  var __super_postAbs = this.postAbs;
  var __super_postAbs = this.postAbs;
  var __super_head = this.head;
  var __super_head = this.head;
  var __super_head = this.head;
  var __super_head = this.head;
  var __super_head = this.head;
  var __super_head = this.head;
  var __super_head = this.head;
  var __super_head = this.head;
  var __super_headAbs = this.headAbs;
  var __super_headAbs = this.headAbs;
  var __super_headNow = this.headNow;
  var __super_headNow = this.headNow;
  var __super_headNow = this.headNow;
  var __super_headNow = this.headNow;
  var __super_options = this.options;
  var __super_options = this.options;
  var __super_options = this.options;
  var __super_options = this.options;
  var __super_options = this.options;
  var __super_options = this.options;
  var __super_options = this.options;
  var __super_options = this.options;
  var __super_optionsAbs = this.optionsAbs;
  var __super_optionsAbs = this.optionsAbs;
  var __super_optionsNow = this.optionsNow;
  var __super_optionsNow = this.optionsNow;
  var __super_optionsNow = this.optionsNow;
  var __super_optionsNow = this.optionsNow;
  var __super_put = this.put;
  var __super_put = this.put;
  var __super_put = this.put;
  var __super_put = this.put;
  var __super_put = this.put;
  var __super_put = this.put;
  var __super_put = this.put;
  var __super_put = this.put;
  var __super_putAbs = this.putAbs;
  var __super_putAbs = this.putAbs;
  var __super_delete = this.delete;
  var __super_delete = this.delete;
  var __super_delete = this.delete;
  var __super_delete = this.delete;
  var __super_delete = this.delete;
  var __super_delete = this.delete;
  var __super_delete = this.delete;
  var __super_delete = this.delete;
  var __super_deleteAbs = this.deleteAbs;
  var __super_deleteAbs = this.deleteAbs;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocketAbs = this.websocketAbs;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_websocket = this.websocket;
  var __super_webSocket = this.webSocket;
  var __super_webSocket = this.webSocket;
  var __super_webSocket = this.webSocket;
  var __super_webSocket = this.webSocket;
  var __super_webSocketAbs = this.webSocketAbs;
  var __super_websocketStream = this.websocketStream;
  var __super_websocketStream = this.websocketStream;
  var __super_websocketStream = this.websocketStream;
  var __super_websocketStream = this.websocketStream;
  var __super_websocketStream = this.websocketStream;
  var __super_websocketStream = this.websocketStream;
  var __super_websocketStream = this.websocketStream;
  var __super_websocketStream = this.websocketStream;
  var __super_websocketStream = this.websocketStream;
  var __super_websocketStreamAbs = this.websocketStreamAbs;
  var __super_websocketStream = this.websocketStream;
  var __super_websocketStream = this.websocketStream;
  var __super_websocketStream = this.websocketStream;
  var __super_websocketStream = this.websocketStream;
  var __super_websocketStream = this.websocketStream;
  var __super_websocketStream = this.websocketStream;
  var __super_websocketStream = this.websocketStream;
  var __super_connectionHandler = this.connectionHandler;
  var __super_redirectHandler = this.redirectHandler;
  var __super_close = this.close;
  /**
   Whether the metrics are enabled for this measured object

   @public

   @return {boolean} <code>true</code> if metrics are enabled
   */
  this.isMetricsEnabled =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpClient["isMetricsEnabled()"]() ;
    } else if (typeof __super_isMetricsEnabled != 'undefined') {
      return __super_isMetricsEnabled.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Create an HTTP request to send to the server at the default host and port, specifying a response handler to receive
   the response

   @public
   @param method {Object} the HTTP method 
   @param requestURI {string} the relative URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.request =  function() {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && (typeof __args[2] === 'object' && __args[2] != null)) {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["request(io.vertx.core.http.HttpMethod,io.vertx.core.net.SocketAddress,io.vertx.core.http.RequestOptions)"](io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1]._jdel, __args[2]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[2]))) : null)) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && (typeof __args[1] === 'object' && __args[1] != null)) {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["request(io.vertx.core.http.HttpMethod,io.vertx.core.http.RequestOptions)"](io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[1]))) : null)) ;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'string' && typeof __args[3] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["request(io.vertx.core.http.HttpMethod,int,java.lang.String,java.lang.String)"](io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1], __args[2], __args[3])) ;
    } else if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] ==='number' && typeof __args[3] === 'string' && typeof __args[4] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["request(io.vertx.core.http.HttpMethod,io.vertx.core.net.SocketAddress,int,java.lang.String,java.lang.String)"](io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1]._jdel, __args[2], __args[3], __args[4])) ;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["request(io.vertx.core.http.HttpMethod,java.lang.String,java.lang.String)"](io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1], __args[2])) ;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && (typeof __args[1] === 'object' && __args[1] != null) && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["request(io.vertx.core.http.HttpMethod,io.vertx.core.http.RequestOptions,io.vertx.core.Handler)"](io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[1]))) : null, function(jVal) {
        __args[2](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && (typeof __args[2] === 'object' && __args[2] != null) && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["request(io.vertx.core.http.HttpMethod,io.vertx.core.net.SocketAddress,io.vertx.core.http.RequestOptions,io.vertx.core.Handler)"](io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1]._jdel, __args[2]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[2]))) : null, function(jVal) {
        __args[3](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'string' && typeof __args[3] === 'string' && typeof __args[4] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["request(io.vertx.core.http.HttpMethod,int,java.lang.String,java.lang.String,io.vertx.core.Handler)"](io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1], __args[2], __args[3], function(jVal) {
        __args[4](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 6 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] ==='number' && typeof __args[3] === 'string' && typeof __args[4] === 'string' && typeof __args[5] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["request(io.vertx.core.http.HttpMethod,io.vertx.core.net.SocketAddress,int,java.lang.String,java.lang.String,io.vertx.core.Handler)"](io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1]._jdel, __args[2], __args[3], __args[4], function(jVal) {
        __args[5](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["request(io.vertx.core.http.HttpMethod,java.lang.String,java.lang.String,io.vertx.core.Handler)"](io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1], __args[2], function(jVal) {
        __args[3](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["request(io.vertx.core.http.HttpMethod,java.lang.String)"](io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1])) ;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["request(io.vertx.core.http.HttpMethod,java.lang.String,io.vertx.core.Handler)"](io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1], function(jVal) {
        __args[2](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (typeof __super_request != 'undefined') {
      return __super_request.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link HttpClient#requestAbs} using the <code>serverAddress</code> parameter to connect to the
   server instead of the <code>absoluteURI</code> parameter.
   <p>
   The request host header will still be created from the <code>absoluteURI</code> parameter.
   <p>
   Use  to connect to a unix domain socket server.

   @public
   @param method {Object} 
   @param serverAddress {SocketAddress} 
   @param absoluteURI {string} 
   @param responseHandler {function} 
   @return {HttpClientRequest}
   */
  this.requestAbs =  function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["requestAbs(io.vertx.core.http.HttpMethod,java.lang.String)"](io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1])) ;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["requestAbs(io.vertx.core.http.HttpMethod,io.vertx.core.net.SocketAddress,java.lang.String)"](io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1]._jdel, __args[2])) ;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["requestAbs(io.vertx.core.http.HttpMethod,java.lang.String,io.vertx.core.Handler)"](io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1], function(jVal) {
        __args[2](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["requestAbs(io.vertx.core.http.HttpMethod,io.vertx.core.net.SocketAddress,java.lang.String,io.vertx.core.Handler)"](io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1]._jdel, __args[2], function(jVal) {
        __args[3](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (typeof __super_requestAbs != 'undefined') {
      return __super_requestAbs.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Create an HTTP GET request to send to the server at the default host and port, specifying a response handler to receive
   the response

   @public
   @param requestURI {string} the relative URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.get =  function() {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["get(io.vertx.core.http.RequestOptions)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null)) ;
    } else if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["get(int,java.lang.String,java.lang.String)"](__args[0], __args[1], __args[2])) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["get(java.lang.String,java.lang.String)"](__args[0], __args[1])) ;
    } else if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["get(io.vertx.core.http.RequestOptions,io.vertx.core.Handler)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["get(int,java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(jVal) {
        __args[3](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["get(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(jVal) {
        __args[2](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["get(java.lang.String)"](__args[0])) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["get(java.lang.String,io.vertx.core.Handler)"](__args[0], function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (typeof __super_get != 'undefined') {
      return __super_get.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Create an HTTP GET request to send to the server using an absolute URI, specifying a response handler to receive
   the response

   @public
   @param absoluteURI {string} the absolute URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.getAbs =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["getAbs(java.lang.String)"](__args[0])) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["getAbs(java.lang.String,io.vertx.core.Handler)"](__args[0], function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (typeof __super_getAbs != 'undefined') {
      return __super_getAbs.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sends an HTTP GET request  to the server at the default host and port, specifying a response handler to receive
   the response

   @public
   @param requestURI {string} the relative URI 
   @param responseHandler {function} the response handler 
   @return {HttpClient} a reference to this, so the API can be used fluently
   */
  this.getNow =  function() {
    var __args = arguments;
    if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      j_httpClient["getNow(io.vertx.core.http.RequestOptions,io.vertx.core.Handler)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      }) ;
      return that;
    } else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      j_httpClient["getNow(int,java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(jVal) {
        __args[3](utils.convReturnVertxGen(HttpClientResponse, jVal));
      }) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_httpClient["getNow(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(jVal) {
        __args[2](utils.convReturnVertxGen(HttpClientResponse, jVal));
      }) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_httpClient["getNow(java.lang.String,io.vertx.core.Handler)"](__args[0], function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      }) ;
      return that;
    } else if (typeof __super_getNow != 'undefined') {
      return __super_getNow.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Create an HTTP POST request to send to the server at the default host and port, specifying a response handler to receive
   the response

   @public
   @param requestURI {string} the relative URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.post =  function() {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["post(io.vertx.core.http.RequestOptions)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null)) ;
    } else if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["post(int,java.lang.String,java.lang.String)"](__args[0], __args[1], __args[2])) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["post(java.lang.String,java.lang.String)"](__args[0], __args[1])) ;
    } else if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["post(io.vertx.core.http.RequestOptions,io.vertx.core.Handler)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["post(int,java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(jVal) {
        __args[3](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["post(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(jVal) {
        __args[2](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["post(java.lang.String)"](__args[0])) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["post(java.lang.String,io.vertx.core.Handler)"](__args[0], function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (typeof __super_post != 'undefined') {
      return __super_post.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Create an HTTP POST request to send to the server using an absolute URI, specifying a response handler to receive
   the response

   @public
   @param absoluteURI {string} the absolute URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.postAbs =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["postAbs(java.lang.String)"](__args[0])) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["postAbs(java.lang.String,io.vertx.core.Handler)"](__args[0], function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (typeof __super_postAbs != 'undefined') {
      return __super_postAbs.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Create an HTTP HEAD request to send to the server at the default host and port, specifying a response handler to receive
   the response

   @public
   @param requestURI {string} the relative URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.head =  function() {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["head(io.vertx.core.http.RequestOptions)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null)) ;
    } else if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["head(int,java.lang.String,java.lang.String)"](__args[0], __args[1], __args[2])) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["head(java.lang.String,java.lang.String)"](__args[0], __args[1])) ;
    } else if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["head(io.vertx.core.http.RequestOptions,io.vertx.core.Handler)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["head(int,java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(jVal) {
        __args[3](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["head(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(jVal) {
        __args[2](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["head(java.lang.String)"](__args[0])) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["head(java.lang.String,io.vertx.core.Handler)"](__args[0], function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (typeof __super_head != 'undefined') {
      return __super_head.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Create an HTTP HEAD request to send to the server using an absolute URI, specifying a response handler to receive
   the response

   @public
   @param absoluteURI {string} the absolute URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.headAbs =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["headAbs(java.lang.String)"](__args[0])) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["headAbs(java.lang.String,io.vertx.core.Handler)"](__args[0], function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (typeof __super_headAbs != 'undefined') {
      return __super_headAbs.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sends an HTTP HEAD request  to the server at the default host and port, specifying a response handler to receive
   the response

   @public
   @param requestURI {string} the relative URI 
   @param responseHandler {function} the response handler 
   @return {HttpClient} a reference to this, so the API can be used fluently
   */
  this.headNow =  function() {
    var __args = arguments;
    if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      j_httpClient["headNow(io.vertx.core.http.RequestOptions,io.vertx.core.Handler)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      }) ;
      return that;
    } else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      j_httpClient["headNow(int,java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(jVal) {
        __args[3](utils.convReturnVertxGen(HttpClientResponse, jVal));
      }) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_httpClient["headNow(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(jVal) {
        __args[2](utils.convReturnVertxGen(HttpClientResponse, jVal));
      }) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_httpClient["headNow(java.lang.String,io.vertx.core.Handler)"](__args[0], function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      }) ;
      return that;
    } else if (typeof __super_headNow != 'undefined') {
      return __super_headNow.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Create an HTTP OPTIONS request to send to the server at the default host and port, specifying a response handler to receive
   the response

   @public
   @param requestURI {string} the relative URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.options =  function() {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["options(io.vertx.core.http.RequestOptions)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null)) ;
    } else if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["options(int,java.lang.String,java.lang.String)"](__args[0], __args[1], __args[2])) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["options(java.lang.String,java.lang.String)"](__args[0], __args[1])) ;
    } else if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["options(io.vertx.core.http.RequestOptions,io.vertx.core.Handler)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["options(int,java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(jVal) {
        __args[3](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["options(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(jVal) {
        __args[2](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["options(java.lang.String)"](__args[0])) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["options(java.lang.String,io.vertx.core.Handler)"](__args[0], function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (typeof __super_options != 'undefined') {
      return __super_options.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Create an HTTP OPTIONS request to send to the server using an absolute URI, specifying a response handler to receive
   the response

   @public
   @param absoluteURI {string} the absolute URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.optionsAbs =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["optionsAbs(java.lang.String)"](__args[0])) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["optionsAbs(java.lang.String,io.vertx.core.Handler)"](__args[0], function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (typeof __super_optionsAbs != 'undefined') {
      return __super_optionsAbs.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sends an HTTP OPTIONS request  to the server at the default host and port, specifying a response handler to receive
   the response

   @public
   @param requestURI {string} the relative URI 
   @param responseHandler {function} the response handler 
   @return {HttpClient} a reference to this, so the API can be used fluently
   */
  this.optionsNow =  function() {
    var __args = arguments;
    if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      j_httpClient["optionsNow(io.vertx.core.http.RequestOptions,io.vertx.core.Handler)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      }) ;
      return that;
    } else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      j_httpClient["optionsNow(int,java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(jVal) {
        __args[3](utils.convReturnVertxGen(HttpClientResponse, jVal));
      }) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_httpClient["optionsNow(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(jVal) {
        __args[2](utils.convReturnVertxGen(HttpClientResponse, jVal));
      }) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_httpClient["optionsNow(java.lang.String,io.vertx.core.Handler)"](__args[0], function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      }) ;
      return that;
    } else if (typeof __super_optionsNow != 'undefined') {
      return __super_optionsNow.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Create an HTTP PUT request to send to the server at the default host and port, specifying a response handler to receive
   the response

   @public
   @param requestURI {string} the relative URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.put =  function() {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["put(io.vertx.core.http.RequestOptions)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null)) ;
    } else if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["put(int,java.lang.String,java.lang.String)"](__args[0], __args[1], __args[2])) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["put(java.lang.String,java.lang.String)"](__args[0], __args[1])) ;
    } else if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["put(io.vertx.core.http.RequestOptions,io.vertx.core.Handler)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["put(int,java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(jVal) {
        __args[3](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["put(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(jVal) {
        __args[2](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["put(java.lang.String)"](__args[0])) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["put(java.lang.String,io.vertx.core.Handler)"](__args[0], function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (typeof __super_put != 'undefined') {
      return __super_put.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Create an HTTP PUT request to send to the server using an absolute URI, specifying a response handler to receive
   the response

   @public
   @param absoluteURI {string} the absolute URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.putAbs =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["putAbs(java.lang.String)"](__args[0])) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["putAbs(java.lang.String,io.vertx.core.Handler)"](__args[0], function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (typeof __super_putAbs != 'undefined') {
      return __super_putAbs.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Create an HTTP DELETE request to send to the server at the default host and port, specifying a response handler to receive
   the response

   @public
   @param requestURI {string} the relative URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.delete =  function() {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["delete(io.vertx.core.http.RequestOptions)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null)) ;
    } else if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["delete(int,java.lang.String,java.lang.String)"](__args[0], __args[1], __args[2])) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["delete(java.lang.String,java.lang.String)"](__args[0], __args[1])) ;
    } else if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["delete(io.vertx.core.http.RequestOptions,io.vertx.core.Handler)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["delete(int,java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(jVal) {
        __args[3](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["delete(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(jVal) {
        __args[2](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["delete(java.lang.String)"](__args[0])) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["delete(java.lang.String,io.vertx.core.Handler)"](__args[0], function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (typeof __super_delete != 'undefined') {
      return __super_delete.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Create an HTTP DELETE request to send to the server using an absolute URI, specifying a response handler to receive
   the response

   @public
   @param absoluteURI {string} the absolute URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.deleteAbs =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["deleteAbs(java.lang.String)"](__args[0])) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(HttpClientRequest, j_httpClient["deleteAbs(java.lang.String,io.vertx.core.Handler)"](__args[0], function(jVal) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, jVal));
      })) ;
    } else if (typeof __super_deleteAbs != 'undefined') {
      return __super_deleteAbs.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Connect a WebSocket at the relative request URI using the default host and port, the specified headers, the
   specified version of WebSockets and the specified sub protocols

   @public
   @param requestURI {string} the relative URI 
   @param headers {MultiMap} the headers 
   @param version {Object} the WebSocket version 
   @param subProtocols {string} the subprotocols 
   @param wsConnect {function} handler that will be called with the WebSocket when connected 
   @param failureHandler {function} handler that will be called if WebSocket connection fails 
   @return {HttpClient} a reference to this, so the API can be used fluently
   */
  this.websocket =  function() {
    var __args = arguments;
    if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      j_httpClient["websocket(io.vertx.core.http.RequestOptions,io.vertx.core.Handler)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, function(jVal) {
        __args[1](utils.convReturnVertxGen(WebSocket, jVal));
      }) ;
      return that;
    } else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      j_httpClient["websocket(int,java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(jVal) {
        __args[3](utils.convReturnVertxGen(WebSocket, jVal));
      }) ;
      return that;
    } else if (__args.length === 3 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function' && typeof __args[2] === 'function') {
      j_httpClient["websocket(io.vertx.core.http.RequestOptions,io.vertx.core.Handler,io.vertx.core.Handler)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, function(jVal) {
        __args[1](utils.convReturnVertxGen(WebSocket, jVal));
      }, function(jVal) {
        __args[2](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (__args.length === 5 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function' && typeof __args[4] === 'function') {
      j_httpClient["websocket(int,java.lang.String,java.lang.String,io.vertx.core.Handler,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(jVal) {
        __args[3](utils.convReturnVertxGen(WebSocket, jVal));
      }, function(jVal) {
        __args[4](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_httpClient["websocket(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(jVal) {
        __args[2](utils.convReturnVertxGen(WebSocket, jVal));
      }) ;
      return that;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function' && typeof __args[3] === 'function') {
      j_httpClient["websocket(java.lang.String,java.lang.String,io.vertx.core.Handler,io.vertx.core.Handler)"](__args[0], __args[1], function(jVal) {
        __args[2](utils.convReturnVertxGen(WebSocket, jVal));
      }, function(jVal) {
        __args[3](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (__args.length === 3 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'function') {
      j_httpClient["websocket(io.vertx.core.http.RequestOptions,io.vertx.core.MultiMap,io.vertx.core.Handler)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, __args[1]._jdel, function(jVal) {
        __args[2](utils.convReturnVertxGen(WebSocket, jVal));
      }) ;
      return that;
    } else if (__args.length === 5 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'object' && __args[3]._jdel && typeof __args[4] === 'function') {
      j_httpClient["websocket(int,java.lang.String,java.lang.String,io.vertx.core.MultiMap,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], __args[3]._jdel, function(jVal) {
        __args[4](utils.convReturnVertxGen(WebSocket, jVal));
      }) ;
      return that;
    } else if (__args.length === 4 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'function' && typeof __args[3] === 'function') {
      j_httpClient["websocket(io.vertx.core.http.RequestOptions,io.vertx.core.MultiMap,io.vertx.core.Handler,io.vertx.core.Handler)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, __args[1]._jdel, function(jVal) {
        __args[2](utils.convReturnVertxGen(WebSocket, jVal));
      }, function(jVal) {
        __args[3](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (__args.length === 6 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'object' && __args[3]._jdel && typeof __args[4] === 'function' && typeof __args[5] === 'function') {
      j_httpClient["websocket(int,java.lang.String,java.lang.String,io.vertx.core.MultiMap,io.vertx.core.Handler,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], __args[3]._jdel, function(jVal) {
        __args[4](utils.convReturnVertxGen(WebSocket, jVal));
      }, function(jVal) {
        __args[5](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'function') {
      j_httpClient["websocket(java.lang.String,java.lang.String,io.vertx.core.MultiMap,io.vertx.core.Handler)"](__args[0], __args[1], __args[2]._jdel, function(jVal) {
        __args[3](utils.convReturnVertxGen(WebSocket, jVal));
      }) ;
      return that;
    } else if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'function' && typeof __args[4] === 'function') {
      j_httpClient["websocket(java.lang.String,java.lang.String,io.vertx.core.MultiMap,io.vertx.core.Handler,io.vertx.core.Handler)"](__args[0], __args[1], __args[2]._jdel, function(jVal) {
        __args[3](utils.convReturnVertxGen(WebSocket, jVal));
      }, function(jVal) {
        __args[4](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (__args.length === 4 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      j_httpClient["websocket(io.vertx.core.http.RequestOptions,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,io.vertx.core.Handler)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, __args[1]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[2]), function(jVal) {
        __args[3](utils.convReturnVertxGen(WebSocket, jVal));
      }) ;
      return that;
    } else if (__args.length === 6 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'object' && __args[3]._jdel && typeof __args[4] === 'string' && typeof __args[5] === 'function') {
      j_httpClient["websocket(int,java.lang.String,java.lang.String,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], __args[3]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[4]), function(jVal) {
        __args[5](utils.convReturnVertxGen(WebSocket, jVal));
      }) ;
      return that;
    } else if (__args.length === 5 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'string' && typeof __args[3] === 'function' && typeof __args[4] === 'function') {
      j_httpClient["websocket(io.vertx.core.http.RequestOptions,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,io.vertx.core.Handler,io.vertx.core.Handler)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, __args[1]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[2]), function(jVal) {
        __args[3](utils.convReturnVertxGen(WebSocket, jVal));
      }, function(jVal) {
        __args[4](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (__args.length === 7 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'object' && __args[3]._jdel && typeof __args[4] === 'string' && typeof __args[5] === 'function' && typeof __args[6] === 'function') {
      j_httpClient["websocket(int,java.lang.String,java.lang.String,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,io.vertx.core.Handler,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], __args[3]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[4]), function(jVal) {
        __args[5](utils.convReturnVertxGen(WebSocket, jVal));
      }, function(jVal) {
        __args[6](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'string' && typeof __args[4] === 'function') {
      j_httpClient["websocket(java.lang.String,java.lang.String,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,io.vertx.core.Handler)"](__args[0], __args[1], __args[2]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[3]), function(jVal) {
        __args[4](utils.convReturnVertxGen(WebSocket, jVal));
      }) ;
      return that;
    } else if (__args.length === 6 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'string' && typeof __args[4] === 'function' && typeof __args[5] === 'function') {
      j_httpClient["websocket(java.lang.String,java.lang.String,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,io.vertx.core.Handler,io.vertx.core.Handler)"](__args[0], __args[1], __args[2]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[3]), function(jVal) {
        __args[4](utils.convReturnVertxGen(WebSocket, jVal));
      }, function(jVal) {
        __args[5](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (__args.length === 5 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'string' && typeof __args[3] === 'string' && typeof __args[4] === 'function') {
      j_httpClient["websocket(io.vertx.core.http.RequestOptions,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,java.lang.String,io.vertx.core.Handler)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, __args[1]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[2]), __args[3], function(jVal) {
        __args[4](utils.convReturnVertxGen(WebSocket, jVal));
      }) ;
      return that;
    } else if (__args.length === 7 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'object' && __args[3]._jdel && typeof __args[4] === 'string' && typeof __args[5] === 'string' && typeof __args[6] === 'function') {
      j_httpClient["websocket(int,java.lang.String,java.lang.String,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], __args[3]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[4]), __args[5], function(jVal) {
        __args[6](utils.convReturnVertxGen(WebSocket, jVal));
      }) ;
      return that;
    } else if (__args.length === 6 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'string' && typeof __args[3] === 'string' && typeof __args[4] === 'function' && typeof __args[5] === 'function') {
      j_httpClient["websocket(io.vertx.core.http.RequestOptions,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,java.lang.String,io.vertx.core.Handler,io.vertx.core.Handler)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, __args[1]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[2]), __args[3], function(jVal) {
        __args[4](utils.convReturnVertxGen(WebSocket, jVal));
      }, function(jVal) {
        __args[5](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (__args.length === 8 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'object' && __args[3]._jdel && typeof __args[4] === 'string' && typeof __args[5] === 'string' && typeof __args[6] === 'function' && typeof __args[7] === 'function') {
      j_httpClient["websocket(int,java.lang.String,java.lang.String,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,java.lang.String,io.vertx.core.Handler,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], __args[3]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[4]), __args[5], function(jVal) {
        __args[6](utils.convReturnVertxGen(WebSocket, jVal));
      }, function(jVal) {
        __args[7](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (__args.length === 6 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'string' && typeof __args[4] === 'string' && typeof __args[5] === 'function') {
      j_httpClient["websocket(java.lang.String,java.lang.String,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[3]), __args[4], function(jVal) {
        __args[5](utils.convReturnVertxGen(WebSocket, jVal));
      }) ;
      return that;
    } else if (__args.length === 7 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'string' && typeof __args[4] === 'string' && typeof __args[5] === 'function' && typeof __args[6] === 'function') {
      j_httpClient["websocket(java.lang.String,java.lang.String,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,java.lang.String,io.vertx.core.Handler,io.vertx.core.Handler)"](__args[0], __args[1], __args[2]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[3]), __args[4], function(jVal) {
        __args[5](utils.convReturnVertxGen(WebSocket, jVal));
      }, function(jVal) {
        __args[6](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_httpClient["websocket(java.lang.String,io.vertx.core.Handler)"](__args[0], function(jVal) {
        __args[1](utils.convReturnVertxGen(WebSocket, jVal));
      }) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'function' && typeof __args[2] === 'function') {
      j_httpClient["websocket(java.lang.String,io.vertx.core.Handler,io.vertx.core.Handler)"](__args[0], function(jVal) {
        __args[1](utils.convReturnVertxGen(WebSocket, jVal));
      }, function(jVal) {
        __args[2](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'function') {
      j_httpClient["websocket(java.lang.String,io.vertx.core.MultiMap,io.vertx.core.Handler)"](__args[0], __args[1]._jdel, function(jVal) {
        __args[2](utils.convReturnVertxGen(WebSocket, jVal));
      }) ;
      return that;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'function' && typeof __args[3] === 'function') {
      j_httpClient["websocket(java.lang.String,io.vertx.core.MultiMap,io.vertx.core.Handler,io.vertx.core.Handler)"](__args[0], __args[1]._jdel, function(jVal) {
        __args[2](utils.convReturnVertxGen(WebSocket, jVal));
      }, function(jVal) {
        __args[3](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      j_httpClient["websocket(java.lang.String,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,io.vertx.core.Handler)"](__args[0], __args[1]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[2]), function(jVal) {
        __args[3](utils.convReturnVertxGen(WebSocket, jVal));
      }) ;
      return that;
    } else if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'string' && typeof __args[3] === 'function' && typeof __args[4] === 'function') {
      j_httpClient["websocket(java.lang.String,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,io.vertx.core.Handler,io.vertx.core.Handler)"](__args[0], __args[1]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[2]), function(jVal) {
        __args[3](utils.convReturnVertxGen(WebSocket, jVal));
      }, function(jVal) {
        __args[4](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'string' && typeof __args[3] === 'string' && typeof __args[4] === 'function') {
      j_httpClient["websocket(java.lang.String,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[2]), __args[3], function(jVal) {
        __args[4](utils.convReturnVertxGen(WebSocket, jVal));
      }) ;
      return that;
    } else if (__args.length === 6 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'string' && typeof __args[3] === 'string' && typeof __args[4] === 'function' && typeof __args[5] === 'function') {
      j_httpClient["websocket(java.lang.String,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,java.lang.String,io.vertx.core.Handler,io.vertx.core.Handler)"](__args[0], __args[1]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[2]), __args[3], function(jVal) {
        __args[4](utils.convReturnVertxGen(WebSocket, jVal));
      }, function(jVal) {
        __args[5](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (typeof __super_websocket != 'undefined') {
      return __super_websocket.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Connect a WebSocket with the specified absolute url, with the specified headers, using
   the specified version of WebSockets, and the specified WebSocket sub protocols.

   @public
   @param url {string} the absolute url 
   @param headers {MultiMap} the headers 
   @param version {Object} the WebSocket version 
   @param subProtocols {string} the subprotocols to use 
   @param wsConnect {function} handler that will be called with the WebSocket when connected 
   @param failureHandler {function} handler that will be called if WebSocket connection fails 
   @return {HttpClient} a reference to this, so the API can be used fluently
   */
  this.websocketAbs =  function(url, headers, version, subProtocols, wsConnect, failureHandler) {
    var __args = arguments;
    if (__args.length === 6 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'string' && typeof __args[3] === 'string' && typeof __args[4] === 'function' && typeof __args[5] === 'function') {
      j_httpClient["websocketAbs(java.lang.String,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,java.lang.String,io.vertx.core.Handler,io.vertx.core.Handler)"](__args[0], __args[1]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[2]), __args[3], function(jVal) {
        __args[4](utils.convReturnVertxGen(WebSocket, jVal));
      }, function(jVal) {
        __args[5](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (typeof __super_websocketAbs != 'undefined') {
      return __super_websocketAbs.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Connect a WebSocket with the specified options.

   @public
   @param options {Object} the request options 
   @param handler {function} 
   */
  this.webSocket =  function() {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      j_httpClient["webSocket(int,java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(ar) {
        if (ar.succeeded()) {
          __args[3](utils.convReturnVertxGen(WebSocket, ar.result()), null);
        } else {
          __args[3](null, ar.cause());
        }
      });
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_httpClient["webSocket(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](utils.convReturnVertxGen(WebSocket, ar.result()), null);
        } else {
          __args[2](null, ar.cause());
        }
      });
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_httpClient["webSocket(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnVertxGen(WebSocket, ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      j_httpClient["webSocket(io.vertx.core.http.WebSocketConnectOptions,io.vertx.core.Handler)"](__args[0]  != null ? new WebSocketConnectOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnVertxGen(WebSocket, ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (typeof __super_webSocket != 'undefined') {
      return __super_webSocket.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Connect a WebSocket with the specified absolute url, with the specified headers, using
   the specified version of WebSockets, and the specified WebSocket sub protocols.

   @public
   @param url {string} the absolute url 
   @param headers {MultiMap} the headers 
   @param version {Object} the WebSocket version 
   @param subProtocols {Array.<string>} the subprotocols to use 
   @param handler {function} handler that will be called if WebSocket connection fails 
   */
  this.webSocketAbs =  function(url, headers, version, subProtocols, handler) {
    var __args = arguments;
    if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'string' && typeof __args[3] === 'object' && __args[3] instanceof Array && typeof __args[4] === 'function') {
      j_httpClient["webSocketAbs(java.lang.String,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,java.util.List,io.vertx.core.Handler)"](__args[0], __args[1]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[2]), utils.convParamListBasicOther(__args[3]), function(ar) {
        if (ar.succeeded()) {
          __args[4](utils.convReturnVertxGen(WebSocket, ar.result()), null);
        } else {
          __args[4](null, ar.cause());
        }
      });
    } else if (typeof __super_webSocketAbs != 'undefined') {
      return __super_webSocketAbs.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Create a WebSocket stream at the relative request URI using the default host and port, the specified headers, the
   specified version of WebSockets and the specified sub protocols

   @public
   @param requestURI {string} the relative URI 
   @param headers {MultiMap} the headers 
   @param version {Object} the WebSocket version 
   @param subProtocols {string} the subprotocols 
   @return {ReadStream} a stream emitting a WebSocket event when the client connection has been upgraded to a WebSocket
   */
  this.websocketStream =  function() {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return utils.convReturnVertxGen(ReadStream, j_httpClient["websocketStream(io.vertx.core.http.RequestOptions)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null), WebSocket._jtype) ;
    } else if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string') {
      return utils.convReturnVertxGen(ReadStream, j_httpClient["websocketStream(int,java.lang.String,java.lang.String)"](__args[0], __args[1], __args[2]), WebSocket._jtype) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return utils.convReturnVertxGen(ReadStream, j_httpClient["websocketStream(java.lang.String,java.lang.String)"](__args[0], __args[1]), WebSocket._jtype) ;
    } else if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'object' && __args[1]._jdel) {
      return utils.convReturnVertxGen(ReadStream, j_httpClient["websocketStream(io.vertx.core.http.RequestOptions,io.vertx.core.MultiMap)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, __args[1]._jdel), WebSocket._jtype) ;
    } else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'object' && __args[3]._jdel) {
      return utils.convReturnVertxGen(ReadStream, j_httpClient["websocketStream(int,java.lang.String,java.lang.String,io.vertx.core.MultiMap)"](__args[0], __args[1], __args[2], __args[3]._jdel), WebSocket._jtype) ;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && __args[2]._jdel) {
      return utils.convReturnVertxGen(ReadStream, j_httpClient["websocketStream(java.lang.String,java.lang.String,io.vertx.core.MultiMap)"](__args[0], __args[1], __args[2]._jdel), WebSocket._jtype) ;
    } else if (__args.length === 3 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'string') {
      return utils.convReturnVertxGen(ReadStream, j_httpClient["websocketStream(io.vertx.core.http.RequestOptions,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, __args[1]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[2])), WebSocket._jtype) ;
    } else if (__args.length === 5 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'object' && __args[3]._jdel && typeof __args[4] === 'string') {
      return utils.convReturnVertxGen(ReadStream, j_httpClient["websocketStream(int,java.lang.String,java.lang.String,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion)"](__args[0], __args[1], __args[2], __args[3]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[4])), WebSocket._jtype) ;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'string') {
      return utils.convReturnVertxGen(ReadStream, j_httpClient["websocketStream(java.lang.String,java.lang.String,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion)"](__args[0], __args[1], __args[2]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[3])), WebSocket._jtype) ;
    } else if (__args.length === 4 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'string' && typeof __args[3] === 'string') {
      return utils.convReturnVertxGen(ReadStream, j_httpClient["websocketStream(io.vertx.core.http.RequestOptions,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,java.lang.String)"](__args[0]  != null ? new RequestOptions(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, __args[1]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[2]), __args[3]), WebSocket._jtype) ;
    } else if (__args.length === 6 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'object' && __args[3]._jdel && typeof __args[4] === 'string' && typeof __args[5] === 'string') {
      return utils.convReturnVertxGen(ReadStream, j_httpClient["websocketStream(int,java.lang.String,java.lang.String,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,java.lang.String)"](__args[0], __args[1], __args[2], __args[3]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[4]), __args[5]), WebSocket._jtype) ;
    } else if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'string' && typeof __args[4] === 'string') {
      return utils.convReturnVertxGen(ReadStream, j_httpClient["websocketStream(java.lang.String,java.lang.String,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,java.lang.String)"](__args[0], __args[1], __args[2]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[3]), __args[4]), WebSocket._jtype) ;
    } else if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(ReadStream, j_httpClient["websocketStream(java.lang.String)"](__args[0]), WebSocket._jtype) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel) {
      return utils.convReturnVertxGen(ReadStream, j_httpClient["websocketStream(java.lang.String,io.vertx.core.MultiMap)"](__args[0], __args[1]._jdel), WebSocket._jtype) ;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'string') {
      return utils.convReturnVertxGen(ReadStream, j_httpClient["websocketStream(java.lang.String,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion)"](__args[0], __args[1]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[2])), WebSocket._jtype) ;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'string' && typeof __args[3] === 'string') {
      return utils.convReturnVertxGen(ReadStream, j_httpClient["websocketStream(java.lang.String,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,java.lang.String)"](__args[0], __args[1]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[2]), __args[3]), WebSocket._jtype) ;
    } else if (typeof __super_websocketStream != 'undefined') {
      return __super_websocketStream.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Create a WebSocket stream with the specified absolute url, the specified headers, using the specified version of WebSockets,
   and the specified WebSocket sub protocols.

   @public
   @param url {string} the absolute url 
   @param headers {MultiMap} the headers 
   @param version {Object} the WebSocket version 
   @param subProtocols {string} the subprotocols to use 
   @return {ReadStream} a stream emitting a WebSocket event when the client connection has been upgraded to a WebSocket
   */
  this.websocketStreamAbs =  function(url, headers, version, subProtocols) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'string' && typeof __args[3] === 'string') {
      return utils.convReturnVertxGen(ReadStream, j_httpClient["websocketStreamAbs(java.lang.String,io.vertx.core.MultiMap,io.vertx.core.http.WebsocketVersion,java.lang.String)"](__args[0], __args[1]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[2]), __args[3]), WebSocket._jtype) ;
    } else if (typeof __super_websocketStreamAbs != 'undefined') {
      return __super_websocketStreamAbs.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set a connection handler for the client. This handler is called when a new connection is established.

   @public
   @param handler {function} 
   @return {HttpClient} a reference to this, so the API can be used fluently
   */
  this.connectionHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpClient["connectionHandler(io.vertx.core.Handler)"](function(jVal) {
        __args[0](utils.convReturnVertxGen(HttpConnection, jVal));
      }) ;
      return that;
    } else if (typeof __super_connectionHandler != 'undefined') {
      return __super_connectionHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set a redirect handler for the http client.
   <p>
   The redirect handler is called when a <code>3xx</code> response is received and the request is configured to
   follow redirects with {@link HttpClientRequest#setFollowRedirects}.
   <p>
   The redirect handler is passed the {@link HttpClientResponse}, it can return an {@link HttpClientRequest} or <code>null</code>.
   <ul>
     <li>when null is returned, the original response is processed by the original request response handler</li>
     <li>when a new <code>Future<HttpClientRequest></code> is returned, the client will send this new request</li>
   </ul>
   The new request will get a copy of the previous request headers unless headers are set. In this case,
   the client assumes that the redirect handler exclusively managers the headers of the new request.
   <p>
   The handler must return a <code>Future<HttpClientRequest></code> unsent so the client can further configure it and send it.

   @public
   @param handler {function} the new redirect handler 
   @return {HttpClient} a reference to this, so the API can be used fluently
   */
  this.redirectHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpClient["redirectHandler(java.util.function.Function)"](function(jVal) {
        var jRet = __args[0](utils.convReturnVertxGen(HttpClientResponse, jVal));
        return jRet._jdel;
      }) ;
      return that;
    } else if (typeof __super_redirectHandler != 'undefined') {
      return __super_redirectHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Close the client. Closing will close down any pooled connections.
   Clients should always be closed after use.

   @public

   */
  this.close =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpClient["close()"]();
    } else if (typeof __super_close != 'undefined') {
      return __super_close.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_httpClient;
};

HttpClient._jclass = utils.getJavaClass("io.vertx.core.http.HttpClient");
HttpClient._jtype = {accept: function(obj) {
    return HttpClient._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(HttpClient.prototype, {});
    HttpClient.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
HttpClient._create = function(jdel) {var obj = Object.create(HttpClient.prototype, {});
  HttpClient.apply(obj, arguments);
  return obj;
}
module.exports = HttpClient;