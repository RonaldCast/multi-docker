import React from 'react'
import {Link} from 'react-router-dom'

export default () => {
    return(
        <div>
            Im some other page!
            <Link to="/">Go to back home</Link>
        </div>
    )
}