"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Bell, Bed, Briefcase, ChefHat, Crown, Mail, MessageCircle, Sparkles, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Rooms", id: "product" },
            { name: "Amenities", id: "feature" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="The Grand Haven"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Luxury Redefined"
          description="Experience unparalleled comfort and elegance at The Grand Haven. Where every stay becomes an unforgettable memory."
          tag="5-Star Luxury"
          tagIcon={Star}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant lobby with comfortable sofas, large windows, and natural light enhancing the indoor ambiance."
          imagePosition="right"
          buttons={[
            { text: "Book Your Stay", href: "https://booking.example.com" },
            { text: "View Rooms", href: "product" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Nestled in the heart of the city, The Grand Haven has been setting the standard for luxury hospitality since 1952. Our commitment to exceptional service and timeless elegance creates an atmosphere where business and leisure travelers alike find their perfect sanctuary."
          buttons={[
            { text: "Our Story", href: "https://grandhavenhotel.com/history" },
            { text: "Explore Amenities", href: "feature" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Exceptional Amenities"
          description="Discover world-class facilities designed to enhance every moment of your stay"
          tag="Amenities"
          tagIcon={Crown}
          features={[
            {
              title: "Fine Dining",
              description: "Award-winning restaurants featuring internationally acclaimed chefs and locally sourced ingredients",
              icon: ChefHat
            },
            {
              title: "Spa & Wellness",
              description: "Full-service spa with therapeutic treatments, state-of-the-art fitness center, and rooftop pool",
              icon: Sparkles
            },
            {
              title: "Business Center",
              description: "Executive lounge, conference facilities, and high-speed connectivity for the modern traveler",
              icon: Briefcase
            },
            {
              title: "Concierge Service",
              description: "24/7 personalized assistance to curate unique experiences and handle every detail",
              icon: Bell
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Luxury Accommodations"
          description="Choose from our carefully curated selection of rooms and suites"
          tag="Rooms & Suites"
          tagIcon={Bed}
          products={[
            {
              id: "deluxe",
              brand: "Grand Haven",
              name: "Deluxe King Room",
              price: "$395/night",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Stylish and cozy living room featuring elegant furniture and warm lighting."
            },
            {
              id: "suite",
              brand: "Grand Haven",
              name: "Executive Suite",
              price: "$695/night",
              rating: 5,
              reviewCount: "847",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A stylish hotel room featuring a cozy bed, sofa, and luxurious decor."
            },
            {
              id: "presidential",
              brand: "Grand Haven",
              name: "Presidential Suite",
              price: "$1,295/night",
              rating: 5,
              reviewCount: "234",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A stylish hotel room featuring a cozy bed, sofa, and luxurious decor."
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Guest Experiences"
          description="Hear from our valued guests about their exceptional stays"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Victoria Sterling",
              role: "CEO",
              company: "Sterling Enterprises",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Young woman with curly hair working on her laptop in a cozy home setting, exuding confidence and focus."
            },
            {
              id: "2",
              name: "Marcus Chen",
              role: "Managing Director",
              company: "Chen Investment Group",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5945326/pexels-photo-5945326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Detailed close-up portrait of an adult man with a serious expression, captured indoors."
            },
            {
              id: "3",
              name: "Isabella Rodriguez",
              role: "Creative Director",
              company: "Rodriguez Studios",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Confident businesswoman using her tablet and phone, smiling outdoors in sunlight."
            },
            {
              id: "4",
              name: "James Wellington",
              role: "Senior Partner",
              company: "Wellington & Associates",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4427630/pexels-photo-4427630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Confident businessman standing at desk with USA flag in office library."
            },
            {
              id: "5",
              name: "Sophie Laurent",
              role: "International Consultant",
              company: "Laurent Global",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7202789/pexels-photo-7202789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Three diverse women posing confidently in stylish blazers in a white studio setting."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          tagIcon={Mail}
          title="Reserve Your Experience"
          description="Join our exclusive newsletter for special offers, events, and insider access to The Grand Haven experience."
          imageSrc="https://images.pexels.com/photos/7821340/pexels-photo-7821340.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Sophisticated hotel lobby with a reception bell and array of international flags in focus."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our newsletter and special offers. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="The Grand Haven"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "product" },
                { label: "Dining", href: "https://grandhavenhotel.com/dining" },
                { label: "Spa & Wellness", href: "https://grandhavenhotel.com/spa" },
                { label: "Events", href: "https://grandhavenhotel.com/events" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "https://grandhavenhotel.com/careers" },
                { label: "Press", href: "https://grandhavenhotel.com/press" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Reservations", href: "https://booking.example.com" },
                { label: "Group Bookings", href: "https://grandhavenhotel.com/groups" },
                { label: "Gift Cards", href: "https://grandhavenhotel.com/gifts" },
                { label: "Loyalty Program", href: "https://grandhavenhotel.com/rewards" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}