import React from 'react'
import Hero from '../../components/Hero/Hero'
import Featured from '../../components/Featured/Featured'
import Collection from '../../components/Collection/Collection'
import Stay from '../../components/Stayhome/Stay'
import { useStateValue } from '../../context'
import Products from '../../components/products/Products'
import { useFetch } from '../../hooks/useFetch'
import Category from '../../components/category/Category'
import Skeleton from '../../components/skeleton/Skeleton'
import Detail from '../../components/detail/Detail'


const Home = () => {
    const {data, loading} = useFetch("/products", {limit:10})
    return (
        <>
            {/* <Hero/> */}
            {/* <Featured/> */}
            <Category/>
            {loading && <Skeleton/>}
            <Products title={"New Product"} data={data?.products}/>
            {/* <Stay/>             */}
            {/* <Collection/> */}
        </>
    )
}

export default Home