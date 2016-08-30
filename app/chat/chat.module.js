var chat = angular.module("chatApp", []);
chat.controller("chatController", function($scope){
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
		$scope.userPseudo = "";
		$scope.userMsg = "";
	};

});


$("nav").find("div").css("text-align", "center");
$("nav").find("div").css("font-size", "30px");

$("#txtArea").css("width", 500);
$("#txtArea").css("height", 300);
$("#txtArea").css("border", "1px solid");


$("input").css("display", "block");

$(".classPseudo").css("background-color", "violet");