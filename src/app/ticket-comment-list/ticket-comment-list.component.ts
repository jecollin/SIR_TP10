import { Component, Input, OnInit } from '@angular/core';
import { TicketComment } from '../models/ticket-comment';

@Component({
    selector: 'app-ticket-comment-list',
    templateUrl: './ticket-comment-list.component.html',
    styleUrls: ['./ticket-comment-list.component.css']
})
export class TicketCommentListComponent implements OnInit {
    @Input() comments!: TicketComment[];

    constructor() { }

    ngOnInit(): void {
    }

}
