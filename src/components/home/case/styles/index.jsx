import styled from "styled-components";

export const WorkWrapper = styled.div`
  padding: 10vh 0;
  width: 100%;
  overflow: hidden;
  gap: 10rem;
  .image_container {
    width: 100%;
    /* background: #ececed; */
    height: 40rem;
    padding: 2rem 2rem;
    img {
      object-fit: cover;
      /* width:100%; */
    }
  }

  .work_intro_top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    place-items: center;
    margin: 0 auto;
    grid-gap: 5rem;
    margin: 15rem auto;
    padding: 0 70px;
    &.top1 {
      padding-top: 6rem;
      padding-bottom: 16rem;
    }
    &.top2 {
      padding-top: 6rem;
      padding-bottom: 10rem;

      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
    }
  }
  .work_intro {
    margin-top: 5rem;
    padding: 0 40px 0 40px;
    @media (max-width: 784px) {
      padding: 0 20px;
    }
  }
  .small {
    display: none;

    @media (max-width: 834px) {
      display: flex;
    }
  }

  .btnWrapper {
    margin-top: 8rem;
  }
  .more_btn {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2.5rem 4rem;
    border-radius: 40px;
    background-color: var(--dark-1);
    transition: all 0.4s;
    color: #fff;
    cursor: pointer;
    &:hover {
      background: var(--blue-1);
      color: #fff;
    }
  }
  .top {
    padding: 20px 70px;
  }
  .card_wrapper {
    margin-bottom: 10rem;
  }
  .sidebar_icons {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #455ce9;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    position: absolute;
    z-index: 2000;
    opacity: 0;
    visibility: hidden;
    @media (max-width: 680px) {
      width: 100px;
      height: 100px;
      a {
        font-size: 17px;
      }
    }

    &:hover {
      a {
        color: #fff;
      }
    }
  }
  .large {
    display: flex;

    @media (max-width: 834px) {
      display: none;
    }
  }
  .project_wrapper {
    margin-top: 4rem;
  }
  h3 {
    font-size: 6rem;
    /* width: 100%; */
    line-height: 1.1;
    padding-right: 5rem !important;
    /* width: 70%; */
    @media (max-width: 480px) {
      width: 100%;
    }
    .mask {
      display: inline-flex;
      overflow: hidden;
      margin-right: 1.5rem;
    }
  }
`;
