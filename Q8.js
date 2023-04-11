function ToLocalStorage(object) {
  Object.keys(object).forEach(function (key) {
    localStorage.setItem(key, JSON.stringify(object[key]));
  });

  var Obj2 = {};
  Object.keys(object).forEach(function (key) {
    Obj2[key] = JSON.parse(localStorage.getItem(key));
  });

  return Obj2;
}

var obj1 = {
  name: "Danish",
  age: 20,
};
obj2 = ToLocalStorage(obj1);
console.log(obj2);
