import React, { useEffect, useRef } from "react";
import S from "./ImageBreak.Styled";
import { SanityImage } from "types";
import { urlFor } from "lib/sanity";

export type Layout = "FULL" | "RIGHT" | "LEFT";

const useZoom = () => {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current && imgRef.current) {
        const { bottom } = ref.current.getBoundingClientRect();
        const scaleFactor = bottom / 4000 + 1;

        imgRef.current.style.transform = `scale(${
          scaleFactor < 1 ? 1 : scaleFactor
        })`;
      }
    };

    handleScroll();

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { ref, imgRef };
};

const ImageBreak: React.FC<{
  alt: string;
  layout: Layout;
  src: SanityImage;
}> = ({ layout, src, alt }) => {
  const { ref, imgRef } = useZoom();
  return (
    <S.Wrapper layout={layout} ref={ref}>
      <div>
        <img
          ref={imgRef}
          src={urlFor(src).width(1700).auto("format").format("jpg").url()}
          alt={alt}
        />
      </div>
    </S.Wrapper>
  );
};

export default ImageBreak;
