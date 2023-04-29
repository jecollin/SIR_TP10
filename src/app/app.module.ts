import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { TicketComponent } from './ticket/ticket.component';
import { UserComponent } from './user/user.component';
import { TicketCommentComponent } from './ticket-comment/ticket-comment.component';
import { BugTicketComponent } from './bug-ticket/bug-ticket.component';
import { FeatureRequestTicketComponent } from './feature-request-ticket/feature-request-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    UserComponent,
    TicketCommentComponent,
    BugTicketComponent,
    FeatureRequestTicketComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
