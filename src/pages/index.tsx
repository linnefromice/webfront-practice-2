import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const IndexPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/paidMemberMng/matterForm/create");
  }, [router]);

  return <></>;
};

export default IndexPage;
