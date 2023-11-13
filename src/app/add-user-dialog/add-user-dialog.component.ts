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

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    // Initialize the form in the constructor
    this.addUserform = this.fb.group({
      first_name: new FormControl(this.data.first_name, Validators.required),
      last_name: new FormControl(this.data.last_name, Validators.required),
      email: new FormControl(this.data.email, [Validators.required, Validators.email]),
      // Define your form controls here
    });
  }

  ngOnInit(): void {
    console.log(this.data)
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

  onSubmit() {
   if (this.addUserform.valid) {
    const newUser = {
      first_name: this.addUserform.get('first_name')?.value,
      last_name: this.addUserform.get('last_name')?.value,
      email: this.addUserform.get('email')?.value,
    };
      this.dialogRef.close(newUser)
    }
  }

}