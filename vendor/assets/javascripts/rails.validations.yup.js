/*!
 * Client Side Validations Yup JS (Default) - v0.0.1 (https://github.com/DavyJonesLocker/client_side_validations-yup)
 * Copyright (c) 2020 Geremia Taglialatela
 * Licensed under MIT (https://opensource.org/licenses/mit-license.php)
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery'), require('@client-side-validations/client-side-validations')) :
	typeof define === 'function' && define.amd ? define(['jquery', '@client-side-validations/client-side-validations'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.$, global.ClientSideValidations));
}(this, (function ($, ClientSideValidations) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var $__default = /*#__PURE__*/_interopDefaultLegacy($);
	var ClientSideValidations__default = /*#__PURE__*/_interopDefaultLegacy(ClientSideValidations);

	console.log($__default['default']);
	console.log(ClientSideValidations__default['default']);

})));
