import { createTheme, ThemeProvider } from "@mui/material";
import { composeStories } from "@storybook/testing-react";
import { render, RenderResult, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contents } from "..";
import { PaymentMethodKeyType } from "../../types";
import * as stories from "../PaymentMethodForm.stories";

const checkCommonItems = async (screen: RenderResult) => {
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

const checkToSubmitFailed = async (paymentMethod: PaymentMethodKeyType) => {
  const onSubmit = jest.fn();
  const onError = jest.fn();
  const screen = render(
    <ThemeProvider theme={createTheme()}>
      <Contents
        onSubmit={onSubmit}
        onError={onError}
        backPage={() => {}}
        paymentMethod={paymentMethod}
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

describe("src/components/screens/paidMemberMng/matterForm/create/PaymentMethodForm", () => {
  const { CreditCardForm: CreditCardFormStory } = composeStories(stories);

  describe("When CreditCard,", () => {
    describe("display elements", () => {
      test("has title", async () => {
        const screen = render(<CreditCardFormStory />);
        expect(
          screen.getByRole("heading", {
            name: "クレジットカード",
          })
        ).toBeInTheDocument;
      });
      test("has items", async () => {
        const screen = render(<CreditCardFormStory />);
        checkCommonItems(screen);
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
              paymentMethod={"CreditCard"}
            />
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

      test("failure", async () => await checkToSubmitFailed("CreditCard"));
    });
  });
});
