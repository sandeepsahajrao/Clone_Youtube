import React from 'react'
import { Paper, IconButton } from '@mui/material';
// import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const SearchBar = () => {
    const [search,setsearch]=useState('')
    return (
        <Paper component='form' onSubmit={()=>{} }
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
            <input className='searchBar' onChange={(e) => { }} placeholder="search...." value='' />

            <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
                {/* <Search></Search> */}
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchBar