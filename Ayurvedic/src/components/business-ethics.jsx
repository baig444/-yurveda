import { motion } from "framer-motion"
import { Facebook, Linkedin, Twitter, Shield, Users, FileCheck, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

const ethicalBehaviors = [
  {
    title: "Code of Conduct",
    description: "Guides how our employees interact with each other and business partners",
    icon: <Users className="w-6 h-6 text-green-600" />,
    link: "/code-of-conduct"
  },
  {
    title: "Speak Up Culture",
    description: "Empowering employees to report any issues or concerns through the free Integrity Hotline",
    icon: <AlertCircle className="w-6 h-6 text-green-600" />,
    link: "/speak-up"
  },
  {
    title: "Employee Training",
    description: "Comprehensive training programs covering relevant topics to ensure responsible business conduct",
    icon: <FileCheck className="w-6 h-6 text-green-600" />,
    link: "/training"
  },
  {
    title: "Risk Management",
    description: "Identifying and mitigating potential risks, including in our supply chain",
    icon: <Shield className="w-6 h-6 text-green-600" />,
    link: "/risk-management"
  }
]

const complianceAreas = [
  {
    title: "Product Responsibility",
    description: "Marketing our products responsibly, following laws and standards that guide pharmaceutical promotion",
    progress: 100
  },
  {
    title: "Data Privacy",
    description: "Protecting the privacy and security of patients, customers, employees, vendors",
    progress: 100
  },
  {
    title: "Supply Chain Ethics",
    description: "Ensuring ethical practices throughout our entire supply chain",
    progress: 95
  }
]

export default function BusinessEthics() {
  return (
    (<div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Doing Business the Right Way
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Conducting business with integrity and transparency is non-negotiable for us. What we achieve is important, but how we achieve it is just as important. Our culture of compliance starts with a strong foundation, including tools, policies and procedures.
              </p>
              <div className="flex gap-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  Learn More
                </Button>
                <Button variant="outline">
                  View Our Policies
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative">
              <img
                src="https://cyberonlineread.com/wp-content/uploads/2023/03/Good-Business-Ethics.jpg"
                alt="Team meeting discussing business ethics"
                className="rounded-lg shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Ethical Behavior Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Efforts to Promote Ethical Behavior
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We maintain high ethical standards through comprehensive programs and initiatives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ethicalBehaviors.map((behavior, index) => (
              <motion.div
                key={behavior.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 bg-green-50 rounded-lg mb-4">
                        {behavior.icon}
                      </div>
                      <h3 className="font-semibold mb-2">{behavior.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{behavior.description}</p>
                      <Button variant="link" className="text-green-600 hover:text-green-700">
                        Learn more
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Compliance Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto">
            <Tabs defaultValue="responsibility" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="responsibility">Product Responsibility</TabsTrigger>
                <TabsTrigger value="privacy">Data Privacy</TabsTrigger>
                <TabsTrigger value="supply">Supply Chain</TabsTrigger>
              </TabsList>
              {complianceAreas.map((area) => (
                <TabsContent key={area.title} value={area.title.toLowerCase().split("'")[0]}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                          <p className="text-gray-600 mb-4">{area.description}</p>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-green-600 transition-all duration-500"
                              style={{ width: `${area.progress}%` }} />
                          </div>
                          <div className="mt-2 text-sm text-gray-600">
                            Compliance Rate: {area.progress}%
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>
      {/* Share Section */}
      <section className="py-10 border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">Share this article:</div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Facebook className="w-5 h-5 text-blue-600" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="w-5 h-5 text-blue-700" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="w-5 h-5 text-blue-400" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>)
  );
}