import { IntroHead, PureBlockContent } from "components";

import React from "react";
import { ModuleAbout as ModuleAboutType } from "types";
import S from "./ModuleAbout.Styled";

const ModuleAbout: React.FC<{ data: ModuleAboutType }> = ({ data }) => {
  return (
    <S.About id="about">
      {data.statement && (
        <PureBlockContent blocks={data.statement} component="h3" />
      )}
    </S.About>
  );
};

export default ModuleAbout;
