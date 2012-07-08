(function($){
	
	$.sherpa = {
		defaults: {url:'sherpa', dataType:'json', endpoint:null, method:null, token:null, user:null},
		authenticate: function(user, password, callback) {
			$.sherpa.call({method:'authenticate', params: {userid:user, password:password}}, function(data) {
				$.sherpa.defaults.token = data.token;
				$.sherpa.defaults.user = data.userid;
				if(jQuery.isFunction(callback)) {
					  callback(data);
				}
			});
		},
		token: {
			validate: function(callback) {
				// get token info from server
			},
			refresh: function(callback) {
				// get new token from server
			},
			invalidate: function(callback) {
				// logout or invalidate token
			}
		},
		commands: {
			endpoints: function(callback) {
				$.sherpa.call({endpoint:'Sherpa', method:'endpoints'}, callback);
			},
			describe: function(endpoint, callback) {
				$.sherpa.call({endpoint:'Sherpa', method:describe, params:{value:endpoint}}, callback);
			}
		},
		call: function(args, callback) {
			var options = $.extend({}, $.sherpa.defaults, args);
			var params = $.extend({},{endpoint: options.endpoint, action: options.method}, options.params);
			$.ajax({
				  url: options.url,
				  dataType: options.dataType,
				  data: params,
				  headers: (options.token === undefined || options.token === null) ? {}:{token:options.token, userid:options.user},
				  success: function(data) {
					  if(jQuery.isFunction(callback)) {
						  callback(data);
					  }
				  }
			});
		}
	};
	
})(jQuery);
