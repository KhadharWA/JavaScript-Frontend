import React from 'react'
import Paperz from '../../../assets/images/PAPERZ-LOGO.svg'
import Dorfus from '../../../assets/images/Dorfus-LOGO.svg'
import Martion from '../../../assets/images/Martino-LOGO.svg'
import Square from '../../../assets/images/Square-LOGO.svg'
import Gobona from '../../../assets/images/Gobona-Logo.svg'

import './Brand.css'

const Brand = () => {
  return (
    <section className="top">
        <div className="container">
            <div className="Logo">
                <img src={Paperz} alt="Paperz-Logo" />             
            </div>
            <div className="Logo">
                <img src={Dorfus} alt="Dorfus-Logo" />
            </div>
            <div className="Logo">
                <img src={Martion} alt="Martino-Logo" />
            </div>
            <div className="Logo">
                <img src={Square} alt="Square-Logo" />
            </div>
            <div className="Logo">
                <img src={Gobona} alt="Gobona-Logo" />
            </div>

        </div>


    </section>
  )
}

export default Brand