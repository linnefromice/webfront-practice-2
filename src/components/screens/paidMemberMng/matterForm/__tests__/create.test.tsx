import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";
import * as stories from "../create.stories";

describe("src/components/screens/paidMemberMng/matterForm/create", () => {
  const { CreateScreen } = composeStories(stories);

  describe("display elements", () => {
    test("has heading", async () => {
      const screen = render(<CreateScreen />);
      expect(
        await screen.getByRole("heading", {
          name: "案件情報フォーム",
        })
      ).toBeInTheDocument();
    });

    test("has items", async () => {
      const screen = render(<CreateScreen />);
      expect(
        screen.getByRole("textbox", {
          name: /今回受注企業を紹介くださった企業/i,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", {
          name: /契約日/i,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("radiogroup", {
          name: /契約種別/i,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", {
          name: /契約獲得者/i,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", {
          name: "データ共有",
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", {
          name: /音源ラベル/i,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", {
          name: /音源URL/i,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", {
          name: /初回請求額/i,
        })
      ).toBeInTheDocument();
      // check dropzones
      // - 申込書PDFデータ
      // - 名刺写真
      // - クロージングで出した資料
      const dropzones = await screen.getAllByRole("button", {
        name: "作成したファイルをここにドロップ or ファイルを選択",
      });
      expect(dropzones.length).toBe(3);
    });
  });
});
