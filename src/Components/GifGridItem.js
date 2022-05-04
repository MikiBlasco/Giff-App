import React from 'react'
import ProptTypes from 'prop-types'

export const GifGridItem = ({title, url}) => {

  return (

    <div className='card animate__animated animate__bounceIn'>

    <img src={ url } alt={ title } />
    <p> { title } </p>  

    </div>
  )

}

GifGridItem.proptTypes = {
  title: ProptTypes.string.isRequired,
  url: ProptTypes.string.isRequired
}




 
