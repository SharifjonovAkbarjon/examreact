import React from 'react'
import "./Collection.scss"
import rasm1 from '../../assets/icon1.svg'
import rasm2 from '../../assets/icon2.svg'
import rasm3 from '../../assets/icon3.svg'
import rasm4 from '../../assets/icon4.svg'
import rasm5 from '../../assets/icon5.svg'



const collection = [
    {
        id: 1,
        url: rasm1,
        title: "Best prices & offers",
        number: "Orders $50 or more",
    },
    {
        id: 2,
        url: rasm2,
        title: "Free delivery",
        number: "24/7 amazing services",
    },
    {
        id: 3,
        url: rasm3,
        title: "Great daily deal",
        number: "When you sign up",
    },
    {
        id: 4,
        url: rasm4,
        title: "Wide assortment",
        number: "Mega Discounts",
    },
    {
        id: 5,
        url: rasm5,
        title: "Easy returns",
        number: "Within 30 days",
    },

]



const fff = collection?.map((el) => (
    <div key={el.id} className="card">
        <div className=''>
            <img className='delay-100' src={el.url} alt="" />
        </div>
        <div className='flex flex-col gap-[5px] div'>
            <p className='tex'>{el.title}</p>
            <p className='parag'>{el.number}</p>
        </div>
    </div>
))

const Collection = () => {
    return (
        <>
            <div className='collection container'>
                <div className="collection_body">
                    <div className='wrapper'>{fff}</div>
                </div>
            </div>
        </>
    )
}

export default Collection