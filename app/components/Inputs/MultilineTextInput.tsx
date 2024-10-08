/* eslint-disable react/jsx-props-no-spreading */
import clsx from "clsx";
import {
  FieldPathByValue,
  FieldValues,
  useController,
  useFormContext,
} from "react-hook-form";

import { BaseInputProps, Input } from "./Input";

import "./Input.scss";

export function MultilineTextInput<
  TFieldValues extends FieldValues,
  TPath extends FieldPathByValue<TFieldValues, string>
>({
  inputName,
  label,
  rules,
  className,
  ...rest
}: BaseInputProps<TFieldValues, TPath> &
  React.InputHTMLAttributes<HTMLTextAreaElement>) {
  const { control } = useFormContext<TFieldValues>();
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name: inputName,
    rules,
  });
  const safeField = { ...field, value: field.value ?? "" }; // Ensure the value is never undefined

  return (
    <Input error={error} label={label} inputName={inputName}>
      <textarea
        className={clsx(
          "multi-line-input-container",
          { withError: error },
          className
        )}
        {...safeField}
        aria-label={inputName}
        aria-invalid={error ? "true" : "false"}
        {...rest}
      />
    </Input>
  );
}
