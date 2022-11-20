
import axios from "axios";
const Main_url = "https://youtube-v31.p.rapidapi.com";
const options = {
  url: Main_url,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": '429cb24795mshd2a34df539d18bap1bdffdjsnf6e3f1c3ad4f',
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const FetchApi = async (url) => {
  const { data } = await axios.get(`${Main_url}/${url}`, options);

  return data;
};
