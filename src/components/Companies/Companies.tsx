import React from "react";
import { CompaniesSchema } from "types";
import { urlFor } from "lib/sanity";
import { TextBlock } from "components";
import S from "./Companies.Styled";
const Companies: React.FC<{ data: CompaniesSchema }> = ({ data }) => {
  return (
    <S.Wrapper>
      <TextBlock
        eyebrow={data.eyebrow}
        head={data.main}
        support={data.support}
      />
      <S.ImgWrap>
        {data.logos.map((company) => (
          <img
            key={company._key}
            src={urlFor(company.image).width(600).url()}
            alt={company.name}
          />
        ))}
      </S.ImgWrap>
    </S.Wrapper>
  );
};

export default Companies;
