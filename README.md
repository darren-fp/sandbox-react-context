# Sandbox for React Context

### Notes

**useAutoFetchContext**

Custom hook fetches data from api call on mount and stores it in context state if data does not exist. Does nothing if data exists.

Returns an object `{data, error, loading}` from context object. Use this instead of calling `useContext` directly
