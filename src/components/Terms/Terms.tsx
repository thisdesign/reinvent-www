import React from "react";
import S from "./Terms.Styled";
import { Container, SanityBlockContent } from "components";
import { SanityBlockContent as SanityBlockContentType } from "types";
import { IntroHead } from "components/Type/Type";

const Terms: React.FC<{ data: SanityBlockContentType }> = ({ data }) => {
  return (
    <Container>
      <S.Wrapper>
        <IntroHead>Terms of Service</IntroHead>
        <br />
        <SanityBlockContent blocks={data} />
      </S.Wrapper>
    </Container>
  );
};

export default Terms;
