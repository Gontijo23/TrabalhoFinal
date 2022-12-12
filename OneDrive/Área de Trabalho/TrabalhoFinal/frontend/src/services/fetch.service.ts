import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor() { }
  //Url para requisições ao backend no servidor local
  baseUrl: string = 'http://localhost:5000';


  //Retorna os dados de eventos na rota /eventos do backend
  getEventos(): Promise<any> {
    return axios.get(`${this.baseUrl}/eventos`);
  }

  //Envia o número da página seguinte ao backend
  postHome(pagina: number): Promise<any>{
    return axios.post(`${this.baseUrl}/home/${pagina}`);
  }
  //Envia o nome pesquisado ao backend
  postPesquisa(nome: string): Promise<any>{
    return axios.post(`${this.baseUrl}/pesquisa/${nome}`);
  }

  //Retorna os dados do evento com base na palavra chave
  getEventByKeyword(): Promise<any> {
    return axios.get(`${this.baseUrl}/res/eventos`);
  }

}
