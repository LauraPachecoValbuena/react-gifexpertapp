import React, { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        console.log(e.target.value);
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        //esto es para prevenir el comportamiento por defecto del formulario
        e.preventDefault();

        //trim() se utiliza xa borrar los epacios que pueda traer el valor.
        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats ]); //en función del orden pintará primero el valor que se introduca en el input
            setInputValue('');

        }

    }

    return (
      
        <form onSubmit={ handleSubmit }>
            <input 
            type="text"
            value= { inputValue }
            onChange={ handleInputChange }
            />
        </form>
    
    )

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
