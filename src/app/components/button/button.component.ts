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
    '[class.btn-link]': 'rank === "link"',
    '[class.text-nowrap]': 'textNoWrap',
    '[class.btn-sm]': 'size === "small"',
    '[class.btn-lg]': 'size === "large"',
    '[class.btn-block]': 'buttonBlock',
    '[disabled]': 'buttonDisabled',
    '[class.disabled]': 'buttonDisabled',
    '[class.btn-sm-block]': 'buttonResponsive'
  }
})
export class ButtonComponent {
  @Input() buttonLabel!: string;
  @Input() buttonType: "button" | "submit" | "reset" = "button";
  @Input() rank: "primary" | "secondary" | "link" = "primary";
  @Input() textNoWrap = false;
  @Input() size?: "small" | "large";
  @Input() buttonBlock = false;
  @Input() buttonDisabled=false;
  @Input() buttonResponsive=false;
}
