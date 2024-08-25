import React from 'react'
import '../Hero/Hero.scss'
import { BsSend } from "react-icons/bs";


const Hero = () => {
    return (
        <>
            <div className='Hero container'>
                <div className="hero__body ">
                    <div className='heros'>
                        <h2>Fresh Vegetables Big discount</h2>
                    </div>
                    <div className='paragraph'>
                        <p>Save up to 50% off on your first order</p>
                    </div>
                    <div className='email'>
                        <BsSend />
                        <input type="text" placeholder='Your emaill address' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero