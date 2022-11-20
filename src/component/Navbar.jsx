import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from '../extraUtils/Utils';
import { SearchBar } from '../component/index'

const Navbar = () => (
  <Stack direction='row' height='50px' display='flex' alignItems="center" marginBottom={2} sx={{ position: 'sticky', background: "#000", justifyContent: "space-between", top: 0,zIndex:1 }} style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}} className='Navbar'>
    <Link to="/" sx={{ display: 'flex', alignItems: "center", marginTop: '20px'}}>
      <img src={logo} alt="logo" height={40} />
    </Link>
    <SearchBar></SearchBar>
  </Stack>
)

export default Navbar;