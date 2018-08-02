const tr = document.getElementsByTagName("tr");

function resetMonthLinks () {
  //Find ul list, probably with id
  //Dynamically add <li> and <a> tags
  //Add category words to the end
} //end function

function resetCategories () {
  //This is for categories in summary
  //In first tr (th headings), add months to current month
  //Have subsequent <tr> based on index of categories
  //Compute expense data from either individual links or directly from database
  //Total, Year Total, and Average computed after everything else
} //end function

function total () {
  const total = document.querySelector("#total").children;
  for (let i = 1; i < total.length - 1; i++) {
    let category = 0;
    for (let j = 1; j < tr.length - 1; j++) {
      category += parseFloat(tr[j].children[i].textContent);
    } //end inner for loop
    total[i].innerHTML = category.toFixed(2);
  } //end outer for loop
}

function monthlyAverage () {
  for (let i = 1; i < tr.length; i++) {
    let monthData = tr[i].children;
    let avg = 0, month = 0;
    for (let j = 2; j < monthData.length - 1; j++) {
      avg += parseFloat(monthData[j].textContent);
      month++;
    } //end inner for loop
    avg /= month;
    tr[i].lastElementChild.innerHTML = avg.toFixed(2);
  } //end outer for loop
} //end function

total();
monthlyAverage();
// module.exports.setLinks = resetMonthLinks;
// module.exports.setCategories = resetCategories;
