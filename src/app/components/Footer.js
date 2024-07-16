import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-20 mt-7">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-bold">LearnMore</h3>
          <p className="text-sm">&copy; 2024 LearnMore. All rights reserved.</p>
        </div>
        <div className="text-center">
          <Link href="/about" className="mx-2 text-sm hover:text-gray-400">
            About
          </Link>
          <Link href="/contact" className="mx-2 text-sm hover:text-gray-400">
            Contact
          </Link>
          <Link href="/privacy" className="mx-2 text-sm hover:text-gray-400">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
