function createBoard(mode = 8) {
  for (let i = 0; i < mode; i++) {
    let html = "<br>";
    // create row
    for (let j = 0; j < mode; j++) {
      // create column
      html += "<div></div>";
    }
    $("#main").append(html);
  }
} //end function

const randomizeMines = mode => {
  // function to put in mines at random
  // certain number of mines based on mode
  const numberOfMines = Math.floor(mode * 1.25); //It may not be 1.25
  for (let i = 0; i < numberOfMines; i++) {
    // specific div will have probability of having mines
    // if a mine is added, decrement number of mines
  }
}
// Then find a way to set in numbers based on adjacent mines
// if (touching a mine) {
//   count how many mines it is touching
//   then put in number on the square
// }

$(document).ready(() => {
  createBoard();
});


// work on this part
// $(".dropdown-content").children().click(ev => {
//   switch (ev) {
//     case: "beginner"
//       createBoard(8);
//       break;
//     case: "intermediate"
//       createBoard(16);
//       break;
//     case: "expert"
//       createBoard(24);
//       break;
//   }
// })
