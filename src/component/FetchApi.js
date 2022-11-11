import React from "react";
import axios from "axios";


const Main_url='https://youtube-v31.p.rapidapi.com';

const options = {

  url: Main_url,
  params: {
    // relatedToVideoId: '7ghhRHRP6t4',
    // part: 'id,snippet',
    // type: 'video',
    maxResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': process.env.apiCall,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const FetchApi=async (url)=>{    
    const {data}=await axios.get(`{$Main_url}/{$url}`,options)
    return data;
}

