import React, { lazy, Suspense } from "react";
import Spinner from "components/shared/loading/Spinner";

const UnprotectedPages = lazy(() => import("./UnprotectedPages"));
const ProtectedPages = lazy(() => import("./ProtectedPages"));

const Pages = () => {
  const loadingUserData = false;

  if (loadingUserData) {
    return <Spinner info="Loading User data" />;
  }

  const userIsLoggedIn = false;

  if (userIsLoggedIn) {
    return <ProtectedPages />;
  }

  return (
    <Suspense fallback={<Spinner info="Loading pages" />}>
      {userIsLoggedIn ? <ProtectedPages /> : <UnprotectedPages />}
    </Suspense>
  );
};

export default Pages;
