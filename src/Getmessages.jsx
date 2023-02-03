import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import Nitems from './Nitems'

export default function getMessages() {
    
    const [users, setUsers] = useState([])

    const fetchData = () => {
        fetch("https://khoros-server-vercel-bikhz4mt9-koushil-mankali.vercel.app/api/messages")
            .then(result => {
                return result.json()
            })
            .then(res => {
                setUsers(res[0]?.data?.items)
            })
    }
   
    useEffect(() => {
        fetchData()
    }, [])

    return (
            <div className='allitems'>
                {
                    users.map((item)=>{
                        return(
                            <Nitems msg={item}/>
                        )
                        
                      })
                }
                
            </div>


    )
}