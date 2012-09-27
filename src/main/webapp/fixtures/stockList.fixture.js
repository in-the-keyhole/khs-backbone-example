define([ 'jquery', 'mockjax' ], function($) {
	$.mockjax({
		url : 'sherpa*',
		type : 'GET',
		responseTime : 150,
		responseText : [ {
			"ticker" : "FB",
			"name" : "Facebook, Inc.",
			"tradeDate" : "9/26/2012",
			"price" : 20.62,
			"dividendYield" : 0,
			"pe" : 70.17,
			"marketCap" : 0
		}, {
			"ticker" : "MSFT",
			"name" : "Microsoft Corpora",
			"tradeDate" : "9/26/2012",
			"price" : 30.165,
			"dividendYield" : 2.63,
			"pe" : 15.19,
			"marketCap" : 0
		}, {
			"ticker" : "GOOG",
			"name" : "Google Inc.",
			"tradeDate" : "9/26/2012",
			"price" : 753.46,
			"dividendYield" : 0,
			"pe" : 22.21,
			"marketCap" : 0
		}]
	});
});