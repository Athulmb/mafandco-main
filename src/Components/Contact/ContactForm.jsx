import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Facebook,
  Youtube,
  Linkedin,
  User,
  Mail,
  FileText,
  DollarSign,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

/* ---------------- Animated Heading ---------------- */
const AnimatedHeading = ({ text, className }) => {
  const letters = Array.from(text);
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };
  const child = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
  };
  return (
    <motion.h1 className={className} variants={container} initial="hidden" animate="visible">
      {letters.map((char, index) => (
        <motion.span key={index} variants={child} className={char === " " ? "inline-block w-2" : ""}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

/* ---------------- Form Field Components ---------------- */
const FormField = ({ children }) => <div className="relative">{children}</div>;

const InputWithIcon = ({ type, name, placeholder, value, onChange, Icon }) => (
  <FormField>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-12 text-base sm:text-lg bg-backgound rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 placeholder-gray-500"
    />
    <Icon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
  </FormField>
);

const SelectWithIcon = ({ name, value, onChange, Icon, options }) => (
  <FormField>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-12 text-base sm:text-lg bg-backgound rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-500 appearance-none"
    >
      {options.map((opt, idx) => (
        <option key={idx} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    <Icon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
  </FormField>
);

const TextareaWithIcon = ({ name, placeholder, value, onChange, Icon }) => (
  <FormField>
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={4}
      className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-12 text-base sm:text-lg bg-backgound rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 placeholder-gray-500 resize-none"
    />
    <Icon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
  </FormField>
);

/* ---------------- Contact Form ---------------- */
const ContactForm = ({ formData, handleChange, handleSubmit }) => (
  <motion.div
    className="flex flex-col bg-white p-4 sm:p-6 md:p-8 rounded-xl justify-between space-y-4 sm:space-y-6 md:space-y-8 w-full mx-auto"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      <InputWithIcon type="text" name="name" placeholder="Your name **" value={formData.name} onChange={handleChange} Icon={User} />
      <InputWithIcon type="email" name="email" placeholder="Email Address **" value={formData.email} onChange={handleChange} Icon={Mail} />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      <SelectWithIcon
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        Icon={FileText}
        options={[
          { value: "", label: "Select Subject **" },
          { value: "buying", label: "Buying Property" },
          { value: "selling", label: "Selling Property" },
          { value: "renting", label: "Renting" },
          { value: "consultation", label: "Consultation" },
        ]}
      />
      <SelectWithIcon
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        Icon={DollarSign}
        options={[
          { value: "", label: "Select Budget **" },
          { value: "5k-10k", label: "$5,000 - $10,000" },
          { value: "10k-50k", label: "$10,000 - $50,000" },
          { value: "50k-100k", label: "$50,000 - $100,000" },
          { value: "100k-500k", label: "$100,000 - $500,000" },
          { value: "500k+", label: "$500,000+" },
        ]}
      />
    </div>

    <TextareaWithIcon name="message" placeholder="Message **" value={formData.message} onChange={handleChange} Icon={MessageCircle} />

    <button
      onClick={handleSubmit}
      className="w-full bg-primary text-white text-base sm:text-lg font-medium py-3 sm:py-4 rounded-md transition-colors duration-200"
    >
      Submit
    </button>
  </motion.div>
);

/* ---------------- Main Component ---------------- */
export default function RealEstateContact() {
  const location = useLocation();
  const currentPath = location.pathname;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will get back to you soon.");
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-backgound min-h-screen py-12">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 xl:px-20">
        {/* Animated Heading */}
        <motion.div className="text-center mb-8 sm:mb-12">
          <AnimatedHeading
            text="Any Inquiry"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[240px] font-black text-gray-900 bg-gradient-to-b from-[#4DAEC1] to-[#0A374E] text-transparent bg-clip-text mb-2 sm:mb-3"
          />
          <p className="text-base sm:text-3xl text-gray-500">Get in touch</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column */}
          <motion.div
                        className="flex flex-col justify-between space-y-8 sm:space-y-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUpVariant}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Connect</h2>
                            <div className="space-y-2 sm:space-y-4 text-gray-600 text-base sm:text-lg lg:text-xl">
                                <p>info@mafandcoproperties.com</p>
                                <p>+971 43522155</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Corporate Headquarters</h2>
                            <div className="space-y-1 sm:space-y-2 text-gray-600 text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">
                                <p>MAF & Co Properties LLC,</p>
                                <p>Office-12A07, Floor - 12A,</p>
                                <p>DAMAC XL Tower</p>
                                <p>Business Bay</p>
                                <p>Dubai, UAE</p>
                            </div>

                            <motion.div className="flex gap-3 sm:gap-4">
                                {[
                                    { Icon: Facebook, href: "https://facebook.com" },
                                    { Icon: Youtube, href: "https://youtube.com" },
                                    { Icon: Linkedin, href: "https://linkedin.com" },
                                ].map(({ Icon, href }, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-gray-700"
                                        whileHover="hover"
                                        initial="rest"
                                        animate="rest"
                                    >
                                        {/* Icon */}
                                        <Icon size={20} className="z-10" />

                                        {/* Default thin border */}
                                        <span className="absolute inset-0 rounded-full border border-gray-300 z-0" />

                                        {/* Hover thicker border */}
                                        <motion.span
                                            className="absolute inset-0 rounded-full border border-black z-20"
                                            variants={{
                                                rest: { scale: 0, opacity: 1, borderWidth: 1 },  // start thin at center
                                                hover: { scale: 1, opacity: 1, borderWidth: 2, transition: { duration: 0.3, ease: "easeOut" } }, // grows thick
                                            }}
                                        />
                                    </motion.a>
                                ))}
                            </motion.div>

                        </div>
                    </motion.div>

          {/* Right Column */}
          <ContactForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
