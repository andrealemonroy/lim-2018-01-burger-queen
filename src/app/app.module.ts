import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListOfFoodComponent } from './components/container/list-of-food/list-of-food.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { MyNavComponent } from './components/my-nav/my-nav.component';
import { ContainerComponent } from './components/container/container.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestore } from '@angular/fire/firestore';
// tslint:disable-next-line:max-line-length
// import { MatToolbarModule, MatCardModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTabsModule } from '@angular/material';
import { OrderComponent } from './components/container/order/order.component';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    ListOfFoodComponent,
    MyNavComponent,
    ContainerComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule,
    // MatTabsModule,
    // MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }