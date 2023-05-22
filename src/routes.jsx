import { Home, Profile, SignIn, SignUp } from "@/pages";
import Basta from "./pages/basta";
import Krov from "./pages/krov";
import Limarija from "./pages/limarija";
import Kasete from "./pages/kasete";
import Ventilacije from "./pages/ventilacije";

export const routes = [
  {
    name: "Početna",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Baštenski Nameštaj",
    path: "/bastenskinamestaj",
    element: <Basta />,
  },
  {
    name: "Kontakt",
    path: "/sign-up",
    element: <SignUp />,
  },

  {
    name: "Ograde",
    path: "/ograde",
    element: <Profile />,
    drop: true,
  },
  {
    name: "Krovopokrivački radovi",
    path: "/krovopokrivaci",
    element: <Krov />,
    drop: true,
  },
  {
    name: "Gradjevinska Limarija",
    path: "/limarija",
    element: <Limarija />,
    drop: true,
  },
  {
    name: "Kasetni sistemi",
    path: "/kasete",
    element: <Kasete />,
    drop: true,
  },
  {
    name: "Ventilacija",
    path: "/ventilacija",
    element: <Ventilacije />,
    drop: true,
  },
];

export default routes;
