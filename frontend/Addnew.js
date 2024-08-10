import { useState } from "react"
import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Validate from "./Validate";



function Addnew() {
    const [values, setValues] = useState({
        firstname: '',
        email: '',
        phone: '',
        city: '',
        password: '',
        confirmpassword: ''
    })

    const [error, setError] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(Validate(values));
        if(error.email === "" && error.phone==="" && error.firstname==="" && error.city==="" && error.password){
            axios.post('http://localhost:8081/Addnew', values)
            .then(res => {
                console.log(res);
               navigate('/')
            })
            .catch(err => console.log(err));

        }       
    }



    return (
        <div className="container mt-3">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                    <label htmlFor="firstname">Firstname:</label>
                    <input type="text" placeholder="Enter Firstname" id="firstname" name="firstname" onChange={handleInput} className="form-control rounded-0" />
                    {error.firstname && <span className="text-danger">{error.firstname}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Enter Email" id="email" name="email" onChange={handleInput} className="form-control rounded-0" />
                    {error.email && <span className="text-danger">{error.email}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="phone">Phone:</label>
                    <input type="number" placeholder="Enter Phone" id="phone" name="phone" onChange={handleInput} className="form-control rounded-0" />
                    {error.phone && <span className="text-danger">{error.phone}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="city">City:</label>
                    <input type="text" placeholder="Enter City" name="city" id="city" onChange={handleInput} className="form-control rounded-0" />
                    {error.city && <span className="text-danger">{error.city}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" name="Password" onChange={handleInput} />
                    {error.password && <span className="text-danger">{error.password}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd">Confirm password:</label>
                    <input type="password" placeholder="Enter Confirm password" id="confirmpassword" name="confirmpassword" onChange={handleInput} className="form-control rounded-0" />
                    {/* {error.confirmpassword && <span className="text-danger">{error.confirmpassword}</span>} */}
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>

    )
}

export default Addnew






