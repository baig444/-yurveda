import DeliveryPartner from "../components/DeliveryPartner";
import { Products } from "../constants/index";
import AboutUs from "../pages/AboutUs";
import Deals from "../pages/Deals";
import Comboproduct from "./Comboproduct";
import Explore from "./Explore";
import Testimonials from "./Testimonials";
import Cart from "../components/Cart";
const Home = () => {
  return (
    <main className="min-h-full w-full">
      <div className="min-h-[100vh] w-full border-b-2">
        <div className="w-[100vw]">
          <img
            src="https://corehealthandwellness.in/wp-content/uploads/2024/07/Banner1-copy-scaled.jpg"
            alt=""
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-wrap items-center justify-evenly py-4 px-2">
          {Products.map((product) => {
            return (
              <div key={product.id} className="flex flex-col items-center p-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <img src={product.imageUrl} alt={product.name} className="h-20 w-20 object-cover" />
                <p className="text-md font-bold mt-2">{product.name}</p>
                <span className="text-xs w-52 text-center mt-1">{product.subname}</span>
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
      <Cart/>
    </main>
  );
};

export default Home;
