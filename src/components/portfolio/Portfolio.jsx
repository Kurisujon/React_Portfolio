import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/chodams.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/dazzify.png";
import card5 from "../../assets/images/portfolio-images/lovebeep.png";
import card6 from "../../assets/images/portfolio-images/eathink.png";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "../../utils/animations";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Responsive Web Landing Page",
    title: "City Housing Data Management System(CHoDaMS)",
    description:
      "CHoDaMS Web Landing Page: A responsive, visually appealing landing page for the City Housing Data Management System, featuring clean layouts, intuitive navigation, and a modern UI that enhances user experience.",
    link: "https://kurisujon.github.io/CHoDaMS-Landing/",
  },
  {
    id: 2,
    image: card2,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Designed an intuitive dashboard for product management, emphasizing clarity and user efficiency.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Developed a modern admin panel with a focus on usability and seamless navigation for end users and so on.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "UI-UX DESIGN",
    title: "Dazzify Social Media Platform",
    description:
      "Dazzify Web UI: A sleek, immersive social dashboard featuring neon accents, modular card layouts, and a cohesive design system that creates a vibrant user experience.",
    link: "https://www.figma.com/design/ZGMRTVR3XaSxl88SezV7qf/Dazzify-Web-UI?t=hIVBLYmPLbMu86F4-1",
  },
  {
    id: 5,
    image: card5,
    category: "UI-UX DESIGN",
    title: "LoveBeep Dating App",
    description:
      "LoveBeep Mobile UI: A clean, modern matchmaking dashboard with real-time proximity alerts, AI-powered profiles, and gamified interactions for intuitive, exciting connections.",
    link: "https://www.figma.com/design/07ESNQ8ryyZtXBeDwKIoIT/Love-Beep?t=hIVBLYmPLbMu86F4-1",
  },
  {
    id: 6,
    image: card6,
    category: "UI-UX DESIGN & DEVELOPED USING ANDROID STUDIO",
    title: "Eathink About It",
    description:
      "Eathink Mobile UI: An intuitive restaurant locator with map-based navigation, user reviews, ratings, and comment features, creating a social dining experience where discovering and sharing great food is effortless.",
    link: "https://www.figma.com/design/rDmr6cI9EL6cWbjIlPeqU3/Eathink-Mobile-App-UI?t=hIVBLYmPLbMu86F4-1",
  },
];

const Portfolio = () => {
  return (
    <motion.div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <motion.div variants={fadeInUp} className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </motion.div>
      <div className="mx-auto flex justify-center">
        <motion.div 
          className="grid xl:grid-cols-3 md:grid-cols-2 gap-6"
          variants={staggerContainer}
        >
          {projectData.map((data, index) => (
            <motion.div variants={fadeInUp} key={index}>
              <Projects data={data} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div variants={fadeInUp} className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
