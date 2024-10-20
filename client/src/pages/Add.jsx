import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [pontos,setPontos] = useState({
        pontoname: "",
        pontoid: "",
    });
    const navigate = useNavigate()
    const handleChange = (e) =>{
        setPontos(prev=>({...prev,[e.target.name]: e.target.value}));
    };
    
const handleClick = async e =>{
    e.preventDefault()
    try{
        await axios.post("http://localhost:8000/ponto", pontos)
        navigate("/")
    }catch(err){
        console.log(err)
    }
}

    console.log(pontos)
    return (
        <div className='form'>
            <h1>Add New Ponto</h1>
            <input type="text" placeholder='pontoname' onChange={handleChange} name="pontoname"/>
            <input type="text" placeholder='pontoid' onChange={handleChange} name="pontoid"/>
            <button className="formButton" onClick={handleClick}>Add</button>
        </div>
    )
}

export default Add