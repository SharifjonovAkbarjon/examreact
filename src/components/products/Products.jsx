import { useStateValue } from "../../context";
import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import './product.scss'
import { NavLink } from "react-router-dom";


const Products = ({ data, title }) => {
  const [{ wishlist }, dispatch] = useStateValue()
  let items = data?.map((product) => (
    <div className="ProductApi w-[100%] p-[21px]" key={product.id}>
      <button onClick={() => dispatch({ type: "ADD_TO_WISHLIST", payload: product })}>
        {
          wishlist?.some(item => item.id === product.id) ?
            <FaHeart className="text-red-500" />
            :
            <FaRegHeart />
        }
      </button>
      <div className="w-full h-[264px] ">
        <NavLink to={`/Detail/${product.id}`}>
          <img className="w-full h-full object-contain" src={product.images[0]} alt="Photo" />
        </NavLink>
      </div>

      <span>{product.category}</span>
      <p className="title">{product.title}</p>
      <div className="star">
        <FaStar className="text-yellow-400" />
        <p className="paragraph">({product.rating})</p>
      </div>
      <p className="brand">By <span>{product.brand}</span></p>
      <strong>$ {product.price}</strong>

    </div>
  ));
  return (
    <div className="container mx-auto">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[24px]">{items}</div>
    </div>
  );
};

export default Products;