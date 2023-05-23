import React from "react";
import CountUp from "react-countup";

export default function FCounter() {
  return (
    <div
      class="container mx-auto px-5 py-10"
      style={{ marginTop: "5rem", marginBottom: "5rem" }}
    >
      <div class="-m-4 flex flex-wrap text-center">
        <div class="w-1/2 p-4 sm:w-1/3">
          <h2 class="title-font text-dark text-3xl font-medium sm:text-5xl">
            <CountUp end={50} duration={1} redraw={true}></CountUp>
          </h2>
          <p class="leading-relaxed">Godina iskustva</p>
        </div>
        <div class="w-1/2 p-4 sm:w-1/3">
          <h2 class="title-font text-dark text-3xl font-medium sm:text-5xl">
            <CountUp end={1000} duration={3} redraw={true}></CountUp>
          </h2>
          <p class="leading-relaxed">Zadovoljnih musterija</p>
        </div>
       
      </div>
    </div>
  );
}
