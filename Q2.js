let arr = new Array(1, 2, 3, 4, 5);

function FindElement(arr, value) {
  if (arr.length === 0) {
    return false;
  } else if (arr[0] === value) {
    return true;
  } else {
    return FindElement(arr.slice(1), value);
  }
}

//Main//

if (FindElement(arr, 6)) {
  console.log("Element found");
} else {
  console.log("Element not found");
}
