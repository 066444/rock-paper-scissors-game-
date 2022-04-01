var scorePlayer = 0
var scoreIa = 0


function play(playerChoice){
  var iaChoice = Math.floor(Math.random()*3) + 1
  var winner 
  
  //ia ganhe
  if( (iaChoice==1 && playerChoice==3) 
   || (iaChoice==2 && playerChoice==1)
   || (iaChoice==3 && playerChoice==2)){
    winner = "IA"
    scoreIa++
  }else if( (iaChoice==1 && playerChoice==2) 
  || (iaChoice==2 && playerChoice==3)
  || (iaChoice==3 && playerChoice==1)){
    winner = "PLAYER"
    scorePlayer++
}else{
    winner = "NONE"
}
  var w = document.getElementById("winner")
  w.innerHTML = winner + " wins"
   var s = document.getElementById("score")
  s.innerHTML
    = "PLAYER" +scorePlayer+" X "+scoreIa+"IA"
}
