import React from "react";
import renderer from "react-test-renderer";
import { productsMock } from "__mocks__";
import BasicCard from "../BasicCard";

describe("BasicCard", () => {
  it("should correctly match snapshot", () => {
    const tree = renderer.create(<BasicCard {...productsMock[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
