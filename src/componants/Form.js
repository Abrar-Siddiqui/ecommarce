import React from 'react'
import "../componants/static/style/From.css"

import { Outlet, Link } from 'react-router-dom'
let Form = () => {
    return (
        <>
            <div className='container-fluid' id='form'>
                <div className='container'>
                    <div className='row justify-contant-center  '>
                        <div className='col-lg-4 py-4 m-auto mt-4' id='hello' >
                            <Link to='/' type='btn' className='text-decoration-none text-dark fs-5 fw-bold mb-3' >Back</Link>
                            <h2 className='rounded-pill border border-2 border-dark text-center py-2 mb-3 '>Register Form</h2>
                            <form id="input1">
                                <div class="mb-3">
                                    <input type="text" class="form-control text-white" id="exampleInputName1" aria-describedby="nameHelp" placeholder='Name here..' />
                                </div>
                                <div class="mb-3">
                                    <input type="email" class="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email here..' />
                                </div>
                                <div class="mb-3">
                                    <input type="password" class="form-control text-white" id="exampleInputPassword1" placeholder='Password here..' />
                                </div>
                                <div class="mb-3">
                                    <input type="phone" class="form-control text-white" id="phoneInputEmail1" aria-describedby="phoneHelp" placeholder='Contact here..' />
                                </div>
                                <div className='mb-3 d-flex text-white '>
                                    <p className='pe-3'>Sex</p>
                                    <div class="form-check pe-3">
                                        <input class="form-check-input bg-primary" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Male
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-primary" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Female
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary form-control">Register</button>
                            </form>
                            <div className='my-2'>
                                <Link to='/Login' type='btn' className='text-decoration-none text-rimary fw-bold fs-4' >Login</Link>
                            </div>
                            <div >


                                <Link to='/' type='btn' className='text-primary fs-5'>Forgat</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
export default Form;