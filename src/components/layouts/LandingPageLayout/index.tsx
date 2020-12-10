import React from "react";
import Header from "components/shared/header";
import styled from "@emotion/styled";
import MainTextAndImage from "./MainTextAndImage";

const LandingPageLayout = () => {
  return (
    <LandingPageLayout.Wrapper>
      <Header type="unprotected" />
      <MainTextAndImage text="Washing & drycleaning at your convenience with efficient delivery service" />
    </LandingPageLayout.Wrapper>
  );
};

LandingPageLayout.Wrapper = styled.div`
  padding: 3.625rem 7.9375rem;
`;

export default LandingPageLayout;
