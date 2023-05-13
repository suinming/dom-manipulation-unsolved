/**
 * SORTING NODES WITHIN A CONTAINER
 * Please, make sure to read the following files in the exercises-info folder before you start
 * * "02 SortingNode.md"
 */

/**
 * @task
 * Select all elements that have class of "item" as a NodeList.
 * Store them in the allItems variable
 * Example: const allItems = <Your code>;
 */

// Your code goes here...
const allItems = document.querySelectorAll(".item");

/**
 * @task
 * Select all sort buttons by class of "sortBtn" as a NodeList.
 * Store them in the sortBtn variable
 * Example: const sortBtn = <Your code>;
 */

// Your code goes here...
const sortBtn = document.querySelectorAll(".sortBtn");

/**
 * @task
 * Create a sortData function that follows the list of requirements:
 * * Takes an argument of the direction to sort as a string of 'asc' or 'desc'
 * * Defines a container variable to get the node by id of 'main'
 * * Uses the allItems variable as a source for the array of items to sort
 * * Sorts the items by id and appends them back to the main container in the sorted order.
 * Example: sortData('desc') => <reversed order of items in the main container>
 * Example: sortData('asc') => <a-z order of items in the main container>
 */

// Your code goes here...
function sortData(direction) {
  const container = document.getElementById("main");
  const newArr = Array.from(allItems);
  if (direction === "desc") {
    newArr.sort(sortDesc);
  }
  if (direction === "asc") {
    newArr.sort(sortAsc);
  }
  newArr.forEach((item) => {
    container.append(item);
  });
}
function sortDesc(nodeA, nodeB) {
  if (nodeA.id > nodeB.id) return 1;
  if (nodeA.id < nodeB.id) return -1;
  return 0;
}
function sortAsc(nodeA, nodeB) {
  if (nodeA.id < nodeB.id) return 1;
  if (nodeA.id > nodeB.id) return -1;
  return 0;
}

/**
 * @task
 * Iterate through the every item in sortBtn NodeList and apply the
 * addEventListener click event to each item.
 * The item click must execute/call the following:
 * * Make the sortData function call, assign the item's dataset sortdir property
 */

// Your code goes here...
sortBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    sortData(btn.dataset.sortdir);
  });
});
