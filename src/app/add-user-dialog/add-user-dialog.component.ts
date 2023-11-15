import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit {
 
  addUserform: FormGroup;
  isEditing: boolean;
  title: string = 'Create User';

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    // Initialize the form in the constructor
    if(this.data){
      this.addUserform = this.fb.group({
        first_name: [this.data?.first_name || '', Validators.required],
        last_name: [this.data?.last_name || '', Validators.required],
        email: [this.data?.email || '', [Validators.required, Validators.email]],
        // Define your form controls here
      });
    } else {
      this.addUserform = this.fb.group({
        first_name: ['', Validators.required],
        last_name: [ '', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      });

    }
    if(this.data.first_name == undefined && this.data.last_name == undefined && this.data.email == undefined){
      this.title = 'Create User';
    } else {
      this.title = 'Update User';
    }
    this.isEditing = !!this.data;
  }

  ngOnInit(): void {

    // Any additional initialization logic
  }

  close() {
    this.dialogRef.close();
  }

  // onSubmit() {
  //   if (this.addUserform.valid) {
  //     const formData = this.addUserform.value;
  //     console.log('Form submitted:', formData);
  //     this.dialogRef.close(this.data);
  //   }
  // }

  // onSubmit() {
  //   if (this.addUserform.valid) {
  //     const userData = this.addUserform.value;

  //     if (this.isEditing) {
  //       // Emit edited data
  //       this.dialogRef.close({ editedData: userData });
  //     } else {
  //       // Emit new data
  //       this.dialogRef.close({ newData: userData });
  //     }
  //   }

  onSubmit() {
    if (this.addUserform.valid) {
      const userData = this.addUserform.value;
      console.log(userData)
      if (this.isEditing) {
        this.dialogRef.close({ editedData: userData});
      } else {
       
        this.dialogRef.close({ newData: userData });
      }
    }
  }

}