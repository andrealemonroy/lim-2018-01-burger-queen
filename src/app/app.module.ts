import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListOfFoodComponent } from './components/container/list-of-food/list-of-food.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { MyNavComponent } from './components/my-nav/my-nav.component';
import { ContainerComponent } from './components/container/container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestore } from 'angularfire2/firestore';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { OrderComponent } from './components/container/order/order.component';
import { SendComponent } from './components/container/send/send.component';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    ListOfFoodComponent,
    MyNavComponent,
    ContainerComponent,
    OrderComponent,
    SendComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
