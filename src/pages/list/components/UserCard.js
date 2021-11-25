import React from "react";
import cssStyle from "../styles/userCard.module.css";

export default function UserCard({ name, surname, cpf, cel, email }) {
  return (
    <div className={cssStyle.container}>
      <div className={cssStyle.infoContainer}>
        <span>Name:</span>
        <span>{name}</span>
      </div>
      <div className={cssStyle.infoContainer}>
        <span>Surname:</span>
        <span>{surname}</span>
      </div>
      <div className={cssStyle.infoContainer}>
        <span>CPF:</span>
        <span>{cpf}</span>
      </div>
      <div className={cssStyle.infoContainer}>
        <span>Cel:</span>
        <span>{cel}</span>
      </div>
      <div className={cssStyle.infoContainer}>
        <span>Email:</span>
        <span>{email}</span>
      </div>
    </div>
  );
}
