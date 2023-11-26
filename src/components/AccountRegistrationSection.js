import * as React from "react";
import { memo } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

const FrameChild = styled.img`
  position: relative;
  width: 646px;
  height: 646px;
`;
const FrameItem = styled.img`position: relative;
  width: 119.6px;
  height: 120px;
  width: ${(p) => p.propWidth1}
  height: ${(p) => p.propHeight}
`;
const CreateAnAccount = styled.div`
  position: relative;
  font-weight: 500;
`;
const RegisterComplete = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 32px;
  color: var(--color-darkgray-100);
  display: inline-block;
  width: 384px;
`;
const CreateAnAccountParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-base);
`;
const FrameInner = styled(Button)``;
const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-17xl);
`;
const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const GroupParentRoot = styled.div`
  width: 1442px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: left;
  font-size: var(--font-size-21xl);
  color: var(--white);
  font-family: var(--mobile-caption-1-medium);
  width: ${(p) => p.propWidth};
`;

const AccountRegistrationSection = memo(
  ({
    group626793,
    group1000003801,
    createAnAccount,
    registerCompleteYourVerif,
    propWidth,
    propWidth1,
    propHeight,
    showGroupIcon,
  }) => {
    return (
      <GroupParentRoot propWidth={propWidth}>
        {showGroupIcon && <FrameChild alt="" src={group626793} />}
        <GroupContainer>
          <FrameItem
            alt=""
            src={group1000003801}
            propWidth1={propWidth1}
            propHeight={propHeight}
          />
          <FrameParent>
            <CreateAnAccountParent>
              <CreateAnAccount>{createAnAccount}</CreateAnAccount>
              <RegisterComplete>{registerCompleteYourVerif}</RegisterComplete>
            </CreateAnAccountParent>
            <FrameInner sx={{ width: 216 }} color="success" variant="contained">
              Trade Now
            </FrameInner>
          </FrameParent>
        </GroupContainer>
      </GroupParentRoot>
    );
  }
);

export default AccountRegistrationSection;
