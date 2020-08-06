import styled from "styled-components";
import { size } from "style";
import { Layout } from "./ImageBreak";

const Wrapper = styled.div<{ layout: Layout }>`
  display: flex;
  justify-content: ${(p) => (p.layout === "RIGHT" ? "flex-end" : "flex-start")};
  margin: ${size.standard} 0;

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
