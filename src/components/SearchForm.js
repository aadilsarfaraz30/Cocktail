import React from 'react'
import {useGlobalContext} from '../context';

function SearchForm() {

    const {setSearchTerm}= useGlobalContext()
    const searchValue= React.useRef()
    
    React.useEffect(()=>{           //the moment app render the input will focused automatically
        searchValue.current.focus()
    },[])
    const searchCocktail=()=>{
        setSearchTerm(searchValue.current.value)  //when user type something 
    }                                             //everytime user will get new drinks
    
    const handleSubmit=(e)=>{ //when the input field is empty and user  
        e.preventDefault(); // press enter its re-render the list 
    }                       // to stop that we use this function
    return (
        <section className='section search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name' >
                        search your favorite cocktail
                    </label>
                    <input type='text' id='name'
                        ref={searchValue}
                        onChange={searchCocktail}/>
                </div>
            </form>
        </section>
    )
}

export default SearchForm
