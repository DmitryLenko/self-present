import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

import { HelloWorld } from "./app";

describe('app', () => {
  it('base', () => {
    expect(toJson(mount(<HelloWorld />))).toMatchSnapshot();
  });
});
