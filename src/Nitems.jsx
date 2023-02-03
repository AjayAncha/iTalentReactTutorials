import React from 'react'
import { useState } from 'react'
export default function Nitems({msg}) {
    const [toggleClass,setToggleClass] = useState('')

    function popup (){
        console.log("Clicked");
        setToggleClass("popup-message-details msg_active")
      }
  return (
    <div>
    <div className='api-message-details' onClick={popup}>   
        <div>{msg.id}</div>
        <div>{msg.board.id}</div>
    </div>
   {toggleClass&&(<div className='popup-modal'>
    <div onClick={()=>setToggleClass('popup-message-details')}>
        <div className={toggleClass} >   
        <div key={msg}>{msg.id}</div>
        <div key={msg}>{msg.board.id}</div>
    </div></div>
    </div>)

   } 
    </div>

    
    
  )

  
}

