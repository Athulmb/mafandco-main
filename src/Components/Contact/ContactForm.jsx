import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Facebook, Youtube, Linkedin, User, Mail, FileText, DollarSign, MessageCircle } from 'lucide-react';
import FreeMap from '../Common/FreeMap';

export default function RealEstateContact() {
    const location = useLocation();
    const currentPath = location.pathname;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        budget: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry! We will get back to you soon.');
    };

    const FormField = ({ children }) => (
        <div className="relative">{children}</div>
    );

    const InputWithIcon = ({ type, name, placeholder, value, onChange, Icon }) => (
        <FormField>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-12 text-base sm:text-lg bg-backgound rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-gray-900 placeholder-gray-500"
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
                className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-12 text-base sm:text-lg bg-backgound rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-gray-500 appearance-none"
            >
                {options.map((opt, idx) => (
                    <option key={idx} value={opt.value}>{opt.label}</option>
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
                className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-12 text-base sm:text-lg bg-backgound rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-gray-900 placeholder-gray-500 resize-none"
            />
            <Icon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </FormField>
    );

    // Common form JSX
    const ContactForm = () => (
        <div className="flex flex-col bg-white p-4 sm:p-6 md:p-8 rounded-xl justify-between space-y-4 sm:space-y-6 md:space-y-8 w-full mx-auto">
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
                        { value: '', label: 'Select Subject **' },
                        { value: 'buying', label: 'Buying Property' },
                        { value: 'selling', label: 'Selling Property' },
                        { value: 'renting', label: 'Renting' },
                        { value: 'consultation', label: 'Consultation' },
                    ]}
                />
                <SelectWithIcon
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    Icon={DollarSign}
                    options={[
                        { value: '', label: '$5000 - $10,000' },
                        { value: '10k-50k', label: '$10,000 - $50,000' },
                        { value: '50k-100k', label: '$50,000 - $100,000' },
                        { value: '100k-500k', label: '$100,000 - $500,000' },
                        { value: '500k+', label: '$500,000+' },
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
                className="w-full bg-primary text-white text-base sm:text-lg font-medium py-3 sm:py-4 rounded-md transition-colors duration-200"
            >
                Submit
            </button>
        </div>
    );

    // Home page
    if (currentPath === '/') {
        return (
            <div className="bg-backgound min-h-screen py-12">
                <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 xl:px-20">
                    <div className="text-center mb-8 sm:mb-12">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[240px] font-black text-gray-900 mb-2 sm:mb-3">
                            Any Inquiry
                        </h1>
                        <p className="text-base sm:text-3xl text-gray-500">
                            Get in touch
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
                        {/* Left Column */}
                        <div className="flex flex-col space-y-10 sm:space-y-12">
                            <div className="pb-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-8">
                                    Catch Us Here
                                </h2>
                                <div className="space-y-3 text-gray-500 text-lg sm:text-lg lg:text-xl">
                                    <p>info@mafandco.com</p>
                                    <p>+123 456 789 00-12</p>
                                </div>
                                <div className="w-1/2 h-px bg-gray-300 mt-8"></div>
                            </div>

                            <div className="pb-4 space-y-3 text-gray-500 text-lg sm:text-lg lg:text-xl">
                                <p>14960 Florence Trail</p>
                                <p>Apple Valley, MN 55124</p>
                                <div className="w-1/2 h-px bg-gray-300 mt-8"></div>
                            </div>

                            <div className="text-gray-500 text-lg sm:text-lg lg:text-xl">
                                <p>Monday – Sunday,</p>
                                <p>9am - 7pm EST</p>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <ContactForm />
                    </div>
                </div>

                {/* Map */}
                <div className="mt-12">
                    <FreeMap />
                </div>
            </div>
        );
    }

    // Non-home page
    return (
        <div className="bg-backgound">
            <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 xl:px-20 py-12 lg:py-20">
                <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
                    <p className="text-sm sm:text-base text-gray-600 whitespace-nowrap">
                        Let's talk now
                    </p>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 sm:mb-12 leading-snug">
                    Get in Touch with Our Team for Personalized<br className="hidden sm:block" />
                    Real Estate Assistance
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
                    {/* Left Column */}
                    <div className="flex flex-col justify-between space-y-8 sm:space-y-10">
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

                            <div className="flex gap-3 sm:gap-4">
                                <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                                    <Facebook size={20} className="text-gray-700" />
                                </button>
                                <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                                    <Youtube size={20} className="text-gray-700" />
                                </button>
                                <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                                    <Linkedin size={20} className="text-gray-700" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
