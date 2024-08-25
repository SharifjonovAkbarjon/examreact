import React from 'react'
import "./StayHome.scss"
import boy from '../../assets/boy.png'
import { BsSend } from "react-icons/bs";


const Stay = () => {
    return (
        <>
            <div className='Stay_home container'>
                <div className="stayhome_body">
                    <div className='tex'>
                        <div className='header'>
                            <h2>Stay home & get your daily needs from our shop</h2>
                            <p>Start You'r Daily Shopping with <span>Nest Mart</span></p>
                        </div>
                        <div className='email'>
                            <BsSend />
                            <input type="text" placeholder='Your emaill address' />
                            <button>Subscribe</button>
                        </div>
                    </div>
                    <div className='imagess'>
                        <img src={boy} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stay