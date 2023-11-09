import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent {
email: any;

  constructor(
    private dialogRef: MatDialogRef<AddUserDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any,
  ){
   
    
 
  }
}
