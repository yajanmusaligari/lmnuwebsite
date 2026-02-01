import { useState } from 'react';
import { Check, Phone, MessageCircle, Calculator, Shield, Award, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Slider } from '../components/ui/slider';
import { toast } from 'sonner';

const ConstructionPage = () => {
  const [sqft, setSqft] = useState(1500);
  const [selectedPackage, setSelectedPackage] = useState('classic');

  const packages = [
    {
      id: 'basic',
      name: 'Basic',
      price: 1850,
      focus: 'Best for Rental / Budget',
      highlights: [
        'Premium cement & steel',
        'Standard elevation design',
        'Basic interior finishing',
        'Vastu compliant layout',
        '100+ quality checks',
        '5-year structural warranty',
      ],
      color: 'border-gray-300',
      badge: '',
    },
    {
      id: 'classic',
      name: 'Classic',
      price: 1950,
      focus: 'Value for Money',
      highlights: [
        'Custom elevation design',
        'Top-tier TMT bars (Fe 500D)',
        'Semi-furnished interiors',
        'Daily site photo updates',
        'Digital quality certificates',
        '200+ quality checks',
        '7-year structural warranty',
      ],
      color: 'border-[#FFD700]',
      badge: 'Most Popular',
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 2150,
      focus: 'Luxury & Durability',
      highlights: [
        'Architect-designed elevation',
        'Imported premium materials',
        'Full interior design included',
        '300+ quality checks (LMN-QAS)',
        'Dedicated project manager',
        '10-year structural warranty',
        'Post-construction support',
      ],
      color: 'border-[#001F3F]',
      badge: 'Premium',
    },
  ];

  const milestones = [
    { name: 'Excavation', percentage: 10 },
    { name: 'Plinth', percentage: 15 },
    { name: 'Slab Work', percentage: 25 },
    { name: 'Brickwork', percentage: 20 },
    { name: 'Plastering', percentage: 15 },
    { name: 'Finishing', percentage: 15 },
  ];

  const qualityChecks = [
    'Foundation depth verification',
    'Soil bearing capacity test',
    'Concrete mix ratio check',
    'Steel grade certification',
    'Brick quality inspection',
    'Plumbing pressure test',
    'Electrical load test',
    'Wall alignment check',
    'Plastering thickness',
    'Paint quality inspection',
    'Waterproofing test',
    'Final structure audit',
  ];

  const getPackagePrice = (packageId) => {
    const pkg = packages.find(p => p.id === packageId);
    return pkg ? pkg.price : 1950;
  };

  const calculateCost = () => {
    return sqft * getPackagePrice(selectedPackage);
  };

  const handleWhatsAppQuote = () => {
    const selectedPkg = packages.find(p => p.id === selectedPackage);
    const message = encodeURIComponent(
      `*Construction Quote Request*\n\n` +
      `*Package:* ${selectedPkg.name} (₹${selectedPkg.price}/sq.ft)\n` +
      `*Plot Size:* ${sqft} sq.ft\n` +
      `*Estimated Cost:* ₹${calculateCost().toLocaleString()}\n\n` +
      `Please provide detailed quotation.`
    );
    window.open(`https://wa.me/916301241568?text=${message}`, '_blank');
  };

  return (
    <div data-testid="construction-page" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1631171992385-784ae02b1acb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwd29ya2VycyUyMGhlbG1ldCUyMGJsdWVwcmludHxlbnwwfHx8fDE3Njk5NzEwMzF8MA&ixlib=rb-4.1.0&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-[#001F3F]/90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-[#FFD700] text-[#001F3F] font-bold text-sm uppercase tracking-widest rounded-full mb-6">
              LMN Constructions
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
              Premium Grade Materials<br />
              <span className="text-[#FFD700]">For Life-Long Durability</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
              Full end-to-end residential and commercial construction for Telangana 
              with 300+ quality checks covering foundation, brickwork, and finishing.
            </p>
            
            {/* Trust Pillars */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { icon: Calculator, label: 'Instant Cost Estimator' },
                { icon: Shield, label: '300+ Quality Checks' },
                { icon: Clock, label: 'Project Tracking' },
                { icon: Award, label: 'Milestone Payments' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-[#FFD700] flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-7 h-7 text-[#001F3F]" />
                  </div>
                  <p className="text-white font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Estimator */}
      <section data-testid="cost-estimator" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FFD700] font-bold text-sm uppercase tracking-widest">Instant Quote</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#001F3F] mt-3">
              Cost Estimator
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Get an instant estimate for your dream home. Select your package and enter your plot size.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Calculator */}
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div>
                    <Label className="text-lg font-bold text-[#001F3F]">Plot Size (sq.ft)</Label>
                    <div className="mt-4">
                      <Input
                        data-testid="sqft-input"
                        type="number"
                        value={sqft}
                        onChange={(e) => setSqft(Number(e.target.value) || 0)}
                        className="text-2xl font-bold text-[#001F3F] h-14"
                      />
                      <Slider
                        data-testid="sqft-slider"
                        value={[sqft]}
                        onValueChange={(value) => setSqft(value[0])}
                        min={500}
                        max={10000}
                        step={100}
                        className="mt-4"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-2">
                        <span>500 sq.ft</span>
                        <span>10,000 sq.ft</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-bold text-[#001F3F]">Select Package</Label>
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      {packages.map((pkg) => (
                        <button
                          key={pkg.id}
                          data-testid={`package-${pkg.id}`}
                          onClick={() => setSelectedPackage(pkg.id)}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            selectedPackage === pkg.id 
                              ? 'border-[#FFD700] bg-[#FFD700]/10' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <p className="font-heading font-bold text-[#001F3F]">{pkg.name}</p>
                          <p className="text-[#FFD700] font-bold mt-1">₹{pkg.price}</p>
                          <p className="text-gray-500 text-xs">per sq.ft</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Result */}
                  <div className="bg-[#001F3F] rounded-xl p-6 text-center">
                    <p className="text-gray-300 uppercase tracking-wider text-sm">Estimated Cost</p>
                    <p data-testid="estimated-cost" className="font-heading text-4xl md:text-5xl font-bold text-[#FFD700] mt-2">
                      ₹{calculateCost().toLocaleString()}
                    </p>
                    <p className="text-gray-400 mt-2">
                      {sqft} sq.ft × ₹{getPackagePrice(selectedPackage)}/sq.ft
                    </p>
                  </div>

                  <Button 
                    data-testid="get-detailed-quote-btn"
                    className="w-full bg-[#FFD700] text-[#001F3F] hover:bg-[#FFC000] font-bold uppercase tracking-wider rounded-full py-6 text-lg"
                    onClick={handleWhatsAppQuote}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get Detailed Quote
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Package Details */}
            <div className="space-y-6">
              {packages.map((pkg) => (
                <Card 
                  key={pkg.id}
                  data-testid={`package-card-${pkg.id}`}
                  className={`border-2 ${pkg.color} ${
                    selectedPackage === pkg.id ? 'shadow-xl' : 'shadow-md'
                  } transition-all cursor-pointer`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="font-heading text-2xl text-[#001F3F]">{pkg.name}</CardTitle>
                        <p className="text-gray-500">{pkg.focus}</p>
                      </div>
                      <div className="text-right">
                        {pkg.badge && (
                          <span className="inline-block px-3 py-1 bg-[#FFD700] text-[#001F3F] text-xs font-bold uppercase rounded-full mb-1">
                            {pkg.badge}
                          </span>
                        )}
                        <p className="font-heading text-3xl font-bold text-[#001F3F]">₹{pkg.price}</p>
                        <p className="text-gray-500 text-sm">per sq.ft</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {pkg.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700">
                          <Check className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestone Payments */}
      <section data-testid="milestone-payments" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FFD700] font-bold text-sm uppercase tracking-widest">Transparent Pricing</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#001F3F] mt-3">
              Pay Only for Completed Work
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our milestone-based payment structure ensures you only pay for work that's been completed and verified.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className="relative bg-gray-50 rounded-xl p-6 text-center group hover:bg-[#001F3F] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="font-bold text-[#001F3F]">{index + 1}</span>
                </div>
                <h4 className="font-heading font-bold text-[#001F3F] group-hover:text-white transition-colors">
                  {milestone.name}
                </h4>
                <p className="text-[#FFD700] font-bold mt-2">{milestone.percentage}%</p>
                {index < milestones.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 w-6 h-6 text-gray-300 -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Checks */}
      <section data-testid="quality-checks" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#FFD700] font-bold text-sm uppercase tracking-widest">LMN-QAS</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#001F3F] mt-3">
                300+ Quality Checks
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Our proprietary LMN Quality Assurance System ensures every aspect of your construction 
                meets the highest standards. From foundation to finishing, we check it all.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {qualityChecks.map((check, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{check}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-500 mt-6 text-sm">
                + 288 more checks across all construction phases
              </p>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1768677903496-becc4be07258?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHw0fHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwd29ya2VycyUyMGhlbG1ldCUyMGJsdWVwcmludHxlbnwwfHx8fDE3Njk5NzEwMzF8MA&ixlib=rb-4.1.0&q=85"
                alt="Quality Construction"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#FFD700] rounded-xl p-6 shadow-lg">
                <p className="font-heading text-4xl font-bold text-[#001F3F]">300+</p>
                <p className="text-[#001F3F] font-medium">Quality Checks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-gray-300 mb-8">
            Get a free consultation and detailed quotation. Our experts are ready to help you plan your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+916301241568">
              <Button 
                data-testid="call-expert-btn"
                size="lg"
                className="bg-[#FFD700] text-[#001F3F] hover:bg-[#FFC000] font-bold uppercase tracking-wider rounded-full px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Expert
              </Button>
            </a>
            <a 
              href="https://wa.me/916301241568?text=Hi!%20I%20want%20to%20discuss%20my%20construction%20project."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                data-testid="whatsapp-consult-btn"
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#001F3F] font-bold uppercase tracking-wider rounded-full px-8"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Consult
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionPage;
