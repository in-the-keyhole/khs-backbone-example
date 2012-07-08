define([
		'jquery',
		'backbone',
		'underscore', 
		'view/stockListItemView',
		],
	function($, Backbone, _, StockListItemView){
		return Backbone.View.extend({
			initialize : function() {
				this.collection.bind("reset", this.render, this);
				
				$('#about').on("click", function(e){
					about(e);					
					e.preventDefault();//don't let the original href continue with navigation
		        	e.stopPropagation();
					return false;
				});
				
			},
			
			events: {
			      "click #about" : "about", 
			    }, 
			
			about: function(e) {
				alert(e);
			} ,   
			render : function(eventName) {
				$(this.el).empty();
				_.each(this.collection.models, function(stockListItem) {
					$(this.el).append(new StockListItemView({
						model : stockListItem,
					}).render().el);
				}, this);
				$('#tcStockList').listview('refresh');		
				
				return this;
			}
		});
});