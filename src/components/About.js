import React, {useState} from 'react'

export default function About(props) {

    const [myStyle, setMyStyle] = useState({
                color:'#042743',
        backgroundColor:'white'
    })
    const [btntext, setBtnText] = useState("Enable Dark Mode")
   const toggleStyle=()=>{
        if(myStyle.color=='#042743'){
            setMyStyle({
                color:'white',
                backgroundColor:'#042743',
                border:'1px solid white'
            })
            setBtnText("Enable Light mode")
        }
        else{
            setMyStyle({
                color:'#042743',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark mode")

        }
    }
   
  return (
    <div classNameName="container " style={{backgroundColor: props.mode==='dark'?'#042743':'white'}}>

                <div className="accordion" id="accordionExample" >
           <h1 classNameName="my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>About Us</h1>
            <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'#042743':'white'}}>
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" classNameName="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            </div>
            <div>
            <button onClick={toggleStyle} type="button" className="btn btn-primary my-3 mx-5">{btntext}</button>

            </div>

                </div>
  )
  }
