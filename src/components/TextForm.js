import React, {useState} from 'react'

export default function TextForm(props) {
const handleupclick = () => {
    let NewText = Text.toUpperCase();
    SetText(NewText)
    props.showAlert("Convert to Uppercase","Success");
}

const handleloclick = () => {
    let NewText = Text.toLowerCase();
    SetText(NewText)
    props.showAlert("Convert to Lowercase","Success");
}

const handleonchange = (event) => {
    SetText(event.target.value);
}

const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy Text","success");


}

const handleClearclick =()=>{
    let NewText ='';
    SetText(NewText)
    props.showAlert("Clear Text","success");

}

const handleExtraSpaces = () => {
    let NewText = Text.split(/[ ]+/);
    SetText(NewText.join(" "))
    props.showAlert("Remove extra space","success");

  
}


const [Text, SetText] = useState('Enter Text');

  return (
      <>
    <div className="container" style={{color : props.mode==='dark'?'white':'black' }}>
            <h1> {props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={Text} style={{backgroundColor : props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleonchange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleupclick} >Convert Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleloclick} >Convert Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearclick} >Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'black' }}>
        <h1> Text Summery </h1>
        <p> {Text.split(" ").length} Words And {Text.length} Characters </p>

    </div>
    </>

  )
}
