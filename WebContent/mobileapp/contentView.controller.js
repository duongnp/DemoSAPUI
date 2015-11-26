sap.ui.controller("mobileapp.contentView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf mobileapp.contentView
*/
	onInit: function() {
		var sUrl = "http://services.odata.org/Northwind/Northwind.svc/Categories";
		var omodel = new sap.ui.model.json.JSONModel(sUrl);
		sap.ui.getCore().byId("idHdr").setModel(omodel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf mobileapp.contentView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf mobileapp.contentView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf mobileapp.contentView
*/
//	onExit: function() {
//
//	},
	
	onSelect: function(oEvent){
		var oItemSelect = oEvent.getParameter("listItem");
		var oContext = oItemSelect.getBindingContext();
		var CatID = oContext.getProperty("CategoryID");
		var sUrl = "http://services.odata.org/Northwind/Northwind.svc/Categories(" + CatID + ")/Products?$format=json";
		var oModel = new sap.ui.model.json.JSONModel(sUrl);
		sap.ui.getCore().byId("idPrdTbl").setModel(oModel);
		sap.ui.getCore().byId("splitApp").toDetail(detail);
	},
	
	handleSwipe: function(e) {   // register swipe event
        var oSwipeListItem = e.getParameter("listItem"),    // get swiped list item from event
            oSwipeContent = e.getParameter("swipeContent"); // get swiped content from event

        // Check swiped list item if it is already approved or not
        if (oSwipeListItem.data("approved")) {    
            // List item is approved, change swipeContent(button) text to Disapprove and type to Reject
            oSwipeContent.setText("Disapprove").setType("Reject");  
        } else  {
            // List item is not approved, change swipeContent(button) text to Approve and type to Accept
            oSwipeContent.setText("Approve").setType("Accept");     
        }
        // get which control inside the list item fired swipe event
        var oSrcControl = e.getParameter("srcControl");

        // check if the event is coming from Input
        if (oSrcControl instanceof sap.m.Input) {
            e.preventDefault();   // cancel swipe
        }
    }
});