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

export function Ventilacije() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/Ventilacija/cover2.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-16">
        <div className="container mx-auto">
          <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  VENTILACIJA
                </Typography>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
<<<<<<< HEAD
                    Proizvodnja i montaža ventilacionih kanala od pocinkovanog lima, spiro kanala, ugradnja sistema klimatizacije i kuhinjskih EKO hauba.
=======
                      Proizvodnja i montaža ventilacionih kanala od pocinkovanog
                      lima, spiro kanala, ugradnja sistema klimatizacije i
                      kuhinjskih EKO hauba.
>>>>>>> e47db5510019b5413c4ffd6be5fdbb99f1bccff5
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
<<<<<<< HEAD
VENTILACIJA  BOŽIĆ           </Typography>
                <Typography className="mb-8 font-normal text-blue-gray-500">
                Firma Božić bavi se proizvodnjom i montažom ventilacionih kanala od pocinkovanog lima, spiro kanala, kao i ugradnjom sistema klimatizacije. Oprema koju koristimo proizvedena je od strane renomiranih kompanija čime se garantuje kvalitet i dugovečnost ventilacionih sistema. Naš tim u potpunosti je osposobljen bilo da se radovi izvode na visini ili na nižim objektima.
=======
                  VENTILACIJA BOŽIĆ{" "}
                </Typography>
                <Typography className="mb-8 font-normal text-blue-gray-500">
                  Firma Božić bavi se proizvodnjom i montažom ventilacionih
                  kanala od pocinkovanog lima, spiro kanala, kao i ugradnjom
                  sistema klimatizacije. Oprema koju koristimo proizvedena je od
                  strane renomiranih kompanija čime se garantuje kvalitet i
                  dugovečnost ventilacionih sistema. Naš tim u potpunosti je
                  osposobljen bilo da se radovi izvode na visini ili na nižim
                  objektima.
>>>>>>> e47db5510019b5413c4ffd6be5fdbb99f1bccff5
                </Typography>
              </div>
              <div className="mx-auto mb-8 mt-24 flex w-full justify-center px-4 md:w-5/12 lg:mt-0">
                <Card className="shadow-lg shadow-gray-500/10">
                  <CardHeader className="h-556 relative">
                    <img
                      alt="Card Image"
                      src="/img/Ventilacija/ventilacija1.jpg"
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
                      src="/img/Ventilacija/ventilacija3.jpg"
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
<<<<<<< HEAD
OBJEKTI NA KOJIMA IZVODIMO RADOVE VENTILACIJE I KLIMATIZACIJE                </Typography>
                <Typography className="mb-8 font-normal text-blue-gray-500">
                – klubovi
– kafići i picerije
– restorani
– sale za proslave
– profesionalne kuhinje
– podzemne garaže
– industrijski i stambeni objekti
– objekti u mesnoj industriji
=======
                  OBJEKTI NA KOJIMA IZVODIMO RADOVE VENTILACIJE I KLIMATIZACIJE{" "}
                </Typography>
                <Typography className="mb-8 font-normal text-blue-gray-500">
                  – klubovi – kafići i picerije – restorani – sale za proslave –
                  profesionalne kuhinje – podzemne garaže – industrijski i
                  stambeni objekti – objekti u mesnoj industriji
>>>>>>> e47db5510019b5413c4ffd6be5fdbb99f1bccff5
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <FCounter />
        <Quote />
        <Galery />
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Ventilacije;
