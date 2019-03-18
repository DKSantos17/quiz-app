let currentQuestion = 0
let responses = [];
const data = [
    {stem: 'In what year were the Seahawks added to the NFL?', optionA: 1970, optionB: 1976, optionC: 1981, optionD: 1992},
    {stem: 'In what year did the Seahawks change conference from the AFC to the NFC?', optionA: 1977, optionB: 1998, optionC: 1998, optionD: 2002},
    {stem: 'What is the highest number of wins the Seahawks have had in a single season?', optionA: 15, optionB: 14, optionC: 13, optionD: 12},
    {stem: 'What is the lowest number of wins the Seahawks have had in a single season?', optionA: 1, optionB: 2, optionC: 3, optionD: 4},
    {stem: 'How many lifelong Seahawks (players who never played for another team) have been inducted into the Hall of Fame?', optionA: 1, optionB: 2, optionC: 3, optionD: 4},
    {stem: 'Who was the first lifelong Seahawks to be inducted into the Hall of Fame?', optionA: 'Steve Largent', optionB: 'Cortez Kennedy', optionC: 'Franco Harris', optionD: 'Warren Moon'},
    {stem: 'How many times have the Seahawks played in the Superbowl?', optionA: 1, optionB: 2, optionC: 3, optionD: 4},
    {stem: 'Who is the only Seahawk to have won Superbowl MVP?', optionA: 'Shaun Alexander', optionB: 'Jermaine Kearse', optionC: 'Malcolm Smith', optionD: 'Kam Chancellor'},
    {stem: 'Who was the most recent Seahawk to win the AP Defensive Player of the Year award?', optionA: 'Cortez Kennedy', optionB: 'Lofa Tatupu', optionC: 'Richard Sherman', optionD: 'Kenny Easley'},
    {stem: 'Who was the most recent Seahawk to win the MVP award?', optionA: 'Steve Largent', optionB: 'Shaun Alexander', optionC: 'Matt Hasselbeck', optionD: 'Russell Wilson'}
];

//We need to present the user with an intro screen and a start button which, when clicked, introduces the question apparatus.
function handleBeginClick () {
    $('.start').click(function(startQuiz) {
        console.log('Started the quiz')
        $('.intro').hide()
        $('.questions').show()
        populateQuestionForm()
    })
}

function populateQuestionForm () {
    console.log(`Pulled data for question ${currentQuestion}`)
    $('.questionStem').html(data[currentQuestion].stem)
    $('.optA').html(data[currentQuestion].optionA)
    $('.optB').html(data[currentQuestion].optionB)
    $('.optC').html(data[currentQuestion].optionC)
    $('.optD').html(data[currentQuestion].optionD)

}
//We need to present each question with its appropriate data sequentially
function handleQuestionSubmit () {
$('#questions').submit(function(event) {
    console.log('They clicked submit!')
    event.preventDefault();
    trackResponse();
    currentQuestion ++;
    if (currentQuestion < 10) {
        populateQuestionForm();
    }
    else {
        completeQuiz();
    }
})
}

function completeQuiz() {
console.log('Completed Quiz')
$('.questions').hide()
$('.results').show()
}
//We need to track the user's responses
function trackResponse() {
    console.log(`Logged response to question ${currentQuestion} (but not really yet)`);

}
//We need to grade the user responses

//We need to present the user with their result and some feedback.

function startYourEngines () {
    handleQuestionSubmit();
    handleBeginClick();
}

$(startYourEngines);