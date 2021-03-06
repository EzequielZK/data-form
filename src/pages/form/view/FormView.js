import React from "react";
import { MainForm } from "../../../components";
import Form from "../../../lib/form/Form";
import { inputCelMask, inputMaskCPF } from "../../../lib/masks/Masks";
import { saveDataRequest } from "../request/saveDataRequest";

export default function FormView() {
  return (
    <Form onSubmit={saveDataRequest} clearOnSubmit>
      <MainForm
        inputs={[
          {
            name: "firstname",
            label: "First name",
            placeholder: "Type your first name",
            required: "Please, inform your name",
          },
          {
            name: "lastname",
            label: "Last name",
            placeholder: "Type your surname",
            required: "Please, inform your surname",
          },
          {
            name: "cpf",
            label: "CPF",
            placeholder: "000.000.000-00",
            test: "cpf",
            required: "Please, inform your cpf",
            mask: inputMaskCPF,
          },
          {
            name: "phone",
            label: "Phone",
            placeholder: "(00) 0 0000-0000",
            test: "cel",
            required: "Please, inform your cellphone",
            mask: inputCelMask,
          },
          {
            name: "email",
            label: "Email",
            placeholder: "Type your email",
            required: "Please, inform your email",
            test: "email",
          },
        ]}
      />
    </Form>
  );
}
