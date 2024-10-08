"use client";

import * as RadioGroup from "@radix-ui/react-radio-group";
import clsx from "clsx";
import {
  FieldPath,
  FieldValues,
  useController,
  useFormContext,
} from "react-hook-form";

import { BaseInputProps, Input } from "./Input";
import { SelectInputProps } from "./SelectInput";

import "./RadioInput.scss";

export function RadioInput<
  TFieldValues extends FieldValues,
  TPath extends FieldPath<TFieldValues>
>({
  inputName,
  label,
  options,
  rules,
}: SelectInputProps<TFieldValues> & BaseInputProps<TFieldValues, TPath>) {
  const { control } = useFormContext<TFieldValues>();
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name: inputName,
    rules,
  });

  return (
    <Input error={error} label={label} inputName={inputName}>
      <RadioGroup.Root
        className="radio-group-root"
        defaultValue={field.value}
        aria-label={inputName}
        aria-invalid={error ? "true" : "false"}
        onValueChange={field.onChange}
      >
        {options.map(({ optionLabel, value, disabled }) => (
          <div className="radio-option" key={optionLabel}>
            <RadioGroup.Item
              className={clsx("radio-group-item", disabled ? "disabled" : "")}
              value={value}
              id={optionLabel}
              disabled={disabled}
            >
              <RadioGroup.Indicator className="radio-group-indicator" />
            </RadioGroup.Item>
            <label className="option-label" htmlFor={optionLabel}>
              {optionLabel}
            </label>
          </div>
        ))}
      </RadioGroup.Root>
    </Input>
  );
}
