import axios from "axios";
import { key } from "../keys";


class BuscaService{
    getEvent = axios.get(`https://app.ticketmaster.com/discovery/v2/suggest.json?apikey=${key}`)
    .then(response => {
        return response.data;    
    })
    .catch(error => console.log(error));
}

export default BuscaService;