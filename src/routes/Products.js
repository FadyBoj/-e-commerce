import React from 'react'

//componenets

import Header from '../components/Header';
import Footer from '../components/Footer';

//css

import ProductsSection from '../components/ProductsSection';

export default function Products()
{
    return(
        <div>
            <Header/>
            <ProductsSection />
            <Footer />
        </div>
    )
}