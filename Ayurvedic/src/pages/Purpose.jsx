import { Play } from 'lucide-react';
const Purpose = () => {
  return (
    <div>
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-emerald-50 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-4">
            We are all in for better health.
          </h1>
          <p className="text-lg text-emerald-600 max-w-3xl">
            Purpose drives everything we do. We come to work every morning knowing that we help improve health outcomes for millions of patients every day.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Stats */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-gray-600 mb-6">
            As a global pharmaceutical leader, our company's worldwide network of capabilities enables approximately 15000 employees across 50 markets to push the boundaries of scientific innovation, discover life-changing treatments, and deliver quality healthcare wherever and whenever they're needed.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600">15,000+</div>
              <div className="text-gray-600">Employees Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600">50+</div>
              <div className="text-gray-600">Markets Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600">Millions</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: '"Its really a small thing, but for us, its the world."',
              image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800",
              background: "bg-emerald-100",
            },
            {
              title: 'Now Im the owner of my life',
              image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
              background: "bg-emerald-200",
            },
            {
              title: '"For me, playing guitar is all about being in the moment"',
              image: "https://images.unsplash.com/photo-1549298240-0d8e60513026?auto=format&fit=crop&q=80&w=800",
              background: "bg-emerald-300",
            },
          ].map((testimonial, index) => (
            <div key={index} className={`${testimonial.background} rounded-lg overflow-hidden`}>
              <div className="relative h-48">
                <img
                  src={testimonial.image}
                  alt="Testimonial"
                  className="w-full h-full object-cover"
                />
                <button className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-30 transition-opacity">
                  {/* <Play className="w-12 h-12 text-white" /> */}
                </button>
              </div>
              <div className="p-6">
                <p className="text-lg font-semibold text-gray-800">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-emerald-100">
            Together, we aim to improve health outcomes for patients, their families, and communities worldwide.
          </p>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Purpose
