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
  currentRoute: string = this.router.url;
  users: FirebaseListObservable<any[]>;
  filterByUser: string = "allUsers";

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    console.log(this.router.url);
  }

  submitForm(name: string, title: string, description: string, image: string, website: string, priority: string) {
    var newUser: User = new User(name, title, description, image, website, priority);
    this.userService.addUser(newUser);
  }

  goToDetailPage(clickedUser) {
    this.router.navigate(['user', clickedUser.$key]);
  }

  onChange(optionFromMenu) {
    this.filterByUser = optionFromMenu;
  }

}
