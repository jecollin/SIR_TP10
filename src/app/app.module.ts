import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketService } from './services/ticket.service';
import { UserService } from './services/user.service';
import { TicketCommentService } from './services/ticket-comment.service';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TicketService,
    UserService,
    TicketCommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
