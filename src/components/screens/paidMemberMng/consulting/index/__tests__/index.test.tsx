import { composeStories } from "@storybook/testing-react";
import { render, waitFor } from "@testing-library/react";
import * as stories from "../IndexScreen.stories";

describe("src/components/screens/paidMemberMng/consulting/index", () => {
  const { IndexScreen: IndexScreenStory } = composeStories(stories);

  describe("display items", () => {
    test("has heading", async () => {
      const screen = render(<IndexScreenStory />);
      await waitFor(() => {
        expect(
          screen.getByRole("heading", {
            name: "案件情報一覧(チラCEO)",
          })
        ).toBeInTheDocument();
      });
    });

    test("has table headers", async () => {
      const screen = render(<IndexScreenStory />);
      await waitFor(() => {
        expect(
          screen.getByRole("columnheader", {
            name: "ID",
          })
        ).toBeInTheDocument();
      });
      expect(
        screen.getByRole("columnheader", {
          name: "紹介文",
        })
      ).toBeInTheDocument();
    });
  });
});
