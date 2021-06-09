import React from 'react'
import Component from '../Components/Component'
export interface AppProps {
    arg: string
}

export const App = ({ arg }: AppProps): JSX.Element => (
    <h1>
        This is my {arg}
        <Component />
    </h1>
)
