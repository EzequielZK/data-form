import React from "react";
import { getStorage } from "../../../service/storage";
import { UserCard } from "../components";
import { saveUsersList } from "../request/usersListRequest";
import cssStyles from "../styles/listView.module.css";

export default function ListView() {
  saveUsersList();

  const usersList = getStorage("usersList") ? getStorage("usersList") : [];
  console.log({ usersList });
  return (
    <div className={cssStyles.container}>
      {usersList.map((item, index) => (
        <UserCard
          name={item.firstname}
          surname={item.lastname}
          cpf={item.cpf}
          cel={item.phone}
          email={item.email}
        />
      ))}
    </div>
  );
}
