import { Gluten } from 'next/font/google';

const gluten = Gluten({ weight: '400', subsets: ['latin'] });

export default function SectionHeader({ text }: { text: string }) {
  return (
    <div className="flex place-content-center items-center gap-2 p-2">
      <div className="h-10 w-2 rounded-full bg-yellow-300"></div>
      <div className={`text-[36px] font-black capitalize ${gluten.className}`}>
        {text}
      </div>
    </div>
  );
}
