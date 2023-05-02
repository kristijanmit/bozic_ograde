import {
  Avatar,
  Typography,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

export function Kasete() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-16">
        <div className="container mx-auto">
          <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  KASETNI SISTEMI
                </Typography>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
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
              <div className="mx-auto mb-8 mt-24 flex w-full justify-center px-4 md:w-5/12 lg:mt-0">
                <Card className="shadow-lg shadow-gray-500/10">
                  <CardHeader className="h-556 relative">
                    <img
                      alt="Card Image"
                      src="/img/teamwork.jpg"
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
                      src="/img/teamwork.jpg"
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
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Kasete;
