import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    'class': 'btn',
    '[type]': 'buttonType',
    '[class.btn-primary]': 'rank === "primary"',
    '[class.btn-secondary]':'rank === "secondary"',
    '[class.btn-success]':'rank === "success"',
    '[class.btn-danger]':'rank === "danger"',
    '[class.btn-warning]':'rank === "warning"',
    '[class.btn-info]':'rank === "info"',
    '[class.btn-light]':'rank === "light"',
    '[class.btn-dark]':'rank === "dark"',
    '[class.btn-link]': 'rank === "link"',
    '[class.text-nowrap]': 'textNoWrap',
    '[class.btn-sm]': 'size === "small"',
    '[class.btn-lg]': 'size === "large"',
    '[class.btn-min-width]': 'minWidth',
    '[class.btn-block]': 'block',
    '[disabled]': 'disabled',
    '[class.disabled]': 'disabled',
    '[class.btn-sm-block]': 'responsive'
  }
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() type: "button" | "submit" | "reset" = "button";
  @Input() rank: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link" = "primary";
  @Input() outline = false;
  @Input() textNoWrap = false;
  @Input() size?: "small" | "large";
  @Input() minWidth = false;
  @Input() block = false;
  @Input() disabled=false;
  @Input() responsive=false;
}
