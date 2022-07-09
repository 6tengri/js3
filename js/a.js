let n = +prompt("enter the num");
let results = "";

for (let i = n; i >= 1; --i) {
  if (i % 2 == 0) {
    results += i + " ";
  }
}

console.log(results);
