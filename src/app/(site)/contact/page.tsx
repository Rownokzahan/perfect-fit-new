import Image from "next/image";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export const metadata = {
  title: "Contact Us",
};

const ContactPage = () => {
  return (
    <div className="ui-container mt-8 mb-12">
      <section className="mb-12 text-center space-y-1">
        <h3 className="text-center font-bold text-3xl">Contact Us</h3>
        <p className="text-dark-light text-sm">
          We would love to hear from you
        </p>
      </section>

      <section className="mb-18 sm:mb-12 flex flex-col md:flex-row gap-16">
        <div className="flex-1 relative overflow-hidden">
          <ContactInfo />

          {/* Flower Design */}
          <div className="w-40 absolute z-10 -inset-y-20 -right-20 opacity-10 flex flex-col justify-between">
            <Image
              width={400}
              height={400}
              src={"/images/daisy.png"}
              className="w-full opacity-0"
              alt="flower"
            />
            <Image
              width={400}
              height={400}
              src={"/images/daisy.png"}
              className="w-full"
              alt="flower"
            />
          </div>
        </div>

        <div className="md:w-3/7 space-y-6 bg-light-light p-8">
          <h3 className="text-lg font-bold">Send Us A Message</h3>
          <ContactForm />
        </div>
      </section>

      <section className="h-[30vh]">
        <Image
          width={960}
          height={540}
          src={"/images/contact-map.webp"}
          className="size-full object-cover object-bottom-left rounded-md"
          alt="map"
        />
      </section>
    </div>
  );
};

export default ContactPage;
