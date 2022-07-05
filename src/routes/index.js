import Home from "../views/Home";
import Services from "../views/Services";
import About from "../views/About";
import Contacts from "../views/Contacts";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
    menu: true,
  },
  {
    name: "Services",
    component: Services,
    path: "/services",
    menu: true,
  },
  {
    name: "About",
    component: About,
    path: "/about",
    menu: true,
  },
  {
    name: "Contacts",
    component: Contacts,
    path: "/contacts",
    menu: true,
  },
];

export default routes;
