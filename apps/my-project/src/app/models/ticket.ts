export class Ticket {
  private _id: number;
  private _title: string;
  private _description: string;
  private _status: string;
  private _priority: string;
  private _createdDate: Date;
  private _updatedDate: Date;
  private _createdBy: string;
  private _updatedBy: string;

  constructor(
    id: number,
    title: string,
    description: string,
    status: string,
    priority: string,
    createdDate: Date,
    updatedDate: Date,
    createdBy: string,
    updatedBy: string
  ) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._status = status;
    this._priority = priority;
    this._createdDate = createdDate;
    this._updatedDate = updatedDate;
    this._createdBy = createdBy;
    this._updatedBy = updatedBy;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get priority(): string {
    return this._priority;
  }

  set priority(value: string) {
    this._priority = value;
  }

  get createdDate(): Date {
    return this._createdDate;
  }

  set createdDate(value: Date) {
    this._createdDate = value;
  }

  get updatedDate(): Date {
    return this._updatedDate;
  }

  set updatedDate(value: Date) {
    this._updatedDate = value;
  }

  get createdBy(): string {
    return this._createdBy;
  }

  set createdBy(value: string) {
    this._createdBy = value;
  }

  get updatedBy(): string {
    return this._updatedBy;
  }

  set updatedBy(value: string) {
    this._updatedBy = value;
  }
}
