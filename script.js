const buttonArray = [
  "AC",
  "C",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];
const getreuslt = (v) => {
  const reuslt = eval(v);
  stringToShow = reuslt;
  return displayfunc(stringToShow);
};
displayfunc = (v) => {
  const dispalyvalue = document.querySelector(".display");
  console.log((dispalyvalue.innerText = v));
};
let stringToShow = "";
const getvalue = ({ target }) => {
  const value = target.innerText;
  if (value === "AC") {
    stringToShow = "";
    displayfunc(stringToShow);
    return;
  }
  if (value === "=") {
    getreuslt(stringToShow);

    return;
  }
  stringToShow += value;

  displayfunc(stringToShow);
  console.log("executing");
};

const val = buttonArray.map((item, index) => {
  const maindiv = document.querySelector(".buttons");
  const node = document.createElement("button");
  const textnode = document.createTextNode(item);
  node.appendChild(textnode);
  maindiv.appendChild(node);

  node.addEventListener("click", (e) => {
    getvalue(e);
  });

  // switch (target) {
  //   case "=": {
  //     console.log(v.value);
  //     break;
  //   }
  //   case "AC": {
  //     console.log("AC");
  //     break;
  //   }
  //   case "C": {
  //     console.log("C");
  //     break;
  //   }
  // }
});
