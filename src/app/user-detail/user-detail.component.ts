import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FirebaseObjectObservable } from 'angularfire2/database';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserService]
})
export class UserDetailComponent implements OnInit {
  userId: string;
  userToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private userService: UserService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userId = (urlParameters['id']);
    });
    this.userToDisplay = this.userService.getUserById(this.userId);
    console.log(this.userToDisplay);
  }

}