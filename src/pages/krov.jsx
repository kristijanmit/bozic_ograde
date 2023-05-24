import {
  Avatar,
  Typography,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import FCounter from "@/widgets/layout/fake-counter";
import Quote from "@/widgets/layout/quote";
import Galery from "@/widgets/layout/galery";

export function Krov() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/krovopokrivacki/cover1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-16">
        <div className="container mx-auto">
          <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  KROVOPOKRIVAČKI RADOVI
                </Typography>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      Pokrivanje krovova ravnim limom po sistemu G falca,
                      trapeznim limom, profilisanim limovima u obliku crepa,
                      krovnim panelima i PVC membranom.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-32 flex flex-wrap items-center">
              <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                <Typography
                  variant="h3"
                  className="mb-3 font-bold"
                  color="blue-gray"
                >
                  Sprovodimo vaše ideje u dela
                </Typography>
                <Typography className="mb-8 font-normal text-blue-gray-500">
                  Jedna od glavnih karakteristika limenih pokrivača je velika
                  pokrivna moć koju ovi materijali poseduju uz niske troškove.
                  Krovovi pokriveni limom su visokog kvaliteta i dolaze u
                  različitim profilima i bojama, te stoga predstavljaju idealno
                  kvalitativno i estetsko rešenje kako za industrijske, tako i
                  za stambene objekte. Pored toga, ove materijale odlikuje i
                  velika čvrstina, dug period eksploatacije, jednostavna
                  ugradnja, velika otpornost u slučaju požara, kao i mala težina
                  i stoga ne zahtevaju komplikovanu podkonstrukciju.
                </Typography>
              </div>
              <div className="mx-auto mb-8 mt-24 flex w-full justify-center px-4 md:w-5/12 lg:mt-0">
                <Card className="shadow-lg shadow-gray-500/10">
                  <CardHeader className="h-556 relative">
                    <img
                      alt="Card Image"
                      src="/img/krovopokrivacki/2.jpg"
                      className="h-full w-full"
                    />
                  </CardHeader>
                </Card>
              </div>
            </div>
            <div className="mt-32 flex flex-wrap items-center">
              <div className="mx-auto mb-8 mt-24 flex w-full justify-center px-4 md:w-5/12 lg:mt-0">
                <Card className="shadow-lg shadow-gray-500/10">
                  <CardHeader className="h-556 relative">
                    <img
                      alt="Card Image"
                      src="/img/krovopokrivacki/1.jpg"
                      className="h-full w-full"
                    />
                  </CardHeader>
                </Card>
              </div>
              <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                <Typography
                  variant="h3"
                  className="mb-3 font-bold"
                  color="blue-gray"
                >
                  IZVODIMO KROVOPOKRIVAČKE RADOVE{" "}
                </Typography>
                <Typography className="mb-8 font-normal text-blue-gray-500">
                  – ravnim limom po sistemu stojećeg G falca – lučno pokrivanje
                  limom po sistemu stojećeg G falca – profilisanim limom u
                  obliku crepa – GERARD i KORRA metalnim krovnim pločama u
                  obliku crepa – trapeznim limovima različitih profila – lučnim
                  trapeznim limovima – panelima – PVC membranama vodećih
                  proizvođača
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <FCounter />
        <Quote />
        <Galery galeryType="roof" />
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Krov;
