import React from 'react'
import {useParams} from 'react-router-dom'
import Data from '../companents/ServicesData'

const ServicesDeytail = () => {

    const params = useParams()
    console.log(useParams())
    
    const dataParams = Data.find((el)=>{
      return el._id === params.id
    })
    console.log(dataParams)
    return (
        <div>
            <h1>{dataParams.name}</h1>
            <h1>{dataParams.price}</h1>
            <h1>{dataParams.description}</h1>
        </div>
    )
}

export default ServicesDeytail
