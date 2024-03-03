import { useSelector, useDispatch } from "react-redux";
import { LabState } from "../../../store";
function TodoRedux() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);
  return (
    <div>
      <h1>Hello Redux</h1>
      <h2></h2>
    </div>
  );
}
export default TodoRedux;