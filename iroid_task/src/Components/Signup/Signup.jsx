import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import './Signup.css'
function Signup() {

    let navigate = useNavigate();
    const [state, setState] = useState({})
    const inputValues = (event) => {
        const { name, value } = event.target
        setState({ ...state, [name]: value })
        console.log(state);
    }
    const submitForm = (event) => {
        event.preventDefault()
        console.log("form=====>", state);
        axios.post('http://localhost:3001/api/user/register', state).then((result) => {
            console.log(result.data);
            localStorage.setItem("LoginId", result.data.token)
            if (result) {
                navigate('/login')
            } else {
                navigate('/register')
            }
        }).catch((err) => {
            console.log(err);
            console.log("error occured");
        })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg .bg-white">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Already have an Account?</a>
                                </li>
                                <li className="nav-item">
                                   <a href="/login"> <button className="btn btn-primary" type="submit">Login</button></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            <div className="container-fluid signupContainer">
            <div class="semi-circle"></div>
                <div className="form-box p-5 mt-5">
                    <h4>Let's go!</h4>
                    <form onSubmit={submitForm} encType="multipart/formdata">
                        <div className="form-group mt-2">
                            <label htmlFor="name">Full Name</label>
                            <input className="form-control" id="name" type="text" name="fullName" onChange={inputValues} />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="email">Email</label>
                            <input className="form-control" id="email" type="email" name="email" onChange={inputValues} />
                        </div>
                        <div class="form-group mt-2">
                            <label for="exampleInputPassword1">Choose Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" name='password' onChange={inputValues} />
                        </div>
                        <input className="btn  mt-2" type="submit" Value="Signup" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
