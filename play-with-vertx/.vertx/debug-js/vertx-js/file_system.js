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

/** @module vertx-js/file_system */
var utils = require('vertx-js/util/utils');
var AsyncFile = require('vertx-js/async_file');
var Buffer = require('vertx-js/buffer');
var FileSystemProps = require('vertx-js/file_system_props');
var FileProps = require('vertx-js/file_props');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JFileSystem = Java.type('io.vertx.core.file.FileSystem');
var OpenOptions = Java.type('io.vertx.core.file.OpenOptions');
var CopyOptions = Java.type('io.vertx.core.file.CopyOptions');

/**
 Contains a broad set of operations for manipulating files on the file system.
 <p>
 A (potential) blocking and non blocking version of each operation is provided.
 <p>
 The non blocking versions take a handler which is called when the operation completes or an error occurs.
 <p>
 @class
*/
var FileSystem = function(j_val) {

  var j_fileSystem = j_val;
  var that = this;

  var __super_copy = this.copy;
  var __super_copy = this.copy;
  var __super_copyBlocking = this.copyBlocking;
  var __super_copyRecursive = this.copyRecursive;
  var __super_copyRecursiveBlocking = this.copyRecursiveBlocking;
  var __super_move = this.move;
  var __super_move = this.move;
  var __super_moveBlocking = this.moveBlocking;
  var __super_truncate = this.truncate;
  var __super_truncateBlocking = this.truncateBlocking;
  var __super_chmod = this.chmod;
  var __super_chmodBlocking = this.chmodBlocking;
  var __super_chmodRecursive = this.chmodRecursive;
  var __super_chmodRecursiveBlocking = this.chmodRecursiveBlocking;
  var __super_chown = this.chown;
  var __super_chownBlocking = this.chownBlocking;
  var __super_props = this.props;
  var __super_propsBlocking = this.propsBlocking;
  var __super_lprops = this.lprops;
  var __super_lpropsBlocking = this.lpropsBlocking;
  var __super_link = this.link;
  var __super_linkBlocking = this.linkBlocking;
  var __super_symlink = this.symlink;
  var __super_symlinkBlocking = this.symlinkBlocking;
  var __super_unlink = this.unlink;
  var __super_unlinkBlocking = this.unlinkBlocking;
  var __super_readSymlink = this.readSymlink;
  var __super_readSymlinkBlocking = this.readSymlinkBlocking;
  var __super_delete = this.delete;
  var __super_deleteBlocking = this.deleteBlocking;
  var __super_deleteRecursive = this.deleteRecursive;
  var __super_deleteRecursiveBlocking = this.deleteRecursiveBlocking;
  var __super_mkdir = this.mkdir;
  var __super_mkdirBlocking = this.mkdirBlocking;
  var __super_mkdir = this.mkdir;
  var __super_mkdirBlocking = this.mkdirBlocking;
  var __super_mkdirs = this.mkdirs;
  var __super_mkdirsBlocking = this.mkdirsBlocking;
  var __super_mkdirs = this.mkdirs;
  var __super_mkdirsBlocking = this.mkdirsBlocking;
  var __super_readDir = this.readDir;
  var __super_readDirBlocking = this.readDirBlocking;
  var __super_readDir = this.readDir;
  var __super_readDirBlocking = this.readDirBlocking;
  var __super_readFile = this.readFile;
  var __super_readFileBlocking = this.readFileBlocking;
  var __super_writeFile = this.writeFile;
  var __super_writeFileBlocking = this.writeFileBlocking;
  var __super_open = this.open;
  var __super_openBlocking = this.openBlocking;
  var __super_createFile = this.createFile;
  var __super_createFileBlocking = this.createFileBlocking;
  var __super_createFile = this.createFile;
  var __super_createFileBlocking = this.createFileBlocking;
  var __super_exists = this.exists;
  var __super_existsBlocking = this.existsBlocking;
  var __super_fsProps = this.fsProps;
  var __super_fsPropsBlocking = this.fsPropsBlocking;
  var __super_createTempDirectory = this.createTempDirectory;
  var __super_createTempDirectoryBlocking = this.createTempDirectoryBlocking;
  var __super_createTempDirectory = this.createTempDirectory;
  var __super_createTempDirectoryBlocking = this.createTempDirectoryBlocking;
  var __super_createTempDirectory = this.createTempDirectory;
  var __super_createTempDirectoryBlocking = this.createTempDirectoryBlocking;
  var __super_createTempFile = this.createTempFile;
  var __super_createTempFileBlocking = this.createTempFileBlocking;
  var __super_createTempFile = this.createTempFile;
  var __super_createTempFileBlocking = this.createTempFileBlocking;
  var __super_createTempFile = this.createTempFile;
  var __super_createTempFileBlocking = this.createTempFileBlocking;
  /**
   Copy a file from the path <code>from</code> to path <code>to</code>, asynchronously.

   @public
   @param from {string} the path to copy from 
   @param to {string} the path to copy to 
   @param options {Object} options describing how the file should be copied 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.copy =  function() {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_fileSystem["copy(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](null, null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && (typeof __args[2] === 'object' && __args[2] != null) && typeof __args[3] === 'function') {
      j_fileSystem["copy(java.lang.String,java.lang.String,io.vertx.core.file.CopyOptions,io.vertx.core.Handler)"](__args[0], __args[1], __args[2]  != null ? new CopyOptions(new JsonObject(Java.asJSONCompatible(__args[2]))) : null, function(ar) {
        if (ar.succeeded()) {
          __args[3](null, null);
        } else {
          __args[3](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_copy != 'undefined') {
      return __super_copy.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#copy}

   @public
   @param from {string} 
   @param to {string} 
   @return {FileSystem}
   */
  this.copyBlocking =  function(from, to) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_fileSystem["copyBlocking(java.lang.String,java.lang.String)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_copyBlocking != 'undefined') {
      return __super_copyBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Copy a file from the path <code>from</code> to path <code>to</code>, asynchronously.
   <p>
   If <code>recursive</code> is <code>true</code> and <code>from</code> represents a directory, then the directory and its contents
   will be copied recursively to the destination <code>to</code>.
   <p>
   The copy will fail if the destination if the destination already exists.

   @public
   @param from {string} the path to copy from 
   @param to {string} the path to copy to 
   @param recursive {boolean} 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.copyRecursive =  function(from, to, recursive, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] ==='boolean' && typeof __args[3] === 'function') {
      j_fileSystem["copyRecursive(java.lang.String,java.lang.String,boolean,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(ar) {
        if (ar.succeeded()) {
          __args[3](null, null);
        } else {
          __args[3](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_copyRecursive != 'undefined') {
      return __super_copyRecursive.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#copyRecursive}

   @public
   @param from {string} 
   @param to {string} 
   @param recursive {boolean} 
   @return {FileSystem}
   */
  this.copyRecursiveBlocking =  function(from, to, recursive) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] ==='boolean') {
      j_fileSystem["copyRecursiveBlocking(java.lang.String,java.lang.String,boolean)"](__args[0], __args[1], __args[2]) ;
      return that;
    } else if (typeof __super_copyRecursiveBlocking != 'undefined') {
      return __super_copyRecursiveBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Move a file from the path <code>from</code> to path <code>to</code>, asynchronously.

   @public
   @param from {string} the path to copy from 
   @param to {string} the path to copy to 
   @param options {Object} options describing how the file should be copied 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.move =  function() {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_fileSystem["move(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](null, null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && (typeof __args[2] === 'object' && __args[2] != null) && typeof __args[3] === 'function') {
      j_fileSystem["move(java.lang.String,java.lang.String,io.vertx.core.file.CopyOptions,io.vertx.core.Handler)"](__args[0], __args[1], __args[2]  != null ? new CopyOptions(new JsonObject(Java.asJSONCompatible(__args[2]))) : null, function(ar) {
        if (ar.succeeded()) {
          __args[3](null, null);
        } else {
          __args[3](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_move != 'undefined') {
      return __super_move.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#move}

   @public
   @param from {string} 
   @param to {string} 
   @return {FileSystem}
   */
  this.moveBlocking =  function(from, to) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_fileSystem["moveBlocking(java.lang.String,java.lang.String)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_moveBlocking != 'undefined') {
      return __super_moveBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Truncate the file represented by <code>path</code> to length <code>len</code> in bytes, asynchronously.
   <p>
   The operation will fail if the file does not exist or <code>len</code> is less than <code>zero</code>.

   @public
   @param path {string} the path to the file 
   @param len {number} the length to truncate it to 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.truncate =  function(path, len, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      j_fileSystem["truncate(java.lang.String,long,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](null, null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_truncate != 'undefined') {
      return __super_truncate.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#truncate}

   @public
   @param path {string} 
   @param len {number} 
   @return {FileSystem}
   */
  this.truncateBlocking =  function(path, len) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] ==='number') {
      j_fileSystem["truncateBlocking(java.lang.String,long)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_truncateBlocking != 'undefined') {
      return __super_truncateBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Change the permissions on the file represented by <code>path</code> to <code>perms</code>, asynchronously.
   <p>
   The permission String takes the form rwxr-x--- as
   specified <a href="http://download.oracle.com/javase/7/docs/api/java/nio/file/attribute/PosixFilePermissions.html">here</a>.

   @public
   @param path {string} the path to the file 
   @param perms {string} the permissions string 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.chmod =  function(path, perms, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_fileSystem["chmod(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](null, null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_chmod != 'undefined') {
      return __super_chmod.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of [#chmod(String, String, Handler)] {@link FileSystem}

   @public
   @param path {string} 
   @param perms {string} 
   @return {FileSystem}
   */
  this.chmodBlocking =  function(path, perms) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_fileSystem["chmodBlocking(java.lang.String,java.lang.String)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_chmodBlocking != 'undefined') {
      return __super_chmodBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Change the permissions on the file represented by <code>path</code> to <code>perms</code>, asynchronously.<p>
   The permission String takes the form rwxr-x--- as
   specified in {<a href="http://download.oracle.com/javase/7/docs/api/java/nio/file/attribute/PosixFilePermissions.html">here</a>}.
   <p>
   If the file is directory then all contents will also have their permissions changed recursively. Any directory permissions will
   be set to <code>dirPerms</code>, whilst any normal file permissions will be set to <code>perms</code>.

   @public
   @param path {string} the path to the file 
   @param perms {string} the permissions string 
   @param dirPerms {string} the directory permissions 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.chmodRecursive =  function(path, perms, dirPerms, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      j_fileSystem["chmodRecursive(java.lang.String,java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(ar) {
        if (ar.succeeded()) {
          __args[3](null, null);
        } else {
          __args[3](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_chmodRecursive != 'undefined') {
      return __super_chmodRecursive.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#chmodRecursive}

   @public
   @param path {string} 
   @param perms {string} 
   @param dirPerms {string} 
   @return {FileSystem}
   */
  this.chmodRecursiveBlocking =  function(path, perms, dirPerms) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string') {
      j_fileSystem["chmodRecursiveBlocking(java.lang.String,java.lang.String,java.lang.String)"](__args[0], __args[1], __args[2]) ;
      return that;
    } else if (typeof __super_chmodRecursiveBlocking != 'undefined') {
      return __super_chmodRecursiveBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Change the ownership on the file represented by <code>path</code> to <code>user</code> and {code group}, asynchronously.

   @public
   @param path {string} the path to the file 
   @param user {string} the user name, <code>null</code> will not change the user name 
   @param group {string} the user group, <code>null</code> will not change the user group name 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.chown =  function(path, user, group, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && (typeof __args[1] === 'string' || __args[1] == null) && (typeof __args[2] === 'string' || __args[2] == null) && typeof __args[3] === 'function') {
      j_fileSystem["chown(java.lang.String,java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(ar) {
        if (ar.succeeded()) {
          __args[3](null, null);
        } else {
          __args[3](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_chown != 'undefined') {
      return __super_chown.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of 


   @public
   @param path {string} 
   @param user {string} 
   @param group {string} 
   @return {FileSystem}
   */
  this.chownBlocking =  function(path, user, group) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && (typeof __args[1] === 'string' || __args[1] == null) && (typeof __args[2] === 'string' || __args[2] == null)) {
      j_fileSystem["chownBlocking(java.lang.String,java.lang.String,java.lang.String)"](__args[0], __args[1], __args[2]) ;
      return that;
    } else if (typeof __super_chownBlocking != 'undefined') {
      return __super_chownBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Obtain properties for the file represented by <code>path</code>, asynchronously.
   <p>
   If the file is a link, the link will be followed.

   @public
   @param path {string} the path to the file 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.props =  function(path, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_fileSystem["props(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnVertxGen(FileProps, ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_props != 'undefined') {
      return __super_props.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#props}

   @public
   @param path {string} 
   @return {FileProps}
   */
  this.propsBlocking =  function(path) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(FileProps, j_fileSystem["propsBlocking(java.lang.String)"](__args[0])) ;
    } else if (typeof __super_propsBlocking != 'undefined') {
      return __super_propsBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Obtain properties for the link represented by <code>path</code>, asynchronously.
   <p>
   The link will not be followed.

   @public
   @param path {string} the path to the file 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.lprops =  function(path, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_fileSystem["lprops(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnVertxGen(FileProps, ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_lprops != 'undefined') {
      return __super_lprops.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#lprops}

   @public
   @param path {string} 
   @return {FileProps}
   */
  this.lpropsBlocking =  function(path) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(FileProps, j_fileSystem["lpropsBlocking(java.lang.String)"](__args[0])) ;
    } else if (typeof __super_lpropsBlocking != 'undefined') {
      return __super_lpropsBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Create a hard link on the file system from <code>link</code> to <code>existing</code>, asynchronously.

   @public
   @param link {string} the link 
   @param existing {string} the link destination 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.link =  function(link, existing, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_fileSystem["link(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](null, null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_link != 'undefined') {
      return __super_link.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#link}

   @public
   @param link {string} 
   @param existing {string} 
   @return {FileSystem}
   */
  this.linkBlocking =  function(link, existing) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_fileSystem["linkBlocking(java.lang.String,java.lang.String)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_linkBlocking != 'undefined') {
      return __super_linkBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Create a symbolic link on the file system from <code>link</code> to <code>existing</code>, asynchronously.

   @public
   @param link {string} the link 
   @param existing {string} the link destination 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.symlink =  function(link, existing, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_fileSystem["symlink(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](null, null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_symlink != 'undefined') {
      return __super_symlink.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#link}

   @public
   @param link {string} 
   @param existing {string} 
   @return {FileSystem}
   */
  this.symlinkBlocking =  function(link, existing) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_fileSystem["symlinkBlocking(java.lang.String,java.lang.String)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_symlinkBlocking != 'undefined') {
      return __super_symlinkBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Unlinks the link on the file system represented by the path <code>link</code>, asynchronously.

   @public
   @param link {string} the link 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.unlink =  function(link, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_fileSystem["unlink(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_unlink != 'undefined') {
      return __super_unlink.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#unlink}

   @public
   @param link {string} 
   @return {FileSystem}
   */
  this.unlinkBlocking =  function(link) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_fileSystem["unlinkBlocking(java.lang.String)"](__args[0]) ;
      return that;
    } else if (typeof __super_unlinkBlocking != 'undefined') {
      return __super_unlinkBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns the path representing the file that the symbolic link specified by <code>link</code> points to, asynchronously.

   @public
   @param link {string} the link 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.readSymlink =  function(link, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_fileSystem["readSymlink(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](ar.result(), null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_readSymlink != 'undefined') {
      return __super_readSymlink.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#readSymlink}

   @public
   @param link {string} 
   @return {string}
   */
  this.readSymlinkBlocking =  function(link) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_fileSystem["readSymlinkBlocking(java.lang.String)"](__args[0]) ;
    } else if (typeof __super_readSymlinkBlocking != 'undefined') {
      return __super_readSymlinkBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Deletes the file represented by the specified <code>path</code>, asynchronously.

   @public
   @param path {string} path to the file 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.delete =  function(path, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_fileSystem["delete(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_delete != 'undefined') {
      return __super_delete.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#delete}

   @public
   @param path {string} 
   @return {FileSystem}
   */
  this.deleteBlocking =  function(path) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_fileSystem["deleteBlocking(java.lang.String)"](__args[0]) ;
      return that;
    } else if (typeof __super_deleteBlocking != 'undefined') {
      return __super_deleteBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Deletes the file represented by the specified <code>path</code>, asynchronously.
   <p>
   If the path represents a directory and <code>recursive = true</code> then the directory and its contents will be
   deleted recursively.

   @public
   @param path {string} path to the file 
   @param recursive {boolean} delete recursively? 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.deleteRecursive =  function(path, recursive, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='boolean' && typeof __args[2] === 'function') {
      j_fileSystem["deleteRecursive(java.lang.String,boolean,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](null, null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_deleteRecursive != 'undefined') {
      return __super_deleteRecursive.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#deleteRecursive}

   @public
   @param path {string} 
   @param recursive {boolean} 
   @return {FileSystem}
   */
  this.deleteRecursiveBlocking =  function(path, recursive) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] ==='boolean') {
      j_fileSystem["deleteRecursiveBlocking(java.lang.String,boolean)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_deleteRecursiveBlocking != 'undefined') {
      return __super_deleteRecursiveBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Create the directory represented by <code>path</code>, asynchronously.
   <p>
   The new directory will be created with permissions as specified by <code>perms</code>.
   <p>
   The permission String takes the form rwxr-x--- as specified
   in <a href="http://download.oracle.com/javase/7/docs/api/java/nio/file/attribute/PosixFilePermissions.html">here</a>.
   <p>
   The operation will fail if the directory already exists.

   @public
   @param path {string} path to the file 
   @param perms {string} the permissions string 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.mkdir =  function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_fileSystem["mkdir(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_fileSystem["mkdir(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](null, null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_mkdir != 'undefined') {
      return __super_mkdir.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#mkdir}

   @public
   @param path {string} 
   @param perms {string} 
   @return {FileSystem}
   */
  this.mkdirBlocking =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_fileSystem["mkdirBlocking(java.lang.String)"](__args[0]) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_fileSystem["mkdirBlocking(java.lang.String,java.lang.String)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_mkdirBlocking != 'undefined') {
      return __super_mkdirBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Create the directory represented by <code>path</code> and any non existent parents, asynchronously.
   <p>
   The new directory will be created with permissions as specified by <code>perms</code>.
   <p>
   The permission String takes the form rwxr-x--- as specified
   in <a href="http://download.oracle.com/javase/7/docs/api/java/nio/file/attribute/PosixFilePermissions.html">here</a>.
   <p>
   The operation will fail if the <code>path</code> already exists but is not a directory.

   @public
   @param path {string} path to the file 
   @param perms {string} the permissions string 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.mkdirs =  function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_fileSystem["mkdirs(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_fileSystem["mkdirs(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](null, null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_mkdirs != 'undefined') {
      return __super_mkdirs.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#mkdirs}

   @public
   @param path {string} 
   @param perms {string} 
   @return {FileSystem}
   */
  this.mkdirsBlocking =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_fileSystem["mkdirsBlocking(java.lang.String)"](__args[0]) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_fileSystem["mkdirsBlocking(java.lang.String,java.lang.String)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_mkdirsBlocking != 'undefined') {
      return __super_mkdirsBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Read the contents of the directory specified by <code>path</code>, asynchronously.
   <p>
   The parameter <code>filter</code> is a regular expression. If <code>filter</code> is specified then only the paths that
   match  @{filter}will be returned.
   <p>
   The result is an array of String representing the paths of the files inside the directory.

   @public
   @param path {string} path to the directory 
   @param filter {string} the filter expression 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.readDir =  function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_fileSystem["readDir(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](ar.result(), null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_fileSystem["readDir(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](ar.result(), null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_readDir != 'undefined') {
      return __super_readDir.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#readDir}

   @public
   @param path {string} 
   @param filter {string} 
   @return {Array.<string>}
   */
  this.readDirBlocking =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_fileSystem["readDirBlocking(java.lang.String)"](__args[0]) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return j_fileSystem["readDirBlocking(java.lang.String,java.lang.String)"](__args[0], __args[1]) ;
    } else if (typeof __super_readDirBlocking != 'undefined') {
      return __super_readDirBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Reads the entire file as represented by the path <code>path</code> as a , asynchronously.
   <p>
   Do not use this method to read very large files or you risk running out of available RAM.

   @public
   @param path {string} path to the file 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.readFile =  function(path, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_fileSystem["readFile(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnVertxGen(Buffer, ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_readFile != 'undefined') {
      return __super_readFile.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#readFile}

   @public
   @param path {string} 
   @return {Buffer}
   */
  this.readFileBlocking =  function(path) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(Buffer, j_fileSystem["readFileBlocking(java.lang.String)"](__args[0])) ;
    } else if (typeof __super_readFileBlocking != 'undefined') {
      return __super_readFileBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Creates the file, and writes the specified <code>Buffer data</code> to the file represented by the path <code>path</code>,
   asynchronously.

   @public
   @param path {string} path to the file 
   @param data {Buffer} 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.writeFile =  function(path, data, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'function') {
      j_fileSystem["writeFile(java.lang.String,io.vertx.core.buffer.Buffer,io.vertx.core.Handler)"](__args[0], __args[1]._jdel, function(ar) {
        if (ar.succeeded()) {
          __args[2](null, null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_writeFile != 'undefined') {
      return __super_writeFile.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#writeFile}

   @public
   @param path {string} 
   @param data {Buffer} 
   @return {FileSystem}
   */
  this.writeFileBlocking =  function(path, data) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel) {
      j_fileSystem["writeFileBlocking(java.lang.String,io.vertx.core.buffer.Buffer)"](__args[0], __args[1]._jdel) ;
      return that;
    } else if (typeof __super_writeFileBlocking != 'undefined') {
      return __super_writeFileBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Open the file represented by <code>path</code>, asynchronously.
   <p>
   The file is opened for both reading and writing. If the file does not already exist it will be created.

   @public
   @param path {string} path to the file 
   @param options {Object} options describing how the file should be opened 
   @param handler {function} 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.open =  function(path, options, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && (typeof __args[1] === 'object' && __args[1] != null) && typeof __args[2] === 'function') {
      j_fileSystem["open(java.lang.String,io.vertx.core.file.OpenOptions,io.vertx.core.Handler)"](__args[0], __args[1]  != null ? new OpenOptions(new JsonObject(Java.asJSONCompatible(__args[1]))) : null, function(ar) {
        if (ar.succeeded()) {
          __args[2](utils.convReturnVertxGen(AsyncFile, ar.result()), null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_open != 'undefined') {
      return __super_open.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#open}

   @public
   @param path {string} 
   @param options {Object} 
   @return {AsyncFile}
   */
  this.openBlocking =  function(path, options) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && (typeof __args[1] === 'object' && __args[1] != null)) {
      return utils.convReturnVertxGen(AsyncFile, j_fileSystem["openBlocking(java.lang.String,io.vertx.core.file.OpenOptions)"](__args[0], __args[1]  != null ? new OpenOptions(new JsonObject(Java.asJSONCompatible(__args[1]))) : null)) ;
    } else if (typeof __super_openBlocking != 'undefined') {
      return __super_openBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Creates an empty file with the specified <code>path</code> and permissions <code>perms</code>, asynchronously.

   @public
   @param path {string} path to the file 
   @param perms {string} the permissions string 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.createFile =  function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_fileSystem["createFile(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_fileSystem["createFile(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](null, null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_createFile != 'undefined') {
      return __super_createFile.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#createFile}

   @public
   @param path {string} 
   @param perms {string} 
   @return {FileSystem}
   */
  this.createFileBlocking =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_fileSystem["createFileBlocking(java.lang.String)"](__args[0]) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_fileSystem["createFileBlocking(java.lang.String,java.lang.String)"](__args[0], __args[1]) ;
      return that;
    } else if (typeof __super_createFileBlocking != 'undefined') {
      return __super_createFileBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Determines whether the file as specified by the path <code>path</code> exists, asynchronously.

   @public
   @param path {string} path to the file 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.exists =  function(path, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_fileSystem["exists(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](ar.result(), null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_exists != 'undefined') {
      return __super_exists.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#exists}

   @public
   @param path {string} 
   @return {boolean}
   */
  this.existsBlocking =  function(path) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_fileSystem["existsBlocking(java.lang.String)"](__args[0]) ;
    } else if (typeof __super_existsBlocking != 'undefined') {
      return __super_existsBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns properties of the file-system being used by the specified <code>path</code>, asynchronously.

   @public
   @param path {string} path to anywhere on the filesystem 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.fsProps =  function(path, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_fileSystem["fsProps(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnVertxGen(FileSystemProps, ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_fsProps != 'undefined') {
      return __super_fsProps.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#fsProps}

   @public
   @param path {string} 
   @return {FileSystemProps}
   */
  this.fsPropsBlocking =  function(path) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(FileSystemProps, j_fileSystem["fsPropsBlocking(java.lang.String)"](__args[0])) ;
    } else if (typeof __super_fsPropsBlocking != 'undefined') {
      return __super_fsPropsBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Creates a new directory in the directory provided by the path <code>path</code>, using the given
   prefix to generate its name, asynchronously.
   <p>
   The new directory will be created with permissions as specified by <code>perms</code>.
   </p>
   The permission String takes the form rwxr-x--- as specified
   in <a href="http://download.oracle.com/javase/7/docs/api/java/nio/file/attribute/PosixFilePermissions.html">here</a>.

   <p>
   As with the <code>File.createTempFile</code> methods, this method is only
   part of a temporary-file facility.A #addShutdownHook shutdown-hook,
   or the deleteOnExit mechanism may be used to delete the directory automatically.
   </p>

   @public
   @param dir {string} the path to directory in which to create the directory 
   @param prefix {string} the prefix string to be used in generating the directory's name; may be <code>null</code> 
   @param perms {string} the permissions string 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.createTempDirectory =  function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_fileSystem["createTempDirectory(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](ar.result(), null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_fileSystem["createTempDirectory(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](ar.result(), null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      j_fileSystem["createTempDirectory(java.lang.String,java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(ar) {
        if (ar.succeeded()) {
          __args[3](ar.result(), null);
        } else {
          __args[3](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_createTempDirectory != 'undefined') {
      return __super_createTempDirectory.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#createTempDirectory}

   @public
   @param dir {string} 
   @param prefix {string} 
   @param perms {string} 
   @return {string}
   */
  this.createTempDirectoryBlocking =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_fileSystem["createTempDirectoryBlocking(java.lang.String)"](__args[0]) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return j_fileSystem["createTempDirectoryBlocking(java.lang.String,java.lang.String)"](__args[0], __args[1]) ;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string') {
      return j_fileSystem["createTempDirectoryBlocking(java.lang.String,java.lang.String,java.lang.String)"](__args[0], __args[1], __args[2]) ;
    } else if (typeof __super_createTempDirectoryBlocking != 'undefined') {
      return __super_createTempDirectoryBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Creates a new file in the directory provided by the path <code>dir</code>, using the given
   prefix and suffix to generate its name, asynchronously.
   <p>
   The new directory will be created with permissions as specified by <code>perms</code>.
   </p>
   The permission String takes the form rwxr-x--- as specified
   in <a href="http://download.oracle.com/javase/7/docs/api/java/nio/file/attribute/PosixFilePermissions.html">here</a>.

   <p>
   As with the <code>File.createTempFile</code> methods, this method is only
   part of a temporary-file facility.A #addShutdownHook shutdown-hook,
   or the deleteOnExit mechanism may be used to delete the directory automatically.
   </p>

   @public
   @param dir {string} the path to directory in which to create the directory 
   @param prefix {string} the prefix string to be used in generating the directory's name; may be <code>null</code> 
   @param suffix {string} the suffix string to be used in generating the file's name; may be <code>null</code>, in which case "<code>.tmp</code>" is used 
   @param perms {string} the permissions string 
   @param handler {function} the handler that will be called on completion 
   @return {FileSystem} a reference to this, so the API can be used fluently
   */
  this.createTempFile =  function() {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_fileSystem["createTempFile(java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](ar.result(), null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      j_fileSystem["createTempFile(java.lang.String,java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(ar) {
        if (ar.succeeded()) {
          __args[3](ar.result(), null);
        } else {
          __args[3](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'string' && typeof __args[4] === 'function') {
      j_fileSystem["createTempFile(java.lang.String,java.lang.String,java.lang.String,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], __args[3], function(ar) {
        if (ar.succeeded()) {
          __args[4](ar.result(), null);
        } else {
          __args[4](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_createTempFile != 'undefined') {
      return __super_createTempFile.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Blocking version of {@link FileSystem#createTempFile}

   @public
   @param dir {string} 
   @param prefix {string} 
   @param suffix {string} 
   @param perms {string} 
   @return {string}
   */
  this.createTempFileBlocking =  function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return j_fileSystem["createTempFileBlocking(java.lang.String,java.lang.String)"](__args[0], __args[1]) ;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string') {
      return j_fileSystem["createTempFileBlocking(java.lang.String,java.lang.String,java.lang.String)"](__args[0], __args[1], __args[2]) ;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'string') {
      return j_fileSystem["createTempFileBlocking(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"](__args[0], __args[1], __args[2], __args[3]) ;
    } else if (typeof __super_createTempFileBlocking != 'undefined') {
      return __super_createTempFileBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_fileSystem;
};

FileSystem._jclass = utils.getJavaClass("io.vertx.core.file.FileSystem");
FileSystem._jtype = {accept: function(obj) {
    return FileSystem._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(FileSystem.prototype, {});
    FileSystem.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
FileSystem._create = function(jdel) {var obj = Object.create(FileSystem.prototype, {});
  FileSystem.apply(obj, arguments);
  return obj;
}
module.exports = FileSystem;