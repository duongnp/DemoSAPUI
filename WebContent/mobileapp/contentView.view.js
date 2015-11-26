sap.ui.jsview("mobileapp.contentView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mobileapp.contentView
	*/ 
	getControllerName : function() {
		return "mobileapp.contentView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mobileapp.contentView
	*/ 
	createContent : function(oController) {
		oList = new sap.m.List("idHdr", {
			includeItemInSelection : true,
			inset: true,
			itemPress: function(oEvent){
				oController.onSelect(oEvent);
			}
		});
		oItem = new sap.m.StandardListItem("idItems", {
			title: "{CategoryName}",
			description: "{Description}",
			type: sap.m.ListType.Navigation,
			press: function(oEvent){
				oController.handlePress(oEvent);
			}
		});
		oList.bindAggregation("items",{
			path :"/value",
			template: oItem
		})
 		return new sap.m.Page({
			title: "Categories",
			content: [
			     oList     
			]
		});
	}

});