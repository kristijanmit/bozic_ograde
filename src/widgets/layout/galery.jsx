import React from "react";

export default function Galery({ galeryType = "" }) {
  var galeryVent = [
    "/public/img/v1.jpg",
    "/public/img/v2.jpg",
    "/public/img/v3.jpg",
    "/public/img/v4.jpg",
    "/public/img/v5.jpg",
  ];
  var galeryRoof = [
    "/public/img/k1.jpg",
    "/public/img/k2.jpg",
    "/public/img/k3.jpg",
    "/public/img/k4.jpg",
    "/public/img/k5.jpg",
    "/public/img/k6.jpg",
    "/public/img/k7.jpg",
    "/public/img/k8.jpg",
    "/public/img/k9.jpg",
  ];
  var galeryFance = [
    "/public/img/o1.jpg",
    "/public/img/o2.jpg",
    "/public/img/o3.jpg",
    "/public/img/o4.jpg",
    "/public/img/o5.jpg",
    "/public/img/o6.jpg",
    "/public/img/o7.jpg",
    "/public/img/o8.jpg",
  ];
  var galeryList = galeryFance;
  if (galeryType == "vent") {
    galeryList = galeryVent;
  } else if (galeryType == "roof") {
    galeryList = galeryRoof;
  } else if (galeryType == "fance") {
    galeryList == galeryFance;
  }
  return (
    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div class="-m-1 flex flex-wrap md:-m-2">
        {galeryList.map((e) => (
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={e}
                key={e++}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
