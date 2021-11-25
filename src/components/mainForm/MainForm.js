import React from "react";
import { FormButton, Input } from "..";
import cssStyles from "./mainForm.module.css";

export default function MainForm({ inputs = [], onClick }) {
  return (
    <div className={cssStyles.container}>
      {inputs.map((item, index) => (
        <Input
          key={index}
          name={item.name}
          label={item.label}
          placeholder={item.placeholder}
          required={item.required}
          defaultValue={item.defaultValue}
          mask={item.mask}
          test={item.test}
        />
      ))}

      <FormButton.Contained onClick={onClick} type="submit">Submit</FormButton.Contained>
    </div>
  );
}
