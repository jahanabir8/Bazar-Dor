import React from 'react';
import NavLinks from './NavLinks';

const NavBar = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories')
    const data = await res.json()
    console.log(data);
    return (
        <div className=' max-w-7xl mx-auto p-2 '>
            <NavLinks navlinks={data} />
        </div>
    );
};

export default NavBar;