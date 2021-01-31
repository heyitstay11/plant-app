import React from 'react'
import Pgif from '../resources/P.gif'

const Loader = () => {
    return (
        <div className="loader">
            <p> Loading Please Wait ... </p>  
            <img src={Pgif} height="250" width="300" alt="Loading Screen" />
        </div>
    )
}

export default Loader
