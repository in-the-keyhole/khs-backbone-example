define(['jquery', 'backbone', 'jquerymobile' ], function($, Backbone) {
	// Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
	"use strict";

	var transition = $.mobile.defaultPageTransition;

	var WorkspaceRouter = Backbone.Router.extend({
		// bookmarkMode : false,
		id : 'workspaceRouter',
		routes : {
			"index" : "stockList",
			"stockDetail" : "stockDetail",
			"about" : "about",
			"add" : "add"	
		},

		initialize : function() {
			$('.back').on('click', function(event) {
				window.history.back();
				return false;
			});
			this.firstPage = true;
		},
		defaultRoute: function() {
			console.log('default route');	
	    },		
		
	    stockDetail: function() {
	    	require(['view/stockDetailView'], function (ThisView) {		
				var page = new ThisView();	
				$(page.el).attr({
					'data-role' : 'page',
					'data-add-back-btn' : "false"
				});
				
				page.render();
				
				$(page.el).prependTo($('body'));
				
				$.mobile.changePage($(page.el), {
					transition : 'slide'
				});										
		     });		
	    },
	    
		stockList : function() {
			
			require(['view/stockListPage'], function (ThisView) {		
				var page = new ThisView();	
				$(page.el).attr({
					'data-role' : 'page',
					'data-add-back-btn' : "false"
				});
				
				page.render();
				
				$(page.el).prependTo($('body'));
				
				$.mobile.changePage($(page.el), {
					transition : 'flip'
				});										
		     });				
		},	
		
	   about : function() {
			
			require(['view/aboutView'], function (ThisView) {		
				var page = new ThisView();	
				$(page.el).attr({
					'data-role' : 'page',
					'data-add-back-btn' : "false"
				});
				
				page.render();
				
				$(page.el).prependTo($('body'));
				
				$.mobile.changePage($(page.el), {
					transition : 'flip'
				});										
		     });				
		},	
		
		add : function() {
				
				require(['view/addStockView'], function (ThisView) {		
					var page = new ThisView();	
					$(page.el).attr({
						'data-role' : 'dialog',
						'data-add-back-btn' : "false"
					});
			
					page.render();
					
					$(page.el).prependTo($('body'));
					
					$.mobile.changePage($(page.el), {
						transition : 'pop'
					});										
			     });				
			},	
		
		
	});
	return new WorkspaceRouter();
});
