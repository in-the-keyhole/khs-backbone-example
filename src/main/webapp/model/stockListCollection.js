define(['jquery', 'backbone', 'underscore', 'model/stockItemModel'], 
function($, Backbone, _, StockListItem) {
	return Backbone.Collection.extend({
		model : StockListItem,
		url : 'sherpa?endpoint=StockService&action=quotes&callback=?',
		initialize : function() {
			$.mobile.showPageLoadingMsg();
			console.log('findScripts url:' + this.url);
			var data = this.localGet();
			if (data == null) {
				this.loadStocks();
			} else {
				console.log('local data present..');
				this.reset(data);
			}
		},
		loadStocks : function() {
			var self = this;
			$.getJSON(this.url, {
				}).success(function(data, textStatus, xhr) {
					console.log('stock list get json success');
					console.log(JSON.stringify(data.scripts));
					self.reset(data);
					self.localSave(data);
				}).error(function(data, textStatus, xhr) {
					console.log('error');
					console.log("data - " + JSON.stringify(data));
					console.log("textStatus - " + textStatus);
					console.log("xhr - " + JSON.stringify(xhr));
					var data = self.localGet();
					self.reset(data);
					self.localSave(data);
					console.log('Getting data from local storage'+data);
					$.mobile.hidePageLoadingMsg();
					
				}).complete(function() {
					console.log('json request complete');
					$.mobile.hidePageLoadingMsg();
				});
		},
		localSave : function(data) {
			var d = JSON.stringify(data);
			localStorage.setItem('STOCKS', d);
		},
		localGet : function() {			
			var d = localStorage.getItem('STOCKS');
		    data = JSON.parse(d);
		    return data;
	   },
	   localRemove : function(model){  
		   var target = this.models;
		   var f = function(m) { 	  
		   return m.toJSON().ticker == model.toJSON().ticker};
		   var result = _.reject(target,f);
		   this.localSave(result);
	   }
	   
				
	});
});
