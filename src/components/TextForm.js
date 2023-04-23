import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to uppercase","success")
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Convert to Lowercase","success")
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText)
        props.showAlert("Clear text Succesfully","success")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
        
    }
     const handleCopy = () => {
      
      var text = document.getElementById("myBox");
      text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Copied","success")
     }

    const [text, setText] = useState(' ');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
   <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
</div>

<button type="button" class="btn btn-primary mx-1 " onClick={handleUpClick}>Convert to Upercase</button>
<button type="button" class="btn btn-primary mx-1 " onClick={handleLoClick}>Convert to Lowercase</button>
<button type="button" class="btn btn-primary mx-1 " onClick={handleClearClick}>Clear</button>
<button type="button" class="btn btn-primary mx-1 " onClick={handleCopy}>Copy</button>


</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
<h2>Your text Summary</h2>
<p>{text.split(" ").length} Words and {text.length} Characters </p>
<p>{0.008*text.split(" ").length}Minutes to read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
</div>
</>
    
  )
}
