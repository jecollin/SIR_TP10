import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { TicketCommentListComponent } from './ticket-comment-list/ticket-comment-list.component';
import { TicketCommentFormComponent } from './ticket-comment-form/ticket-comment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketDetailComponent,
    UserListComponent,
    UserFormComponent,
    TicketFormComponent,
    TicketCommentListComponent,
    TicketCommentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
