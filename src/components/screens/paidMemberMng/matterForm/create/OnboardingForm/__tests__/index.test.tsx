import { createTheme, ThemeProvider } from "@mui/material";
import { composeStories } from "@storybook/testing-react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contents } from "..";
import * as stories from "../OnboardingForm.stories";

describe("src/components/screens/paidMemberMng/matterForm/create/OnboardingForm", () => {
  const { OnboardingForm: OnboardingFormStory } = composeStories(stories);

  describe("display elements", () => {
    test("has items", async () => {
      const screen = render(<OnboardingFormStory />);

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
  });
});
