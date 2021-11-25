import "./App.css";

const Button = ({ content, input, setInput, output, setOutput }) => {
  const inputEnter = () => {
    if (content === "=") {
      setOutput(eval(input));
    } else if (content === "C") {
      setOutput("");
      setInput("");
    } else {
      if (output !== "") {
        setInput("");
        setOutput("");
      } else setInput(input + content);
    }
    // if (value == "=") {
    //     output.innerHTML = eval(input.innerHTML);
    //   } else if (value == "C") {
    //     output.innerHTML = "";
    //     input.innerHTML = "";
    //   } else {
    //     console.log("output.innerHTML", output.innerHTML);
    //     if (output.innerHTML != "") {
    //       input.innerHTML = "";
    //       output.innerHTML = "";
    //     }
    //     input.innerHTML = input.innerHTML + value;
    //   }
  };
  return (
    <div
      onClick={() => inputEnter()}
      className={`button ${
        ["+", "-", "*", "/", "="].includes(content)
          ? "operator"
          : content === "C"
          ? "cancel"
          : "number"
      }`}
    >
      {content}
    </div>
  );
};

export default Button;
