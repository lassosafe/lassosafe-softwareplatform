import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";

import "./SelectDropdown.scss";

export type SelectOption<TValue> = {
  id: TValue;
  name: string;
};

type SelectDropdownProps<TValue> = Readonly<{
  options: SelectOption<TValue>[];
  onSelectedChange: (selected: SelectOption<TValue>) => void;
  containerClass?: string;
  className?: string;
  initialValue?: SelectOption<TValue>;
  // there are use cases where the selected item will be changed outside the dropdown, e.g. outside arrows
  // this is where updatedValue would be used
  updatedValue?: SelectOption<TValue>;
  title?: string;
}>;

export function SelectDropdown<TValue>({
  options,
  onSelectedChange,
  containerClass,
  className,
  initialValue,
  updatedValue,
  title,
}: SelectDropdownProps<TValue>) {
  const [selectedItem, setSelectedItem] = useState<SelectOption<TValue>>();
  const [open, setOpen] = useState<boolean>(false);

  const onOptionToggle = useCallback(
    (id: TValue) => {
      console.log("options onoptiontoggle: ", options);
      const newSelectedItem = options.find((option) => option.id === id);
      if (newSelectedItem) {
        setSelectedItem(newSelectedItem);
        onSelectedChange(newSelectedItem);
      }
      setOpen(false);
      console.log("end onoptionstoggle, ", options);
    },
    [onSelectedChange, options]
  );

  useEffect(() => {
    if (initialValue && !selectedItem) {
      setSelectedItem(options.find((option) => option.id === initialValue.id));
    }
  }, [initialValue, selectedItem, options]);

  useEffect(() => {
    if (
      updatedValue &&
      JSON.stringify(updatedValue) !== JSON.stringify(selectedItem)
    ) {
      setSelectedItem(options.find((option) => option.id === updatedValue.id));
    }
  }, [updatedValue, selectedItem, options]);

  const checkboxItem = useCallback(
    (option: SelectOption<TValue>) => {
      const checked = selectedItem ? selectedItem.id === option.id : false;
      return (
        <DropdownMenu.CheckboxItem
          key={option.name}
          className="select-dropdown-checkbox-item"
          checked={checked}
          onCheckedChange={() => onOptionToggle(option.id)}
          onSelect={(e) => e.preventDefault()} // Prevent dropdown close
        >
          <div className={clsx({ checked })}>{option.name}</div>
        </DropdownMenu.CheckboxItem>
      );
    },
    [onOptionToggle, selectedItem]
  );

  return (
    <div className={clsx("select-dropdown", containerClass)}>
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger
          className={clsx(className, "select-dropdown-trigger")}
        >
          <b>{title}</b>
          {<b>{title}</b> && ":"} {selectedItem?.name ?? initialValue?.name}
          {open ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          className="select-dropdown-content"
          sideOffset={10}
          align="start"
        >
          {options.map(checkboxItem)}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
