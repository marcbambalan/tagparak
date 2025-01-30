import { Gluten } from "next/font/google";

const gluten = Gluten({ weight: "400", subsets: ["latin"] });

export default function SectionHeader({ text }: { text: string }) {
  return (
    <h2
      className={`text-center text-[36px] font-black capitalize ${gluten.className}`}
    >
      {text}
    </h2>
  );
}
