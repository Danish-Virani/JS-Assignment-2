function CreateParagraph(text) {
  const newPara = document.createElement("p");

  newPara.textContent = text;

  document.body.appendChild(newPara);
}

//Main
CreateParagraph("My name is Danish");
