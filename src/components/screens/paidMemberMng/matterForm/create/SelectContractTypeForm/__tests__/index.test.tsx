import { createTheme, ThemeProvider } from "@mui/material";
import { composeStories } from "@storybook/testing-react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contents } from "..";
import * as stories from "../SelectContractTypeForm.stories";

describe("src/components/screens/paidMemberMng/matterForm/create/SelectContractTypeForm", () => {
  const { SelectContractTypeForm: SelectContractTypeFormStory } =
    composeStories(stories);

  describe("display elements", () => {
    test("has items", async () => {
      const screen = render(<SelectContractTypeFormStory />);

      expect(
        screen.getByRole("radiogroup", {
          name: /新規案件種別/i,
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
          <Contents onSubmit={onSubmit} onError={onError} />
        </ThemeProvider>
      ); // TODO: remove ThemeProvider

      await userEvent.click(
        screen.getByRole("radio", {
          name: /レターゲット/i,
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
          <Contents onSubmit={onSubmit} onError={onError} />
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
