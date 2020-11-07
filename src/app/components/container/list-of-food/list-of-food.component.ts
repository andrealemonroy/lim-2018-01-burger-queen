import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirestoreService } from '../../../services/services.service';

@Component({
  selector: 'app-list-of-food',
  templateUrl: './list-of-food.component.html',
  styleUrls: ['./list-of-food.component.css']
})

export class ListOfFoodComponent implements OnInit {
  public order: any;
  public price: any;

  @Output() orderEvent = new EventEmitter<string>();
  public orders: any;
  constructor(private firestoreService: FirestoreService) {
    this.firestoreService.getOrders().subscribe(data => {
      console.log(data);
      this.orders = data.filter(dat => {
        return dat['typeOfFood'] === 'desayuno';
      });
    });
  }
  ngOnInit() { }

  breakfast() {
    this.firestoreService.getOrders().subscribe(data => {
      this.orders = data.filter(dat => {
        return dat['typeOfFood'] === 'desayuno';
      });
    });
  }
  menu() {
    this.firestoreService.getOrders().subscribe(data => {
      this.orders = data.filter(dat => {
        return dat['typeOfFood'] === 'menu';
      });
    });
  }
  sendOrder(i) {
    this.orderEvent.emit(this.orders[i]);
    this.price = this.orders[i].price;
  }
}
