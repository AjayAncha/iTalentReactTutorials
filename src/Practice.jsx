import React, { useEffect,useState } from 'react'
import msgs from './dummydata.json'
import './App.css'


export default function Practice() {
    const[post,setData]=useState([])
    useEffect(()=>{
        setData(msgs.data.items)
    },[])
  return (
    <div className='message-details'>{
        post.map((msg)=>{
            return(
                <div className='message-content'>
                    <h5>{msg.id}</h5>
                    <div className='message-subject'>{msg.subject}</div>
                    <div className='message-body'>{msg.body}</div>
                    <div className='message-boardtiitle'> <b>{msg.board.id}</b> </div>

                </div>

            )
        })
        }</div>
  )
}
