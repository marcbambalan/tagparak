import { fetchRentals } from "@/app/lib/actions";
import RentalsTileView from "@/app/ui/RentalsTileView";
import SectionHeader from "@/app/ui/SectionHeader";

export default async function Page() {
  const rentals = await fetchRentals();
  return (
    <div className="mx-auto h-full max-w-screen-2xl px-0 py-8 md:px-16 2xl:px-0">
      <SectionHeader text="rentals" />
      <RentalsTileView rentals={rentals} />
    </div>
  );
}
