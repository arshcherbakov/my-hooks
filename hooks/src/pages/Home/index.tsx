import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import './style.css'

const public_gists_url: string = `https://api.github.com/gists/public`;
const rate_limit_url: string  = `https://api.github.com/emojis`;

const Home: React.FC = <T,>() => {  
  const [urlCurrent, setUrlCurrent] = useState<string>(public_gists_url);

  const {    
    isLoading,
    response,
    error } = useFetch<T | T[]>(urlCurrent);

  const handleButton = (url: string): void => {
    setUrlCurrent(url);
  }

  return (
    <div className="wrapper">
      <div className="wrapper-container-button">
        <button onClick={()=> handleButton(public_gists_url)}>Гисты</button>
        <button onClick={()=> handleButton(rate_limit_url)}>Лимит</button>
      </div>
      {error.message && (
        <h1 className="error-message">Ошибка: {error.message}</h1>
      )}

      {isLoading ? 
        <h2>Загрузка...</h2>  
        :
        <ul className="wrapper-list">
           {urlCurrent === public_gists_url  && Array.isArray(response)  ?
              response?.map((item: any) => <li key={item.id}>{item.description}</li>) 
              :
              response && Object.keys(response).map((key, index: number) => <li key={index}>{key}</li>)}
        </ul>  
      }
    </div>
  )
};

export default Home;
