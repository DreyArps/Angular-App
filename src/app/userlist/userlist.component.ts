import { Component, OnInit  } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { MatTableDataSource } from '@angular/material/table';

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
  displayedColumns: string[] = ['position', 'first_name', 'last_name', 'email', 'avatar'];
  dataSource = new MatTableDataSource<any>();
  constructor(private userService: UserService) {}

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
  }

