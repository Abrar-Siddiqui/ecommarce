import React from 'react'
import shoes1 from './static/images/shoes1.png'
import shoes3 from './static/images/shoes3.png'
import shoes5 from './static/images/shoes5.png'
import tisat2 from './static/images/tisat2.png'
import './static/style/Product.css'
import Footer from './Footer'
let Product = () => {
    return (
        <div>
            <div className='container' id='cont'>
                <div id='name'><h1>Featured Products</h1></div>
                <div className='row' id='product'>
                    <div className='col-lg-2 m-auto card' id='cards'>
                        <img src={shoes1} alt="shoes1" />
                        <p>Short Openwork Cardigan $120.00</p>
                    </div>
                    <div className='col-lg-2 m-auto' id='cards'>
                        <img src={tisat2} alt="shoes2" />
                        <p>Short Openwork Cardigan $120.00</p>
                    </div>
                    <div className='col-lg-2 m-auto' id='cards'>
                        <img src={shoes3} alt="shoes3" />
                        <p>Short Openwork Cardigan $120.00</p>
                    </div>
                    <div className='col-lg-2 m-auto' id='cards'>
                        <img src={tisat2} alt="shoes4" />
                        <p>Short Openwork Cardigan $120.00</p>
                    </div>
                    <div className='col-lg-2 m-auto' id='cards'>
                        <img src={shoes5} alt="shoes5" />
                        <p>Short Openwork Cardigan $120.00</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

        
    )
}
export default Product;