import {
  PureBlockContent,
  HomepageHeroText,
  ArrowRight,
  ArrowLeft,
} from "components";
import React from "react";
import { ModuleHomepageHero as ModuleHomepageHeroType } from "types";
import Slider from "react-slick";
import S from "./ModuleHomepageHero.Styled";

type ArrowProps = {
  className: string;
  style: object;
  onClick: () => void;
};

const NextArrow = (props) => {
  const { onClick } = props as ArrowProps;
  return <ArrowRight onClick={onClick} className="arrow right" />;
};
const PreviousArrow = (props) => {
  const { onClick } = props as ArrowProps;
  return <ArrowLeft onClick={onClick} className="arrow left" />;
};

const ModuleHomepageHero: React.FC<{ data: ModuleHomepageHeroType }> = ({
  data,
}) => {
  return (
    <S.Hero>
      <Slider
        infinite={true}
        dots={true}
        slidesToScroll={1}
        arrows={true}
        nextArrow={<NextArrow />}
        prevArrow={<PreviousArrow />}
      >
        {data.content.map((statement) => (
          <S.Statement key={statement._key}>
            <HomepageHeroText center>
              <PureBlockContent blocks={statement.text} />
            </HomepageHeroText>
          </S.Statement>
        ))}
      </Slider>
    </S.Hero>
  );
};

export default ModuleHomepageHero;
