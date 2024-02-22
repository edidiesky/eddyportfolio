import React from 'react';
const ProjectCard = ({x,index, addRefs}) => {
    return (
      <div key={index} className="w-100 flex items-center flex-col gap-12">
        <div
          data-scroll
          data-scroll-speed="1"
          ref={addRefs}
          style={{
            background: `${x?.color}`,
          }}
          className="flex w-full h-[400px] md:h-[500px] items-center justify-center"
        >
          <div data-scroll data-scroll-speed="2" className="w-[80%]">
            <img src={x?.image} alt="" className="w-full" />
          </div>
        </div>
        <div className="flex w-full flex-col gap-8">
          <h3 className="text-2xl md:text-3xl flex items-start flex-col gap-4 justify-between font-portfolio_bold">
            <span
              data-scroll
              data-scroll-speed="2"
              className="border-b border-[rgba(0,0,0,.2)] pb-4 w-full"
            >
              {x?.text}
            </span>
            <span
              data-scroll
              data-scroll-speed="2"
              className="text-lg flex items-center justify-between w-full"
            >
              Development
              <span>2023</span>
            </span>
          </h3>
        </div>
      </div>
    );
}


export default ProjectCard;