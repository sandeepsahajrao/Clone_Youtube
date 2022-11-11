import React from "react";
import axios from "axios";


const Main_url='https://youtube-v31.p.rapidapi.com';

const options = {

  url:Main_url,
  params: {
    maxResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': process.env.api_call,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const FetchApi=async (url)=>{    
    const {data}=await axios.get(`{$Main_url}/{$url}`,options)
    console.log(data)
    return data;
}

