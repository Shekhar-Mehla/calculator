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
buttonArray.map((item, index) => {
  const maindiv = document.querySelector(".buttons");
  const node = document.createElement("button");
  const textnode = document.createTextNode(item);
  node.appendChild(textnode);
  maindiv.appendChild(node);
});
