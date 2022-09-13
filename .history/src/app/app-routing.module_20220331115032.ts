
import { Routes } from "@angular/router";
import { FullComponent } from "./layouts/full/full.component";
import { BlankComponent } from "./layouts/blank/blank.component";
import { TokenValidateGuard } from "./authentication/guards/token-validate.guard";

export const Approutes: Routes = [
  {
    path: "",
    component: FullComponent,
    children: [
      { path: "", redirectTo: "/dashboard/classic", pathMatch: "full" },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboards/dashboard.module").then((m) => m.DashboardModule),
          canActivate: [ TokenValidateGuard ],
          canLoad: [ TokenValidateGuard ]
      },
      {
        path: "apps",
        loadChildren: () =>
          import("./apps/apps.module").then((m) => m.AppsModule),
      },      
      {
        path: "cierres",
        loadChildren: () =>
          import("./cierres/cierres.module").then((m) => m.CierresModule),
      }
    ],
  },
  {
    path: "",
    component: BlankComponent,
    children: [
      {
        path: "authentication",
        loadChildren: () =>
          import("./authentication/authentication.module").then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "/authentication/404",
  },
];
