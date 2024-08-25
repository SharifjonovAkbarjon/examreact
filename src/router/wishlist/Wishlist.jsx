import Empty from '../../components/empty/Empty';
import Products from '../../components/products/Products';
import { useStateValue } from '../../context/index'
import React from 'react'

const Wishlist = () => {
  const [data, dispatch] = useStateValue()
  console.log(data.wishlist);
  return (
    <>
      <div className="container">
        {
          data.wishlist.length ?
            <Products data={data.wishlist} />
            :
            <Empty url="https://www.lifestone.in/assets/front/images/icons/empty-wishlist.svg" title="Sevimlilar bo`sh"/>
        }
      </div>
    </>
  )
}

export default Wishlist