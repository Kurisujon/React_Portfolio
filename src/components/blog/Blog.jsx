import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "../../utils/animations";
import { useState } from "react";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: "/images/Certificate_of_Completion_Installing_and _Configuring_Computer_Systems_page-0001.jpg",
    title: "Installing and Configuring Computer Systems",
    description: "Completion certificate for installing and configuring computer systems.",
    dateTime: "15 Sept, 2025 09:15 AM",
  },
  {
    id: 2,
    image: "/images/Certificate_of_Completion_Introduction_to_CSS_page-0001.jpg",
    title: "Introduction to CSS",
    description: "Introductory CSS course certificate.",
    dateTime: "15 Sept, 2025 02:30 PM",
  },
  {
    id: 3,
    image: "/images/Certificate_of_Completion_Maintaining_Computer_System_and_Networks_page-0001.jpg",
    title: "Maintaining Computer Systems and Networks",
    description: "Certificate in maintaining computer systems and networks.",
    dateTime: "15 Sept, 2025 11:00 AM",
  },
  {
    id: 4,
    image: "/images/Certificate_of_Completion_Setting_UP_Computer_Servers_page-0001.jpg",
    title: "Setting Up Computer Servers",
    description: "Server setup completion certificate.",
    dateTime: "15 Sept, 2025 04:20 PM",
  },
  {
    id: 5,
    image: "/images/Certificate_of_Completion_Setting_Up_Computer_Networks_page-0001.jpg",
    title: "Setting Up Computer Networks",
    description: "Network setup completion certificate.",
    dateTime: "15 Sept, 2025 01:00 PM",
  },
  {
    id: 6,
    image: "/images/_certificate_johncrislabiaga-gmail-com_04e59dbc-f480-4807-9767-1827dde1e221_page-0001.jpg",
    title: "Online Course Certificate A",
    description: "General online course certificate.",
    dateTime: "17 June, 2025 10:00 AM",
  },
  {
    id: 7,
    image: "/images/_certificate_johncrislabiaga-gmail-com_0534ec0a-78b1-435e-a154-64a6441ad239_page-0001.jpg",
    title: "Online Course Certificate B",
    description: "General online course certificate.",
    dateTime: "24 June, 2025 09:45 AM",
  },
  {
    id: 8,
    image: "/images/_certificate_johncrislabiaga-gmail-com_2686ca28-bba2-487e-9edf-0ee25a06801d_page-0001.jpg",
    title: "Online Course Certificate C",
    description: "General online course certificate.",
    dateTime: "03 July, 2025 03:15 PM",
  },
  {
    id: 9,
    image: "/images/cyber-threat-management.png",
    title: "Cyber Threat Management",
    description: "Certification in managing cyber threats.",
    dateTime: "08 Feb, 2025 01:30 PM",
  },
  {
    id: 10,
    image: "/images/introduction-to-cybersecurity.png",
    title: "Introduction to Cybersecurity",
    description: "Introduction to cybersecurity concepts and best practices.",
    dateTime: "18 Jan, 2025 10:00 AM",
  },
  {
    id: 11,
    image: "/images/network-defense.png",
    title: "Network Defense",
    description: "Network defense and protection certification.",
    dateTime: "04 Mar, 2025 11:45 AM",
  },
  {
    id: 12,
    image: "/images/microsoft.jpg",
    title: "Microsoft Certification",
    description: "Microsoft certification achievement.",
    dateTime: "14 Oct, 2022 02:00 PM",
  },
  {
    id: 13,
    image: "/images/designing.jpg",
    title: "Designing Certificate",
    description: "Certificate in design fundamentals.",
    dateTime: "14 Oct, 2022 05:00 PM",
  },
];

const Blog = () => {
  const [selected, setSelected] = useState(null);
  return (
    <motion.div
      className="content py-25 px-2 relative"
      id="blog"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <motion.div variants={fadeInUp} className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Certificates</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Explore the certifications I’ve achieved as part of my ongoing journey to enhance my expertise in design, development, and the evolving tech landscape.
        </p>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Swiper
          grabCursor={true}
          breakpoints={custom_breakpoints}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {blogData?.map((data, index) => (
            <SwiperSlide
              key={index}
              className="mb-10" /* pagination margin bottom to 40px */
              style={{ backgroundColor: "rgba(0,0,0,0)" }}
            >
              <MonoBlog data={data} onOpen={() => setSelected(data)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setSelected(null)}>
          <div className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-lg shadow-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img src={selected.image} alt={selected.title} className="max-h-[70vh] w-auto object-contain" />
            <div className="p-4">
              <p className="text-sm text-gray-500">{selected.dateTime}</p>
              <p className="text-lg font-semibold">{selected.title}</p>
              <p className="text-sm text-gray-600 mt-2">{selected.description}</p>
              <button className="btn btn-primary mt-4" onClick={() => setSelected(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Blog;
