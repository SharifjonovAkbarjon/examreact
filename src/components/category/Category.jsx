import React, { memo } from 'react'
import { useFetch } from '../../hooks/useFetch'


const Category = ({ setCategory }) => {
  const { data } = useFetch("/products/category-list")
  console.log(data);

  const laylo = data?.map((element) => (
    <p className='text'>{element}</p>

  ))


  return (
    <>
      <div className="container">
        <div className='flex gap-4 overflow-auto flex-wrap'>
           {laylo}
        </div>
      </div>
    </>
  )
}

export default memo(Category)