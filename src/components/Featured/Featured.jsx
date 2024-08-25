import React from 'react'
import '../Featured/Featured.scss'
import rasm1 from '../../assets/1.png'
import rasm2 from '../../assets/2.png'
import rasm3 from '../../assets/3.png'
import rasm4 from '../../assets/4.png'
import rasm5 from '../../assets/5.png'
import rasm6 from '../../assets/6.png'
import rasm7 from '../../assets/7.png'
import rasm8 from '../../assets/8.png'
import rasm9 from '../../assets/9.png'
import rasm10 from '../../assets/10.png'
import piyoz from '../../assets/piyoz.png'
import butilka from '../../assets/butilka.png'
import sabzavot from '../../assets/sabsavot.png'

const data = [
    {
        id: 1,
        url: rasm1,
        title: "Cake & Milk",
        number: "26 items",
        bg: { background: `rgba(242, 252, 228, 1)` },
    },
    {
        id: 2,
        url: rasm2,
        title: "Oganic Kiwi",
        number: "28 items",
        bg: { background: `rgba(255, 252, 235, 1)` },
    },
    {
        id: 3,
        url: rasm3,
        title: "Peach",
        number: "14 items",
        bg: { background: `rgba(236, 255, 236, 1)` },
    },
    {
        id: 4,
        url: rasm4,
        title: "Red Apple",
        number: "54 items",
        bg: { background: `rgba(254, 239, 234, 1)` },
    },
    {
        id: 5,
        url: rasm5,
        title: "Snack",
        number: "56 items",
        bg: { background: `rgba(255, 243, 235, 1)` },
    },
    {
        id: 6,
        url: rasm6,
        title: "Vegetables",
        number: "72 items",
        bg: { background: `rgba(255, 243, 255, 1)` },
    },
    {
        id: 7,
        url: rasm7,
        title: "Strawberry",
        number: "36 items",
        bg: { background: `rgba(242, 252, 228, 1)` },
    },
    {
        id: 8,
        url: rasm8,
        title: "Black plum",
        number: "123 items",
        bg: { background: `rgba(254, 239, 234, 1)` },
    },
    {
        id: 9,
        url: rasm9,
        title: "Custard apple",
        number: "34 items",
        bg: { background: `rgba(255, 252, 235, 1)` },
    },
    {
        id: 10,
        url: rasm10,
        title: "Coffe & Tea",
        number: "89 items",
        bg: { background: `rgba(254, 239, 234, 1)` },
    }
]



const laylo = data?.map((el) => (
    <div key={el.id} className="card" style={el.bg}>
        <div className=''>
            <img className='delay-100' src={el.url} alt="" />
        </div>
        <p className='text'>{el.title}</p>
        <p>{el.number}</p>
    </div>
))

const product = [
    {
        id: 1,
        url: piyoz,
        title: "Everyday Fresh & Clean with Our Products",
    },
    {
        id: 1,
        url: butilka,
        title: "Make your Breakfast Healthy and Easy",
    },
    {
        id: 1,
        url: sabzavot,
        title: "The best Organic Products Online",
    },
]


const bobur = product?.map((element) => (
    <div key={element.id} className="wrapper" style={{ backgroundImage: `url(${element.url})` }}>
        <div className='flex flex-col items-start gap-[57px]'>
            <p className='text'>{element.title}</p>
            <button>Shop Now</button>
        </div>
    </div>
))



const Featured = () => {
    return (
        <>
            <div className='Featured container'>
                <div className="Featured__body">
                    <div>
                        <div className='head'>
                            <h3>Featured Categories</h3>
                            <ul>
                                <li>Cake & Milk</li>
                                <li>Coffes & Teas</li>
                                <li>Pet Foods</li>
                                <li>Vegetables</li>
                            </ul>
                        </div>
                        <div className='feautr justify-between'>{laylo}</div>
                    </div>
                    <div className='wrappers'>
                        <div className='flex justify-between'>{bobur}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured