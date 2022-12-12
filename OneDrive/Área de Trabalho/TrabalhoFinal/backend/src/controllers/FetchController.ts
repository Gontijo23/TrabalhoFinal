import { Request, Response } from "express";
import BuscaService from "../services/BuscaService";
import EventService from "../services/EventService";
import { Data } from "../models/Data";


export default{
    // retorna um array com 20 eventos
    async getEvent(req: Request, res: Response){
        let array_eventos: {}[] = [];
        
        const fetch = new BuscaService();
        const response = await fetch.getEvent;
        response._embedded.events.forEach((item: any) =>{
            const event= new Data();
            event.nome = item.name
            event.id = item.id;
            event.data = item.dates.start.localDate;
            event.hora = item.dates.start.localTime;
            event.imagem = item.images[0].url;
            event.link = item.url;
            array_eventos.push(event);
        })
        res.json(array_eventos)
    },

    async getEventByKeyword(req: Request, res: Response){
        let resultado_pesquisa: {}[] = [];

        const fetch = new EventService();
        const response = await fetch.getEventByKeyword;
        response._embedded.events.forEach((item: any) =>{
            const event = new Data();
            event.nome = item.name
            event.id = item.id;
            event.data = item.dates.start.localDate;
            event.hora = item.dates.start.localTime;
            event.imagem = item.images[0].url;
            event.link = item.url;
            resultado_pesquisa.push(event);
        })
        res.json(resultado_pesquisa)
    }
}