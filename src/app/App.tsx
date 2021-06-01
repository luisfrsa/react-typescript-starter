import React from "react";

export interface AppProps {
  arg: string;
}

export const App = ({arg}: AppProps) => (
  <h1>
    This is my {arg}
  </h1>
);