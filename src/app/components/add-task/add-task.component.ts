import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

import { TaskService } from 'src/app/services/task.service';
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

  constructor(private taskService: TaskService) {}

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
