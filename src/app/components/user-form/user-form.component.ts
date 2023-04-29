import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
    userForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private userService: UserService) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.userForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    onSubmitForm() {
        const formValue = this.userForm.value;
        this.userService.addUser(formValue).subscribe(
            () => {
                console.log('User added successfully');
                this.router.navigate(['/users']);
            },
            (error) => {
                console.error(error);
            }
        );
    }
}
