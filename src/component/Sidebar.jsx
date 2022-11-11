import React from 'react'
import { Stack } from '@mui/material';
import {arr} from '../extraUtils/Utils'
import { useState } from 'react';
const selectedCategery='New'
const Sidebar = () => {
    // const [Nicon,updatenew]=useState(selectedCategery);

  return (
    <Stack direction="row" sx={{overflowY:'auto',height:{sx:'auto',md:"95%"},flexDirection:{md:'column'}}}>
        {
            arr.map((ele,index)=>(
                <button key={ele.name} className='Icon_sidebar' style={{background:ele.name===selectedCategery && '#FC1503', color:"white"}}>
                    <span style={{color:ele.name===selectedCategery ? 'white':'red',marginRight:"15px"}} >{ele.Icon}</span>
                    <span style={{opacity:ele.name===selectedCategery ?'1':'0.8'}} >{ele.name}</span>
                </button>

            ))
        }
    </Stack>
  )
}

export default Sidebar