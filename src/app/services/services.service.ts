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
  createOrder(data: {
    dataOrder: string
  }) {
    return this.firestore.collection('order').add(data);
  }

  getOrder(orderId: string) {
    return this.firestore.collection('order').doc(orderId).snapshotChanges();
  }

  getOrders() {
    return this.firestore.collection('order').valueChanges();
  }

  updateOrder(orderId: string, data: any) {
    return this.firestore.collection('order').doc(orderId).set(data);
  }
  addOrder(id) {
    this.orders['order'] = this.orders['order'].map((order) => {
      if (order.id === id) {
        return { ...order};
      }
      return this.orders;
    });
  }
}
