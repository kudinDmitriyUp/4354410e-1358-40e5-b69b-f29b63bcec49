"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { MapPin, Home, Camera, Euro, Award, Users, MessageCircle, BookOpen, Calendar, Star, TrendingDown, Heart, Instagram, Facebook } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            {name: "Overview", id: "hero"},
            {name: "Features", id: "features"},
            {name: "Pricing", id: "pricing"},
            {name: "Reviews", id: "testimonials"},
            {name: "Neighborhood", id: "about"}
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763135753471-k0woncp3.jpg"
          logoAlt="facade, architecture, house, building, window, apartment building, balconies, city, paris"
          brandName="ParisStay"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Your Perfect Paris Getaway Awaits"
          description="Experience true Parisian charm in our elegantly designed apartment, ideally situated in the heart of the City of Light"
          tag="Premium Airbnb"
          tagIcon={MapPin}
          buttons={[
            {text: "Book Your Stay", href: "contact"},
            {text: "View Gallery", href: "features"}
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763135754160-011ozklw.jpg"
          imageAlt="living room, interior design, furniture, lamp, couch, sofa, interior, room, indoors, house, home, apartment, living room, living room, living room, living room, interior design, furniture, interior, room, room, room, house, house, house, home, home, home, home, home, apartment"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Discover Paris Like a Local"
          description={[
            "Nestled in a charming Parisian neighborhood, our apartment offers the perfect blend of authentic local living and modern comfort.",
            "Just minutes from iconic landmarks, cozy cafés, and hidden gems that only locals know about."
          ]}
          buttons={[{text: "Explore Area", href: "neighborhood"}]}
          showBorder={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Everything You Need for the Perfect Stay"
          description="Our apartment comes fully equipped with modern amenities and thoughtful touches to make your Paris experience unforgettable"
          tag="Amenities"
          tagIcon={Home}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "High-Speed WiFi",
              description: "Stay connected with complimentary ultra-fast internet perfect for work or sharing your Paris adventures",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763135758895-iteiaplz.jpg",
              imageAlt: "wifi, wireless device, wi fi, wifi, wifi, wifi, wifi, wifi"
            },
            {
              title: "Fully Equipped Kitchen",
              description: "Cook like a local with our modern kitchen featuring all appliances and utensils you need",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763135759497-942md9pb.jpg",
              imageAlt: "home, kitchen, interior, kitchen island, chairs, furniture, room, interior design, luxurious, modern, house, real estate, property, residential, apartment, kitchen, kitchen, kitchen, kitchen, kitchen, real estate, real estate"
            },
            {
              title: "Prime Location",
              description: "Walk to major attractions, metro stations, and authentic Parisian bistros within minutes",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763135760271-k4mkp8ag.jpg",
              imageAlt: "city, urban, evening, eiffel tower, nature, france, paris, sunset"
            },
            {
              title: "Comfort & Style",
              description: "Relax in our thoughtfully designed space with premium linens, comfortable furnishings, and Parisian charm",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763135760982-xwavyyfk.jpg",
              imageAlt: "living room modern tv, living room, modern, apartment, couch, interior, mobile, architecture, comfortable, design, space, home, decoration, furniture, art, construction, chairs, residential, graphic material, apartments and houses for sale, living room, living room, living room, living room, living room, apartment"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Apartment Spaces"
          description="Explore the beautiful rooms and spaces that make our Airbnb your home away from home"
          tag="Gallery"
          tagIcon={Camera}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          products={[
            {
              id: "bedroom",
              name: "Master Bedroom",
              price: "Queen Bed",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763135755074-i74gee6e.jpg",
              imageAlt: "bedroom, bed, apartment, room, interior design, decoration, sleeping, cozy, bedroom furniture, beddings, interior decoration, home furniture, interior, indoors, bedroom, bedroom, bedroom, bedroom, bedroom, bed, bed, room, room, interior design"
            },
            {
              id: "kitchen",
              name: "Modern Kitchen",
              price: "Fully Equipped",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763135755891-3zvhyypr.jpg",
              imageAlt: "home, kitchen, interior, kitchen island, chairs, furniture, room, interior design, luxurious, modern, house, real estate, property, residential, apartment, kitchen, kitchen, kitchen, kitchen, kitchen, real estate, real estate"
            },
            {
              id: "balcony",
              name: "Private Balcony",
              price: "City Views",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763135756743-rzp66bv9.jpg",
              imageAlt: "house, building, balconies, apartments, facade, residential house, structure, architecture, house, house, house, house, house, building, apartments, apartments, apartments, apartments, architecture"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Transparent Pricing"
          description="Simple, honest pricing for your Paris stay with no hidden fees or surprises"
          tag="Rates"
          tagIcon={Euro}
          textboxLayout="default"
          animationType="opacity"
          plans={[
            {
              id: "short-stay",
              badge: "Popular",
              badgeIcon: Star,
              price: "€95/night",
              subtitle: "Perfect for weekend getaways",
              features: [
                "2-3 night minimum stay",
                "All amenities included",
                "24/7 host support",
                "Welcome Paris guidebook"
              ]
            },
            {
              id: "weekly",
              badge: "Best Value",
              badgeIcon: TrendingDown,
              price: "€75/night",
              subtitle: "Ideal for extended visits",
              features: [
                "7+ night stays",
                "20% discount applied",
                "Weekly housekeeping",
                "Local recommendations",
                "Metro pass assistance"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Trusted by Travelers Worldwide"
          description="Join hundreds of satisfied guests who have made our Paris apartment their perfect home base"
          tag="Our Impact"
          tagIcon={Award}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          metrics={[
            {
              id: "1",
              value: "500+",
              title: "happy",
              description: "Satisfied guests from around the world",
              icon: Users
            },
            {
              id: "2",
              value: "4.9",
              title: "rating",
              description: "Average guest rating on Airbnb",
              icon: Star
            },
            {
              id: "3",
              value: "95%",
              title: "repeat",
              description: "Guests who would book again",
              icon: Heart
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Your Paris Hosts"
          description="Meet the friendly team dedicated to making your Paris experience exceptional"
          tag="Hosts"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Marie L.",
              role: "Host & Guide",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763135761832-1nuph7va.jpg",
              imageAlt: "portrait, woman, nature, girl, female, model, pose, happy, desert, travel, iran, iranian"
            },
            {
              id: "2",
              name: "Pierre D.",
              role: "Property Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763135762523-0esv8jpd.jpg",
              imageAlt: "startup, whiteboard, room, indoors, adult, office, business, technology, male, corporate, design, designer, brainstorm, startup, office, business, business, business, business, business, technology, design, designer"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Real reviews from travelers who have experienced our Paris apartment"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Travel Blogger from NYC",
              testimonial: "This apartment exceeded all my expectations! The location is perfect, the space is beautiful, and Marie was an incredible host. I felt like a true Parisian during my stay.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763135761832-1nuph7va.jpg",
              imageAlt: "portrait, woman, nature, girl, female, model, pose, happy, desert, travel, iran, iranian"
            },
            {
              id: "2",
              name: "David Chen",
              role: "Business Traveler",
              testimonial: "Perfect for my work trip to Paris. The WiFi was excellent, the workspace comfortable, and I could walk to all my meetings. Will definitely book again!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763135762523-0esv8jpd.jpg",
              imageAlt: "startup, whiteboard, room, indoors, adult, office, business, technology, male, corporate, design, designer, brainstorm, startup, office, business, business, business, business, business, technology, design, designer"
            },
            {
              id: "3",
              name: "Emma & James",
              role: "Honeymooners from London",
              testimonial: "Our honeymoon in this apartment was magical! The romantic atmosphere, beautiful views, and thoughtful touches made it unforgettable. Merci Marie!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763135763244-eji8iic8.jpg",
              imageAlt: "adult, asia, free wallpaper, asian, bangkok, beautiful, cheerful, chinese, city, cityscape, concept, full hd wallpaper, destination, direction, exploring, female, girl, happy, hipster, holding, holiday, 4k wallpaper, japanese, korean, location, looking, map, metropolis, outdoor, paper, beautiful wallpaper, people, planning, portrait, reading, desktop backgrounds, 4k wallpaper 1920x1080, laptop wallpaper, smiling, hd wallpaper, stylish, cool backgrounds, thai, thailand, time, tourist, travel, traveler, wallpaper hd, urban, using, vacation, watching, woman, mac wallpaper, windows wallpaper, young, background, backpack, bag, china, chinatown, find, hat, popular, relax, road, search, searching, space, temple, tour, tourism, town, traveling, traveller, travelling, wallpaper 4k, trip, unseen, vintage, space wallpaper, visit, free background, white, women"
            },
            {
              id: "4",
              name: "Lisa Mueller",
              role: "Solo Traveler",
              testimonial: "As a solo female traveler, I felt completely safe and welcome. The neighborhood is charming, everything is walkable, and the apartment feels like a Parisian dream.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763135763886-pjlz81xb.jpg",
              imageAlt: "woman, tourist, city, girl, female, traveler, urban, street, china town, london, london, london, london, london, london"
            },
            {
              id: "5",
              name: "The Rodriguez Family",
              role: "Family Vacation",
              testimonial: "Our kids loved the apartment and we appreciated having a kitchen to prepare meals. Great location for family activities and close to parks. Highly recommended!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763135764579-1wvld1xb.jpg",
              imageAlt: "scooter, bicycle, leisure time, biking, bike ride, children, lake, nature, excursion, bike tour"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Featured On"
          description="Our Paris apartment has been recognized by leading travel and hospitality platforms"
          tag="Recognition"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp"
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Paris Travel Tips"
          description="Insider guides and local recommendations to help you make the most of your Paris adventure"
          tag="Local Insights"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Neighborhood Guide",
              title: "Hidden Gems in Our District",
              excerpt: "Discover the secret spots, local cafés, and charming boutiques that make our neighborhood special",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763135765283-7z8uf1vw.jpg",
              imageAlt: "paris, montmartre, path, pavement, old town, street, city, brown city, brown street, brown old, brown path, paris, paris, paris, paris, paris, street, street, city, city",
              authorName: "Marie L.",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763135761832-1nuph7va.jpg",
              date: "2 Jan 2025"
            },
            {
              id: "2",
              category: "Travel Tips",
              title: "Best Metro Routes from Our Apartment",
              excerpt: "Navigate Paris like a local with our insider guide to the most efficient metro routes from your doorstep",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Paris metro guide",
              authorName: "Pierre D.",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763135762523-0esv8jpd.jpg",
              date: "28 Dec 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Book Your Stay"
          tagIcon={Calendar}
          title="Ready to Experience Paris?"
          description="Send us your travel dates and we'll get back to you within hours with availability and booking details."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763135765806-qv6hwew6.jpg"
          imageAlt="facade, architecture, house, building, window, apartment building, balconies, city, paris"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Check Availability"
          termsText="By submitting, you agree to receive booking information and updates about your Paris stay."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="ParisStay"
          columns={[
            {
              title: "Property",
              items: [
                {label: "Overview", href: "hero"},
                {label: "Amenities", href: "features"},
                {label: "Gallery", href: "product"},
                {label: "Pricing", href: "pricing"}
              ]
            },
            {
              title: "Experience",
              items: [
                {label: "Guest Reviews", href: "testimonials"},
                {label: "Neighborhood", href: "about"},
                {label: "Local Tips", href: "blog"}
              ]
            },
            {
              title: "Booking",
              items: [
                {label: "Check Availability", href: "contact"},
                {label: "House Rules", href: "#"},
                {label: "Cancellation", href: "#"}
              ]
            }
          ]}
          socialLinks={[
            {icon: Instagram, href: "https://instagram.com", ariaLabel: "Follow us on Instagram"},
            {icon: Facebook, href: "https://facebook.com", ariaLabel: "Follow us on Facebook"}
          ]}
          copyrightText="© 2025 ParisStay Airbnb. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}