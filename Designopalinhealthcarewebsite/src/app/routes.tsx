import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { TeamPage } from "./pages/TeamPage";
import { ServicesPage } from "./pages/ServicesPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "services", Component: ServicesPage },
      { path: "contact", Component: ContactPage },
      { path: "team", Component: TeamPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
