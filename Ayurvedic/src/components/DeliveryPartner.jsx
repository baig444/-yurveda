import {certificates, images} from "../constants/index";
const DeliveryPartner = () => {
  return (
    <div className=" h-[80vh] w-full flex  flex-col items-center gap-2">
      <div className=" text-center">
      <h1 className="text-4xl font-extrabold">Our Delivery partners</h1>
      <p className="px-5">
        Ensuring fast and reliable delivery through trusted partnerships with
        leading logistics providers.
      </p>
      <div className="w-full flex flex-wrap gap-5 justify-evenly items-center px-20 lg:mt-10">
        {images.map((image) => (
          <img key={image} src={image.delivery} alt="logo" className="w-40" />
        ))}
      </div>
      </div>

      <div className="mt-16 text-center">
        <h1 className="text-4xl font-extrabold">Our Certificates</h1>
        <p>
          Certified for excellence, our products meet the highest standards of
          quality and safety.
        </p>
        <div className="w-full flex flex-wrap gap-10 justify-evenly items-center px-20 lg:mt-10">
          {certificates.map((image) => (  
            <img key={image} src={image.delivery} alt="logo" className="w-20 lg:w-40" />
          ))}
       
      </div>
      </div>
    </div>
  );
};

export default DeliveryPartner;
