import React from 'react'
import {useGlobalContext} from '../context';
import Loading from './Loading';
import Cocktail from './Cocktail';

function CocktailList() {
    const{cocktails,loading}=useGlobalContext()
    
    if(loading){
        return <Loading/>
    }
    if(cocktails.length<1){
        return <h2 className='section-title'>Result not found</h2>
    }
    
    return (
        <section className='section'>
           <h2 className='section-title'>Cocktails</h2>
           <div className='cocktails-center'>
                {cocktails.map((cocktail)=>{
                    return <Cocktail key={cocktail.id} {...cocktail}/>
                })}
           </div>
        </section>
    )
}

export default CocktailList
