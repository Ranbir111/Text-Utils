import React from 'react'

export default function About(props) {
    // for internal componants of accordin
    let myStyle = {
        backgroundColor: props.mode === 'dark'?'#212121':'white',
        color: props.mode === 'light'?'#212121':'white',
        borderColor: props.mode === 'light'?'':'gray'
    }
    // for the outer container
    let myStyle2 = {
        backgroundColor: props.mode === 'dark'?'#2e2e2e':'white',
        color: props.mode === 'light'?'#2e2e2e':'white'
    }
  return (
    <div className='container' style={myStyle2}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={myStyle}>
                <strong>About TextUtils</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>TextUtils is a text based utility.</strong> It can be used to do manipulation on text like word counting, character counting, converting text to lower or upper case, AI read, etc. It is a free to use tool.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
            <strong>Features</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>It has multiple text manipulation features like:-</strong><br/>
                1. Word counting<br/>
                2. Wharacter counting<br/>
                3. Converting text to lower or upper case<br/>
                4. AI read<br/>
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" style={myStyle}>
            <strong>About the Developer</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <p>The developer of this site name is <a href='https://www.instagram.com/ranbir01111111/'>Ranbir Gupta. </a>He is a IT student. He has built this website at the age of 16. He is a self learner student.</p>
                <img style={{borderRadius:"50%", width:"100px", height:"100px",marginLeft:"10px"}} src="devloper-pic.jpg" alt="" />
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
