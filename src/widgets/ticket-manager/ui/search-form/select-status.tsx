import { Select, SelectProps } from "@chakra-ui/react";
import { forwardRef } from "react";

interface SelectOption {
  value: TicketStatus;
  label: string;
}

interface SelectStatusProps extends SelectProps {}

const options: SelectOption[] = [
  {
    value: "pending",
    label: "На рассмотрении",
  },
  {
    value: "resolved",
    label: "Одобрено",
  },
  {
    value: "rejected",
    label: "Отказано",
  },
];

export const SelectStatus = forwardRef((props: SelectStatusProps, ref) => {
  return (
    <Select placeholder="Статус тикета" {...props} ref={ref}>
      {options.map((item) => (
        <option value={item.value} key={item.value}>
          {item.label}
        </option>
      ))}
    </Select>
  );
});
