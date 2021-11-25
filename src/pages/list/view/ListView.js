import React from "react";
import { CircularProgress } from "../../../components";
import { getStorage } from "../../../service/storage";
import { UserCard } from "../components";
import { saveUsersList } from "../request/usersListRequest";
import cssStyles from "../styles/listView.module.css";

export default function ListView() {
  const [usersList, setUsersList] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const storageKey = "usersList";
    if (!getStorage(storageKey)) {
      saveUsersList().then(() => {
        setUsersList(getStorage(storageKey));
        setLoading(false);
      });
    } else {
      setUsersList(getStorage(storageKey));
      setLoading(false);
    }
  }, []);

  return (
    <div className={cssStyles.container}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        usersList?.map((item, index) => (
          <UserCard
            key={`${item} - ${index}`}
            firstname={item.firstname}
            lastname={item.lastname}
            cpf={item.cpf}
            phone={item.phone}
            email={item.email}
            index={index}
          />
        ))
      )}
    </div>
  );
}
