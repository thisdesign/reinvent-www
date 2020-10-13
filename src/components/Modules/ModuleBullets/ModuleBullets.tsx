import { SanityBlockContent, LargeHead } from "components";
import { urlFor } from "lib/sanity";
import React from "react";
import { ModuleBullets as ModuleBulletsType } from "types";
import S from "./ModuleBullets.Styled";

const ModuleBullets: React.FC<{ data: ModuleBulletsType }> = ({ data }) => {
  return (
    <div>
      {data.content.map((content) => (
        <S.Bullet key={content._key}>
          <S.BulletInner>
            <S.ImagePane>
              {content.icon && (
                <img src={urlFor(content.icon).width(800).url() || ""} />
              )}
            </S.ImagePane>
            <S.TextPane>
              <LargeHead>{content.title}</LargeHead>
              <SanityBlockContent blocks={content.text} />
            </S.TextPane>
          </S.BulletInner>
        </S.Bullet>
      ))}
    </div>
  );
};

export default ModuleBullets;
