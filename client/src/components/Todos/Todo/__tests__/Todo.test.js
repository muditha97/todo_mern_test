import React from "react";
import Todo from "../Todo";
import renderer from "react-test-renderer";

jest.useRealTimers();

describe(`test todo component`, function () {
  it("should match snapshot", () => {
    const component = renderer.create(
      <Todo todo setCurrentId={() => console.log("Empty Function")} />
    );
    expect(component()).toMatchSnapshot();
  });
});
