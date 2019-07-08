import React, { Component } from 'react'

const NavBar=({counters})=>{
    return(
        <nav className="navbar navbar-light bg-light">
         <a className="navbar-brand" >Navbar</a>
         <span  className='badge badge-pill badge-secondary'>
             Counters: {counters}
         </span>
        </nav>
    )
}

    
    
export default NavBar


//In functional components remove this keyword n pass props as a parameter on creation
// const NavBar=(props)=>{
//     return(
//          <span  className='badge badge-pill badge-secondary'>
//              Counters: {props.counters}
//          </span>
//     )
// }