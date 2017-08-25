import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @Input() selectedUser;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  beginUpdatingUser(userToUpdate) {
    this.userService.updateUser(userToUpdate);
  }

  beginDeletingUser(userToDelete) {
    if(confirm("Are you sure you would like to delete this user? This action cannot be undone")){
      this.userService.deleteUser(userToDelete);
      this.router.navigate(['user']);
    }
  }

}
