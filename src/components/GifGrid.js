import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //SIN desctructurar
    //const state = useFetchGifs();

    //console.log(state);

    //desectruturado
    //Cnd queremos asignarle otro nombre a data,lo hacemos con : seguido el nuevo nombre.
    const { data:images, loading } = useFetchGifs( category );

    //console.log(data);
    console.log(loading);

    
/*
    //const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs( category )
        .then( setImages );

        //Igual que lo de arriba pero más largo.
        //.then( imgs => setImages( imgs ));

    }, [ category ]) //si este array (arreglo de dependencía) está vacio sólo se va disparar el useEffect 1 vez.
    //se ejecuta la función getGifs cnd el compponenete sea renderizado la primear vez.
    //de lo contrario (le metemos category) le decimos que cada vez que cambie de category ejecute y renderize.
    
    */
    return (

        <> {/* este es el FRAGMENT */}

        <h3 className="animate__animated animate__fadeIn"> { category } </h3>

       {/* { loading ? 'Cargando...' : 'Datos cargados'} */}

        {/*  Se utiliza && puesto que es una cindición que SÓLO evalua si es true  */}
       { loading && <p className="animate__animated animate__fadeIn">Loading...</p>}

  
        <div className="card-grid">
                {
                    images.map ( img => (
                        <GifGridItem 
                        key={ img.id }
                        //img={ img } 
                        { ...img }
                        />
                    ))

                    //desestructurado
                    //images.map ({ id, title}) => (
                        //<li key={ id }> { title } </li>
                    //))

                    //SIN DESECTRUCTURAR
                    //  images.map ( img => (
                       // <li key={ img.id }> { img.title } </li>
                    //))
                }
            
            
        </div>
   

        </>
    )
}
