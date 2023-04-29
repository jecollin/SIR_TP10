import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../src/app/models/user';
import { UserService } from '../user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    users: User[];

    constructor(private router: Router, private userService: UserService) { }

    ngOnInit() {
        this.userService.getUsers()
            .subscribe( data => {
                this.users = data;
            });
    }

    deleteUser(user: User): void {
        this.userService.deleteUser(user)
            .subscribe( data => {
                this.users = this.users.filter(u => u !== user);
            })
    };

    updateUser(user: User): void {
        localStorage.removeItem("editUserId");
        localStorage.setItem("editUserId", user.id.toString());
        this.router.navigate(['edit-user']);
    };

    createUser(): void {
        this.router.navigate(['add-user']);
    };

}
