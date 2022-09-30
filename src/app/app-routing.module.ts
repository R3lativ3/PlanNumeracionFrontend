
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
        loadChildren: () =>import("./cargas/cargas.module").then((m) => m.CargasModule),
        canActivate: [ TokenValidateGuard ],
        canLoad: [ TokenValidateGuard ]
      },
      {
        path: "catalogos",
        loadChildren: () =>import("./catalogos/catalogos.module").then((m) => m.CatalogosModule),
        canActivate: [ TokenValidateGuard ],
        canLoad: [ TokenValidateGuard ]
      },
      {
        path: "usuarios",
        loadChildren: () =>import("./usuarios/usuarios.module").then((m) => m.UsuariosModule),
        canActivate: [ TokenValidateGuard ],
        canLoad: [ TokenValidateGuard ]
      },  
      {
        path: "credencialesValidacionCarga",
        loadChildren: () =>import("./credenciales-validacion-carga/credenciales-validacion-carga.module").then((m)=>m.CredencialesValidacionCargaModule),
        canActivate: [ TokenValidateGuard ],
        canLoad: [ TokenValidateGuard ]
      },
      {
        path: "cargaDestino",
        loadChildren: () =>import("./carga-destino/carga-destino.module").then((m)=>m.CargaDestinoModule),
        canActivate: [ TokenValidateGuard ],
        canLoad: [ TokenValidateGuard ]
      },
      {
        path: "validacion-carga",
        loadChildren: () =>import("./validacion-carga/validacion-carga.module").then((m) => m.ValidacionCargaModule),
        canActivate: [ TokenValidateGuard ],
        canLoad: [ TokenValidateGuard ]
      },
      {
        path: "usuario-destino",
        loadChildren: () =>import("./usuario-destino/usuario-destino.module").then((m) => m.UsuarioDestinoModule),
        canActivate: [ TokenValidateGuard ],
        canLoad: [ TokenValidateGuard ]
      },
      {
        path: "usuario",
        loadChildren: () =>import("./usuario/usuario.module").then((m) => m.UsuarioModule),
        canActivate: [ TokenValidateGuard ],
        canLoad: [ TokenValidateGuard ]
      },
      {
        path: "destinos",
        loadChildren: () =>import("./destino/destino.module").then((m) => m.DestinoModule),
        canActivate: [ TokenValidateGuard ],
        canLoad: [ TokenValidateGuard ]
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
