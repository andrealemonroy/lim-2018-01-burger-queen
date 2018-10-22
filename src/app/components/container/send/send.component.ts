import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
  @Input() order: any;
  @Output() total = new EventEmitter<number>();
  constructor() {
    this.total = this.order.price;
   }

  ngOnInit() {
  }
}
