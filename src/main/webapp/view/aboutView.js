define([
	'jquery', 
	'backbone', 
	'underscore', 
	'text!template/about.html'], 
	function($, Backbone, _, template) {
		
		var list = {};
		return Backbone.View.extend({
			id : 'about-page',
			initialize : function() {
				this.model = window.tc.routers.workspaceRouter.ticker;
				
				$("a[href]").on("click", function(e){				
					navigate(e);					
					e.preventDefault();//don't let the original href continue with navigation
		        	e.stopPropagation();
					return false;
				});
									
			},
			render : function(eventName) {
				var compiled_template = _.template(template);
				var $el = $(this.el);	
				$el.html(compiled_template() );								
				return this;
			},
			
			events: {
			      "click a[href]" : "navigate",
			    },
			
				
			navigate : function(e){			  
			    	window.stock.routers.workspaceRouter.navigate("#index",true);
			    	return false;
			}
			
			
			
		});


});
