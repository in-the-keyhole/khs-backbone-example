define([
	'jquery', 
	'backbone', 
	'underscore', 
	'model/stockListCollection', 
	'text!template/addStock.html'
	], 
	function($, Backbone, _, stockListCollection, template) {
		
		var list = {};
		return Backbone.View.extend({
			id : 'add-stock-dlg',
			initialize : function() {
				
				this.list = new stockListCollection();
				this.model = window.stock.routers.workspaceRouter.ticker;
				
				$("cancel").on("click", function(e){				
					navigate(e);					
					e.preventDefault();//don't let the original href continue with navigation
		        	e.stopPropagation();
					return false;
				});
				
				
				$("ok").on("click", function(e){				
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
			      "click #ok" : "ok",
			      "click #cancel" : "cancel",
			    },
			
				
			ok : function(e){			  				
				var ticker = $("#ticker").val();
				var url = 'sherpa?endpoint=StockService&action=quote&ticker='+ticker+'&callback=?';
				$.getJSON(url,
				        function(data) {
						  
					      if (data.ticker) {
						   var list = new stockListCollection();
					       list.add(data);
					       list.localSave(list.models);
					      } else {
					    	  alert('ticker not found');
					      } 
							window.stock.routers.workspaceRouter.navigate("#index",true);
				          });		
				
			    return false;
			},
			    
			 cancel : function(e){			  
			        
				    window.stock.routers.workspaceRouter.navigate("#index",true);
			    	return false;
			}
			
				
		});


});




