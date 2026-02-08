import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { PiPinterestLogoBold } from "react-icons/pi";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-6 relative overflow-hidden">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Email Us</h3>
        <p className="flex items-center gap-4">
          <AiOutlineMail className="shrink-0" />
          <span>perfectfit@email.com</span>
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Call Us</h3>
        <p className="flex items-center gap-4">
          <IoCallOutline className="shrink-0" />
          <span>+880 1234567890</span>
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Visit Us</h3>
        <p className="flex items-center gap-4">
          <LuMapPin className="shrink-0" />
          <span>123 Main Street, City, Country</span>
        </p>

        <div className="space-y-2">
          <p className="flex items-center gap-4">
            <AiOutlineClockCircle className="shrink-0" />
            <span>Visiting Hours:</span>
          </p>

          <div className="text-sm space-y-2 ps-8">
            <p>Monday - Friday: 9am - 6pm</p>
            <p>Saturday: 10am - 4pm</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Connect with Us</h3>
        <div className="flex items-center gap-4">
          <SlSocialFacebook />
          <SlSocialInstagram />
          <PiPinterestLogoBold />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
