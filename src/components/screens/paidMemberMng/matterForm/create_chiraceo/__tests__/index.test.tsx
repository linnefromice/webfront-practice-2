import { createTheme, ThemeProvider } from "@mui/material";
import { render } from "@testing-library/react";
import { CreateChiraceoScreen } from "..";

describe("src/components/screens/paidMemberMng/matterForm/create_chiraceo", () => {
  test("has heading", async () => {
    const screen = render(
      <ThemeProvider theme={createTheme()}>
        <CreateChiraceoScreen />
      </ThemeProvider>
    );
    expect(
      await screen.getByRole("heading", {
        name: "チラCEO初回ヒアリングフォーム",
      })
    ).toBeInTheDocument();
  });
});
