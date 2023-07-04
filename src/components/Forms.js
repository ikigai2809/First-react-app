import React, { useEffect, useState } from 'react'
export default function Forms(){
    const handleClick = () =>{
        setText  ("")
    }

    const handleChange = (event) =>{
        setText (event.target.value)
    }

    const handleLower = () =>{
        setText (text.toLowerCase())
    }
    const handleUpper = () =>{
        setText (text.toUpperCase())
    }
    
    const x = () =>{
        setIndex (index+1)
    }
   

    
    const [index,setIndex] = useState(0)
    const [text,setText] = useState("enter text")
    return(
        <><div><textarea value={text} id="pop" cols="30" rows="10" onClick={handleClick} onChange={handleChange} ></textarea></div>
        <div><button type="button" className="btn btn-primary"  onClick ={handleLower}>lower-case </button>
        <button type ="button" className='btn btn-primary' onClick = {handleUpper}>upper-case</button>
        </div>  
       <button type="button" class="btn btn-warning" onClick =  {x}>Counter :{index}</button>
        </>
    )

}