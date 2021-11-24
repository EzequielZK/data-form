import React from "react";
import { FormButton } from "../../../components";
import Input from "../../../components/input/Input";
import Form from "../../../lib/form/Form";
import { inputCelMask, inputMaskCPF } from "../../../lib/masks/Masks";
import { saveDataRequest } from "../request/saveDataRequest";
import cssStyles from "../styles/formView.module.css";

export default function FormView() {
  return (
    <div className={cssStyles.container}>
      <Form onSubmit={saveDataRequest} clearOnSubmit>
        <Input
          name="name"
          label="Name"
          placeholder="Type your first name"
          required="Please, inform your name"
        />
        <Input
          name="surname"
          label="Surname"
          placeholder="Type your surname"
          required="Please, inform your surname"
        />
        <Input
          name="cpf"
          label="CPF"
          placeholder="000.000.000-00"
          test="cpf"
          required="Please, inform your cpf"
          mask={inputMaskCPF}
        />
        <Input
          name="cel"
          label="Cellphone"
          placeholder="(00) 0 0000-0000"
          test="cel"
          required="Please, inform your cellphone"
          mask={inputCelMask}
        />
        <Input
          name="email"
          label="Email"
          placeholder="Type your email"
          required="Please, inform your email"
          test="email"
        />
        <FormButton.Contained type="submit">Submit</FormButton.Contained>
      </Form>
    </div>
  );
}
