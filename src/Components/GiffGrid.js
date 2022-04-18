import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GiffGrid = ({ category }) => {
    //renombramos con la desestructuración la data para que se llame imagenes.
    const {data: images, loading} = useFetchGifs( category ); //state es producto del customHook


  return (
    <>

            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            { loading && <p className='animate__animated animate__flash'>Loading...</p> }

            <div className='card-grid'>


                {
                      images.map((img) => 
                        <GifGridItem 
                          key={ img.id }    
                          { ...img } //así mando cada una de las propiedades del objeto "img" como si fueran indendientes.
                          /> )
                }
            
            </div>

    </>

  )
}
