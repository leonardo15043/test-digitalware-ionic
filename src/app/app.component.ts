import { Component } from '@angular/core';
import { DbService } from './core/services/db.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public database:DbService 
  ) {
    this.database.newDatabase();
  }
}
