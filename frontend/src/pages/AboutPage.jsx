import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, Building2, Clock, Shield, Award, Users, Target, Heart, ArrowRight, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Reveal, staggerContainer, staggerItem } from '../components/Reveal';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'K. Naveen Kumar',
      role: 'Managing Director & Founder',
      description: 'Visionary leader driving Infra Stores\' mission to revolutionize the construction supply industry in Hyderabad.',
      phone: '+91 6301241568',
      image: 'https://customer-assets.emergentagent.com/job_buildwith-lmn/artifacts/bcibnbxy_image.png',
    },
    {
      name: 'Arla Rajesh',
      role: 'Co-Founder & Operations',
      description: 'Driving operational excellence and on-time delivery across every order and project.',
      phone: '+91 7730992040',
      image: 'https://customer-assets.emergentagent.com/job_buildwith-lmn/artifacts/7m8gzohh_image.png',
    },
    {
      name: 'Md. Parvez',
      role: 'Co-Founder & Sales Director',
      description: 'Building strong client relationships and driving business growth across Telangana.',
      phone: '+91 6305009371',
      image: 'https://customer-assets.emergentagent.com/job_buildwith-lmn/artifacts/flht7pzl_image.png',
    },
  ];

  const verticals = [
    {
      icon: Truck,
      name: 'Material Delivery',
      description: 'Direct material delivery to builders and contractors with best quality within 4-6 hours from 200+ trusted brands.',
      link: '/materials',
    },
    {
      icon: Building2,
      name: 'Construction',
      description: 'Full end-to-end residential and commercial construction with 300+ quality checks.',
      link: '/construction',
    },
  ];

  const values = [
    { icon: Target, title: 'Quality First', description: 'We never compromise on quality. Every material and construction meets the highest standards.' },
    { icon: Clock, title: 'Time is Money', description: 'We understand construction timelines. Our 4-6 hour delivery keeps your project on track.' },
    { icon: Heart, title: 'Customer Trust', description: 'Building lasting relationships through transparency, reliability, and exceptional service.' },
    { icon: Users, title: 'Expert Team', description: 'Our team of experienced professionals ensures every order is executed with precision.' },
  ];

  const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '300+', label: 'Quality Checks' },
    { value: '4-6', label: 'Hour Delivery' },
    { value: '200+', label: 'Trusted Brands' },
  ];

  return (
    <div data-testid="about-page" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1631171992385-784ae02b1acb?crop=entropy&cs=srgb&fm=jpg&q=80&w=1600')` }}
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <Reveal className="text-center">
            <span className="inline-block px-4 py-2 bg-[#FF4500] text-white font-bold text-sm uppercase tracking-widest mb-6 font-mono-accent">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
              Building Trust,<br />
              <span className="text-[#FF4500]">One Order at a Time</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Infra Stores is Hyderabad's trusted partner for construction materials and end-to-end building services.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={staggerItem} className="text-center">
                <p className="font-heading text-4xl md:text-5xl font-black text-[#0A0A0A]">{stat.value}</p>
                <p className="text-gray-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section data-testid="our-story" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="text-[#FF4500] font-bold text-xs uppercase tracking-widest font-mono-accent">Our Story</span>
              <h2 className="font-heading text-3xl md:text-5xl font-black text-[#0A0A0A] mt-3 uppercase tracking-tight">
                From Vision to Reality
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Infra Stores was founded with a simple yet powerful vision: to transform
                  the construction supply industry in Hyderabad by delivering quality, speed, and trust.
                </p>
                <p>
                  We noticed that builders and contractors struggled with unreliable material
                  delivery, inconsistent quality, and lack of transparency. Infra Stores was born to
                  solve these problems.
                </p>
                <p>
                  Today, we operate across two verticals — material delivery and construction —
                  serving hundreds of satisfied clients across Telangana.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button
                    data-testid="get-in-touch-btn"
                    className="bg-[#0A0A0A] text-white hover:bg-[#FF4500] font-bold uppercase tracking-wider rounded-none px-8 transition-all"
                  >
                    Get In Touch
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="relative">
              <img
                src="https://images.unsplash.com/photo-1768158988512-ad31657fe5b8?crop=entropy&cs=srgb&fm=jpg&q=80&w=1000"
                alt="Infra Stores Team"
                className="w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#FF4500] p-6 shadow-hard">
                <p className="font-heading text-3xl font-black text-white leading-none">INFRA</p>
                <p className="text-white font-medium font-mono-accent text-sm tracking-widest">STORES</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Verticals */}
      <section data-testid="verticals" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal className="text-center mb-12">
            <span className="text-[#FF4500] font-bold text-xs uppercase tracking-widest font-mono-accent">What We Do</span>
            <h2 className="font-heading text-3xl md:text-5xl font-black text-[#0A0A0A] mt-3 uppercase tracking-tight">
              Our Two Verticals
            </h2>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {verticals.map((vertical, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card
                  data-testid={`vertical-${index}`}
                  className="group border border-gray-200 hover:border-[#FF4500] rounded-none shadow-none hover:shadow-hard transition-all duration-200 h-full"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#0A0A0A] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF4500] transition-colors">
                      <vertical.icon className="w-8 h-8 text-[#FF4500] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-[#0A0A0A] uppercase tracking-tight">{vertical.name}</h3>
                    <p className="text-gray-600 mt-3">{vertical.description}</p>
                    <Link
                      to={vertical.link}
                      className="inline-flex items-center gap-2 mt-6 text-[#0A0A0A] font-bold uppercase text-sm tracking-wide hover:text-[#FF4500] transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section data-testid="team" className="py-16 md:py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal className="text-center mb-12">
            <span className="text-[#FF4500] font-bold text-xs uppercase tracking-widest font-mono-accent">Leadership</span>
            <h2 className="font-heading text-3xl md:text-5xl font-black text-white mt-3 uppercase tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              The passionate leaders behind Infra Stores, committed to delivering excellence in every order.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                data-testid={`team-member-${index}`}
                className="group overflow-hidden border border-white/10 hover:border-[#FF4500] transition-colors bg-[#141414]"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading text-2xl font-bold text-white">{member.name}</h3>
                    <p className="text-[#FF4500] font-medium mt-1 font-mono-accent text-sm uppercase tracking-wide">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                  <a
                    href={`tel:${member.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 mt-4 text-white font-bold hover:text-[#FF4500] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {member.phone}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section data-testid="values" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal className="text-center mb-12">
            <span className="text-[#FF4500] font-bold text-xs uppercase tracking-widest font-mono-accent">Our Values</span>
            <h2 className="font-heading text-3xl md:text-5xl font-black text-[#0A0A0A] mt-3 uppercase tracking-tight">
              What Drives Us
            </h2>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white border border-gray-200 p-6 hover:border-[#FF4500] transition-colors"
              >
                <div className="w-12 h-12 bg-[#FF4500]/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#FF4500]" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#0A0A0A]">{value.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A0A0A]">
        <Reveal className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
            Ready to Work with Us?
          </h2>
          <p className="text-gray-400 mb-8">
            Whether you need materials or construction services — we're here to help you build your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                data-testid="contact-cta-btn"
                size="lg"
                className="bg-[#FF4500] text-white hover:bg-[#E63E00] font-bold uppercase tracking-wider rounded-none px-8 transition-all"
              >
                Contact Us
              </Button>
            </Link>
            <a href="tel:+916301241568">
              <Button
                data-testid="call-cta-btn"
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#0A0A0A] font-bold uppercase tracking-wider rounded-none px-8"
              >
                Call: +91 6301241568
              </Button>
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default AboutPage;
