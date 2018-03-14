import React from 'react'
import Kw from '../Kw.png'
import Postmates from '../Postmates.png'
import Aac from '../Aac.jpg'
import {Link} from 'react-router-dom'

export default () => {
    return <div className="Flex-container">
        <Link to='/'><h1 className="Title-style">-Home-</h1></Link>
             <div class="Box-content">
            <h1 class="Box-content">Keller Williams - Realtor</h1>
            <img class="Img-format" src={Kw}/>
            <br></br><br></br>
            <p class="List-format">- Participate in active marketing initiatives, from cold calling to attending
                industry events</p>
            <br></br>
            <p class="List-format">- Organize and oversee open houses</p>
            <br></br>
            <p class="List-format">- Interview clients to determine their precise wants, needs, budgets and
                geographic limitations</p>
            </div>
        <div class="Box-content">
        <h1 class="Box-content">Postmates - Courier</h1>
    <img class="Img-format" src={Postmates}/>
    <br></br>
    <p class="List-format">- Delivered a variety of products to numerous residential and business addresses
        within the Dallas city limits</p>
    <br></br>
    <p class="List-format">- Maintained a 4.9 out of 5.0 star rating</p>
    </div>
    <div class="Box-content">
        <h1 class="Box-content">Associated Air Center - Stress Engineer Intern</h1>
        <img class="Img-format" src={Aac}/>
        <br></br>
        <p class="List-format">- Carried out a finite element analysis study designed to reduce deflections</p>
        <br></br>
        <p class="List-format">- Became familiarized with FEMAP through various projects</p>
        <br></br>
        <p class="List-format">- Assembled a comprehensive training manual for new stress engineer hires</p>
    </div>
        </div>
}