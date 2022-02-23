import { Theme, useMediaQuery } from "@mui/material";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <>
      {isMobile ? <h1>MOBILE</h1> : <h1>WEB</h1>}
      <h1>Contents Area</h1>
    </>
  );
};

export default IndexPage;
