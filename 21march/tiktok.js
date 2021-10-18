// var e1 = document.querySelector('#d1')
// var r1 = document.querySelector("#res")
//
//
// var start = 0;
//
//
// e1.addEventListener('click', function(){
// e1.textContent = myFunction(start);
// start = start + 1;
// if (start == 3) {
//   start = 0;
// }
// })
//
// function restart() {
//   e1.textContent = "";
// }
//
//
// function myFunction(index) {
//   var goma = ["X", "O", ""]
//   return goma[index]
// }
//
// r1.addEventListener('click', restart)

var restart = document.querySelector("#res")

var squares = document.querySelectorAll('td')

//Clear all the squares
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
}

restart.addEventListener('click', clearBoard);

//my version
// var start =0;
// var goma = ["X", "O", ""]
//
// function changeMarker() {
//   this.textContent = goma[start];
//   start = start + 1;
//   if (start == 3) {
//        start = 0;}
// }
function changeMarker() {
  if (this.textContent === '') {
    this.textContent = 'X'
  }
  else if (this.textContent === 'X') {
    this.textContent = 'O'
  }
  else {
    this.textContent = ''
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', changeMarker)
}
