import SectionHeader from "./SectionHeader";

const VisitUs = ({ mapHeight }: { mapHeight: number }) => {
  return (
    <section className="mx-auto grid max-w-screen-2xl sm:grid-cols-1 sm:grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:py-8 xl:px-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1223.2274716144923!2d122.64063081351568!3d13.84059842812784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a26de2fa516893%3A0xc0e7107776841113!2sTagparak%20Beachfront%20Resort!5e1!3m2!1sen!2sph!4v1728035655758!5m2!1sen!2sph"
        height={mapHeight}
        width="100%"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
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
            <span className="p-2 font-black uppercase ">Mobile numbers</span>
            <span className="p-2">Elena Quindoza - 09494343421</span>
            <span className="p-2">Enrico Sales - 09228552247</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
