import { Component, OnInit } from '@angular/core';
import { Ticket } from './ticket';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tickets: Ticket[];
  nouveauTicket: Ticket = new Ticket();

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.ticketService.getTickets()
      .subscribe(tickets => this.tickets = tickets);
  }

  ajouterTicket() {
    this.ticketService.ajouterTicket(this.nouveauTicket)
      .subscribe(ticket => {
        this.tickets.push(ticket);
        this.nouveauTicket = new Ticket();
      });
  }
}
