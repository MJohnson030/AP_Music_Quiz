 onEvent("homeStartButton", "click", function( ) {
  playSound("assets/category_app/app_interface_click_3.mp3", false);
  setScreen("categoryScreen");
});


//code for Scales Practice
onEvent("scalesCategoryButton", "click", function( ) {
  playSound("assets/category_app/app_interface_click_3.mp3", false);
  setScreen("scalesInstructionScreen");
});
  
  onEvent("scalesInstructionsBackButton", "click", function() {
   playSound("assets/category_app/app_interface_click_3.mp3", false);
   setScreen("categoryScreen");
});

onEvent("scalesContinueButton","click", function() {
  playSound("assets/category_app/app_interface_click_3.mp3", false);
   setScreen("scalesQuizScreen");
});

  onEvent("musicTheoryQuizButton","click", function() {
    playSound("assets/category_app/app_interface_click_3.mp3", false);
    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  });





//Code for Bass clef Practice 
onEvent("bassClefCategoryButton", "click", function( ) {
  playSound("assets/category_app/app_interface_click_3.mp3", false);
  setScreen("bassInstructionScreen");
});

onEvent("bassInstructionsScreenBackButton", "click", function( ) {
   playSound("assets/category_app/app_interface_click_3.mp3", false);
   setScreen("categoryScreen");
});

onEvent("bassContinueButton", "click", function() {
  playSound("assets/category_app/app_interface_click_3.mp3", false);
  setScreen("bassQuizScreen");
});

//Code for Piano 
onEvent("pianoCategoryButton", "click", function( ) {
  playSound("assets/category_app/app_interface_click_3.mp3", false);
  setScreen("pianoInstructionScreen");
});

onEvent("pianoInstructionsBackButton", "click", function( ) {
   playSound("assets/category_app/app_interface_click_3.mp3", false);
   setScreen("categoryScreen");
});

//Code for Treble Clef Practice
onEvent("trebleClefCategoryButton", "click", function( ) {
  playSound("assets/category_app/app_interface_click_3.mp3", false);
  setScreen("trebleInstructionScreen");
});
  
  onEvent("trebleInstructionsBackButton", "click", function( ) {
   playSound("assets/category_app/app_interface_click_3.mp3", false);
   setScreen("categoryScreen");
});


var myQuestions = [
  {
      question: "What is 10/2?",
      answers: {
          a: '3',
          b: '5',
          c: '115'
      },
      correctAnswer: 'b'
  },
  {
      question: "What is 30/3?",
      answers: {
          a: '3',
          b: '5',
          c: '10'
      },
      correctAnswer: 'c'
  },
  {
    question: "What is 10/2?",
    answers: {
        a: '3',
        b: '5',
        c: '115'
    },
    correctAnswer: 'b'
},
{
  question: "What is 10/2?",
  answers: {
      a: '3',
      b: '5',
      c: '115'
  },
  correctAnswer: 'b'
},
{
  question: "What is 10/2?",
  answers: {
      a: '3',
      b: '5',
      c: '115'
  },
  correctAnswer: 'b'
},
{
  question: "What is 10/2?",
  answers: {
      a: '3',
      b: '5',
      c: '115'
  },
  correctAnswer: 'b'
},
{
  question: "What is 10/2?",
  answers: {
      a: '3',
      b: '5',
      c: '115'
  },
  correctAnswer: 'b'
},
{
  question: "What is 10/2?",
  answers: {
      a: '3',
      b: '5',
      c: '115'
  },
  correctAnswer: 'b'
},
{
  question: "What is 10/2?",
  answers: {
      a: '3',
      b: '5',
      c: '115'
  },
  correctAnswer: 'b'
},
{
  question: "What is 10/2?",
  answers: {
      a: '3',
      b: '5',
      c: '115'
  },
  correctAnswer: 'b'
},
{
  question: "What is 10/2?",
  answers: {
      a: '3',
      b: '5',
      c: '115'
  },
  correctAnswer: 'b'
},
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

//  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;

      // for each question...
      for(var i=0; i<questions.length; i++){
          
          // first reset the list of answers
          answers = [];

          // for each available answer...
          for(letter in questions[i].answers){

              // ...add an html radio button
              answers.push(
                  '<label>'
                      + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                      + letter + ': '
                      + questions[i].answers[letter]
                  + '</label>'
              );
          }

          // add this question and its answers to the output
          output.push(
              '<div class="question">' + questions[i].question + '</div>'
              + '<div class="answers">' + answers.join('') + '</div>'
          );
      }

      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      for(var i=0; i<questions.length; i++){

          // find selected answer
          userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
          
          // if answer is correct
          if(userAnswer===questions[i].correctAnswer){
              // add to the number of correct answers
              numCorrect++;
              
              // color the answers green
              answerContainers[i].style.color = 'lightgreen';
          }
          // if answer is wrong or blank
          else{
              // color the answers red
              answerContainers[i].style.color = 'red';
          }
      }

      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  // show questions right away
  showQuestions(questions, quizContainer);
  
  // on submit, show results
  submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
  }

}





//Abstraction

/* Assign 20 pictures to each practice quiz and give those ID's
an assigned value. If the answer is == the assigned value then add a point. 
If it isn't then take away a point. */


// var practiceQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// var practiceQuestions = randomNumber(1, 20);
// function setQuestion(randomNumber(1, 20)) {

// }

