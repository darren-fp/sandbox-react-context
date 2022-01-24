import { createContext } from "react";

const defaultValue = {
  data: {},
  error: "",
  loading: false,
  setData: (data: any) => {},
  setError: (error: string) => {},
  setLoading: (loading: boolean) => {},
  fetchData: () => new Promise((resolve) => resolve("")),
};

export const DataContext = createContext(defaultValue);
