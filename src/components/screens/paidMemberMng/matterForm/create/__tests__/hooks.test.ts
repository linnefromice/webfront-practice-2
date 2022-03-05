import { act, renderHook } from "@testing-library/react-hooks";
import { useMatterForm } from "../hooks";

describe("useMatterForm", () => {
  test("initial value", () => {
    const { result } = renderHook(() => useMatterForm());
    expect(result.current.formInfo.currentPage).toBe("FIRST");
  });

  test(".closingFirstForm", () => {
    const { result } = renderHook(() => useMatterForm());

    act(() =>
      result.current.closingFirstForm({
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
      })
    );

    expect(result.current.formInfo.currentPage).toBe("SELECT_CONTRACT_TYPE");
  });

  test(".closingSelectContractType", () => {
    const { result } = renderHook(() => useMatterForm());
    act(() =>
      result.current.closingSelectContractType({
        selectContractType: "ChiraCeo",
      })
    );
    expect(result.current.formInfo.currentPage).toBe("CONTRACT_TYPE");
  });

  test(".closingContractType", () => {
    const { result } = renderHook(() => useMatterForm());
    act(() =>
      result.current.closingContractType({
        paymentMethod: "CreditCard",
      })
    );
    expect(result.current.formInfo.currentPage).toBe("PAYMENT_METHOD");
  });

  test(".closingPaymentMethod", () => {
    const { result } = renderHook(() => useMatterForm());
    act(() => result.current.closingPaymentMethod({}));
    expect(result.current.formInfo.currentPage).toBe("ONBOARDING");
  });
});
