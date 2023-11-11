import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to Uppercase.","success");
  };
  const handleLowClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Text converted to Lowercase.","success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handleClear = ()=>{
    setText("");
    props.showAlert("Text is cleared.","success");
  }

  return (
    <>
      <div className="container mt-3 text-center">
        <label htmlFor="myBox" class="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control mb-3"
          id="myBox"
          onChange={handleOnChange}
          value={text}
          placeholder="Enter text here..."
          rows="8"
          style={{backgroundColor: props.mode === 'dark'?'#212121':'white', color: props.mode === 'light'?'#212121':'white'}}
        ></textarea>
        <button className="btn btn- mb-1 mx-2 btn-primary" onClick={handleUpClick} disabled={text.length === 0}>
          Convert to Uppercase
        </button>
        <button className="btn mb-1 mx-2 btn-primary" onClick={handleLowClick} disabled={text.length === 0}>
          Convert to lowercase
        </button>
        <button onClick={speak} className="btn mb-1 btn-dark mx-2" disabled={text.length === 0}>
          🔊
        </button>
        <button onClick={handleClear} className="btn mb-1 btn-danger mx-2" disabled={text.length === 0}>
          Clear
        </button>
      </div>
      <div className="container mt-3">
        <h2>Text summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length * 0.008} Minutes to read</p>
        <h4 className="mt-2">Preview</h4>
        <p className="p-3 border border-2">{text===""?"Entered text will preview here...":text}</p>
      </div>
    </>
  );
}
