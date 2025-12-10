export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 16,
    willChange: "opacity, transform"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.65, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

export const viewportConfig = {
  once: true,
  amount: 0.4,
  margin: "0px 0px 0px 0px"
};
