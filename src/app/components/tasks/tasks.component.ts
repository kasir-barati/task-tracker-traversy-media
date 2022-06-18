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
        console.info('Tasks gotten');
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
