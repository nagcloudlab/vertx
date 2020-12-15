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

/** @module vertx-js/async_file */
var utils = require('vertx-js/util/utils');
var Pipe = require('vertx-js/pipe');
var Buffer = require('vertx-js/buffer');
var WriteStream = require('vertx-js/write_stream');
var ReadStream = require('vertx-js/read_stream');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JAsyncFile = Java.type('io.vertx.core.file.AsyncFile');

/**
 Represents a file on the file-system which can be read from, or written to asynchronously.
 <p>
 @class
*/
var AsyncFile = function(j_val) {

  var j_asyncFile = j_val;
  var that = this;
  ReadStream.call(this, j_val);
  WriteStream.call(this, j_val);

  var __super_end = this.end;
  var __super_end = this.end;
  var __super_writeQueueFull = this.writeQueueFull;
  var __super_pipe = this.pipe;
  var __super_pipeTo = this.pipeTo;
  var __super_pipeTo = this.pipeTo;
  var __super_handler = this.handler;
  var __super_pause = this.pause;
  var __super_resume = this.resume;
  var __super_endHandler = this.endHandler;
  var __super_write = this.write;
  var __super_write = this.write;
  var __super_setWriteQueueMaxSize = this.setWriteQueueMaxSize;
  var __super_drainHandler = this.drainHandler;
  var __super_exceptionHandler = this.exceptionHandler;
  var __super_fetch = this.fetch;
  var __super_end = this.end;
  var __super_end = this.end;
  var __super_close = this.close;
  var __super_close = this.close;
  var __super_write = this.write;
  var __super_read = this.read;
  var __super_flush = this.flush;
  var __super_flush = this.flush;
  var __super_setReadPos = this.setReadPos;
  var __super_setReadLength = this.setReadLength;
  var __super_setWritePos = this.setWritePos;
  var __super_getWritePos = this.getWritePos;
  var __super_setReadBufferSize = this.setReadBufferSize;
  /**
   Close the file, see {@link AsyncFile#close}.

   @public
   @param handler {function} 
   */
  this.end =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_asyncFile["end(io.vertx.core.buffer.Buffer)"](__args[0]._jdel);
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_asyncFile["end(io.vertx.core.buffer.Buffer,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (__args.length === 0) {
      j_asyncFile["end()"]();
    } else if (__args.length === 1 && typeof __args[0] === 'function') {
      j_asyncFile["end(io.vertx.core.Handler)"](function(ar) {
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
   This will return <code>true</code> if there are more bytes in the write queue than the value set using {@link AsyncFile#setWriteQueueMaxSize}

   @public

   @return {boolean} true if write queue is full
   */
  this.writeQueueFull =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_asyncFile["writeQueueFull()"]() ;
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
      return utils.convReturnVertxGen(Pipe, j_asyncFile["pipe()"](), Buffer._jtype) ;
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
      j_asyncFile["pipeTo(io.vertx.core.streams.WriteStream)"](__args[0]._jdel);
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_asyncFile["pipeTo(io.vertx.core.streams.WriteStream,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
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
   @return {AsyncFile}
   */
  this.handler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_asyncFile["handler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
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

   @return {AsyncFile}
   */
  this.pause =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_asyncFile["pause()"]() ;
      return that;
    } else if (typeof __super_pause != 'undefined') {
      return __super_pause.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {AsyncFile}
   */
  this.resume =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_asyncFile["resume()"]() ;
      return that;
    } else if (typeof __super_resume != 'undefined') {
      return __super_resume.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param endHandler {function} 
   @return {AsyncFile}
   */
  this.endHandler =  function(endHandler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_asyncFile["endHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_endHandler != 'undefined') {
      return __super_endHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Write a {@link Buffer} to the file at position <code>position</code> in the file, asynchronously.
   <p>
   If <code>position</code> lies outside of the current size
   of the file, the file will be enlarged to encompass it.
   <p>
   When multiple writes are invoked on the same file
   there are no guarantees as to order in which those writes actually occur
   <p>
   The handler will be called when the write is complete, or if an error occurs.

   @public
   @param buffer {Buffer} the buffer to write 
   @param position {number} the position in the file to write it at 
   @param handler {function} the handler to call when the write is complete 
   @return {AsyncFile} a reference to this, so the API can be used fluently
   */
  this.write =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_asyncFile["write(io.vertx.core.buffer.Buffer)"](__args[0]._jdel) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_asyncFile["write(io.vertx.core.buffer.Buffer,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      j_asyncFile["write(io.vertx.core.buffer.Buffer,long,io.vertx.core.Handler)"](__args[0]._jdel, __args[1], function(ar) {
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
   @return {AsyncFile}
   */
  this.setWriteQueueMaxSize =  function(maxSize) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_asyncFile["setWriteQueueMaxSize(int)"](__args[0]) ;
      return that;
    } else if (typeof __super_setWriteQueueMaxSize != 'undefined') {
      return __super_setWriteQueueMaxSize.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {AsyncFile}
   */
  this.drainHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_asyncFile["drainHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_drainHandler != 'undefined') {
      return __super_drainHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {AsyncFile}
   */
  this.exceptionHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_asyncFile["exceptionHandler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
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
   @param amount {number} 
   @return {AsyncFile}
   */
  this.fetch =  function(amount) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_asyncFile["fetch(long)"](__args[0]) ;
      return that;
    } else if (typeof __super_fetch != 'undefined') {
      return __super_fetch.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Close the file. The actual close happens asynchronously.
   The handler will be called when the close is complete, or an error occurs.

   @public
   @param handler {function} the handler 
   */
  this.close =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_asyncFile["close()"]();
    } else if (__args.length === 1 && typeof __args[0] === 'function') {
      j_asyncFile["close(io.vertx.core.Handler)"](function(ar) {
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
   Reads <code>length</code> bytes of data from the file at position <code>position</code> in the file, asynchronously.
   <p>
   The read data will be written into the specified <code>Buffer buffer</code> at position <code>offset</code>.
   <p>
   If data is read past the end of the file then zero bytes will be read.<p>
   When multiple reads are invoked on the same file there are no guarantees as to order in which those reads actually occur.
   <p>
   The handler will be called when the close is complete, or if an error occurs.

   @public
   @param buffer {Buffer} the buffer to read into 
   @param offset {number} the offset into the buffer where the data will be read 
   @param position {number} the position in the file where to start reading 
   @param length {number} the number of bytes to read 
   @param handler {function} the handler to call when the write is complete 
   @return {AsyncFile} a reference to this, so the API can be used fluently
   */
  this.read =  function(buffer, offset, position, length, handler) {
    var __args = arguments;
    if (__args.length === 5 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] ==='number' && typeof __args[2] ==='number' && typeof __args[3] ==='number' && typeof __args[4] === 'function') {
      j_asyncFile["read(io.vertx.core.buffer.Buffer,int,long,int,io.vertx.core.Handler)"](__args[0]._jdel, __args[1], __args[2], __args[3], function(ar) {
        if (ar.succeeded()) {
          __args[4](utils.convReturnVertxGen(Buffer, ar.result()), null);
        } else {
          __args[4](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_read != 'undefined') {
      return __super_read.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Same as {@link AsyncFile#flush} but the handler will be called when the flush is complete or if an error occurs

   @public
   @param handler {function} 
   @return {AsyncFile}
   */
  this.flush =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_asyncFile["flush()"]() ;
      return that;
    } else if (__args.length === 1 && typeof __args[0] === 'function') {
      j_asyncFile["flush(io.vertx.core.Handler)"](function(ar) {
        if (ar.succeeded()) {
          __args[0](null, null);
        } else {
          __args[0](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_flush != 'undefined') {
      return __super_flush.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the position from which data will be read from when using the file as a {@link ReadStream}.

   @public
   @param readPos {number} the position in the file 
   @return {AsyncFile} a reference to this, so the API can be used fluently
   */
  this.setReadPos =  function(readPos) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_asyncFile["setReadPos(long)"](__args[0]) ;
      return that;
    } else if (typeof __super_setReadPos != 'undefined') {
      return __super_setReadPos.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the number of bytes that will be read when using the file as a {@link ReadStream}.

   @public
   @param readLength {number} the bytes that will be read from the file 
   @return {AsyncFile} a reference to this, so the API can be used fluently
   */
  this.setReadLength =  function(readLength) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_asyncFile["setReadLength(long)"](__args[0]) ;
      return that;
    } else if (typeof __super_setReadLength != 'undefined') {
      return __super_setReadLength.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the position from which data will be written when using the file as a {@link WriteStream}.

   @public
   @param writePos {number} the position in the file 
   @return {AsyncFile} a reference to this, so the API can be used fluently
   */
  this.setWritePos =  function(writePos) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_asyncFile["setWritePos(long)"](__args[0]) ;
      return that;
    } else if (typeof __super_setWritePos != 'undefined') {
      return __super_setWritePos.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {number} the current write position the file is at
   */
  this.getWritePos =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_asyncFile["getWritePos()"]() ;
    } else if (typeof __super_getWritePos != 'undefined') {
      return __super_getWritePos.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the buffer size that will be used to read the data from the file. Changing this value will impact how much
   the data will be read at a time from the file system.

   @public
   @param readBufferSize {number} the buffer size 
   @return {AsyncFile} a reference to this, so the API can be used fluently
   */
  this.setReadBufferSize =  function(readBufferSize) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_asyncFile["setReadBufferSize(int)"](__args[0]) ;
      return that;
    } else if (typeof __super_setReadBufferSize != 'undefined') {
      return __super_setReadBufferSize.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_asyncFile;
};

AsyncFile._jclass = utils.getJavaClass("io.vertx.core.file.AsyncFile");
AsyncFile._jtype = {accept: function(obj) {
    return AsyncFile._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(AsyncFile.prototype, {});
    AsyncFile.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
AsyncFile._create = function(jdel) {var obj = Object.create(AsyncFile.prototype, {});
  AsyncFile.apply(obj, arguments);
  return obj;
}
module.exports = AsyncFile;