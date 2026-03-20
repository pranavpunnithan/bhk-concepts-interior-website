import bhkLogo from "@/assets/bhk-logo.jpg";

const Footer = () => (
  <footer className="border-t border-border py-12 px-4">
    <div className="container mx-auto text-center">
      <img src={bhkLogo} alt="BHK Concepts" className="h-10 mx-auto mb-4" />
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} BHK Concepts – Interior Design Studio. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
