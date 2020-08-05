import React from "react";
import { TeamMember } from "types";
import { urlFor } from "lib/sanity";
import S from "./TeamMembers.Styled";

const TeamMembers: React.FC<{ members: TeamMember[] }> = ({ members }) => {
  console.log();

  return (
    <S.Wrapper as="ul">
      {members.map((member) => (
        <li key={member._key}>
          <img src={urlFor(member.image).width(900).quality(60).url()} />
          <h4>{member.name}</h4>
          <S.JobTitle>{member.jobTitle}</S.JobTitle>
        </li>
      ))}
    </S.Wrapper>
  );
};

export default TeamMembers;
