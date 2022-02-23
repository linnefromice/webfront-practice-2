import { Theme, useMediaQuery } from "@mui/material";
import { NextPage } from "next";
import { useDrawerState } from "../libs/stores/useDrawer";

const IndexPage: NextPage = () => {
  const { open } = useDrawerState();

  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );

  return <>{isMobile ? <h1>MOBILE</h1> : <h1>WEB</h1>}</>;
};

export default IndexPage;
