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

/** @module vertx-js/buffer */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JBuffer = Java.type('io.vertx.core.buffer.Buffer');

/**
 Most data is shuffled around inside Vert.x using buffers.
 <p>
 A buffer is a sequence of zero or more bytes that can read from or written to and which expands automatically as
 necessary to accommodate any bytes written to it. You can perhaps think of a buffer as smart byte array.
 <p>
 Please consult the documentation for more information on buffers.

 @class
*/
var Buffer = function(j_val) {

  var j_buffer = j_val;
  var that = this;

  var __super_buffer = this.buffer;
  var __super_buffer = this.buffer;
  var __super_buffer = this.buffer;
  var __super_buffer = this.buffer;
  var __super_toString = this.toString;
  var __super_toString = this.toString;
  var __super_toJsonObject = this.toJsonObject;
  var __super_toJsonArray = this.toJsonArray;
  var __super_toJson = this.toJson;
  var __super_getByte = this.getByte;
  var __super_getUnsignedByte = this.getUnsignedByte;
  var __super_getInt = this.getInt;
  var __super_getIntLE = this.getIntLE;
  var __super_getUnsignedInt = this.getUnsignedInt;
  var __super_getUnsignedIntLE = this.getUnsignedIntLE;
  var __super_getLong = this.getLong;
  var __super_getLongLE = this.getLongLE;
  var __super_getDouble = this.getDouble;
  var __super_getFloat = this.getFloat;
  var __super_getShort = this.getShort;
  var __super_getShortLE = this.getShortLE;
  var __super_getUnsignedShort = this.getUnsignedShort;
  var __super_getUnsignedShortLE = this.getUnsignedShortLE;
  var __super_getMedium = this.getMedium;
  var __super_getMediumLE = this.getMediumLE;
  var __super_getUnsignedMedium = this.getUnsignedMedium;
  var __super_getUnsignedMediumLE = this.getUnsignedMediumLE;
  var __super_getBuffer = this.getBuffer;
  var __super_getString = this.getString;
  var __super_getString = this.getString;
  var __super_appendBuffer = this.appendBuffer;
  var __super_appendBuffer = this.appendBuffer;
  var __super_appendByte = this.appendByte;
  var __super_appendUnsignedByte = this.appendUnsignedByte;
  var __super_appendInt = this.appendInt;
  var __super_appendIntLE = this.appendIntLE;
  var __super_appendUnsignedInt = this.appendUnsignedInt;
  var __super_appendUnsignedIntLE = this.appendUnsignedIntLE;
  var __super_appendMedium = this.appendMedium;
  var __super_appendMediumLE = this.appendMediumLE;
  var __super_appendLong = this.appendLong;
  var __super_appendLongLE = this.appendLongLE;
  var __super_appendShort = this.appendShort;
  var __super_appendShortLE = this.appendShortLE;
  var __super_appendUnsignedShort = this.appendUnsignedShort;
  var __super_appendUnsignedShortLE = this.appendUnsignedShortLE;
  var __super_appendFloat = this.appendFloat;
  var __super_appendDouble = this.appendDouble;
  var __super_appendString = this.appendString;
  var __super_appendString = this.appendString;
  var __super_setByte = this.setByte;
  var __super_setUnsignedByte = this.setUnsignedByte;
  var __super_setInt = this.setInt;
  var __super_setIntLE = this.setIntLE;
  var __super_setUnsignedInt = this.setUnsignedInt;
  var __super_setUnsignedIntLE = this.setUnsignedIntLE;
  var __super_setMedium = this.setMedium;
  var __super_setMediumLE = this.setMediumLE;
  var __super_setLong = this.setLong;
  var __super_setLongLE = this.setLongLE;
  var __super_setDouble = this.setDouble;
  var __super_setFloat = this.setFloat;
  var __super_setShort = this.setShort;
  var __super_setShortLE = this.setShortLE;
  var __super_setUnsignedShort = this.setUnsignedShort;
  var __super_setUnsignedShortLE = this.setUnsignedShortLE;
  var __super_setBuffer = this.setBuffer;
  var __super_setBuffer = this.setBuffer;
  var __super_setString = this.setString;
  var __super_setString = this.setString;
  var __super_length = this.length;
  var __super_copy = this.copy;
  var __super_slice = this.slice;
  var __super_slice = this.slice;
  /**
   Returns a <code>String</code> representation of the Buffer with the encoding specified by <code>enc</code>

   @public
   @param enc {string} 
   @return {string}
   */
  this.toString =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_buffer["toString()"]() ;
    } else if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_buffer["toString(java.lang.String)"](__args[0]) ;
    } else if (typeof __super_toString != 'undefined') {
      return __super_toString.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns a Json object representation of the Buffer.

   @public

   @return {Object}
   */
  this.toJsonObject =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnJson(j_buffer["toJsonObject()"]()) ;
    } else if (typeof __super_toJsonObject != 'undefined') {
      return __super_toJsonObject.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns a Json array representation of the Buffer.

   @public

   @return {Array}
   */
  this.toJsonArray =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnJson(j_buffer["toJsonArray()"]()) ;
    } else if (typeof __super_toJsonArray != 'undefined') {
      return __super_toJsonArray.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns a Json representation of the Buffer.

   @public

   @return {Object} a JSON element which can be a , , String, ...etc if the buffer contains an array, object, string, ...etc
   */
  this.toJson =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnTypeUnknown(j_buffer["toJson()"]()) ;
    } else if (typeof __super_toJson != 'undefined') {
      return __super_toJson.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns the <code>byte</code> at position <code>pos</code> in the Buffer.

   @public
   @param pos {number} 
   @return {number}
   */
  this.getByte =  function(pos) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_buffer["getByte(int)"](__args[0]) ;
    } else if (typeof __super_getByte != 'undefined') {
      return __super_getByte.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns the unsigned <code>byte</code> at position <code>pos</code> in the Buffer, as a <code>short</code>.

   @public
   @param pos {number} 
   @return {number}
   */
  this.getUnsignedByte =  function(pos) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_buffer["getUnsignedByte(int)"](__args[0]) ;
    } else if (typeof __super_getUnsignedByte != 'undefined') {
      return __super_getUnsignedByte.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns the <code>int</code> at position <code>pos</code> in the Buffer.

   @public
   @param pos {number} 
   @return {number}
   */
  this.getInt =  function(pos) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_buffer["getInt(int)"](__args[0]) ;
    } else if (typeof __super_getInt != 'undefined') {
      return __super_getInt.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Gets a 32-bit integer at the specified absolute <code>index</code> in this buffer with Little Endian Byte Order.

   @public
   @param pos {number} 
   @return {number}
   */
  this.getIntLE =  function(pos) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_buffer["getIntLE(int)"](__args[0]) ;
    } else if (typeof __super_getIntLE != 'undefined') {
      return __super_getIntLE.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns the unsigned <code>int</code> at position <code>pos</code> in the Buffer, as a <code>long</code>.

   @public
   @param pos {number} 
   @return {number}
   */
  this.getUnsignedInt =  function(pos) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_buffer["getUnsignedInt(int)"](__args[0]) ;
    } else if (typeof __super_getUnsignedInt != 'undefined') {
      return __super_getUnsignedInt.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns the unsigned <code>int</code> at position <code>pos</code> in the Buffer, as a <code>long</code> in Little Endian Byte Order.

   @public
   @param pos {number} 
   @return {number}
   */
  this.getUnsignedIntLE =  function(pos) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_buffer["getUnsignedIntLE(int)"](__args[0]) ;
    } else if (typeof __super_getUnsignedIntLE != 'undefined') {
      return __super_getUnsignedIntLE.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns the <code>long</code> at position <code>pos</code> in the Buffer.

   @public
   @param pos {number} 
   @return {number}
   */
  this.getLong =  function(pos) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_buffer["getLong(int)"](__args[0]) ;
    } else if (typeof __super_getLong != 'undefined') {
      return __super_getLong.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Gets a 64-bit long integer at the specified absolute <code>index</code> in this buffer in Little Endian Byte Order.

   @public
   @param pos {number} 
   @return {number}
   */
  this.getLongLE =  function(pos) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_buffer["getLongLE(int)"](__args[0]) ;
    } else if (typeof __super_getLongLE != 'undefined') {
      return __super_getLongLE.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns the <code>double</code> at position <code>pos</code> in the Buffer.

   @public
   @param pos {number} 
   @return {number}
   */
  this.getDouble =  function(pos) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_buffer["getDouble(int)"](__args[0]) ;
    } else if (typeof __super_getDouble != 'undefined') {
      return __super_getDouble.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns the <code>float</code> at position <code>pos</code> in the Buffer.

   @public
   @param pos {number} 
   @return {number}
   */
  this.getFloat =  function(pos) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_buffer["getFloat(int)"](__args[0]) ;
    } else if (typeof __super_getFloat != 'undefined') {
      return __super_getFloat.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns the <code>short</code> at position <code>pos</code> in the Buffer.

   @public
   @param pos {number} 
   @return {number}
   */
  this.getShort =  function(pos) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_buffer["getShort(int)"](__args[0]) ;
    } else if (typeof __super_getShort != 'undefined') {
      return __super_getShort.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Gets a 16-bit short integer at the specified absolute <code>index</code> in this buffer in Little Endian Byte Order.

   @public
   @param pos {number} 
   @return {number}
   */
  this.getShortLE =  function(pos) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_buffer["getShortLE(int)"](__args[0]) ;
    } else if (typeof __super_getShortLE != 'undefined') {
      return __super_getShortLE.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns the unsigned <code>short</code> at position <code>pos</code> in the Buffer, as an <code>int</code>.

   @public
   @param pos {number} 
   @return {number}
   */
  this.getUnsignedShort =  function(pos) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_buffer["getUnsignedShort(int)"](__args[0]) ;
    } else if (typeof __super_getUnsignedShort != 'undefined') {
      return __super_getUnsignedShort.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Gets an unsigned 16-bit short integer at the specified absolute <code>index</code> in this buffer in Little Endian Byte Order.

   @public
   @param pos {number} 
   @return {number}
   */
  this.getUnsignedShortLE =  function(pos) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_buffer["getUnsignedShortLE(int)"](__args[0]) ;
    } else if (typeof __super_getUnsignedShortLE != 'undefined') {
      return __super_getUnsignedShortLE.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Gets a 24-bit medium integer at the specified absolute <code>index</code> in this buffer.

   @public
   @param pos {number} 
   @return {number}
   */
  this.getMedium =  function(pos) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_buffer["getMedium(int)"](__args[0]) ;
    } else if (typeof __super_getMedium != 'undefined') {
      return __super_getMedium.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Gets a 24-bit medium integer at the specified absolute <code>index</code> in this buffer in the Little Endian Byte Order.

   @public
   @param pos {number} 
   @return {number}
   */
  this.getMediumLE =  function(pos) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_buffer["getMediumLE(int)"](__args[0]) ;
    } else if (typeof __super_getMediumLE != 'undefined') {
      return __super_getMediumLE.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Gets an unsigned 24-bit medium integer at the specified absolute <code>index</code> in this buffer.

   @public
   @param pos {number} 
   @return {number}
   */
  this.getUnsignedMedium =  function(pos) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_buffer["getUnsignedMedium(int)"](__args[0]) ;
    } else if (typeof __super_getUnsignedMedium != 'undefined') {
      return __super_getUnsignedMedium.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Gets an unsigned 24-bit medium integer at the specified absolute <code>index</code> in this buffer in Little Endian Byte Order.

   @public
   @param pos {number} 
   @return {number}
   */
  this.getUnsignedMediumLE =  function(pos) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_buffer["getUnsignedMediumLE(int)"](__args[0]) ;
    } else if (typeof __super_getUnsignedMediumLE != 'undefined') {
      return __super_getUnsignedMediumLE.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns a copy of a sub-sequence the Buffer as a {@link Buffer} starting at position <code>start</code>
   and ending at position <code>end - 1</code>

   @public
   @param start {number} 
   @param end {number} 
   @return {Buffer}
   */
  this.getBuffer =  function(start, end) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] ==='number') {
      return utils.convReturnVertxGen(Buffer, j_buffer["getBuffer(int,int)"](__args[0], __args[1])) ;
    } else if (typeof __super_getBuffer != 'undefined') {
      return __super_getBuffer.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns a copy of a sub-sequence the Buffer as a <code>String</code> starting at position <code>start</code>
   and ending at position <code>end - 1</code> interpreted as a String in UTF-8 encoding

   @public
   @param start {number} 
   @param end {number} 
   @return {string}
   */
  this.getString =  function() {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] ==='number' && typeof __args[2] === 'string') {
      return j_buffer["getString(int,int,java.lang.String)"](__args[0], __args[1], __args[2]) ;
    } else if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] ==='number') {
      return j_buffer["getString(int,int)"](__args[0], __args[1]) ;
    } else if (typeof __super_getString != 'undefined') {
      return __super_getString.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Appends the specified <code>Buffer</code> starting at the <code>offset</code> using <code>len</code> to the end of this Buffer. The buffer will expand as necessary to accommodate
   any bytes written.<p>
   Returns a reference to <code>this</code> so multiple operations can be appended together.

   @public
   @param buff {Buffer} 
   @param offset {number} 
   @param len {number} 
   @return {Buffer}
   */
  this.appendBuffer =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_buffer["appendBuffer(io.vertx.core.buffer.Buffer)"](__args[0]._jdel) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] ==='number' && typeof __args[2] ==='number') {
      j_buffer["appendBuffer(io.vertx.core.buffer.Buffer,int,int)"](__args[0]._jdel, __args[1], __args[2]) ;
      return that;
    } else if (typeof __super_appendBuffer != 'undefined') {
      return __super_appendBuffer.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Appends the specified <code>byte</code> to the end of the Buffer. The buffer will expand as necessary to accommodate any bytes written.<p>
   Returns a reference to <code>this</code> so multiple operations can be appended together.

   @public
   @param b {number} 
   @return {Buffer}
   */
  this.appendByte =  function(b) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_buffer["appendByte(byte)"](__args[0]) ;
      return that;
    } else if (typeof __super_appendByte != 'undefined') {
      return __super_appendByte.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Appends the specified unsigned <code>byte</code> to the end of the Buffer. The buffer will expand as necessary to accommodate any bytes written.<p>
   Returns a reference to <code>this</code> so multiple operations can be appended together.

   @public
   @param b {number} 
   @return {Buffer}
   */
  this.appendUnsignedByte =  function(b) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_buffer["appendUnsignedByte(short)"](__args[0]) ;
      return that;
    } else if (typeof __super_appendUnsignedByte != 'undefined') {
      return __super_appendUnsignedByte.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Appends the specified <code>int</code> to the end of the Buffer. The buffer will expand as necessary to accommodate any bytes written.<p>
   Returns a reference to <code>this</code> so multiple operations can be appended together.

   @public
   @param i {number} 
   @return {Buffer}
   */
  this.appendInt =  function(i) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_buffer["appendInt(int)"](__args[0]) ;
      return that;
    } else if (typeof __super_appendInt != 'undefined') {
      return __super_appendInt.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Appends the specified <code>int</code> to the end of the Buffer in the Little Endian Byte Order. The buffer will expand as necessary to accommodate any bytes written.<p>
   Returns a reference to <code>this</code> so multiple operations can be appended together.

   @public
   @param i {number} 
   @return {Buffer}
   */
  this.appendIntLE =  function(i) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_buffer["appendIntLE(int)"](__args[0]) ;
      return that;
    } else if (typeof __super_appendIntLE != 'undefined') {
      return __super_appendIntLE.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Appends the specified unsigned <code>int</code> to the end of the Buffer. The buffer will expand as necessary to accommodate any bytes written.<p>
   Returns a reference to <code>this</code> so multiple operations can be appended together.

   @public
   @param i {number} 
   @return {Buffer}
   */
  this.appendUnsignedInt =  function(i) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_buffer["appendUnsignedInt(long)"](__args[0]) ;
      return that;
    } else if (typeof __super_appendUnsignedInt != 'undefined') {
      return __super_appendUnsignedInt.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Appends the specified unsigned <code>int</code> to the end of the Buffer in the Little Endian Byte Order. The buffer will expand as necessary to accommodate any bytes written.<p>
   Returns a reference to <code>this</code> so multiple operations can be appended together.

   @public
   @param i {number} 
   @return {Buffer}
   */
  this.appendUnsignedIntLE =  function(i) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_buffer["appendUnsignedIntLE(long)"](__args[0]) ;
      return that;
    } else if (typeof __super_appendUnsignedIntLE != 'undefined') {
      return __super_appendUnsignedIntLE.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Appends the specified 24bit <code>int</code> to the end of the Buffer. The buffer will expand as necessary to accommodate any bytes written.<p>
   Returns a reference to <code>this</code> so multiple operations can be appended together.

   @public
   @param i {number} 
   @return {Buffer}
   */
  this.appendMedium =  function(i) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_buffer["appendMedium(int)"](__args[0]) ;
      return that;
    } else if (typeof __super_appendMedium != 'undefined') {
      return __super_appendMedium.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Appends the specified 24bit <code>int</code> to the end of the Buffer in the Little Endian Byte Order. The buffer will expand as necessary to accommodate any bytes written.<p>
   Returns a reference to <code>this</code> so multiple operations can be appended together.

   @public
   @param i {number} 
   @return {Buffer}
   */
  this.appendMediumLE =  function(i) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_buffer["appendMediumLE(int)"](__args[0]) ;
      return that;
    } else if (typeof __super_appendMediumLE != 'undefined') {
      return __super_appendMediumLE.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Appends the specified <code>long</code> to the end of the Buffer. The buffer will expand as necessary to accommodate any bytes written.<p>
   Returns a reference to <code>this</code> so multiple operations can be appended together.

   @public
   @param l {number} 
   @return {Buffer}
   */
  this.appendLong =  function(l) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_buffer["appendLong(long)"](__args[0]) ;
      return that;
    } else if (typeof __super_appendLong != 'undefined') {
      return __super_appendLong.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Appends the specified <code>long</code> to the end of the Buffer in the Little Endian Byte Order. The buffer will expand as necessary to accommodate any bytes written.<p>
   Returns a reference to <code>this</code> so multiple operations can be appended together.

   @public
   @param l {number} 
   @return {Buffer}
   */
  this.appendLongLE =  function(l) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_buffer["appendLongLE(long)"](__args[0]) ;
      return that;
    } else if (typeof __super_appendLongLE != 'undefined') {
      return __super_appendLongLE.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Appends the specified <code>short</code> to the end of the Buffer.The buffer will expand as necessary to accommodate any bytes written.<p>
   Returns a reference to <code>this</code> so multiple operations can be appended together.

   @public
   @param s {number} 
   @return {Buffer}
   */
  this.appendShort =  function(s) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_buffer["appendShort(short)"](__args[0]) ;
      return that;
    } else if (typeof __super_appendShort != 'undefined') {
      return __super_appendShort.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Appends the specified <code>short</code> to the end of the Buffer in the Little Endian Byte Order.The buffer will expand as necessary to accommodate any bytes written.<p>
   Returns a reference to <code>this</code> so multiple operations can be appended together.

   @public
   @param s {number} 
   @return {Buffer}
   */
  this.appendShortLE =  function(s) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_buffer["appendShortLE(short)"](__args[0]) ;
      return that;
    } else if (typeof __super_appendShortLE != 'undefined') {
      return __super_appendShortLE.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Appends the specified unsigned <code>short</code> to the end of the Buffer.The buffer will expand as necessary to accommodate any bytes written.<p>
   Returns a reference to <code>this</code> so multiple operations can be appended together.

   @public
   @param s {number} 
   @return {Buffer}
   */
  this.appendUnsignedShort =  function(s) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_buffer["appendUnsignedShort(int)"](__args[0]) ;
      return that;
    } else if (typeof __super_appendUnsignedShort != 'undefined') {
      return __super_appendUnsignedShort.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Appends the specified unsigned <code>short</code> to the end of the Buffer in the Little Endian Byte Order.The buffer will expand as necessary to accommodate any bytes written.<p>
   Returns a reference to <code>this</code> so multiple operations can be appended together.

   @public
   @param s {number} 
   @return {Buffer}
   */
  this.appendUnsignedShortLE =  function(s) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_buffer["appendUnsignedShortLE(int)"](__args[0]) ;
      return that;
    } else if (typeof __super_appendUnsignedShortLE != 'undefined') {
      return __super_appendUnsignedShortLE.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Appends the specified <code>float</code> to the end of the Buffer. The buffer will expand as necessary to accommodate any bytes written.<p>
   Returns a reference to <code>this</code> so multiple operations can be appended together.

   @public
   @param f {number} 
   @return {Buffer}
   */
  this.appendFloat =  function(f) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_buffer["appendFloat(float)"](__args[0]) ;
      return that;
    } else if (typeof __super_appendFloat != 'undefined') {
      return __super_appendFloat.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Appends the specified <code>double</code> to the end of the Buffer. The buffer will expand as necessary to accommodate any bytes written.<p>
   Returns a reference to <code>this</code> so multiple operations can be appended together.

   @public
   @param d {number} 
   @return {Buffer}
   */
  this.appendDouble =  function(d) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_buffer["appendDouble(double)"](__args[0]) ;
      return that;
    } else if (typeof __super_appendDouble != 'undefined') {
      return __super_appendDouble.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Appends the specified <code>String str</code> to the end of the Buffer with UTF-8 encoding.<p>
   The buffer will expand as necessary to accommodate any bytes written.<p>
   Returns a reference to <code>this</code> so multiple operations can be appended together<p>

   @public
   @param str {string} 
   @return {Buffer}
   */
  this.appendString =  function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_buffer["appendString(java.lang.String,java.lang.String)"](__args[0], __args[1]) ;
      return that;
    } else if (__args.length === 1 && typeof __args[0] === 'string') {
      j_buffer["appendString(java.lang.String)"](__args[0]) ;
      return that;
    } else if (typeof __super_appendString != 'undefined') {
      return __super_appendString.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the <code>byte</code> at position <code>pos</code> in the Buffer to the value <code>b</code>.<p>
   The buffer will expand as necessary to accommodate any value written.

   @public
   @param pos {number} 
   @param b {number} 
   @return {Buffer}
   */
  this.setByte =  function(pos, b) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] ==='number') {
      j_buffer["setByte(int,byte)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_setByte != 'undefined') {
      return __super_setByte.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the unsigned <code>byte</code> at position <code>pos</code> in the Buffer to the value <code>b</code>.<p>
   The buffer will expand as necessary to accommodate any value written.

   @public
   @param pos {number} 
   @param b {number} 
   @return {Buffer}
   */
  this.setUnsignedByte =  function(pos, b) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] ==='number') {
      j_buffer["setUnsignedByte(int,short)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_setUnsignedByte != 'undefined') {
      return __super_setUnsignedByte.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the <code>int</code> at position <code>pos</code> in the Buffer to the value <code>i</code>.<p>
   The buffer will expand as necessary to accommodate any value written.

   @public
   @param pos {number} 
   @param i {number} 
   @return {Buffer}
   */
  this.setInt =  function(pos, i) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] ==='number') {
      j_buffer["setInt(int,int)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_setInt != 'undefined') {
      return __super_setInt.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the <code>int</code> at position <code>pos</code> in the Buffer to the value <code>i</code> in the Little Endian Byte Order.<p>
   The buffer will expand as necessary to accommodate any value written.

   @public
   @param pos {number} 
   @param i {number} 
   @return {Buffer}
   */
  this.setIntLE =  function(pos, i) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] ==='number') {
      j_buffer["setIntLE(int,int)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_setIntLE != 'undefined') {
      return __super_setIntLE.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the unsigned <code>int</code> at position <code>pos</code> in the Buffer to the value <code>i</code>.<p>
   The buffer will expand as necessary to accommodate any value written.

   @public
   @param pos {number} 
   @param i {number} 
   @return {Buffer}
   */
  this.setUnsignedInt =  function(pos, i) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] ==='number') {
      j_buffer["setUnsignedInt(int,long)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_setUnsignedInt != 'undefined') {
      return __super_setUnsignedInt.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the unsigned <code>int</code> at position <code>pos</code> in the Buffer to the value <code>i</code> in the Little Endian Byte Order.<p>
   The buffer will expand as necessary to accommodate any value written.

   @public
   @param pos {number} 
   @param i {number} 
   @return {Buffer}
   */
  this.setUnsignedIntLE =  function(pos, i) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] ==='number') {
      j_buffer["setUnsignedIntLE(int,long)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_setUnsignedIntLE != 'undefined') {
      return __super_setUnsignedIntLE.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the 24bit <code>int</code> at position <code>pos</code> in the Buffer to the value <code>i</code>.<p>
   The buffer will expand as necessary to accommodate any value written.

   @public
   @param pos {number} 
   @param i {number} 
   @return {Buffer}
   */
  this.setMedium =  function(pos, i) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] ==='number') {
      j_buffer["setMedium(int,int)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_setMedium != 'undefined') {
      return __super_setMedium.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the 24bit <code>int</code> at position <code>pos</code> in the Buffer to the value <code>i</code>. in the Little Endian Byte Order<p>
   The buffer will expand as necessary to accommodate any value written.

   @public
   @param pos {number} 
   @param i {number} 
   @return {Buffer}
   */
  this.setMediumLE =  function(pos, i) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] ==='number') {
      j_buffer["setMediumLE(int,int)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_setMediumLE != 'undefined') {
      return __super_setMediumLE.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the <code>long</code> at position <code>pos</code> in the Buffer to the value <code>l</code>.<p>
   The buffer will expand as necessary to accommodate any value written.

   @public
   @param pos {number} 
   @param l {number} 
   @return {Buffer}
   */
  this.setLong =  function(pos, l) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] ==='number') {
      j_buffer["setLong(int,long)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_setLong != 'undefined') {
      return __super_setLong.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the <code>long</code> at position <code>pos</code> in the Buffer to the value <code>l</code> in the Little Endian Byte Order.<p>
   The buffer will expand as necessary to accommodate any value written.

   @public
   @param pos {number} 
   @param l {number} 
   @return {Buffer}
   */
  this.setLongLE =  function(pos, l) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] ==='number') {
      j_buffer["setLongLE(int,long)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_setLongLE != 'undefined') {
      return __super_setLongLE.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the <code>double</code> at position <code>pos</code> in the Buffer to the value <code>d</code>.<p>
   The buffer will expand as necessary to accommodate any value written.

   @public
   @param pos {number} 
   @param d {number} 
   @return {Buffer}
   */
  this.setDouble =  function(pos, d) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] ==='number') {
      j_buffer["setDouble(int,double)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_setDouble != 'undefined') {
      return __super_setDouble.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the <code>float</code> at position <code>pos</code> in the Buffer to the value <code>f</code>.<p>
   The buffer will expand as necessary to accommodate any value written.

   @public
   @param pos {number} 
   @param f {number} 
   @return {Buffer}
   */
  this.setFloat =  function(pos, f) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] ==='number') {
      j_buffer["setFloat(int,float)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_setFloat != 'undefined') {
      return __super_setFloat.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the <code>short</code> at position <code>pos</code> in the Buffer to the value <code>s</code>.<p>
   The buffer will expand as necessary to accommodate any value written.

   @public
   @param pos {number} 
   @param s {number} 
   @return {Buffer}
   */
  this.setShort =  function(pos, s) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] ==='number') {
      j_buffer["setShort(int,short)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_setShort != 'undefined') {
      return __super_setShort.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the <code>short</code> at position <code>pos</code> in the Buffer to the value <code>s</code> in the Little Endian Byte Order.<p>
   The buffer will expand as necessary to accommodate any value written.

   @public
   @param pos {number} 
   @param s {number} 
   @return {Buffer}
   */
  this.setShortLE =  function(pos, s) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] ==='number') {
      j_buffer["setShortLE(int,short)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_setShortLE != 'undefined') {
      return __super_setShortLE.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the unsigned <code>short</code> at position <code>pos</code> in the Buffer to the value <code>s</code>.<p>
   The buffer will expand as necessary to accommodate any value written.

   @public
   @param pos {number} 
   @param s {number} 
   @return {Buffer}
   */
  this.setUnsignedShort =  function(pos, s) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] ==='number') {
      j_buffer["setUnsignedShort(int,int)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_setUnsignedShort != 'undefined') {
      return __super_setUnsignedShort.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the unsigned <code>short</code> at position <code>pos</code> in the Buffer to the value <code>s</code> in the Little Endian Byte Order.<p>
   The buffer will expand as necessary to accommodate any value written.

   @public
   @param pos {number} 
   @param s {number} 
   @return {Buffer}
   */
  this.setUnsignedShortLE =  function(pos, s) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] ==='number') {
      j_buffer["setUnsignedShortLE(int,int)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_setUnsignedShortLE != 'undefined') {
      return __super_setUnsignedShortLE.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the bytes at position <code>pos</code> in the Buffer to the bytes represented by the <code>Buffer b</code> on the given <code>offset</code> and <code>len</code>.<p>
   The buffer will expand as necessary to accommodate any value written.

   @public
   @param pos {number} 
   @param b {Buffer} 
   @param offset {number} 
   @param len {number} 
   @return {Buffer}
   */
  this.setBuffer =  function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'object' && __args[1]._jdel) {
      j_buffer["setBuffer(int,io.vertx.core.buffer.Buffer)"](__args[0], __args[1]._jdel) ;
      return that;
    } else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] ==='number' && typeof __args[3] ==='number') {
      j_buffer["setBuffer(int,io.vertx.core.buffer.Buffer,int,int)"](__args[0], __args[1]._jdel, __args[2], __args[3]) ;
      return that;
    } else if (typeof __super_setBuffer != 'undefined') {
      return __super_setBuffer.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the bytes at position <code>pos</code> in the Buffer to the value of <code>str</code> encoded in encoding <code>enc</code>.<p>
   The buffer will expand as necessary to accommodate any value written.

   @public
   @param pos {number} 
   @param str {string} 
   @param enc {string} 
   @return {Buffer}
   */
  this.setString =  function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'string') {
      j_buffer["setString(int,java.lang.String)"](__args[0], __args[1]) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string') {
      j_buffer["setString(int,java.lang.String,java.lang.String)"](__args[0], __args[1], __args[2]) ;
      return that;
    } else if (typeof __super_setString != 'undefined') {
      return __super_setString.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns the length of the buffer, measured in bytes.
   All positions are indexed from zero.

   @public

   @return {number}
   */
  this.length =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_buffer["length()"]() ;
    } else if (typeof __super_length != 'undefined') {
      return __super_length.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns a copy of the entire Buffer.

   @public

   @return {Buffer}
   */
  this.copy =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(Buffer, j_buffer["copy()"]()) ;
    } else if (typeof __super_copy != 'undefined') {
      return __super_copy.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns a slice of this buffer. Modifying the content
   of the returned buffer or this buffer affects each other's content
   while they maintain separate indexes and marks.

   @public
   @param start {number} 
   @param end {number} 
   @return {Buffer}
   */
  this.slice =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(Buffer, j_buffer["slice()"]()) ;
    } else if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] ==='number') {
      return utils.convReturnVertxGen(Buffer, j_buffer["slice(int,int)"](__args[0], __args[1])) ;
    } else if (typeof __super_slice != 'undefined') {
      return __super_slice.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_buffer;
};

Buffer._jclass = utils.getJavaClass("io.vertx.core.buffer.Buffer");
Buffer._jtype = {accept: function(obj) {
    return Buffer._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(Buffer.prototype, {});
    Buffer.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
Buffer._create = function(jdel) {var obj = Object.create(Buffer.prototype, {});
  Buffer.apply(obj, arguments);
  return obj;
}
/**
 Create a new buffer from a string and using the specified encoding.
 The string will be encoded into the buffer using the specified encoding.

 @memberof module:vertx-js/buffer
 @param string {string} the string 
 @param enc {string} 
 @return {Buffer} the buffer
 */
Buffer.buffer =  function() {
  var __args = arguments;
  if (__args.length === 0) {
    return utils.convReturnVertxGen(Buffer, JBuffer["buffer()"]()) ;
  } else if (__args.length === 1 && typeof __args[0] ==='number') {
    return utils.convReturnVertxGen(Buffer, JBuffer["buffer(int)"](__args[0])) ;
  } else if (__args.length === 1 && typeof __args[0] === 'string') {
    return utils.convReturnVertxGen(Buffer, JBuffer["buffer(java.lang.String)"](__args[0])) ;
  } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
    return utils.convReturnVertxGen(Buffer, JBuffer["buffer(java.lang.String,java.lang.String)"](__args[0], __args[1])) ;
  }else throw new TypeError('function invoked with invalid arguments');
};

module.exports = Buffer;