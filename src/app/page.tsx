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
      <section className="min-h-[calc(100vh_-_100px_-_60px)] pt-[60px] heropattern-topography-yellow-200">
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
        <VisitUs mapHeight={500} />
      </section>
      <Footer />
    </>
  );
}
