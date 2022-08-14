import React from 'react'
import '../src/componants/static/style/Cards.css'
import shoes from './componants/static/images/shoes.png'
import under from './componants/static/images/underwear.png'
import pent from './componants/static/images/pent.png'
import shart from './componants/static/images/t_shart.png'
import jakit from './componants/static/images/jakit.png'
let Cards = () =>{
    return(
        <div>
            <div className='row d-flex justify-contant-between' >
                <div className='col-lg-2 m-auto'>
                    <div id='cardss'>
                        <img src={shoes} alt="shoes" />
                        <p>SHOSE</p>
                    </div>
                </div>
                <div className='col-lg-2 m-auto'>
                <div id='hi' >
                    <img src={jakit} alt="under" />
                        <p>JAKIT</p>
                    </div>
                </div>
                <div className='col-lg-2 m-auto '>
                <div id='cardss'>
                        <img src={pent} alt="shoes" />
                        <p>PENT</p>
                    </div>
                </div>
                <div className='col-lg-2 m-auto'>
                <div id='hi' >
                    <img src={under} alt="under" />
                        <p>UNDERWEAR</p>
                    </div>
                </div>
                <div className='col-lg-2 m-auto'>
                <div id='cardss'>
                        <img src={shart} alt="shoes" />
                        <p>T_SHART</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cards;