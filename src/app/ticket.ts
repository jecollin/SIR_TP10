export class Ticket {
  id: number =0;
  title: string;
  description: string;
  status: string;
  priority: string;
  tags: string[];
  created_at: Date;
  updated_at: Date;

  constructor(
    title: string,
    description: string,
    status: string,
    priority: string,
    tags: string[]
  ) {
    this.title = title;
    this.description = description;
    this.status = status;
    this.priority = priority;
    this.tags = tags;
  }
}
