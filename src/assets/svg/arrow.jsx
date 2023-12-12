const Arrow = ({ color }) => {
  return (
    <svg
      className="arrow flex item-center"
      width="20"
      height="11"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.285.668l-.506.506 4.146 4.148H.392v.717h17.533l-4.146 4.147.506.506 5.012-5.012z"
        fill={color?color:"#18033C"}
        fill-rule="evenodd"
      ></path>
    </svg>
  );
};

export default Arrow;
