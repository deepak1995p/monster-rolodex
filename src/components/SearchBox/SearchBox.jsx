import React from 'react'
import './SearchBox.css'

const SearchBox = (props) =>(
    <input 
    className='search'
    type='search'
    placeholder={props.placeHolder}
    onChange={props.handleChange}

/>

)

   

export default SearchBox
