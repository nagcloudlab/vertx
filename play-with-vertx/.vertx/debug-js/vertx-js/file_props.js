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

/** @module vertx-js/file_props */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JFileProps = Java.type('io.vertx.core.file.FileProps');

/**
 Represents properties of a file on the file system.
 <p>

 @class
*/
var FileProps = function(j_val) {

  var j_fileProps = j_val;
  var that = this;

  var __super_creationTime = this.creationTime;
  var __super_lastAccessTime = this.lastAccessTime;
  var __super_lastModifiedTime = this.lastModifiedTime;
  var __super_isDirectory = this.isDirectory;
  var __super_isOther = this.isOther;
  var __super_isRegularFile = this.isRegularFile;
  var __super_isSymbolicLink = this.isSymbolicLink;
  var __super_size = this.size;
  /**
   The date the file was created

   @public

   @return {number}
   */
  this.creationTime =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_fileProps["creationTime()"]() ;
    } else if (typeof __super_creationTime != 'undefined') {
      return __super_creationTime.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   The date the file was last accessed

   @public

   @return {number}
   */
  this.lastAccessTime =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_fileProps["lastAccessTime()"]() ;
    } else if (typeof __super_lastAccessTime != 'undefined') {
      return __super_lastAccessTime.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   The date the file was last modified

   @public

   @return {number}
   */
  this.lastModifiedTime =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_fileProps["lastModifiedTime()"]() ;
    } else if (typeof __super_lastModifiedTime != 'undefined') {
      return __super_lastModifiedTime.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Is the file a directory?

   @public

   @return {boolean}
   */
  this.isDirectory =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_fileProps["isDirectory()"]() ;
    } else if (typeof __super_isDirectory != 'undefined') {
      return __super_isDirectory.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Is the file some other type? (I.e. not a directory, regular file or symbolic link)

   @public

   @return {boolean}
   */
  this.isOther =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_fileProps["isOther()"]() ;
    } else if (typeof __super_isOther != 'undefined') {
      return __super_isOther.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Is the file a regular file?

   @public

   @return {boolean}
   */
  this.isRegularFile =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_fileProps["isRegularFile()"]() ;
    } else if (typeof __super_isRegularFile != 'undefined') {
      return __super_isRegularFile.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Is the file a symbolic link?

   @public

   @return {boolean}
   */
  this.isSymbolicLink =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_fileProps["isSymbolicLink()"]() ;
    } else if (typeof __super_isSymbolicLink != 'undefined') {
      return __super_isSymbolicLink.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   The size of the file, in bytes

   @public

   @return {number}
   */
  this.size =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_fileProps["size()"]() ;
    } else if (typeof __super_size != 'undefined') {
      return __super_size.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_fileProps;
};

FileProps._jclass = utils.getJavaClass("io.vertx.core.file.FileProps");
FileProps._jtype = {accept: function(obj) {
    return FileProps._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(FileProps.prototype, {});
    FileProps.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
FileProps._create = function(jdel) {var obj = Object.create(FileProps.prototype, {});
  FileProps.apply(obj, arguments);
  return obj;
}
module.exports = FileProps;