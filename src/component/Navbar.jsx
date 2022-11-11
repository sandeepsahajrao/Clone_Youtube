import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from '../extraUtils/Utils';
import { SearchBar } from '../component/index'

const Navbar = () => (
  <Stack direction='row' alignItems="center" marginBottom={2} sx={{ position: 'sticky', background: "#000", justifyContent: "space-between", top: 10 }}>
    <Link to="/" sx={{ display: 'flex', alignItems: "center", marginTop: '20px'}}>
      <img src={logo} alt="logo" height={40} />
    </Link>
    <SearchBar></SearchBar>
  </Stack>
)

export default Navbar;