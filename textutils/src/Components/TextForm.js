import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Coverted To Uppercase","success")
  };
  const handlecleartext = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("The text has been cleared","success")

     
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted To Lowercase","success")

  };
  const handleCopy = () => {
 
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Text has been copied","success")

  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed","success")

  };

  const Reverseclick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text has been reversed","success")

  };
 const handleFindReplace = () => {
  if (findText.trim() === "" || replaceText.trim() === "") {
    props.showAlert("Enter the word to find and replace", "warning");
    return;
  }

  if (!text.includes(findText)) {
    props.showAlert("No match found to replace", "warning");
    return;
  }

  let newText = text.replaceAll(findText, replaceText);
  setText(newText);
  props.showAlert("Text has been replaced", "success");
};

  const handleCapitalizeSentences = () => {
    const newText = text
      .split(".")
      .map((sentence) => {
        let trimmed = sentence.trim();
        if (trimmed.length === 0) return "";
        return trimmed[0].toUpperCase() + trimmed.slice(1);
      })
      .join(". ");
    setText(newText);
    props.showAlert("First letter has been capitalized","success")

  };

  const [text, setText] = useState("");
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");

  return (
    <>
            
      <div className="mb-4" style={{color:props.mode==='dark'?'white':'#042743'}} >
        <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
  {props.heading}
</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'darkgrey':'white',
              color:props.mode==='dark'?'white':'black'

            }}
            id="mybox"
            rows="10"
          ></textarea>
        </div>
     <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
  Convert to Uppercase
</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlelowClick}>
  Convert to Lowercase
</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={Reverseclick}>
  Reverse Text
</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleFindReplace}>
  Find & Replace
</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeSentences}>
  Capitalize Sentences
</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecleartext}>
  Clear Text
</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
  Copy Text
</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
  Remove Extra Spaces
</button>


       <input
  type="text"
  className="form-control my-2"
  placeholder="Find"
  style={{
    backgroundColor: props.mode === 'dark' ? 'darkgrey' : 'white',
      color: props.mode === 'dark' ? 'white' : 'black',
    
    border: '1px solid #ccc'
  }}
  value={findText}
  onChange={(e) => setFindText(e.target.value)}
/>

<input
  type="text"
  className="form-control my-2"
  placeholder="Replace With"
  style={{
    backgroundColor: props.mode === 'dark' ? 'darkgrey' : 'white',
      color: props.mode === 'dark' ? 'white' : 'black',
    
    border: '1px solid #ccc'
  }}
  value={replaceText}
  onChange={(e) => setReplaceText(e.target.value)}
/>

      </div>
      <div className="container my-3 "style={{color:props.mode==='dark'?'white':'#042743'}} >
        <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Your Text Summary</h2>
        <p>
          {
            text
              .trim()
              .split(/\s+/)
              .filter((word) => word.length > 0).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          Reading time is{" "}
          {0.008 *
            text
              .trim()
              .split(/\s+/)
              .filter((word) => word.length > 0).length}{" "}
          minutes
        </p>
        <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
  Preview

</h2>
<p>{text.length > 0 ? "" : "Nothing to preview!"}</p>

<div className="mb-3">
  <textarea
    className="form-control"
    value={text}
    onChange={handleOnChange}
    style={{
      backgroundColor: props.mode === 'dark' ? 'darkgrey' : 'white',
      color: props.mode === 'dark' ? 'white' : 'black'
    }}
    id="mybox-preview"
    rows="10"
    readOnly // Optional: Make preview read-only
  ></textarea>
</div>

      </div>
    </>
  );
}
