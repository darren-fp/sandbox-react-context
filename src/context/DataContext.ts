import { createContext } from "react";

const defaultValue = {
  data: {},
  error: "",
  loading: false,
  setData: (data: any) => {},
  setError: (error: string) => {},
  setLoading: (loading: boolean) => {},
};

export const DataContext = createContext(defaultValue);
