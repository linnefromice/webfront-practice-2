import { createTheme, ThemeProvider } from "@mui/material";
import { render } from "@testing-library/react";
import { CreateScreen } from "..";

describe("src/components/screens/paidMemberMng/matterForm/create", () => {
  test("has heading", async () => {
    const screen = render(
      <ThemeProvider theme={createTheme()}>
        <CreateScreen />
      </ThemeProvider>
    );
    expect(
      await screen.getByRole("heading", {
        name: "案件情報フォーム",
      })
    ).toBeInTheDocument();
  });
});
