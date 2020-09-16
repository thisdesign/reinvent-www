import React from "react";
import { ModuleCompanies } from "types";
import { urlFor } from "lib/sanity";
import S from "./ModuleCompanies.Styled";

const Companies: React.FC<{ data: ModuleCompanies }> = ({ data }) => {
  return (
    <S.Wrapper>
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
