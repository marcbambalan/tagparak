import Image from "next/image";
import SectionHeader from "@/app/ui/SectionHeader";
import { fetchAmenities, fetchReviews } from "./lib/actions";
import AmenitiesCarousel from "./ui/AmenitiesCarousel";
import CustomerReviews from "./ui/CustomerReviews";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import HeroCover from "./ui/HeroCover";
import VisitUs from "./ui/VisitUs";

export default async function Page() {
  const [amenities, reviews] = await Promise.all([
    fetchAmenities(),
    fetchReviews(),
  ]);

  return (
    <>
      <Header />
      <section className="flex min-h-[calc(100vh_-_100px_-_60px)] flex-col items-stretch pt-[60px] heropattern-topography-yellow-200">
        {/* Hero */}
        <HeroCover />

        {/* Amenities */}
        <section
          id="amenities"
          className="flex w-full flex-col items-center gap-4 bg-yellow-300 py-8 heropattern-topography-yellow-200"
        >
          <Image
            src="/icons/beach.svg"
            alt="Tagparak - beach icon"
            width={40}
            height={40}
          />
          <span>Bagotayok, Ragay | Philippines</span>
          <SectionHeader text="Tagparak Beachfront Resort" />
          <AmenitiesCarousel amenities={amenities} />
        </section>

        {/* Customer Reviews */}
        <section id="reviews" className="relative min-h-dvh w-full bg-blue-400">
          <div className="inset-shadow-[800px_0_100px_0_oklch(0.623 0.214 259.815)] max-h-dvh min-h-dvh w-full bg-[url('/images/tagparak-customer-reviews-background.jpg')] bg-cover bg-[center_70%]"></div>
          <CustomerReviews reviews={reviews} />
        </section>

        {/* Visit us */}
        <div className="mx-auto max-w-screen-2xl px-0 py-8 md:px-16 2xl:px-0">
          <VisitUs mapHeight={500} />
        </div>
      </section>
      <Footer />
    </>
  );
}
