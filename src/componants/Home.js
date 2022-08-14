import React from 'react'
import Navbar from "../componants/Navbar"
import '../componants/static/style/Home.css'
import { FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from "../componants/static/img/laptop/l1.png"
import img2 from "../componants/static/img/mobile/m1.png"
import img3 from "../componants/static/img/laptop/l2.png"
import img4 from "../componants/static/img/mobile/m2.png"
import img5 from "../componants/static/img/laptop/l3.png"
import img6 from "../componants/static/img/mobile/m3.png"
import img7 from "../componants/static/img/mobile/m4.png"
import img8 from "../componants/static/img/laptop/l4.png"
import img9 from "../componants/static/img/mobile/m5.png"
import img10 from "../componants/static/img/laptop/l5.png"
// import img11 from "../componants/static/img/mobile/m6.png"


let Home = () => {


    const state = {
        responsive: {
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    }

    return (
        <>

            <div className='bg-dark py-2 text-white text-center '>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-7 col-6 text-start'>
                            <p className='fs-4 pt-2'>By Abrar</p>
                        </div>
                        <div className='col-lg-5 col-6 text-end pt-3 '>
                            <a href='/' className='p-2 text-decoration-none text-white'><FaTwitter className='fs-2' /></a>
                            <a href='/' className='p-2 text-decoration-none text-white'><FaFacebook className='fs-2' /></a>
                            <a href='/' className='p-2 text-decoration-none text-white'><FaWhatsapp className='fs-2' /></a>
                        </div>
                    </div>
                </div>
                {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
            </div>
            <div className='container-fluid' id='home-page'>
                <Navbar />
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 m-auto mt-3'>
                            <div class='container-fluid' >
                                <OwlCarousel items={5}
                                    className="owl-theme"
                                    loop
                                    autoplay={true}
                                    responsive={state.responsive}
                                    margin={8} >
                                    <div ><img className="img" src={img1} alt="img1" /></div>
                                    <div><img className="img" src={img2} alt="img2" /></div>
                                    <div><img className="img" src={img3} alt="img3" /></div>
                                    <div><img className="img" src={img4} alt="img4" /></div>
                                    <div><img className="img" src={img5} alt="img5" /></div>
                                    <div><img className="img" src={img6} alt="img6" /></div>
                                    <div><img className="img" src={img7} alt="img2" /></div>
                                    <div><img className="img" src={img8} alt="img3" /></div>
                                    <div><img className="img" src={img9} alt="img4" /></div>
                                    <div><img className="img" src={img10} alt="img5" /></div>
                                    {/* <div><img className="img" src={img11} alt="img6" /></div> */}

                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;