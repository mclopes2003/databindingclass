sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("br.com.db.databindingclass.controller.NotFound", {
        onInit: function () {

        },

        onNavBack: function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteOrdens",{})
        }

    });
});
