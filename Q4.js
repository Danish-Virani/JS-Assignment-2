function addNewListItem(text) {
    // create a new list item element
    const newListItem = document.createElement("li");
  
    // set the text content of the new list item
    newListItem.textContent = text;
  
    // get the unordered list element
    const unorderedList = document.querySelector("ul");
    console.log(unorderedList);
    // append the new list item to the unordered list
    // unorderedList.appendChild(newListItem);
  }

  //Main
  addNewListItem("Example Item");