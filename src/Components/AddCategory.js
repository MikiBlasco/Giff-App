import React, {useState} from 'react';
import PropTypes from 'prop-types';


const AddCategory = (props) => {

   const [inputValue, setInputValue] = useState(''); //ponemos " " por que si dejamos vacío es undefined. Luego el del inputvalue en value es también undefined. Entonces nos sale el Warning the "component changing an uncontrolled input..."

   const handleInputChange = (e) => {
       setInputValue(e.target.value)
   }

   const handleSubmit = (e) => {
       e.preventDefault(); 

       //validation (trim para borrar espacios en blanco de de los lados)
       if ( inputValue.trim().length > 2 ) {

           props.setCategories(cat => [inputValue, ...cat]) 
           setInputValue('') // para que se vacíe el placeHolder al hacer submit. 

         }           
   }
  
    return (

        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>

    )

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory