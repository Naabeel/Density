import * as React from "react";
import { memo } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import CardContainer from "./CardContainer";

const ExploreTheMarkets = styled.p`
  margin: 0;
`;
const LikeItIs = styled.span``;
const Playground = styled.span`
  color: var(--electric-green-primary);
`;
const ExploreTheMarketsContainer = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: -2.1px;
  line-height: 76.88px;
  font-weight: 700;
  font-family: inherit;
`;
const SearchForYour = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 32.85px;
  color: var(--neutrals-grey-4);
  display: inline-block;
  width: 659.1px;
`;
const ExploreTheMarketsLikeItIsParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const RectangleIcon = styled.img`
  position: absolute;
  top: 368.3px;
  left: 3.9px;
  width: 1131px;
  height: 303px;
  object-fit: cover;
`;
const ChartIcon = styled.img`
  position: absolute;
  top: 20.3px;
  left: 122.9px;
  width: 892.4px;
  height: 445.8px;
`;
const GroupChild = styled.img`
  position: absolute;
  top: 170.3px;
  left: 137.9px;
  width: 802px;
  height: 430px;
  opacity: 0.3;
  mix-blend-mode: difference;
`;
const GroupItem = styled.img`
  position: absolute;
  top: 118.3px;
  left: 104.9px;
  width: 868px;
  height: 482px;
  opacity: 0.05;
  mix-blend-mode: difference;
`;
const FrameGroup = styled.div`
  position: absolute;
  top: 224.2px;
  left: 138px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const TextureIcon = styled.img`
  position: absolute;
  height: 97.12%;
  top: 0%;
  bottom: 2.88%;
  left: calc(50% - 567.45px);
  max-height: 100%;
  width: 1087px;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const RectangleParent = styled.div`
  position: relative;
  width: 1134.9px;
  height: 671.3px;
  text-align: left;
  font-size: var(--mobile-subheading-medium-size);
  color: var(--neutrals-grey-91);
`;
const FrameChild = styled(Button)``;
const FrameParentRoot = styled.section`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-121xl) 0px;
  gap: var(--gap-45xl);
  text-align: center;
  font-size: var(--font-size-53xl);
  color: var(--white);
  font-family: var(--mobile-caption-1-medium);
`;

const ExploreMarketsSection = memo(() => {
  return (
    <FrameParentRoot>
      <ExploreTheMarketsLikeItIsParent>
        <ExploreTheMarketsContainer>
          <ExploreTheMarkets>Explore the Markets</ExploreTheMarkets>
          <ExploreTheMarkets>
            <LikeItIs>{`like it is your `}</LikeItIs>
            <Playground>Playground.</Playground>
          </ExploreTheMarkets>
        </ExploreTheMarketsContainer>
        <SearchForYour>
          Search for your favorite coins and stay ahead of the market
        </SearchForYour>
      </ExploreTheMarketsLikeItIsParent>
      <RectangleParent>
        <RectangleIcon alt="" src="/rectangle@2x.png" />
        <ChartIcon alt="" src="/chart.svg" />
        <GroupChild alt="" src="/vector-1173.svg" />
        <GroupItem alt="" src="/vector-1174.svg" />
        <FrameGroup>
          <CardContainer
            cryptoImageUrl="/group-626505.svg"
            cryptoSymbol="Bitcoin"
            cryptoPairImageUrl="BTC/USDT"
            dimensionImageUrl="/vector4.svg"
            price="$25,776.80"
            cryptoLogoImageUrl="https://coinmarketcap.com/currencies/bitcoin/#markets"
            linkTarget="_blank"
            financialValue="$8.5B"
            percentage="23.1%"
          />
          <CardContainer
            cryptoImageUrl="/group-6265051.svg"
            cryptoSymbol="Solana"
            cryptoPairImageUrl="SOL/USDT"
            dimensionImageUrl="/vector5.svg"
            price="$18.07"
            financialValue="$372.8M"
            percentage="02.1%"
            propHeight="33.9px"
            propTextDecoration="unset"
          />
          <CardContainer
            cryptoImageUrl="/group-6265052.svg"
            cryptoSymbol="Ethereum"
            cryptoPairImageUrl="ETH/USDT"
            dimensionImageUrl="/vector4.svg"
            price="$1,607.11"
            cryptoLogoImageUrl="https://coinmarketcap.com/currencies/ethereum/#markets"
            linkTarget="_blank"
            financialValue="$4.6B"
            percentage="12.1%"
            propHeight="28.3px"
            propTextDecoration="none"
          />
        </FrameGroup>
        <TextureIcon alt="" src="/texture1@2x.png" />
      </RectangleParent>
      <FrameChild color="success" variant="contained">
        Explore Markets
      </FrameChild>
    </FrameParentRoot>
  );
});

export default ExploreMarketsSection;
