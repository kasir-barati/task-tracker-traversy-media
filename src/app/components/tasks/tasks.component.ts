import { Component, OnInit } from '@angular/core';

import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TaskService],
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.info('Fetching tasks process completed!');
      },
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTaskById(task.id).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(
          (oldTask) => oldTask.id !== task.id,
        );
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.info('Task delete process completed!');
      },
    });
  }

  onToggleTaskReminder(task: Task) {
    this.taskService.updateTaskReminder(task).subscribe({
      next: (updatedTask) => {
        /**
         * @summary
         * Remember that we are working with objects not simple types.
         * I mean objects passes by reference in JS
         */
        task.reminder = !task.reminder;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.info('Task update process completed!');
      },
    });
  }

  onAddTask(task: Partial<Task>) {
    this.taskService.addTask(task).subscribe({
      next: (task) => {
        this.tasks.push(task);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.info('Task add process completed!');
      },
    });
  }
}

/**
 * Wrong usage:
 * this.taskService.getTasks().subscribe(
 *   (tasks) => {
 *     this.tasks = tasks;
 *   },
 *   (error) => {
 *     console.error(error);
 *   },
 *   () => {
 *     console.info('Tasks gotten');
 *   },
 * );
 */

/**
 * IDK why, but this is not necessary
 * - providers: [TaskService]
 */
