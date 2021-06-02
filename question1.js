// work estimation: 15min

// 1. Make a function that works like this:

//         examine({})         // ["object"]
//         examine("hi")       // ["string"]
//         examine(3, 1)       // ["number", "number"]
//         examine(3, "hi")    // ["number", "string"]
//         examine([], ()=>{}) // ["array", "function"]
function examine(...arguments) {
  return;
}
console.log({});
console.log(3, 1);
console.log(3, "hi");
console.log([], ()=>{});
