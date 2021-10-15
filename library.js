
function isTouching(Jack,Jim){
    if (Jack.x - Jim.x < Jim.width/2 + Jack.width/2
      && Jim.x - Jack.x < Jim.width/2 + Jack.width/2
      && Jack.y - Jim.y < Jim.height/2 + Jack.height/2
      && Jim.y - Jack.y < Jim.height/2 + Jack.height/2) {
   return true
      }
  else {
   return false
  }
  }