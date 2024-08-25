import { useState } from 'react'
import './App.scss'
import './index.scss'
import './sass/main.scss'
import { Route, Routes } from 'react-router-dom'
import About from './router/About/About'
import Home from './router/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Admin from './router/Admin/Admin'
import Wishlist from './router/wishlist/Wishlist'
import Cart from './router/cart/Cart'
import Detail from './components/detail/Detail'
import Products from './components/products/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laylo" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Products  title="Products" />} />
    
      </Routes>
      <Footer />
    </>
  )
}

export default App
