import { Component, OnInit } from '@angular/core';
import { faAngleDown, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  faAngleDown = faAngleDown;
  faBell = faBell;
  Title = "Hemautomation";
  constructor() { }

  ngOnInit() {
  }

}
