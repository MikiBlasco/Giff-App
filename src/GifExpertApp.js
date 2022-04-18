import React from 'react';
import { useState } from 'react';
import AddCategory from './Components/AddCategory';
import { GiffGrid } from './Components/GiffGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = (e) => {

    //     setCategories(['Doraemon', ...categories, ])

    //     // setCategories( cats => [...cats, 'Doraemon'])
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

          <ol>
              { categories.map( (category) =>


               <GiffGrid  key={category} category={category} />

    


              )  }
          </ol>

        </>
    )

}

export default GifExpertApp