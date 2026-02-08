import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useQueryParams = () => {
  const queryParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const setQueryParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(queryParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    if (key !== "page") {
      params.set("page", "1");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return { queryParams, setQueryParam };
};

export default useQueryParams;
