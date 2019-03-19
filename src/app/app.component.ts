import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hemautomation';

  constructor (private http: HttpClient) {
    console.log('Hello from constructor');
  }

  ngOnInit(){
    let obs = this.http.get('https://jsonplaceholder.typicode.com/users/');
    obs.subscribe((response) => console.log(response));
    console.log('Hello from ngOnInit');
  }
}
