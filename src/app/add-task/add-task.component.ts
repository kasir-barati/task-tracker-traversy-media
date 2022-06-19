import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { UiService } from '@shared/services/ui.service';
import { Task } from '../task/task.model';
import { isBoolean } from '@shared/validators/is-boolean.validator';
import { required } from '@shared/validators/required.validator';
import { maxLength } from '@shared/validators/max-length.validator';
import { pattern } from '@shared/validators/pattern.validator';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  addTaskFormGroup: FormGroup;
  @Output() onAddTask = new EventEmitter<Partial<Task>>();
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(
    private uiService: UiService,
    private formBuilder: FormBuilder,
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

  ngOnInit(): void {
    /**
     * The g flag will cause marking the form valid and invalid by each time that you type something new
     *
     * Correct usage:
     * - /^[\w\d\S\s]+$/i
     *
     * Wrong usage:
     * - /^[\w\d\S\s]+$/gi
     */
    this.addTaskFormGroup = this.formBuilder.group({
      text: [
        '',
        [
          required('Please enter text.'),
          maxLength(100, 'Text cannot be more than 100 character.'),
          pattern(
            /^[\w\d\S\s]+$/i,
            'Text can only contain letters, digits, special and characters',
          ),
        ],
      ],
      day: [''],
      reminder: [false, [isBoolean('Reminder should be boolean')]],
    });

    /**
     * Correct usage:
     * - text: ['', [Validators.required, Validators.maxLength(100),Validators.pattern(this.taskTextPattern)]]
     * - text: ['', Validators.compose([Validators.required, Validators.maxLength(100),Validators.pattern(this.taskTextPattern)])]
     * Wrong usage:
     * - ref: https://stackoverflow.com/a/55064205/8784518, https://stackoverflow.com/a/61953637/8784518
     * - text: ['', Validators.required, Validators.maxLength(100),Validators.pattern(this.taskTextPattern)]
     */
  }

  onSubmit(newTask: Partial<Task>) {
    this.onAddTask.emit(newTask);
    this.addTaskFormGroup.reset({ day: '', reminder: false });
  }
}
