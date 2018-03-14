import React from 'react'
import {Link} from 'react-router-dom'

export default () => {
    return <div className="Flex-container">
        <Link to='/education'><h1 class="Title-style">-Education-</h1></Link>
        <Link to='/experience'><h1 class="Title-style">-Experience-</h1></Link>
    </div>
}