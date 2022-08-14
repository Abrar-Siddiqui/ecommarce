import React from 'react'
import Cards from '../Cards'
import img2 from "../componants/static/img/Banner/ban_img.png"
import "../componants/static/style/Banner.css"
import Product from './Products'
let Banner = () => {
  return (
    <>
      <div>
        <div className='container-lg-12' id='banner'>
          <div className='row d-flex'>
            <div className='col-lg-8 me-auto text-center' id='text'>
              <p><span className='text-warning '>Romofyi</span><br />
                <span className='text-primary ' >Trands 2022</span><br />
                <span className='text-dark'>A huge fashion collection for ever</span></p>
                <span><button type='btn' className='bg-primary text-white' >SHOW NOW</button></span>
            </div>
            <div className='col-lg-4 ms-auto'>
              <img src={img2} className="d-block w-100" alt="img1" id="img" />
            </div>
          </div>
        </div>
      </div>
      <Cards />
      <Product />
    </>
  )
}
export default Banner;