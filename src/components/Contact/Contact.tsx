import React from "react";
import { ContactSchema } from "types";
import { TextBlock, AnchorButton } from "components";
import S from "./Contact.Styled";
import { urlFor } from "lib/sanity";

const Contact: React.FC<{ data: ContactSchema; emailAddress: string }> = ({
  data,
  emailAddress,
}) => {
  return (
    <S.Wrapper>
      <TextBlock
        margin={false}
        center
        eyebrow={data.eyebrow}
        head={data.main}
        support={data.support}
      />
      <AnchorButton light href={`mailto:${emailAddress}`}>
        {data.ctaText}
      </AnchorButton>
    </S.Wrapper>
  );
};

export default Contact;
