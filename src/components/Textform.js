import React, { useState } from 'react'

function Textform(props) {
  const [text, setText] = useState("");
  const handleUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleCopy = () => {
    console.log('text copied');
    var text = document.getElementById('mybox');
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
  }

  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  }

  const handleClear = () => {
    let Text = "";
    setText(Text);
  }

  const handleOnchange = (event) => {
    setText(event.target.value);
  }


  return (
    <>
    
      <div className='container d-flex flex-row'>
        <div className='container shadow p-3 mb-3 rounded' style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : '#2c3e50', boxShadow: props.mode === 'light' ? '0 4px 8px rgba(0, 0, 0, 0.1)' : '0 4px 8px rgba(255, 255, 255, 0.1)', margin: '20px', marginTop: '100px' }}>
          <h1>{props.header}</h1>
          <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnchange} placeholder="Please enter the text here" id="mybox" rows="8" style={{ border: '2px solid #3498db', backgroundColor: props.mode === 'light' ? '#ecf0f1' : '#34495e', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
          </div>
          <div className='container d-flex flex-row'>
            <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUppercase} style={{ backgroundColor: '#2ecc71', border: '1px solid #27ae60' }}>Upper-case</button>
            <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowercase} style={{ backgroundColor: '#e74c3c', border: '1px solid #c0392b' }}>Lower-case</button>
            <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy} style={{ backgroundColor: '#f39c12', border: '1px solid #d35400' }}>Copy text</button>
            <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear} style={{ backgroundColor: '#3498db', border: '1px solid #2980b9' }}>Clear text</button>
            <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces} style={{ backgroundColor: '#9b59b6', border: '1px solid #8e44ad' }}>Extra spaces</button>
          </div>
        </div>

        <div className='container shadow p-3 mb-3 rounded' style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : '#2c3e50', margin: '20px', marginTop: '100px' }}>
          <h2>Your text summary</h2>
          <p>Your text has {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
      </div>
    
      

      {/* here starts the about section */}
      <div className='container shadow p-4 mb-5 rounded' style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : '#2c3e50', height: '100px' }}>
        <p><strong>TextForge</strong> is a React application that demonstrates a bunch of operations that can be performed on a string</p>
        <p>It also comes with a dark mode option that can help you use the application at night</p>
      </div>

    </>

  )
}

export default Textform
