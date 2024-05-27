import Button from "@/components/Button";
import FeaturesBlock from "@/components/FeaturesBlock";
import FeaturesCards from "@/components/FeaturesCards";
import Heading from "@/components/Heading";

import PricingSection from "@/components/PricingSection";
import TestimonialCard from "@/components/TestimonialCard";
import { clients } from "@/constants/clients";
import { featuresBlock, features } from "@/constants/features";
import { testimonials } from "@/constants/testimonials";

import { ArrowRightCircle, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-x-hidden overflow-y-hidden pt-24 lg:pt-28 antialiased">
      <div className="relative container">
        <Image
          src="/images/bg11.jpg"
          alt="homeImage"
          height={1000}
          width={1920}
          className="absolute -z-50 w-full min-h-screen md:max-h-[670px] md:h-full lg:min-h-screen
           -top-30  left-0 opacity-10"
        />

        {/* Home section */}
        <section id="home" className="relative">
          <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-40" />
          <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 md:bottom-44 -right-20 md:right-20" />
          <div className="flex flex-col text-center space-y-12">
            <div className="flex flex-col items-center space-y-6">
              <p className="capitalize border border-slate-700 py-1 px-3 text-sm rounded-3xl cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all">
                new features is now available.
                <ArrowRightCircle className="inline ml-1 w-4 h-4" />
              </p>
              <Heading title="Welcome to Our Ecommerce Store" />
              <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
                Discover our wide range of products and enjoy great deals on
                your favorite items. Shop now for the best selection and prices!
              </p>
              <div className="flex item-center gap-4">
                <Button>
                  get started
                  <MoveRight className="w-4 h-4" />
                </Button>
                <Link href="pricing">
                  <Button variant="outline">view pricing</Button>
                </Link>
              </div>
            </div>
            <Image
              src="/images/homeimage.jpg"
              alt="homeImage"
              height={370}
              width={670}
              className="mx-auto shadow-xl"
            />
          </div>
        </section>
        {/* client section */}
        <section
          id="clients"
          className="max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4"
        >
          {clients.map((client, index) => (
            <Image
              key={index}
              src={client.imageURL}
              alt={client.alt}
              width={120}
              height={80}
              className="w-40 md:w-full mx-auto"
            />
          ))}
        </section>
        {/* features section */}
        <section
          id="features"
          className="flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28"
        >
          {/* part 1 */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <Image
              src="/images/bg2.jpg"
              alt="bg2"
              width={1920}
              height={1000}
              className="absolute -z-50 w-full top-0 left-0 opacity-5"
            />
            <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
              <Heading title="Powerful features to help you manage all your leads." />
              <p className="lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8">
                Our innovative tools streamline lead management, ensuring you
                stay organized and focused on growing your business. Take
                control of your leads today!
              </p>
              <Button>get started</Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <FeaturesCards key={index} {...feature} />
              ))}
            </div>
          </div>
          {/* part 2 */}
          {featuresBlock.map((blockitem, index) => (
            <FeaturesBlock key={index} {...blockitem} />
          ))}
        </section>
        {/* pricing section */}
        <PricingSection />
        {/* testimonials section */}
        <section id="testimonials" className="flex flex-col gap-8">
          <Heading title="Meet Our Customers" isCentered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </section>
        {/* Contact section */}
        <section id="contact">
          <div className="bg-slate-800 rounded-lg px-8 lg:px-24 py-8 lg:py-12 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-4 text-center lg:text-start">
              <Heading title="Let's try our service now!" />
              <p className="max-w-[35rem] leading-normal text-lg">
                Experience the difference with our innovative solutions. Join
                thousands of satisfied customers and unlock your full potential
                today!
              </p>
            </div>
            <Button>
              get started <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
