import { act, renderHook } from "@testing-library/react-hooks";
import { useMatterForm } from "../hooks";
import { FormData as ContractTypeFormData } from "./../ContractTypeForm/types";
import { FormData as FirstFormData } from "./../FirstForm/types";
import { FormData as PaymentMethodFormData } from "./../PaymentMethodForm/types";
import { FormData as SelectContractTypeFormData } from "./../SelectContractTypeForm/types";

const dummyFirstFormData: FirstFormData = {
  introducer: "",
  contractDate: "",
  contractType: "",
  contractor: "",
  applicationFormData: [],
  businessCardPic: [],
  closingUrl: "",
  closingUrlDescription: "",
  closingDocument: [],
  initialBillingAmount: "",
  initialBillingBreakdowns: [],
};
const dummySelectContractTypeFormData: SelectContractTypeFormData = {
  selectContractType: "ChiraCeo",
};
const dummyContractTypeFormData: ContractTypeFormData = {
  paymentMethod: "CreditCard",
};
const dummyPaymentMethodFormData: PaymentMethodFormData = {};

describe("useMatterForm", () => {
  test("initial value", () => {
    const { result } = renderHook(() => useMatterForm());
    expect(result.current.formInfo.currentPage).toBe("FIRST");
  });

  test(".closingFirstForm", () => {
    const { result } = renderHook(() => useMatterForm());

    act(() => result.current.closingFirstForm(dummyFirstFormData));

    expect(result.current.formInfo.currentPage).toBe("SELECT_CONTRACT_TYPE");
  });

  test(".closingSelectContractType", () => {
    const { result } = renderHook(() => useMatterForm());
    act(() =>
      result.current.closingSelectContractType(dummySelectContractTypeFormData)
    );
    expect(result.current.formInfo.currentPage).toBe("CONTRACT_TYPE");
  });

  test(".closingContractType", () => {
    const { result } = renderHook(() => useMatterForm());
    act(() => result.current.closingContractType(dummyContractTypeFormData));
    expect(result.current.formInfo.currentPage).toBe("PAYMENT_METHOD");
  });

  test(".closingPaymentMethod", () => {
    const { result } = renderHook(() => useMatterForm());
    act(() => result.current.closingPaymentMethod(dummyPaymentMethodFormData));
    expect(result.current.formInfo.currentPage).toBe("ONBOARDING");
  });

  describe(".backPage", () => {
    test("When SELECT_CONTRACT_TYPE, back to FIRST", () => {
      const { result } = renderHook(() => useMatterForm());
      act(() => result.current.closingFirstForm(dummyFirstFormData));
      act(() => result.current.backPage());
      expect(result.current.formInfo.currentPage).toBe("FIRST");
    });

    test("When CONTRACT_TYPE, back to SELECT_CONTRACT_TYPE", () => {
      const { result } = renderHook(() => useMatterForm());
      act(() =>
        result.current.closingSelectContractType(
          dummySelectContractTypeFormData
        )
      );
      act(() => result.current.backPage());
      expect(result.current.formInfo.currentPage).toBe("SELECT_CONTRACT_TYPE");
    });

    test("When PAYMENT_METHOD, back to CONTRACT_TYPE", () => {
      const { result } = renderHook(() => useMatterForm());
      act(() => result.current.closingContractType(dummyContractTypeFormData));
      act(() => result.current.backPage());
      expect(result.current.formInfo.currentPage).toBe("CONTRACT_TYPE");
    });

    test("When ONBOARDING, back to PAYMENT_METHOD", () => {
      const { result } = renderHook(() => useMatterForm());
      act(() =>
        result.current.closingPaymentMethod(dummyPaymentMethodFormData)
      );
      act(() => result.current.backPage());
      expect(result.current.formInfo.currentPage).toBe("PAYMENT_METHOD");
    });

    test("When FIRST, not change", () => {
      const { result } = renderHook(() => useMatterForm());
      act(() => result.current.backPage());
      expect(result.current.formInfo.currentPage).toBe("FIRST");
    });
  });

  describe(".getContractType", () => {
    test("When save contractType, get this type", () => {
      const selectContractType = "ChiraCeo";
      const { result } = renderHook(() => useMatterForm());
      act(() =>
        result.current.closingSelectContractType({
          selectContractType,
        })
      );
      expect(result.current.getContractType()).toBe(selectContractType);
    });

    test("When do not save contractType, get undefined", () => {
      const { result } = renderHook(() => useMatterForm());
      expect(result.current.getContractType()).toBe(undefined);
    });
  });
});
