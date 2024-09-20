import { HomeImg, MobileImg, shopify } from "../assets/images";
import { FaStar } from "../utils/icons";

const Home = () => {
  return (
    <>
      <div className="bg-white py-8 px-4 sm:px-6 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
   
          <div className="order-1 md:order-2"> 
            <img src={HomeImg} alt="Home Image" className="hidden md:block"/>
            <img src={MobileImg} alt="Home Image" className="md:hidden"/>
          </div>

          <div className="lg:pl-8 lg:pr-7 px-2 flex flex-col gap-3 order-2 md:order-1">
            <h1 className="text-[30px] md:text-[35px] lg:text-[60px] my-3  md:my-1 md:font-semibold font-medium">
              Print on demand for your ecommerce business
            </h1>
            <h3 className="text-xl md:text-2xl font-medium">
              Sign up for free and only pay for what you sell
            </h3>
            <p className="leading-6 hidden md:block">
              Turn your passion into profit with the world's largest <a href="#" className="underline">print on demand</a> <br/> network.
            </p>
            <p className="leading-6 md:hidden text-sm">
              Turn your passion into profit with the world's largest <a href="#" className="underline">print on demand</a> network.
            </p>
            <div className="my-4 flex items-center gap-5">
              <button className="px-4 py-2 rounded-full font-medium text-sm bg-black text-white hover:text-gray-500">
                Get started for free
              </button>
              <button className="px-4 py-2 rounded-full font-medium text-sm border border-gray-400 text-black hover:bg-gray-300">
                See our products
              </button>
            </div>
            <div className="flex flex-col gap-2 mt-3 items-start cursor-pointer hover:text-gray-400">
              <img src={shopify} alt="Shopify Logo" className="h-10" />
              <p className="flex items-center gap-2">
                {Array.apply(null, { length: 5 }).map((e, i) => (
                  <span className="text-green-400" key={i}>
                    <FaStar size={20} />
                  </span>
                ))}
                4.8/5
              </p>
              <span className="my-1 font-light">based on 910 reviews</span>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Home;
