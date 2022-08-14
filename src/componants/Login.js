import React from 'react'
import '../componants/static/style/Login.css'
import {Outlet,Link} from 'react-router-dom'
let Login = () => {
    return (
        <div>           
                <div className='container-fluid' id='form'>
                    <div className='container'>
                        <div className='row justify-contant-center  '>
                            <div className='col-lg-4  py-4 m-auto mt-4' id='hello' >
                            <Link to='/' type='btn' className='text-decoration-none text-dark fs-5 fw-bold mb-3' >Back</Link>
                                <h2 className='rounded-pill border border-2 border-dark text-center py-2 mb-3 '>Login Form</h2>
                                <form id="input1">
                                    <div class="mb-3">
                                        <input type="email" class="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email here..' />
                                    </div>
                                    <div class="mb-3">
                                        <input type="password" class="form-control text-white" id="exampleInputPassword1" placeholder='Password here..' />
                                    </div>
                                    
                                    <button type="submit" class="btn btn-primary form-control">Login</button>
                                </form>
                                <div className='my-2'>
                                    <Link to='/Form' type='btn' className='text-decoration-none text-rimary fw-bold fs-4' >Register</Link>
                                </div>
                                <div >
                                    
                                        <Link to='/' type='btn' className='text-primary fs-5'>Forgat</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
            
            )
}
export default Login;