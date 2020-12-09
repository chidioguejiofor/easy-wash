import styled from "@emotion/styled";
import React from "react";
import { Link } from "components/shared/Link";
import { LinkButton } from "components/shared/controls/Button";
import Logo from "components/shared/media/Logo";
import { LOGIN, SIGNUP } from "pages/paths";

function UnprotectedHeader() {
  return (
    <UnprotectedHeader.Wrapepr>
      <Link to="/">
        <Logo />
      </Link>

      <nav>
        <main>
          <Link to="/">Home</Link>
          <Link to="/customers">Customers</Link>
          <Link to="/vendors">Vendors</Link>
          <LinkButton to={LOGIN} border="1px solid #0C0C33;">
            Sign in
          </LinkButton>

          <LinkButton to={SIGNUP} back-color="#0469BD" color="white">
            Sign up
          </LinkButton>
        </main>
      </nav>
    </UnprotectedHeader.Wrapepr>
  );
}

UnprotectedHeader.Wrapepr = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > nav > main {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 3rem;
    align-items: center;
  }
`;

export default UnprotectedHeader;
