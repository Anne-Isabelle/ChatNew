var chat = angular.module("chatApp", []);
chat.controller("chatController", function($scope, msgService, botService){
	$scope.messages = [{
		pseudo: "",
		message: ""
	}];


	$scope.sendMessage = function(){
		var newMessage = {
			pseudo: $scope.userPseudo,
			message:$scope.userMsg
		};
		$scope.messages.push(newMessage);
		$scope.userMsg = "";
		msgService.addMessage(newMessage);

		for(var i = 0; i<botService.dictionnary.length; i++){
			if(msgService.allMessages[msgService.allMessages.length-1].message == botService.dictionnary[i].word){
				$scope.messages.push({pseudo:"bot", message: botService.dictionnary[i].response});
			}
		}
	};	

});


$("nav").find("div").css("text-align", "center");
$("nav").find("div").css("font-size", "30px");

$("#txtArea").css("width", 500);
$("#txtArea").css("height", 300);
$("#txtArea").css("border", "1px solid");


$("input").css("display", "block");

$(".classPseudo").css("background-color", "violet");