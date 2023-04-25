import { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState({
    task: "",
    isComplited: false,
    hidden: false,
  });
  const [todoList, setTodoList] = useState([]);
  const [selected, setSelected] = useState("all");

  const handleFormInput = (e) => {
    setTodo((prevTodo) => {
      return { ...prevTodo, task: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList((prevTodoList) => {
      return [...prevTodoList, todo];
    });
    setTodo({ task: "", isComplited: false });
  };
  const handleToggle = (task, e) => {
    setTodoList(
      todoList.map((item) => {
        return item.task === task.task
          ? { ...item, isComplited: e.target.checked }
          : item;
      })
    );
  };
  const handleDelete = (task) => {
    setTodoList(todoList.filter((item) => item.task !== task.task));
  };
  const handleCompletedAll = () => {
    setTodoList(
      todoList.map((item) => {
        return { ...item, isComplited: true };
      })
    );
  };
  return (
    <>
      <div className="todoapp">
        <Header
          items={[todo, setTodo, todoList, setTodoList]}
          handleSubmit={handleSubmit}
          handleFormInput={handleFormInput}
        />
        <Main
          handleDelete={handleDelete}
          handleCompletedAll={handleCompletedAll}
          todoList={todoList}
          handleToggle={handleToggle}
        />
        <Footer
          todoList={todoList}
          setTodoList={setTodoList}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </>
  );
};
export default App;
