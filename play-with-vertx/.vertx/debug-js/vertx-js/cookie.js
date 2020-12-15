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

/** @module vertx-js/cookie */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JCookie = Java.type('io.vertx.core.http.Cookie');

/**
 Represents an HTTP Cookie.
 <p>
 All cookies must have a name and a value and can optionally have other fields set such as path, domain, etc.

 @class
*/
var Cookie = function(j_val) {

  var j_cookie = j_val;
  var that = this;

  var __super_cookie = this.cookie;
  var __super_getName = this.getName;
  var __super_getValue = this.getValue;
  var __super_setValue = this.setValue;
  var __super_setDomain = this.setDomain;
  var __super_getDomain = this.getDomain;
  var __super_setPath = this.setPath;
  var __super_getPath = this.getPath;
  var __super_setMaxAge = this.setMaxAge;
  var __super_setSecure = this.setSecure;
  var __super_isSecure = this.isSecure;
  var __super_setHttpOnly = this.setHttpOnly;
  var __super_isHttpOnly = this.isHttpOnly;
  var __super_setSameSite = this.setSameSite;
  var __super_getSameSite = this.getSameSite;
  var __super_encode = this.encode;
  /**

   @public

   @return {string} the name of this cookie
   */
  this.getName =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_cookie["getName()"]() ;
    } else if (typeof __super_getName != 'undefined') {
      return __super_getName.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the value of this cookie
   */
  this.getValue =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_cookie["getValue()"]() ;
    } else if (typeof __super_getValue != 'undefined') {
      return __super_getValue.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the value of this cookie

   @public
   @param value {string} The value to set 
   @return {Cookie} a reference to this, so the API can be used fluently
   */
  this.setValue =  function(value) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_cookie["setValue(java.lang.String)"](__args[0]) ;
      return that;
    } else if (typeof __super_setValue != 'undefined') {
      return __super_setValue.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the domain of this cookie

   @public
   @param domain {string} The domain to use 
   @return {Cookie} a reference to this, so the API can be used fluently
   */
  this.setDomain =  function(domain) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'string' || __args[0] == null)) {
      j_cookie["setDomain(java.lang.String)"](__args[0]) ;
      return that;
    } else if (typeof __super_setDomain != 'undefined') {
      return __super_setDomain.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the domain for the cookie
   */
  this.getDomain =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_cookie["getDomain()"]() ;
    } else if (typeof __super_getDomain != 'undefined') {
      return __super_getDomain.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the path of this cookie.

   @public
   @param path {string} The path to use for this cookie 
   @return {Cookie} a reference to this, so the API can be used fluently
   */
  this.setPath =  function(path) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'string' || __args[0] == null)) {
      j_cookie["setPath(java.lang.String)"](__args[0]) ;
      return that;
    } else if (typeof __super_setPath != 'undefined') {
      return __super_setPath.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the path for this cookie
   */
  this.getPath =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_cookie["getPath()"]() ;
    } else if (typeof __super_getPath != 'undefined') {
      return __super_getPath.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the maximum age of this cookie in seconds.
   If an age of <code>0</code> is specified, this cookie will be
   automatically removed by browser because it will expire immediately.
   If MIN_VALUE is specified, this cookie will be removed when the
   browser is closed.
   If you don't set this the cookie will be a session cookie and be removed when the browser is closed.

   @public
   @param maxAge {number} The maximum age of this cookie in seconds 
   @return {Cookie}
   */
  this.setMaxAge =  function(maxAge) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_cookie["setMaxAge(long)"](__args[0]) ;
      return that;
    } else if (typeof __super_setMaxAge != 'undefined') {
      return __super_setMaxAge.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the security getStatus of this cookie

   @public
   @param secure {boolean} True if this cookie is to be secure, otherwise false 
   @return {Cookie} a reference to this, so the API can be used fluently
   */
  this.setSecure =  function(secure) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      j_cookie["setSecure(boolean)"](__args[0]) ;
      return that;
    } else if (typeof __super_setSecure != 'undefined') {
      return __super_setSecure.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean} the security status of this cookie
   */
  this.isSecure =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_cookie["isSecure()"]() ;
    } else if (typeof __super_isSecure != 'undefined') {
      return __super_isSecure.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Determines if this cookie is HTTP only.
   If set to true, this cookie cannot be accessed by a client
   side script. However, this works only if the browser supports it.
   For for information, please look
   <a href="http://www.owasp.org/index.php/HTTPOnly">here</a>.

   @public
   @param httpOnly {boolean} True if the cookie is HTTP only, otherwise false. 
   @return {Cookie}
   */
  this.setHttpOnly =  function(httpOnly) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      j_cookie["setHttpOnly(boolean)"](__args[0]) ;
      return that;
    } else if (typeof __super_setHttpOnly != 'undefined') {
      return __super_setHttpOnly.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean} the http only status of this cookie
   */
  this.isHttpOnly =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_cookie["isHttpOnly()"]() ;
    } else if (typeof __super_isHttpOnly != 'undefined') {
      return __super_isHttpOnly.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the same site of this cookie.

   @public
   @param policy {Object} The policy should be one of <a href="../../enums.html#CookieSameSite">CookieSameSite</a>. 
   @return {Cookie} a reference to this, so the API can be used fluently
   */
  this.setSameSite =  function(policy) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_cookie["setSameSite(io.vertx.core.http.CookieSameSite)"](io.vertx.core.http.CookieSameSite.valueOf(__args[0])) ;
      return that;
    } else if (typeof __super_setSameSite != 'undefined') {
      return __super_setSameSite.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Object} the SameSite policy of this cookie
   */
  this.getSameSite =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnEnum(j_cookie["getSameSite()"]()) ;
    } else if (typeof __super_getSameSite != 'undefined') {
      return __super_getSameSite.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Encode the cookie to a string. This is what is used in the Set-Cookie header

   @public

   @return {string} the encoded cookie
   */
  this.encode =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_cookie["encode()"]() ;
    } else if (typeof __super_encode != 'undefined') {
      return __super_encode.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_cookie;
};

Cookie._jclass = utils.getJavaClass("io.vertx.core.http.Cookie");
Cookie._jtype = {accept: function(obj) {
    return Cookie._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(Cookie.prototype, {});
    Cookie.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
Cookie._create = function(jdel) {var obj = Object.create(Cookie.prototype, {});
  Cookie.apply(obj, arguments);
  return obj;
}
/**
 Create a new cookie

 @memberof module:vertx-js/cookie
 @param name {string} the name of the cookie 
 @param value {string} the cookie value 
 @return {Cookie} the cookie
 */
Cookie.cookie =  function(name, value) {
  var __args = arguments;
  if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
    return utils.convReturnVertxGen(Cookie, JCookie["cookie(java.lang.String,java.lang.String)"](__args[0], __args[1])) ;
  }else throw new TypeError('function invoked with invalid arguments');
};

module.exports = Cookie;