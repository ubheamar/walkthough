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
            recipient : {
               name : "World"
            },
         };
         var oModel = new JSONModel(oDummyData);
         this.getView().setModel(oModel,"abcModel");
         var oResourceModel = new ResourceModel({
             bundleName: "ui5.walkthrough.i18n.i18n",
             supportedLocales: ["de", "fr","en"],
             fallbackLocale: "en"
         });
         this.getView().setModel(oResourceModel,"i18n");
       },
       onLiveChange : function(oEvent){
          
       },
       onShowHello() {
          //Step 1: Get View
          var oView = this.getView();
          //Step 2: Get The JSON Model from attached View
          var oJsonModel = oView.getModel("abcModel");
          //Step 3: We have read JSON Model property
          var sName = oJsonModel.getProperty("/recipient/name")
          var oResourceModel = this.getView().getModel("i18n");
          var oResourceBundle = oResourceModel.getResourceBundle();
          var sText = oResourceBundle.getText("helloMsg",[sName])

          MessageToast.show(sText)
          
       }
    });
 });