import "./App.css";

const Button = ({ content, input, setInput, output, setOutput }) => {
  const inputEnter = () => {
    if (content === "=") {
      // var EVAL_IS_BAD__AVOID_THIS = eval;
      try {
        setOutput(Function("return " + input));
      } catch (e) {
        alert("Invalid Expression");
      }
    } else if (content === "C") {
      setOutput("");
      setInput("");
    } else {
      if (output !== "") {
        setInput("");
        setOutput("");
      }
      setInput(input + content);
    }
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
