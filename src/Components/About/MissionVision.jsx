import React from 'react';

export default function MissionVision() {
    return (
        <div className="h-auto bg-backgound py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Our Mission Card - Landscape (wider than tall) */}
                    <div className="bg-white/50 rounded-xl shadow-md p-8 lg:p-12 w-full lg:w-4/5 lg:h-4/5">
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
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
                    <div className="bg-transparent p-8 lg:p-12 rounded-2xl shadow-sm border-[3px] border-black/20 w-full lg:w-2/3 lg:h-[80%]">
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
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
