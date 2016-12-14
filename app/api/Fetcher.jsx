

import axios from 'axios';

let API_KEY = '10a8c006e50645f16bb3675ed81bc3c3';
const URI = `http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${API_KEY}`;

export default {
  getTemp(location){
    let encodedLocation = encodeURIComponent(location);
    let requestUri = `${URI}&q=${encodedLocation}`;
    return axios.get(requestUri)
      .then(
        (res) => {
          return res.data.main.temp;
        }
      )
      .catch(
        (res) => {
          throw new Error(res.data.message);
        }
      );
  },
  method2(arg1){
    console.log(arg1);
  }
}
