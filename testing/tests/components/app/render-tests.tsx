import * as React from "react";
import * as Adapter from "enzyme-adapter-react-16";
import { ReactWrapper, configure, mount } from "enzyme";
import App from "../../../../src/components/app";

describe("Tests the rendering of the app component", () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        configure({ adapter: new Adapter() });
    });
    
    it("should render a router with a nav div and a route div and no running workout div when not in workout mode", () => {
        wrapper = mount(<App />);

        console.log(wrapper.debug());
    });

    it("should render a running workout div when isRunning is true", () => {
        fail();
    });
});