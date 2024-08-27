const Explore = () => {
  return (
    <div className="Explore">
      <div className="h-fit relative w-full flex flex-col items-center p-5">
        <h1 className="text-xl font-bold">Core Health</h1>
        <p className="text-lg font-semibold">Innovative Products packed By Science</p>
        <h1 className="text-sm w-[50%] text-center">Our Products combine traditional wisdom with modern science to deliver the best possible solutions. ensuring your well-being. Experience Core Health with us now. </h1>
        <button className="bg-black hover:bg-gray-800 transition-all text-white font-bold py-2 px-4 mt-4 rounded">Explore Now</button>
        <div className="hidden lg:flex">
            <img src="https://corehealthandwellness.in/wp-content/uploads/2024/07/WhatsApp_Image_2024-07-22_at_4.36.36_PM__2_-removebg-preview.png" alt="" className="w-60" />
            <img src="https://corehealthandwellness.in/wp-content/uploads/2024/07/WhatsApp_Image_2024-07-22_at_4.36.36_PM__1_-removebg-preview.png" alt="" className="w-60" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
