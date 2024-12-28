import { motion } from "framer-motion"
import { Facebook, Linkedin, Twitter, Leaf, Droplets, Recycle, BarChart3 } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Progress } from "../components/ui/progress"

const initiatives = [
  {
    title: "Climate Action and Resilience",
    description: "Global temperatures are increasing at an alarming rate, largely because of greenhouse gases (GHG) which trap heat in the atmosphere. We have ambitious targets to reduce our absolute scope 1 and 2 GHG emissions—our operational emissions—by 25% by 2025 46% 2030 (vs. 2019).",
    icon: <Leaf className="w-6 h-6 text-green-600" />,
    progress: 46
  },
  {
    title: "Pharmaceuticals in the Environment",
    description: "We assess and mitigate the environmental impact of pharmaceutical ingredients, including Antimicrobials, from our operations work with supply chain to do same.",
    icon: <Droplets className="w-6 h-6 text-blue-600" />,
    progress: 75
  },
  {
    title: "Responsible Use of Natural Resources",
    description: "We have a responsibility to conserve resources, including water and materials used in manufacturing, packaging delivery of our products. In 2022, we reduced withdrawal by 17% areas projected be stress.",
    icon: <Recycle className="w-6 h-6 text-teal-600" />,
    progress: 17
  }
]

export default function ProtectingPlanet() {
  return (
    (<div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900">
        <img
          src="https://penntoday.upenn.edu/sites/default/files/2019-04/iStock-1135640910.jpg"
          alt="Person walking on solar panels"
          className="w-full h-full object-cover opacity-60" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Protecting Our Planet
              </h1>
              <p className="text-xl text-gray-200">
                We seek to mitigate our impact on the environment, because the health of the planet is inherently linked to the health of those who inhabit it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Environmental Initiatives */}
            <div className="space-y-8">
              {initiatives.map((initiative, index) => (
                <motion.div
                  key={initiative.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gray-100 rounded-lg">
                          {initiative.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-3">
                            {initiative.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {initiative.description}
                          </p>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{initiative.progress}%</span>
                            </div>
                            <Progress value={initiative.progress} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Stats and Additional Info */}
            <div>
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-green-600" />
                    Key Environmental Metrics
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">GHG Emissions Reduction Target (by 2030)</div>
                      <Progress value={46} className="h-2" />
                      <div className="text-sm mt-1">46% reduction vs 2019 baseline</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Water Conservation Progress</div>
                      <Progress value={17} className="h-2" />
                      <div className="text-sm mt-1">17% reduction in water withdrawal</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Share Section */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-sm font-medium text-gray-600 mb-4">Share this article:</h3>
                <div className="flex gap-4">
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
            </div>
          </div>
        </div>
      </section>
    </div>)
  );
}