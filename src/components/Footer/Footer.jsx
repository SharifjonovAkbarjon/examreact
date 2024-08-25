import React from 'react'
import './Footer.scss'
import logo from '../../assets/logo.png'
import { BsSend } from "react-icons/bs";
import { SlEarphonesAlt } from "react-icons/sl";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import app from '../../assets/app.png'
import google from '../../assets/google.png'
import visa from '../../assets/visa.png'





const Footer = () => {
    return (
        <>
            <div className="footer container">
                <div className="footer__body">
                    <div className='header'>
                        <div className='logo'>
                            <div className='logo_part'>
                                <div className='logos'>
                                    <img src={logo} alt="" />
                                    <p>Awesome grocery store website template</p>
                                </div>
                                <div className='icons'>
                                    <div className='iconka'>
                                        <MdOutlineLocationOn />
                                        <p><b>Address:</b>5171 W Campbell Ave</p>
                                    </div>
                                    
                                    <div className='iconka'>
                                        <SlEarphonesAlt />
                                        <p><b>Call Us:</b>(+91) - 540-025-124553</p>
                                    </div>
                                    <div className='iconka'>
                                        <BsSend />
                                        <p><b>Email:</b>sale@Nest.com</p>
                                    </div>
                                    <div className='iconka'>
                                        <CiClock2 />
                                        <p><b>Hours:</b>10:00 - 18:00, Mon - Sat</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text_part'>
                                <p>Company</p>
                                <ul>
                                    <li>About Us</li>
                                    <li>Delivery Information</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms & Conditions</li>
                                    <li>Contact Us</li>
                                    <li>Support Center</li>
                                    <li>Careers</li>
                                </ul>
                            </div>
                        </div>
                        <div className='ul_part'>
                            <div className='middle'>
                                <b>Account</b>
                                <ul>
                                    <li>Sign In</li>
                                    <li>View Cart</li>
                                    <li>My Wishlist</li>
                                    <li>Track My Order</li>
                                    <li>Help Ticket</li>
                                    <li>Shipping Details</li>
                                    <li>Compare products</li>
                                </ul>
                            </div>
                            <div className='middle'>
                                <b>Corporate</b>
                                <ul>
                                    <li>Become a Vendor</li>
                                    <li>Affiliate Program</li>
                                    <li>Farm Business</li>
                                    <li>Farm Careers</li>
                                    <li>Our Suppliers</li>
                                    <li>Accessibility</li>
                                    <li>Promotions</li>
                                </ul>
                            </div>
                            <div className='middle'>
                                <b>Popular</b>
                                <ul>
                                    <li>Milk & Flavoured Milk</li>
                                    <li>Butter and Margarine</li>
                                    <li>Eggs Substitutes</li>
                                    <li>Marmalades</li>
                                    <li>Sour Cream and Dips</li>
                                    <li>Tea & Kombucha</li>
                                    <li>Cheese</li>
                                </ul>
                            </div>
                        </div>
                        <div className='install'>
                            <div className='first'>
                                <span>Install App</span>
                                <p>From App Store or Google Play</p>
                                <div>
                                    <img src={app} alt="" />
                                    <img src={google} alt="" />
                                </div>
                            </div>
                            <div className='second'>
                                <p>Secured Payment Gateways</p>
                                <img src={visa} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='end_part'></div>
                </div>
            </div>
        </>
    )
}

export default Footer