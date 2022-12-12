import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/services/fetch.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  array: {}[] = []
  constructor(private fetchService: FetchService) { }
  
  ngOnInit():void {
    this.fetchService.getEventos().then(response => {
      console.log(response.data);
      this.array = response.data;
    })
  }

}
