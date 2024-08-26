import { GrStatusGood } from "react-icons/gr";
import { GiMaterialsScience } from "react-icons/gi";
import { IoChatbubbleOutline } from "react-icons/io5";

const About = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Our Story</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt=""
              src="https://corehealthandwellness.in/wp-content/uploads/2024/07/900-2.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              <p>
                At Core Health and Wellness, our journey began with a simple
                belief: that everyone deserves access to high-quality, effective
                health and wellness products. Founded by a team of health
                enthusiasts and experts, we have dedicated ourselves to creating
                solutions that support and enhance your well-being. Our passion
                for holistic health and our commitment to innovation have driven
                us to develop a range of products that blend traditional wisdom
                with modern science.
              </p>

              <h1 className="text-4xl text-black">Who We Are </h1>
              <p>
                Core Health and Wellness is a trusted name in the health
                industry, known for our dedication to quality and excellence.
                Our team is composed of experienced professionals in the fields
                of nutrition, fitness, and wellness, all working together to
                bring you products that are not only effective but also safe and
                natural. We are passionate about helping you live a healthier,
                happier life, and we take pride in being your partner on this
                journey.
              </p>
            </article>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 bg-gray-200  sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-3xl font-bold mb-5">Why Choose Us</h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 px-8">
          <div className="h-60 flex flex-col gap-2 rounded-lg p-8 bg-white">
            <GrStatusGood size={40} />
            <h1 className="text-lg font-bold">Quality & Purity</h1>
            <p className="text-xs w-[80%]">
              Our products are made with the highest quality natural
              ingredients, ensuring purity and effectiveness. We prioritize
              transparency in our formulations, so you know exactly what you’re
              putting into your body.
            </p>
          </div>
          <div className="h-60 flex flex-col gap-2 rounded-lg bg-white p-8">
            <GiMaterialsScience size={40} />

            <h1 className="text-lg font-bold">Science-Backed Formulations</h1>
            <p className="text-xs w-[80%]">
              We combine traditional wisdom with modern scientific research to
              create innovative products that support your health and wellness
              goals.
            </p>
          </div>
          <div className="h-60 flex flex-col gap-2 rounded-lg bg-white p-8">
            <IoChatbubbleOutline size={40} />
            <h1 className="text-lg font-bold">Customer-Centric Approach</h1>
            <p className="text-xs w-[80%]">
              At Core Health and Wellness, your well-being is our top priority.
              We offer personalized support and resources to help you on your
              health journey, and we are committed to providing exceptional
              customer service every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
