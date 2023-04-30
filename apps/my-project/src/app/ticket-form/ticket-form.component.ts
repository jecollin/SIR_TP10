import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Ticket } from '../models/ticket';
import { TicketService } from '../services/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css'],
})
export class TicketFormComponent implements OnInit {
  ticketForm: FormGroup = new FormGroup({ name: new FormControl('') });

  constructor(
    private formBuilder: FormBuilder,
    private ticketService: TicketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.ticketForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', Validators.required],
    });
  }

  onSubmitForm(): void {
    const formValue = this.ticketForm.value;
    const newTicket = new Ticket(
      0, // L'ID sera attribué automatiquement par le service
      formValue['title'],
      formValue['description'],
      'Open', // Le statut initial est "Ouvert"
      'Normal', // La priorité initiale est "Normale"
      new Date(), // La date de création est la date actuelle
      new Date(), // La date de mise à jour est également la date actuelle
      formValue['author'],
      formValue['author']
    );
    this.ticketService.addTicket(newTicket).subscribe(
      (response) => {
        console.log('Ticket créé avec succès');
        this.router.navigate(['/tickets']);
      },
      (error) => {
        console.log('Erreur lors de la création du ticket');
      }
    );
  }
}
