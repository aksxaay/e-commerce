const items = [
  {
    id: 0,
    name: "Akshay",
  },
  {
    id: 1,
    name: "Kumar",
  },
];

const foundItem = items.find((item) => item.id === 0);

if (foundItem) {
  console.log("foundItem", foundItem);

  // modifications
  foundItem.name = "Ragavan";
  // if you modify arr.find() it reflects back in the same damn thing. That's crazy

  console.log("foundItem", foundItem);
}
