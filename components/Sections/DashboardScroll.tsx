"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import Tablet from "../../public/images/Tablet.jpg"

export function DashboardScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl font-semibold">
            Loan Tracking and<br />
              <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none">
              Management Dashboard
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={Tablet}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
