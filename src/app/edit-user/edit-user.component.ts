// import { Component, Input, OnInit } from '@angular/core';
// import { User } from '../user.model';
// import { UserService } from '../user.service';
// import { Router } from '@angular/router';
//
// @Component({
//   selector: 'app-edit-user',
//   templateUrl: './edit-user.component.html',
//   styleUrls: ['./edit-user.component.css'],
//   providers: [UserService]
// })
// export class EditUserComponent implements OnInit {
//   @Input() selectedUser;
//
//
//   constructor(private router: Router, private userService: UserService) { }
//
//   ngOnInit() {
//   }
//
//   beginUpdatingUser(userToUpdate) {
//     this.userService.updateUser(userToUpdate);
//   }
//
//   beginDeletingUser(userToDelete) {
//     if(confirm("Are you sure you would like to delete this user? This action cannot be undone")){
//       this.userService.deleteUser(userToDelete);
//       this.router.navigate(['user']);
//     }
//   }
//
// }
