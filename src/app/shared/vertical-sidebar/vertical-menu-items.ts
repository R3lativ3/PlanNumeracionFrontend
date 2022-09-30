import { RouteInfo } from "./vertical-sidebar.metadata";

export const ROUTES: RouteInfo[] = [

  {
    path: "",
    title: "App",
    icon: "mdi mdi-dots-horizontal",
    class: "nav-small-cap",
    extralink: true,
    submenu: [],
  },
  {
    path: "cargas",
    title: "Cargas",
    icon: "fas fa-tasks",
    class: "",
    extralink: false,
    submenu: []
  },
  {
    path: "cierres",
    title: "Cierres",
    icon: "fas fa-server",
    class: "has-arrow",
    extralink: false,
    submenu: [
      {
        path: "cierres/parcial/create",
        title: "Crear Cierre",
        icon: "fas fa-plus",
        class: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "cierres/parcial",
        title: "Resumen Parcial",
        icon: "fas fa-file",
        class: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "cierres/complemento",
        title: "Resumen Complemento",
        icon: "fas fa-file",
        class: "",
        extralink: false,
        submenu: [],
      },
    ],
  },

  {
    path: "",
    title: "Catalogos",
    icon: "mdi mdi-dots-horizontal",
    class: "nav-small-cap",
    extralink: true,
    submenu: [],
  },
  {
    path: "usuario",
    title: "Usuarios",
    icon: "fas fa-users",
    class: "",
    extralink: false,
    submenu: [],
  },
  
];
