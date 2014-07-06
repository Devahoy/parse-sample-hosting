require('cloud/app.js');

// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("findPlayers", function(req, res) {
	var query = new Parse.Query("Player");
	query.find({
		success: function(results) {
			res.success(results);
		},
		error: function() {
			res.error('not found players');
		}
	});
});

Parse.Cloud.define("findPlayerById", function(req, res) {
	var query = new Parse.Query("Player");
	query.get(req.params.id, {
		success: function(results) {
			res.success(results);
		},
		error: function() {
			res.error('not found player');
		}
	});
});

