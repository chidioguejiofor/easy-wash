import React from "react";
import styled from "@emotion/styled";
import Header from "components/shared/header";

type UnprotectedPageLayoutProps = {
  children: React.ReactNode;
};

const UnprotectedPageLayout = (props: UnprotectedPageLayoutProps) => {
  const { children } = props;

  return (
    <UnprotectedPageLayout.Wrapper>
      <div>{children}</div>
    </UnprotectedPageLayout.Wrapper>
  );
};

UnprotectedPageLayout.Wrapper = styled.div``;

export default UnprotectedPageLayout;
