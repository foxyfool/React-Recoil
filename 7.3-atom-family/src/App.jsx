import "./App.css";
import { RecoilRoot, useRecoilState } from "recoil";
import { todosAtomFamily } from "./atoms";
import { useEffect } from "react";

function App() {
  return (
    <RecoilRoot>
      <UpdatedComponent />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={4} />
      <Todo id={5} />
    </RecoilRoot>
  );
}

function UpdatedComponent() {
  const [updatedTodo, setUpdatedTodo] = useRecoilState(todosAtomFamily(2));
  // creates it once and then returns the same instance every
  //       time it is called
  useEffect(() => {
    setTimeout(() => {
      setUpdatedTodo({
        id: 2,
        title: "Updated title",
        description: "Updated description",
      });
    }, 5000);
  }, []);
  return <div></div>;
}

function Todo({ id }) {
  const [todo] = useRecoilState(todosAtomFamily(id));
  // pass in the id to get the specific todo

  return (
    <>
      <p>{todo.title}</p>
      <p>{todo.description}</p>
      <br />
    </>
  );
}

export default App;
