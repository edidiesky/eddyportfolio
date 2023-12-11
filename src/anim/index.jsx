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
