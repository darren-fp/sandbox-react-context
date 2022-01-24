import NestedComponent1A from "./NestedComponent1A";
import NestedComponent1B from "./NestedComponent1B";
import { useAutoFetchContext } from "hooks";
import { DataContext } from "context";

const Component1 = () => {
  const { data, loading } = useAutoFetchContext(DataContext);

  return (
    <div className="component-1">
      <div>Component 1</div>
      <div>{loading ? "Loading..." : JSON.stringify(data)}</div>
      <NestedComponent1A />
      <NestedComponent1B />
    </div>
  );
};

export default Component1;
