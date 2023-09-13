import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   private users = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      avatarUrl: 'https://via.placeholder.com/50'
    }
  ];

  getUsers() {
    return this.users;
  }

}
