import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const aiServices = [
  {
    name: "Conversation",
    description: "Engage users with natural language processing and chatbot solutions. Improve customer support and user experience. Conversational AI is essential for modern businesses to provide efficient and responsive customer service.",
  },
  {
    name: "Music Generation",
    description: "Produce music tracks and soundscapes for multimedia projects, entertainment, and artistic endeavors. Music generation AI can save time and add creativity to various industries, including entertainment and advertising.",
  },
  {
    name: "Image Generation",
    description: "Generate high-quality images for marketing, design, and content creation. AI-powered image generation can streamline visual content production and enhance the quality of visuals in advertising and branding.",
  },
  {
    name: "Video Generation",
    description: "Create video content for marketing campaigns, social media, and presentations. AI-driven video generation can significantly boost engagement and brand visibility, making it a vital tool for modern marketing.",
  },
  {
    name: "Code Generation",
    description: "Automate code writing for software development. Code generation AI increases productivity and reduces development time, helping software engineers and developers work more efficiently.",
  },
];

const testimonials = [
  {
    name: "Joel",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Designer",
    description: "I use this daily for generating new photos!",
  },
  {
    name: "Mark",
    avatar: "M",
    title: "CEO",
    description: "This app has changed my life, cannot imagine working without it!",
  },
  {
    name: "Mary",
    avatar: "M",
    title: "CFO",
    description: "The best in class, definitely worth the premium subscription!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      {/* Main Heading */}
      <section className="my-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-4">Welcome to Our AI-Powered World</h1>
      </section>

      {/* AI Services Section */}
      <section className="my-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Our AI Services</h2>
          <p className="text-gray-300">Discover how our AI solutions can benefit you.</p>
        </div>
        <div className="flex justify-around flex-wrap">
          {aiServices.map((service) => (
            <div key={service.name} className="w-64 px-4 py-6 bg-[#192339] border-none text-white mb-6">
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="my-16"></div> {/* Add a gap here */}
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* FAQ Section */}
      <section className="my-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">FAQs</h2>
          <p className="text-gray-300">Common questions about our AI services.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* FAQ items */}
          <div className="bg-[#192339] border-none text-white p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">How does our AI service work?</h3>
            <p className="text-gray-300">
              Our AI service leverages advanced machine learning algorithms to provide solutions tailored to your needs.
            </p>
          </div>
          <div className="bg-[#192339] border-none text-white p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">What industries benefit from our AI solutions?</h3>
            <p className="text-gray-300">
              Our AI solutions are versatile and can benefit industries such as healthcare, finance, and e-commerce.
            </p>
          </div>
          {/* Add more FAQ items as needed */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="my-16 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">Contact Us</h2>
        <p className="text-gray-300">Have questions or ready to start your AI journey?</p>
        <p className="text-gray-300">Contact: +91-9136742031</p>
        <p className="text-gray-300">Email: ankitripathi1609@gmail.com</p>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
};