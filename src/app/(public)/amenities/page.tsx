import { fetchAmenities } from "@/app/lib/actions";
import AmenitiesTileView from "@/app/ui/AmenitiesTileView";
import SectionHeader from "@/app/ui/SectionHeader";

export default async function Page() {
  const amenities = await fetchAmenities();
  return (
    <div className="mx-auto h-full max-w-screen-2xl px-0 py-8 md:px-0 2xl:px-0">
      <SectionHeader text="amenities" />
      <AmenitiesTileView amenities={amenities} height={670} />
    </div>
  );
}
