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
