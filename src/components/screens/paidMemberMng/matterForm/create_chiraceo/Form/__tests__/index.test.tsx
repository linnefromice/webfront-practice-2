import { createTheme, ThemeProvider } from "@mui/material";
import { composeStories } from "@storybook/testing-react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contents } from "..";
import { FormData } from "../../types";
import * as stories from "../Form.stories";

const REQUIRED_ITEM_VALUES: FormData = {
  otsunagiManager: "Example おつなぎ担当者",
  otsunagiMailAddress: "Example おつなぎメールアドレス",
  otsunagiManagerTelNumber: "00-0000-0000",
  otsunagiManagerRole: "Chairman",
  contactMethodWithOtsunagiManager: "Mail",
  operationStartDate: "20000101",
  contractEndDate: "20001231",
  plan: "NewLightPlan",
  needsInIntroduction: "AppointmentCuzNoConductor",
  valueSought: "Other",
  kpiMonthlyAppointments: "10",
  averageMonthlyUnitPrice: "150000",
  averageNumberOfContractMonths: "3",
  averageLeadTimeMonth: "LessThanThree",
  idealProductTarget: "Example 商材ターゲット",
  enableToBusinessAllianceAppointment: "OK",
  serviceThatCannotReceiveMutualProposal: "Other",
  resourceStatusInThreeMonth: "1",
  frontManager: "Example フロント担当者",
  employeeSize: "MoreThan3001",
  industry: "InformationTechnology",
  productCategory: "Other",
  serviceUrl: "Example サービスURL",
  introduction: "Example 紹介文",
};

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
    const setup = async ({
      filledRequiredItem,
    }: {
      filledRequiredItem?: boolean;
    } = {}) => {
      const onSubmit = jest.fn();
      const onError = jest.fn();
      const screen = render(
        <ThemeProvider theme={createTheme()}>
          <Contents
            onSubmit={onSubmit}
            onError={onError}
            defaultValues={
              filledRequiredItem ? REQUIRED_ITEM_VALUES : undefined
            }
          />
        </ThemeProvider>
      );
      return {
        screen,
        onSubmit,
        onError,
      };
    };

    describe("submit", () => {
      test("success", async () => {
        const { screen, onSubmit, onError } = await setup({
          filledRequiredItem: true,
        });
        await userEvent.click(
          screen.getByRole("button", {
            name: "確認画面へ遷移",
          })
        );
        await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
        await waitFor(() => expect(onError).not.toHaveBeenCalled());
      });
      test("failure", async () => {
        const { screen, onSubmit, onError } = await setup();
        await userEvent.click(
          screen.getByRole("button", {
            name: "確認画面へ遷移",
          })
        );
        await waitFor(() => expect(onSubmit).not.toHaveBeenCalled());
        await waitFor(() => expect(onError).toHaveBeenCalledTimes(1));
      });
    });
    describe("validations", () => {
      test.todo("validations");
    });
  });
});
