import {
  PureBlockContent,
  HomepageHeroText,
  ArrowRight,
  ArrowLeft,
} from "components";
import React, { useEffect, useState } from "react";
import { ModuleHomepageHero as ModuleHomepageHeroType } from "types";
import Slider from "react-slick";
import S, { Pos } from "./ModuleHomepageHero.Styled";
import { urlFor } from "lib/sanity";
import { dec, inc } from "../../../util";

type ArrowProps = {
  className: string;
  style: object;
  onClick: () => void;
};

const NextArrow = (props: any) => {
  const { onClick } = props as ArrowProps;
  return <ArrowRight onClick={onClick} className="arrow right" />;
};
const PreviousArrow = (props: any) => {
  const { onClick } = props as ArrowProps;
  return <ArrowLeft onClick={onClick} className="arrow left" />;
};

const ModuleHomepageHero: React.FC<{ data: ModuleHomepageHeroType }> = ({
  data,
}) => {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => setIndex(0), []);

  const nextSlide = inc(index || 0, data.content?.length || 0);
  const prevSlide = dec(index || 0, data.content?.length || 0);

  return (
    <S.Hero>
      <div>
        {index}
        next:{nextSlide}
        <div onClick={() => setIndex(nextSlide)}>next</div>
        <div>prev</div>
        <S.ImgWrapper>
          {data.content?.map((statement, i) => {
            const pos: Pos = (() => {
              if (i === nextSlide) return "NEXT";
              if (i === prevSlide) return "PREV";
              return "CURRENT";
            })() as Pos;
            return (
              <S.Img
                key={statement._key}
                pos={pos}
                src={urlFor(statement.background).width(2400).url() || ""}
              />
            );
          })}
        </S.ImgWrapper>
        {/* <div>
          {data.content?.map(
            (statement, i) =>
              statement.text && (
                <S.Statement key={statement._key} isActive={i === index}>
                  {statement?.background && (
                    <img
                      src={urlFor(statement.background).width(2400).url() || ""}
                    />
                  )}
                  <HomepageHeroText center>
                    <PureBlockContent blocks={statement.text} />
                  </HomepageHeroText>
                </S.Statement>
              )
          )}
        </div> */}
      </div>
    </S.Hero>
  );
};

export default ModuleHomepageHero;
