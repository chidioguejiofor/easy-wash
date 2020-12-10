import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { sizes } from "../../../settings/fonts";
import { Button as AntdButton } from "antd";
import { ButtonProps as AntdButtonProps } from "antd/lib/button";
import { Link, LinkProps } from "react-router-dom";
import React from "react";

export interface ButtonProps extends AntdButtonProps {
  "is-bold": "true" | "false" | string;
  /*
   * This specifies the type of the button
   * When it is...
   */
  btntype?: "filled" | "outlined" | "borderless";
  color?: string;
  "back-color"?: string;
  hoverBackColor?: string;
  "btn-font-size"?: keyof typeof sizes | string;
  "border-radius"?: string;
  border?: string;
  stretch?: string;
  "hover-border"?: string;
  padding?: string;
}

export interface ConcreteButtonProps
  extends Omit<ButtonProps, "is-bold" | "hover-border" | "stretch"> {
  isBold?: boolean;
  hoverBorder?: string;
  /**
   * This indicates whether to set the width to 100% or not.
   */
  stretch?: boolean;
}

const parseButtonProps = (props: ButtonProps) => css`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  outline: none;
  padding: ${props.padding || "0.7rem 1.5rem"};
  border: ${props.border || "none"};
  width: ${props.stretch === "false" ? "auto" : "100%"};
  height: 100%;
  border-radius: ${props["border-radius"] || "5px"};
  font-size: ${sizes[props["btn-font-size"] || ""] ||
  props["btn-font-size"] ||
  sizes.small};
  font-family: inherit;
  font-weight: ${props["is-bold"] === "true" ? "bold" : "normal"};
  background-color: ${props["back-color"] || "inherit"};
  color: ${props.color || "inherit"};
  &:focus {
    background-color: ${props["back-color"] || "inherit"};
    color: ${props.color || "inherit"};
  }
  ${props.btntype === "outlined" &&
  css`
    border: 1px solid ${props.color || "white"};
  `}

  &:hover {
    background-color: ${props.hoverBackColor ||
    props["back-color"] ||
    "inherit"};
    color: ${props.color || "inherit"};
    border: ${props["hover-border"] || props.border || "none"};
  }
`;

/**
 * This component represents a button
 */
const CustomButton = styled(AntdButton)<ButtonProps>`
  ${(props) => parseButtonProps(props)}
`;

const Button = ({
  isBold = false,
  stretch = false,
  ...props
}: ConcreteButtonProps) => {
  return (
    <CustomButton
      {...props}
      stretch={stretch ? "true" : "false"}
      is-bold={isBold ? "true" : "false"}
    />
  );
};

/**
 * This component  is a Link that looks like a button.
 * It is best to use this when what we need is a link.
 * This would improve accessibility
 */
export const LinkButton = ({
  isBold = false,
  hoverBorder,
  stretch = true,
  to,
  ...props
}: ConcreteButtonProps & LinkProps) => {
  const CustomLink = styled(Link)<ButtonProps>`
    ${(props) => parseButtonProps(props)}
  `;

  return (
    <CustomLink
      {...props}
      stretch={stretch ? "true" : "false"}
      is-bold={isBold ? "true" : "false"}
      hover-border={hoverBorder}
      to={to as string}
    />
  );
};

export default Button;
