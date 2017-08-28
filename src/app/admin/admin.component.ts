import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

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
  }

  }
