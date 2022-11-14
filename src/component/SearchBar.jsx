import React from 'react'
import { Paper, IconButton } from '@mui/material';
// import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchTerm,setsearch]=useState('');
    const navigate=useNavigate()
    const handelSearch=(e)=>{
        e.preventDefault();
        if(searchTerm){
            navigate(`/search/${searchTerm}`);
            
            setsearch('')
        }
    }
    return (
        <Paper component='form' onSubmit={(handelSearch)}
        sx={{
                display:'flex',
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                justifyContent:'center',
                alignItem:'center',
                mr: { sm: 5 },
                height:'30px'
            }}>
            <input className='searchBar' onChange={(e) => setsearch(e.target.value)} placeholder="search...." value={searchTerm} />

            <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
                {/* <Search></Search> */}
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchBar