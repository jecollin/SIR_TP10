import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Ticket } from '../models/ticket';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService, private router: Router) {}

  ngOnInit() {
    this.getTickets();
  }

  getTickets(): void {
    this.ticketService
      .getTickets()
      .subscribe((tickets) => (this.tickets = tickets));
  }

  onSelect(ticket: Ticket): void {
    this.router.navigate(['/ticket-detail', ticket.id]);
  }

  add(title: string, description: string): void {
    title = title.trim();
    description = description.trim();
    if (!title || !description) {
      return;
    }
    this.ticketService
      .addTicket({ title, description } as Ticket)
      .subscribe((ticket) => {
        this.tickets.push(ticket);
      });
  }
}
