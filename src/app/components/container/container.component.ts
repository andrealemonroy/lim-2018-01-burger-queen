import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  messages = [];
  message = [];
  total = 0;
  ngOnInit() {
  }

  receiveOrder($event) {
    this.messages.push($event);
    this.message = $event;
    this.receivePrice();
    // this.deleteItem();
  }

  receivePrice() {
    this.total = this.messages.reduce((a, b) => a + b.price, 0);
  }
  deleteItem($event) {
    this.message = $event;
    // console.log(this.messages);
    this.total = this.messages.reduce((a, b) => a + b.price, 0);

    ;
  }
}
