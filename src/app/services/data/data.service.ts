import { Injectable } from '@angular/core';
import { Todo } from '../../shared/todo';

const Todos: Todo[] = [
  {
    title: 'todo-title',
    desc: 'todo-description',
    date: new Date()
  },
  {
    title: 'my-title',
    desc: 'my-description',
    date: new Date()
  },
];
// Date().toLocaleDateString
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private navParams: any = {};
  constructor() { }

  getParams() {
    return this.navParams;
  }
  setParams(body) {
    this.navParams = body;
  }

  getData() {
    return Todos;
  }
  postData(obj: Todo) {
    Todos.push(obj);
  }
  updateData() {
    throw new Error('method not implemented');
  }
  deleteData() {
    throw new Error('method not implemented');
  }

}
