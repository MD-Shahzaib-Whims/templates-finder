"use client"
import { Button } from "@/components/ui/button";
import { TemplateGrid } from "@/components";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#89b0eb] to-[#2d84f0]">
      {/* Hero Section */}
      <section className="relative px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl font-bold text-wedding-navy sm:text-5xl md:text-6xl">
            Create Your Perfect Wedding Invitation
          </h1>
          <p className="mt-6 font-inter text-lg text-gray-600">
            Choose from our collection of elegant and customizable templates to create
            the perfect invitation for your special day
          </p>
          <Button
            className="mt-8 bg-slate-500 text-white hover:bg-slate-600"
            size="lg"
            onClick={() => document.getElementById("templates")?.scrollIntoView({ behavior: "smooth" })}
          >
            Browse Templates
          </Button>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center font-playfair text-3xl font-semibold text-wedding-navy">
            Wedding Card Templates
          </h2>
          <TemplateGrid />
        </div>
      </section>
    </div>
  );
};

export default Page;