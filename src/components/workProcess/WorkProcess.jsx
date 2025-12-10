import WorkSteps from "./WorkSteps";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "../../utils/animations";
import { faPenNib, faDiagramProject, faCode, faWind } from "@fortawesome/free-solid-svg-icons";
import { faJs, faReact } from "@fortawesome/free-brands-svg-icons";

const workStepData = [
  {
    id: 1,
    title: "UI/UX Design",
    description: "Creating intuitive and user-centered interfaces.",
    icon: faPenNib,
  },
  {
    id: 2,
    title: "Prototyping & Wireframing",
    description: "Using tools to visualize and plan application workflows.",
    icon: faDiagramProject,
  },
  {
    id: 3,
    title: "HTML & CSS",
    description: "Building structured, responsive, and visually appealing web pages.",
    icon: faCode,
  },
  {
    id: 4,
    title: "Tailwind CSS",
    description: "Implementing modern, utility-first styling for scalable front-end designs.",
    icon: faWind,
  },
  {
    id: 5,
    title: "JavaScript",
    description: "Adding interactivity and dynamic behavior to web interfaces.",
    icon: faJs,
  },
  {
    id: 6,
    title: "React.js",
    description: "Developing component-based, modern web applications for enhanced user experience.",
    icon: faReact,
  },
];

const WorkProcess = () => {
  return (
    <motion.div
      className="content px-2 py-8 md:py-12"
      id="work-process"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-6">
        <p className="section-title">Skills</p>
        <p className="mt-3 text-sm md:text-base text-gray-500">
          A compact overview of my core front-end skills and tools.
        </p>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {workStepData.map((data, index) => (
          <WorkSteps data={data} key={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default WorkProcess;
