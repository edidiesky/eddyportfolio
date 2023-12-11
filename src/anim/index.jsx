export const opacity = {
  initial: {
    opacity: 1,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
  },
};

export const slideup = {
  initial: {
    opacity: 1,
    y: "150%",
  },
  open: (i) => ({
    y: "0%",

    transition: { duration: 0.8, delay: 0.03 * i },
  }),
  closed: {
    y: "150%",
    opacity: 0,
  },
};
