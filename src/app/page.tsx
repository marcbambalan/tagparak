import SectionHeader from "@/app/ui/SectionHeader";
import { fetchAmenities } from "./lib/actions";
import AmenitiesTileView from "./ui/AmenitiesTileView";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import HeroCover from "./ui/HeroCover";
import VisitUs from "./ui/VisitUs";

export default async function Page() {
  const amenities = await fetchAmenities();
  return (
    <>
      <Header />
      <section className="flex min-h-[calc(100vh_-_100px_-_60px)] flex-col items-stretch pt-[60px] heropattern-topography-yellow-200">
        {/* Hero */}
        <HeroCover />

        {/* Amenities */}
        <section
          id="amenities"
          className="mx-auto flex min-h-screen max-w-screen-2xl flex-col px-0 py-8 xl:px-0"
        >
          <SectionHeader text="amenities" />
          <AmenitiesTileView amenities={amenities} height="100%" />
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
