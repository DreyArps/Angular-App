import { Component, OnInit  } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

import { MatTableDataSource } from '@angular/material/table';

import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';


import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  data: any[] = [];

  first_name: any;
  last_name: any;
  email:any;

  userAddForm() {
throw new Error('Method not implemented.');


}
  users: any[] = [];
  displayedColumns: string[] = ['position', 'avatar', 'first_name', 'last_name', 'email',  'action'];
  dataSource = new MatTableDataSource<any>();
  constructor(private userService: UserService,
    public dialog: MatDialog ) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.dataSource = new MatTableDataSource(data.data); 
      console.log(data.data)
    });
  }


  removeUser(id: number){
    const Confirmed = window.confirm("Are you sure you want to delete this user?");

    if (!Confirmed){ 

      return;
    } 

   this.userService.deleteUser(id).subscribe(() => {
    // Remove the user from the data source
    const index = this.dataSource.data.findIndex(user => user.id === id);
    if (index !== -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource._updateChangeSubscription(); 
      alert('User Deleted!');
    }
  });
    
  }
  
  AddUserDialogComponent(): void { 
    const dialogRef = this.dialog.open(AddUserDialogComponent, { 
      data: {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
        this.userService.createUser(result.editedData).subscribe(newUser => {  
          this.dataSource.data.push(newUser);
          this.dataSource._updateChangeSubscription(); 
        });
      }
    });
  }
  editUser(data: any) {
      const originalData = {...data};
    this.dialog.open(AddUserDialogComponent, {
      data,
    }).afterClosed().subscribe(result => {
      if (result && result.editedData) {
  
        console.log('Edited data:', result.editedData);
          const mergedData = { ...originalData, ...result.editedData};
             this.userService.updateUser(data.id, mergedData).subscribe(updatedUser => {
                  const index = this.dataSource.data.findIndex(user => user.id === data.id);
                      if (index !== -1) {
                          this.dataSource.data[index] = updatedUser;
                          this.dataSource._updateChangeSubscription();
                        }
                    });
                 } else if (result && result.newData) {
            console.log('New data:', result.newData);
        }
      });
    }
}