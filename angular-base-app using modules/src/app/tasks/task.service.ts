import { dummyTasks } from "./dummy-tasks";
import { Injectable } from "@angular/core";
import { newTaskType, taskType } from "./task/task.model";

@Injectable({providedIn:"root"})
export class TaskService {
    private tasks = dummyTasks;

    onAddNewTask(task:newTaskType, id:string) {
        let newTask = {
          id: new Date().getTime().toString(),
          userId: id,
          title : task.title,
          summary : task.summary,
          dueDate : task.date
        }
        this.tasks.push(newTask);
    }
    getUserTasks(id:string) {
        return this.tasks.filter(t=>t.userId === id);
    }

    onCompleteTask(id:string) {
        console.log(id, this.tasks)
        this.tasks = this.tasks.filter(t=>t.id!==id);
    }


}