import {
  PureBlockContent,
  HomepageHeroText,
  ArrowRight,
  ArrowLeft,
} from "components";
import React, { useEffect, useState } from "react";
import { ModuleHomepageHero as ModuleHomepageHeroType } from "types";
import Slider from "react-slick";
import S from "./ModuleHomepageHero.Styled";
import { urlFor } from "lib/sanity";

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

  return (
    <S.Hero>
      <Slider
        infinite={true}
        dots={true}
        slidesToScroll={1}
        arrows={true}
        nextArrow={<NextArrow />}
        prevArrow={<PreviousArrow />}
        afterChange={(i) => setIndex(i)}
      >
        {data.content?.map((statement, i) => {
          return (
            statement.text && (
              <S.Statement key={statement._key} isActive={i === index}>
                {statement.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={statement.video}
                  ></video>
                ) : (
                  <img
                    src={urlFor(statement.background).width(2400).url() || ""}
                  />
                )}
                <HomepageHeroText center>
                  <PureBlockContent blocks={statement.text} />
                </HomepageHeroText>
              </S.Statement>
            )
          );
        })}
      </Slider>
    </S.Hero>
  );
};

export default ModuleHomepageHero;
