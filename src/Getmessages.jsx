import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'

export default function getMessages() {
    const [data, setUsers] = useState([])

    const fetchData = () => {
        fetch("https://dummyjson.com/products")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data.products)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
            <div className='allitems'>{data.map((item) => {
                console.log(item);
                return (
                    <div className='each-item'>
                        <img src={item.thumbnail} alt="name" height=" 234px"
    width="329px" />
                        <div className='item-content'>
                        <h5 className='id'>Id:{item.id}</h5>
                        <div className='title'> <b>Name:</b> {item.title}</div>
                        <div className='description'><b>Description:</b>{item.description}</div>
                        <div className='category'><b>Category:</b>{item.category}</div>
                        </div>
                    </div>
                )

            })
            }

            </div>


    )
}
