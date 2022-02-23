import { composeStories } from "@storybook/testing-react";
import { render, within } from "@testing-library/react";
import * as stories from "../AppBar.stories";

describe("AppBar", () => {
  const { AppBar } = composeStories(stories);

  describe("When pc,", () => {
    test("has contents", async () => {
      const screen = render(<AppBar />);

      const avatarIcon = screen.getByRole("banner");
      expect(within(avatarIcon).getByText("A")).toBeInTheDocument();
      expect(
        screen.queryByRole("tooltip", { name: "Account Name" })
      ).not.toBeInTheDocument();

      // user.hover(avatarIcon);
      // expect(
      //   await screen.findByRole("tooltip", { name: "Account Name" })
      // ).toBeInTheDocument();
    });
  });
});
