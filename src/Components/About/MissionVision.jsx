import React from 'react';

export default function MissionVision() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Our Mission Card - Landscape (wider than tall) */}
                    <div className="bg-black/5 rounded-xl shadow-md p-8 lg:p-10 w-full lg:w-5/6 lg:h-3/5">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            Our Mission
                        </h2>
                        <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                            At MAF & Co Properties LLC, our mission is to provide exceptional real
                            estate experiences by offering a curated selection of luxury properties
                            that reflect excellence, comfort, and value. We specialize in connecting
                            clients with the finest residential and commercial properties in Dubai's
                            most sought-after locations, ensuring a seamless journey whether you're
                            seeking your dream home or a high-return investment. With a client-
                            centric approach rooted in trust, integrity, and expertise, we aim to
                            exceed expectations and build lasting relationships that stand the test
                            of time.
                        </p>
                    </div>

                    {/* Our Vision Card - Portrait (taller than wide) */}
                    <div className="bg-transparent p-8 lg:p-10 rounded-2xl shadow-sm border-2 border-gray-200 w-full lg:w-3/5 lg:h-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            Our Vision
                        </h2>
                        <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                            Our vision is to establish MAF & Co Properties LLC
                            as a trusted leader in Dubai's real estate market,
                            recognized for our exceptional service, innovative
                            solutions, and unwavering dedication to
                            enhancing the quality of life for our clients. We
                            aspire to be the first choice for those seeking
                            premium real estate opportunities, leveraging the
                            latest technologies and market insights to deliver
                            unparalleled value. By continually expanding our
                            portfolio and embracing a forward-thinking
                            approach, we strive to cater to the diverse needs
                            of our clientele and shape the future of real
                            estate in Dubai.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}