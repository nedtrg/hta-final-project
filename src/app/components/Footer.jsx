import { IconBrain } from "@tabler/icons-react";
import { IconPhone } from "@tabler/icons-react";
import { IconMapPins } from "@tabler/icons-react";
import { IconMailSpark } from "@tabler/icons-react";
import { IconBrandTwitter } from "@tabler/icons-react";
import { IconBrandFacebook } from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black text-white px-6 py-10">
      <div className="flex flex-col md:flex-row gap-10 md:gap-6 justify-between max-w-7xl mx-auto">
        {/* Brand / Contact */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 pb-4">
            <span className="text-amber-800">
              <IconBrain stroke={2} width={40} height={40} />
            </span>
            <h1 className="font-bold text-xl">Honey Treat Academy</h1>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 pb-3">
            <IconPhone
              stroke={1}
              width={24}
              height={24}
              className="text-amber-800"
            />
            <span>8096452312</span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 pb-3">
            <IconMapPins
              stroke={1}
              width={24}
              height={24}
              className="text-amber-800"
            />
            <span className="max-w-xs">123, HTA Street, City, Country</span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 pb-5">
            <IconMailSpark
              stroke={1}
              width={24}
              height={24}
              className="text-amber-800"
            />
            <span>info@hta.com</span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-5">
            <IconBrandFacebook className="text-gray-300 hover:text-emerald-900 cursor-pointer" />
            <IconBrandTwitter className="text-gray-300 hover:text-emerald-900 cursor-pointer" />
            <IconBrandInstagram className="text-gray-300 hover:text-emerald-900 cursor-pointer" />
          </div>
        </div>

        {/* Company */}
        <div className="text-center md:text-left">
          <h2 className="font-extrabold text-xl mb-4">Company</h2>
          <ul className="text-gray-500 font-semibold space-y-2">
            <li className="hover:text-emerald-900 cursor-pointer">About</li>
            <li className="hover:text-emerald-900 cursor-pointer">Our Team</li>
            <li className="hover:text-emerald-900 cursor-pointer">
              Our Services
            </li>
            <li className="hover:text-emerald-900 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Links */}
        <div className="text-center md:text-left">
          <h2 className="font-extrabold text-xl mb-4">Links</h2>
          <ul className="text-gray-500 font-semibold space-y-2">
            <li className="hover:text-emerald-900 cursor-pointer">Courses</li>
            <li className="hover:text-emerald-900 cursor-pointer">Blog</li>
            <li className="hover:text-emerald-900 cursor-pointer">Events</li>
            <li className="hover:text-emerald-900 cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Support */}
        <div className="text-center md:text-left">
          <h2 className="font-extrabold text-xl mb-4">Support</h2>
          <ul className="text-gray-500 font-semibold space-y-2">
            <li className="hover:text-emerald-900 cursor-pointer">
              Documentation
            </li>
            <li className="hover:text-emerald-900 cursor-pointer">
              Language Packs
            </li>
            <li className="hover:text-emerald-900 cursor-pointer">Forums</li>
            <li className="hover:text-emerald-900 cursor-pointer">
              Release Status
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
