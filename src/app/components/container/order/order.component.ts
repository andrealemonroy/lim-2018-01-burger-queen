import { Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from '../../../services/services.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() order: any;
  @Input() price: number;
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
      window.location.reload();
    });
      // (doc) => {
      // console.log('Orden enviada' + doc.id);
      // return this.order;
  }
}
