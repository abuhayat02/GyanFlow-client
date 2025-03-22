import CareerBanner from "@/components/Career/CareerBanner/CareerBanner";
import CareerOpenings from "@/components/Career/CareerOpenings/CareerOpenings";
import CustomHelmet from "@/components/ui/CustomHelmet";
import React from "react";

export default function Career() {
  return (
    <div>
      <CustomHelmet p={"career"}></CustomHelmet>
      <CareerBanner />
      <CareerOpenings />
    </div>
  );
}
