var questions = [

		{
			question: "What is the capital of the United States?",
 			choices: ["Washington, DC", "New York City", "Newark", "Chicago"],
 			answer: "Washington DC",
 		},
 			
 		{	question: "Who won the Superbowl last year?",
 			choices: ["Denver", "Pittsburgh", "Seattle", "New England"],
 			answer:"New England",
 		},
 			
 		{	question: "What is 6+4*2?",
 			choices: [12,14,10,0],
 			answer: 14,
 		},
 		
 		{	question: "What was the 5th US President?",
 			choices: ["George Washington", "Abraham Lincoln", "James Monroe", "John Quincy Adams"],
 			answer: "James Monroe",
 		},
 		
 		{	question: "Which painter started the impressionist movement?",
 			choices: ["Claude Monet", "Salvador Dali", "Pablo Picasso", "Leonardo DiVinci"],
 			answer: "Claude Monet",
 		}
]

var incorrect=0;
var correct=0;

	if(questions[0]) {
		$(".questionarea").append("<p>"+questions[0].question+"</p>");
		$(".questionarea").append("<p class='answer1'>"+questions[0].choices[0]+"</p>");
		$(".questionarea").append("<p class='answer2'>"+questions[0].choices[1]+"</p>");
		$(".questionarea").append("<p class='answer3'>"+questions[0].choices[2]+"</p>");
		$(".questionarea").append("<p class='answer4'>"+questions[0].choices[3]+"</p>");
		
$(".answer1").click(function(){
	correct++;
	console.log(incorrect);
	console.log(correct);

});
$(".answer2").click(function(){
	incorrect++;
	console.log(incorrect);
	console.log(correct);
});

$(".answer3").click(function(){
	incorrect++;
	console.log(incorrect);
	console.log(correct);

});

$(".answer4").click(function(){
	incorrect++;
	console.log(incorrect);
	console.log(correct);

});
}
