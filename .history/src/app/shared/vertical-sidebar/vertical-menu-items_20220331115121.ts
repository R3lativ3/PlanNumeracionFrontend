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
    path: "cierres/parcial",
    title: "Cierre Parcial",
    icon: "fas fa-tasks",
    class: "",
    extralink: false,
    submenu: [],
  },
  {
    path: "cierres/complemento",
    title: "Cierre Complemento",
    icon: "fas fa-tasks",
    class: "",
    extralink: false,
    submenu: [],
  },
  {
    path: "cierres",
    title: "Cierres",
    icon: "fas fa-server",
    class: "has-arrow",
    extralink: false,
    submenu: [
      {
        path: "cierres/parcial",
        title: "Parcial",
        icon: "fas fa-plus",
        class: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "cierres/complemento",
        title: "Complemento",
        icon: "fas fa-list-ul",
        class: "",
        extralink: false,
        submenu: [],
      }
    ],
  },
  
];
