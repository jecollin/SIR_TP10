import { Component, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { TicketComment } from '../models/ticket-comment';

@Component({
    selector: 'app-ticket-comment-form',
    templateUrl: './ticket-comment-form.component.html',
    styleUrls: ['./ticket-comment-form.component.css']
})
export class TicketCommentFormComponent {
    commentForm: FormGroup = new FormGroup({name: new FormControl('')});

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
        const comment: TicketComment = new TicketComment(
            0, // l'ID sera généré automatiquement par le serveur
            this.commentForm.value.body,
            this.commentForm.value.author,
            0, // l'ID du ticket sera défini ultérieurement
            new Date()
        );
        this.commentAdded.emit(comment);
        this.commentForm.reset();
    }

}
