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
  displayedColumns: string[] = ['position', 'first_name', 'last_name', 'email', 'avatar', 'action'];
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
   this.userService.deleteUser(id).subscribe(() => {
    // Remove the user from the data source
    const index = this.dataSource.data.findIndex(user => user.id === id);
    if (index !== -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource._updateChangeSubscription(); // Update the table
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
        // Add the new user to the data source
        this.userService.createUser(result).subscribe(newUser => {
          this.dataSource.data.push(newUser);
          this.dataSource._updateChangeSubscription(); // Update the table
        });
      }
    });
  }
}
