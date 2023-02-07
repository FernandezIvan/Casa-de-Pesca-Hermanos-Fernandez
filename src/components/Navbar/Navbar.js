import React from 'react';
import Botones from '../Botones/Botones.js';
import CartWidget from '../CartWidget/CartWidget.js';


const Navbar = (props)=> {

   const handleOnClick = ()=> {
    alert('Cañas')

   }
    
   const handleOnClick2 = ()=> {
    alert('reels')

   }
   const handleOnClick3 = ()=> {
    alert('camping')

   }
   
    return(
        <nav ClasseName='navbar'>
            
            <h1 style={{color:props.colorTitle}}>Casa de Pesca Hermanos Fernandez</h1>
            <Botones colorText='red' func={handleOnClick}>Cañas</Botones>
            <Botones colorText='green'func={handleOnClick2}>Reels</Botones>
            <Botones  colorText='blue'func={handleOnClick3}>Camping</Botones>
            <CartWidget/>
        </nav>
    )
};

export default Navbar;