import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

import { Link } from "react-router-dom";
import { projectdata } from "../../data/projectdata";

const Card = ({ index }) => {
  return (
    <div
      className={
        index === 1 || index === 3
          ? "card relative w-100 active"
          : "card relative w-100"
      }
    >
      <div
        style={{
          background: `${projectdata[index]?.color}`,
          // padding: "5rem 4rem",
        }}
        className="image_wrapper flex item-center justify-center relative w-100"
      >
        <Link
          target="_blank"
          to={`${projectdata[index]?.website}`}
          style={{
            background: `${projectdata[index]?.color}`,
          }}
          className="card_btn1 fs-16 flex justify-center item-center text-light"
        >
          <div className="text1 text-bold flex itemcenter gap-1 text-center">
            Live Site
            <HiArrowUpRight />
          </div>
        </Link>
        {projectdata[index]?.subtext && (
          <h3 className="text-extra-bold subtext absolute">
            {projectdata[index]?.subtext}
          </h3>
        )}

        {/* <div className="image_background absolute w-100 h-100"></div> */}
        <img
          // style={{ width: "95%" }}
          src={projectdata[index]?.image}
          alt=""
          className="w-100"
        />
      </div>
      <div className="card_bottom w-100">
        <div className="w-85 auto flex column gap-3">
          <div className="flex item-center gap-2">
            <span className="block text-grey fs-16 text-extra-bold">01</span>
            <div className="span_length"></div>
            <span className="block text-grey fs-16 text-extra-bold">
              {projectdata[index]?.text}
            </span>
          </div>
          <h3 className="text-extra-bold">{projectdata[index]?.title}</h3>
          <p className="text-light fs-18 text-grey">
            {projectdata[index]?.description}
          </p>
          {/* roles */}
          <div className="flex column gap-2 w-100">
            <div className="flex w-100 column gap-1">
              <span className="block fs-12 text-extra-bold">ROLES</span>
              <div
                style={{ gap: "5px", flexWrap: "wrap" }}
                className="w-100 flex item-center flex-wrap"
              >
                {projectdata[index]?.roles?.map((x) => {
                  return <div className="tab fs-12 text-light">{x}</div>;
                })}
              </div>
            </div>
            <div className="flex w-100 column gap-1">
              <span className="block fs-12 text-extra-bold">TECH STACK</span>
              <div
                style={{ gap: "5px", flexWrap: "wrap" }}
                className="w-100 flex item-center flex-wrap"
              >
                {projectdata[index]?.technologies?.map((x) => {
                  return <div className="tab fs-12 text-light">{x}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
