import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
// import { logo } from '../extraUtils/Utils';
// import './logoYoutube1.png'
import { SearchBar } from '../component/index'
import logoY from './logoYoutube/youtubeLogo.png'

const Navbar = () => (
  <Stack direction='row' alignItems="center" marginBottom={2} sx={{ position: 'sticky', background: "#000", justifyContent: "space-between", top: 0,zIndex:1 }} style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}>
    <Link to="/" sx={{ display: 'flex', alignItems: "center", marginTop: '20px'}}>
      <img src={logoY} alt="logo" height={40} style={{marginLeft:'20px'}} />
    </Link>
    <SearchBar></SearchBar>
  </Stack>
)

export default Navbar;