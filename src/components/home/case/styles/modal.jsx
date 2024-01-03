import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: relative;
  z-index: 400;
  min-height: 50rem;
  background-color: ${(props) => props.backgroundColor || "white"};
  @media (max-width: 1080px) {
    min-height: 40rem;
  }
  @media (max-width: 480px) {
    min-height: 36rem;
  }
  /* Add more styles for the card here */
`;
