import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#1A1919] py-20 px-14 grid grid-cols-1 md:grid-cols-3">
      <div>
        <Link className="text-white font-extrabold text-3xl" to="/">
          SumonTech
        </Link>
        <p className="text-[#a6a6a6] font-normal mt-4">
          There are many variations of passages of Lorem Ipsum , but the
          majority have suffered alteration in some form.
        </p>
        <div className="mt-4 flex gap-4">
          <a href="#" className="text-blue-400 bg-[#FFFFFF] p-4 rounded">
            <FaFacebook icon="FaFacebook" />
          </a>
          <a href="#" className="text-blue-400 bg-[#ffffff] p-4 rounded">
            <FaTwitter icon="FaTwitter" />
          </a>
          <a href="#" className="text-blue-400 bg-[#ffffff] p-4 rounded">
            <FaInstagram icon="FaInstagram" />
          </a>
        </div>
      </div>
      <div>
        <h4 className="text-2xl text-white font-semibold">Company</h4>
        <ul className="text-[#9c9c9c] font-normal mt-3">
          <li className="mt-2">About Us</li>
          <li className="mt-2">Work</li>
          <li className="mt-2">Latest News</li>
          <li className="mt-2">Careers</li>
        </ul>
      </div>
      <div>
        <h4 className="text-2xl text-white font-semibold">Product</h4>
        <ul className="text-[#9c9c9c] font-normal mt-3">
          <li className="mt-2">Prototype</li>
          <li className="mt-2">Plans & Pricing</li>
          <li className="mt-2">Latest News</li>
          <li className="mt-2">Careers</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
