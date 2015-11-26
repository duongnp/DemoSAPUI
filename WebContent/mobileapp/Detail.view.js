sap.ui.jsview("mobileapp.Detail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mobileapp.Detail
	*/ 
	getControllerName : function() {
		return "mobileapp.Detail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mobileapp.Detail
	*/ 
	createContent : function(oController) {
		var oTable = new sap.m.Table("idPrdTbl",{
			inset : true,
			headerText: "List of Products",
			headerDesign: sap.m.ListHeaderDesign.Standard,
			mode : sap.m.ListMode.None,
			includeItemInSelection: false,
		});
		
		var oCol1 = new sap.m.Column("col1", { header: new sap.m.Label({text : "Product Name"})});
		oTable.addColumn(oCol1);
		var oCol2 = new sap.m.Column("col2", { header: new sap.m.Label({text : "Description"})});
		oTable.addColumn(oCol2);
		var oCol3 = new sap.m.Column("col3", { header: new sap.m.Label({text : "Price"})});
		oTable.addColumn(oCol3);
		
		var colItem = new sap.m.ColumnListItem("colItem", {type: "Active"});
		var txtNAME1 = new sap.m.Text("txt1", {text : "{ProductName}"});
		colItem.addCell(txtNAME1);
		var txtNAME2 = new sap.m.Text("txt2", {text : "{QuantityPerUnit}"});
		colItem.addCell(txtNAME2);
		var txtNAME3 = new sap.m.Text("txt3", {text : "{UnitPrice}"});
		colItem.addCell(txtNAME3);
		
		oTable.bindAggregation("items","/value",colItem);
		
 		return new sap.m.Page({
 			showNavButton : true,
 			navButtonPress: function(){
 				app.backMaster();
 			},
			title: "Product Pages",
			content: [
			        oTable  
			]
		});
	}

});