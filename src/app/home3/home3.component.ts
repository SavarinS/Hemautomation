import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.sass']
})
export class Home3Component implements OnInit {
  title = 'Hus 3';

  private apiUrl = 'http://localhost:3000/homes/3';
  object: Object;
  constructor(private http: HttpClient) { 
    console.log('Hello from contructor home3');
    this.getData();
    this.getHomes();
  }

  getData(){
    console.log('Hello from getData function home3');
    return this.http.get(this.apiUrl)
  }

  getHomes(){
    console.log('Hello from getHomes function home3');
    this.getData().subscribe(object => {
      console.log(object);
      this.object = object
    })
  }

  ngOnInit() {
  }

}
