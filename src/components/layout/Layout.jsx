import React, { memo } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Header />
            <main className="mt-[100px]">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default memo(Layout)

