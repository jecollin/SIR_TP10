import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { TicketCommentListComponent } from './components/ticket-comment-list/ticket-comment-list.component';
import { TicketCommentFormComponent } from './components/ticket-comment-form/ticket-comment-form.component';

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
