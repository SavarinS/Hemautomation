import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from 'cluster';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component implements OnInit {
  title = 'Hus 1';

  private apiUrl = 'http://localhost:3000/homes/1';
  object: Object;
  
  

  constructor(private http: HttpClient) { 
    console.log('Hello from contructor home1');
    this.getData();
    this.getHomes();
  }

  getData(){
    console.log('Hello from getData function home1');
    return this.http.get(this.apiUrl)
  }

  getHomes(){
    console.log('Hello from getHomes function home1');
    this.getData().subscribe(object => {
      console.log(object);
      this.object = object
    })
  }

  ngOnInit() {
  }

}
