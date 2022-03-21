import { composeStories } from "@storybook/testing-react";
import { render, waitFor } from "@testing-library/react";
import * as stories from "../IndexScreen.stories";

describe("src/components/screens/paidMemberMng/matterForm/index", () => {
  const { IndexScreen: IndexScreenStory } = composeStories(stories);

  describe("display items", () => {
    test("has heading", async () => {
      const screen = render(<IndexScreenStory />);
      await waitFor(() => {
        expect(
          screen.getByRole("heading", {
            name: "案件情報一覧",
          })
        ).toBeInTheDocument();
      });
    });

    test("has table headers", async () => {
      const screen = render(<IndexScreenStory />);
      await waitFor(() => {
        expect(
          screen.getByRole("columnheader", {
            name: "基礎情報(ページ1)",
          })
        ).toBeInTheDocument();
      });
      expect(
        screen.getByRole("columnheader", {
          name: "案件種別選択(ページ2)",
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("columnheader", {
          name: "案件種別毎入力項目(ページ3)",
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("columnheader", {
          name: "支払方法(ページ4)",
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("columnheader", {
          name: "オンボーディング情報(ページ5)",
        })
      ).toBeInTheDocument();
    });
  });
});
