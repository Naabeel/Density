import * as React from "react";
import { memo } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

const TradeTogether = styled.span``;
const ThriveTogether = styled.span`
  color: var(--electric-green-primary);
`;
const TradeTogetherThriveContainer = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: -2.1px;
  line-height: 76.88px;
  font-weight: 700;
  font-family: inherit;
`;
const JoinTheFunFilled = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 32.85px;
  color: var(--neutrals-grey-4);
  text-align: left;
`;
const TradeTogetherThriveTogetheParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xl);
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const B = styled.b`
  position: relative;
`;
const Traders = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  line-height: 26px;
  color: var(--color-darkgray-100);
`;
const MnParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xs);
`;
const FrameChild = styled.img`
  position: relative;
  width: 1px;
  height: 88px;
`;
const FrameGroup = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--color-gray-400);
  backdrop-filter: blur(52.5px);
  border: 1px solid var(--color-gray-300);
  box-sizing: border-box;
  width: 1140px;
  height: 171px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  font-size: var(--font-size-13xl);
`;
const FrameButton = styled(Button)``;
const FrameParentRoot = styled.section`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-121xl) 0px;
  gap: var(--gap-63xl);
  background-image: url("/frame-1000005536@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: center;
  font-size: var(--font-size-53xl);
  color: var(--white);
  font-family: var(--mobile-caption-1-medium);
`;

const TradeSection = memo(() => {
  return (
    <FrameParentRoot>
      <FrameWrapper>
        <TradeTogetherThriveTogetheParent>
          <TradeTogetherThriveContainer>
            <TradeTogether>{`Trade Together. `}</TradeTogether>
            <ThriveTogether>Thrive Together.</ThriveTogether>
          </TradeTogetherThriveContainer>
          <JoinTheFunFilled>
            Join the fun-filled community on our platform.
          </JoinTheFunFilled>
        </TradeTogetherThriveTogetheParent>
      </FrameWrapper>
      <FrameGroup>
        <MnParent>
          <B>10,000+</B>
          <Traders>Traders</Traders>
        </MnParent>
        <FrameChild alt="" src="/vector-11.svg" />
        <MnParent>
          <B>100Mn</B>
          <Traders>Daily Volume Traded</Traders>
        </MnParent>
        <FrameChild alt="" src="/vector-11.svg" />
        <MnParent>
          <B>Daily</B>
          <Traders>Trade Analysis</Traders>
        </MnParent>
        <FrameChild alt="" src="/vector-11.svg" />
        <MnParent>
          <B>Live</B>
          <Traders>Signals</Traders>
        </MnParent>
      </FrameGroup>
      <FrameButton color="success" variant="contained">
        Join community
      </FrameButton>
    </FrameParentRoot>
  );
});

export default TradeSection;
