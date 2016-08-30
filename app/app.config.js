chatBotApp.config(function($routeProvider){
	$routeProvider
	.when("/chat", {
		templateUrl: "..\chat.template.html",
		// controller: "chatController"
	})
	.when("/bot", {
		templateUrl:"bot/bot.template.html",
		//controller: "dictionnaryCtrl"
	})
});