import React from "react";
import { MediumHead, Support } from "components";
import S from "./TextBlock.Styled";

const TextBlock: React.FC<{
  eyebrow?: string;
  head: string;
  support: string;
  center?: boolean;
}> = ({ eyebrow, head, support, center }) => {
  return (
    <S.TextWrap center={center}>
      {eyebrow && <p>{eyebrow}</p>}
      <MediumHead>{head}</MediumHead>
      <Support>{support}</Support>
    </S.TextWrap>
  );
};

export default TextBlock;
