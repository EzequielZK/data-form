import React from "react";
import Input from "../../../components/input/Input";
import Form from "../../../lib/form/Form";
import { inputMaskCPF } from "../../../lib/masks/Masks";
import cssStyles from "../styles/formView.module.css";

export default function FormView() {
  return (
    <div className={cssStyles.container}>
      <Form>
        <Input name="name" label="Name" placeholder="First name" />
        <Input name="surname" label="Surname" placeholder="Surname" />
        <Input
          name="cpf"
          label="CPF"
          placeholder="CPF"
          test="cpf"
          mask={inputMaskCPF}
        />
        <Input name="cel" label="Celphone" placeholder="Cel" />
        <Input name="email" label="Email" placeholder="Email" />
      </Form>
    </div>
  );
}
