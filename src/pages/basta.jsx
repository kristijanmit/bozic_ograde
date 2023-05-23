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

export function Basta() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/basta2.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-16">
        <div className="container mx-auto">
          <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  BAŠTENSKI NAMEŠTAJ
                </Typography>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      Baštenska garnitura je dugoročno i kvalitetno rešenje za Vaše terase i bazene zbog materijala koji su korišćeni u njenoj izradi.
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
                  Baštenski Nameštaj
                </Typography>
                <Typography className="mb-8 font-normal text-blue-gray-500">
                  •Konstrukcija je rađena od kvalitetnog lima, a završna obrada je plastifikacija sa nemačkom tehnologijom nanošenja praha!
•Jastuci su izrađeni od Soft PU pene S-32, 32kg/m3.
•”Mercis” outdoor štofovi su poznati po svom kvalitetu, zbog otpornosti na vodu i UV zrake.
•Garnitura sadrži dvosed, dve fotelje, taburet i klub sto.
•Po Vašoj želji možete da birate boju konstrukcije, kao i štof od kojeg želite da Vam izradimo jastuke.


                  <br />
                  <br />
                  Kombinacija naše visoke opremljenosti, produktivnosti,
                  konkurentnih cena i poštovanja rokova, omogućava nam da
                  pružimo kvalitetnu uslugu investitorima, bez obzira na obim
                  posla. Naš moto je da svaki posao obavimo na najbolji mogući
                  način i da ispoštujemo sve zahteve naših klijenata. Možete
                  računati na nas kao pouzdanog partnera u vašim projektima.
                </Typography>
              </div>
              <div className="mx-auto mb-8 mt-24 flex w-full justify-center px-4 md:w-5/12 lg:mt-0">
                <Card className="shadow-lg shadow-gray-500/10">
                  <CardHeader className="h-556 relative">
                    <img
                      alt="Card Image"
                      src="/img/basta1.jpg"
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
                      src="/img/basta2.jpg"
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
                  Sprovodimo vaše ideje u dela
                </Typography>
                <Typography className="mb-8 font-normal text-blue-gray-500">
                  Naša firma je usmerena ka efikasnom rešavanju svih zahteva u
                  vezi proizvodnje i ugradnje limarskih elemenata. Sa posebnim
                  fokusom na ravne krovove, limene ograde i ventilaciju sa
                  klimatizacijom, opremljeni smo da ispunimo najrazličitije
                  potrebe.
                  <br />
                  <br />
                  Kombinacija naše visoke opremljenosti, produktivnosti,
                  konkurentnih cena i poštovanja rokova, omogućava nam da
                  pružimo kvalitetnu uslugu investitorima, bez obzira na obim
                  posla. Naš moto je da svaki posao obavimo na najbolji mogući
                  način i da ispoštujemo sve zahteve naših klijenata. Možete
                  računati na nas kao pouzdanog partnera u vašim projektima.
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

export default Basta;
