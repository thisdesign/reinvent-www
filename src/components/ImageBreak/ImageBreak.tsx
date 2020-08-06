import React from "react";
import S from "./ImageBreak.Styled";
import { SanityImage } from "types";
import { urlFor } from "lib/sanity";

export type Layout = "FULL" | "RIGHT" | "LEFT";

const ImageBreak: React.FC<{
  alt: string;
  layout: Layout;
  src: SanityImage;
}> = ({ layout, src, alt }) => {
  return (
    <S.Wrapper layout={layout}>
      <img
        src={urlFor(src).width(1700).auto("format").format("jpg").url()}
        alt={alt}
      />
    </S.Wrapper>
  );
};

export default ImageBreak;
