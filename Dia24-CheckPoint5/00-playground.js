export class Authorization {
  checkAuthorization(user, task) {
    if (task.users.includes(user)) {
      task.completeTask()
    } else {
      throw new Error("No autorizado")
    }

  }
}

import { Task } from "./exercise";

export class TaskBuilder {
  constructor() {
     // Tu código aquí 👈
     this.task = new Task(0, '');
  }

  setId(id) {
     // Tu código aquí 👈
     this.task.id = id;
     return this;
  }

  setDescription(description) {
     // Tu código aquí 👈
     this.task.description = description;
     return this;
  }

  setCompleted(completed) {
     // Tu código aquí 👈
     this.task.completed = completed;
     return this;
  }

  setUsers(users) {
     // Tu código aquí 👈
     this.task.users.push(...users);
     return this;
  }

  setDeadline(deadline) {
     // Tu código aquí 👈
     this.task.deadline = deadline;
     return this;
  }

  setPriority(priority) {
     // Tu código aquí 👈
     this.task.priority = priority;
     return this;
  }

  build() {
     // Tu código aquí 👈
     return this.task;
  }
}

export class TaskDecorator {
  constructor(task, options) {
     // Tu código aquí 👈
     this.task = task;
     this.deadline = options.deadline;
     this.priority = options.priority;
  }

  assignUser(user) {
     // Tu código aquí 👈
     this.task.assignUser(user);
  }

  completeTask() {
     // Tu código aquí 👈
     this.task.completeTask();
  }

  notifyUsers() {
     // Tu código aquí 👈
     this.task.notifyUsers(this);
  }
}

import { Task } from "./exercise";

export class TaskManager {
  constructor() {
     // Tu código aquí 👈
  }

  static getInstance() {
     // Tu código aquí 👈
     if (!TaskManager.instance) {
        TaskManager.tasks = [];
        TaskManager.instance = new TaskManager();
     }
     return TaskManager.instance;
  }

  addTask(task){
     // Tu código aquí 👈
     if (task instanceof Task) {
        TaskManager.tasks.push(task);
     }
  }

  getTasks(){
     // Tu código aquí 👈
     return TaskManager.tasks
  }

  getTaskById(id){
     // Tu código aquí 👈
     return TaskManager.tasks.find(task => task.id === id) || null
  }
}

export class User {
  constructor(name) {
     // Tu código aquí 👈
     this.name = name;
  }

  notify(task) {
     // Tu código aquí 👈
     console.log(`${this.name} ha sido notificado de que la tarea ${task.id} se completo`)
  }
}


import { User } from "./User"

export class Task {
   constructor(id, description) {
      this.id = id
      this.description = description
      this.completed = false
      this.users = []
   }

   assignUser(user) {
      if (user instanceof User) {
         this.users.push(user)
      } else {
         throw new Error("El usuario no existe")
      }

   }

   completeTask() {
      this.completed = true
      this.notifyUsers()
   }

   notifyUsers() {
      this.users.forEach(user => user.notify(this))
   }
}