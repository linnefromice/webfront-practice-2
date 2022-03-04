import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";
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
});
