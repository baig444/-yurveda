import { motion } from "framer-motion"
import { Facebook, Linkedin, Twitter, ArrowRight, Users, Target, Lightbulb, Heart, Shield, Clock } from 'lucide-react'
import { Button } from "../components/ui/button"

const values = [
  {
    id: 1,
    title: "Leading the way",
    description: "As pioneers in integrated healthcare solutions, we strive to be an industry leader and a mark of excellence in a constantly changing environment.",
    icon: <Users className="w-12 h-12 text-green-600" />,
    stats: ["500+ Healthcare Professionals", "25+ Years Experience", "100K+ Patients Served"]
  },
  {
    id: 2,
    title: "Focus and Accountability",
    description: "We are focused in everything we do. We define clear objectives and concentrate our efforts, attention and energy to achieve them.",
    icon: <Target className="w-12 h-12 text-green-600" />,
    stats: ["98% Patient Satisfaction", "24/7 Support", "ISO 9001 Certified"]
  },
  {
    id: 3,
    title: "Getting it done together",
    description: "We all work for one company. By working together more effectively, in close collaboration and alignment, we tap into our full potential and drive our success.",
    icon: <Heart className="w-12 h-12 text-green-600" />,
    stats: ["50+ Partner Hospitals", "200+ Healthcare Programs", "15+ Specialties"]
  },
  {
    id: 4,
    title: "Innovating Where We Create Value",
    description: "We continuously innovate for patients, our partners in the healthcare system and our stakeholders. We constantly look for original and better ways to excel.",
    icon: <Lightbulb className="w-12 h-12 text-green-600" />,
    stats: ["30+ Research Papers", "15+ Patents", "5+ Innovation Awards"]
  }
]

export default function Diabties() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-6">Our Values Define Us</h1>
            <p className="text-xl text-green-50 mb-8">
              At Healthix Life, our values are more than just words – they're the foundation of everything we do.
              They guide our decisions, shape our culture, and drive our commitment to excellence in healthcare.
            </p>
            <Button variant="outline" className="bg-white text-green-600 hover:bg-green-50">
              Learn More About Healthix Life
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border-4 border-green-100 animate-spin-slow" />
                <div className="w-48 h-48 rounded-full border-4 border-green-200 animate-spin-slow-reverse" />
              </div>
              <div className="relative z-10 bg-white rounded-2xl shadow-xl p-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600">
                  What we do every day matters. We're applying passion and commitment towards better health. 
                  Our culture is about not only what and how we do things, but also why we do them.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 rounded-full p-3 mr-4">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">{value.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{value.description}</p>
                  <div className="border-t pt-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {value.stats.map((stat, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <ArrowRight className="w-4 h-4 mr-2 text-green-500" />
                          {stat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Commitment to Excellence</h2>
            <p className="text-lg text-gray-600 mb-12">
              We are committed to delivering the highest quality healthcare services, 
              maintaining transparency in our operations, and continuously improving 
              our standards of care. Our dedication to excellence is reflected in 
              every aspect of our service delivery.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Patient Safety</h3>
                <p className="text-gray-600">Ensuring the highest standards of patient care and safety in everything we do.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Timely Care</h3>
                <p className="text-gray-600">Providing prompt and efficient healthcare services when needed most.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Share Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">Share our values with your network</p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon">
              <Facebook className="w-4 h-4 text-blue-600" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="w-4 h-4 text-blue-700" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="w-4 h-4 text-blue-400" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}