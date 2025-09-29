import React, { useState } from 'react';
import { Facebook, Youtube, Linkedin } from 'lucide-react';
import FreeMap from '../Common/FreeMap';

export default function RealEstateContact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        budget: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry! We will get back to you soon.');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-backgound">
            {/* Main Contact Section */}
            <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 py-12 lg:py-20">
                {/* Section Heading Row */}
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

                {/* Left + Right Columns (1/3 + 2/3) */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
                    {/* Left Column - Contact Info */}
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

                            {/* Social Icons */}
                            <div className="flex gap-3 sm:gap-4">
                                <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                                    <Facebook size={20} className="text-gray-700" />
                                </button>
                                <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
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
                    <div className="flex flex-col bg-white p-4 sm:p-6 md:p-8 rounded-xl justify-between space-y-4 sm:space-y-6 md:space-y-8 w-full mx-auto">
                        {/* Name and Email Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name **"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg bg-backgound rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-gray-900 placeholder-gray-500"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address **"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg bg-backgound rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-gray-900 placeholder-gray-500"
                            />
                        </div>

                        {/* Subject and Budget Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg bg-backgound rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-gray-500 appearance-none"
                            >
                                <option value="">Select Subject **</option>
                                <option value="buying">Buying Property</option>
                                <option value="selling">Selling Property</option>
                                <option value="renting">Renting</option>
                                <option value="consultation">Consultation</option>
                            </select>

                            <select
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg bg-backgound rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-gray-500 appearance-none"
                            >
                                <option value="">$5000 - $10,000</option>
                                <option value="10k-50k">$10,000 - $50,000</option>
                                <option value="50k-100k">$50,000 - $100,000</option>
                                <option value="100k-500k">$100,000 - $500,000</option>
                                <option value="500k+">$500,000+</option>
                            </select>
                        </div>

                        {/* Message Field */}
                        <textarea
                            name="message"
                            placeholder="Message **"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg bg-backgound rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-gray-900 placeholder-gray-500 resize-none"
                        />

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-primary text-white text-base sm:text-lg font-medium py-3 sm:py-4 rounded-md transition-colors duration-200"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="w-full flex justify-center mt-8 sm:mt-10 p-4 sm:p-6">
                <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-3xl overflow-hidden shadow-lg">
                    <FreeMap />
                </div>
            </div>
        </div>
    );
}
