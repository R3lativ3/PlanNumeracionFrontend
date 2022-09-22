
import { Routes } from "@angular/router";
import { FullComponent } from "./layouts/full/full.component";
import { BlankComponent } from "./layouts/blank/blank.component";
import { TokenValidateGuard } from "./authentication/guards/token-validate.guard";

export const Approutes: Routes = [
  {
    path: "",
    component: FullComponent,
    children: [
      { path: "", redirectTo: "/cargas", pathMatch: "full" },
      {
        path: "cargas",
        loadChildren: () =>
          import("./cargas/cargas.module").then((m) => m.CargasModule),
        //  canActivate: [ TokenValidateGuard ],
        //  canLoad: [ TokenValidateGuard ]
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
      {
        path: "cierres",
        loadChildren: () =>
          import("./cierres/cierres.module").then((m) => m.CierresModule),
      },
      {
        path: "ss",
        loadChildren: () =>
          import("./ss/ss.module").then((m) => m.SsModule),
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
  }
];
