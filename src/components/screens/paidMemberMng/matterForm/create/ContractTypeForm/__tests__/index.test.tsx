import { createTheme, ThemeProvider } from "@mui/material";
import { composeStories } from "@storybook/testing-react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contents } from "..";
import * as stories from "../ContractTypeForm.stories";

describe("src/components/screens/paidMemberMng/matterForm/create/ContractTypeForm", () => {
  const { ChiraCeoForm: ChiraCeoFormStory } = composeStories(stories);

  describe("When ChiraCeo,", () => {
    describe("display elements", () => {
      test("has items", async () => {
        const screen = render(<ChiraCeoFormStory />);

        expect(
          screen.getByRole("radiogroup", {
            name: /支払方法/i,
          })
        ).toBeInTheDocument();
        expect(
          screen.getByRole("textbox", {
            name: /※ 支払方法がその他の場合は入力/i,
          })
        ).toBeInTheDocument();

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
      test.skip("success", async () => {
        const onSubmit = jest.fn();
        const onError = jest.fn();
        const screen = render(
          <ThemeProvider theme={createTheme()}>
            <Contents
              onSubmit={onSubmit}
              onError={onError}
              backPage={() => {}}
              contractType={"ChiraCeo"}
            />
          </ThemeProvider>
        ); // TODO: remove ThemeProvider

        await userEvent.click(
          screen.getByRole("radio", {
            name: /クレジットカード/i,
          })
        );
        await userEvent.click(
          screen.getByRole("button", {
            name: "次ページに遷移",
          })
        );
        await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
        await waitFor(() => expect(onError).not.toHaveBeenCalled());
      });

      test("failure", async () => {
        const onSubmit = jest.fn();
        const onError = jest.fn();
        const screen = render(
          <ThemeProvider theme={createTheme()}>
            <Contents
              onSubmit={onSubmit}
              onError={onError}
              backPage={() => {}}
              contractType={"ChiraCeo"}
            />
          </ThemeProvider>
        ); // TODO: remove ThemeProvider
        await userEvent.click(
          screen.getByRole("button", {
            name: "次ページに遷移",
          })
        );
        await waitFor(() => expect(onSubmit).not.toHaveBeenCalled());
        await waitFor(() => expect(onError).toHaveBeenCalledTimes(1));
      });
    });
  });
});
