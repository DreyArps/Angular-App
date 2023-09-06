import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserlistComponent } from './userlist/userlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-app';

  constructor(private _dialog: MatDialog){}
  userAddForm (){ 
    this._dialog.open(UserlistComponent);
  }
}
