(function() {
	"use strict";
	window.tc={};
	require.config({
		paths : {
			'backbone' : 'libs/AMDbackbone-0.5.3',
			'underscore' : 'libs/underscore-1.2.2',
			'text' : 'libs/require/text',
			'jquery' : 'libs/jquery-1.7.2',
			'jquerymobile' : 'libs/jquery.mobile-1.1.0-rc.2',
			'sherpa' : 'libs/sherpa'
		},
		baseUrl : ''
		
	});

	require(['require', 'backbone', 'jquery', 'underscore'], function(require, Backbone, $, _) {
		// framework loaded
		require(['require', 'jquerymobile', 'app'], function(require) {

			// Global overrides to disable hashchange listening
			// (as opposed to using urlHistory.listeningEnabled)
			// This makes it easier to focus on using Backbone's own
			// routing:
			$('[data-role="page"]').live('pagecreate', function() {
				$.mobile.ajaxEnabled = false;
			    $.mobile.linkBindingEnabled = false;
			    $.mobile.hashListeningEnabled = false;
			    
			    // disable pushState because it messes with the Router
		        $.mobile.pushStateEnabled = false;
		        $.mobile.changePage.defaults.changeHash = false;
			 });
			 
		   // Remove page from DOM when it's being replaced
		    $('div[data-role="page"]').live('pagehide', function (event, ui) {
		        $(event.currentTarget).remove();
		    });
		});
	});
})();
