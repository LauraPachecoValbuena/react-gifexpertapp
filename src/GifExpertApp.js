import React , { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    //const handleAdd = () => {

        //dos manera de usar el useState para agregar un nuevo valor aun array.
        //setCategories([...categories, 'HunterXHunter']);
        //setCategories( cats => [...cats, 'HunterXHunter']);
        
    //}

    return (
        <>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories={ setCategories } />
        <hr></hr>


        <ol>
            {
                categories.map( category => (
                     //<li key={ category }> { category } </li>
                     <GifGrid 
                     key={ category }
                     category={ category }
                     />
                ))
            }
        </ol>
        </>
    );
};

//export default GifExpertApp;