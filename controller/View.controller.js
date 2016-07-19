sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("rmch.controller.View", {
		onClick: function() {
			$.get("./rmcIP.json", function(data) {
				window.open('https://' + data.id + '/rmc-ui/#/login', '_blank', 'toolbar=0,location=0,menubar=0');
			});
		}

	});

});