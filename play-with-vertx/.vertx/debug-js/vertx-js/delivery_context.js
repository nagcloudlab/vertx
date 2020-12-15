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

/** @module vertx-js/delivery_context */
var utils = require('vertx-js/util/utils');
var Message = require('vertx-js/message');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JDeliveryContext = Java.type('io.vertx.core.eventbus.DeliveryContext');

/**

 Encapsulates a message being delivered by Vert.x as well as providing control over the message delivery.
 <p/>
 Used with event bus interceptors.

 @class
*/
var DeliveryContext = function(j_val, j_arg_0) {

  var j_deliveryContext = j_val;
  var that = this;
  var j_T = typeof j_arg_0 !== 'undefined' ? j_arg_0 : utils.unknown_jtype;
  var __super_message = this.message;
  var __super_next = this.next;
  var __super_send = this.send;
  var __super_body = this.body;
  /**

   @public

   @return {Message} The message being delivered
   */
  this.message =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(Message, j_deliveryContext["message()"](), undefined) ;
    } else if (typeof __super_message != 'undefined') {
      return __super_message.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Call the next interceptor

   @public

   */
  this.next =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_deliveryContext["next()"]();
    } else if (typeof __super_next != 'undefined') {
      return __super_next.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean} true if the message is being sent (point to point) or False if the message is being published
   */
  this.send =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_deliveryContext["send()"]() ;
    } else if (typeof __super_send != 'undefined') {
      return __super_send.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Object} the value delivered by the message (before or after being processed by the codec)
   */
  this.body =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnTypeUnknown(j_deliveryContext["body()"]()) ;
    } else if (typeof __super_body != 'undefined') {
      return __super_body.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_deliveryContext;
};

DeliveryContext._jclass = utils.getJavaClass("io.vertx.core.eventbus.DeliveryContext");
DeliveryContext._jtype = {accept: function(obj) {
    return DeliveryContext._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(DeliveryContext.prototype, {});
    DeliveryContext.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
DeliveryContext._create = function(jdel) {var obj = Object.create(DeliveryContext.prototype, {});
  DeliveryContext.apply(obj, arguments);
  return obj;
}
module.exports = DeliveryContext;