import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

import { clearObjectEmptyStrings } from "shared";

type SearchData = Partial<Omit<Ticket, "resolveText" | "description">>;

export const useSearchForm = () => {
  const { register, handleSubmit, reset } = useForm<SearchData>();
  const [params, setParams] = useSearchParams();

  const initialValue: SearchData = {};

  const queryParams = params.entries();

  for (const item of queryParams) {
    //@ts-ignore
    initialValue[item[0]] = item[1];
  }

  const onSearch = (data: SearchData) => {
    setParams(clearObjectEmptyStrings(data));
  };

  const onSubmit = handleSubmit(onSearch);

  const clearParams = () => {
    reset();
    setParams();
  };

  return { register, onSubmit, clearParams, initialValue };
};
