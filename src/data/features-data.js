import {
  PencilIcon,
  Cog6ToothIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/solid";

import Team from "../../public/img/team-1.jpg";

export const featuresData = [
  {
    color: "gray",
    background: Team,
    title: "PROJEKTOVANJE",
    icon: PencilIcon,
    description:
      "Projektovanje ventilacije i klimatizacije stambenih, poslovnih i industrijskih objekata. U saradnji sa projektantskim kućama spremni smo da odgovorimo na različite zahteve klijenata",
  },
  {
    color: "gray",
    background: Team,
    title: "PROIZVODNJA",
    icon: Cog6ToothIcon,
    description:
      "Osnovni proizvodni program naše firme čine limene ograde, elementi ventilacije, različite vrste opšiva i ostali nestandardni proizvodi od lima",
  },
  {
    color: "gray",
    background: Team,
    title: "MONTAŽA",
    icon: HandRaisedIcon,
    description:
      "Pružamo usluge montaže krovnih pokrivača, ventilacije i klimatizacije, građevinske limarije kao i fasada i ograda od lima",
  },
];

export default featuresData;
