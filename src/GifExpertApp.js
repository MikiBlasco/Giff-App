import React from 'react';
import { useState } from 'react';
import AddCategory from './Components/AddCategory';
import { GiffGrid } from './Components/GiffGrid';


const GifExpertApp = ( { defaultCategories = [] } ) => {

    //const [categories, setCategories] = useState(['Dragon Ball']);
    const [categories, setCategories] = useState( defaultCategories );

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