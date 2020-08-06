import React from "react";
import { MediumHead, Support, Eyebrow } from "components";
import S from "./TextBlock.Styled";

const TextBlock: React.FC<{
  eyebrow?: string;
  head: string;
  support: string;
  center?: boolean;
  margin?: boolean;
}> = ({ eyebrow, head, support, center, margin = true }) => {
  return (
    <S.TextWrap margin={margin}>
      {eyebrow && <Eyebrow center={center}>{eyebrow}</Eyebrow>}
      <MediumHead center={center}>{head}</MediumHead>
      <Support center={center}>{support}</Support>
    </S.TextWrap>
  );
};

export default TextBlock;
