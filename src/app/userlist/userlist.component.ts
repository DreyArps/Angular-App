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

  userAddForm() {
throw new Error('Method not implemented.');


}
  users: any[] = [];
  displayedColumns: string[] = ['position', 'first_name', 'last_name', 'email', 'avatar', 'action'];
  dataSource = new MatTableDataSource<any>();
  constructor(private userService: UserService,
    public dialog: MatDialog         ) {}

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
  
  AddUserDialogComponent(): void{ 

    const dialogRef = this.dialog.open(AddUserDialogComponent, { 
        });
    dialogRef.afterClosed().subscribe(result =>{
      
    });
  }
  }


