import { useState } from 'react';
import { MapPin, Home, Maximize, Calendar, Phone, MessageCircle, CheckCircle, Building2, Car, Trees, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Badge } from '../components/ui/badge';

const PropertiesPage = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const properties = [
    {
      id: 1,
      name: 'Shivantha Gardenia',
      type: '2 BHK Mega Community',
      location: 'Near Isnapur, Pashamylaram Road, Hyderabad',
      price: '₹4,999/sq.ft',
      priceValue: 4999,
      possession: 'March 2026',
      image: 'https://images.unsplash.com/photo-1670915199061-ad437b2790aa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwaW5kaWF8ZW58MHx8fHwxNzY5OTcxMDMzfDA&ixlib=rb-4.1.0&q=85',
      badge: 'RERA Approved',
      highlights: [
        { icon: Building2, text: '18 Acres, 25+ Towers' },
        { icon: Home, text: '~1,100 Flats (S+5 Floors)' },
        { icon: Maximize, text: '895 - 1,030 sq.ft' },
        { icon: Shield, text: '100% Vastu Compliant' },
      ],
      details: {
        overview: '2 BHK Mega Community Apartments with beautiful elevation in a peaceful location.',
        approvals: 'TS RERA Approved (Reg. No: P01100003054) | HMDA Approved',
        unitSizes: ['895 sq.ft', '1,030 sq.ft'],
        amenities: ['Club House', 'Swimming Pool', 'Gym', 'Children Play Area', 'Landscaped Gardens', '24/7 Security'],
        locationHighlights: [
          'IT Zone: 20 mins drive from Gachibowli / Financial District',
          'Schools & Universities: 10–15 mins',
          'Hospitals: 15–20 mins',
        ],
      },
    },
    {
      id: 2,
      name: 'Evon — Premium Residences',
      type: 'Premium Luxury Apartments',
      location: 'Hyderabad Prime Location',
      price: 'Starting ₹1.59 Cr',
      priceValue: 15900000,
      possession: 'Ready to Move',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      badge: 'Price Hike Alert',
      badgeColor: 'bg-red-500',
      highlights: [
        { icon: Building2, text: 'Premium Tower' },
        { icon: Home, text: 'Luxury Apartments' },
        { icon: Maximize, text: 'Spacious Units' },
        { icon: Shield, text: 'Modern Amenities' },
      ],
      details: {
        overview: 'Live Premium. Live Remembered. Luxury that stays with you. Crafted for modern living.',
        approvals: 'All government approvals in place',
        unitSizes: ['3 BHK', '4 BHK'],
        amenities: ['Infinity Pool', 'Sky Lounge', 'Private Theater', 'Spa & Wellness', 'Concierge Service', 'Helipad'],
        locationHighlights: [
          'Prime Hyderabad Location',
          'Close to Business Districts',
          'Premium Neighborhood',
        ],
        alert: 'Last chance before price hike from Feb 1, 2026',
      },
    },
    {
      id: 3,
      name: "Krishna's Arena",
      type: 'Premium 4 BHK Green Edition',
      location: 'Masjid Banda, Kondapur, Hyderabad',
      price: 'Price on Request',
      priceValue: 0,
      possession: 'Under Construction',
      image: 'https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=800',
      badge: 'Limited Edition',
      badgeColor: 'bg-emerald-600',
      highlights: [
        { icon: Building2, text: '4,000 Sq. Yards' },
        { icon: Home, text: '64 Corner Units' },
        { icon: Maximize, text: '2,995 - 3,247 sq.ft' },
        { icon: Trees, text: 'Green Building' },
      ],
      details: {
        overview: 'Premium & Luxurious Green Limited Edition 4 BHK Apartments in Prime Kondapur Location.',
        approvals: 'Single Tower | 2 Cellars + Stilt + 17 Floors',
        unitSizes: ['2,995 sq.ft', '3,247 sq.ft'],
        amenities: [
          'G+1st Floor Club House',
          'Reception & Lounge',
          'Multipurpose Hall',
          'Indoor Games',
          'Mini Theatre',
          'Landscaped Gardens',
        ],
        locationHighlights: [
          'Prime Kondapur Location',
          'Near IT Corridor',
          'Excellent Connectivity',
        ],
      },
    },
  ];

  const handleWhatsAppInquiry = (property) => {
    const message = encodeURIComponent(
      `*Property Inquiry*\n\n` +
      `I'm interested in:\n` +
      `*${property.name}*\n` +
      `Location: ${property.location}\n` +
      `Price: ${property.price}\n\n` +
      `Please share more details.`
    );
    window.open(`https://wa.me/916301241568?text=${message}`, '_blank');
  };

  return (
    <div data-testid="properties-page" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1670915199061-ad437b2790aa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwaW5kaWF8ZW58MHx8fHwxNzY5OTcxMDMzfDA&ixlib=rb-4.1.0&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-[#001F3F]/90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-[#FFD700] text-[#001F3F] font-bold text-sm uppercase tracking-widest rounded-full mb-6">
              LMN.Properties
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
              Premium Real Estate<br />
              <span className="text-[#FFD700]">in Hyderabad</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover luxury apartments and premium properties in prime Hyderabad locations. 
              From affordable 2 BHK to exclusive 4 BHK residences.
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section data-testid="properties-listing" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FFD700] font-bold text-sm uppercase tracking-widest">Featured Projects</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#001F3F] mt-3">
              Our Property Listings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card 
                key={property.id}
                data-testid={`property-card-${property.id}`}
                className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge 
                    className={`absolute top-4 left-4 ${property.badgeColor || 'bg-[#FFD700] text-[#001F3F]'} font-bold`}
                  >
                    {property.badge}
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-heading text-2xl font-bold text-white">{property.name}</h3>
                    <p className="text-gray-200 text-sm flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-[#FFD700] font-bold text-xl">{property.price}</p>
                      <p className="text-gray-500 text-sm">{property.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 text-xs uppercase">Possession</p>
                      <p className="font-bold text-[#001F3F]">{property.possession}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {property.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-600">
                        <highlight.icon className="w-4 h-4 text-[#FFD700]" />
                        <span className="text-xs">{highlight.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          data-testid={`view-details-${property.id}`}
                          className="flex-1 bg-[#001F3F] hover:bg-[#003366] text-white font-bold"
                          onClick={() => setSelectedProperty(property)}
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent data-testid="property-details-dialog" className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="font-heading text-3xl text-[#001F3F]">
                            {selectedProperty?.name}
                          </DialogTitle>
                        </DialogHeader>
                        {selectedProperty && (
                          <div className="space-y-6 mt-4">
                            <img 
                              src={selectedProperty.image} 
                              alt={selectedProperty.name}
                              className="w-full h-64 object-cover rounded-xl"
                            />
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-gray-500 text-sm">Price</p>
                                <p className="font-bold text-[#FFD700] text-xl">{selectedProperty.price}</p>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-gray-500 text-sm">Possession</p>
                                <p className="font-bold text-[#001F3F]">{selectedProperty.possession}</p>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-heading font-bold text-lg text-[#001F3F] mb-2">Overview</h4>
                              <p className="text-gray-600">{selectedProperty.details.overview}</p>
                            </div>

                            <div>
                              <h4 className="font-heading font-bold text-lg text-[#001F3F] mb-2">Approvals</h4>
                              <p className="text-gray-600">{selectedProperty.details.approvals}</p>
                            </div>

                            <div>
                              <h4 className="font-heading font-bold text-lg text-[#001F3F] mb-2">Unit Sizes</h4>
                              <div className="flex flex-wrap gap-2">
                                {selectedProperty.details.unitSizes.map((size, index) => (
                                  <Badge key={index} variant="outline" className="border-[#FFD700] text-[#001F3F]">
                                    {size}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-heading font-bold text-lg text-[#001F3F] mb-2">Amenities</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {selectedProperty.details.amenities.map((amenity, index) => (
                                  <div key={index} className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-[#FFD700]" />
                                    <span className="text-gray-600 text-sm">{amenity}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-heading font-bold text-lg text-[#001F3F] mb-2">Location Highlights</h4>
                              <ul className="space-y-2">
                                {selectedProperty.details.locationHighlights.map((highlight, index) => (
                                  <li key={index} className="flex items-center gap-2 text-gray-600">
                                    <MapPin className="w-4 h-4 text-[#FFD700]" />
                                    {highlight}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {selectedProperty.details.alert && (
                              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <p className="text-red-600 font-bold">{selectedProperty.details.alert}</p>
                              </div>
                            )}

                            <div className="flex gap-3 pt-4">
                              <a href="tel:+916301241568" className="flex-1">
                                <Button className="w-full bg-[#001F3F] hover:bg-[#003366] text-white font-bold">
                                  <Phone className="w-4 h-4 mr-2" />
                                  Call Now
                                </Button>
                              </a>
                              <Button 
                                className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold"
                                onClick={() => handleWhatsAppInquiry(selectedProperty)}
                              >
                                <MessageCircle className="w-4 h-4 mr-2" />
                                WhatsApp
                              </Button>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                    
                    <Button 
                      data-testid={`whatsapp-property-${property.id}`}
                      size="icon"
                      className="bg-[#25D366] hover:bg-[#128C7E] text-white"
                      onClick={() => handleWhatsAppInquiry(property)}
                    >
                      <MessageCircle className="w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FFD700] font-bold text-sm uppercase tracking-widest">Why LMN Properties</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#001F3F] mt-3">
              Your Trusted Real Estate Partner
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'RERA Approved', desc: 'All our projects are RERA registered for your safety and transparency.' },
              { icon: Building2, title: 'Prime Locations', desc: 'Strategic locations with excellent connectivity and appreciation potential.' },
              { icon: CheckCircle, title: 'Quality Assured', desc: 'Built with premium materials and LMN 300+ quality checks.' },
            ].map((item, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-[#001F3F] flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#FFD700]" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#001F3F]">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Looking for Your Dream Property?
          </h2>
          <p className="text-gray-300 mb-8">
            Schedule a site visit or get expert guidance on property investment in Hyderabad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+916301241568">
              <Button 
                data-testid="schedule-visit-btn"
                size="lg"
                className="bg-[#FFD700] text-[#001F3F] hover:bg-[#FFC000] font-bold uppercase tracking-wider rounded-full px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Visit
              </Button>
            </a>
            <a 
              href="https://wa.me/916301241568?text=Hi!%20I%20want%20to%20know%20more%20about%20LMN%20Properties."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                data-testid="whatsapp-inquiry-btn"
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#001F3F] font-bold uppercase tracking-wider rounded-full px-8"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Inquiry
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertiesPage;
