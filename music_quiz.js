
var myQuestions = [
    {
        question: "The numbers at the beginning of a piece of music represent the: ",
        answers: {
            a: 'TIme signature',
            b: 'Key signature',
            c: 'Treble Clef'
        },
        correctAnswer: 'a'
    },

    {
        question: "The lines in the treble staff are, from bottom to top: ",
        answers: {
            a: 'FGBDE',
            b: 'EGBDF',
            c: 'ABCDE'
        },
        correctAnswer: 'b'
    },
    {
      question: "A 16th note will have the following:",
      answers: {
          a: 'A longer stem',
          b: 'One flag',
          c: 'Two flags'
      },
      correctAnswer: 'c'
  },
  {
    question: "A dotted half note equals how many quarter notes? ",
    answers: {
        a: '1',
        b: '2',
        c: '3'
    },
    correctAnswer: 'c'
  },
  {
    question: "The musical term used to describe differences in volume is: ",
    answers: {
        a: 'Crescendo',
        b: 'Dynamics',
        c: 'Rallentando'
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
  
    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
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
        
      
        for(var i=0; i<questions.length; i++){
  
            // This uses the userAnswer variable to find the selected answer using the queryslector method. 
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct this adds one to the number of correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green if correct
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // the answer color turns red
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
  
  
  
