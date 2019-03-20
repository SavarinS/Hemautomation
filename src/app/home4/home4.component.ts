import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.scss']
})
export class Home4Component implements OnInit {
  title = 'Hus 4';

  private apiUrl = 'http://localhost:3000/homes/3';
  object: Object;
  constructor(private http: HttpClient) { 
    console.log('Hello from contructor home4');
    this.getData();
    this.getHomes();
  }

  getData(){
    console.log('Hello from getData function home4');
    return this.http.get(this.apiUrl)
  }

  getHomes(){
    console.log('Hello from getHomes function home4');
    this.getData().subscribe(object => {
      console.log(object);
      this.object = object
    })
  }

  ngOnInit() {
  }

}
