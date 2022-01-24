import { useAutoFetchContext } from "hooks";

const NestedComponent2B = () => {
  const { data, loading } = useAutoFetchContext();

  return (
    <div className="nested-component-2B">
      <div>Nested Component 2B</div>
      <div>{loading ? "Loading..." : JSON.stringify(data)}</div>
    </div>
  );
};

export default NestedComponent2B;
