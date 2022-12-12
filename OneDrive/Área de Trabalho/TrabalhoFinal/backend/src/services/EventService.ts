import axios from "axios";
import { key } from "../keys";
import { keyword } from "../routes"


class EventService{
    getEventByKeyword = axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=lakers&apikey=${key}`)
    .then(response => {
        return response.data;
    })
    .catch(error => console.log(error));
}

export default EventService;