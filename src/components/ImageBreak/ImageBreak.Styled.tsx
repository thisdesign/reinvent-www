import styled from "styled-components";
import { size, tr } from "style";
import { Layout } from "./ImageBreak";

const Wrapper = styled.div<{ layout: Layout }>`
  display: flex;
  justify-content: ${(p) => (p.layout === "RIGHT" ? "flex-end" : "flex-start")};
  margin: ${size.standard} 0;

  /* Transitions */
  opacity: 0;
  transform: translate3d(0, 1rem, 0);
  transition: ${tr(["transform", "opacity"], 2)};

  .mounted & {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  div {
    overflow: hidden;
    width: ${(p) => (p.layout === "FULL" ? "100%" : "80%")};
  }

  img {
    display: block;
    width: 100%;
  }
`;

export default {
  Wrapper,
};
