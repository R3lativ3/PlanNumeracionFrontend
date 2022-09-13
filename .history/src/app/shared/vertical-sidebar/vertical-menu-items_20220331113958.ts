import { RouteInfo } from "./vertical-sidebar.metadata";

export const ROUTES: RouteInfo[] = [
  {
    path: "cierre-parcial",
    title: "Cierre Parcial",
    icon: "mdi mdi-dots-horizontal",
    class: "",
    extralink: false,
    submenu: [],
  },
  {
    path: "cierre-complemento",
    title: "Cierre Complemento",
    icon: "mdi mdi-dots-horizontal",
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
