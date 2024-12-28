import { motion } from "framer-motion"
import {
  Users,
  Globe2,
  Building2,
  ArrowRight,
  Leaf,
  HeartPulse,
  BadgeCheck,
  Microscope,
  TrendingUp,
} from "lucide-react";
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"

const pillars = [
  {
    icon: <Users className="w-12 h-12" />,
    title: "Healthy People",
    description: "Improving the well-being of people and society",
    color: "bg-blue-500"
  },
  {
    icon: <Globe2 className="w-12 h-12" />,
    title: "Healthy Planet",
    description: "Safeguarding our planet",
    color: "bg-green-500"
  },
  {
    icon: <Building2 className="w-12 h-12" />,
    title: "Healthy Business",
    description: "Leading our business the right way",
    color: "bg-purple-500"
  }
]

const progressCards = [
  {
    title: "Caring for our employees",
    description: "Empowering our people and promoting growth",
    icon: <HeartPulse className="w-6 h-6" />,
    image: "https://media.licdn.com/dms/image/v2/C5612AQFm-3N_BTVFKg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1578421802603?e=1740614400&v=beta&t=ajhn8oRrrcqcMF1etxUiyqVfPuLELe5Q7mF7I7E_N24"
  },
  {
    title: "Fostering an inclusive and diverse culture",
    description: "Respecting our employees and valuing all perspectives",
    icon: <Users className="w-6 h-6" />,
    image: "https://www.avadolearning.com/wp-content/uploads/2024/01/how-to-foster-diversity-and-inclusion-jpeg.webp"
  },
  {
    title: "Getting medicines to those who need them",
    description: "Making drugs more affordable and available",
    icon: <BadgeCheck className="w-6 h-6" />,
    image: "https://i.ndtvimg.com/i/2017-07/first-aid-medicines_650x400_81499947591.jpg?q=50"
  },
  {
    title: "Protecting our planet",
    description: "Minimizing our environmental footprint",
    icon: <Leaf className="w-6 h-6" />,
    image: "https://unorthoboxed.com/wp-content/uploads/2021/09/protecting-planet-shutterstock_1211521729.jpg"
  },
  {
    title: "Advancing Achievement",
    description: "Increasing awareness and encouraging appropriate use",
    icon: <Microscope className="w-6 h-6" />,
    image: "https://static.vecteezy.com/system/resources/previews/027/654/256/non_2x/concept-of-progress-towards-goal-or-achievement-of-business-targets-motivation-to-achieve-success-career-advancement-ambitious-businessman-walking-on-growth-arrow-path-towards-bullseye-goal-vector.jpg"
  },
  {
    title: "Maintaining a responsible supply chain",
    description: "Working with suppliers aligned our priorities",
    icon: <TrendingUp className="w-6 h-6" />,
    image: "https://igps.net/wp-content/uploads/2020/04/shutterstock_1120037774.jpg"
  }
]

export default function Impact() {
  return (
    (<div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Progress in Creating a Healthier World
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Healthix life leverages our footprint, scale, resources, products and skills to help address global challenges and support our communities, while ensuring our business success so that we can continue providing medicines to the millions of patients around the world who count on us.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Three Pillars */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center">
                <div
                  className={`mx-auto w-24 h-24 rounded-full ${pillar.color} text-white flex items-center justify-center mb-6`}>
                  {pillar.icon}
                </div>
                <h2 className="text-xl font-semibold mb-3">{pillar.title}</h2>
                <p className="text-gray-600">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Progress Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-16">
            Learn more about our progress
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {progressCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[3/2] relative overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gray-100 rounded-lg">
                        {card.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{card.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{card.description}</p>
                        <Button variant="ghost" className="text-sm p-0 h-auto hover:bg-transparent">
                          Learn more <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join us in making a difference</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Together, we can create a healthier future: healthy people, healthy planet, and healthy business.
          </p>
          <Button
            variant="outline"
            className=" border-white hover:bg-white text-gray-900">
            View our full sustainability report
          </Button>
        </div>
      </section>
    </div>)
  );
}