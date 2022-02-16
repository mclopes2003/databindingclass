sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("br.com.db.databindingclass.controller.Produto", {
        onInit: function () {

            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("Produto").attachMatched(this.onRoute, this);


        },

        onRoute: function(evt){
            var oArgs = evt.getParameter("arguments");
            var oView = this.getView();
            var sURL  = "/ProductSet('" + oArgs.idProd + "')";

            //var o_Principal = this.getView().getModel();

            //var obj = new JSONModel()
            //this.getView().getModel(obj, "Fornecedor");
            
            //var o_Fornecedor = this.getView().getModel("Fornecedor");
            //var o_Produtos = this.getView().getModel("Produtos")

            oView.bindElement({
                path: sURL,
                //model: "Fornecedor",
                events: {
                    change: this.onBindingCheck.bind(this),
                    dataRequested: function(){
                        oView.setBusy(true);                        
                    },
                    dataReceived: function(response){
                        oView.setBusy(false);
                    }
                }
            });

        },

        onBeforeRendering: function(evt){
            this.getView().byId("form0").bindElement("ToSupplier");

        },

        onNavBack: function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteOrdens",{});
                        
        },

        onBindingCheck: function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

            var oView = this.getView();
            var oElementBinding = oView.getElementBinding();

            if(!oElementBinding.getBoundContext()){
                oRouter.getTargets().display("NotFound");
                return;
            }
        }

    });
});
