import React from "react";
import { ContactSchema } from "types";
import { TextBlock } from "components";
import S from "./Contact.Styled";
import { urlFor } from "lib/sanity";

const Contact: React.FC<{ data: ContactSchema }> = ({ data }) => {
  return (
    <S.Wrapper
      bg={urlFor(data.backgroundImage)
        .width(1700)
        .auto("format")
        .format("jpg")
        .quality(80)
        .url()}
    >
      <TextBlock
        center
        eyebrow={data.eyebrow}
        head={data.main}
        support={data.support}
      />
    </S.Wrapper>
  );
};

export default Contact;
