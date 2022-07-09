let n = +prompt("Enter the number n");

let input = "";

input += n + "<br>";

let result = "<br>";

for (let i = 0; i < n; ++i) {
  let value = +prompt("Enter numbers");

  input += value + " ";

  if (value % 10 == 9) {
    result += value + " ";
  }
}

document.write(input);
document.write(result);

console.log();
