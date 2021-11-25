import React from "react";
import Form from "../../../lib/form/Form";
import { inputCelMask, inputMaskCPF } from "../../../lib/masks/Masks";
import { getStorage, saveStorage } from "../../../service/storage";
import MainForm from "../../mainForm/MainForm";
import openModal from "../openModal";

export default function EditForm({ configs }) {
  const { firstname, lastname, cpf, phone, email, index } = configs;
  return (
    <Form
      onSubmit={(data) => {
        const storageKey = "usersList";
        const savedUsersList = getStorage(storageKey);
        savedUsersList.splice(index, 1, data);
        saveStorage(storageKey, savedUsersList);
      }}
    >
      <MainForm
        inputs={[
          {
            name: "firstname",
            label: "First name",
            placeholder: "Type your first name",
            required: "Please, inform your name",
            defaultValue: firstname,
          },
          {
            name: "lastname",
            label: "Last name",
            placeholder: "Type your surname",
            required: "Please, inform your surname",
            defaultValue: lastname,
          },
          {
            name: "cpf",
            label: "CPF",
            placeholder: "000.000.000-00",
            test: "cpf",
            required: "Please, inform your cpf",
            mask: inputMaskCPF,
            defaultValue: cpf,
          },
          {
            name: "phone",
            label: "Phone",
            placeholder: "(00) 0 0000-0000",
            test: "cel",
            required: "Please, inform your cellphone",
            mask: inputCelMask,
            defaultValue: phone,
          },
          {
            name: "email",
            label: "Email",
            placeholder: "Type your email",
            required: "Please, inform your email",
            test: "email",
            defaultValue: email,
          },
        ]}
        onClick={() =>
          openModal.successModal({ message: "Dados editados com sucesso!" })
        }
      />
    </Form>
  );
}
