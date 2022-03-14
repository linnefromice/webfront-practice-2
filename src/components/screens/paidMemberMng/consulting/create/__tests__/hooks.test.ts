import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { useForm } from "../hooks";
import { REQUIRED_FORM_ITEM_VALUES } from "../mocks";

describe("useForm", () => {
  test("initial value", () => {
    const { result } = renderHook(() => useForm());
    expect(result.current.formInfo.currentPage).toBe("FORM");
    expect(result.current.formInfo.formData).toBeUndefined();
  });

  test(".closingForm", () => {
    const { result } = renderHook(() => useForm());
    act(() => result.current.closingForm(REQUIRED_FORM_ITEM_VALUES));
    expect(result.current.formInfo.currentPage).toBe("CONFIRMATION");
  });

  describe(".backPage", () => {
    test("When CONFIRMATION, back to FORM", () => {
      const { result } = renderHook(() => useForm());
      act(() => result.current.closingForm(REQUIRED_FORM_ITEM_VALUES));
      act(() => result.current.backPage());
      expect(result.current.formInfo.currentPage).toBe("FORM");
    });

    test("When FORM, not change", () => {
      const { result } = renderHook(() => useForm());
      act(() => result.current.backPage());
      expect(result.current.formInfo.currentPage).toBe("FORM");
    });
  });
});
