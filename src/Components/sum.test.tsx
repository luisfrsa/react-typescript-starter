import * as React from "react"

import {sum} from "./sum"
import {render} from "@testing-library/react"
import Component from "./Component"

describe("should test", () => {
    it("1", () => {
        expect(1).toBe(1)
    })
    it("sum", () => {
        expect(sum(1, 1)).toBe(2)
    })
    it("render", () => {
        const {getByText} = render(<Component/>)
        getByText("Hello")
    })
})
