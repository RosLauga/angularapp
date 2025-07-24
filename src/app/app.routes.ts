import { Routes } from "@angular/router";
import { LeftMenu } from "./components/menu/menu.component";
import { TrendingsComponent } from "./pages/trendings/trendings.component";
import { SearchComponent } from "./pages/search/search.component";

export const routes: Routes = [
  {
    path: "dashboard",
    component: LeftMenu,
    children: [
      {
        path: "trendings",
        component: TrendingsComponent,
      },
      {
        path: "search",
        component: SearchComponent,
      },
    ],
  },
  {
    path: "**",
    redirectTo: "dashboard",
  },
];
