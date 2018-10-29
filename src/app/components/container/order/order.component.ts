import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirestoreService } from '../../../services/services.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() order: any;
  @Input() price: number;
  @Input() add: any;
  @Output() deleteEvent = new EventEmitter<string>();
  // @Output() addEvent = new EventEmitter<number>();
  ord: any;
  data: any;
  id: any;
  aditional: any;
  constructor(private _firestoreService: FirestoreService) {

  }

  ngOnInit() {
  }

  sendOrder() {
    this._firestoreService.updateOrder(this.order).then((doc) => {
      console.log(doc.id);
      // window.location.reload();
    });
  }
  deleteFood(id) {
    console.log(this.order[id]);

    this.order[id] = { dataOrder: '', price: null };
    this.deleteEvent.emit(this.order[id]);
  }
  checkValue($event) {
    console.log($event);
    if ($event === 'A') {
      this.price = this.price + 1
    }
    else if( $event === 'B'){
      this.price = this.price -1
    }
    else if ($event === 'C') {
      this.price = this.price + 1
    }
    else if ($event === 'D'){
      this.price = this.price -1
    }
    console.log(this.price);
  }
}
