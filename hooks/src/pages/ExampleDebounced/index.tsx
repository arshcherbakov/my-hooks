import { useState, ChangeEvent } from "react";
import { getUsers } from "../../services/user-service";
import useDebounce from "../../hooks/useDebounce";

type userType = {
  id: string;
  login: string;
};

const ExampleDebounced = () => {
  const [usersList, setUsersList] = useState<userType[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const [, cancel] = useDebounce(
    async () => {
      const response: any = await getUsers(searchInput, 1);
      setUsersList(response.items);
    },
    1000,
    [searchInput]
  );

  const handlInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="App">
      <input onChange={handlInput} />
      <button onClick={cancel}>Отмена</button>
      {usersList &&
        usersList.map((user: userType) => <p key={user.id}>{user.login}</p>)}
    </div>
  );
};

export default ExampleDebounced;
