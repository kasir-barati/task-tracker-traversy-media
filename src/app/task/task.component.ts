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
  @Input() public task: Task;
  @Output() public onDeleteTask = new EventEmitter<Task>();
  @Output() public onToggleTaskReminder = new EventEmitter<Task>();
  public faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggleTask(task: Task) {
    this.onToggleTaskReminder.emit(task);
  }
}
