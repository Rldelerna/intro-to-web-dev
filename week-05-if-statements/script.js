// When this function is called, it takes the user's answer to the first
// question and uses if statements to check whether it's correct.
function submitAnswerOne() {
  // Get answer one's input element
  const answerOneInput = document.getElementById('answer-one-input');
  // Get the text from answer one's input element
  const answerOne = answerOneInput.value;



  if(answerOne == 'owl') {
    alert("Owlsome! Specifically known as the Great Horned Owl, its also known as the 'tiger owl'");
    hide('question-one');
    show('question-two');
  } else if(answerOne == 'bird') {
    alert('Yeah, obviously, but what kind?');
    } else if(answerOne == 'robin') {
    alert('Not quite, this birds favorite subject is probably owlgebra');
  } else {
    alert('Robins are red, bluebirds are blue, meanwhile this bird is likes to go "hoo!"')
  }
}

// When this function is called, it takes the user's answer to the second
// question and uses if statements to check whether it's correct.
function submitAnswerTwo() {
  // Get answer two's input element
  const answerTwoInput = document.getElementById('answer-two-input');
  // Get the number from answer two's input element
  const answerTwo = answerTwoInput.value;

  if(answerTwo == 1000) {
    alert("Close enough! Their songs are endless: a patient observer once counted 1,088 whip-poor-wills sung rapidly without a break!");
    hide('question-two');
    show('question-three');
  } else if(answerTwo < 999 ) {
    alert('Way higher!');
  } else if(answerTwo == 1088 ) {
    alert('Woah you must be an expert! Or you just used google...');
    hide('question-two');
    show('done');
  } else {
    alert('Woah not THAT many.')
  }
}


function submitAnswerThree() {

  const answerThreeInput = document.getElementById('answer-three-input');

  const answerThree = answerThreeInput.value;

  if(answerThree == 'spring') {
    alert("Correct! Ornothologists say the Winter Wren behaves more like a mouse than a bird.");
    hide('question-three');
    show('question-four');
  } else if(answerThree == 'winter') {
    alert("You would think! But nope- think warmer.");
  } else if(answerThree == 'summer') {
    alert("Colder!");
  }else if(answerThree == 'fall') {
    alert("Warmer!");
  } else {
    alert('Hint: its one of the four seasons')
  }
}


function submitAnswerFour() {

  const answerFourInput = document.getElementById('answer-four-input');

  const answerFour = answerFourInput.value;

  if(answerFour == 'common') {
    alert("Yup! (It IS in the name) They live in wooded lakes, tundra ponds, and coastal waters- so you can find them anywhere!");
    hide('question-four');
    show('question-five');
  } else if(answerFour == 'very common') {
    alert("Not THAT common!");
  } else if(answerFour == ' not very common') {
    alert("More common than that!");
  } else {
    alert('Hint: Consider the birds name.')
  }
}




function submitAnswerFive() {

  const answerFiveInput = document.getElementById('answer-five-input');

  const answerFive = answerFiveInput.value;

  if(answerFive == 'true') {
    alert("Correct! Its one of the smallest herons in the world! The Least Bittern climbs about in cattails and reeds, clinging to the stems with its long toes.");
    hide('question-five');
    show('done');
  } else if(answerFive == 'false') {
    alert("Try again :/");
  } else {
    alert('This is true or false question- why would you pick something else?')
  }
}



// Helper function that takes an ID and shows the element with that ID.
function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}

// Helper  function that takes an ID and hides the element with that ID.
function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}