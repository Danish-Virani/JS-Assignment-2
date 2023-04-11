function saveStorage(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}

var obj = {
  name: "Danish",
  age: 20,
};
saveStorage("obj", obj);
