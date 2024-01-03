const Plane = ({ color }) => {
  return (
    <svg
      className="plane_svg"
      viewBox="0 0 462 158"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        fill="#CE7A9A"
        class="morph"
        points="460.677372 130.96740983237962 108.87630821487936 27.36462474549947 113.63394221887533 128.91573558431273"
      ></polygon>
      <polygon
        fill="#e2e2e3"
        class="morph2"
        points="108.87630821487936 27.36462474549947 171.5035623021577 0 460.677372 130.96740983237962"
      ></polygon>
      <polygon
        fill="#e2e2e3"
        class="morph3"
        points="75.83504774042903 41.62137057921933 460.677372 130.96740983237962 0 74.18977616148743"
      ></polygon>
    </svg>
  );
};

export default Plane;
