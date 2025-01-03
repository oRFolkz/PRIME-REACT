import React from 'react'
import { GlobalCss } from './styles.ts'
import { CartProvider } from './components/CartContext.js'
import { APIProvider } from './components/APIContext.js'
import NavBar from './components/NavBar/index.jsx'
import Banner from './components/Banner/index.jsx'
import Menu from './components/Menu/index.jsx'
import Cart from './components/Cart/index.jsx'

function App () {
    return(
        <APIProvider>
            <CartProvider>
                <GlobalCss />
                <NavBar />
                <Banner />
                <Menu />
                <Cart />
            </CartProvider>
        </APIProvider>
)}

export default App