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
    <div className=" flex gap-10 justify-around bg-black text-white p-10 items-center">
      <div className="justify-center">
        <div className="flex items-center gap-3 pb-3">
          <span className="text-amber-800">
            <IconBrain stroke={2} width={40} height={40} />
          </span>
          <span>
            <h1 className="font-bold text-xl">Honey Treat Academy</h1>
          </span>
        </div>
        <div className="flex items-center gap-5 pb-3">
          <span className="text-amber-800">
            <IconPhone stroke={1} width={30} height={30} />
          </span>
          <span>
            <h1>8096452312</h1>
          </span>
        </div>
        <div className="flex items-center gap-5 pb-3">
          <span className="text-amber-800">
            <IconMapPins stroke={1} width={30} height={30} />
          </span>
          <span>
            <h1>123,HTA Street , City, Country</h1>
          </span>
        </div>
        <div className="flex items-center gap-5 pb-5">
          <span className="text-amber-800">
            <IconMailSpark stroke={1} width={30} height={30} />
          </span>
          <span>
            <h1>info@hta.com</h1>
          </span>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-gray-300">
            <IconBrandFacebook className="hover:text-emerald-900 cursor-pointer" />
          </span>
          <span className="text-gray-300">
            <IconBrandTwitter className="hover:text-emerald-900 cursor-pointer" />
          </span>
          <span className="text-gray-300">
            <IconBrandInstagram className="hover:text-emerald-900 cursor-pointer" />
          </span>
        </div>
      </div>

      <div className="">
        <h2 className="text-white font-extrabold text-xl mb-4 -mt-6">
          Company
        </h2>
        <ul className=" text-gray-500 font-semibold ">
          <li className="hover:text-emerald-900 cursor-pointer pb-2">About</li>
          <li className="hover:text-emerald-900 cursor-pointer pb-2">
            Our Team
          </li>
          <li className="hover:text-emerald-900 cursor-pointer pb-2">
            Our Services
          </li>
          <li className="hover:text-emerald-900 cursor-pointer pb-2">
            Contact
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-white font-extrabold text-xl mb-4 -mt-6">Links</h2>
        <ul className=" text-gray-500 font-semibold ">
          <li className="hover:text-emerald-900 cursor-pointer pb-2">
            Courses
          </li>
          <li className="hover:text-emerald-900 cursor-pointer pb-2">Blog</li>
          <li className="hover:text-emerald-900 cursor-pointer pb-2">Events</li>
          <li className="hover:text-emerald-900 cursor-pointer pb-2">FAQ</li>
        </ul>
      </div>
      <div>
        <h2 className="text-white font-extrabold text-xl mb-4 -mt-6">
          Support
        </h2>
        <ul className=" text-gray-500 font-semibold ">
          <li className=" hover:text-emerald-900 cursor-pointer pb-2">
            Documentation
          </li>
          <li className=" hover:text-emerald-900 cursor-pointer pb-2">
            Language Packs
          </li>
          <li className=" hover:text-emerald-900 cursor-pointer pb-2">
            Forums
          </li>
          <li className=" hover:text-emerald-900 cursor-pointer pb-2">
            Release Status
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
