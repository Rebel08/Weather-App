import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY= '8d49bc9bac3b91413116aa53fc1c4642'

export const fetchWeather = async (query)=>{
    const {data}= await axios.get(URL,{
        params:{
            q:query,
            units:'Metric',
            APPID:API_KEY,
        }
    });
    return data;
}