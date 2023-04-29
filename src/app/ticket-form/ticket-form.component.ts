import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ticket } from '../models/ticket';
import { TicketService } from '../services/ticket.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ticket-form',
    templateUrl: './ticket-form.component.html',
    styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

    ticketForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private ticketService: TicketService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    initForm(): void {
        this.ticketForm = this.formBuilder.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            author: ['', Validators.required]
        });
    }

    onSubmitForm(): void {
        const formValue = this.ticketForm.value;
        const newTicket = new Ticket(
            formValue['title'],
            formValue['description'],
            formValue['author']
        );
        this.ticketService.createTicket(newTicket).subscribe(
            (response) => {
                console.log('Ticket created successfully');
                this.router.navigate(['/tickets']);
            },
            (error) => {
                console.log('Error while creating ticket');
            }
        );
    }

}
