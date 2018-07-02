import Axios from 'axios';

const API_KEY="656d31c6a0494e6f0a16985a7c758ff1";
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = Axios.get(url);
  return {
    type: FETCH_WEATHER
    , payload: request
  };
};
