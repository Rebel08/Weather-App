import axios from 'axios';
import Api_Key from './apiKey';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY= Api_Key;

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