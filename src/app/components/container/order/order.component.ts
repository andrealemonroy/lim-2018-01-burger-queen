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
  @Output() deleteEvent = new EventEmitter<string>();
  ord: any;
  data: any;
  id: any;
  constructor(private _firestoreService: FirestoreService) {
    // this._firestoreService.getSentOrders().subscribe((data) => {
    //   console.log(data);
    //   data.map((dat, i) => {
    //     console.log(i);
    //     console.log(dat['data'][i]);
    //       this.total = dat.price.reduce((a, b) => a + b, 0);
    //   });
    // });
  }

  ngOnInit() {
  }

  sendOrder() {
    this._firestoreService.updateOrder(this.order).then((doc) => {
      // console.log(doc.id);
      // this.deleteFood(doc.id);
      // this.id = doc.id;
      window.location.reload();
    });
  }
  deleteFood(id) {
    console.log(this.order[id]);

    this.order[id] = {dataOrder: '', price: null};
    this.deleteEvent.emit(this.order[id]);
  }

}
