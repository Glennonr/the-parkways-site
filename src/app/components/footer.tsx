import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-8 mt-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <Image
            src="/circle_logo_current.png" // Path to the logo image in /public
            alt="The Parkways Logo"
            width={120}
            height={120}
            className="object-contain"
          />
          {/* <h2 className="text-2xl font-bold">The Parkways</h2> */}
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <p className="text-lg mb-2">Contact Us:</p>
          <p>Email: <Link href="mailto:theparkwaysband@gmail.com" className="text-yellow-400 hover:text-yellow-300">theparkwaysband@gmail.com</Link></p>
          <p>Phone: <a href="tel:+18562989855" className="text-yellow-400 hover:text-yellow-300">(856) 298-9855</a></p>
          <p>Follow us on social media!</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <Link href="https://www.instagram.com/theparkwaysband/" target="_blank">
              <FaInstagram
                width={50}
                height={50}
              />
            </Link>
            <Link href="https://www.tiktok.com/@the_parkways?is_from_webapp=1&sender_device=pc" target="_blank">
              <FaTiktok
                width={50}
                height={50}
              />
            </Link>
            <Link href="https://www.facebook.com/theparkways" target="_blank">
              <FaFacebook
                width={50}
                height={50}
              />
            </Link>
            <Link href="https://www.youtube.com/channel/UCXoZkvWQVQuXDviev4ZEHFQ" target="_blank">
              <FaYoutube
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
