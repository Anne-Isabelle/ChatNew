chatBotApp.config(function($routeProvider){
	$routeProvider
	.when("chat", {
		templateUrl: "../chat.module.js",
		controller: "chatController"
	})
});