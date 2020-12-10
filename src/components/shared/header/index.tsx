import React, { lazy } from "react";
import Unprotected from "./Unprotected";
type HeaderTypes = "protected" | "unprotected";
type HeaderProps = {
  type?: HeaderTypes;
  [otherProps: string]: any;
};

const TYPE_TO_COMPONENT: Record<HeaderTypes, any> = {
  protected: lazy(() => import("./Protected")),
  unprotected: lazy(() => import("./Unprotected")),
};

function Header(props: HeaderProps) {
  const { type = "unprotected", ...otherProps } = props;
  const Component = TYPE_TO_COMPONENT[type];

  return <Component {...otherProps} />;
}

export default Header;
