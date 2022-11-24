import React from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

// define custom breadcrumbs for certain routes.
// breadcrumbs can be components or strings.

const routes = [
  { path: "/Home", breadcrumb: "Custom Example" }
];
// map & render your breadcrumb components however you want.
export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink key={match.pathname} to={match.pathname}>
          {breadcrumb}
        </NavLink>
      ))}
    </>
  );
};