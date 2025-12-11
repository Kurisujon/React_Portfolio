import person from "../../assets/profile.png";
import "./introduction.css";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "../../utils/animations";


const Introduction = () => {
  return (
    <motion.div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <motion.div variants={fadeInUp} className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Cris John Kate C. Labiaga
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            Aspiring<span className="bg-highlight"> Front-End Developer</span>{" "}
            & <span className="bg-highlight"> UI/UX Enthusiast</span>— driven to create engaging digital experiences through thoughtful interface design and clean, intuitive code.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:example@gmail.com"
            >
              Say Hello!
            </a>
          </p>
        </motion.div>
        
      </div>
      <motion.div
        variants={fadeInUp}
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute inset-0 object-contain object-top bg-white rounded-3xl`}
          src={person}
          alt="person"
          fetchPriority="high"
        />
      </motion.div>
    </motion.div>
  );
};

export default Introduction;
