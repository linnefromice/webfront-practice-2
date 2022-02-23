import { composeStories } from "@storybook/testing-react";
import { render, within } from "@testing-library/react";
import * as stories from "../Drawer.stories";

describe("Drawer", () => {
  const { Drawer } = composeStories(stories);

  test("has contents", async () => {
    const screen = render(<Drawer />);
    expect(screen.getByText("Onlystory")).toBeInTheDocument();
    expect(screen.getByText("inhouse app")).toBeInTheDocument();
    expect(screen.getByRole("separator")).toBeInTheDocument();
    expect(
      within(screen.getByRole("listitem")).getByText("有料会員管理")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "案件情報" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "コンサルティング" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "マッチング" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "マッチング成果報告" })
    ).toBeInTheDocument();
  });
});
