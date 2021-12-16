import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonLabel!: string;
  @Input() addClass!: string;
  @Input() buttonType: "button" | "submit" | "reset" = "button";
  @Input() rank: "primary" | "secondary" | "link" = "primary";
  @Input() textNoWrap = false;
  @Input() size?: "small" | "large";
  @Input() buttonBlock = false;
  @Input() buttonDisabled=false;
  @Input() buttonResponsive=false;
}
