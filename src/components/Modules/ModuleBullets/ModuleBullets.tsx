import { SanityBlockContent } from "components";
import React from "react";
import { ModuleBullets as ModuleBulletsType } from "types";
import S from "./ModuleBullets.Styled";

const ModuleBullets: React.FC<{ data: ModuleBulletsType }> = ({ data }) => {
  return (
    <div>
      {data.content.map((content) => (
        <S.Bullet key={content._key}>
          <div>{content.title}</div>
          <SanityBlockContent serif blocks={content.text} />
        </S.Bullet>
      ))}
    </div>
  );
};

export default ModuleBullets;
