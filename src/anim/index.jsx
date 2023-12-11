export const opacity = {
  initial: {
    opacity: 1,
  },

  open: (i) => ({
   opacity: 1,
    transition: { duration: 1, delay: 0.05 * i },
  }),
  closed: {
    opacity: 0,
  },
};


export const imageSlideDown = {
  initial: {
    opacity: 0,
    clipPath: "inset(100% 0% 0% 0%)",
  },

  open: (i) => ({
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 1, delay: 0.05 * i, ease: [0.42, 0, 0.58, 1] },
  }),
  closed: {
    opacity: 0,
    clipPath: "inset(100% 0% 0% 0%)",
  },
};

export const slideup = {
  initial: {
    opacity: 1,
    y: "200%",
  },
  open: (i) => ({
    y: "0%",

    transition: { duration: 1, delay: 0.03 * i },
  }),
  closed: {
    y: "200%",
    opacity: 0,
  },
};
