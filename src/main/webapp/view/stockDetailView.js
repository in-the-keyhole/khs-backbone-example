define([
	'jquery', 
	'backbone', 
	'underscore', 
	'model/stockListCollection', 
	'text!template/stockDetail.html'], 
	function($, Backbone, _, stockListCollection, template) {
		
		var list = {};
		return Backbone.View.extend({
			id : 'stock-detail-page',
			initialize : function() {
				this.model = window.stock.routers.workspaceRouter.ticker;
				
				$("back").on("click", function(e){				
					back(e);					
					e.preventDefault();//don't let the original href continue with navigation
		        	e.stopPropagation();
					return false;
				});
				
				$("remove").on("click", function(e){				
					remove(e);					
					e.preventDefault();//don't let the original href continue with navigation
		        	e.stopPropagation();
					return false;
				});
				
									
			},
			render : function(eventName) {
				var compiled_template = _.template(template);
				var $el = $(this.el);	
				$el.html(compiled_template(this.model.toJSON()) );								
				return this;
			},
			
			events: {
			      "click #back" : "back",
			      "click #remove" : "remove"
			    },
			
				
			back : function(e){			  
			    	window.stock.routers.workspaceRouter.navigate("#index",true);
			    	return false;
			},
			    
			remove : function(e){	
				
				  var list = new stockListCollection();
			      list.localRemove(this.model);
			      window.stock.routers.workspaceRouter.navigate("#index",true);
			    	return false;
			}    
			    
			    
			
			
			
		});


});
