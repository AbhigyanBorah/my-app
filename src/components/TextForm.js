import React, { useState } from "react";

export default function TextForm(props) {
  
  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  };

  const handleDownClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText2 = text.toLowerCase();
    setText(newText2);
    props.showAlert("Converted to lowercase!","success");
  };

  const handleClear = () => {
    // console.log("Uppercase was clicked " + text);
    setText("");
    props.showAlert("Text cleared!","success");
  };

  const handleOnChange = (e) => {
    // console.log("On change");
    setText(e.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied!","success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h2>{props.heading} </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#181818" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>
          It will take {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read this.
        </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview"}</p>
      </div>
    </>
  );
}
