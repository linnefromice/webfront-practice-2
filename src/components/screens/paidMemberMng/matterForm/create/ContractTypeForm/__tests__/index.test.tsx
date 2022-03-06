import { createTheme, ThemeProvider } from "@mui/material";
import { composeStories } from "@storybook/testing-react";
import { render, RenderResult, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contents } from "..";
import { SelectContractKeyType } from "../../types";
import * as stories from "../ContractTypeForm.stories";

const checkCommonItems = (screen: RenderResult) => {
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
};

const checkToSubmitFailed = async (contractType: SelectContractKeyType) => {
  const onSubmit = jest.fn();
  const onError = jest.fn();
  const screen = render(
    <ThemeProvider theme={createTheme()}>
      <Contents
        onSubmit={onSubmit}
        onError={onError}
        backPage={() => {}}
        contractType={contractType}
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
};

describe("src/components/screens/paidMemberMng/matterForm/create/ContractTypeForm", () => {
  const {
    ChiraCeoForm: ChiraCeoFormStory,
    JoiningAgencyForm: JoiningAgencyFormStory,
    LetterMeasuresAndChiraCeoForm: LetterMeasuresAndChiraCeoFormStory,
    LetterGetForm: LetterGetFormStory,
  } = composeStories(stories);

  describe("When ChiraCeo,", () => {
    describe("display elements", () => {
      test("has title", async () => {
        const screen = render(<ChiraCeoFormStory />);

        expect(
          screen.getByRole("heading", {
            name: "チラCEO 新規",
          })
        ).toBeInTheDocument();
      });
      test("has items", async () => {
        const screen = render(<ChiraCeoFormStory />);
        checkCommonItems(screen);
      });
    });

    describe("form function", () => {
      test("success", async () => {
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

        const get = screen.getByRole;
        await userEvent.type(
          get("textbox", {
            name: /^企業名/i,
          }),
          "Sample Company"
        );
        await userEvent.type(
          get("textbox", {
            name: /^URL/i,
          }),
          "https://example.com/"
        );
        await userEvent.click(
          get("radio", {
            name: /^5名以下/i,
          })
        );
        await userEvent.type(
          get("textbox", {
            name: /^住所/i,
          }),
          "000 AVENUE OF THE AMERICAS, NEW YORK NY 00000-0000, USA"
        );
        await userEvent.type(
          get("textbox", {
            name: /^電話番号\(会社\)/i,
          }),
          "0000000000"
        );
        await userEvent.type(
          get("textbox", {
            name: /^担当者名/i,
          }),
          "Sample ManagerName"
        );
        await userEvent.type(
          get("textbox", {
            name: /^担当者メールアドレス/i,
          }),
          "example@example.com"
        );
        await userEvent.type(
          get("textbox", {
            name: /^先方経理担当者名/i,
          }),
          "Example AccountingRoleName"
        );
        await userEvent.type(
          get("textbox", {
            name: /^請求書送付先メールアドレス/i,
          }),
          "example-invoice@example.com"
        );
        await userEvent.type(
          get("textbox", {
            name: /^初期費用\(税抜\)/i,
          }),
          "120000"
        );
        await userEvent.type(
          get("textbox", {
            name: /^月額\(税抜\)/i,
          }),
          "10000"
        );

        await userEvent.click(
          screen.getByRole("radio", {
            name: /^クレジットカード/i,
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

      test("failure", async () => await checkToSubmitFailed("ChiraCeo"));
      test.todo("validations");
    });
  });

  describe("When JoiningAgencyForm,", () => {
    describe("display elements", () => {
      test("has title", async () => {
        const screen = render(<JoiningAgencyFormStory />);

        expect(
          screen.getByRole("heading", {
            name: "代理店加盟",
          })
        ).toBeInTheDocument();
      });
      test("has items", async () => {
        const screen = render(<JoiningAgencyFormStory />);
        checkCommonItems(screen);
      });
    });

    describe("form function", () => {
      test.todo("success");
      test("failure", async () => await checkToSubmitFailed("JoiningAgency"));
      test.todo("validations");
    });
  });

  describe("When LetterMeasuresAndChiraCeoForm,", () => {
    describe("display elements", () => {
      test("has title", async () => {
        const screen = render(<LetterMeasuresAndChiraCeoFormStory />);

        expect(
          screen.getByRole("heading", {
            name: "手紙施策 x チラCEO",
          })
        ).toBeInTheDocument();
      });
      test("has items", async () => {
        const screen = render(<LetterMeasuresAndChiraCeoFormStory />);
        checkCommonItems(screen);
      });
    });

    describe("form function", () => {
      test.todo("success");
      test("failure", async () =>
        await checkToSubmitFailed("LetterMeasuresAndChiraCeo"));
      test.todo("validations");
    });
  });

  describe("When LetterGetForm,", () => {
    describe("display elements", () => {
      test("has title", async () => {
        const screen = render(<LetterGetFormStory />);

        expect(
          screen.getByRole("heading", {
            name: "レターゲット",
          })
        ).toBeInTheDocument();
      });
      test("has items", async () => {
        const screen = render(<LetterGetFormStory />);
        checkCommonItems(screen);
      });
    });

    describe("form function", () => {
      test.todo("success");
      test("failure", async () => await checkToSubmitFailed("LetterGet"));
      test.todo("validations");
    });
  });
});
