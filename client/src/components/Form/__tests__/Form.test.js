import React from "react";
import Form from "../Form";
import renderer from "react-test-renderer";

jest.useRealTimers();

describe(`test form component`, function () {
    it("should match snapshot", () => {
      const component = renderer.create(
        <Form
          currentId={123}
          setCurrentId={() => console.log("Empty Function")}
        />
      );
    expect(component()).toMatchSnapshot();
  });
});
