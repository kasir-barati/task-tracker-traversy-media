import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Task } from '../task/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask = new EventEmitter();
  @Output() onToggleTaskReminder = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  deleteTaskClicked(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggleTask(task: Task) {
    this.onToggleTaskReminder.emit(task);
  }
}
