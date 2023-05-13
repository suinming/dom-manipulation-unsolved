/**
 * LOCAL STORAGE AND DOM MANIPULATION
 * In this task you will write some functions to let the browser save
 * some of your actions results and retrieve them when the page is reloaded.
 * You will be working with the localStorage.
 * Make sure to read the following exercise-info file/files before you start
 * * 03 LocalStorage.md
 * * 04 EventDelegation.md
 * Local Storage might be shortened to "LS" in the comments beneath.
 * @requirement
 * Event delegation MUST be used
 */

/**
 * @task
 * Implement the 'click' event that solves several tasks by the item click:
 * * If the item is NOT in favorites LS and has white background color
 * * * Changes the color of the box to red
 * * * Add the item's id to the local storage
 * * Else if the box is in favorites LS and has white red color
 * * * Changes the color of the box to white
 * * * Add the item's id to the local storage
 * * Make all the items that are listed in the favorites LS save the red background color when the page is reloaded
 */

/**
 * @hint
 * Here is a plan of how you can structure your code. You can follow it or choose your own way to go
 * * Select the container that holds all the items
 * * Create a function that sets the background to be red for the item with an id listed in favorites LS
 * * Run this function
 * * Create a function that adds an id to favorites LS by id passed as an argument
 * * Create a function that deletes an id from favorites LS by id passed as an argument
 * * Create a callback function that updates the element background color and does the
 * * /~/ action with the item's id depending on if it is in LS or not. The function should
 * * /~/ do that to a specific item that has a specific class value
 * * add the event listener to the container, pass the callback.
 */

// Your code goes here...
const cardsContainer = document.querySelector(".cardsContainer");
function setBgToRed(card) {
  if (localStorage.getItem("favs")) {
    const favs = localStorage.getItem("favs").split(",");
    if (favs.includes(card.id)) {
      // remove the backgroundColor
      card.style.backgroundColor = "";
      removeLsFromFavs(card.id);
    } else {
      // add the backgroundColor
      card.style.backgroundColor = "red";
      addLsToFavs(card.id);
    }
  } else {
    // add the backgroundColor
    card.style.backgroundColor = "red";
    addLsToFavs(card.id);
  }
}
function addLsToFavs(id) {
  if (localStorage.getItem("favs")) {
    let favs = localStorage.getItem("favs");
    favs += `,${id}`;
    localStorage.setItem("favs", favs);
  } else {
    localStorage.setItem("favs", id);
  }
}
function removeLsFromFavs(id) {
  let favs = localStorage.getItem("favs").split(",");
  const indexOfDeleteId = favs.indexOf(id.toString());
  if (indexOfDeleteId !== -1) {
    favs.splice(indexOfDeleteId, 1);
    localStorage.setItem("favs", favs);
  }
}
function callback(e) {
  const card = e.target;
  if (Array.from(card.classList).includes("card")) {
    setBgToRed(card);
  }
}

cardsContainer.addEventListener("click", callback);
