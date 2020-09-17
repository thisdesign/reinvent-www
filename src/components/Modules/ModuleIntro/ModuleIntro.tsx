import React from "react";
import { ModuleIntro as ModuleIntroType } from "types";
import S from "./ModuleIntro.Styled";
import { IntroHead, PureBlockContent } from "components";

const ModuleIntro: React.FC<{ data: ModuleIntroType }> = ({ data }) => {
  return (
    <S.Intro>
      <IntroHead center>
        <PureBlockContent blocks={data.text} />
      </IntroHead>
    </S.Intro>
  );
};

export default ModuleIntro;
