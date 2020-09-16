import React from "react";
import S from "./Terms.Styled";
import { Container, SanityBlockContent } from "components";
import { SanityBlockContent as SanityBlockContentType } from "types";
import { MediumHead } from "components/Type/Type";

const Terms: React.FC<{ data: SanityBlockContentType }> = ({ data }) => {
  return (
    <Container>
      <S.Wrapper>
        <MediumHead>Terms of Service</MediumHead>
        <br />
        <SanityBlockContent blocks={data} />
      </S.Wrapper>
    </Container>
  );
};

export default Terms;
