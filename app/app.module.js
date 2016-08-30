var chatBotApp = angular.module("chatBotApp", ["ngRoute"/*, "chatApp", "chatApp"*/]);


chatBotApp.factory("msgService", function(){
	var service = {
		allMessages: [],
		addMessages: function(m){
			this.allMessages.push(m)
		}
	};
})