import * as React from "react";
import { Link } from "gatsby";
import Header from "../components/Header";
import TradeHeroContainer from "../components/TradeHeroContainer";
import DynamicComponent from "../components/DynamicComponent";
import styled from "styled-components";
import DerivativeTradingCard from "../components/DerivativeTradingCard";
import ContainerCard from "../components/ContainerCard";
import TradeMorePayLessSection from "../components/TradeMorePayLessSection";
import ExploreMarketsSection from "../components/ExploreMarketsSection";
import Container from "../components/Container";
import CryptoCard from "../components/CryptoCard";
import SectionCard from "../components/SectionCard";
import SectionCard2 from "../components/SectionCard2";
import SectionCard3 from "../components/SectionCard3";
import SectionCard1 from "../components/SectionCard1";
import EarnMoneySection from "../components/EarnMoneySection";
import TradeSection from "../components/TradeSection";
import VisionariesSection1 from "../components/VisionariesSection1";
import SectionForm from "../components/SectionForm";
import FormContainer1 from "../components/FormContainer1";

const GroupChild = styled.img`
  position: absolute;
  height: 102.2%;
  width: 103.44%;
  top: -1.09%;
  right: -1.81%;
  bottom: -1.11%;
  left: -1.63%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GroupItem = styled.div`
  position: absolute;
  height: 3.09%;
  width: 1.01%;
  top: 59.02%;
  right: 98.99%;
  bottom: 37.89%;
  left: 0%;
  border-radius: 50%;
  background-color: var(--color-yellowgreen);
  filter: blur(4.47px);
  opacity: 0.4;
`;
const GroupInner = styled.div`
  position: absolute;
  height: 4.29%;
  width: 1.01%;
  top: 23.13%;
  right: -1.01%;
  bottom: 72.59%;
  left: 100%;
  border-radius: 50%;
  background-color: var(--white);
  filter: blur(4.47px);
  transform: rotate(180deg);
  transform-origin: 0 0;
  opacity: 0.5;
`;
const GroupIcon = styled.img`
  position: absolute;
  height: 58.47%;
  width: 76.47%;
  top: 0%;
  right: 13%;
  bottom: 41.53%;
  left: 10.53%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const OneApp = styled.p`
  margin: 0;
`;
const OneAppEndlessContainer = styled.div`
  position: absolute;
  top: 61.96%;
  left: 0%;
  letter-spacing: -0.8px;
  line-height: 40.2px;
  font-weight: 300;
`;
const GroupDiv = styled.div`
  position: absolute;
  height: 56.8%;
  width: 61.51%;
  top: 20.95%;
  right: 19.1%;
  bottom: 22.25%;
  left: 19.39%;
`;
const GroupContainer = styled.div`
  position: relative;
  width: 276.4px;
  height: 560px;
`;
const GroupParent = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-101xl) 0px 240px;
  gap: var(--gap-101xl);
  text-align: center;
  font-size: var(--font-size-14xl-5);
  color: var(--white);
  font-family: var(--mobile-caption-1-medium);
`;
const Unlock = styled.span``;
const Span = styled.span`
  color: #d4f938;
`;
const NewFrontiers = styled.span`
  color: var(--white);
`;
const UnlockNewFrontiersContainer = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: -2.1px;
  line-height: 76.88px;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  width: 846px;
`;
const AreYouA = styled.div`
  position: relative;
  font-size: 22.37px;
  line-height: 32.85px;
  color: var(--neutrals-grey-4);
  display: inline-block;
  width: 659.1px;
`;
const UnlockNewFrontiersParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xl);
`;
const TextureIcon = styled.img`
  position: absolute;
  height: 100%;
  top: 0%;
  bottom: 0%;
  left: calc(50% - 565px);
  max-height: 100%;
  width: 1130px;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const FrameGroup = styled.div`
  position: relative;
  width: 1130px;
  height: 510px;
`;
const FrameParent = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-131xl) 0px;
  gap: var(--gap-45xl);
  text-align: center;
  font-size: var(--font-size-53xl);
  color: var(--electric-green-primary);
  font-family: var(--mobile-caption-1-medium);
`;
const LandingPageRoot = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  position: relative;
  background: radial-gradient(50% 50% at 50% 50%, #58f28a, #000);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const LandingPage = () => {
  return (
    <LandingPageRoot to="/">
      <Header />
      <TradeHeroContainer />
      <DynamicComponent />
      <GroupParent>
        <GroupContainer>
          <GroupChild alt="" src="/group-1000003808.svg" />
          <GroupItem />
          <GroupInner />
          <GroupDiv>
            <GroupIcon alt="" src="/group-18145967.svg" />
            <OneAppEndlessContainer>
              <OneApp>One App.</OneApp>
              <OneApp>{`Endless `}</OneApp>
              <OneApp>Possibilities</OneApp>
            </OneAppEndlessContainer>
          </GroupDiv>
        </GroupContainer>
        <DerivativeTradingCard />
        <ContainerCard />
      </GroupParent>
      <TradeMorePayLessSection />
      <ExploreMarketsSection />
      <FrameParent>
        <UnlockNewFrontiersParent>
          <UnlockNewFrontiersContainer>
            <Unlock>Unlock</Unlock>
            <Span>{` `}</Span>
            <NewFrontiers>New Frontiers.</NewFrontiers>
          </UnlockNewFrontiersContainer>
          <AreYouA>
            Are you a stock trader looking for new opportunities to make money?
            We got you covered!
          </AreYouA>
        </UnlockNewFrontiersParent>
        <Container />
        <FrameGroup>
          <CryptoCard />
          <TextureIcon alt="" src="/texture2@2x.png" />
        </FrameGroup>
      </FrameParent>
      <SectionCard />
      <SectionCard2 />
      <SectionCard3 />
      <SectionCard1 />
      <EarnMoneySection />
      <TradeSection />
      <VisionariesSection1 />
      <SectionForm />
      <FormContainer1 />
    </LandingPageRoot>
  );
};

export default LandingPage;
