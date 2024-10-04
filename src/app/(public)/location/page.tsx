import SectionHeader from "@/app/ui/SectionHeader";
import VisitUs from "@/app/ui/VisitUs";

export default function Page() {
  return (
    <div className="mx-auto min-h-[calc(100vh_-_100px_-_60px)] max-w-screen-2xl px-0 py-8 md:px-16 2xl:px-0">
      <SectionHeader text="location" />
      <VisitUs mapHeight={500} />
    </div>
  );
}
