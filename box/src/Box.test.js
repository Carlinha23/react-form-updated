import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

it("renders without crashing", function() {
    render(<Box />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<Box />);
    expect(asFragment ()).toMatchSnapshot()
})