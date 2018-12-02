
///////////////////
// Sneaker      //
//      Trivia //
/////////////////

/* Pseudo Code - by Narin Sundarabhaya
A basic Multiple Choice Trivia Game
 
Click to Start
Timer begins at 60 seconds and countdown
Player goes through all 10 questions
player can only guess one answer per question
Once completed, player submit's answers
HTML is updated with users score
Score includes: time spent, answers correct, and answers wrong */

// --------------------------------------------------------------- 

var questions = [{
    ques: "There is only on Wheel, how much does it weigh? ",
    ans: ["2400 lbs", "9100 lbs", "1800 lbs", "4800 lbs"],
    name: "firstAirmax",
    correct: "2400 lbs",
    divClass: ".firstAirmax"
},
{
    ques: "How many letters on the puzzle board?",
    ans: ["52", "54", "62", "48"],
    name: "swoosh",
    correct: "52",
    divClass: ".swoosh"
},
{
    ques: "What is the first letter Vanna ever turned on the puzzleboard?",
    ans: ["T", "P", "R", "S"],
    name: "colab",
    correct: "T",
    divClass: ".colab"
},
{
    ques: "How many envelopes are in the Bonus Wheel?",
    ans: ["26", "24", "22", "20"],
    name: "endorser",
    correct: "24",
    divClass: ".endorser"
},
{
    ques: "Has Vanna White has never worn the same dress twice?",
    ans: ["Yes", "No",],
    name: "firstForce",
    correct: "No",
    divClass: ".firstForce"
},
{
    ques: "What was Wheel of Fortune originally called?",
    ans: ["Prizes Wild", "Prize Island ", "Wheel of Luck", "Shoppers Bazaar"],
    name: "airMaxDesigner",
    correct: "Shoppers Bazaar",
    divClass: ".airMaxDesigner"
},
{
    ques: "What lot is Wheel of Fortune Filmed?",
    ans: ["Universal Studios", "Sony Studios", "CBS Studios", "Paramount"],
    name: "jordan",
    correct: "Sony Studios",
    divClass: ".jordan"
},
{
    ques: "What year was the Electronic Puzzle board introduced?",
    ans: ["1997", " 1992", "1994", "1999"],
    name: "firstDesign",
    correct: "Cortez",
    divClass: ".firstDesign"
},
{
    ques: "Who is the host of Wheel of Fortune?",
    ans: ["Alex Trebek", "Regis Philbin", "Pat Sajak", "Bob Barker"],
    name: "retailStore",
    correct: "Pat Sajak",
    divClass: ".retailStore"
},
{
    ques: "Who Created Wheel of Fortune?",
    ans: ["Harry Friedman", "Ted Turner", "Merv Griffin", "Bob Hope"],
    name: "distribution",
    correct: "Merv Griffin",
    divClass: ".distribution"
}
] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    // display wrongAnswers
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz


// console.log("Hi Pat and Vanna");

// var questions = [
    
//     {
//         question: "When was the first Air Max made?",
//         answer: ["2000", "1987", "1995", "1988"],
//         name: "firstAirmax",
//         correct: "1987",
//         divClass: ".firstAirmax"
//     },

//     {
//         question: "When was the first Air Max made?",
//         answer: ["2000", "1987", "1995", "1988"],
//         name: "firstAirmax",
//         correct: "1987",
//         divClass: ".firstAirmax"
//     },

//     {
//         question: "When was the first Air Max made?",
//         answer: ["2000", "1987", "1995", "1988"],
//         name: "firstAirmax",
//         correct: "1987",
//         divClass: ".firstAirmax"
//     },

//     {
//         question: "When was the first Air Max made?",
//         answer: ["2000", "1987", "1995", "1988"],
//         name: "firstAirmax",
//         correct: "1987",
//         divClass: ".firstAirmax"
//     }   
// ];

// console.log(questions);

// var guesses = ["a", "b", "c", "d"];

// var gameOn = $("#game-on").on("click", function(){
//    $(this).parent().hide();
//    $(".container").show();
//    countdown(80);
//    questionShow();
// });

// var questionShow = function () {
//  $(".questions :not ('#sub-but')").empty();

//  for (var i = 0; i <=3; i++) {
//      $(".questions").prepend('<div class"' + questions[i].name + '"></div>');
//      $(questions[i].divClass).append('<input type="radio"  name="' + questions[i].name + '" value="' + questions[i].ans[y] + '"/><label for="' + labels[i] + '">' + questions[i].ans[y] + '</label>');
//     }
//     $('.questions').prepend('<hr/>');
//  }


//  var timer = function () {
    
//     var time = setInterval(function() {
//       seconds = seconds -1;
//       $("time-left").html(seconds);

//       if (seconds <= 0) {
//           $(".container").fadeOut(600);
//           var correctAnswer = 0;
//           var wrongAnswers = 0;
//           var unAnswerd = 0;

//           for (var y = 0; y < 10; y++) {
//             if ($('input:radio[name="' + questions[y].name + '"]:checked').val() === questions[y].correct) {
//              correctAnswer++;
//              console.log("you got it right" + y)
//           } else {
//               wrongAnswer++;
//               console.log("you got it wrong" + y)
//           };
//       }

//       $("#correctTimeUp").append(correctAnswer);
//       $("#wrongTimesUp").append(wrongAnswers);
//       $("#timeUp").fadeIn(1000).show();

//       clearInterval(time);
//       return;
//     }
// }, 1000);

// $("#sub-button").on('click', function(){
//     clearInterval(timer);
//     })

//  };

//  var gradeQuiz = $('#sub-but').on('click', function() {

//     var correctAnswers = 0;
//     var wrongAnswers = 0;
//     var unAnswered = 0;

//     // loop through correctArray & radioName to match html elements & answers
//     for (var i = 0; i < 10; i++) {

//         if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

//             correctAnswers++;
//         } else {
//             wrongAnswers++;
//         };
//     };

//     // once submit is clicked...
//     // tests
//     // stop timer
//     countdown();
//     // fade out questions
//     $('.container').fadeOut(500);
//     // show answerScreen
//     $('#answerScreen').show();
//     // display correctAnswers
//     $('#correctScreen').append(correctAnswers);
//     // display wrongAnswers
//     $('#wrongScreen').append(wrongAnswers);

// });