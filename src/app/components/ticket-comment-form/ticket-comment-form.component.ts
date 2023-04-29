import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketComment } from '../models/ticket-comment.model';

@Component({
    selector: 'app-ticket-comment-form',
    templateUrl: './ticket-comment-form.component.html',
    styleUrls: ['./ticket-comment-form.component.css']
})
export class TicketCommentFormComponent {
    commentForm: FormGroup;

    @Output() commentAdded = new EventEmitter<TicketComment>();

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.commentForm = this.fb.group({
            author: ['', Validators.required],
            body: ['', Validators.required]
        });
    }

    onSubmit() {
        const comment: TicketComment = {
            author: this.commentForm.value.author,
            body: this.commentForm.value.body
        };
        this.commentAdded.emit(comment);
        this.commentForm.reset();
    }
}
