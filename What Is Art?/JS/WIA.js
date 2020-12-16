// ############################################################## //

var userScore = 0;

// ############################################################## //

function closeAll() {
  document.getElementById('headerID').style.display = 'block';
  document.getElementById('endingID').style.display = 'none';
  document.getElementById('pageOne').style.display = 'none';
  document.getElementById('pageTwo').style.display = 'none';
  document.getElementById('pageThree').style.display = 'none';
  document.getElementById('pageFour').style.display = 'none';
  document.getElementById('pageFive').style.display = 'none';
  document.getElementById('pageSix').style.display = 'none';
  document.getElementById('pageSeven').style.display = 'none';
  document.getElementById('pageEight').style.display = 'none';
}

// ############################################################## //

function pageOne() {
  document.getElementById('welcomingContainer').style.display = 'none';
  document.getElementById('pageOne').style.display = 'block';
}

// ############################################################## //

function pageTwoYES() {
  document.getElementById('pageOne').style.display = 'none';
  document.getElementById('pageTwo').style.display = 'block';
  userScore ++;
  console.log('user score: ' + userScore);
}

function pageTwoNO() {
  document.getElementById('pageOne').style.display = 'none';
  document.getElementById('pageTwo').style.display = 'block';
}

// ############################################################## //

function pageThreeYES() {
  document.getElementById('pageTwo').style.display = 'none';
  document.getElementById('pageThree').style.display = 'block';
  userScore ++;
  console.log('user score: ' + userScore);
}

function pageThreeNO() {
  document.getElementById('pageTwo').style.display = 'none';
  document.getElementById('pageThree').style.display = 'block';
}

// ############################################################## //

function pageFourYES() {
  document.getElementById('pageThree').style.display = 'none';
  document.getElementById('pageFour').style.display = 'block';
  userScore ++;
  console.log('user score: ' + userScore);
}

function pageFourNO() {
  document.getElementById('pageThree').style.display = 'none';
  document.getElementById('pageFour').style.display = 'block';
}

// ############################################################## //

function pageFiveYES() {
  document.getElementById('pageFour').style.display = 'none';
  document.getElementById('pageFive').style.display = 'block';
  userScore ++;
  console.log('user score: ' + userScore);
}

function pageFiveNO() {
  document.getElementById('pageFour').style.display = 'none';
  document.getElementById('pageFive').style.display = 'block';
}

// ############################################################## //

function pageSixYES() {
  document.getElementById('pageFive').style.display = 'none';
  document.getElementById('pageSix').style.display = 'block';
  userScore ++;
  console.log('user score: ' + userScore);
}

function pageSixNO() {
  document.getElementById('pageFive').style.display = 'none';
  document.getElementById('pageSix').style.display = 'block';
}

// ############################################################## //

function pageSevenYES() {
  document.getElementById('pageSix').style.display = 'none';
  document.getElementById('pageSeven').style.display = 'block';
  userScore ++;
  console.log('user score: ' + userScore);
}

function pageSevenNO() {
  document.getElementById('pageSix').style.display = 'none';
  document.getElementById('pageSeven').style.display = 'block';
}

// ############################################################## //

function pageEightYES() {
  document.getElementById('pageSeven').style.display = 'none';
  document.getElementById('pageEight').style.display = 'block';
  userScore ++;
  console.log('user score: ' + userScore);
}

function pageEightNO() {
  document.getElementById('pageSeven').style.display = 'none';
  document.getElementById('pageEight').style.display = 'block';
}

// ############################################################## //




// ############################################################## //

function pageNineYES() {
  document.getElementById('pageEight').style.display = 'none';
  document.getElementById('endingID').style.display = 'block';
  userScore ++;

  if (userScore >= 1) {
    document.getElementById('conclusionScore').innerHTML = 'Not so easy right!'
  }
  if (userScore >= 4) {
    document.getElementById('conclusionScore').innerHTML = 'Mmmmm ok, not too bad'
  }
  if (userScore >= 7) {
    document.getElementById('conclusionScore').innerHTML = 'WOW, good job blade runner!'
  }


  console.log('user score: ' + userScore);
  document.getElementById('quizResult').innerHTML = 'You scored: ' + userScore + ' out of 8.'

}

function pageNineNO() {
  document.getElementById('pageEight').style.display = 'none';
  document.getElementById('endingID').style.display = 'block';

    if (userScore >= 0) {
      document.getElementById('conclusionScore').innerHTML = 'Not so easy right!'
    }
    if (userScore >= 4) {
      document.getElementById('conclusionScore').innerHTML = 'Mmmmm ok, not too bad!'
    }
    if (userScore >= 7) {
      document.getElementById('conclusionScore').innerHTML = 'WOW, good job blade runner!'
    }

  document.getElementById('quizResult').innerHTML = 'You scored: ' + userScore + ' out of 8.'
}

// ############################################################## //
