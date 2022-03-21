import { setGlobalConfig } from "@storybook/testing-react";
import "@testing-library/jest-dom/extend-expect"; // ref: https://nextjs.org/docs/testing#:~:text=Optional:%20Extend%20Jest%20with%20custom%20matchers
// Storybook's preview file location
import * as globalStorybookConfig from "./.storybook/preview";
import { server } from "./src/mocks/server";

jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "mock",
  }),
}));

setGlobalConfig(globalStorybookConfig);

// use msw
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
