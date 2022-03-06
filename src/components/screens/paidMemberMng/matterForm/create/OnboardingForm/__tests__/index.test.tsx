import { createTheme, ThemeProvider } from "@mui/material";
import { composeStories } from "@storybook/testing-react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contents } from "..";
import * as stories from "../OnboardingForm.stories";

describe("src/components/screens/paidMemberMng/matterForm/create/OnboardingForm", () => {
  const { OnboardingForm: OnboardingFormStory } = composeStories(stories);

  describe("display elements", () => {
    test("has title", async () => {
      const screen = render(<OnboardingFormStory />);

      expect(
        screen.getByRole("heading", {
          name: "オンボーディング情報",
        })
      ).toBeInTheDocument();
    });

    test("has items", async () => {
      const screen = render(<OnboardingFormStory />);

      [
        "初回コンサル開始時刻",
        "初回コンサル担当(メイン)",
        "初回コンサル担当(サブ)",
        "キックオフ実施場所",
        "特別事項欄",
        "本質的価値の利用方法",
        "本質的価値のAPI",
        "現在的価値の利用方法",
        "現在的価値のAPI",
        "サービス内容",
        "サービス資料",
      ].forEach((label) =>
        expect(
          screen.getByRole("textbox", {
            name: label,
          })
        ).toBeInTheDocument()
      );

      expect(
        screen.getByRole("button", {
          name: "前ページに戻る",
        })
      ).toBeInTheDocument();

      expect(
        screen.getByRole("button", {
          name: "次ページに遷移",
        })
      ).toBeInTheDocument();
    });
  });

  describe("form function", () => {
    test("success", async () => {
      const onSubmit = jest.fn();
      const onError = jest.fn();
      const screen = render(
        <ThemeProvider theme={createTheme()}>
          <Contents onSubmit={onSubmit} onError={onError} backPage={() => {}} />
        </ThemeProvider>
      ); // TODO: remove ThemeProvider

      await userEvent.click(
        screen.getByRole("button", {
          name: "次ページに遷移",
        })
      );
      await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
      await waitFor(() => expect(onError).not.toHaveBeenCalled());
    });
    test.todo("failure");
    test.todo("validations");
  });
});
