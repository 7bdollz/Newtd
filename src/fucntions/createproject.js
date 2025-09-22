class project {
  constructor(title, description, date, tasks = []) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.tasks = tasks;
    this.id = crypto.randomUUID();
  }
  getTasks() {
    return this.tasks;
  }
  addTask(task) {
    this.tasks.push(task);
  }
}

export { project };
