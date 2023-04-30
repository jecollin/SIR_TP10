export class TicketComment {
  private _id: number;
  private _comment: string;
  private _author: string;
  private _ticketId: number;
  private _createdDate: Date;

  constructor(
    id: number,
    comment: string,
    author: string,
    ticketId: number,
    createdDate: Date
  ) {
    this._id = id;
    this._comment = comment;
    this._author = author;
    this._ticketId = ticketId;
    this._createdDate = createdDate;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get ticketId(): number {
    return this._ticketId;
  }

  set ticketId(value: number) {
    this._ticketId = value;
  }

  get createdDate(): Date {
    return this._createdDate;
  }

  set createdDate(value: Date) {
    this._createdDate = value;
  }
}
