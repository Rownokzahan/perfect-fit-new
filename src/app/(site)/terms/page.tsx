import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";

export const metadata = {
  title: "Terms & Conditions",
};

const TermsAndConditionsPage = () => {
  return (
    <div className="ui-container mb-12 mt-8 sm:mt-12 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold">Terms and Conditions</h2>
        <p className="text-sm text-dark-light">
          Effective Date: July 20, 2025 &nbsp;|&nbsp; Last Updated: July 20,
          2025
        </p>
      </div>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">1. Use of Our Website</h2>
        <p>
          You agree to use this website only for lawful purposes. You must not:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Use our site in any way that is illegal or fraudulent.</li>
          <li>
            Attempt to gain unauthorized access to our systems or servers.
          </li>
          <li>Disrupt or damage the website’s functionality.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">2. Product Information</h2>
        <p>
          We strive to display our products (including customized dresses) as
          accurately as possible. However:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Colors may vary slightly due to screen settings.</li>
          <li>All products are subject to availability.</li>
          <li>
            Customizations are made based on the options you select. Please
            double-check all details before placing your order.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">3. Orders and Payments</h2>
        <p>
          By placing an order, you confirm that all details provided are
          accurate. All prices are in your local currency and include taxes
          unless stated otherwise.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>We accept payments through all major methods.</li>
          <li>
            Customized dresses may require extra processing time and are final
            sale unless defective.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">4. Shipping and Delivery</h2>
        <p>
          We offer shipping to selected locations. Delivery timelines are
          estimates and may vary due to third-party couriers.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Shipping costs and estimated delivery times are shown during
            checkout.
          </li>
          <li>You’re responsible for providing the correct address.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">5. Returns and Exchanges</h2>
        <p className="font-medium mt-2">Standard Products:</p>
        <ul className="list-disc list-inside mt-1 ml-4">
          <li>Returns accepted within 7 days of delivery.</li>
          <li>Items must be unused and in original condition.</li>
        </ul>
        <p className="font-medium mt-4">Custom Products:</p>
        <ul className="list-disc list-inside mt-1 ml-4">
          <li>Not eligible for return or exchange unless defective.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">6. Intellectual Property</h2>
        <p>
          All content on this website—including images, text, logos, and
          designs—is the property of [Your Store Name] or its licensors and is
          protected by copyright laws.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">7. Limitation of Liability</h2>
        <p>We are not liable for:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Indirect or consequential damages.</li>
          <li>Inaccuracies or omissions on our site.</li>
          <li>Courier delays or external disruptions.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">8. Changes to These Terms</h2>
        <p>
          We reserve the right to update these Terms at any time. Changes will
          be posted on this page with a revised date. Continued use of the site
          indicates your acceptance.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">9. Contact Us</h2>
        <p className="mb-2">If you have questions, contact us at:</p>

        <div className="ps-px">
          <p className="flex items-center gap-2">
            <AiOutlineMail className="shrink-0 mt-1" />
            <span>perfectfit@email.com</span>
          </p>
          <p className="flex items-center gap-2">
            <IoCallOutline className="shrink-0" />
            <span>+880 1234567890</span>
          </p>
          <p className="flex items-center gap-2">
            <LuMapPin className="shrink-0" />
            <span>123 Main Street, City, Country</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;
