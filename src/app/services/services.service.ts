import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  orders = {};
  constructor(private firestore: AngularFirestore) { }
  getOrders() {
    return this.firestore.collection('order').valueChanges();
  }
  updateOrder(data: any) {
    // const date = new Date().getTime();
    return this.firestore.collection('orderToKitchen').add({ data });
  }
  // addOrder(id) {
  //   this.orders['order'] = this.orders['order'].map((order) => {
  //     if (order.id === id) {
  //       return { ...order };
  //     }
  //     return this.orders;
  //   });
  // }
}
