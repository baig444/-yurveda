import { ArrowRight, Award, Badge, ChevronRight, Heart, Microscope, Pill, ShieldCheck, Truck, Users } from "lucide-react";
import DeliveryPartner from "../components/DeliveryPartner";
import AboutUs from "../pages/AboutUs";
import Deals from "../pages/Deals";
import Comboproduct from "./Comboproduct";
// import Explore from "./Explore";
import Testimonials from "./Testimonials";
import {motion} from "framer-motion"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card";
const Home = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Doctor Based",
      description: "Expert Approved Products"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Clinically Tested",
      description: "Scientifically Validated"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "5000+ Happy Customers",
      description: "Trusted by Thousands"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Pan India Delivery",
      description: "Available in All States"
    }
  ]
  const services = [
    {
      icon: <Heart className="w-6 h-6 text-green-600" />,
      title: "Primary Care",
      description: "Comprehensive healthcare services for individuals and families"
    },
    {
      icon: <Microscope className="w-6 h-6 text-green-600" />,
      title: "Diagnostic Services",
      description: "Advanced diagnostic testing and laboratory services"
    },
    {
      icon: <Pill className="w-6 h-6 text-green-600" />,
      title: "Pharmacy Solutions",
      description: "Quality medications and pharmaceutical services"
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Specialist Care",
      description: "Expert medical specialists for specific health needs"
    }
  ]
  return (
    <main className="min-h-full w-full">
       <section className="relative h-[90vh] bg-gradient-to-br from-green-50 to-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1498604214351-227898deb373?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Healthcare professionals"
            className="w-full h-full object-cover opacity-20"
          />
        </motion.div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="mb-4 w-fit px-2 rounded-full bg-green-100 text-green-800 hover:bg-green-100">
                Leading Healthcare Innovation
              </h1>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Transforming Healthcare for a Better Tomorrow
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Healthix Life combines cutting-edge technology with compassionate care to deliver exceptional healthcare services that improve lives.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       {/* About Section */}
       <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1718642307459-285900389efc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About Healthix Life"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Leading the Way in Healthcare Innovation
              </h2>
              <p className="text-gray-600 mb-6">
                At Healthix Life, we're committed to revolutionizing healthcare delivery through innovative solutions and patient-centered care. Our comprehensive approach combines cutting-edge technology with compassionate service to ensure the best possible outcomes for our patients.
              </p>
              <ul className="space-y-4 mb-8">
                {['State-of-the-art facilities', 'Expert healthcare professionals', 'Patient-centered approach', 'Innovative medical solutions'].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-green-600 hover:bg-green-700">
                Discover Our Story
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
       {/* Services Section */}
       <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600">
              Comprehensive healthcare solutions designed to meet your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button variant="link" className="text-green-600 hover:text-green-700 p-0">
                      Learn more <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Deals />
      <section className="relative py-20 bg-gradient-to-br from-green-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Healthcare for a Better Tomorrow
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Healthix Life, we're committed to revolutionizing healthcare through innovation, 
                compassion, and excellence. Our journey began with a simple mission: to make quality 
                healthcare accessible to all.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct-v3/Health.jpg"
                alt="Healthcare professionals"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1501868984184-76121ed6a6e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Journey"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
               Healthix Life began with a vision to transform healthcare delivery. 
                What started as a small clinic has grown into a comprehensive healthcare provider, 
                serving millions of patients across the globe.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Today, we continue to push the boundaries of healthcare innovation while maintaining 
                our core values of compassion, excellence, and patient-centered care.
              </p>
              <Button variant="outline" className="group">
                Discover Our Journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <AboutUs /> */}
      {/* <div className="w-full bg-black mt-20">
        <img
          src="https://corehealthandwellness.in/wp-content/uploads/2024/07/treatmnet-range-1.webp"
          alt=""
          className="h-full w-full object-cover"
        />
      </div> */}
      <Comboproduct />
      {/* <Explore /> */}
      {/* <Testimonials /> */}
      <DeliveryPartner />
    </main>
  );
};

export default Home;
