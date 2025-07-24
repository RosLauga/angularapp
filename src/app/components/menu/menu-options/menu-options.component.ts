import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ButtonComponent } from "../../../tools/button/button.component";

@Component({
  selector: "app-menu-options",
  imports: [ButtonComponent],
  templateUrl: "./menu-options.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuOptionsComponent {
  public items = [
    {
      title: "dashboard",
      path: "dashboard",
    },
    {
      title: "trendings",
      path: "/dashboard/trendings",
    },
    {
      title: "search",
      path: "/dashboard/search",
    },
  ];
}
