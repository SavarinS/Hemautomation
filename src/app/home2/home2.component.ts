import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.sass']
})
export class Home2Component implements OnInit {
  title = 'Hus 2';
  

  private apiUrl = 'http://localhost:3000/homes/2';
  object: Object;
  //private apiUrl = 'assets/config.json';
  constructor(private http: HttpClient) { 
    console.log('Hello from contructor home2');
    this.getData();
    this.getHomes();
  }

  getData(){
    console.log('Hello from getData function');
    return this.http.get(this.apiUrl)
  }

  getHomes(){
    console.log('Hello from getHomes function');
    this.getData().subscribe(object => {
      console.log(object);
      this.object = object
    })
  }
  ngOnInit() {
  }

}
