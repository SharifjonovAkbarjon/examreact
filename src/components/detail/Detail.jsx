import React, { memo } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import './detail.scss'
import { FaStar } from "react-icons/fa";
import Stay from '../Stayhome/Stay';
import { BsCart3 } from "react-icons/bs";
import Detailtext from '../detailtext/Detailtext';


const Detail = () => {
  const { id } = useParams();
  const { data } = useFetch(`products/${id}`);
  console.log(data)
  return (
    <>
      <div className="container deatil_page">
        <div>
          <img className='detailimg' src={data?.images[0]} alt="" />
        </div>
        <div className='desc_part'>
          <div className='sale'>
            <p>Sale Off</p>
          </div>
          <h2>{data?.title}</h2>
          <div className="star">
            <FaStar className="text-yellow-400" />
            <p className="paragraph">({data?.rating}) reviews</p>
          </div>
          <div className='prices'>
            <p>$ {data?.price}</p>
            <span>{data?.description}</span>
          </div>
          <div className='detail_size'>
            <p><span>Size/Weight</span> {data?.dimensions.width} {data?.dimensions.height} {data?.dimensions.depth}</p>
          </div>
          <div className='add_tocart'>
            <div className='bir'>1</div>
            <div className='cart'>
              <BsCart3/>
              <p>Add to cart</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <Detailtext/>
        <Stay/>
      </div>
    </>
  )
}

export default memo(Detail)