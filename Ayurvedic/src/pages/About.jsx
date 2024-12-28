import { Button } from "../components/ui/button"
import { PlayCircle } from "lucide-react"

export default function About() {
  return (
    (<div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Green Circle Decorations */}
              <div
                className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-green-500/20" />
              <div
                className="absolute -right-10 bottom-0 w-32 h-32 rounded-full bg-green-400/20" />
              
              <div className="relative">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  We are all in for <br />
                  <span className="text-green-600">better health.</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                  At Healthix Life, we're committed to providing accessible, quality healthcare solutions that enhance lives and build healthier communities.
                </p>
                <Button className="bg-green-600 hover:bg-green-700">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-full overflow-hidden aspect-square">
                <img
                  src="https://www.robynmariecoaching.com/wp-content/uploads/2023/05/unsplash-image-Ianw4RdVuoo-1024x600.jpg"
                  alt="Happy family enjoying outdoor activities"
                  className="w-full h-full object-cover\" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission Statement Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
              At Healthix Life we believe that everyone should have access to
              <span className="font-bold"> quality healthcare</span> that helps manage disease, fights infection, or simply improves overall health.
            </h2>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                For more than a decade, patients, caregivers and healthcare providers have trusted Healthix Life
              </h3>
              <p className="text-gray-600">
                As the leading healthcare solutions provider, we offer comprehensive care that puts patients first. Our network of qualified professionals ensures you receive the attention and treatment you deserve.
              </p>
              <ul className="space-y-4">
                {[
                  "24/7 Professional Support",
                  "Qualified Healthcare Providers",
                  "Modern Medical Facilities",
                  "Patient-Centered Approach"
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                <img
                  src="https://media.licdn.com/dms/image/v2/C4D12AQGO8YbuGniWzA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520128660733?e=1740614400&v=beta&t=gqDiM3lCaaZUOOhA0K88RBhIjMDV2vF623X6ZjQRqvo"
                  alt="Healthcare professional with patient"
                  className="w-full h-full object-cover" />
              </div>
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-green-100" />
            </div>
          </div>
        </div>
      </section>
      {/* Quality Care Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Ensuring Access to Quality Healthcare
            </h2>
            <p className="text-gray-600">
              We're dedicated to making healthcare accessible to everyone through our network of facilities and healthcare professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative group cursor-pointer">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://shradhanursing.com/wp-content/uploads/2021/06/Elder-Care.png"
                  alt="Senior patient consultation"
                  className="w-full transition duration-300 group-hover:scale-105" />
              </div>
              
            </div>
            <div className="relative group cursor-pointer">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://proptechos.com/wp-content/uploads/2024/06/The-role-of-healthcare-facilities-management-in-modern-society-ProptechOS.webp"
                  alt="Modern healthcare facility"
                  className="w-full transition duration-300 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>)
  );
}