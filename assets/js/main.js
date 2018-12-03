
//Questions Object

var questions = [{
    topic: "There is only on Wheel, how much does it weigh? ",
    answers: ["2400 lbs", "9100 lbs", "1800 lbs", "4800 lbs"],
    name: "Wheel",
    correct: "2400 lbs",
    divClass: ".Wheel"
},
{
    topic: "How many letters on the puzzle board?",
    answers: ["52", "54", "62", "48"],
    name: "Puzzle",
    correct: "52",
    divClass: ".Puzzle"
},
{
    topic: "What is the first letter Vanna ever turned on the puzzleboard?",
    answers: ["T", "P", "R", "S"],
    name: "letter",
    correct: "T",
    divClass: ".letter"
},
{
    topic: "How many envelopes are in the Bonus Wheel?",
    answers: ["26", "24", "22", "20"],
    name: "envelopes",
    correct: "24",
    divClass: ".envelopes"
},
{
    topic: "Has Vanna White has never worn the same dress twice?",
    answers: ["Yes", "No",],
    name: "dress",
    correct: "No",
    divClass: ".dress"
},
{
    topic: "What was Wheel of Fortune originally called?",
    answers: ["Prizes Wild", "Prize Island ", "Wheel of Luck", "Shoppers Bazaar"],
    name: "originally",
    correct: "Shoppers Bazaar",
    divClass: ".originally"
},
{
    topic: "What Hollywood lot is Wheel of Fortune filmed?",
    answers: ["Universal Studios", "Sony Studios", "CBS Studios", "Paramount"],
    name: "hollywood",
    correct: "Sony Studios",
    divClass: ".hollywood"
},
{
    topic: "What year was the Electronic Puzzle board introduced?",
    answers: ["1997", " 1992", "1994", "1999"],
    name: "year",
    correct: "Cortez",
    divClass: ".year"
},
{
    topic: "Who is the host of Wheel of Fortune?",
    answers: ["Alex Trebek", "Regis Philbin", "Pat Sajak", "Bob Barker"],
    name: "host",
    correct: "Pat Sajak",
    divClass: ".host"
},
{
    topic: "Who Created Wheel of Fortune?",
    answers: ["Harry Friedman", "Ted Turner", "Merv Griffin", "Bob Hope"],
    name: "created",
    correct: "Merv Griffin",
    divClass: ".created"
}
] 



var labels = ["first", "second", "third", "forth"];

// Game start function
var startGame = $("#start-btn").on('click', function() {
    $(this).scrollTop(0);
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();

});

// Questions Function
var questionDisplay = function() {
    $(this).scrollTop(0);
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (var t = 0; t < 10; t++) {
$('.questions').prepend('<div class="' + questions[t].name + '"></div>');
$(questions[t].divClass).append('<div class ="topic-title">' + questions[t].topic + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
    $(questions[t].divClass).append('<input type="radio"  name="' + questions[t].name + '" value="' + questions[t].answers[i] + '"/><label for="' + labels[i] + '">' + questions[t].answers[i] + '</label>');
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
    $(this).scrollTop(0);
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

$('.container').fadeOut(500);
$('#answerScreen').show();
$('#correctScreen').append(correctAnswers);
$('#wrongScreen').append(wrongAnswers);

countdown();


}); 