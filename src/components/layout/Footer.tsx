import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaRegCopyright } from 'react-icons/fa';
import ProfileButton from './ProfileButton';
import { ImArrowRight } from 'react-icons/im';

const Footer = () => {
  return (
    <div className="w-full bg-slate-800 p-5 text-[12px]">
      <div className="flex"><h2 className="text-[40px]">Let&#39;s <span className="text-yellow-600">Connect</span> there!</h2></div>
      <table className="table-auto w-full text-left text-white">
        <thead>
          <tr>
            <th className="px-2">About Me:</th>
            <th className="px-4 py-2">Company</th>
            <th className="px-4 py-2">Contact</th>
            <th className="px-4 py-2">Get the Latest Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="row-span-3" colSpan={1}>
              Passionate about crafting responsive web applications,<br />
              I specialize in both front-end and back-end development<br />
              to deliver seamless user experiences.
              <div className="flex space-x-4 mt-4">
                <a className="text-xl"><FaFacebook className="text-white hover:text-yellow-600" /></a>
                <a className="text-xl"><FaLinkedin className="text-white hover:text-yellow-600" /></a>
                <a className="text-xl"><FaInstagram className="text-white hover:text-yellow-600" /></a>
                <a className="text-xl"><FaPinterest className="text-white hover:text-yellow-600" /></a>
                <a className="text-xl"><AiFillTwitterCircle className="text-white hover:text-yellow-600" /></a>
              </div>
            </td>
            <td className="px-4 py-2">FAQS</td>
            <td className="px-4 py-2">+0213-456-789</td>
            <td className="px-4 py-2">
              <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden w-15">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-4 py-2 text-gray-700 outline-none"
                />
                <button className="p-2 flex items-center justify-center text-white hover:bg-blue-700"></button>
                <ImArrowRight className="text-xl pr-2" />
              </div>
            </td>
          </tr>
          <tr>
            <td></td>
            <td className="px-4 py-2">Services</td>
            <td className="px-4 py-2">faizafaizan@gmail.com</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td className="px-4 py-2">Testimonial</td>
            <td className="px-4 py-2">Block -14<br /> Gulshan-e-Iqbal<br /> Karachi -75300</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td className="px-4 py-2">About Us</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td className="px-4 py-2">Contact Us</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div className="w-full bg-blue-800 p-2 text-[12px] text-white">
        <div className="flex justify-evenly items-center w-full h-2 mt-2">
          <h4 className="flex items-center">
            Copyright <FaRegCopyright className="mx-1 text-yellow-600 font-bold" /> 2024 <span className="ml-1">Faiza</span>. All Rights Reserved.
          </h4>
          <h4>User Terms & Conditions | Privacy Policy</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
