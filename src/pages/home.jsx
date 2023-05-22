import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import FCounter from "@/widgets/layout/fake-counter";
import Contact from "@/widgets/layout/contact";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('../../public/img/a_home_bcg.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Božić ograde
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                This is a simple example of a Landing Page you can build using
                Material Tailwind. It features multiple components based on the
                Tailwind CSS and Material Design by Google.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(
              ({ color, title, icon, description, background }) => (
                <FeatureCard
                  key={title}
                  background={background}
                  color={color}
                  title={title}
                  icon={React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                  description={description}
                />
              )
            )}
          </div>
          <FCounter />
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
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
                konkurentnih cena i poštovanja rokova, omogućava nam da pružimo
                kvalitetnu uslugu investitorima, bez obzira na obim posla. Naš
                moto je da svaki posao obavimo na najbolji mogući način i da
                ispoštujemo sve zahteve naših klijenata. Možete računati na nas
                kao pouzdanog partnera u vašim projektima.
              </Typography>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Uža specijalnost
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Specijalizovani smo za hale, ograde, ventilaciju i ostale
                    limarske radove, uključujući i izradu baštenskog nameštaja
                    kao deo naših bravarskih usluga.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section id="saradnici" className="px-4 pb-48 pt-20">
        <div className="container mx-auto">
          <PageTitle heading="Naši saradnici">
            Kvalitetna izrada i montaža, pažljivost prema detaljima i brz odziv
            - naša prednost. Puno obavljenog posla potvrđuje našu stručnost.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-14 md:grid-cols-2 xl:grid-cols-5">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-24">
        <div className="container mx-auto">
          <PageTitle heading="Lider na tržištu">
            Sa više od 50 godina iskustva, porodični posao se proslavio kao
            lider u ugradnji oluka i pružanju kompletnih limarskih usluga.
            Kombinacija naše dugogodišnje tradicije i savremenih tehnologija,
            kao i naša posvećenost detaljima, garancija su za kvalitetan rad i
            zadovoljstvo naših klijenata.
          </PageTitle>
          <div className="mx-auto mb-48 mt-20 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <Contact />
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
