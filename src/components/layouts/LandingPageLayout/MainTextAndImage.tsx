import React from "react";
import styled from "@emotion/styled";
import Button from "components/shared/controls/Button";

const MainTextAndImage = (props: any) => {
  const { text } = props;

  return (
    <MainTextAndImage.Wrapper>
      <div className="text">
        <div>
          <h2>{text}</h2>
          <p>
            EazyWash is your on-demand laundry service middle-man. As a User, we
            provide you the means to meet hundreds of laundry service providers
            with a resolve to provide quality and efficient service. As a
            Vendor, we provide you the means to meet thousands of people who
            require laundry services.
          </p>
          <div className="btn-wrapper">
            <Button
              btn-font-size="normal"
              stretch
              back-color="#0469BD"
              color="white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <div className="image">
        <img src="/landing-page-image.svg" alt="washing-machine" />
      </div>
    </MainTextAndImage.Wrapper>
  );
};

MainTextAndImage.Wrapper = styled.div`
  height: 65vh;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  margin-top: 2vh;
  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42.75rem;
    p {
      font-family: Raleway;
      font-style: normal;
      font-weight: normal;
      font-size: 1rem;
      line-height: 1.25rem;
      margin-top: 1.5rem;
      margin-bottom: 2rem;
      color: #1f1c4b;
    }
    h2 {
      font-family: Lora;
      font-style: normal;
      font-weight: bold;
      font-size: 2.75rem;
      line-height: 3rem;
      color: #1f1c4b;
    }
    .btn-wrapper {
      width: 18.75rem;
      height: 4.0625rem;
    }
  }
  .image {
    width: 37.5rem;
    height: 37.5rem;
  }
`;
export default MainTextAndImage;
