import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="bg-[#E1ECFE]">
      <div className="max-w-[1250px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 py-15 px-5">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 w-full lg:w-[50%] flex justify-center lg:justify-end"
          >
            <img
              src="https://blacks.themerex.net/wp-content/uploads/2025/01/image30-copyright.png"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1 w-full lg:w-[40%]"
          >
            <h1 className="text-3xl lg:text-4xl xl:text-6xl font-bold font-cormorant">
              Selection of the World’s Best Sellers
            </h1>
            <p className="mt-5 text-sm lg:text-lg">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia.
            </p>
            <button className="mt-7 px-12 py-4 bg-[#063F2D] text-white rounded-full cursor-pointer">
              Shop now
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
