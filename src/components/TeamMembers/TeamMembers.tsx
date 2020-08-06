import React, { useState } from "react";
import { TeamMember } from "types";
import { urlFor } from "lib/sanity";
import S from "./TeamMembers.Styled";
import { SanityBlockContent } from "components";
import { MediumHead, Support } from "components/Type/Type";

const TeamMembers: React.FC<{ members: TeamMember[] }> = ({ members }) => {
  const [currentKey, setCurrentKey] = useState<string | null>(null);
  const closeModal = () => setCurrentKey(null);
  return (
    <>
      <S.Wrapper as="ul">
        {members.map((member) => (
          <li key={member._key} onClick={() => setCurrentKey(member._key)}>
            <img src={urlFor(member.image).width(900).quality(60).url()} />
            <h4>{member.name}</h4>
            <S.JobTitle>{member.jobTitle}</S.JobTitle>
          </li>
        ))}
      </S.Wrapper>
      <MemberModal
        closeModal={closeModal}
        data={members.filter((m) => m._key === currentKey)[0] || null}
      />
    </>
  );
};

const MemberModal: React.FC<{
  data: TeamMember | null;
  closeModal: () => void;
}> = ({ data, closeModal }) => {
  if (!data) return null;
  return (
    <>
      <S.TeamMemberBio>
        <div>
          <MediumHead>{data.name}</MediumHead>
          <Support>{data.jobTitle}</Support>
        </div>
        <img src={urlFor(data.image).width(900).quality(60).url()} />
        <SanityBlockContent blocks={data.bio} />
      </S.TeamMemberBio>
      <S.Shadow onClick={closeModal} />
    </>
  );
};

export default TeamMembers;
