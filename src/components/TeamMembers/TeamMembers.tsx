import React, { useState, useEffect } from "react";
import { TeamMember } from "types";
import { urlFor } from "lib/sanity";
import S from "./TeamMembers.Styled";
import { SanityBlockContent, ArrowLeft, ArrowRight } from "components";

import { inc, dec } from "../../util";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

const TeamMembers: React.FC<{ members: TeamMember[] }> = ({ members }) => {
  const [currentIndex, setcurrentIndex] = useState<number | null>(null);

  const closeModal = () => setcurrentIndex(null);

  return (
    <>
      <S.Wrapper as="ul">
        {members.map((member, i) => (
          <li key={member._key} onClick={() => setcurrentIndex(i)}>
            <img src={urlFor(member.image).width(900).quality(60).url()} />
            <h4>{member.name}</h4>
            <S.JobTitle>{member.jobTitle}</S.JobTitle>
          </li>
        ))}
      </S.Wrapper>
      <MemberModal
        key={currentIndex}
        closeModal={closeModal}
        members={members}
        currentIndex={currentIndex}
        setcurrentIndex={setcurrentIndex}
      />
    </>
  );
};

const MemberModal: React.FC<{
  members: TeamMember[];
  currentIndex: number | null;
  closeModal: () => void;
  setcurrentIndex: (index: number) => void;
}> = ({ currentIndex, members, closeModal, setcurrentIndex }) => {
  useEffect(() => {
    const targetEl = document.querySelector("#modal-outer");

    if (currentIndex === null) {
      clearAllBodyScrollLocks();
    } else {
      disableBodyScroll(targetEl);
    }
  }, [currentIndex]);

  // esc key listener
  useEffect(() => {
    const handleKey = (e) => {
      if (e.keyCode === 27) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKey, false);
    return () => {
      document.removeEventListener("keydown", handleKey, false);
    };
  }, [closeModal]);

  if (currentIndex === null) return null;

  const nextIndex = inc(currentIndex, members.length);
  const prevIndex = dec(currentIndex, members.length);
  const currentMember = members[currentIndex];

  return (
    <S.ModalOuter onClick={closeModal} id="modal-outer">
      <S.ModalInner onClick={(e) => e.stopPropagation()}>
        <div>
          <S.ProfileTitleWrap>
            <img
              src={urlFor(currentMember.image).width(900).quality(60).url()}
            />
            <div>
              <p>{currentMember.name}</p>
              <S.JobTitle>{currentMember.jobTitle}</S.JobTitle>
            </div>
          </S.ProfileTitleWrap>
          <SanityBlockContent blocks={currentMember.bio} />
        </div>
        <S.Close onClick={closeModal}>×</S.Close>
        <S.NavWrap>
          <div onClick={() => setcurrentIndex(prevIndex)}>
            <ArrowLeft />
            <p>{members[prevIndex].name}</p>
          </div>
          <div onClick={() => setcurrentIndex(nextIndex)}>
            <p>{members[nextIndex].name}</p>
            <ArrowRight />
          </div>
        </S.NavWrap>
      </S.ModalInner>
    </S.ModalOuter>
  );
};

export default TeamMembers;
