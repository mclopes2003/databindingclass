/*global QUnit*/

sap.ui.define([
	"brcom.db./databindingclass/controller/Ordens.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Ordens Controller");

	QUnit.test("I should test the Ordens controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
