import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit {
  addUserform: FormGroup;

  constructor(
    private   fb: FormBuilder,
    private dialogRef: MatDialogRef<AddUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    
    // Initialize the form in the constructor
    this.addUserform = this.fb.group({
      // Define your form controls here
    });
  }

  ngOnInit(): void {
    // Any additional initialization logic
  }

  close() {
    this.dialogRef.close();
  }
}
