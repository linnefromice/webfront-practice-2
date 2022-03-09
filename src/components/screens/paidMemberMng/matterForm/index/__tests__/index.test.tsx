import { createTheme, ThemeProvider } from "@mui/material";
import { render } from "@testing-library/react";
import { IndexScreen } from "..";

describe("src/components/screens/paidMemberMng/matterForm/index", () => {
  test("has heading", async () => {
    const screen = render(
      <ThemeProvider theme={createTheme()}>
        <IndexScreen />
      </ThemeProvider>
    );
    expect(
      await screen.getByRole("heading", {
        name: "案件情報一覧",
      })
    ).toBeInTheDocument();
  });
});
