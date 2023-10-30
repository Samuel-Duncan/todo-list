import format from 'date-fns/format';

export default class Todo {
  constructor(title, dueDate, isComplete = false) {
    this.title = title;
    this.dueDate = dueDate;
    this.isComplete = isComplete;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getDueDate() {
    return this.dueDate;
  }

  setDueDate() {
    this.dueDate = this.formatDate();
  }

  formatDate() {
    return format(new Date(this.dueDate, 'MM/dd/yyy'));
  }

  getCompletionStatus() {
    return this.isComplete;
  }

  setCompletionStatus() {
    this.isComplete = !this.isComplete;
  }
}
