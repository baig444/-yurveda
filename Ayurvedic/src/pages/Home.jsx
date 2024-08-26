import DeliveryPartner from "../components/DeliveryPartner";
import { Products } from "../constants/index";
import AboutUs from "../pages/AboutUs";
import Deals from "../pages/Deals";
import Comboproduct from "./Comboproduct";
import Explore from "./Explore";
import Testimonials from "./Testimonials";
const Home = () => {
  return (
    <main className="min-h-screen w-full">
      <div className="h-[100vh] w-full border-b-2">
        <div className="w-full h-[70vh]">
          <img
            src="https://corehealthandwellness.in/wp-content/uploads/2024/07/Banner1-copy-scaled.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center justify-evenly">
          {Products.map((product) => {
            return (
              <div key={product.id} className="flex flex-col items-center p-3">
                <img src={product.imageUrl} alt="logo" className="h-20 w-20" />
                <p className="text-md font-bold">{product.name}</p>
                <span className="text-xs w-52 text-center">{product.subname}</span>
              </div>
            );
          })}
        </div>
      </div>
      <Deals/>
      <AboutUs/>
      <div className="h-[60vh] w-full bg-black mt-20">
       <img src="https://corehealthandwellness.in/wp-content/uploads/2024/07/treatmnet-range-1.webp" alt="" className="h-full w-full object-cover" />
      </div>
      <Comboproduct/>
      <Explore/>
      <Testimonials/>
      <DeliveryPartner/>
    </main>
  );
};

export default Home;
