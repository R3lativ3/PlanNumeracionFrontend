import { RouteInfo } from "./vertical-sidebar.metadata";

export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "Gestion de Usuarios",
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
    path: "",
    title: "Catalogos",
    icon: "mdi mdi-dots-horizontal",
    class: "nav-small-cap",
    extralink: true,
    submenu: [],
  },
  {
    path: "destinos",
    title: "Destinos",
    icon: "fas fa-server",
    class: "",
    extralink: false,
    submenu: [],
  },
  
];
