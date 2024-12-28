import { motion } from "framer-motion"
import { Facebook, Linkedin, Twitter, TrendingUp, DollarSign, Globe, Building2 } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"

const statistics = [
  {
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    value: "$5.2B",
    label: "in savings across 25 countries",
    description: "Including $723M in the US and Canada"
  },
  {
    icon: <Globe className="w-6 h-6 text-green-600" />,
    value: "$1.8B",
    label: "in 14 countries Europe",
    description: "Significant impact across European markets"
  },
  {
    icon: <Building2 className="w-6 h-6 text-green-600" />,
    value: "$28.2B",
    label: "Total Economic Activity",
    description: "Generated through direct and indirect economic contributions"
  }
]

export default function EconomicImpact() {
  return (
    (<div className="min-h-screen bg-white">
      <img src="https://www.oxfordeconomics.com/wp-content/uploads/2021/12/Global-economy-money.png" alt="economic impact" className="w-full h-96 object-cover" />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Economic Impact Report
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              As a leading global pharmaceutical company and provider of generic medicines, Healthix's mission is to improve the lives of patients. We conducted an assessment to quantify our economic impact in 2023, both in terms of savings from generic medicines, as well as contributions to the labor market and gross domestic product (GDP).
            </p>
          </motion.div>
        </div>
      </section>
      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-50 rounded-lg">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gray-900 mb-2">
                          {stat.value}
                        </div>
                        <div className="text-lg font-medium text-gray-900 mb-2">
                          {stat.label}
                        </div>
                        <p className="text-gray-600">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Impact Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  Direct and Indirect Economic Activity
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Supported 250,000 jobs worldwide</h3>
                    <p className="text-gray-600">Including direct employment and jobs supported through our supply chain</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Contributed $5.2B to GDP</h3>
                    <p className="text-gray-600">Through direct operations and indirect economic effects</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Generated $28.2B in labor income</h3>
                    <p className="text-gray-600">A measure of aggregate worker wages, salaries and benefits</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-sm text-gray-500">
              <p>Note: The analysis covers 25 countries with 32,489 FTEs of Healthix's 34,000 FTEs around the world. External data used to calculate generic medicine savings are not available for India. Ireland has been based on Israel. Data holds the number one position in the generic medicines segment with 30% of market share, and 25% of all prescriptions are filled with a Healthix generic medicine.</p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Share Section */}
      <section className="py-10 border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="text-sm text-gray-600">Share this article:</div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-blue-600">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-blue-700">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-blue-400">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Explore our Healthy Future Progress Report
            </h2>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Download Full Report
            </Button>
          </div>
        </div>
      </section>
    </div>)
  );
}