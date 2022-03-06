import { createTheme, ThemeProvider } from "@mui/material";
import { composeStories } from "@storybook/testing-react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contents } from "..";
import * as stories from "../FirstForm.stories";

describe("src/components/screens/paidMemberMng/matterForm/create/FirstForm", () => {
  const { FirstForm: FirstFormStory } = composeStories(stories);

  describe("display elements", () => {
    test("has items", async () => {
      const screen = render(<FirstFormStory />);
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

      expect(
        screen.getByRole("button", {
          name: "次ページに遷移",
        })
      ).toBeInTheDocument();
    });
  });

  describe("form function", () => {
    describe("submit", () => {
      test("success", async () => {
        const onSubmit = jest.fn();
        const onError = jest.fn();
        const screen = render(
          <ThemeProvider theme={createTheme()}>
            <Contents onSubmit={onSubmit} onError={onError} />
          </ThemeProvider>
        ); // TODO: remove ThemeProvider

        const get = screen.getByRole;
        await userEvent.type(
          get("textbox", {
            name: /契約日/i,
          }),
          "20000101"
        );
        await userEvent.click(
          get("radio", {
            name: /新規/i,
          })
        );
        await userEvent.type(
          get("textbox", {
            name: /契約獲得者/i,
          }),
          "Test User"
        );
        await userEvent.type(
          get("textbox", {
            name: /初回請求額/i,
          }),
          "200000"
        );
        await userEvent.click(
          get("button", {
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
        const submitButton = screen.getByRole("button", {
          name: "次ページに遷移",
        });
        await userEvent.click(
          screen.getByRole("button", {
            name: "次ページに遷移",
          })
        );
        await waitFor(() => expect(onSubmit).not.toHaveBeenCalled());
        await waitFor(() => expect(onError).toHaveBeenCalledTimes(1));
      });
    });

    describe("validations", () => {
      describe("契約日", () => {
        test.todo("required");
        test.todo("format");
      });
      test.todo("契約種別 - required");
      test.todo("契約獲得者 - required");
      describe("初回請求額", () => {
        test.todo("required");
        test.todo("amount > 0");
      });
    });
  });
});
