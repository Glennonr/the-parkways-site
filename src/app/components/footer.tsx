import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-8 mt-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start">
        {/* Logo and Contact Info Container */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-6 mb-6 md:mb-0">
          <Image
            src="/circle_logo_current.png"
            alt="The Parkways Logo"
            width={120}
            height={120}
            className="object-contain"
          />
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <p className="text-lg mb-2 font-semibold">Contact Us:</p>
            <p>Email: <Link href="mailto:theparkwaysband@gmail.com" className="text-white hover:text-yellow">theparkwaysband@gmail.com</Link></p>
            <p>Phone: <a href="tel:+18562989855" className="text-white hover:text-yellow">(856) 298-9855</a></p>
            <p className="mt-2">Follow us on social media!</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-2 ">
              <div className="hover:text-yellow">
              <Link href="https://www.instagram.com/theparkwaysband/" target="_blank">
                <FaInstagram size={24} />
              </Link>
              </div>
              <div className="hover:text-yellow">
              <Link href="https://www.tiktok.com/@the_parkways?is_from_webapp=1&sender_device=pc" target="_blank">
                <FaTiktok size={24} />
              </Link>
              </div>
              <div className="hover:text-yellow">
              <Link href="https://www.facebook.com/theparkways" target="_blank">
                <FaFacebook size={24} />
              </Link>
              </div>
              <div className="hover:text-yellow">
              <Link href="https://www.youtube.com/channel/UCXoZkvWQVQuXDviev4ZEHFQ" target="_blank">
                <FaYoutube size={24} />
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
