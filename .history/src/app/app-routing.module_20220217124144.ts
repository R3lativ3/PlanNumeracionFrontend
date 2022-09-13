
import { Routes } from "@angular/router";

import { FullComponent } from "./layouts/full/full.component";
import { BlankComponent } from "./layouts/blank/blank.component";
import { TokenValidateGuard } from "./authentication/guards/token-validate.guard";
import { AllComponent } from './servidores/all/all.component'
import { CreateComponent } from "./servidores/create/create.component";

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
        path: "starter",
        loadChildren: () =>
          import("./starter/starter.module").then((m) => m.StarterModule),
      },
      {
        path: "charts",
        loadChildren: () =>
          import("./charts/charts.module").then((m) => m.ChartModule),
      },
      {
        path: "apps",
        loadChildren: () =>
          import("./apps/apps.module").then((m) => m.AppsModule),
      },      
      {
        path: "forms",
        loadChildren: () =>
          import("./form/forms.module").then((m) => m.FormModule),
      },
      {
        path: "servidores",
        loadChildren: () =>
          import("./servidores/servidores.module").then((m) => m.ServidoresModule),
      },
      {
        path: "catalogos",
        loadChildren: () =>
          import("./catalogos/catalogos.module").then((m) => m.CatalogosModule),
      },
      {
        path: "usuarios",
        loadChildren: () =>
          import("./usuarios/usuarios.module").then((m) => m.UsuariosModule),
      },
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
