import React, { useContext, useEffect } from "react";

interface AutoFetchContext {
  data: any;
  error: string;
  loading: boolean;
  setData: (data: any) => void;
  setError: (error: string) => void;
  setLoading: (loading: boolean) => void;
  fetchData: () => Promise<any>;
}

export const useAutoFetchContext = (
  context: React.Context<AutoFetchContext>
) => {
  const { data, error, loading, setData, setError, setLoading, fetchData } =
    useContext(context);

  useEffect(() => {
    (async () => {
      if (!data) {
        setLoading(true);
        try {
          await new Promise((resolve) => setTimeout(() => resolve(""), 5000)); // Wait for 5 seconds to simulate api loading
          const data = await fetchData();
          setData(data);
        } catch (err) {
          setError(err as string);
        } finally {
          setLoading(false);
        }
      }
    })();
  }, []);

  return { data, error, loading };
};
