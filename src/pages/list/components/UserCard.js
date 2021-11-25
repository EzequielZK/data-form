import React from "react";
import openModal from "../../../components/modal/openModal";
import { getStorage, saveStorage } from "../../../service/storage";
import cssStyle from "../styles/userCard.module.css";

export default function UserCard({
  firstname,
  lastname,
  cpf,
  phone,
  email,
  index,
}) {
  return (
    <div
      onClick={() =>
        openModal.chooseModal({
          text: "Choose an action:",
          buttons: [
            {
              label: "Edit info",
              onClick: () =>
                openModal.editForm({
                  firstname,
                  lastname,
                  cpf,
                  phone,
                  email,
                  index,
                }),
              style: "Contained",
            },
            {
              label: "Delete info",
              onClick: () => {
                const storageKey = "usersList";
                const savedUsersList = getStorage(storageKey);
                savedUsersList.splice(index, 1);
                saveStorage(storageKey, savedUsersList);
                openModal.successModal({
                  message: "Dados deletados com sucesso!",
                });
              },
              style: "Outlined",
            },
          ],
        })
      }
      className={cssStyle.container}
    >
      <div>
        <span>First name:</span>
        <span>{firstname}</span>
      </div>
      <div>
        <span>Last name:</span>
        <span>{lastname}</span>
      </div>
      <div>
        <span>CPF:</span>
        <span>{cpf}</span>
      </div>
      <div>
        <span>Phone:</span>
        <span>{phone}</span>
      </div>
      <div>
        <span>Email:</span>
        <span>{email}</span>
      </div>
    </div>
  );
}
