import React from 'react'
import { Paper, IconButton } from '@mui/material';
// import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const SearchBar = () => {
    return (
        <Paper component='form' onSubmit={()=>{}}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 },
            }}>
            <input className='searchBar' onChange={() => { }} placeholder="search...." value='' />

            <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
                {/* <Search></Search> */}
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchBar