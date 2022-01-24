import { useContext, useEffect } from "react";
import { DataContext } from "../context";

export const useAutoFetchContext = () => {
  const { data, error, loading, setData, setError, setLoading } =
    useContext(DataContext);

  const fetchData = async () => {
    if (!data) {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(() => resolve(""), 5000)); // Wait for 5 seconds to simulate api loading
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err as string);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, loading };
};
