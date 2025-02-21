import { fetchAmenities } from "@/app/lib/actions";
import AmenitiesCarousel from "@/app/ui/AmenitiesCarousel";
import SectionHeader from "@/app/ui/SectionHeader";

export default async function Page() {
  const amenities = await fetchAmenities();
  return (
    <div className="mx-auto h-full max-w-screen-2xl px-0 py-8 md:px-0 2xl:px-0">
      <SectionHeader text="amenities" />
      <AmenitiesCarousel amenities={amenities} />
    </div>
  );
}
