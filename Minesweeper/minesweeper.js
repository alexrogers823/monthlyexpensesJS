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
}
// Then find a way to set in numbers based on adjacent mines

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
