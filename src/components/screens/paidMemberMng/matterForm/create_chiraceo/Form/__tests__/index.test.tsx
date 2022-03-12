import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";
import * as stories from "../Form.stories";

describe("src/components/screens/paidMemberMng/matterForm/create_chiraceo/Form", () => {
  const { Form: FormStory } = composeStories(stories);

  describe("display elements", () => {
    test("has items", async () => {
      const screen = render(<FormStory />);

      expect(
        screen.getByRole("textbox", { name: /^ハブスポットID/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", { name: /^おつなぎ担当者名/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", { name: /^おつなぎメールアドレス/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", {
          name: /^おつなぎ担当者連絡先\(電話番号\)/,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("radiogroup", { name: /^おつなぎ担当者の役職/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("radiogroup", { name: /^おつなぎ担当者との連絡方法/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", { name: /^稼働開始年月日/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", { name: /^契約終了年月日/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("radiogroup", { name: /^プラン/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("radiogroup", { name: /^導入時のニーズ/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", { name: /^チラCEOの導入背景/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("radiogroup", { name: /^チラCEOに求める価値/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", { name: /^KPI月間アポ数/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", { name: /^平均月額単価/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", { name: /^平均契約月数/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("radiogroup", { name: /^平均リードタイム/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", { name: /^理想の商材ターゲット/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("radiogroup", { name: /^業務提携アポは問題ないか？/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("radiogroup", {
          name: /^相互提案が受けられないサービス/,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("radiogroup", { name: /^直近3ヶ月のリソース状況/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", { name: /^フロント担当者/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("radiogroup", { name: /^顧客の従業員規模/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("radiogroup", { name: /^業種/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("radiogroup", { name: /^商材カテゴリ/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", { name: /^サービス名/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", { name: /^サービスURL/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", { name: /^紹介文/ })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", {
          name: "確認画面へ遷移",
        })
      ).toBeInTheDocument();
    });
  });

  describe("form function", () => {
    describe("submit", () => {
      test.todo("success");
      test.todo("failure");
    });
    describe("validations", () => {
      test.todo("validations");
    });
  });
});
