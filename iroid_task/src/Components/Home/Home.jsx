
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import iconImage from '../../assets/iconImage.jpg'
import './Home.css'

function Home() {
    const [state, setState] = useState()
    let navigate = useNavigate();
    useEffect(() => {
        var token = localStorage.getItem("LoginId")
        console.log(token);
        if (!token) {
            navigate('/login')
        }
        axios.get('http://localhost:3001/api/user/details', {
            headers: {
                'Authorization': `Bearer ` + token
            }
        }).then((res) => {
            console.log(res.data.userDetails.fullName);
            setState(res.data.userDetails.fullName)
        }).catch((err) => {
            console.log(err);
        })
    }
        , [])

    const handleLogout = () => {
        axios.post('http://localhost:3001/api/user/logout', {
        }).then((res) => {
            console.log(res);
            localStorage.removeItem('LoginId');
            window.location.href = '/login';
        }).catch((err) => {
            console.log(err);
        })


    };

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
                                <a className="nav-link active" aria-current="page" href="#"><h3>Hi, {state}</h3></a>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-primary" type="submit" onClick={handleLogout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>Name your organization</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="text" class="form-control mx-auto" style={{ maxWidth: '700px' }} placeholder='enter organization name'/>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col"><p>Select your Organization Type below</p></div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className="card" style={{ maxWidth: '13rem' }}>
                            <img className="card-img-top" src={iconImage} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text ">Construction</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ maxWidth: '13rem' }}>
                            <img className="card-img-top" src={iconImage} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text">Education</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ maxWidth: '13rem' }}>
                            <img className="card-img-top" src={iconImage} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text ">Consultancy</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ maxWidth: '13rem' }}>
                            <img className="card-img-top" src={iconImage} alt="Card image cap" />
                            <div className="card-body ">
                                <p className="card-text ">I T</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card mt-2" style={{ maxWidth: '13rem' }}>
                            <img className="card-img-top" src={iconImage} alt="Card image cap" />
                            <div className="card-body ">
                                <p className="card-text ">Logistics</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card mt-2" style={{ maxWidth: '13rem' }}>
                            <img className="card-img-top" src={iconImage} alt="Card image cap" />
                            <div className="card-body ">
                                <p className="card-text ">Manufacturing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card mt-2" style={{ maxWidth: '13rem' }}>
                            <img className="card-img-top" src={iconImage} alt="Card image cap" />
                            <div className="card-body ">
                                <p className="card-text ">Toursim</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card mt-2" style={{ maxWidth: '13rem' }}>
                            <img className="card-img-top" src={iconImage} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text ">Movie</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-5">
                    <button type="button" class="btn btn-primary">Next</button>
                </div>
            </div>
        </div>
    )
}

export default Home
