import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import "./Header.scss"
import { CiSearch } from "react-icons/ci";
import logo from '../../assets/logo.png'
import { IoLocationOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { useStateValue } from '../../context';



const Header = () => {
    const navigate = useNavigate()
    const [{ wishlist }, dispatch] = useStateValue()
    return (
        <>
            <div className='Header container'>
                <div className="header__body">
                    <div className='header__logo'>
                        <img className='cursor-pointer' onClick={() => navigate("/")} src={logo} alt="" />
                    </div>
                    <div className='header__search items-center px-[20px]'>
                        <div className='option'>
                            <select className='select' name="" id="">
                                <option className='border-none' value="">All Categories</option>
                            </select>
                        </div>
                        <div className='input_part flex items-center w-[70%]'>
                            <input className='w-[100%] outline-none ' type="text" placeholder='Search for items...' />
                            <CiSearch className='text-[rgb(131,131,131)] w-[50px]' />
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className='location'>
                        <IoLocationOutline className='text-[rgb(182,182,182)]' />
                        <select name="" id="">
                            <option value="">
                                My location
                            </option>
                            <option value="">
                                Your location
                            </option>
                        </select>
                    </div>
                    <div className='icons'>
                        <div className='icon'>
                            <FaRegHeart className='' />
                            <NavLink to={"/Wishlist"}>Wishlist <sup className='bg-[rgb(59,183,126)] text-white px-[6px] py-[1px] rounded-[50%]'>{wishlist.length}</sup></NavLink>
                        </div>
                        <div className='icon'>
                            <BsCart3 />
                            <NavLink to={"/Cart"}>Cart</NavLink>
                        </div>
                        <div className='icon'>
                            <RiUser3Line />
                            <Link to={"/Admin"}>Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
