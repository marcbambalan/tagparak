import { PhoneIcon } from "@heroicons/react/16/solid";
import { ChevronDoubleDownIcon } from "@heroicons/react/16/solid";
import { Gluten } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/app/ui/SectionHeader";
import Footer from "./ui/Footer";
import Header from "./ui/Header";

const gluten = Gluten({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <>
      <Header />
      <section className="Fmin-h-[calc(100vh_-_100px_-_60px)] heropattern-topography-yellow-200">
        {/* Hero */}
        <section className="mx-auto grid h-screen max-w-screen-2xl sm:grid-cols-1 sm:grid-rows-2 md:grid-cols-2 md:grid-rows-1 ">
          <div className="place-content-center">
            <h2 className="px-4 text-center text-[48px] font-bold uppercase sm:text-[56px] md:text-[64px] xl:px-16">
              {"Beat the heat this "}
              <span
                className={`text-yellow-300 sm:text-[64px] md:text-[84px] ${gluten.className}`}
              >
                Summer
              </span>
            </h2>
            <div className="flex flex-col place-content-center items-center gap-4 sm:flex-row">
              <Link
                href="#amenities"
                className="flex items-center rounded-full bg-yellow-300 p-2 px-4"
              >
                <ChevronDoubleDownIcon className="size-6 animate-bounce" />
                <span>Explore Tagparak</span>
              </Link>
              <Link
                href="#visit-us"
                className="flex items-center rounded-full border border-yellow-300 p-2 px-4"
              >
                <PhoneIcon className="size-6" />
                <span>Contact us!</span>
              </Link>
            </div>
          </div>
          <div className="max-w-screen relative hidden sm:block lg:h-screen">
            <Image
              src="/images/tagparak-hero.jpg"
              alt="Tagparak Beachfront Resort"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Amenities */}
        <section
          id="amenities"
          className="mx-auto flex min-h-screen max-w-screen-2xl flex-col px-0 py-8 xl:px-0"
        >
          <SectionHeader text="amenities" />
          <div className="w-full grow animate-pulse bg-slate-300">
            <span className=" text-slate-400">Insert amenities here</span>
          </div>
        </section>

        {/* Visit us */}
        <section className="mx-auto grid max-w-screen-2xl sm:grid-cols-1 sm:grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:py-8 xl:px-0">
          <div className="h-[500px] w-full animate-pulse bg-slate-300">
            <span className="text-slate-400">Embed Google maps here</span>
          </div>
          <div
            id="visit-us"
            className="order-first flex flex-col items-center justify-center md:order-last"
          >
            <SectionHeader text="Visit us!" />
            <div className="max-w-[500px] px-6">
              <div className="flex flex-col pb-6">
                <span className="p-2 font-black uppercase">Address</span>
                <span className="p-2">
                  Sitio Bagotayoc, Brgy. Lohong, Ragay, Philippines, 4410
                </span>
              </div>
              <div className="flex flex-col">
                <span className="p-2 font-black uppercase ">
                  Mobile numbers
                </span>
                <span className="p-2">Elena Quindoza - 09494343421</span>
                <span className="p-2">Enrico Sales - 09228552247</span>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
