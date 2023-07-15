import Home from "../views/Home";
import Services from "../views/Services";
import About from "../views/About";
import Contacts from "../views/Contacts";

const BASE_URL = "website_template_001"

const routes = [
  {
    name: "Home",
    component: Home,
    path: `${BASE_URL}/`,
    menu: true,
  },
  {
    name: "Services",
    component: Services,
    path: `${BASE_URL}/services`,
    menu: true,
  },
  {
    name: "About",
    component: About,
    path: `${BASE_URL}/about`,
    menu: true,
  },
  {
    name: "Contacts",
    component: Contacts,
    path: `${BASE_URL}/contacts`,
    menu: true,
  },
];

export default routes;
