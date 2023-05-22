import {
  Avatar,
  Typography,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

export function Profile() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/Ograde/ograde1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-16">
        <div className="container mx-auto">
          <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  OGRADE
                </Typography>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                    Limene plastificirane ograde su novitet na tržištu Srbije, koje po svojim karakteristikama i odnosom cene i kvaliteta prednjače u odnosu na slične sisteme. Ograde se izrađuju u širokom spektru palete boja i dimenzija u zavisnosti od želje klijenata. Moderan dizajn, dug životni vek, lako održavanje kao i veliki izbor modela čine  ograde idealnim rešenjem bilo da je reč o stambenim ili industrijskim objektima.


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
                  Prednosti ugradnje Božić ogradnih sistema
                </Typography>
                <Typography className="mb-8 font-normal text-blue-gray-500">
                – jednostavno održavanje
– otpornost na različite vremenske uslove
– nerđajući materijali
– brza montaža
– mogućnost izbora dimenzija elemenata ograde, konkretno širine same daske
– veliki izbor boja iz RAL palete, kao i imitacija drveta
– skriveni sistem fiksiranja
                  <br />
                  <br />
                 
                </Typography>
              </div>
              <div className="mx-auto mb-8 mt-24 flex w-full justify-center px-4 md:w-5/12 lg:mt-0">
                <Card className="shadow-lg shadow-gray-500/10">
                  <CardHeader className="h-556 relative">
                    <img
                      alt="Card Image"
                      src="/img/ograde/ograde2.jpg"
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
                      src="/img/ograde/ograde1.jpg"
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

export default Profile;
