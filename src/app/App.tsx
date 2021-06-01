import React from "react"
import Component from "../app/Components/test"

export interface AppProps {
  arg: string;
}

export const App = ({arg}: AppProps):JSX.Element => (
  <h1>
    This is my {arg}
    <Component/>
  </h1>
)