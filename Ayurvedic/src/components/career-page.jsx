import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Briefcase, GraduationCap, Users, Clock, Upload } from "lucide-react"

const benefits = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Collaborative Environment",
    description: "Work with talented professionals in a supportive team setting"
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Learning & Development",
    description: "Continuous learning opportunities and professional growth"
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Career Growth",
    description: "Clear career progression paths and advancement opportunities"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Work-Life Balance",
    description: "Flexible working hours and hybrid work options"
  }
]

const openings = [
  {
    title: "Senior Research Scientist",
    department: "Research & Development",
    location: "Mumbai, India",
    type: "Full-time"
  },
  {
    title: "Quality Control Analyst",
    department: "Quality Assurance",
    location: "Bangalore, India",
    type: "Full-time"
  },
  {
    title: "Production Supervisor",
    department: "Manufacturing",
    location: "Pune, India",
    type: "Full-time"
  }
]

export default function Career() {
  return (
    (<div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Join Our Team at Healthix life
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Be part of a team that's revolutionizing healthcare through innovation and dedication
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              View Open Positions
            </Button>
          </motion.div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-6 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Current Openings */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>{job.department}</p>
                      <p>{job.location}</p>
                      <p>{job.type}</p>
                    </div>
                    <Button variant="outline" className="mt-4">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Apply Now</h2>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position</Label>
                      <select
                        id="position"
                        className="w-full h-10 px-3 rounded-md border border-slate-200 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 dark:border-slate-800"
                        required>
                        <option value="">Select a position</option>
                        {openings.map(job => (
                          <option key={job.title} value={job.title}>
                            {job.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label>Resume/CV</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                        <div className="flex flex-col items-center">
                          <Upload className="w-8 h-8 text-gray-400 mb-2" />
                          <p className="text-sm text-gray-600 mb-2">
                            Drag and drop your resume here, or click to browse
                          </p>
                          <input type="file" className="hidden" accept=".pdf,.doc,.docx" required />
                          <Button variant="outline" size="sm">
                            Browse Files
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>)
  );
}