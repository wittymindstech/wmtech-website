import React from 'react';
import { Service } from './types';

export const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

export const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
    </svg>
);


export const SERVICES_DATA: Service[] = [
    {
        title: "AI & ML Apps",
        description: "Custom AI and Machine Learning applications to solve complex business problems and drive innovation.",
        imageUrl: "https://images.unsplash.com/photo-1599658880436-b62699e5da78?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
        title: "GenAI Products",
        description: "Harness the power of Generative AI to create novel content, automate creativity, and build next-gen products.",
        imageUrl: "https://images.unsplash.com/photo-1677756119517-756a188d2d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
        title: "Agentic AI Automation",
        description: "Deploy intelligent AI agents to automate complex workflows, enhancing efficiency and reducing operational costs.",
        imageUrl: "https://images.unsplash.com/photo-1620712943543-285f7267a808?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
        title: "Cloud Services",
        description: "Robust, scalable, and secure cloud solutions, from migration and management to optimization on major platforms.",
        imageUrl: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
        title: "DevOps",
        description: "Streamline your development lifecycle with our CI/CD, infrastructure as code, and automated monitoring solutions.",
        imageUrl: "https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
        title: "Microservices",
        description: "Build resilient and scalable applications with a microservices architecture, enabling faster development and deployment.",
        imageUrl: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
        title: "IoT & Smart Devices",
        description: "Connect the physical and digital worlds with our end-to-end IoT solutions for data collection, analysis, and action.",
        imageUrl: "https://images.unsplash.com/photo-1565373397902-897b35f08694?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
        title: "IT Consultation",
        description: "Expert strategic guidance to align your technology roadmap with your business goals for sustainable growth.",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    }
];