sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
 ], (Controller,MessageToast,JSONModel,ResourceModel) => {
    "use strict";
 
    return Controller.extend("ui5.walkthrough.controller.App", {
       onInit : function(){
           // set data model on view

         const oDummyData = {
            busy : false,
            recipient : {
               name : "World"
            },
         };
         var oModel = this.getOwnerComponent().getModel("mainModel");
         oModel.setData(oDummyData)
         //var oModel = new JSONModel(oDummyData);

        // this.getView().setModel(oModel,"abcModel");
         
       },
       onLiveChange : function(oEvent){
          
       },
       onShowHello() {
          //Step 1: Get View
          var oView = this.getView();
          //Step 2: Get The JSON Model from attached View
          var oJsonModel = oView.getModel("mainModel");
          oJsonModel.setProperty("/busy",true)
          //Step 3: We have read JSON Model property
          var sName = oJsonModel.getProperty("/recipient/name")
          var oResourceModel = this.getView().getModel("i18n");
          var oResourceBundle = oResourceModel.getResourceBundle();
          var sText = oResourceBundle.getText("helloMsg",[sName])

          MessageToast.show(sText)
          
       }
    });
 });