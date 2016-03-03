var questions = 
{
 		
 			question1: "What is the capital of the United States?",
 			choices1: ["Washington, DC", "New York City", "Newark", "Chicago"],
 			answer1: "Washington DC",
 			question2: "Who won the Superbowl last year?",
 			choices2: ["Denver", "Pittsburgh", "Seattle", "New England"],
 			answer2:"New England",
 			question3: "What is 6+4*2?",
 			choices3: [12,14,10,0 ],
 			answer3: 14,
 			question4: "What was the 5th US President?",
 			choices4: ["George Washington", "Abraham Lincoln", "James Monroe", "John Quincy Adams"],
 			answer4: "James Monroe",
 			question5: "Which painter started the impressionist movement?",
 			choices5: ["Claude Monet", "Salvador Dali", "Pablo Picasso", "Leonardo DiVinci"],
 			answer5: "Claude Monet"
}

var incorrect = 0;
var correct = 0;



$(document).ready(function(){
	setTimeout(myFunction,12000);//I couldn't figure out how to show the timer...
	function myFunction() {
		alert("You are out of time")
	};
	$("body").css("background","black");
	$(".questionarea").css("background","yellow");
	$(".score").css("background","green");
	$(".questionarea").append("<p>"+questions.question1+"</p>");
	$(".questionarea").append("<p class='answer1'>"+questions.choices1[0]+"</p>");
	$(".questionarea").append("<p class='answer2'>"+questions.choices1[1]+"</p>");
	$(".questionarea").append("<p class='answer3'>"+questions.choices1[2]+"</p>");
	$(".questionarea").append("<p class='answer4'>"+questions.choices1[3]+"</p>");

$(".answer1").click(function(){
	correct++;
	nextQuestion2();
	console.log(incorrect);
	console.log(correct);
	//$(".score").html("<p> correct: " + correct + "</p>" + "<p> incorret: " +incorrect + "</p");


});
$(".answer2").click(function(){
	incorrect++;
	nextQuestion2();
	console.log(incorrect);
	console.log(correct);
	//$(".score").html("<p> correct: " + correct + "</p>" + "<p> incorret: " +incorrect + "</p");
});

$(".answer3").click(function(){
	incorrect++;
	nextQuestion2();
	console.log(incorrect);
	console.log(correct);
	//$(".score").html("<p> correct: " + correct + "</p>" + "<p> incorret: " +incorrect + "</p");

});

$(".answer4").click(function(){
	incorrect++;
	nextQuestion2();
	console.log(incorrect);
	console.log(correct);
	//$(".score").html("<p> correct: " + correct + "</p>" + "<p> incorret: " +incorrect + "</p");
});


//functions
function nextQuestion2() {

	$(".questionarea").empty()
	$(".questionarea").append("<p>"+questions.question2+"</p>");
	$(".questionarea").append("<p class='answer1'>"+questions.choices2[0]+"</p>");
	$(".questionarea").append("<p class='answer2'>"+questions.choices2[1]+"</p>");
	$(".questionarea").append("<p class='answer3'>"+questions.choices2[2]+"</p>");
	$(".questionarea").append("<p class='answer4'>"+questions.choices2[3]+"</p>");

$(".answer1").click(function(){
	incorrect++;
	nextQuestion3();
	console.log(incorrect);
	console.log(correct);
	//$(".score").html("<p> correct: " + correct + "</p>" + "<p> incorret: " +incorrect + "</p");
});

$(".answer2").click(function(){
	incorrect++;
	nextQuestion3();
	console.log(incorrect);
	console.log(correct);
	//$(".score").html("<p> correct: " + correct + "</p>" + "<p> incorret: " +incorrect + "</p");
	
});

$(".answer3").click(function(){
	incorrect++;
	nextQuestion3();
	console.log(incorrect);
	console.log(correct);
	//$(".score").html("<p> correct: " + correct + "</p>" + "<p> incorret: " +incorrect + "</p");

});

$(".answer4").click(function(){
	correct++;
	nextQuestion3();
	console.log(incorrect);
	console.log(correct);
	//$(".score").html("<p> correct: " + correct + "</p>" + "<p> incorret: " +incorrect + "</p");
	

});

};

function nextQuestion3() {

	$(".questionarea").empty()
	$(".questionarea").append("<p>"+questions.question3+"</p>");
	$(".questionarea").append("<p class='answer1'>"+questions.choices3[0]+"</p>");
	$(".questionarea").append("<p class='answer2'>"+questions.choices3[1]+"</p>");
	$(".questionarea").append("<p class='answer3'>"+questions.choices3[2]+"</p>");
	$(".questionarea").append("<p class='answer4'>"+questions.choices3[3]+"</p>");

$(".answer1").click(function(){
	incorrect++;
	console.log(incorrect);
	console.log(correct);
	nextQuestion4();
	//$(".score").html("<p> correct: " + correct + "</p>" + "<p> incorret: " +incorrect + "</p");
});

$(".answer2").click(function(){
	correct++;
	console.log(incorrect);
	console.log(correct);
	nextQuestion4();
	//$(".score").html("<p> correct: " + correct + "</p>" + "<p> incorret: " +incorrect + "</p");
});

$(".answer3").click(function(){
	incorrect++;
	console.log(incorrect);
	console.log(correct);
	nextQuestion4();
	//$(".score").html("<p> correct: " + correct + "</p>" + "<p> incorret: " +incorrect + "</p");

});

$(".answer4").click(function(){
	incorrect++;
	console.log(incorrect);
	console.log(correct);
	nextQuestion4();
	//$(".score").html("<p> correct: " + correct + "</p>" + "<p> incorret: " +incorrect + "</p");
	

});

};



function nextQuestion4() {

	$(".questionarea").empty()
	$(".questionarea").append("<p>"+questions.question4+"</p>");
	$(".questionarea").append("<p class='answer1'>"+questions.choices4[0]+"</p>");
	$(".questionarea").append("<p class='answer2'>"+questions.choices4[1]+"</p>");
	$(".questionarea").append("<p class='answer3'>"+questions.choices4[2]+"</p>");
	$(".questionarea").append("<p class='answer4'>"+questions.choices4[3]+"</p>");

$(".answer1").click(function(){
	incorrect++;
	console.log(incorrect);
	console.log(correct);
	nextQuestion5();
	//$(".score").html("<p> correct: " + correct + "</p>" + "<p> incorret: " +incorrect + "</p");
	
});

$(".answer2").click(function(){
	incorrect++;
	console.log(incorrect);
	console.log(correct);
	nextQuestion5();
	//$(".score").html("<p> correct: " + correct + "</p>" + "<p> incorret: " +incorrect + "</p");
});

$(".answer3").click(function(){
	correct++;
	console.log(incorrect);
	console.log(correct);
	nextQuestion5();
	//$(".score").html("<p> correct: " + correct + "</p>" + "<p> incorret: " +incorrect + "</p");
});

$(".answer4").click(function(){
	incorrect++;
	console.log(incorrect);
	console.log(correct);
	nextQuestion5();
	//$(".score").html("<p> correct: " + correct + "</p>" + "<p> incorret: " +incorrect + "</p");

});

};

function nextQuestion5() {

	$(".questionarea").empty()
	$(".questionarea").append("<p>"+questions.question5+"</p>");
	$(".questionarea").append("<p class='answer1'>"+questions.choices5[0]+"</p>");
	$(".questionarea").append("<p class='answer2'>"+questions.choices5[1]+"</p>");
	$(".questionarea").append("<p class='answer3'>"+questions.choices5[2]+"</p>");
	$(".questionarea").append("<p class='answer4'>"+questions.choices5[3]+"</p>");

$(".answer1").click(function(){
	correct++;
	console.log(incorrect);
	console.log(correct);
	//$(".score").html("<p> correct: " + correct + "</p>" + "<p> incorret: " +incorrect + "</p");
	if(correct)
	endGame();
});

$(".answer2").click(function(){
	incorrect++;
	console.log(incorrect);
	console.log(correct);
	//$(".score").html("<p> correct: " + correct + "</p>" + "<p> incorret: " +incorrect + "</p");
	endGame();
});


$(".answer3").click(function(){
	incorrect++;
	console.log(incorrect);
	console.log(correct);
	//$(".score").html("<p> correct: " + correct + "</p>" + "<p> incorret: " +incorrect + "</p");
	endGame();
});

$(".answer4").click(function(){
	incorrect++;
	console.log(incorrect);
	console.log(correct);
	//$(".score").html("<p> correct: " + correct + "</p>" + "<p> incorret: " +incorrect + "</p");
	endGame();
	
});

};

function endGame() {
	$(".questionarea").empty()
	$(".questionarea").append("Game Over")
	$(".score").html("<p> correct: " + correct + "</p>" + "<p> incorret: " +incorrect + "</p");
}

});








