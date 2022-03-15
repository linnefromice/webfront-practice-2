import { DATAS } from "./mocks";

export const useGetFormData = (pageNum: number = 1, pageCount: number = 20) => {
  const startIndex = (pageNum - 1) * pageCount;
  const endIndex = pageNum * pageCount;
  return {
    datas: DATAS.slice(startIndex, endIndex),
  };
};
