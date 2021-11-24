const screen = document.getElementById("display-screen");
const input = document.getElementById("input-expression");
const output = document.getElementById("output-expression");

const inputEnter = (value) => {
  if (value == "=") {
    output.innerHTML = eval(input.innerHTML);
  } else if (value == "C") {
    output.innerHTML = "";
    input.innerHTML = "";
  } else {
    console.log("output.innerHTML", output.innerHTML);
    if (output.innerHTML != "") {
      input.innerHTML = "";
      output.innerHTML = "";
    }
    input.innerHTML = input.innerHTML + value;
  }
};
