import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";
import * as stories from "../Confirmation.stories";

describe("src/components/screens/paidMemberMng/matterForm/create_chiraceo/Confirmation", () => {
  const { Confirmation: ConfirmationStory } = composeStories(stories);

  describe("display elements", () => {
    test("has heading", async () => {
      const screen = render(<ConfirmationStory />);

      expect(
        await screen.getByRole("heading", {
          name: "入力内容確認",
        })
      ).toBeInTheDocument();
    });

    test.todo("has items");
  });
});
