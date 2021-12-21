import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    'class': 'btn',
    '[type]': 'type',
    '[class.btn-primary]': 'rank === "primary" && !outline',
    '[class.btn-outline-primary]': 'rank === "primary" && outline',
    '[class.btn-secondary]':'rank === "secondary" && !outline',
    '[class.btn-outline-secondary]': 'rank === "secondary" && outline',
    '[class.btn-success]':'rank === "success" && !outline',
    '[class.btn-outline-success]': 'rank === "success" && outline',
    '[class.btn-danger]':'rank === "danger" && !outline',
    '[class.btn-outline-danger]': 'rank === "danger" && outline',
    '[class.btn-warning]':'rank === "warning" && !outline',
    '[class.btn-outline-warning]': 'rank === "warning" && outline',
    '[class.btn-info]':'rank === "info" && !outline',
    '[class.btn-outline-info]': 'rank === "info" && outline',
    '[class.btn-light]':'rank === "light" && !outline',
    '[class.btn-outline-light]': 'rank === "light" && outline',
    '[class.btn-dark]':'rank === "dark" && !outline',
    '[class.btn-outline-dark]': 'rank === "dark" && outline',
    '[class.btn-link]': 'rank === "link"',
    '[class.text-nowrap]': 'textNoWrap',
    '[class.btn-sm]': 'size === "small"',
    '[class.btn-lg]': 'size === "large"',
    '[class.btn-min-width]': 'minWidth',
    '[class.btn-block]': 'block',
    '[disabled]': 'disabled',
    '[class.disabled]': 'disabled || inProgress',
    '[class.btn-sm-block]': 'responsive'
  }
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() type: "button" | "submit" | "reset" = "button";
  @Input() rank: "primary" | "primary-outline" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link" = "primary";
  @Input() outline = false;
  @Input() textNoWrap = false;
  @Input() size: "small" | "default" | "large" = "default";
  @Input() minWidth = false;
  @Input() block = false;
  @Input() disabled=false;
  @Input() responsive=false;
  @Input() iconLeft?: 'add_circlr-outline' | string;
  @Input() inProgress=false;
  @Input() link?: string;
  @Output() handleClick: EventEmitter<void> = new EventEmitter();
}
