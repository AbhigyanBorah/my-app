import React, { useState } from "react";

export default function About(props) {

  /* const [myStyle, setMyStyle] = useState(
    {
      color: 'black',
      backgroundColor: 'white'
    }
  )

  const [myStyle2, setmyStyle2] = useState(
    {
      color: 'black',
      backgroundColor: 'white'
    }
  ) */

  let myStyle={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'#212529':'white'
  }

  let myStyle2={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'#181818':'white'
  }

 /*  const [btnText, setbtnText] = useState("Enable Dark Mode")

  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setmyStyle2({
        color: 'black',
        backgroundColor: 'white'
      })
      setbtnText("Enable Dark Mode")
    }
    else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setmyStyle2({
        color: 'white',
        backgroundColor: '#181818'
      })
      setbtnText("Enable Light Mode")
    }
  } */



  return (
    <div className="container" style={myStyle2}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyse Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle2}>
              TextUtils gives you a way to analyze your text quickly and effectively. be it word count, character count or the time required to read the text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle2}>
              TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatibility</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle2}>
              This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, OPera etc. It suits to count characters in facebook, blog, excel documents, pdf document, essays etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btnText}</button>
      </div> */}
    </div>
  );
}
