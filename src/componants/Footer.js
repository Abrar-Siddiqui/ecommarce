import React from 'react'
import fashion from './static/images/fashion.jpg'
import './static/style/Product.css'
let Footer = () => {
    return (
        <div >
            <div className='row my-4'>
                <img src={fashion} alt='footer' img="fasion" id='footer' />
            </div>
        </div>
    )
}
export default Footer;