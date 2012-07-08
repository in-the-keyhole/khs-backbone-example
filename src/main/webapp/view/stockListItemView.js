define([
		'jquery',
		'backbone',
		'underscore', 
		'text!template/stock-list-item.html'], 
	function($, Backbone, _, template){
		
		return Backbone.View.extend({
			tagName : "li",
			initialize : function() {
				this.model.bind("change", this.render, this);
				this.model.bind("destroy", this.close, this);
				var $this = this;
				$("#ticker").on("click", function(e){
					navigate(e);					
					e.preventDefault();//don't let the original href continue with navigation
		        	e.stopPropagation();
					return false;
				});
				
					
			},
			render : function(eventName) {
				var compiled_template = _.template(template)
				var $el = $(this.el);				
				$el.html(compiled_template(this.model.toJSON()));
				return this;
			},
			events: {
		      "click #ticker" : "navigate"
		    },

		    navigate : function(e){
		        window.tc.routers.workspaceRouter.ticker = this.model;
		    	window.tc.routers.workspaceRouter.navigate("#stockDetail",true);
		    	return false;
		    }
		});
});