import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { Outlet, Link } from "react-router-dom";  
let Navbar = () => {
    return (
        <>       
        
                <nav class="navbar navbar-expand-lg navbar-light text-align-center">
                    <div class="container-fluid">
                        <Link  class="navbar-brand text-white fs-4" to="/">E-Commerce</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link active text-white fs-4" aria-current="page" to="/">Home</Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-white fs-4" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        All Products
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item " href="/">Cloths</a></li>
                                        <li><a class="dropdown-item" href="/">Mobiles</a></li>
                                        <li><a class="dropdown-item" href="/">Laptops</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div class="input-group mb-3 mx-4 pt-4 m-auto">
                                <input type="text" class="form-control py-2 fs-4" placeholder="Search here.." aria-label="Username" aria-describedby="basic-addon1" />
                                <a href='/' type='btn' class="input-group-text px-4 fs-3" id="basic-addon1"><FaSearch /></a>
                            </div>
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-4 ">
                            <li class="nav-item ">
                                    <Link class="nav-link active text-dark" aria-current="page" to="/Login">Login</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active text-dark " aria-current="page" to="/Form">Register</Link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-dark" aria-current="page" href="/">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Outlet/>
           
        </>
    )
}
export default Navbar;