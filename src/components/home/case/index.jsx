import React, { useEffect, useState } from "react";
import { projectdata } from "../../../data/projectdata";
import { WorkWrapper } from "./styles";
import Project from "./project";
import Modal from "./modal";
import Card from "./card";

const galleryData = [
  "/twitter/profile_1.jpg",
  "/twitter/profile_1.jpg",
  "/twitter/profile_1.jpg",
  "/twitter/profile_1.jpg",
  "/twitter/profile_1.jpg",
  "/twitter/profile_1.jpg",
  "/twitter/profile_1.jpg",
];

export default function Case() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <WorkWrapper id="about" className='flex w-100 column gap-4'>
      <div className="w-100">
        <div className="work_intro_top w-90 auto">
          <div className="w-100 auto flex column gap-4">
            <h4 className="fs-24 text-extra-bold text-dark">
              My experience comes from working with companies to, solve problems
              on their product and help them ship, redesign, alpha products or
              new features. One of, my goals during a project is to make sure we
              are, always on the same page by documenting and, communicating
              about the journey,
            </h4>
            <p style={{lineHeight:"1.6"}} className="fs-20 text-light text-dar">
              My experience comes from working with companies to solve problems
              on their product and help them ship redesign, alpha products or
              new features. One of my goals during a project is to make sure we
              are always on the same page by documenting and communicating about
              the journey.
            </p>
          </div>

          <div className="w-100">
            <div className="image_container flex item-center justify-center">
              <img src="/eddy.jpeg" alt="" className="w-100" />
            </div>
            {/* <img src="/eddy-1.jpeg" alt="" className="w-100" /> */}
          </div>
        </div>
      </div>

      <div className="work_intro item-start justify-center flex w-90 auto column gap-4">
        <div className="w-100 top">
          <h4 className="text-extra-bold fs-24 text-dark">My Recent Works / Projects</h4>
        </div>
        {/* projects */}
        <div className="w-100 small flex column gap-2">
          {projectdata.map((x, index) => {
            return <Card data={x} index={index} />;
          })}
        </div>
        <div className="w-100 large">
          <div className="w-100 project_wrapper auto flex column">
            {projectdata.map((x, index) => {
              return (
                <Project title={x.text} index={index} setModal={setModal} />
              );
            })}
            <div className="w-100 py-2 btnWrapper flex item-center justify-center">
              <div className="more_btn fs-16 text-extra-bold text-center text-dark">
                More projects
              </div>
            </div>
          </div>
          {/* modals */}
          <Modal projects={projectdata} modal={modal} />
        </div>
      </div>
      {/* .w-100. */}
    </WorkWrapper>
  );
}
