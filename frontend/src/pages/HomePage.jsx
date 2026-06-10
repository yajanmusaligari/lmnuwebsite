import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { ArrowRight, Truck, Building2, Clock, Shield, Award, CheckCircle, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Reveal, staggerContainer, staggerItem } from '../components/Reveal';
import { brands } from '../data/materialsData';

const EASE = [0.22, 1, 0.36, 1];

const HomePage = () => {
  const trustIndicators = [
    { icon: Clock, value: '4-6', label: 'Hour Delivery' },
    { icon: Shield, value: '300+', label: 'Quality Checks' },
    { icon: Award, value: '200+', label: 'Trusted Brands' },
    { icon: CheckCircle, value: '500+', label: 'Happy Clients' },
  ];

  const verticals = [
    {
      icon: Truck,
      title: 'Material Delivery',
      subtitle: 'Infra Stores',
      description: 'Direct material delivery to builders and contractors with best quality within 4-6 hours. We tie up with 200+ big brands and deliver at low cost.',
      link: '/materials',
      cta: 'Browse Catalog',
      image: 'https://images.unsplash.com/photo-1631719606912-e90abc91683b?crop=entropy&cs=srgb&fm=jpg&q=80&w=1000',
    },
    {
      icon: Building2,
      title: 'Construction',
      subtitle: 'End-to-End Builds',
      description: 'Full end-to-end residential and commercial construction with 300+ quality checks. Premium-grade materials for life-long durability.',
      link: '/construction',
      cta: 'Get Estimate',
      image: 'https://images.unsplash.com/photo-1631171992385-784ae02b1acb?crop=entropy&cs=srgb&fm=jpg&q=80&w=1000',
    },
  ];

  const deliveryZones = [
    { zone: 'Zone 1', areas: 'Kondapur, Madhapur', time: '~3 hours' },
    { zone: 'Zone 2', areas: 'Gachibowli, Financial District', time: '~4 hours' },
    { zone: 'Zone 3', areas: 'LB Nagar, Uppal', time: '~5 hours' },
    { zone: 'Zone 4', areas: 'Bachupally, Sangareddy', time: '~6 hours' },
  ];

  const founders = [
    { name: 'K. Naveen Kumar', role: 'Managing Director & Founder', image: 'https://customer-assets.emergentagent.com/job_buildwith-lmn/artifacts/bcibnbxy_image.png' },
    { name: 'Arla Rajesh', role: 'Co-Founder', image: 'https://customer-assets.emergentagent.com/job_buildwith-lmn/artifacts/7m8gzohh_image.png' },
    { name: 'Md. Parvez', role: 'Co-Founder', image: 'https://customer-assets.emergentagent.com/job_buildwith-lmn/artifacts/flht7pzl_image.png' },
  ];

  const brandNames = brands.map((b) => b.name);

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section
        data-testid="hero-section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1768158988512-ad31657fe5b8?crop=entropy&cs=srgb&fm=jpg&q=80&w=1600')`,
          }}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-block px-4 py-2 bg-[#FF4500] text-white font-bold text-xs md:text-sm uppercase tracking-widest mb-6 font-mono-accent"
          >
            Hyderabad's Building Materials Partner
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter uppercase"
          >
            Build Smarter.<br />
            Build Faster.<br />
            Build with <span className="text-[#FF4500]">Infra Stores</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            High-quality construction material delivery within 4-6 hours and
            end-to-end construction services — all under one trusted name.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/materials">
              <Button
                data-testid="hero-order-materials-btn"
                size="lg"
                className="bg-[#FF4500] text-white hover:bg-[#E63E00] font-bold uppercase tracking-wider px-8 py-6 text-lg rounded-none transition-all hover:-translate-y-0.5"
              >
                Order Materials
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/construction">
              <Button
                data-testid="hero-construction-btn"
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#0A0A0A] font-bold uppercase tracking-wider px-8 py-6 text-lg rounded-none transition-all"
              >
                Start Construction
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Brand Marquee */}
      <section data-testid="brand-marquee" className="bg-[#0A0A0A] py-5 border-y border-white/10">
        <Marquee gradient={false} speed={45} pauseOnHover>
          {brandNames.map((name, i) => (
            <span
              key={i}
              className="mx-6 text-sm font-bold uppercase tracking-widest text-gray-400 font-mono-accent"
            >
              {name} <span className="text-[#FF4500] ml-6">/</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* Trust Indicators */}
      <section data-testid="trust-indicators" className="bg-[#0A0A0A] py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {trustIndicators.map((item, index) => (
              <motion.div key={index} variants={staggerItem} className="text-center">
                <item.icon className="w-10 h-10 text-[#FF4500] mx-auto mb-3" />
                <div className="font-heading text-4xl md:text-5xl font-black text-white">{item.value}</div>
                <p className="text-gray-400 mt-1">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Verticals Section */}
      <section data-testid="verticals-section" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal className="text-center mb-16">
            <span className="text-[#FF4500] font-bold text-xs uppercase tracking-widest font-mono-accent">Our Services</span>
            <h2 className="font-heading text-3xl md:text-5xl font-black text-[#0A0A0A] mt-3 uppercase tracking-tight">
              Two Pillars of Excellence
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From construction materials to complete builds, Infra Stores delivers comprehensive solutions for all your building needs.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {verticals.map((vertical, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card
                  data-testid={`vertical-card-${index}`}
                  className="group overflow-hidden border border-gray-200 hover:border-[#FF4500] rounded-none shadow-none hover:shadow-hard transition-all duration-200 h-full"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={vertical.image}
                      alt={vertical.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-[#0A0A0A]/55" />
                    <div className="absolute top-5 left-5 w-14 h-14 bg-[#FF4500] flex items-center justify-center">
                      <vertical.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-7">
                    <span className="text-[#FF4500] font-bold text-xs uppercase tracking-widest font-mono-accent">{vertical.subtitle}</span>
                    <h3 className="font-heading font-black text-2xl md:text-3xl mt-2 text-[#0A0A0A] uppercase tracking-tight">{vertical.title}</h3>
                    <p className="text-gray-600 mt-3 leading-relaxed">{vertical.description}</p>
                    <Link
                      to={vertical.link}
                      data-testid={`vertical-link-${index}`}
                      className="inline-flex items-center gap-2 mt-6 text-[#0A0A0A] font-bold uppercase text-sm tracking-wide hover:text-[#FF4500] transition-colors group/link"
                    >
                      {vertical.cta}
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section data-testid="delivery-zones" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="text-[#FF4500] font-bold text-xs uppercase tracking-widest font-mono-accent">Fast Delivery</span>
              <h2 className="font-heading text-3xl md:text-5xl font-black text-[#0A0A0A] mt-3 uppercase tracking-tight">
                4-6 Hour Delivery<br />Across Hyderabad
              </h2>
              <p className="text-gray-600 mt-6 leading-relaxed">
                Our zone-based delivery system ensures your construction materials reach your site within the promised time window.
                We have strategically located warehouses across Hyderabad to serve you faster.
              </p>
              <Link to="/materials" className="mt-8 inline-block">
                <Button
                  data-testid="order-now-btn"
                  className="bg-[#0A0A0A] text-white hover:bg-[#FF4500] font-bold uppercase tracking-wider rounded-none px-8 transition-all"
                >
                  Order Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </Reveal>

            <div className="space-y-4">
              {deliveryZones.map((zone, index) => (
                <Reveal key={index} delay={index * 0.08}>
                  <div className="bg-gray-50 border border-gray-200 p-5 flex items-center justify-between hover:border-[#FF4500] transition-colors">
                    <div>
                      <span className="font-heading font-bold text-lg text-[#0A0A0A]">{zone.zone}</span>
                      <p className="text-gray-600 text-sm mt-1">{zone.areas}</p>
                    </div>
                    <div className="bg-[#FF4500] text-white font-bold px-4 py-2 text-sm">{zone.time}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section data-testid="founders-section" className="py-20 md:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal className="text-center mb-14">
            <span className="text-[#FF4500] font-bold text-xs uppercase tracking-widest font-mono-accent">The Team</span>
            <h2 className="font-heading text-3xl md:text-5xl font-black text-white mt-3 uppercase tracking-tight">
              Built by People You Can Trust
            </h2>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {founders.map((f, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                data-testid={`founder-${index}`}
                className="group relative overflow-hidden border border-white/10 hover:border-[#FF4500] transition-colors"
              >
                <div className="relative h-80 overflow-hidden">
                  <img src={f.image} alt={f.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-heading text-xl font-bold text-white">{f.name}</h3>
                    <p className="text-[#FF4500] text-sm font-mono-accent uppercase tracking-wide mt-1">{f.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-testid="cta-section" className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1631171992385-784ae02b1acb?crop=entropy&cs=srgb&fm=jpg&q=80&w=1600')`,
          }}
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/90" />

        <Reveal className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Whether you need materials delivered fast or want to build your dream home — we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+916301241568">
              <Button
                data-testid="cta-call-btn"
                size="lg"
                className="bg-[#FF4500] text-white hover:bg-[#E63E00] font-bold uppercase tracking-wider rounded-none px-8 transition-all"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </Button>
            </a>
            <Link to="/contact">
              <Button
                data-testid="cta-quote-btn"
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#0A0A0A] font-bold uppercase tracking-wider rounded-none px-8"
              >
                Request Quote
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default HomePage;
