import React from "react";
import styled from "@emotion/styled";
import Button from "components/shared/controls/Button";

const MainTextAndImage = (props: any) => {
  const { text } = props;

  return (
    <MainTextAndImage.Wrapper>
      <div className="text">
        <h2>{text}</h2>

        <Button back-color="#0469BD" color="white">
          Get Started
        </Button>
      </div>
      <div className="image"></div>
    </MainTextAndImage.Wrapper>
  );
};

MainTextAndImage.Wrapper = styled.div`
  height: 65vh;
  background: orange;
  display: flex;
  .text {
    background: brown;
  }
  .image {
    background: greenyellow;
  }
`;
export default MainTextAndImage;
