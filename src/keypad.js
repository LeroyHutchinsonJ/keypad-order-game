import React, { useReducer } from "react";

//Password is TwoFourSixEight, Two + Four + Six + Eight

var Reducer = (state, action) => {
  if (
    state === "Wrong Code Please Try Again, Click any key to reset!" ||
    state ===
      "Congratulations, the passcode is correct, Press Any key to reset it!"
  ) {
    return "";
  }
  if (
    (state === "" && action === "2") ||
    (state === "2" && action === "4") ||
    (state === "24" && action === "6") ||
    (state === "246" && action === "8")
  ) {
    switch (action) {
      case "1":
        return state + "1";
      case "2":
        return state + "2";
      case "3":
        return state + "3";

      case "4":
        return state + "4";
      case "5":
        return state + "5";
      case "6":
        return state + "6";

      case "7":
        return state + "7";
      case "8":
        if (state === "246" && action === "8") {
          return "Congratulations, the passcode is correct, Press Any key to reset it!";
        } else {
          return state + "8";
        }

      case "9":
        return state + "9";

      default:
        return state;
    }
  } else {
    return "Wrong Code Please Try Again, Click any key to reset!";
  }
};

var Keypad = () => {
  var [state, dispatch] = useReducer(Reducer, "");

  //If state is on the right track keep going

  return (
    <div>
      <div>
        {" "}
        <button onClick={() => dispatch("1")}>1</button>
        <button onClick={() => dispatch("2")}>2</button>
        <button onClick={() => dispatch("3")}>3</button>
      </div>

      <div>
        <button onClick={() => dispatch("4")}>4</button>
        <button onClick={() => dispatch("5")}>5</button>
        <button onClick={() => dispatch("6")}>6</button>
      </div>

      <div>
        {" "}
        <button onClick={() => dispatch("7")}>7</button>
        <button onClick={() => dispatch("8")}>8</button>
        <button onClick={() => dispatch("9")}>9</button>
      </div>
      <div>{state}</div>
    </div>
  );
};

export default Keypad;
