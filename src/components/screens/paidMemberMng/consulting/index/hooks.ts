import { useState } from "react";
import { DATAS } from "./mocks";

export const useGetFormData = () => {
  const [loadCount, setLoadCount] = useState(0);
  const perNumber = 20;
  const [datas, setDatas] = useState(DATAS.slice(0, perNumber));

  const loadMore = () => {
    const _loadCount = loadCount + 1;
    setDatas([
      ...datas,
      ...DATAS.slice(_loadCount * perNumber, (_loadCount + 1) * perNumber),
    ]);
    setLoadCount(_loadCount);
  };

  return {
    datas,
    loadMore,
  };
};
