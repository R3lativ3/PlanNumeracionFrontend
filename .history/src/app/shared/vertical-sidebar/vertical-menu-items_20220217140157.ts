import { RouteInfo } from "./vertical-sidebar.metadata";

export const ROUTES: RouteInfo[] = [
  {
    path: "apps",
    title: "Administracion",
    icon: "mdi mdi-dots-horizontal",
    class: "nav-small-cap",
    extralink: true,
    submenu: [],
  },
  {
    path: "usuarios",
    title: "Usuarios",
    icon: "mdi mdi-account-multiple",
    class: "",
    extralink: false,
    submenu: [],
  },
  {
    path: "servidores",
    title: "Servidores",
    icon: "fas fa-server",
    class: "has-arrow",
    extralink: false,
    submenu: [
      {
        path: "servidores/create",
        title: "Registrar Servidor",
        icon: "fas fa-plus",
        class: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "servidores/",
        title: "Listado de Servidores",
        icon: "fas fa-list-ul",
        class: "",
        extralink: false,
        submenu: [],
      }
    ],
  },
  {
    path: "catalogos",
    title: "Catalogos",
    icon: "fas fa-clipboard-list",
    class: "has-arrow",
    extralink: false,
    submenu: [
      {
        path: "catalogos/categorias",
        title: "Categorias",
        icon: "fas fa-plus",
        class: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "catalogos/empresas",
        title: "Empresas",
        icon: "fab fa-houzz",
        class: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "catalogos/modelos-hw",
        title: "Modelos HW",
        icon: "fas fa-cube",
        class: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "catalogos/virtualizadores",
        title: "Virtualizadores",
        icon: "fas fa-buffer",
        class: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "catalogos/aplicaciones",
        title: "Aplicaciones",
        icon: "fas fa-buffer",
        class: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "catalogos/estatus-ejecucion",
        title: "Estatus de Ejecucion",
        icon: "fas fa-buffer",
        class: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "catalogos/estatus-servidor",
        title: "Estatus de Servidor",
        icon: "fas fa-buffer",
        class: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "catalogos/periodicidades",
        title: "Periodicidades",
        icon: "fas fa-buffer",
        class: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "catalogos/roles",
        title: "Roles",
        icon: "fas fa-buffer",
        class: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "catalogos/sistemas-operativos",
        title: "Sistemas Operativos",
        icon: "fas fa-buffer",
        class: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "catalogos/versiones-sistemas-operativos",
        title: "Versiones de S.O.",
        icon: "fas fa-buffer",
        class: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "catalogos/ubicaciones",
        title: "Ubicaciones",
        icon: "fas fa-buffer",
        class: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "catalogos/tipos-ip",
        title: "Tipos de Ip",
        icon: "fas fa-buffer",
        class: "",
        extralink: false,
        submenu: [],
      },
    ],
  },
  
];
