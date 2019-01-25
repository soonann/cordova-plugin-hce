var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
/**
 * @name hce
 * @description
 * HCE Cordova Wrapper
 *
 * @usage
 * ```typescript
 * import { hce } from '@ionic-native/hce';
 *
 *
 * constructor(private hce: hce) { }
 *
 * ...
 *
 * function onCommand(command){
 *   var commandAsBytes = new Uint8Array(command);
 *   var commandAsString = hce.util.byteArrayToHexString(commandAsBytes);
 *
 *   // do something with the command
 *
 *   // send the response
 *   hce.sendReponse(commandResponse);
 * }
 * this.hce.registerCommandCallback().then(onCommand);
 *
 * ```
 */
var HCE = (function (_super) {
    __extends(HCE, _super);
    function HCE() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Registers command receiver.
     * @param onCommand {HCECommandEvent} The event handler.
     * @param fail {Function} Error event handler.
     *
     */
    /**
       * Registers command receiver.
       * @param onCommand {HCECommandEvent} The event handler.
       * @param fail {Function} Error event handler.
       *
       */
    HCE.prototype.registerCommandCallback = /**
       * Registers command receiver.
       * @param onCommand {HCECommandEvent} The event handler.
       * @param fail {Function} Error event handler.
       *
       */
    function (onCommand, fail) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * Registers Deactivated receiver.
     * @param ok {HCEDeactivatedEvent} Success event handler.
     * @param fail {Function} Error event handler.
     *
     */
    /**
       * Registers Deactivated receiver.
       * @param ok {HCEDeactivatedEvent} Success event handler.
       * @param fail {Function} Error event handler.
       *
       */
    HCE.prototype.registerDeactivatedCallback = /**
       * Registers Deactivated receiver.
       * @param ok {HCEDeactivatedEvent} Success event handler.
       * @param fail {Function} Error event handler.
       *
       */
    function (ok, fail) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * Sends response APDU.
     * @param response {Uint8Array} Response
     * @param success {string} Success Callback.
     * @param success {string} Failure Callback.
     *
     */
    /**
       * Sends response APDU.
       * @param response {Uint8Array} Response
       * @param success {string} Success Callback.
       * @param success {string} Failure Callback.
       *
       */
    HCE.prototype.sendResponse = /**
       * Sends response APDU.
       * @param response {Uint8Array} Response
       * @param success {string} Success Callback.
       * @param success {string} Failure Callback.
       *
       */
    function (response, success, failure) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    HCE.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", void 0)
    ], HCE.prototype, "registerCommandCallback", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", void 0)
    ], HCE.prototype, "registerDeactivatedCallback", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Uint8Array, Function, Function]),
        __metadata("design:returntype", void 0)
    ], HCE.prototype, "sendResponse", null);
    /**
     * @name hce
     * @description
     * HCE Cordova Wrapper
     *
     * @usage
     * ```typescript
     * import { hce } from '@ionic-native/hce';
     *
     *
     * constructor(private hce: hce) { }
     *
     * ...
     *
     * function onCommand(command){
     *   var commandAsBytes = new Uint8Array(command);
     *   var commandAsString = hce.util.byteArrayToHexString(commandAsBytes);
     *
     *   // do something with the command
     *
     *   // send the response
     *   hce.sendReponse(commandResponse);
     * }
     * this.hce.registerCommandCallback().then(onCommand);
     *
     * ```
     */
    HCE = __decorate([
        Plugin({
            pluginName: 'hce',
            plugin: 'cordova-plugin-hce',
            pluginRef: 'hce',
            repo: 'https://github.com/don/cordova-plugin-hce',
            install: '',
            installVariables: ['AID_FILTER'],
            platforms: ['Android']
        })
    ], HCE);
    return HCE;
}(IonicNativePlugin));
export { HCE };
//# sourceMappingURL=index.js.map