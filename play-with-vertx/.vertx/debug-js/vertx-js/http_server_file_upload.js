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

/** @module vertx-js/http_server_file_upload */
var utils = require('vertx-js/util/utils');
var AsyncFile = require('vertx-js/async_file');
var Pipe = require('vertx-js/pipe');
var Buffer = require('vertx-js/buffer');
var WriteStream = require('vertx-js/write_stream');
var ReadStream = require('vertx-js/read_stream');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JHttpServerFileUpload = Java.type('io.vertx.core.http.HttpServerFileUpload');

/**
 Represents an file upload from an HTML FORM.

 @class
*/
var HttpServerFileUpload = function(j_val) {

  var j_httpServerFileUpload = j_val;
  var that = this;
  ReadStream.call(this, j_val);

  var __super_pipe = this.pipe;
  var __super_pipeTo = this.pipeTo;
  var __super_pipeTo = this.pipeTo;
  var __super_exceptionHandler = this.exceptionHandler;
  var __super_handler = this.handler;
  var __super_endHandler = this.endHandler;
  var __super_pause = this.pause;
  var __super_resume = this.resume;
  var __super_fetch = this.fetch;
  var __super_streamToFileSystem = this.streamToFileSystem;
  var __super_filename = this.filename;
  var __super_name = this.name;
  var __super_contentType = this.contentType;
  var __super_contentTransferEncoding = this.contentTransferEncoding;
  var __super_charset = this.charset;
  var __super_size = this.size;
  var __super_isSizeAvailable = this.isSizeAvailable;
  var __super_file = this.file;
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
      return utils.convReturnVertxGen(Pipe, j_httpServerFileUpload["pipe()"](), Buffer._jtype) ;
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
      j_httpServerFileUpload["pipeTo(io.vertx.core.streams.WriteStream)"](__args[0]._jdel);
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_httpServerFileUpload["pipeTo(io.vertx.core.streams.WriteStream,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
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
   @return {HttpServerFileUpload}
   */
  this.exceptionHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpServerFileUpload["exceptionHandler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
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
   @return {HttpServerFileUpload}
   */
  this.handler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpServerFileUpload["handler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
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
   @param endHandler {function} 
   @return {HttpServerFileUpload}
   */
  this.endHandler =  function(endHandler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpServerFileUpload["endHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_endHandler != 'undefined') {
      return __super_endHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {HttpServerFileUpload}
   */
  this.pause =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpServerFileUpload["pause()"]() ;
      return that;
    } else if (typeof __super_pause != 'undefined') {
      return __super_pause.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {HttpServerFileUpload}
   */
  this.resume =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpServerFileUpload["resume()"]() ;
      return that;
    } else if (typeof __super_resume != 'undefined') {
      return __super_resume.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param amount {number} 
   @return {HttpServerFileUpload}
   */
  this.fetch =  function(amount) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_httpServerFileUpload["fetch(long)"](__args[0]) ;
      return that;
    } else if (typeof __super_fetch != 'undefined') {
      return __super_fetch.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Stream the content of this upload to the given file on storage.

   @public
   @param filename {string} the name of the file 
   @return {HttpServerFileUpload}
   */
  this.streamToFileSystem =  function(filename) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_httpServerFileUpload["streamToFileSystem(java.lang.String)"](__args[0]) ;
      return that;
    } else if (typeof __super_streamToFileSystem != 'undefined') {
      return __super_streamToFileSystem.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the filename which was used when upload the file.
   */
  this.filename =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerFileUpload["filename()"]() ;
    } else if (typeof __super_filename != 'undefined') {
      return __super_filename.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the name of the attribute
   */
  this.name =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerFileUpload["name()"]() ;
    } else if (typeof __super_name != 'undefined') {
      return __super_name.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the content type for the upload
   */
  this.contentType =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerFileUpload["contentType()"]() ;
    } else if (typeof __super_contentType != 'undefined') {
      return __super_contentType.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the contentTransferEncoding for the upload
   */
  this.contentTransferEncoding =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerFileUpload["contentTransferEncoding()"]() ;
    } else if (typeof __super_contentTransferEncoding != 'undefined') {
      return __super_contentTransferEncoding.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the charset for the upload
   */
  this.charset =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerFileUpload["charset()"]() ;
    } else if (typeof __super_charset != 'undefined') {
      return __super_charset.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   The size of the upload may not be available until it is all read.
   Check {@link HttpServerFileUpload#isSizeAvailable} to determine this

   @public

   @return {number} the size of the upload (in bytes)
   */
  this.size =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerFileUpload["size()"]() ;
    } else if (typeof __super_size != 'undefined') {
      return __super_size.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean} <code>true</code> if the size of the upload can be retrieved via {@link HttpServerFileUpload#size}.
   */
  this.isSizeAvailable =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerFileUpload["isSizeAvailable()"]() ;
    } else if (typeof __super_isSizeAvailable != 'undefined') {
      return __super_isSizeAvailable.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {AsyncFile} the async uploaded file when {@link HttpServerFileUpload#streamToFileSystem} has been used
   */
  this.file =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(AsyncFile, j_httpServerFileUpload["file()"]()) ;
    } else if (typeof __super_file != 'undefined') {
      return __super_file.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_httpServerFileUpload;
};

HttpServerFileUpload._jclass = utils.getJavaClass("io.vertx.core.http.HttpServerFileUpload");
HttpServerFileUpload._jtype = {accept: function(obj) {
    return HttpServerFileUpload._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(HttpServerFileUpload.prototype, {});
    HttpServerFileUpload.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
HttpServerFileUpload._create = function(jdel) {var obj = Object.create(HttpServerFileUpload.prototype, {});
  HttpServerFileUpload.apply(obj, arguments);
  return obj;
}
module.exports = HttpServerFileUpload;