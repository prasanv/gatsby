import * as React from "react";

export const GlobalSEO = ({ children, title = "Gatsby Project" }) => (
  <>
    <title>{title}</title>
    {children}
  </>
);
