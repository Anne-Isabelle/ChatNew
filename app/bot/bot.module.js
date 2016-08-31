var bot = angular.module("botApp",[]);		//création d'un nouveau module

bot.controller("dictionnaryCtrl", function($scope, msgService, botService){
	$scope.sentences = [{
		word: "Le gras",
		response: "c'est la vie"},
		{word: "Je suis victime",
		response: "des colifichets"},
		{word: "Au revoir",
		response: "Bienvenue"},
		{word: "Allô",
		response: "A l'huile"}];

	//delete entry from dictionnary
	$scope.sendClick = function(p){
		var index = $scope.sentences.indexOf(p);
		$scope.sentences.splice(index, 1);		
	};

	//add entry in dictionnary
	$scope.addSentence = function(){
		var newEntry = {
			word: $scope.newWord,
			response: $scope.newResponse
		};
		$scope.sentences.push(newEntry);
		$scope.newWord = "";
		$scope.newResponse = "";
	}
	
	botService.dictionnary = $scope.sentences;
});

