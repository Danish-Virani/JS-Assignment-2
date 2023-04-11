function addNewListItem(text) {
  const ul_1 = document.createElement("ul");
  ul_1.textContent = "This is a name list";

  document.body.appendChild(ul_1);
  const li = document.createElement("li");
  li.textContent = text;

  ul_1.appendChild(li);
}

//Main
addNewListItem("Danish");
