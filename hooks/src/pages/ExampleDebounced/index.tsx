import { useEffect, useRef, useState, ChangeEvent } from "react";
import { getUsers } from "../../services/user-service";
import useDebounce from "../../hooks/useDebounce";

type userType = {
  id: string;
  login: string;
};

const ExampleDebounced = <T,>() => {
  const [usersList, setUsersList] = useState<userType[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const [isReady, cancel] = useDebounce(
    async () => {
      const response: any = await getUsers(searchInput, 1);
      setUsersList(response.items);
    },
    2000,
    [searchInput]
  );

  const handlInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="App">
      <h1>{isReady}</h1>
      <input onChange={handlInput} />
      <button onClick={cancel}>Отмена</button>
      {usersList &&
        usersList.map((user: userType) => <p key={user.id}>{user.login}</p>)}
    </div>
  );
};

export default ExampleDebounced;
