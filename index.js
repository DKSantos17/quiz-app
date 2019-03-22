let currentQuestion = 0
let responses = [];
let totalCorrect = 0
const data = [
    {stem: 'In what year were the Seahawks added to the NFL?', optionA: 1970, optionB: 1976, optionC: 1981, optionD: 1992, key: 'B', answer: '1976'},
    {stem: 'In what year did the Seahawks change conference from the AFC to the NFC?', optionA: 1977, optionB: 1990, optionC: 1998, optionD: 2002, key: 'D', answer: '2002'},
    {stem: 'What is the highest number of wins the Seahawks have had in a single season?', optionA: 15, optionB: 14, optionC: 13, optionD: 12, key: 'C', answer: '13'},
    {stem: 'What is the lowest number of wins the Seahawks have had in a single season?', optionA: 1, optionB: 2, optionC: 3, optionD: 4, key: 'B', answer: '2'},
    {stem: 'How many lifelong Seahawks (players who never played for another team) have been inducted into the Hall of Fame?', optionA: 1, optionB: 2, optionC: 3, optionD: 4, key: 'D', answer: '4'},
    {stem: 'Who was the first lifelong Seahawk to be inducted into the Hall of Fame?', optionA: 'Steve Largent', optionB: 'Cortez Kennedy', optionC: 'Franco Harris', optionD: 'Warren Moon', key: 'A', answer: 'Steve Largent'},
    {stem: 'How many times have the Seahawks played in the Superbowl?', optionA: 1, optionB: 2, optionC: 3, optionD: 4, key: 'C', answer: '3'},
    {stem: 'Who is the only Seahawk to have won Superbowl MVP?', optionA: 'Shaun Alexander', optionB: 'Jermaine Kearse', optionC: 'Malcolm Smith', optionD: 'Kam Chancellor', key: 'C', answer: 'Malcolm Smith'},
    {stem: 'Who was the most recent Seahawk to win the AP Defensive Player of the Year award?', optionA: 'Cortez Kennedy', optionB: 'Lofa Tatupu', optionC: 'Richard Sherman', optionD: 'Kenny Easley', key: 'A', answer: 'Cortez Kennedy'},
    {stem: 'Who was the most recent Seahawk to win the MVP award?', optionA: 'Steve Largent', optionB: 'Shaun Alexander', optionC: 'Marshawn Lynch', optionD: 'Russell Wilson', key: 'B', answer: 'Shaun Alexander'}
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
//We need to present each question with its appropriate data sequentially
function populateQuestionForm () {
    console.log(`Pulled data for question ${currentQuestion}`)
    $('.questionStem').html(data[currentQuestion].stem)
    $('.optA').html(data[currentQuestion].optionA)
    $('.optB').html(data[currentQuestion].optionB)
    $('.optC').html(data[currentQuestion].optionC)
    $('.optD').html(data[currentQuestion].optionD)
    $('#question-number').html(currentQuestion+1)
    $('#js-total-correct').html(totalCorrect)
    $('#current-question').html(currentQuestion)
}

function handleQuestionSubmit () {
$('#questions').submit(function(event) {
    event.preventDefault();
    trackResponse();
    if (responses[currentQuestion] === data[currentQuestion].key) {
        totalCorrect ++;
        $('.feedback-text').html('Correct!')
    }
    else {
        $('.feedback-text').html(`Nope! The correct answer was ` + data[currentQuestion].answer)
    };
    $('.question-feedback').toggle()
})
}
//We need to grade the user responses
function handleNextQuestion () {
    $('.next-question').click(function(nextQuestion){
        console.log('Proceeding to next Question')
        $('.question-feedback').toggle(); currentQuestion ++;
        if (currentQuestion < 10) {
            populateQuestionForm();
        }
        else {
            completeQuiz();
        }
        $('input').prop('checked', false);
})
}
//We need to present the user with their result and some feedback.
function completeQuiz() {
    console.log('Completed Quiz')
    $('#js-total-correct2').html(totalCorrect)
    $('.questions').hide()
    $('.results').show()
    if (totalCorrect < 3) {
        $('.results-paragraph').html('I&hellip;wow. I mean, I hate to use the term, but&hellip;yeah, you might be a bandwagon fan.')
    }
    else if (totalCorrect > 2 && totalCorrect < 7) {
        $('.results-paragraph').html('Alright, so that&apos;s not a great score. But you know what, that just means you now have the privelege to learn about all the incredible atheletes whose names you just read! Get to it!')
    }
    else if (totalCorrect > 6 && totalCorrect < 10) {
        $('.results-paragraph').html('You know what, even if the score isn&apos;t perfect, you&apos;ve more than proven that you know your stuff. You have my permission to yell &ldquo;Go Hawks&rdquo; with abandon.')
    }
    else if (totalCorrect = 10) {
        $('.results-paragraph').html('Holy catfish! You are a true Seahawks savant. Come over for a game anytime.<br>(&hellip;are you sure that was your first time taking the quiz?)')
    }
}
//We need to track the user's responses
function trackResponse() {
    console.log(`Logged response to question ${currentQuestion}`);
    let response = $("input[name='question']:checked").val()
    responses.push(response)
}
//We need to allow the user to retake the quiz from the finish screen
function playItAgain() {
    $('.restart').click(function(restart) {
        console.log('Restarting quiz...');
        currentQuestion = 0;
        responses = [];
        totalCorrect = 0;
        $('.results').hide();
        $('.intro').show();
    })
}

function startYourEngines () {
    handleQuestionSubmit();
    handleBeginClick();
    handleNextQuestion();
    playItAgain();
}

$(startYourEngines);