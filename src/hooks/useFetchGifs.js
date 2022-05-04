import { useState, useEffect } from 'react' //hace falta porque estos hooks tb pueden tener su estado y podría indicarle a otros componenetes que lo usen que RENDERICEN porque algo cambió 
import { getFetchGifs } from '../helpers/getFetchGifs';

export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getFetchGifs( category )
          .then( imgs => { 

                 setState({
                     data: imgs,
                     loading: false,
               }); 

        });
        
    }, [category] )
        
            // useEffect( () => {
    //     //le mandamos "category" a la func que está en GifGrid.
    //     //como GifGrid retorna una promesa le podemos poner el"then".
    //     getFetchGifs(category)
    //     //el then contendra en el capuccino "imgs" el return/resol. de la promesa (con la colección de gifs) que se lo meteremos a la función de setImages.
    //     .then( imgs => setImages( imgs ) )
    //     //.then( setImages ) así sería lo mismo porque coincide el capuccino de then con lo que meteremos en setImages.

    // }, [ category ] )

    


    return state; // { data:[], loading: true };
}
