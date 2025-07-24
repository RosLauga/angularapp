import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MenuHeaderComponent } from "./menu-header/menu-header.component";
import { MenuOptionsComponent } from "./menu-options/menu-options.component";

@Component({
  templateUrl: "./menu.component.html",
  imports: [RouterOutlet, MenuHeaderComponent, MenuOptionsComponent],
})
export class LeftMenu {}
