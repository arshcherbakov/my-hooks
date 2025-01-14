import { useEffect, useState } from "react";

interface IError {
  message: string;
  error: object | null;
}

const initErrorState: IError ={
  message: '',
  error: null,
}

const useFetch = <T>(url : string) => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<IError>(initErrorState);

  useEffect(() => {
    if (!url) {
      setError({
        message: "Отсутствует url",
        error: null
      })

      return;
    };

    const conttroller = new AbortController();
    const signal: AbortSignal = conttroller.signal;

    const getData = async (): Promise<void> => {
      setLoading(true)
      setResponse(null);
      setError(initErrorState);

      try {
        const responseFetch: Response = await fetch(url, {
          signal
        });

        if (!responseFetch.ok) {
          throw new Error(`HTTP error! Status: ${responseFetch.status}`);
        }

        const responceData: T = await responseFetch.json();
      
        setResponse(responceData);
      } catch (err: unknown) {
        err instanceof DOMException && err.name === "AbortError" ? (
          console.warn("Запрос отменен")
        ) : (
          setError({
            message: "Отсутствует url",
            error: err instanceof Error ? { ...error } : null
          })
        );
      } finally {
        setLoading(false);
      }   
    }

    getData();

    return () => conttroller.abort();
  }, [url, error]);

  return {
    isLoading,
    response,
    error,
  }
}

export default useFetch;