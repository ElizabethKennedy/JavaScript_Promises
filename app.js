"use strict";

/* Returns a promise designed to resolve with a list of hobbits, or potential fail.*/
 
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}
console.log(getList());

// TODO: Handle the resolved or rejected states of promise
let err = document.querySelector("#error");
let ul = document.querySelector("#list");


let promise=getList();

// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" 
function handleList(list){
  console.log(list);
  list.forEach(hobbit => {
    let li = document.createElement("li");
    li.textContent = hobbit;
    ul.appendChild(li);
  });
}
// TODO: If promise rejects
// Display error message in the paragraph element with id="error" 


/*Replace the console.log statement in the then method callback parameter to
iterate through the resolved list of hobbits
create a li for each hobbit, and append the li to the selected ul from the DOM
Replace the console.log statement in the catch method callback parameter to
display the resolved failure object's message property as the text content of the selected p from the DOM*/

function handleError(err){
  console.log(err);
  err.textContent=err.message;
}
async function updateDOMList() {
  try {
    let list = await getList();
    let errorMsg = error;
    list.forEach((hobbit) => {
      let li = document.createElement("li");
      li.textContent = hobbit;
      ul.appendChild(li);
    });
  } catch (err) {
    console.error(err);
    err.textContent = err.message;
  }
}

updateDOMList();
