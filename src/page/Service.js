import React from 'react'
import Data from '../companents/ServicesData'
import {Link} from 'react-router-dom'

const Service = () => {
    const newData = Data.map(el=>{
        return (
            <h1 key={el._id} ><Link to={`/service/${el._id}`}>{el.name}</Link></h1>
        )
     })
     return (
         <div>
             { newData }
         </div>
     )
}

export default Service
