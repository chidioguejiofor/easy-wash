import React from "react";
import styled from "@emotion/styled";
import { ReactComponent as LogoIcon } from "components/svgs/logo-icon.svg";

const Logo = () => {
  return (
    <Logo.Wrapper>
      <LogoIcon /> <span>EazyWash</span>
    </Logo.Wrapper>
  );
};

Logo.Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  > span {
    color: #3086cd;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;

export default Logo;
