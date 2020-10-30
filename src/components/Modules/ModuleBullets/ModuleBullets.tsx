import { SanityBlockContent, LargeHead } from "components";
import { urlFor } from "lib/sanity";
import React from "react";
import { ModuleBullets as ModuleBulletsType } from "types";
import S from "./ModuleBullets.Styled";

const ModuleBullets: React.FC<{ data: ModuleBulletsType }> = ({ data }) => {
  return (
    <div>
      {data.title && <S.Head>{data.title}</S.Head>}
      {data.content?.map((content) => (
        <S.Bullet key={content._key}>
          <S.BulletInner>
            <S.LeftPane>
              <LargeHead as="h3">{content.title}</LargeHead>
              {content.text && <SanityBlockContent blocks={content.text} />}
            </S.LeftPane>
            <S.TextPane>
              <img src={urlFor(content.icon).url() || ""} />
            </S.TextPane>
          </S.BulletInner>
        </S.Bullet>
      ))}
    </div>
  );
};

export default ModuleBullets;
