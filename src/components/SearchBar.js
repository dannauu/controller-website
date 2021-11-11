import React, { onChange } from 'react'
import '../App.css'

const SearchBar = () => {
    return (
        <>

            <input placeholder='Enter Name' className='searchInput'></input>
            <button className='searchBtn'><i class="fas fa-search"></i></button>

        </>
    )
}

export default SearchBar


// add margin right of text input