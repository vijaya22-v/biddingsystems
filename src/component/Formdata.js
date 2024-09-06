import React, { useState } from 'react'

import Axios from 'axios'

export default function Formdata() {

    const url = "http://localhost:44389/api/MainMenu"
    const [data, setData] = useState({
        name: "",
        date: "",
        iduser:""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            name: data.name,
            date: data.date,
            iduser: data.iduser
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }



  return (
    <div>
        <form onSubmit={(e)=> submit(e)}>
        <input onChange={(e)=> handle(e)} id="name" value={data.name} placeholder='name' type='text'></input>
        <input onChange={(e)=> handle(e)} id="date" value={data.date} placeholder='date' type='date'></input>
        <input onChange={(e)=> handle(e)} id="iduser" value={data.iduser} placeholder='iduser' type='number'></input>
        <button>SUBMIT</button>
        </form>
    </div>
  )
}