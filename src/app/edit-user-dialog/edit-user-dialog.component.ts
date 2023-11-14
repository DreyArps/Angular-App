import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent implements OnInit {
  editUserForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.editUserForm = this.fb.group({
      first_name: new FormControl(data.first_name, Validators.required),
      last_name: new FormControl(data.last_name, Validators.required),
      email: new FormControl(data.email, [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.editUserForm.valid) {
      this.dialogRef.close(this.editUserForm.value);
    }
  }
}
