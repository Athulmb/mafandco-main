// src/pages/InnerContact.jsx
import React, { useState } from "react";
import {
  User,
  Mail,
  FileText,
  DollarSign,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

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
    <Icon className="absolute right-3 top-4 text-gray-400 w-5 h-5" />
  </FormField>
);

/* ---------------- Contact Form ---------------- */
const ContactForm = ({ formData, handleChange, handleSubmit }) => (
  <motion.div
    className="flex flex-col bg-white p-4 sm:p-6 md:p-8 rounded-xl justify-between space-y-4 sm:space-y-6 md:space-y-8 w-full mx-auto shadow-lg"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      <InputWithIcon
        type="text"
        name="name"
        placeholder="Your name **"
        value={formData.name}
        onChange={handleChange}
        Icon={User}
      />
      <InputWithIcon
        type="email"
        name="email"
        placeholder="Email Address **"
        value={formData.email}
        onChange={handleChange}
        Icon={Mail}
      />
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

    <TextareaWithIcon
      name="message"
      placeholder="Message **"
      value={formData.message}
      onChange={handleChange}
      Icon={MessageCircle}
    />

    <button
      onClick={handleSubmit}
      className="w-full bg-primary text-white text-base sm:text-lg font-medium py-3 sm:py-4 rounded-md transition-colors duration-200 hover:bg-[#0b2f40]"
    >
      Submit
    </button>
  </motion.div>
);

/* ---------------- Main Component ---------------- */
export default function InnerContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We’ll get back to you soon.");
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="bg-cover bg-center  bg-backgound bg-no-repeat min-h-screen flex items-center py-16 px-4 sm:px-8 md:px-16"
      style={{
        backgroundImage: "url('/innercontact.png')", // 🔹 Replace this with your actual background
      }}
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-center">
        {/* Left Side Content */}
        <motion.div
          className="text-white space-y-4 sm:space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg text-black">
            Get in Touch With Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-md leading-relaxed text-black/80">
            Let’s discuss your real estate goals — whether buying, selling, or investing, we’re here to help.
          </p>
        </motion.div>

        {/* Right Contact Form */}
        <ContactForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
