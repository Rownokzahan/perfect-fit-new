import FooterCopyright from "./FooterCopyright";
import FooterSocial from "./FooterSocial";
import FooterSubscribe from "./FooterSubscribe";
import FooterAbout from "./FooterAbout";
import FooterSiteLinks from "./FooterSiteLinks";
import FooterTermsLinks from "./FooterTermsLinks";

const Footer = () => {
  return (
    <footer className="pt-12 sm:pt-18 bg-dark text-light/55">
      <div className="ui-container flex flex-wrap justify-between gap-12">
        <FooterAbout />
        <FooterSiteLinks />
        <FooterTermsLinks />

        <div className="space-y-8">
          <FooterSocial />
          <FooterSubscribe />
        </div>
      </div>

      <FooterCopyright />
    </footer>
  );
};

export default Footer;
