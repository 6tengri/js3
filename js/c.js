let n = +prompt("numb n");
let k = +prompt("numb k");

let result = "";

for (let i = k; i <= n * k; i += k) {
  result += i + " ";
}

console.log(result);
