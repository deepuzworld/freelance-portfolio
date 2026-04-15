import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const serviceData = {
  'static-websites': {
    title: "Static/Informative Websites",
    description: "Perfect for personal profiles, portfolios, and landing pages. Clean, fast-loading, and SEO-optimized.",
    detailedExplanation: "Static websites are the bedrock of the web. They consist of fixed content where every user sees the same thing. Because they don't require server-side processing or database queries on every load, they are incredibly fast and secure.",
    useCase: "Ideal for businesses that need to showcase their services, individuals building a personal brand, or product landing pages where speed is critical for conversion.",
    example: {
      type: "Personal Portfolio",
      description: "A professional portfolio for a photographer showcasing high-resolution galleries with zero lag.",
      features: ["Image optimization", "Responsive layouts", "Lightweight animations"]
    },
    benefits: [
      "Blazing fast performance",
      "Superior security (no database to hack)",
      "Cost-effective hosting",
      "Reliable SEO ranking"
    ]
  },
  'business-websites': {
    title: "Business Websites",
    description: "Professional corporate websites with contact forms, Google Maps integration, and content management.",
    detailedExplanation: "A full-scale business website acting as your digital headquarters. These sites typically include lead generation tools, integration with your CRM, and a way for you to manage your own content via a CMS (Content Management System).",
    useCase: "Mid-to-large companies that need to build trust, collect client inquiries, and manage a blog or news section to keep customers engaged.",
    example: {
      type: "Real Estate Agency",
      description: "A corporate site with property listings, contact agents forms, and an interactive area map.",
      features: ["Content Management System", "Lead Capture Forms", "Google Maps API", "Newsletter signup"]
    },
    benefits: [
      "Professional brand image",
      "Automated lead generation",
      "Easy content updates",
      "Deep analytics integration"
    ]
  },
  'ecommerce': {
    title: "Dynamic/E-commerce",
    description: "Full-featured e-commerce platforms with admin panels, payment gateways, and inventory management.",
    detailedExplanation: "These are complex web applications that handle transactions, user accounts, and real-time data. They include a backend logic layer that manages inventory, processes payments securely, and provides an admin dashboard for business operations.",
    useCase: "Retail businesses looking to sell products online, subscription services, or any platform requiring user-specific data and secure payments.",
    example: {
      type: "Clothing Brand Store",
      description: "A complete online store with product variants, shopping cart, Stripe payment integration, and order tracking.",
      features: ["Stripe/PayPal Integration", "Inventory Management", "User Accounts", "Order Dashboard"]
    },
    benefits: [
      "Global sales reach",
      "Secure payment processing",
      "Automated inventory tracking",
      "Scalable infrastructure"
    ]
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceData[id as keyof typeof serviceData];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Service Not Found</h1>
          <Link to="/" className="text-emerald-500 hover:text-emerald-600 font-medium">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center text-emerald-500 hover:text-emerald-600 font-medium mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Services
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {service.title}
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 italic border-l-4 border-emerald-500 pl-6">
          {service.description}
        </p>

        <div className="grid grid-cols-1 gap-12 bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center mr-3 text-lg">1</span>
              Detailed Explanation
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {service.detailedExplanation}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center mr-3 text-lg">2</span>
              Best Use Cases
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
              {service.useCase}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                  <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl p-8 border border-emerald-100 dark:border-emerald-900/30">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              Real-World Example
            </h2>
            <h3 className="text-emerald-600 dark:text-emerald-400 font-bold text-xl mb-4">{service.example.type}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg italic">
              "{service.example.description}"
            </p>
            <div className="flex flex-wrap gap-3">
              {service.example.features.map((feature, i) => (
                <span key={i} className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm font-semibold shadow-sm">
                  {feature}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/" 
            className="inline-block px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
             Start Your Project Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
