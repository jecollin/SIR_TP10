import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TicketComment } from '../models/ticket-comment';

@Injectable({
    providedIn: 'root'
})
export class TicketCommentService {
    private baseUrl = 'http://localhost:8080/ticketsystem/api'; // Base URL for the REST API

    constructor(private http: HttpClient) { }

    // Retrieve all comments for a given ticket
    getCommentsByTicketId(ticketId: number): Observable<TicketComment[]> {
        const url = `${this.baseUrl}/tickets/${ticketId}/comments`;
        return this.http.get<TicketComment[]>(url);
    }

    // Add a new comment for a given ticket
    addComment(ticketId: number, comment: TicketComment): Observable<TicketComment> {
        const url = `${this.baseUrl}/tickets/${ticketId}/comments`;
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post<TicketComment>(url, comment, httpOptions);
    }

    // Update an existing comment
    updateComment(comment: TicketComment): Observable<any> {
        const url = `${this.baseUrl}/comments/${comment.id}`;
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.put(url, comment, httpOptions);
    }

    // Delete a comment by its ID
    deleteComment(commentId: number): Observable<any> {
        const url = `${this.baseUrl}/comments/${commentId}`;
        return this.http.delete(url);
    }
}
