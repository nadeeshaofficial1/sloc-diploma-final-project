"use client"

import { ContactUs } from "@/components/ContactUs";
import { Myform } from "@/components/Myform";
import HeroOne from "@/components/HeroOne";
import FuelList from "@/components/Home/FuelList";
import Hero from "@/components/Home/Hero";
import OilFiltersOption from "@/components/Home/OilFiltersOption";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import { getFuelList } from "@/services";
import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Fhero from "@/components/Fhero";
import Card1 from "@/components/Card1";
import Card2 from "@/components/Card2";
import Card3 from "@/components/Card3";
import Stat from "@/components/Stat";
import Count from "@/components/Count";

export default function Home() {
  const [fuelLists,setFuelLists]=useState<any>([])
  const [fuelOrgLists,setFuelOrgLists]=useState<any>([])

  useEffect(()=>{
    getFuelList_();

  },[])
  const getFuelList_=async()=>{
    const result:any=await getFuelList();
    setFuelLists(result?.fuelLists)
    setFuelOrgLists(result?.fuelLists);
  }


  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <Stat />
      <QRCodeGenerator />
      <div className="grid grid-cols-3 gap-4">
      <Card3 />
      <Card1 />
      <Card2 />
    </div>
      <OilFiltersOption fuelList={fuelOrgLists}/>
      <FuelList  fuelLists={fuelLists} />
      <Count />
      <HeroOne />
      <ContactUs />
      <Fhero />
      <Myform />
      <Footer />
      

    </div>
    
  );
}
