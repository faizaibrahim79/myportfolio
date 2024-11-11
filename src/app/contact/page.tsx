import ProfileButton from '@/components/layout/ProfileButton';
import { FaPhoneAlt, FaEnvelope, FaSkype, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between text-white p-10 space-y-10 lg:space-y-0">
      {/* Left Side - Contact Information */}
      <div className="space-y-6 lg:w-1/3">
        <h4 className="text-sm font-medium text-yellow-400">Contact Us</h4>
        <h2 className="text-3xl font-bold">
          Let’s <span className="text-yellow-400">Connect</span> & Collaborate
        </h2>
        <p className="text-white leading-relaxed">
        Whether you have a project in mind, need assistance, or just want to chat about the latest trends in tech, I’m here to help! Drop me a message, and let’s create something amazing together. Looking forward to connecting with you!
                </p>
        
        {/* Contact Details */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 " >
            <FaPhoneAlt className="text-yellow-400" />
            <span>+0213-456-789</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-yellow-400" />
            <span>faizafaizan@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaSkype className="text-yellow-400" />
            <span>faiza_ff</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-yellow-400" />
            <span>Block-14 Gulshan-e-Iqbal Karachi -75300</span>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="lg:w-1/2 space-y-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <input
            type="text"
            placeholder="First Name *"
            className="w-full lg:w-1/2 p-4 rounded bg-blue-500 text-white outline-none placeholder-white"
          />
          <input
            type="text"
            placeholder="Last Name *"
            className="w-full lg:w-1/2 p-4 rounded bg-blue-500 text-white outline-none placeholder-white"
          />
        </div>
        
        <div className="flex flex-col lg:flex-row gap-4">
          <input
            type="email"
            placeholder="Email *"
            className="w-full lg:w-1/2 p-4 rounded bg-blue-500 text-white outline-none placeholder-white"
          />
          <input
            type="text"
            placeholder="Phone Number *"
            className="w-full lg:w-1/2 p-4 rounded bg-blue-500 text-white outline-none placeholder-white"
          />
        </div>

        <input
          type="text"
          placeholder="Subject *"
          className="w-full p-4 rounded bg-blue-500 text-white outline-none placeholder-white"
        />

        <textarea
          placeholder="Message *"
          className="w-full p-4 rounded bg-blue-500 text-white outline-none placeholder-white"
          rows={4}
        />

      <div className="inline-block mt-4"><ProfileButton  text="Send Message" /></div>
      </div>
    </div>
  );
}
