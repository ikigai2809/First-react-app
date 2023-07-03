import React, { useState } from 'react'
export default function Forms(){
    const handleClick = () =>{
        setText  ("")
    }

    const handleChange = (event) =>{
        setText (event.target.value)
    }
    const [text,setText] = useState("enter text")
    return(
        <><div><textarea value={text} id="pop" cols="30" rows="10" onClick={handleClick} onChange={handleChange}></textarea></div>
        <div><button type="button" className="btn btn-primary">lower-case</button></div>  
        </>
    )

}