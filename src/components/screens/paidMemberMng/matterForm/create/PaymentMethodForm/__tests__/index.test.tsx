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
  const {
    CreditCardForm: CreditCardFormStory,
    InvoiceOnetimePaymentForm: InvoiceOnetimePaymentFormStory,
    InvoiceDividedPaymentForm: InvoiceDividedPaymentFormStory,
  } = composeStories(stories);

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

        expect(
          screen.getByRole("textbox", {
            name: /^初回引き落とし日/i,
          })
        ).toBeInTheDocument();
        expect(
          screen.getByRole("radiogroup", {
            name: /^支払いのサイクル/i,
          })
        ).toBeInTheDocument();
        expect(
          screen.getByRole("textbox", {
            name: /^その他\(支払いのサイクル\)/i,
          })
        ).toBeInTheDocument();
        expect(
          screen.getByRole("textbox", {
            name: /^その他経理チーム向け共有事項/i,
          })
        ).toBeInTheDocument();

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
              paymentMethod={"CreditCard"}
            />
          </ThemeProvider>
        ); // TODO: remove ThemeProvider

        const get = screen.getByRole;
        await userEvent.type(
          get("textbox", {
            name: /^初回引き落とし日/i,
          }),
          "20000101"
        );

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

  describe("When InvoiceOnetimePayment,", () => {
    describe("display elements", () => {
      test("has title", async () => {
        const screen = render(<InvoiceOnetimePaymentFormStory />);
        expect(
          screen.getByRole("heading", {
            name: "一括支払い(請求書発行)",
          })
        ).toBeInTheDocument;
      });
      test("has items", async () => {
        const screen = render(<InvoiceOnetimePaymentFormStory />);
        checkCommonItems(screen);
      });
    });

    describe("form function", () => {
      test.todo("success");
      test.todo("failure");
    });
  });

  describe("When InvoiceDividedPayment,", () => {
    describe("display elements", () => {
      test("has title", async () => {
        const screen = render(<InvoiceDividedPaymentFormStory />);
        expect(
          screen.getByRole("heading", {
            name: "分割支払い(請求書発行)",
          })
        ).toBeInTheDocument;
      });
      test("has items", async () => {
        const screen = render(<InvoiceDividedPaymentFormStory />);
        checkCommonItems(screen);
      });
    });

    describe("form function", () => {
      test.todo("success");
      test.todo("failure");
    });
  });
});
