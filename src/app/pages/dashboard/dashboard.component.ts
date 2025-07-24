import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LeftMenu } from "../../components/menu/menu.component";

@Component({
  selector: "app-dashboard",
  imports: [LeftMenu],
  templateUrl: "./dashboard.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
