import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() btnValue: string;
  @Input() btnClass: string;
  @Input() color: string;
  @Output() onBtnClick = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.onBtnClick.emit();
  }
}

/**
 * Wrong usage:
 * - @Output() btnClick: EventEmitter<void>;
 * - ngOnInit(): void { this.btnClick = new EventEmitter() }
 */
