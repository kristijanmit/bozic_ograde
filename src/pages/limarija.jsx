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

export function Limarija() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/gradjevinska/cover.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-16">
        <div className="container mx-auto">
          <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  GRADJEVINSKA LIMARIJA
                </Typography>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      Izrada i ugradnja zidnih i ugaonih opšiva, opšiva prozora,
                      snegobrana, okapnica, oluka, vetar lajsni i ostalih
                      proizvoda građevinske limarije.
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
                  GRAĐEVINSKA LIMARIJA{" "}
                </Typography>
                <Typography className="mb-8 font-normal text-blue-gray-500">
                  Bavimo se izradom i ugradnjom zidnih i ugaonih opšiva, opšiva
                  prozora, snegobrana, okapnica, oluka, vetar lajsni i ostalih
                  proizvoda građevinske limarije. Pored pomenutog, vršimo izradu
                  i montažu različitih vrsta komlikovanih i složenih elemenata
                  koji se ne mogu naći u širokoj proizvodnji limarije. Stojimo
                  Vam na raspolaganju za sve vaše želje i zahteve iz oblasti
                  građevinske limarije.
                </Typography>
              </div>
              <div className="mx-auto mb-8 mt-24 flex w-full justify-center px-4 md:w-5/12 lg:mt-0">
                <Card className="shadow-lg shadow-gray-500/10">
                  <CardHeader className="h-556 relative">
                    <img
                      alt="Card Image"
                      src="/img/gradjevinska/cover.jpg"
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
                      src="/img/gradjevinska/13.jpg"
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
                  IZVODIMO RADOVE GRAĐEVINSKE LIMARIJE NA
                </Typography>
                <Typography className="mb-8 font-normal text-blue-gray-500">
                  -industrijskim objektima -stambenim objektima -crkvama
                  -silosima -hladnjačama -ostalim objektima posebne namene
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <FCounter />
        <Quote />
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Limarija;
