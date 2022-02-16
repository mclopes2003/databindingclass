sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("br.com.db.databindingclass.controller.Ordens", {
			onInit: function () {

            },
            
            onUpdateFinished: function(oEvent){
                debugger;
                var sTitle, oTable = oEvent.getSource();
                var oTotalItems = oEvent.getParameter("total");

                if(oTotalItems && oTable.getBinding("items").isLengtFinal()){
                    sTitle = "Items (" + oTotalItems + ")";
                }else{
                    sTitle = "Items (0)";
                }
                oTable.setHeaderText(sTitle);            
            },
            
            onListItemPress: function(evt) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                var selectedIdProd = evt.getSource().getBindingContext().getProperty("ProductID");

                oRouter.navTo("Produto",{
                    idProd:selectedIdProd
                });
            }
		});
	});
