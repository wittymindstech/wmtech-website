import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';
import { SERVICES_DATA, MailIcon, PhoneIcon } from './constants';
import { Service } from './types';

const HeroSection: React.FC = () => (
    <section className="relative bg-gray-900 text-white">
        <div 
             className="absolute inset-0 bg-cover bg-center z-0"
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                <span className="block">Innovative IT Solutions</span>
                <span className="block text-blue-400">for a Digital Future</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
                Wittyminds Technologies empowers businesses with cutting-edge technology, from intelligent AI to robust cloud infrastructure.
            </p>
            <div className="mt-8 flex justify-center">
                <a
                    href="#services"
                    className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg"
                >
                    Explore Our Services
                </a>
            </div>
        </div>
    </section>
);


const ServicesSection: React.FC<{ services: Service[] }> = ({ services }) => (
    <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Services & Products</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    We offer a comprehensive suite of services to accelerate your digital transformation journey.
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </div>
    </section>
);

const AboutSection: React.FC = () => (
    <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div>
                     <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        About Wittyminds Technologies
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We are a team of passionate technologists, strategists, and innovators dedicated to delivering excellence. Our mission is to leverage the latest technological advancements to create tangible value for our clients, helping them navigate the complexities of the digital landscape with confidence.
                    </p>
                     <p className="mt-4 text-lg text-gray-600">
                       At Wittyminds, we believe in building strong partnerships based on trust, transparency, and a shared vision for success.
                    </p>
                </div>
                <div className="mt-10 lg:mt-0">
                    <img className="rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400&q=80" alt="About us" />
                </div>
            </div>
        </div>
    </section>
);

const ContactSection: React.FC = () => (
    <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Get In Touch</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Have a project in mind or want to learn more? We'd love to hear from you.
                </p>
            </div>
            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col items-center space-y-6">
                 <div className="flex items-center text-lg text-gray-700">
                    <MailIcon className="h-6 w-6 mr-3 text-blue-600" />
                    <a href="mailto:wittytechminds@gmail.com" className="hover:text-blue-700 transition-colors">
                        wittytechminds@gmail.com
                    </a>
                </div>
                 <div className="flex items-center text-lg text-gray-700">
                    <PhoneIcon className="h-6 w-6 mr-3 text-blue-600" />
                    <a href="tel:+919113957428" className="hover:text-blue-700 transition-colors">
                        +91 9113957428
                    </a>
                </div>
            </div>
        </div>
    </section>
);

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Header />
            <main>
                <HeroSection />
                <ServicesSection services={SERVICES_DATA} />
                <AboutSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;