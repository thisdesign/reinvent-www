import { LargeHead, SanityBlockContent } from "components";
import React from "react";
import { ModuleTextPage as ModuleTextPageType } from "types";
import S from "./ModuleTextPage.Styled";

const ModuleTextPage: React.FC<{ data: ModuleTextPageType }> = ({ data }) => {
  return (
    <S.Wrapper>
      <LargeHead>{data.title}</LargeHead>
      {data.text && <SanityBlockContent blocks={data.text} />}
    </S.Wrapper>
  );
};

export default ModuleTextPage;
