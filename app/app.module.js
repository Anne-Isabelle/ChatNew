var chatBotApp = angular.module("chatBotApp", ["ngRoute", "chatApp","botApp"]);


chatBotApp.factory("msgService", function(){
	var service = {
		allMessages: [],
		addMessage: function(m){
			this.allMessages.push(m);
		}
	};
	return service;
});

chatBotApp.factory("botService", function(){
	var service = {
		dictionnary: [],
		addEntry: function(m){
			this.dictionnary.push(m);
		}
	};
	return service;
});
