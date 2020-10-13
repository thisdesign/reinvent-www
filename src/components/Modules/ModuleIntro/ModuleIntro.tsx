import React from "react";
import { ModuleIntro as ModuleIntroType } from "types";
import S from "./ModuleIntro.Styled";
import { PureBlockContent } from "components";
import { IntroHead } from "components/Type/Type";

const ModuleIntro: React.FC<{ data: ModuleIntroType }> = ({ data }) => {
  return (
    <S.Intro>
      <IntroHead center>
        <PureBlockContent
          blocks={data.text}
          component={(children) => (
            <IntroHead center margin-bottom>
              {children}
            </IntroHead>
          )}
        />
      </IntroHead>
    </S.Intro>
  );
};

export default ModuleIntro;
