import React from 'react'
import '../App.css'
import Ut from '../ut-arlington.png'
import {Route, Link} from 'react-router-dom'

export default () => {
   return(

       <div class="Flex-container">
           <Link to='/'><h1 className="Title-style">-Home-</h1></Link>
            <div class="Box-content">
                <h1 class="Box-content">University of Texas at Arlington</h1>
                <img class="Img-format" src={Ut}/>
                <br></br>
                <p class="List-format">- Bachelor of Science in Physics</p>
            </div>
       </div>
   )
}