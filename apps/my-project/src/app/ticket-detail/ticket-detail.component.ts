import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Ticket } from '../models/ticket';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css'],
})
export class TicketDetailComponent implements OnInit {
  ticket: Ticket = new Ticket(
    0,
    '',
    '',
    '',
    '',
    new Date(),
    new Date(),
    '',
    ''
  );

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService
  ) {}

  ngOnInit() {
    this.getTicket();
  }

  getTicket(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.ticketService
        .getTicketById(+id)
        .subscribe((ticket) => (this.ticket = ticket));
    }
  }
}
