class task {
  constructor(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.id = crypto.randomUUID();
  }
}

export { task };
