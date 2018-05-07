//For resetting formatting, go to Skeleton

const table = document.getElementById("Jan");

// function for adding new Expense
function addExpense () {
  // we'll come back to this
  //We are adding directly on month page instead of summary page
  const first = document.querySelector(".first-input");
  first.addEventListener("focus", addPlaceholders);
  const last = first.parentElement.parentElement.parentElement.lastElementChild.previousElementSibling.firstElementChild;
  last.children["0"].addEventListener("focus", setNextLine);
} //end function

// this retrieves previous expenses
// from database
function reloadExpenses(list) {
  list.forEach(function(expense) {
    //put something here
  });
}

function addPlaceholders() {
  document.getElementById("submitExpenses").hidden = false;
  const child = document.querySelector(".insert").children;
  for (let i = 1; i < child.length - 1; i++) {
    child[i].innerHTML = '<form><input type="text"></form>';
  } //end for loop
} //end function

function setNextLine() {
  let newLine = table.children["0"].lastElementChild.cloneNode(true);
  table.appendChild(newLine);
  // table.children.lastElementChild.removeAttribute("class");
}//end function

//this will set non-new expenses
//back to standard
// function resetStyle() {
//   if (/*tr class has new*/) {
//     tr.removeClass("new");
//   }
// }



//If new categories are added
function addNewCategory () {
  //something here reacting to added category
}

addExpense();
