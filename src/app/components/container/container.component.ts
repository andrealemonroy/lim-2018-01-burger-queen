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
  aditional = [];
  ngOnInit() {
  }

  receiveOrder($event) {
    this.messages.push($event);
    this.message = $event;

    console.log(this.message);
    this.receivePrice();
    // this.deleteItem();
  }

  receivePrice() {
    this.total = this.messages.reduce((a, b) => a + b.price, 0);
  }
  // receiveAditional(){
  //   if (this.message['dataOrder'] === 'Hamburguesa Simple'){
  //     this.aditional = this.message['aditional']; 
  //   };
  // }
  deleteItem($event) {
    this.message = $event;

    this.total = this.messages.reduce((a, b) => a + b.price, 0);

    ;
  }
}
