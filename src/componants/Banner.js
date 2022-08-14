import React from 'react'
import img1 from "../componants/static/img/Banner/b1.webp"
import "../componants/static/style/Banner.css"
let Banner = () => {
  return (
    <>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner" id='banner'>
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="img1" />
            </div>
            <div className="carousel-item">
              <img src={img1} className="d-block w-100" alt="img2" />
            </div>
            <div className="carousel-item">
              <img src={img1} className="d-block w-100" alt="img3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}
export default Banner;