import { SanityBlockContent } from "components";
import { urlFor } from "lib/sanity";
import React from "react";
import { ModuleAbout as ModuleAboutType } from "types";
import S from "./ModuleAbout.Styled";

const ModuleAbout: React.FC<{ data: ModuleAboutType }> = ({ data }) => {
  return (
    <S.About id="about">
      <S.ImageWrap>
        {data.featuredImage && (
          <img
            src={
              urlFor(data.featuredImage).format("jpg").width(1200).url() || ""
            }
          />
        )}
      </S.ImageWrap>
      <S.TextWrap>
        {data.statement && <SanityBlockContent blocks={data.statement} serif />}
        <S.SignatureWrap>
          {data.signature && (
            <img
              src={
                urlFor(data.signature)
                  .width(500)
                  .quality(90)
                  .format("jpg")
                  .url() || ""
              }
            />
          )}
          <div>{data.name}</div>
          <div>
            <span>{data.title}</span>
          </div>
        </S.SignatureWrap>
      </S.TextWrap>
    </S.About>
  );
};

export default ModuleAbout;
