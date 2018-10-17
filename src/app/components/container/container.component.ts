import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }
  messages = [{}];
  message = '';
  ngOnInit() {
  }
  receiveOrder($event) {
    this.messages.push($event);
    this.message = $event;
  }
}
