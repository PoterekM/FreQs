import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  users: FirebaseListObservable<any[]>;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  submitForm(name: string, title: string, description: string, image: string, website: string
    // , reason: string
  ) {
    var newUser: User = new User(name, title, description, image, website
      // , reason
    );
    this.userService.addUser(newUser);
  }

  goToDetailPage(clickedUser) {
    this.router.navigate(['user', clickedUser.$key]);
  }

}
