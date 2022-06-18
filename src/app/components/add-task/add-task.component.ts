import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { TaskService } from 'src/app/services/task.service';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  day: string;
  text: string;
  reminder: boolean = false;
  @Output() onAddTask = new EventEmitter<Partial<Task>>();
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(
    private taskService: TaskService,
    private uiService: UiService,
  ) {
    this.subscription = this.uiService.onToggle().subscribe({
      next: (value) => {
        this.showAddTask = value;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.info('Show add task completed');
      },
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please enter text');
      return;
    }

    const newTask: Partial<Task> = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
