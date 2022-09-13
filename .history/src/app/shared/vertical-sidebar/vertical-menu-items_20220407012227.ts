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
    ],
  },
  
];
