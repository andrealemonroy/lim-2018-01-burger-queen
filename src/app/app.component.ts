import { Component } from '@angular/core';
import { FirestoreService} from '../app/services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  constructor(private _firestoreService: FirestoreService ) {}
}
