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

const val = buttonArray.map((item, index) => {
  const maindiv = document.querySelector(".buttons");
  const node = document.createElement("button");
  const textnode = document.createTextNode(item);
  node.appendChild(textnode);
  maindiv.appendChild(node);

  node.addEventListener("click", (e) => {
    const target = e.target.innerText;
    let v = document.querySelector(".display");
    v.value += target;
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
