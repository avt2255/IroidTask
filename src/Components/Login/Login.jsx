import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './Login.css'
function Login() {


    let navigate = useNavigate();
    const [state, setState] = useState({})
    const inputValues = (event) => {
        const { name, value } = event.target
        setState({ ...state, [name]: value })
        console.log(state);
    }
    const submitForm = (event) => {
        event.preventDefault()
        console.log(state);
        axios.post('http://localhost:3001/api/user/login', state).then((result) => {
            console.log("RESULT======>", result.data);
            localStorage.setItem("LoginId", result.data.token)
            if (result) {
                navigate('/home')
            } else {
                navigate('/login')
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
                                <a className="nav-link active" aria-current="page" href="#">Don't have an account?</a>
                            </li>
                            <li className="nav-item">
                               <a href="/"> <button className="btn btn-primary" type="submit">Signup</button></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container-fluid LoginContainer">
            <div class="semi-circle"></div>
                <div className="form-box  p-5 mt-5">
                    <h4>Let's go!</h4>
                    <form onSubmit={submitForm} encType="multipart/formdata">
                        <div className="form-group mt-2">
                            <label htmlFor="email">Email</label>
                            <input className="form-control" id="email" type="email" name="email" onChange={inputValues} />
                        </div>
                        <div class="form-group mt-2">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" name='password' onChange={inputValues} />
                        </div>
                        <div class="form-check mt-2">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>
                        <input className="btn mt-2" type="submit" Value="Login" />
                    </form>
                </div>
                <div className="row password-forgot mt-5">
                    <div className="col"><u>Forgot your password?</u></div>
                </div>
            </div>
        </div>
    )
}

export default Login
