import { DataContext } from "context";
import { useAutoFetchContext } from "hooks";

const NestedComponent2A = () => {
  const { data, loading } = useAutoFetchContext(DataContext);

  return (
    <div className="nested-component-2A">
      <div>Nested Component 2A</div>
      <div>{loading ? "Loading..." : JSON.stringify(data)}</div>
    </div>
  );
};

export default NestedComponent2A;
