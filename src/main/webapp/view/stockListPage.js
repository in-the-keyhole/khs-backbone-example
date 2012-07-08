define([
	'jquery', 
	'backbone', 
	'underscore', 
	'model/stockListCollection', 
	'view/stockListView',
	'text!template/stock-list.html'], 
	function($, Backbone, _, StockListCollection, StockListView, stockListTemplate) {
		
		var list = {};
		return Backbone.View.extend({
			id : 'stock-list-page',
			initialize : function() {
				this.list = new StockListCollection();
				
				$("#about").on("click", function(e){
					navigate(e);					
					e.preventDefault();//don't let the original href continue with navigation
		        	e.stopPropagation();
					return false;
				});
				
				
				$("#add").on("click", function(e){
					navigate(e);					
					e.preventDefault();//don't let the original href continue with navigation
		        	e.stopPropagation();
					return false;
				});
				
				
			},
		
			
			events: {
		 
			      "click #about"  : "about",
			      "click #add"  : "add",
			    },
			 about : function(e) {	  
				    window.tc.routers.workspaceRouter.navigate("#about",true);
				    return false;
			  },
			
			  add : function(e) {	  
				    window.tc.routers.workspaceRouter.navigate("#add",true);
				    return false;
			    },    
			    			    
			render : function(eventName) {
				var compiled_template = _.template(stockListTemplate);
				var $el = $(this.el);
				$el.html(compiled_template());
				this.listView = new StockListView({
					el : $('ul', this.el),
					collection : this.list
				});
				this.listView.render();
				return this;
			},
		});

});
