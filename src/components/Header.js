import * as React from "react";
import { memo } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

const FrameIcon = styled.img`
  position: relative;
  width: 100px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Career = styled.div`
  position: relative;
`;
const CareerParent = styled.nav`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-15xl);
  text-align: left;
  font-size: var(--mobile-subheading-medium-size);
  color: var(--color-gray-100);
  font-family: var(--mobile-caption-1-medium);
`;
const FrameChild = styled(Button)``;
const FrameParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-37xl);
`;
const TopNavRoot = styled.header`
  align-self: stretch;
  background-color: var(--color-darkolivegreen);
  backdrop-filter: blur(40px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xl) var(--padding-197xl);
  gap: var(--gap-368xl);
`;

const Header = memo(() => {
  return (
    <TopNavRoot>
      <FrameIcon alt="" src="/frame.svg" />
      <FrameParent>
        <CareerParent>
          <Career>Career</Career>
          <Career>Blogs</Career>
          <Career>Leaderboard</Career>
          <Career>Fees</Career>
        </CareerParent>
        <FrameChild color="success" variant="contained">
          Trade Now
        </FrameChild>
      </FrameParent>
    </TopNavRoot>
  );
});

export default Header;
