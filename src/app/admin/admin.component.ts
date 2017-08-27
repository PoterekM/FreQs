import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
// import { Router } from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [UserService]

})
export class AdminComponent implements OnInit {
  userId: string;
  userToDisplay;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.route.params.forEach((urlParameters) => {
    //   this.userId = (urlParameters['id']);
    // });
    // this.userToDisplay = this.userService.getUserById(this.userId);
  }

  submitForm(name: string, title: string, description: string, image: string, website: string, priority: string) {
    var newUser: User = new User(name, title, description, image, website, priority);
    // this.userService.addUser(newUser);
  }
}
