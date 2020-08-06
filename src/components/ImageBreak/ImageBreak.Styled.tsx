import styled from "styled-components";
import { size } from "style";
import { Layout } from "./ImageBreak";

const Wrapper = styled.div<{ layout: Layout }>`
  display: flex;
  justify-content: ${(p) => (p.layout === "RIGHT" ? "flex-end" : "flex-start")};
  margin: ${size.standard} 0;

  img {
    display: block;
    width: ${(p) => (p.layout === "FULL" ? "100%" : "80%")};
  }
`;

export default {
  Wrapper,
};
