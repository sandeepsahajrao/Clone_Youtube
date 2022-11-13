import React from 'react'
import { Stack } from '@mui/material';
import {arr} from '../extraUtils/Utils'
import { useState } from 'react';
// const selectedCategery='New'
const Sidebar = ({selectedCategery,setselectedCategery}) => {
    // const [Nicon,updatenew]=useState(selectedCategery);

  return (
    <Stack direction="row" gap={'20px'} sx={{overflowY:'auto',height:{sx:'auto',md:"90vh",lg:'90vh'},flexDirection:{md:'column'},gap:'20px'}}>
        {
            arr.map((ele,index)=>(
                <button key={ele.name} className='Icon_sidebar' onClick={(()=>{
                    setselectedCategery(ele.name)
                })} style={{background:ele.name===selectedCategery && '#FC1503', color:"white"}}>
                    <span style={{color:ele.name===selectedCategery ? 'white':'red',marginRight:"15px"}} >{ele.Icon}</span>
                    <span style={{opacity:ele.name===selectedCategery ?'1':'0.8'}} >{ele.name}</span>
                </button>

            ))
        }
    </Stack>
  )
}

export default Sidebar