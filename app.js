let home = 0
let away = 0


function resetBoard() {
  home = 0
  away = 0
  const resetScoreAway = document.getElementById('away-score')
  resetScoreAway.innerText = 0
  const resetScoreHome = document.getElementById('home-score')
  resetScoreHome.innerText = 0
}

function drawHomeScore() {
  const homeScoreDiv = document.getElementById('home-score')
  homeScoreDiv.innerText = home

}
function drawAwayScore() {
  const awayScoreDiv = document.getElementById('away-score')
  awayScoreDiv.innerText = away

}

function test(param1, param2) {
  debugger
  console.log('testing', param1, param2)
  let sum = param1 + param2
  console.log(sum);

}
function addPointsToHome(points) {
  home += points
  if (home < 0) {
    home = 0
  }

  drawHomeScore()
  checkWinner()
}
function addPointsToAway(points) {
  away += points
  if (away < 0) {
    away = 0
  }
  drawAwayScore()
  checkWinner()
}


// function checkWinner() {
//   if (home >= 10 || away >= 10) {
//     window.alert("Home Team Wins");
//     alert("Home Team Wins")
//   }

// }





