import { ReactWrapper, configure, mount } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import App from "../../src/components/app";

describe("Tests that tests work", () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        configure({ adapter: new Adapter() });
    });

    it("should pass", () => {
        wrapper = mount(<App />);

        expect(wrapper.debug()).toBe(null);
    })
});