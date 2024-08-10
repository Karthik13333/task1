import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react"
import { Emailvalidate, Passwordvalidate } from "./Validation"


function Main() {
    const [input, setInput] = useState({ email: "", password: "" })

    const handleInput = (event) => {
        setInput(prev => ({ ...prev, [event.target.name]: [event.target.value] }))

    }
    const [error, setError] = useState("")

    const navigate = useNavigate();


    axios.defaults.withCredentials = true;
    const handleSubmit = (event) => {

        event.preventDefault();

        if (!Emailvalidate(input.email)) return setError("please enter valid email")
        if (!Passwordvalidate(input.password)) return setError("please enter valid password")

        axios.post('http://localhost:8081/Main', input)
            .then(res => {
                console.log(res);
                if (res.data.Main) {
                    localStorage.setItem("valid", true)
                    navigate('/Navrot/Home')
                } else {
                    alert('Please try again with a proper email and password or No record');
                }
            })
            .catch(err => {
                console.error(err);
                alert(' Please try again.');
            });
    }



    return (
        <div className='container mt-3'>
            <h2 id="login">LOGIN</h2>
            {error.length > 0 && (<div style={{ marginBottom: "10px", color: "red" }}>{error}</div>)}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" onChange={handleInput} />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
            <br></br>
            <div>
                <Link to="/Addnew" className="primary">Create New account</Link>
            </div>
        </div >

    )
    
}


export default Main