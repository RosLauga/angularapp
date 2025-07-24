import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-button",
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./button.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() title = "";

  @Input() customStyle = "";

  @Input() path = "";

  constructor() {
    console.log("title", this.title);
  }
}
