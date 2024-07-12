sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
 ], (Controller,MessageToast,JSONModel) => {
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
       },
       onLiveChange : function(oEvent){
          
       },
       onShowHello() {
          MessageToast.show("Hello World")
          
       }
    });
 });